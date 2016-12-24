import gql from 'graphql-tag'
import * as actions from '../constants/security'
import { update as updateUser } from '../constants/user'

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
      window.location.href = '/auth/login'
    }
  }
}

export function load(forceFetch = false) {
  return async (dispatch, getState, client) => {
    await client.query({
      forceFetch,
      query: gql`
        query {
          user {
            id
            email
            firstName
            lastName
            balance
            salesBalance
            inviteCode
            referals
            status
            createdAt
            activations {
              id
              status
              startAt
              leftTime
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

    // dispatch({
    //  type: actions.load,
    //  user: data.user,
    // })
  }
}

export function update(fields) {
  return {
    type: updateUser,
    fields,
  }
}
