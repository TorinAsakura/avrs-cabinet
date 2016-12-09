import { createReducer } from '../../../../utils'
import * as actions from '../constants'

const initialState = {
  type: 'standard',
  period: 90,
  active: null,
  items: [],
}

const getActive = (servicePlans, type, period) => {
  const [active] = servicePlans.filter(plan => plan.id.includes(type) && plan.period === period)

  return active
}

const getActiveByField = (servicePlans, period, field, value) => {
  const [active] = servicePlans.filter(plan => plan[field] === value).filter(plan => plan.period === period)

  return active
}

export default createReducer(initialState, {
  [actions.load]: (state, { servicePlans }) => ({
    ...state,
    items: servicePlans,
    active: getActive(servicePlans, state.type, state.period),
  }),
  [actions.select]: (state, { plan, period }) => ({
    ...state,
    type: plan,
    active: getActive(state.items, plan, period),
  }),
  [actions.changePeriod]: (state, { period }) => {
    const active = getActive(state.items, state.type, period)

    if (!active) {
      return state
    }

    return { ...state, active }
  },
  [actions.changeTime]: (state, { time }) => {
    const active = getActiveByField(state.items, state.period, 'time', time)

    if (!active) {
      return state
    }

    return { ...state, type: active.id.substr(1), active }
  },
  [actions.changeMemory]: (state, { memory }) => {
    const active = getActiveByField(state.items, state.period, 'memory', memory * 1024)

    if (!active) {
      return state
    }

    return { ...state, type: active.id.substr(1), active }
  },
  [actions.changeCPU]: (state, { cpu }) => {
    const mapping = {
      5: 'Basis',
      15: 'Standard',
      20: 'Premium',
      40: 'Business',
    }

    const active = getActiveByField(state.items, state.period, 'name', mapping[cpu])

    if (!active) {
      return state
    }

    return { ...state, type: active.id.substr(1), active }
  },
})
