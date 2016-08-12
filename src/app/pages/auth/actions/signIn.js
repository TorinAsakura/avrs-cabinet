import { auth } from '../../../actions/user'
import * as actions from '../constants/signIn'

export function change(field, value) {
  return {
    type: actions.change,
    field,
    value,
  }
}

export function signIn() {
  return async (dispatch, getState, { post }) => {
    const { email, password } = getState().auth.signIn

    const { result, response } = await post('users/auth', { json: { email, password } })

    if (response.ok) {
      dispatch(auth(result))
    }
  }
}
