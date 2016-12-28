import gql from 'graphql-tag'
import * as actions from '../constants/referal'
import { exportToXlsx } from './utils'

export function load() {
  return async (dispatch, getState, client) => {
    const { data } = await client.query({
      query: gql`
        query {
          referalOperations {
            id
            date
            amount
            package
            percent
            participant {
              id
              firstName
              lastName
            }
          }
        }
      `,
    })

    dispatch({
      type: actions.load,
      operations: data.referalOperations,
    })
  }
}

export function exportXls() {
  return async (dispatch, getState) => {
    const { operations } = getState().money.referal
    const fields = ['date', 'amount', 'percent', 'participant', 'package']

    const data = [
      {
        date: 'Дата',
        amount: 'Сумма',
        percent: 'Процент',
        participant: 'Участник',
        package: 'Пакет',
      },
      ...operations,
    ]

    await exportToXlsx(data, fields, 'Referal')
  }
}
