import gql from 'graphql-tag'
import * as actions from '../constants/top'

export function load() {
  return async (dispatch, getState, client) => {
    const { data } = await client.query({
      query: gql`
        query {
          networkTopReferals {
            id
            firstName
            lastName
            salesBalance
          }
        }
      `,
    })

    dispatch({
      type: actions.load,
      users: data.networkTopReferals,
    })
  }
}
