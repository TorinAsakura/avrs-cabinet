import { connect } from 'react-redux'
import Activation from '../components/Activation'

export default connect(
  state => ({
    ...(state.user.activations ? state.user.activations[0] : {}),
  }),
)(Activation)
