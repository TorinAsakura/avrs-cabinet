import gql from 'graphql-tag'
import { load as loadUser } from '../../../actions/user'
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
    const id = getState().servicePlans.active.id

    if (!id) {
      return alert('План не выбран')
    }

    await client.mutate({
      mutation: gql`
        mutation buyServicePlan($id: ID!) {
          buyServicePlan(id: $id) {
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
      variables: {
        id,
      },
    })

    dispatch(loadUser(true))
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
