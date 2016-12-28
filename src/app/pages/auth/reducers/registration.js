import { createReducer, formatErrors } from '../../../../utils'
import * as actions from '../constants/registration'

const initialState = {
  step: 0,
  email: '',
  firstName: '',
  lastName: '',
  password: '',
  passwordConfirmation: '',
  inviteCode: '',
  phone: '',
  sex: 'male',
  birthday: '',
  country: '',
  captcha: '',
  agreement: false,
  errors: {},
}

export default createReducer(initialState, {
  [actions.change]: (state, { field, value }) => ({ ...state, [field]: value }),
  [actions.setErrors]: (state, { errors }) => ({ ...state, errors: formatErrors(errors) }),
  [actions.setLocation]: (state, { country }) => ({ ...state, country }),
  [actions.goToCommon]: state => ({ ...state, step: 0 }),
  [actions.goToPersonal]: state => ({ ...state, step: 1 }),
  [actions.goToSuccess]: state => ({ ...state, step: 2 }),
  [actions.clear]: () => initialState,
})
