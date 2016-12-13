import { load as loadRental } from '../actions/rental'
import { load as loadReferal } from '../actions/referal'
import Money from '../containers/Money'
import Rental from '../containers/Rental'
import Referal from '../containers/Referal'
import OperationsHistory from '../components/OperationsHistory'

export default function getRoutes(store) {
  return {
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
        store.dispatch(loadRental())
      },
    }, {
      path: 'referal',
      component: Referal,
      onEnter() {
        store.dispatch(loadReferal())
      },
    }, {
      path: 'bonuses',
      component: Rental,
    }, {
      path: 'operations_history',
      component: OperationsHistory,
    }],
  }
}
