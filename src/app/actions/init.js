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
            balance
            salesBalance
            inviteCode
            referals
            status
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
          servicePlans {
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
            }
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

    setTimeout(() => {
      if (getState().user.isNew === true) {
        window.location.hash = '/beginning'
      } else {
        window.location.hash = '/'
      }
    }, 100)

    dispatch({
      type: actions.init,
    })
  }
}
