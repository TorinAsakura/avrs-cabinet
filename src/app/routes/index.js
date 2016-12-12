import App from '../containers/App'
import Container from '../containers/Container'
import home from '../pages/home/routes'
import auth from '../pages/auth/routes'
import profile from '../pages/profile/routes'
import beginning from '../pages/beginning/routes'
import servicePlans from '../pages/ServicePlans/routes'
import money from '../pages/money/routes'
import network from '../pages/network/routes'
import support from '../pages/support/routes'

export default function getRoutes(store) {
  return {
    component: Container,
    childRoutes: [
      auth(store),
      {
        path: '/',
        component: App,
        indexRoute: home(store),
        childRoutes: [
          beginning(store),
          profile(store),
          servicePlans(store),
          money(store),
          network(store),
          ...support(store),
        ],
      },
    ],
  }
}
