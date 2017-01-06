import { createReducer } from '../../../../../utils'
import * as actions from '../../constants/externalTransfer'

const initialState = {
  step: 0,
  method: null,
  card: {
    number: '',
    amount: '0.00',
  },
  bitcoin: {
    number: '',
    amount: '0.00',
  },
  errors: {},
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
  [actions.changeBitcoin]: (state, { field, value }) => ({
    ...state,
    bitcoin: {
      ...state.bitcoin,
      [field]: value,
    },
  }),
  [actions.setLocalErrors]: (state, { errors }) => ({ ...state, errors }),
  [actions.paymentSuccess]: state => ({ ...state, step: 2 }),
  [actions.clear]: () => initialState,
})
