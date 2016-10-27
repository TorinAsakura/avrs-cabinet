import gql from 'graphql-tag'
import { auth } from '../../../actions/user'
import { init } from '../../../actions/init'
import * as actions from '../constants/registration'

export function change(field, value) {
  return {
    type: actions.change,
    field,
    value,
  }
}

export function register() {
  return async (dispatch, getState, client) => {
    const { email, firstName, lastName, password, passwordConfirmation, inviteCode } = getState().auth.registration
    const activateUrl = `${window.location.origin}/#/auth/activate/`

    const { data } = await client.mutate({
      mutation: gql`
        mutation {
          createUser(
            email: "${email}",
            firstName: "${firstName}",
            lastName: "${lastName}",
            password: {
              value: "${password}",
              confirmation: "${passwordConfirmation}"
            },
            inviteCode: "${(inviteCode && inviteCode.length > 0) ? inviteCode : ''}",
            activateUrl: "${activateUrl}"
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

    if (data.createUser.errors.length > 0) {
      dispatch({
        type: actions.setErrors,
        errors: data.createUser.errors,
      })
    } else {
      dispatch(auth(data.createUser.token))
      dispatch(init())
    }
  }
}
