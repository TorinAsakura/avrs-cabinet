import gql from 'graphql-tag'
import * as actions from '../constants/security'
import { update as updateUser, activationSent, activationError } from '../constants/user'

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

    if (getState().router && getState().router.location.pathname.indexOf('/auth') !== 0) {
      window.location.href = '/auth/login'
    } else {
      window.location.reload()
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

export function sendActivation() {
  return async (dispatch, getState, client) => {
    const activateUrl = `${window.location.origin}/auth/activate/`

    const { data } = await client.mutate({
      mutation: gql`
        mutation sendActivation($activateUrl: String!) {
          sendActivation(activateUrl: $activateUrl) {
            success
          }
        }
      `,
      variables: {
        activateUrl,
      },
    })

    if (data.sendActivation.success) {
      dispatch({
        type: activationSent,
      })
    }
  }
}

export function activate(token) {
  return async (dispatch, getState, client) => {
    const { data } = await client.mutate({
      mutation: gql`
        mutation activateUser($token: String!) {
          activateUser(token: $token) {
            success
          }
        }
      `,
      variables: {
        token,
      },
    })

    if (data.activateUser.success) {
      window.location.href = '/'
    } else {
      dispatch({
        type: activationError,
      })
    }
  }
}
