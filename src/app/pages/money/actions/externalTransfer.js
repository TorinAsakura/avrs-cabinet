import gql from 'graphql-tag'
import * as actions from '../constants/externalTransfer'
import { update as updateUser } from '../../../actions/user'
import { load as loadHistory } from './history'

export function sync() {
  return async (dispatch, getState) => {
    const { cardNumber, btcAddress } = getState().user

    dispatch({
      type: actions.sync,
      cardNumber,
      btcAddress,
    })
  }
}

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
    const { amount } = getState().money.transfer.external.card
    const { balance } = getState().user

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

    if (balance < value) {
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
        mutation withdrawToCard($amount: Float!) {
          withdrawToCard(amount: $amount) {
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

export function changeBitcoin(field, value) {
  return {
    type: actions.changeBitcoin,
    field,
    value,
  }
}

export function sentToBitcoin() {
  return async (dispatch, getState, client) => {
    const { amount } = getState().money.transfer.external.bitcoin
    const { balance } = getState().user

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

    if (balance < value) {
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
        mutation withdrawToBitcoin($amount: Float!) {
          withdrawToBitcoin(amount: $amount) {
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
