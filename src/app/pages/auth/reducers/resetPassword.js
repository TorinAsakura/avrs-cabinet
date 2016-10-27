import { createReducer, formatErrors } from '../../../../utils'
import * as actions from '../constants/resetPassword'

const initialState = {
  email: '',
  errors: {},
}

export default createReducer(initialState, {
  [actions.change]: (state, { field, value }) => ({ ...state, [field]: value }),
  [actions.setErrors]: (state, { errors }) => ({ ...state, errors: formatErrors(errors) }),
})
