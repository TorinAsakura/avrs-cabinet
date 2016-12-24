import gql from 'graphql-tag'
import { auth } from '../../../actions/user'
import * as actions from '../constants/registration'

const send = async (client, variables) => {
  const { inviteCode } = variables
  const activateUrl = `${window.location.origin}/#/auth/activate/`

  const { data } = await client.mutate({
    mutation: gql`
      mutation createUser (
        $email: String!,
        $firstName: String!,
        $lastName: String!,
        $password: String!,
        $passwordConfirmation: String!,
        $inviteCode: String,
        $phone: String!,
        $country: String!,
        $sex: String!,
        $birthday: String!,
        $captcha: String!,
        $agreement: Boolean!,
        $activateUrl: String!
      ) {
        createUser(
          email: $email,
          firstName: $firstName,
          lastName: $lastName,
          password: {
            value: $password,
            confirmation: $passwordConfirmation,
          },
          inviteCode: $inviteCode,
          phone: $phone,
          country: $country,
          sex: $sex,
          birthday: $birthday,
          captcha: $captcha,
          agreement: $agreement,
          activateUrl: $activateUrl
        ) {
          token { id, email, token }
          errors {
            key
            message
          }
        }
      }
    `,
    variables: {
      ...variables,
      activateUrl,
      inviteCode: (inviteCode && inviteCode.length > 0) ? inviteCode : '',
    },
  })

  return data.createUser
}

export function change(field, value) {
  return {
    type: actions.change,
    field,
    value,
  }
}

export function loadLocation() {
  return async (dispatch) => {
    try {
      const response = await fetch('http://freegeoip.net/json/')
      const { country_code: country } = await response.json()

      if (country) {
        dispatch({
          type: actions.setLocation,
          country,
        })
      }
    } catch (error) { } // eslint-disable-line no-empty
  }
}

export function nextStep() {
  return async (dispatch, getState, client) => {
    const variables = getState().auth.registration

    const { errors } = await send(client, variables)

    const firstStepFields = ['firstName', 'lastName', 'email', 'password', 'inviteCode']
    const errorsList = errors.reduce((result, { key }) => result.concat(key), [])

    const hasErrors = firstStepFields.reduce((result, field) => {
      if (errorsList.includes(field)) {
        return true
      }

      return result
    }, false)

    if (!hasErrors) {
      dispatch({
        type: actions.goToPersonal,
      })

      dispatch({
        type: actions.setErrors,
        errors: [],
      })
    } else {
      const firstStepErrors = errors.filter(error => error.key.filter(key => firstStepFields.includes(key)).length > 0)

      dispatch({
        type: actions.setErrors,
        errors: firstStepErrors,
      })
    }
  }
}

export function register() {
  return async (dispatch, getState, client) => {
    const variables = getState().auth.registration

    const { errors, token } = await send(client, variables, true)

    if (errors.length > 0) {
      dispatch({
        type: actions.setErrors,
        errors,
      })
    } else {
      dispatch(auth(token))

      window.location.href = '/'
    }
  }
}

export function prevStep() {
  return {
    type: actions.goToCommon,
  }
}
