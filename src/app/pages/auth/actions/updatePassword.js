import gql from 'graphql-tag'
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
  return async (dispatch, getState, client) => {
    const { value, confirmation } = getState().auth.updatePassword.password
    const { token } = getState().router.params

    const { data } = await client.mutate({
      mutation: gql`
        mutation {
          updateUserPassword(
            password: {
              value: "${value}",
              confirmation: "${confirmation}"
            },
            token: "${token}"
          ) {
            token { id, email, token }
            errors {
              key
              message
            }
          }
        }
      `,
    })

    if (data.updateUserPassword.errors.length > 0) {
      dispatch({
        type: actions.setErrors,
        errors: data.updateUserPassword.errors,
      })
    } else {
      dispatch(auth(data.updateUserPassword.token))
    }
  }
}
