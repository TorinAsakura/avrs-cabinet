import { createReducer } from '../../utils'
import * as actions from '../constants/user'

const initialState = {
  token: undefined,
}

export default createReducer(initialState, {
  [actions.auth]: (state, { user }) => user,
})
