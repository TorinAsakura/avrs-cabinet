import { connect } from 'react-redux'
import ReferalBalance from '../components/ReferalBalance'

export default connect(
  state => ({
    balance: state.user.referalBalance,
  }),
)(ReferalBalance)
