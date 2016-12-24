import { connect } from 'react-redux'
import { dismiss } from '../actions/messages'
import Messages from '../components/Messages'

export default connect(
  state => ({
    messages: state.messages,
  }),
  dispatch => ({
    onDismiss: key => dispatch(dismiss(key)),
  }),
)(Messages)
