import { connect } from 'react-redux'
import Header from '../components/Header'

export default connect(
  state => ({
    firstName: state.user.firstName,
    lastName: state.user.lastName,
    balance: state.user.balance,
    isNew: state.user.isNew,
  }),
)(Header)
