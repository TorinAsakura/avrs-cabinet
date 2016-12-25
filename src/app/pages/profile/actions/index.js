import gql from 'graphql-tag'
import * as actions from '../constants'
import { update as updateUser } from '../../../actions/user'

export function sync() {
  return async (dispatch, getState) => {
    dispatch({
      type: actions.sync,
      user: getState().user,
    })
  }
}

export function changeGeneral(field, value) {
  return {
    type: actions.changeGeneral,
    field,
    value,
  }
}

export function saveGeneral() {
  return async (dispatch, getState, client) => {
    const variables = getState().profile.general

    const { data } = await client.mutate({
      mutation: gql`
        mutation userGeneralInformation (
          $email: String!,
          $firstName: String!,
          $lastName: String!,
          $phone: String,
          $sex: String,
          $birthday: String,
          $address: String,
          $country: String,
          $receiveEmails: Boolean!,
          $receiveAnnouncements: Boolean!
        ) {
          userGeneralInformation (
            email: $email,
            firstName: $firstName,
            lastName: $lastName,
            phone: $phone,
            sex: $sex,
            birthday: $birthday,
            address: $address,
            country: $country,
            receiveEmails: $receiveEmails,
            receiveAnnouncements: $receiveAnnouncements
          ) {
            user {
              email
              firstName
              lastName
              phone
              sex
              birthday
              address
              country
            }
            errors {
              key
              message
            }
          }
        }
      `,
      variables: {
        ...variables,
      },
    })

    if (data.userGeneralInformation.errors.length > 0) {
      dispatch({
        type: actions.setErrors,
        errors: data.userGeneralInformation.errors,
      })
    } else {
      dispatch(updateUser(data.userGeneralInformation.user))
    }
  }
}
