import moment from 'moment'
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
    const birthday = moment(variables.birthday, 'DD.MM.YYYY', true)

    const { data } = await client.mutate({
      mutation: gql`
        mutation userGeneralInformation (
          $email: String!,
          $firstName: String!,
          $lastName: String!,
          $phone: String,
          $sex: String,
          $birthday: String,
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
        birthday: birthday.isValid() ? birthday.toDate() : '',
      },
    })

    if (data.userGeneralInformation.errors.length > 0) {
      dispatch({
        type: actions.setErrors,
        errors: data.userGeneralInformation.errors,
      })
    } else {
      dispatch(updateUser(data.userGeneralInformation.user))
      dispatch({ type: actions.setErrors, errors: [] })
    }
  }
}

export function changeWithdraw(field, value) {
  return {
    type: actions.changeWithdraw,
    field,
    value,
  }
}

export function saveWithdraw() {
  return async (dispatch, getState, client) => {
    const { cardNumber, btcAddress } = getState().profile.withdraw

    const { data } = await client.mutate({
      mutation: gql`
        mutation userWithdrawInformation ($cardNumber: String, $btcAddress: String) {
          userWithdrawInformation (cardNumber: $cardNumber, btcAddress: $btcAddress) {
            user {
              cardNumber
              btcAddress
            }
            errors {
              key
              message
            }
          }
        }
      `,
      variables: {
        cardNumber,
        btcAddress,
      },
    })

    if (data.userWithdrawInformation.errors.length > 0) {
      dispatch({
        type: actions.setWithdrawErrors,
        errors: data.userWithdrawInformation.errors,
      })
    } else {
      dispatch(updateUser(data.userWithdrawInformation.user))
      dispatch({ type: actions.setWithdrawErrors, errors: [] })
    }
  }
}
