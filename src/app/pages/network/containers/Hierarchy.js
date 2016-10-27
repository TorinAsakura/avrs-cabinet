import { connect } from 'react-redux'
import Hierarchy from '../components/Hierarchy'

export default connect(
  state => ({
    data: state.network.hierarchy.tree,
  }),
)(Hierarchy)
