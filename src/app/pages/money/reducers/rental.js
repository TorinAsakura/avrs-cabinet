import moment from 'moment'
import { createReducer } from '../../../../utils'
import * as actions from '../constants/rental'
import { getPackage } from './utils'

const initialState = {
  operations: [],
}

export default createReducer(initialState, {
  [actions.load]: (state, { operations }) => ({
    ...state,
    operations: operations.map(operation => ({
      ...operation,
      date: moment(new Date(operation.date)).format('YYYY-MM-DD'),
      time: moment().startOf('day').seconds(operation.time).format('H:mm:ss'),
      package: getPackage(operation.package),
    })),
  }),
})
