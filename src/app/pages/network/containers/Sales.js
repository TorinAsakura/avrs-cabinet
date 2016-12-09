import { connect } from 'react-redux'
import Sales from '../components/Sales'

export default connect(
  state => ({
    salesBalance: state.user.salesBalance,
  }),
)(Sales)
