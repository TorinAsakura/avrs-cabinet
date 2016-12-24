import { createReducer } from '../../../../utils'
import * as actions from '../constants'

const initialState = {}

export default createReducer(initialState, {
  [actions.sync]: (state, { user }) => ({ ...state, ...user }),
})
