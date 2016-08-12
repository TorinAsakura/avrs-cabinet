import App from '../containers/App'
import Container from '../containers/Container'
import home from '../pages/home/routes'
import auth from '../pages/auth/routes'
import profile from '../pages/profile/routes'

export default function getRoutes(store) {
  return {
    path: '/',
    getComponent(nextState, callback) {
      if (/^\/auth/.test(nextState.location.pathname)) {
        callback(null, Container)
      } else {
        callback(null, App)
      }
    },
    onEnter(nextState, replace) {
      if (/^\/auth/.test(nextState.location.pathname)) {
        if (store.getState().user.token) {
          replace({
            pathname: '/',
          })
        }
      } else {
        if (!store.getState().user.token) {
          replace({
            pathname: '/auth/sign_in',
          })
        }
      }
    },
    indexRoute: home(store),
    childRoutes: [
      auth(store),
      profile(store),
    ],
  }
}
