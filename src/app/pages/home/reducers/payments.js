import moment from 'moment'
import { createReducer } from '../../../../utils'
import * as actions from '../constants'

const initialState = {
  loaded: false,
  rental: {
    id: 'rental',
    stroke: '#00BB27',
    title: 'Аренда',
    values: [],
  },
  referal: {
    id: 'referal',
    stroke: '#0288D1',
    title: 'Сеть',
    values: [],
  },
}

export default createReducer(initialState, {
  [actions.loadPayments]: (state, { stat: { rental, referal } }) => ({
    ...state,
    loaded: true,
    rental: {
      ...state.rental,
      values: rental.map(item => ({ ...item, date: moment(new Date(item.date)).startOf('day').toDate() })),
    },
    referal: {
      ...state.referal,
      values: referal.map(item => ({ ...item, date: moment(new Date(item.date)).startOf('day').toDate() })),
    },
  }),
})
