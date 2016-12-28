import moment from 'moment'
import { createReducer } from '../../../../utils'
import * as actions from '../constants/referal'
import { getPackage } from './utils'

const initialState = {
  operations: [],
}

export default createReducer(initialState, {
  [actions.load]: (state, { operations }) => ({
    ...state,
    operations: operations.map(operation => ({
      ...operation,
      percent: operation.percent * 100,
      package: getPackage(operation.package),
      date: moment(new Date(operation.date)).format('YYYY-MM-DD'),
      participant: `${operation.participant.firstName} ${operation.participant.lastName}`,
    })),
  }),
})
