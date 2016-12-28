import gql from 'graphql-tag'
import { init } from '../../../actions/init'
import { load as loadUser } from '../../../actions/user'
import { send as sendMessage } from '../../../actions/messages'
import { updateActivation } from '../../../constants/user'
import * as actions from '../constants'

export function select(plan, period) {
  return {
    type: actions.select,
    plan,
    period,
  }
}

export function changePeriod(period) {
  return {
    type: actions.changePeriod,
    period,
  }
}

export function changeTime(time) {
  return {
    type: actions.changeTime,
    time,
  }
}

export function changeCPU(cpu) {
  return {
    type: actions.changeCPU,
    cpu,
  }
}

export function changeMemory(memory) {
  return {
    type: actions.changeMemory,
    memory,
  }
}

export function buy() {
  return async (dispatch, getState, client) => { // eslint-disable-line consistent-return
    const { type, period } = getState().servicePlans.active

    if (!(type && period)) {
      dispatch(sendMessage({ message: 'План не выбран' }))

      return null
    }

    await client.mutate({
      mutation: gql`
        mutation buyServicePlan($id: ID!) {
          buyServicePlan(id: $id) {
            type
            period
            time
            price
            period
            profitabilityPerDay
            profitabilityPerHour
            amount
            memory
            cpu
          }
        }
      `,
      variables: {
        id: `${type}_${period}`,
      },
    })

    dispatch(loadUser(true))

    return null
  }
}

export function startActivation(id) {
  return async (dispatch, getState, client) => {
    const { data } = await client.mutate({
      mutation: gql`
        mutation startActivation($id: ID!) {
          startActivation(id: $id) {
            id
            status
            startAt
            leftTime
          }
        }
      `,
      variables: {
        id,
      },
    })

    if (data.startActivation) {
      dispatch({
        type: updateActivation,
        activation: data.startActivation,
      })
    }
  }
}

export function stopActivation(id) {
  return async (dispatch, getState, client) => {
    const { data } = await client.mutate({
      mutation: gql`
        mutation stopActivation($id: ID!) {
          stopActivation(id: $id) {
            id
            status
            startAt
            leftTime
          }
        }
      `,
      variables: {
        id,
      },
    })

    if (data.stopActivation) {
      dispatch({
        type: updateActivation,
        activation: data.stopActivation,
      })
    }
  }
}

export function changeLicense(license) {
  return {
    type: actions.changeLicense,
    license,
  }
}

export function applyLicense() {
  return async (dispatch, getState, client) => {
    const license = getState().servicePlans.license

    const { data } = await client.mutate({
      mutation: gql`
        mutation applyLicense($license: String!) {
          applyLicense(license: $license) {
            activation {
              id
            }
            error
          }
        }
      `,
      variables: {
        license,
      },
    })

    if (data.applyLicense.error) {
      dispatch(sendMessage({ message: data.applyLicense.error }))
    } else {
      dispatch(init())
      dispatch(changeLicense(''))
    }
  }
}

export function openProduct() {
  return async (dispatch, getState, client) => {
    const { type, period } = getState().servicePlans

    const { data } = await client.query({
      forceFetch: true,
      query: gql`
        query {
          generateShopLink (type: "${type}", period: "${period}") {
            url
          }
        }
      `,
    })

    if (data.generateShopLink.url) {
      window.open(data.generateShopLink.url)
    }
  }
}
