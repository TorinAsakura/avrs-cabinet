import { createReducer } from '../../../../utils'
import * as actions from '../constants/signUp'

const initialState = {
  email: '',
  password: '',
  passwordConfirmation: '',
}

export default createReducer(initialState, {
  [actions.change]: (state, { field, value }) => ({ ...state, [field]: value }),
})
