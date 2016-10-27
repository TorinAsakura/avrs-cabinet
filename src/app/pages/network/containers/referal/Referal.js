import { connect } from 'react-redux'
import Referal from '../../components/referal/Referal'

export default connect(
  state => state.network.hierarchy.stat || {},
)(Referal)
