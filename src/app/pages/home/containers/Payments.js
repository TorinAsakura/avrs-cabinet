import { connect } from 'react-redux'
import Payments from '../components/Payments'

export default connect(
  state => ({
    loaded: state.home.payments.loaded,
    data: [state.home.payments.rental, state.home.payments.referal],
  }),
)(Payments)
