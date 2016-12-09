import gql from 'graphql-tag'
import * as actions from '../constants/security'
// import { connect, listenStat } from './communicator'

export function auth(data) {
  return async (dispatch) => {
    dispatch({
      type: actions.auth,
      auth: data,
    })
  }
}

export function logout() {
  return async (dispatch, getState) => {
    dispatch({
      type: actions.clear,
    })

    if (getState().router.location.pathname.indexOf('/auth') !== 0) {
      window.location.hash = '/auth/login'
    }
  }
}

export function load(forceFetch = false) {
  return async (dispatch, getState, client) => {
    const { data } = await client.query({
      forceFetch,
      query: gql`
        query {
          user {
            id
            email
            firstName
            lastName
            balance
            inviteCode
            plan {
              id,
              type,
              name,
              time,
              price,
              period,
              profitability,
              profitabilityPerDay,
              profitabilityPerHour,
              profit,
              amount,
              memory,
              cpu {
                from,
                to
              },
              expireAt
            }
            activations {
              startAt
              expireAt
              servicePlan {
                name
              }
            }
          }
        }
      `,
    })

    //  if (data.user.plan) {
    //    dispatch(connect(getState().user.token))
    //    dispatch(listenStat())
    //  }

    dispatch({
      type: actions.load,
      user: data.user,
    })
  }
}
