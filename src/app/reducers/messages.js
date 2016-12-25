import { createReducer } from '../../utils'
import * as actions from '../constants/messages'

const initialState = []

export default createReducer(initialState, {
  [actions.send]: (state, { key, message }) => state.concat([{ key, message }]),
  [actions.dismiss]: (state, { key }) => state.filter(message => key !== message.key),
})
