import moment from 'moment'
import humanizeDuration from 'humanize-duration'
import { createReducer } from '../../utils'
import * as actions from '../constants/user'

const initialState = {
  token: undefined,
  balance: 0,
  activations: [],
  isNew: true,
}

export const formatLeftTime = (leftTime) => {
  if (moment.duration(leftTime, 'seconds').asDays() < 1) {
    return humanizeDuration(leftTime * 1000, { language: 'ru', units: ['h'], round: true })
  }

  return humanizeDuration(leftTime * 1000, { language: 'ru', units: ['d'], round: true })
}

export const formatActivation = activation => ({
  ...activation,
  leftTime: formatLeftTime(activation.leftTime),
  isInactive: activation.status === 'INACTIVE',
  isActive: activation.status === 'ACTIVE',
  isStopped: activation.status === 'STOPPED',
})

export const sortActivations = (a) => {
  if (a.status === 'ACTIVE') {
    return -1
  } else if (a.status === 'STOPPED') {
    return 0
  }

  return 1
}

export default createReducer(initialState, {
  [actions.auth]: (state, { user }) => user,
  [actions.logout]: () => initialState,
  [actions.load]: (state, { user }) => ({
    ...state,
    ...user,
    isNew: user.status === 'NEW',
    activations: user.activations.sort(sortActivations).map(formatActivation),
  }),
  [actions.updateActivation]: (state, { activation }) => ({
    ...state,
    activations: state.activations.map((item) => {
      if (item.id === activation.id) {
        return formatActivation({ ...item, ...activation })
      }

      return item
    }),
  }),
})
