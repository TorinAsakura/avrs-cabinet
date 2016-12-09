import gql from 'graphql-tag'
import * as actions from '../constants/hierarchy'

export function load() {
  return async (dispatch, getState, client) => {
    const user = getState().user

    const { data } = await client.query({
      query: gql`
        query {
          networkHierarchy {
            id
            firstName
            lastName
            children {
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
      current: user,
      children: data.networkHierarchy,
    })
  }
}

export function loadReferal(id) {
  return async (dispatch, getState, client) => {
    if (id === getState().user.id) {
      return
    }

    const { data } = await client.query({
      query: gql`
        query {
          networkReferalStat (id: "${id}") {
            id
            firstName
            lastName
            salesBalance
          }
        }
      `,
    })

    dispatch({
      type: actions.loadStat,
      stat: data.networkReferalStat,
    })
  }
}
