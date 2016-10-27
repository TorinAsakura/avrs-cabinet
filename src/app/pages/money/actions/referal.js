import gql from 'graphql-tag'
import * as actions from '../constants/referal'

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
