import * as actions from '../constants/user'

export function auth(user) {
  return async dispatch => {
    dispatch({
      type: actions.auth,
      user,
    })

    window.location.hash = '/'
  }
}
