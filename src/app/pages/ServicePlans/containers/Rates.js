import { connect } from 'react-redux'
import { select, openProduct } from '../actions'
import ServicePlans from '../components/ServicePlans'

const periodByDays = {
  30: 'month',
  90: 'quarter',
  180: 'halfYear',
  365: 'year',
}

const groupByType = (items) => { // eslint-disable-line arrow-body-style
  return items.reduce((result, plan) => {
    if (!result[plan.type]) {
      result[plan.type] = {} // eslint-disable-line no-param-reassign
    }

    return {
      ...result,
      [plan.type]: {
        ...result[plan.type],
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
    onOpenProduct: () => dispatch(openProduct()),
  }),
)(ServicePlans)
