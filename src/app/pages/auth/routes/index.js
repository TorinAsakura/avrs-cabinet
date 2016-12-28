import { loadLocation, setInviteCode } from '../actions/registration'
import Auth from '../containers/Auth'
import Login from '../containers/Login'
import Registration from '../containers/Registration'
import ResetPassword from '../containers/ResetPassword'
import UpdatePassword from '../containers/UpdatePassword'

export default function getRoutes({ dispatch }) {
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
        onEnter({ location }) {
          dispatch(loadLocation())
          dispatch(setInviteCode(location))
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
