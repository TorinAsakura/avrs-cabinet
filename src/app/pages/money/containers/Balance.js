import { connect } from 'react-redux'
import Balance from '../components/Balance'

export default connect(
  state => ({
    balance: state.user.balance,
  }),
)(Balance)
