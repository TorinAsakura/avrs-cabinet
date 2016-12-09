import { createReducer } from '../../utils'
import * as actions from '../constants/config'

const initialState = {
  landingUrl: window.location.origin.replace('cabinet.', ''),
  initialized: false,
}

export default createReducer(initialState, {
  [actions.init]: state => ({ ...state, initialized: true }),
})
