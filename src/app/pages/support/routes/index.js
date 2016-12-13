import { load } from '../actions/list'
import { load as loadDetail } from '../actions/detail'
import List from '../containers/List'
import CreateRequest from '../containers/CreateRequest'
import Detail from '../containers/Detail'

export default function getRoutes({ dispatch }) {
  return [{
    path: 'support',
    onEnter() {
      dispatch(load())
    },
    indexRoute: {
      component: List,
    },
    childRoutes: [{
      path: 'new',
      component: CreateRequest,
    }, {
      path: ':id',
      component: Detail,
      onEnter({ params }) {
        dispatch(loadDetail(params.id))
      },
    }],
  }]
}
