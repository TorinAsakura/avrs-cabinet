import gql from 'graphql-tag'
import * as actions from '../constants/externalTransfer'
import { load as loadHistory } from './history'

export function selectMethod(method) {
  return {
    type: actions.changeMethod,
    method,
  }
}

export function changeCard(field, value) {
  return {
    type: actions.changeCard,
    field,
    value,
  }
}

export function sentToCard() {
  return async (dispatch, getState, client) => {
    const { amount, number } = getState().money.transfer.external.card

    await client.mutate({
      mutation: gql`
        mutation withdrawToCard($amount: Float!, $number: String!) {
          withdrawToCard(amount: $amount, number: $number) {
            id
          }
        }
      `,
      variables: {
        amount,
        number,
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
