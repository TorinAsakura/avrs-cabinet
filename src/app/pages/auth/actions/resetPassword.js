import gql from 'graphql-tag'
import * as actions from '../constants/resetPassword'

export function change(field, value) {
  return {
    type: actions.change,
    field,
    value,
  }
}

export function reset() {
  return async (dispatch, getState, client) => {
    const { email } = getState().auth.resetPassword
    const resetUrl = `${window.location.origin}/#/auth/update_password/`

    const { data } = await client.mutate({
      mutation: gql`
        mutation resetUserPassword($email: String!, $resetUrl: String!) {
          resetUserPassword(email: $email, resetUrl: $resetUrl) {
            errors {
              key
              message
            }
          }
        }
      `,
      variables: {
        email,
        resetUrl,
      },
    })

    if (data.resetUserPassword.errors.length > 0) {
      dispatch({
        type: actions.setErrors,
        errors: data.resetUserPassword.errors,
      })
    } else {
      window.location.hash = '/auth/login'
    }
  }
}
