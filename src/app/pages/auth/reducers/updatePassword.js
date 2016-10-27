import { createReducer, formatErrors } from '../../../../utils'
import * as actions from '../constants/updatePassword'

const initialState = {
  password: {
    value: '',
    confirmation: '',
  },
  errors: {},
}

export default createReducer(initialState, {
  [actions.change]: (state, { field, value }) => ({ ...state, password: { ...state.password, [field]: value } }),
  [actions.setErrors]: (state, { errors }) => ({ ...state, errors: formatErrors(errors) }),
})
