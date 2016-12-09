import { connect } from 'react-redux'
import { startActivation, stopActivation } from '../actions'
import Activations from '../components/Activations'

export default connect(
  state => ({
    activations: state.user.activations,
  }),
  dispatch => ({
    onStart: id => dispatch(startActivation(id)),
    onStop: id => dispatch(stopActivation(id)),
  }),
)(Activations)
