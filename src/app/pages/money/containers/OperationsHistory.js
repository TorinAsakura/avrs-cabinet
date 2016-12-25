import { connect } from 'react-redux'
import OperationsHistory from '../components/OperationsHistory'

export default connect(
  state => ({
    operations: state.money.history.operations,
  }),
)(OperationsHistory)
