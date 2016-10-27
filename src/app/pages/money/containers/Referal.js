import { connect } from 'react-redux'
import Referal from '../components/Referal'

export default connect(
  state => ({
    operations: state.money.referal.operations,
  }),
)(Referal)
