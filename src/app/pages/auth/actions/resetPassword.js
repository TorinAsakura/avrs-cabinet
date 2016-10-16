import * as actions from '../constants/resetPassword'

export function change(field, value) {
  return {
    type: actions.change,
    field,
    value,
  }
}

export function reset() {
  return async (dispatch, getState, { post }) => {
    const { email } = getState().auth.resetPassword
    const resetUrl = `${window.location.origin}/#/auth/update_password/`

    const { result, response } = await post('users/reset_password', { json: { email, resetUrl } })

    if (response.ok) {
      window.location.hash = '/auth/login'
    } else if (response.status === 422) {
      dispatch({
        type: actions.setErrors,
        errors: result,
      })
    } else if (response.status === 404) {
      dispatch({
        type: actions.setErrors,
        errors: {
          email: result,
        },
      })
    }
  }
}
