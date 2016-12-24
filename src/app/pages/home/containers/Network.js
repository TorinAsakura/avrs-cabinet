import { connect } from 'react-redux'
import Network from '../components/Network'

export default connect(
  state => ({
    loaded: state.home.network.loaded,
    data: [state.home.network.connections, state.home.network.activations],
  }),
)(Network)
