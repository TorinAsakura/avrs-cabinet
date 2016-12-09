import moment from 'moment'
import { createReducer } from '../../../../utils'
import * as actions from '../constants/direct'

const initialState = {
  users: [],
}

export default createReducer(initialState, {
  [actions.load]: (state, { users }) => ({
    ...state,
    users: users.map(user => ({
      ...user,
      createdAt: moment(new Date(user.createdAt)).format('YYYY-MM-DD'),
    })),
  }),
})
