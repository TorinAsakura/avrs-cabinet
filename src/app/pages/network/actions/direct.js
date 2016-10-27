import gql from 'graphql-tag'
import * as actions from '../constants/direct'

export function load() {
  return async (dispatch, getState, client) => {
    const { data } = await client.query({
      query: gql`
        query {
          networkDirectReferals {
            id
            email
            firstName
            lastName
            createdAt
          }
        }
      `,
    })

    dispatch({
      type: actions.load,
      users: data.networkDirectReferals,
    })
  }
}
