import { connect } from 'react-redux'
import Position from '../components/Position'

export default connect(
  state => ({
    salesBalance: state.user.salesBalance,
  }),
)(Position)
