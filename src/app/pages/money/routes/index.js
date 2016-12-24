import { load as loadRental } from '../actions/rental'
import { load as loadReferal } from '../actions/referal'
import { load as loadHistory } from '../actions/history'
import { clear as clearInternal } from '../actions/internalTransfer'
import { clear as clearExternal } from '../actions/externalTransfer'
import Money from '../containers/Money'
import Rental from '../containers/Rental'
import Referal from '../containers/Referal'
import OperationsHistory from '../containers/OperationsHistory'
import InternalTransfer from '../containers/InternalTransfer'
import ExternalTransfer from '../containers/ExternalTransfer'

export default function getRoutes({ dispatch }) {
  return [{
    path: 'money',
    component: Money,
    onEnter(nextState, replace) {
      if (nextState.location.pathname === '/money') {
        replace('/money/rent')
      }
    },
    childRoutes: [{
      path: 'rent',
      component: Rental,
      onEnter() {
        dispatch(loadRental())
      },
    }, {
      path: 'referal',
      component: Referal,
      onEnter() {
        dispatch(loadReferal())
      },
    }, {
      path: 'bonuses',
      component: Rental,
    }, {
      path: 'operations_history',
      component: OperationsHistory,
      onEnter() {
        dispatch(loadHistory())
      },
    }],
  }, {
    path: 'transfer/internal',
    component: InternalTransfer,
    onLeave() {
      dispatch(clearInternal())
    },
  }, {
    path: 'transfer/external',
    component: ExternalTransfer,
    onLeave() {
      dispatch(clearExternal())
    },
  }]
}
