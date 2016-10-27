import { createReducer } from '../../utils'
import * as actions from '../constants/communicator'

const initialState = {}

export default createReducer(initialState, {
  [actions.event]: (state, { event, data }) => {
    if (event === 'stat') {
      return data
    }

    return state
  },
})
