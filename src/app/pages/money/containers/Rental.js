import { connect } from 'react-redux'
import { exportXls } from '../actions/rental'
import Rental from '../components/Rental'

export default connect(
  state => ({
    operations: state.money.rental.operations,
  }),
  dispatch => ({
    onExportXls: () => dispatch(exportXls()),
  }),
)(Rental)
