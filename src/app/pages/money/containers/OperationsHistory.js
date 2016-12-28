import { connect } from 'react-redux'
import OperationsHistory from '../components/OperationsHistory'
import { exportXls } from '../actions/history'

export default connect(
  state => ({
    operations: state.money.history.operations,
  }),
  dispatch => ({
    onExportXls: () => dispatch(exportXls()),
  }),
)(OperationsHistory)
