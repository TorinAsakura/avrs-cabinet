import gql from 'graphql-tag'
import { update as updateUser } from '../../../actions/user'
import * as actions from '../constants/internalTransfer'
import { load as loadHistory } from './history'

export function change(amount) {
  return {
    type: actions.change,
    amount,
  }
}

export function send() {
  return async (dispatch, getState, client) => {
    const { amount } = getState().money.transfer.internal
    const { referalBalance } = getState().user

    const value = parseFloat(amount)

    if (isNaN(value) || value <= 0) {
      dispatch({
        type: actions.setLocalErrors,
        errors: {
          amount: 'Невалидное значение',
        },
      })

      return null
    }

    if (referalBalance < value) {
      dispatch({
        type: actions.setLocalErrors,
        errors: {
          amount: 'Превышает сумму на счете',
        },
      })

      return null
    }

    await client.mutate({
      mutation: gql`
        mutation transfer($amount: Float!) {
          transfer(amount: $amount) {
            id
          }
        }
      `,
      variables: {
        amount,
      },
    })

    dispatch({
      type: actions.paymentSuccess,
    })

    dispatch(loadHistory(true))

    const { data } = await client.query({
      forceFetch: true,
      query: gql`
        query {
          user {
            balance
            referalBalance
          }
        }
      `,
    })

    dispatch(updateUser(data.user))

    return null
  }
}

export function clear() {
  return {
    type: actions.clear,
  }
}
