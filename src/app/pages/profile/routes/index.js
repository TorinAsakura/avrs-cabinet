import Profile from '../containers/Profile'
import GeneralInformation from '../containers/GeneralInformation'

export default function getRoutes() {
  return {
    path: 'profile',
    component: Profile,
    onEnter: ({ location }, replace) => {
      if (location.pathname === '/profile') {
        replace('/profile/general_information')
      }
    },
    childRoutes: [
      {
        path: 'general_information',
        component: GeneralInformation,
      },
    ],
  }
}
