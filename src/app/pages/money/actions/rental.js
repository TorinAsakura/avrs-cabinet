import gql from 'graphql-tag'
import * as actions from '../constants/rental'

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
