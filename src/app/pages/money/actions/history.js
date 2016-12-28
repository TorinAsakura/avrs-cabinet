import gql from 'graphql-tag'
import * as actions from '../constants/history'
import { exportToXlsx } from './utils'

export function load(forceFetch) {
  return async (dispatch, getState, client) => {
    const { data } = await client.query({
      forceFetch,
      query: gql`
        query {
          operations {
            id
            date
            amount
            direction
            status
          }
        }
      `,
    })

    dispatch({
      type: actions.load,
      operations: data.operations,
    })
  }
}

export function exportXls() {
  return async (dispatch, getState) => {
    const { operations } = getState().money.history
    const fields = ['date', 'type', 'amount', 'status']

    const data = [
      {
        date: 'Дата',
        type: 'Тип',
        amount: 'Сумма',
        status: 'Статус',
      },
      ...operations,
    ]

    await exportToXlsx(data, fields, 'Operations history')
  }
}
