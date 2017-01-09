import { sync } from '../actions'
import Profile from '../containers/Profile'
import GeneralInformation from '../containers/GeneralInformation'
import Withdraw from '../containers/Withdraw'

export default function getRoutes({ dispatch }) {
  return {
    path: 'profile',
    component: Profile,
    onEnter: ({ location }, replace) => {
      if (location.pathname === '/profile') {
        replace('/profile/general_information')
      }

      dispatch(sync())
    },
    childRoutes: [
      {
        path: 'general_information',
        component: GeneralInformation,
      },
      {
        path: 'withdraw',
        component: Withdraw,
      },
    ],
  }
}
