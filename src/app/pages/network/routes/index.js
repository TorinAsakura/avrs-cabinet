import { load as loadDirect } from '../actions/direct'
import { load as loadTop } from '../actions/top'
import { load as loadHierarchy, loadReferal } from '../actions/hierarchy'
import Network from '../containers/Network'
import Direct from '../containers/Direct'
import Top from '../containers/Top'
import Hierarchy from '../containers/Hierarchy'
import Referal from '../containers/referal/Referal'
import Stat from '../components/referal/Stat'

export default function getRoutes({ dispatch }) {
  return {
    path: 'network',
    component: Network,
    onEnter({ location }, replace) {
      if (location.pathname === '/network') {
        replace('/network/top')
      }
    },
    childRoutes: [{
      path: 'top',
      component: Top,
      onEnter() {
        dispatch(loadTop())
      },
    }, {
      path: 'direct',
      component: Direct,
      onEnter() {
        dispatch(loadDirect())
      },
    }, {
      path: 'tree',
      component: Hierarchy,
      onEnter() {
        dispatch(loadHierarchy())
      },
      childRoutes: [{
        path: ':id',
        component: Referal,
        onEnter({ params }) {
          dispatch(loadReferal(params.id))
        },
        childRoutes: [{
          path: 'stat',
          component: Stat,
        }],
      }],
    }],
  }
}
