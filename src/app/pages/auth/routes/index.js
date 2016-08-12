import Auth from '../components/Auth'
import SignIn from '../containers/SignIn'
import SignUp from '../containers/SignUp'

export default function getRoutes() {
  return {
    component: Auth,
    path: 'auth',
    childRoutes: [
      {
        path: 'sign_in',
        component: SignIn,
      },
      {
        path: 'sign_up',
        component: SignUp,
      },
    ],
  }
}
