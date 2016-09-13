import { auth } from '../../../actions/user'
import * as actions from '../constants/registration'

export function change(field, value) {
  return {
    type: actions.change,
    field,
    value,
  }
}

export function register() {
  return async (dispatch, getState, { post }) => {
    const { email, firstName, lastName, password, passwordConfirmation } = getState().auth.registration
    const activateUrl = `${window.location.origin}/#/auth/activate/`

    const json = {
      email,
      firstName,
      lastName,
      password: {
        value: password,
        confirmation: passwordConfirmation,
      },
      activateUrl,
    }

    const { result, response } = await post('users/register', { json })

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
