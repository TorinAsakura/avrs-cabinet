import gql from 'graphql-tag'
import { load as loadServicePlans } from '../pages/ServicePlans/constants'
import { load as loadUser } from '../constants/user'
import * as actions from '../constants/config'

export function init() {
  return async (dispatch, getState, client) => {
    const { data } = await client.query({
      forceFetch: true,
      query: gql`
        query {
          user {
            id
            email
            firstName
            lastName
            phone
            sex
            birthday
            country
            balance
            salesBalance
            referalBalance
            inviteCode
            referals
            status
            createdAt
            sponsor {
              id
              firstName
              lastName
            }
            activations {
              id
              status
              startAt
              leftTime
              servicePlan {
                type
                period
              }
            }
          }
          servicePlans {
            type
            period
            time
            price
            profitabilityPerDay
            profitabilityPerHour
            amount
            memory
            cpu
          }
        }
      `,
    })

    dispatch({
      type: loadServicePlans,
      servicePlans: data.servicePlans,
    })

    dispatch({
      type: loadUser,
      user: data.user,
    })

    dispatch({
      type: actions.init,
    })
  }
}
