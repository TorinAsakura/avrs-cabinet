import { createReducer } from '../../../../utils'
import * as actions from '../constants/resetPassword'

const initialState = {
  email: '',
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
