import gql from 'graphql-tag'
import { auth } from '../../../actions/user'
import * as actions from '../constants/login'
import { init } from '../../../actions/init'

export function change(field, value) {
  return {
    type: actions.change,
    field,
    value,
  }
}

export function login() {
  return async (dispatch, getState, client) => {
    const { email, password } = getState().auth.login

    const { data } = await client.mutate({
      mutation: gql`
        mutation loginUser($email: String!, $password: String!) {
          loginUser(email: $email, password: $password) {
            token { id, email, token }
            errors {
              key
              message
            }
          }
        }
      `,
      variables: {
        email,
        password,
      },
    })

    if (data.loginUser.errors.length > 0) {
      dispatch({
        type: actions.setErrors,
        errors: data.loginUser.errors,
      })
    } else {
      dispatch(auth(data.loginUser.token))
      dispatch(init())
    }
  }
}
