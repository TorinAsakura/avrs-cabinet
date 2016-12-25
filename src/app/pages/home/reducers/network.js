import moment from 'moment'
import { createReducer } from '../../../../utils'
import * as actions from '../constants'

const initialState = {
  loaded: false,
  connections: {
    id: 'connections',
    stroke: '#00BB27',
    title: 'Подключения к сети',
    values: Array.from(Array(8).keys()).map(day => ({
      date: moment().subtract(day, 'days').startOf('day').toDate(),
      amount: 0,
    })),
  },
  activations: {
    id: 'activations',
    stroke: '#0288D1',
    title: 'Активации',
    values: Array.from(Array(8).keys()).map(day => ({
      date: moment().subtract(day, 'days').startOf('day').toDate(),
      amount: 0,
    })),
  },
}

export default createReducer(initialState, {
  [actions.loadNetwork]: (state, { stat: { connections, activations } }) => ({
    ...state,
    loaded: true,
    connections: {
      ...state.connections,
      values: connections.map(item => ({ ...item, date: moment(new Date(item.date)).startOf('day').toDate() })),
    },
    activations: {
      ...state.activations,
      values: activations.map(item => ({ ...item, date: moment(new Date(item.date)).startOf('day').toDate() })),
    },
  }),
})
