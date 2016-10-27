import { connect } from 'react-redux'
import { select, buy } from '../actions'
import ServicePlans from '../components/ServicePlans'

const periodByDays = {
  30: 'month',
  90: 'quarter',
  180: 'halfYear',
  365: 'year',
}

const groupByType = (items) => { // eslint-disable-line arrow-body-style
  return items.reduce((result, plan) => {
    const type = plan.id.substr(1)

    if (!result[type]) {
      result[type] = {} // eslint-disable-line no-param-reassign
    }

    return {
      ...result,
      [type]: {
        ...result[type],
        [periodByDays[plan.period]]: plan,
      },
    }
  }, {})
}

export default connect(
  state => ({
    ...groupByType(state.servicePlans.items),
    active: state.servicePlans.active,
  }),
  dispatch => ({
    onMonth: plan => dispatch(select(plan, 30)),
    onQuarter: plan => dispatch(select(plan, 90)),
    onHalfYear: plan => dispatch(select(plan, 180)),
    onYear: plan => dispatch(select(plan, 365)),
    onBuy: () => dispatch(buy()),
  }),
)(ServicePlans)
