import gql from 'graphql-tag'
import * as actions from '../constants'

export function loadStat() {
  return async (dispatch, getState, client) => {
    const { data } = await client.query({
      query: gql`
        query {
          paymentsStat {
            rental {
              date
              amount
            }
            referal {
              date
              amount
            }
          }
          networkStat {
            connections {
              date
              amount
            }
            activations {
              date
              amount
            }
          }
        }
      `,
    })

    dispatch({
      type: actions.loadPayments,
      stat: data.paymentsStat,
    })

    dispatch({
      type: actions.loadNetwork,
      stat: data.networkStat,
    })
  }
}
