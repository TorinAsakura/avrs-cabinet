import gql from 'graphql-tag'
import * as actions from '../constants/list'

export function load() {
  return async (dispatch, getState, client) => {
    const { data } = await client.query({
      forceFetch: true,
      query: gql`
        query {
          supportRequests {
            id
            subject
            status
            createdAt
            messages {
              id
              type
              body
              read
              createdAt
            }
          }
        }
      `,
    })

    dispatch({
      type: actions.load,
      requests: data.supportRequests,
    })
  }
}
