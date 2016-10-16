import { auth } from '../../../actions/user'
import * as actions from '../constants/updatePassword'

export function change(field, value) {
  return {
    type: actions.change,
    field,
    value,
  }
}

export function update() {
  return async (dispatch, getState, { post }) => {
    const { password, passwordConfirmation } = getState().auth.updatePassword
    const { token } = getState().router.params

    const json = {
      password: {
        value: password,
        confirmation: passwordConfirmation,
      },
      token,
    }

    const { result, response } = await post('users/update_password', { json })

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
