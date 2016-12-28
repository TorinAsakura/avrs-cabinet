import gql from 'graphql-tag'
import * as actions from '../constants/rental'
import { exportToXlsx } from './utils'

export function load() {
  return async (dispatch, getState, client) => {
    const { data } = await client.query({
      query: gql`
        query {
          rentalOperations {
            id
            date
            amount
            package
            time
          }
        }
      `,
    })

    dispatch({
      type: actions.load,
      operations: data.rentalOperations,
    })
  }
}

export function exportXls() {
  return async (dispatch, getState) => {
    const { operations } = getState().money.rental
    const fields = ['date', 'amount', 'time', 'package']

    const data = [
      {
        date: 'Дата',
        amount: 'Сумма',
        time: 'Время',
        package: 'Пакет',
      },
      ...operations,
    ]

    await exportToXlsx(data, fields, 'Rental')
  }
}
