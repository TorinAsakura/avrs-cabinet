import gql from 'graphql-tag'
import * as actions from '../constants/history'

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
