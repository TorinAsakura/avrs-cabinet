import moment from 'moment'
import countriesData from 'i18n-iso-countries/langs/ru.json'
import { createReducer } from '../../../../utils'
import * as actions from '../constants/direct'
import { getPosition, getStatus } from './utils'

const initialState = {
  users: [],
}

export default createReducer(initialState, {
  [actions.load]: (state, { users }) => ({
    ...state,
    users: users.map(user => ({
      ...user,
      status: getStatus(user.status),
      country: countriesData[user.country],
      position: getPosition(user.salesBalance),
      createdAt: moment(new Date(user.createdAt)).format('YYYY-MM-DD'),
    })),
  }),
})
