import { createReducer } from '../../../../../utils'
import * as actions from '../../constants/externalTransfer'

const initialState = {
  step: 0,
  method: null,
  card: {
    number: '',
    amount: '0.00',
  },
}

export default createReducer(initialState, {
  [actions.changeMethod]: (state, { method }) => ({
    ...state,
    step: 1,
    method,
  }),
  [actions.changeCard]: (state, { field, value }) => ({
    ...state,
    card: {
      ...state.card,
      [field]: value,
    },
  }),
  [actions.paymentSuccess]: state => ({ ...state, step: 2 }),
  [actions.clear]: () => initialState,
})
