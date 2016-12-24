import gql from 'graphql-tag'
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
  }
}

export function clear() {
  return {
    type: actions.clear,
  }
}
