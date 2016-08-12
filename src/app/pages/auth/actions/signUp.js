import { auth } from '../../../actions/user'
import * as actions from '../constants/signUp'

export function change(field, value) {
  return {
    type: actions.change,
    field,
    value,
  }
}

export function register() {
  return async (dispatch, getState, { post }) => {
    const { email, password, passwordConfirmation } = getState().auth.signUp

    const json = {
      email,
      password: {
        value: password,
        confirmation: passwordConfirmation,
      },
    }

    const { result, response } = await post('users/register', { json })

    if (response.ok) {
      dispatch(auth(result))
    }
  }
}
