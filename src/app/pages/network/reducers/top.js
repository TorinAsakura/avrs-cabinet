import { createReducer } from '../../../../utils'
import * as actions from '../constants/top'
import { getPosition } from './utils'

const initialState = {
  users: [],
}

export default createReducer(initialState, {
  [actions.load]: (state, { users }) => ({
    ...state,
    users: users.map(user => ({
      ...user,
      position: getPosition(user.salesBalance),
    })),
  }),
})
