import Auth from '../components/Auth'
import Login from '../containers/Login'
import Registration from '../containers/Registration'
import ResetPassword from '../containers/ResetPassword'
import UpdatePassword from '../containers/UpdatePassword'

export default function getRoutes({ getState }) {
  return {
    component: Auth,
    path: 'auth',
    childRoutes: [
      {
        path: 'login',
        component: Login,
      },
      {
        path: 'registration',
        component: Registration,
      },
      {
        path: 'activate/:token',
        onEnter({ params = {} }, replace) {
          if (getState().user.token) {
            replace({ pathname: '/' })
          } else {
            replace({ pathname: '/auth/login' })
          }
        },
      },
      {
        path: 'reset_password',
        component: ResetPassword,
      },
      {
        path: 'update_password/:token',
        component: UpdatePassword,
      },
    ],
  }
}
