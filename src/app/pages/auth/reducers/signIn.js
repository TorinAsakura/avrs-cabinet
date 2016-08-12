import { createReducer } from '../../../../utils'
import * as actions from '../constants/signIn'

const initialState = {
  email: '',
  password: '',
}

export default createReducer(initialState, {
  [actions.change]: (state, { field, value }) => ({ ...state, [field]: value }),
})
