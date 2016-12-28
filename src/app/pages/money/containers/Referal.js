import { connect } from 'react-redux'
import { exportXls } from '../actions/referal'
import Referal from '../components/Referal'

export default connect(
  state => ({
    operations: state.money.referal.operations,
  }),
  dispatch => ({
    onExportXls: () => dispatch(exportXls()),
  }),
)(Referal)
