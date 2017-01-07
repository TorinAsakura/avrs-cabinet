import gql from 'graphql-tag'
import cardNumber from 'card-validator/src/card-number'
import WAValidator from 'wallet-address-validator'
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

    if (!cardNumber(number).isValid) {
      dispatch({
        type: actions.setLocalErrors,
        errors: {
          number: 'Невалидный номер карты',
        },
      })

      return null
    }

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
    const { amount, number } = getState().money.transfer.external.bitcoin
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

    if (!WAValidator.validate(number)) {
      dispatch({
        type: actions.setLocalErrors,
        errors: {
          number: 'Невалидный номер счета',
        },
      })

      return null
    }

    await client.mutate({
      mutation: gql`
        mutation withdrawToBitcoin($amount: Float!, $number: String!) {
          withdrawToBitcoin(amount: $amount, number: $number) {
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

    return null
  }
}

export function clear() {
  return {
    type: actions.clear,
  }
}
