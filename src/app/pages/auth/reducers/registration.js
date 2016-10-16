import { createReducer } from '../../../../utils'
import * as actions from '../constants/registration'

const initialState = {
  email: '',
  firstName: '',
  lastName: '',
  password: '',
  passwordConfirmation: '',
  errors: {},
}

export default createReducer(initialState, {
  [actions.change]: (state, { field, value }) => ({ ...state, [field]: value }),
  [actions.setErrors]: (state, { errors }) => {
    const invalid = {}

    if (errors.email) {
      invalid.email = errors.email.message
    }

    if (errors.firstName) {
      invalid.firstName = errors.firstName.message
    }

    if (errors.lastName) {
      invalid.lastName = errors.lastName.message
    }

    if (errors.password) {
      if (errors.password.value) {
        invalid.password = errors.password.value.message
      }

      if (errors.password.confirmation) {
        invalid.passwordConfirmation = errors.password.confirmation.message
      }
    }

    return { ...state, errors: invalid }
  },
})
