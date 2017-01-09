import { createReducer, formatErrors } from '../../../../utils'
import * as actions from '../constants'

const initialState = {
  cardNumber: '',
  btcAddress: '',
  errors: {},
}

export default createReducer(initialState, {
  [actions.sync]: (state, { user }) => ({ ...state, ...user }),
  [actions.changeWithdraw]: (state, { field, value }) => ({ ...state, [field]: value }),
  [actions.setWithdrawErrors]: (state, { errors }) => ({ ...state, errors: formatErrors(errors) }),
})
