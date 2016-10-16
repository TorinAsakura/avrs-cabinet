import { createReducer } from '../../../../utils'
import * as actions from '../constants/login'

const initialState = {
  email: '',
  password: '',
  errors: {},
}

export default createReducer(initialState, {
  [actions.change]: (state, { field, value }) => ({ ...state, [field]: value }),
  [actions.setErrors]: (state, { errors }) => {
    const invalid = {}

    if (errors.email) {
      invalid.email = errors.email.message
    }

    return { ...state, errors: invalid }
  },
})
