import { createReducer } from '../../../../utils'
import * as actions from '../constants'

const initialState = {
  type: 'standard',
  period: 90,
  active: null,
  items: [],
  license: '',
}

const getActive = (servicePlans, type, period) => {
  const [active] = servicePlans.filter(plan => plan.type === type && plan.period === period)

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
    period,
    type: plan,
    active: getActive(state.items, plan, period),
  }),
  [actions.changePeriod]: (state, { period }) => {
    const active = getActive(state.items, state.type, period)

    if (!active) {
      return state
    }

    return { ...state, active, period }
  },
  [actions.changeTime]: (state, { time }) => {
    const active = getActiveByField(state.items, state.period, 'time', time)

    if (!active) {
      return state
    }

    return { ...state, type: active.type, active }
  },
  [actions.changeMemory]: (state, { memory }) => {
    const active = getActiveByField(state.items, state.period, 'memory', memory * 1024)

    if (!active) {
      return state
    }

    return { ...state, type: active.type, active }
  },
  [actions.changeCPU]: (state, { cpu }) => {
    const active = getActiveByField(state.items, state.period, 'cpu', cpu)

    if (!active) {
      return state
    }

    return { ...state, type: active.type, active }
  },
  [actions.changeLicense]: (state, { license }) => ({ ...state, license }),
})
