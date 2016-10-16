import { auth } from '../../../actions/user'
import * as actions from '../constants/login'

export function change(field, value) {
  return {
    type: actions.change,
    field,
    value,
  }
}

export function login() {
  return async (dispatch, getState, { post }) => {
    const { email, password } = getState().auth.login

    const { result, response } = await post('users/auth', { json: { email, password } })

    if (response.ok) {
      dispatch(auth(result))
    } else if (response.status === 422) {
      dispatch({
        type: actions.setErrors,
        errors: result,
      })
    }
  }
}
