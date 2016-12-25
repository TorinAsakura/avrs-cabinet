import { createReducer } from '../../../../../utils'
import * as actions from '../../constants/internalTransfer'

const initialState = {
  amount: '0.00',
  success: false,
}

export default createReducer(initialState, {
  [actions.change]: (state, { amount }) => ({ ...state, amount }),
  [actions.paymentSuccess]: state => ({ ...state, success: true }),
  [actions.clear]: () => initialState,
})
