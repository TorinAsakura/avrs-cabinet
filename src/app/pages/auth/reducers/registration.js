import { createReducer, formatErrors } from '../../../../utils'
import * as actions from '../constants/registration'

const initialState = {
  email: '',
  firstName: '',
  lastName: '',
  password: '',
  passwordConfirmation: '',
  inviteCode: '',
  errors: {},
}

export default createReducer(initialState, {
  [actions.change]: (state, { field, value }) => ({ ...state, [field]: value }),
  [actions.setErrors]: (state, { errors }) => ({ ...state, errors: formatErrors(errors) }),
})
