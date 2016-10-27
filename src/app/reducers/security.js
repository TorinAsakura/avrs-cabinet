import { createReducer } from '../../utils'
import * as actions from '../constants/security'

const initialState = {
  token: null,
}

export default createReducer(initialState, {
  [actions.auth]: (state, { auth }) => ({ ...state, ...auth }),
  [actions.clear]: () => initialState,
})
