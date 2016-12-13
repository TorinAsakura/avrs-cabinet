import { connect } from 'react-redux'
import { change, send } from '../actions/create'
import CreateRequest from '../components/CreateRequest'

export default connect(
  state => ({
    subject: state.support.create.subject,
    message: state.support.create.message,
    errors: state.support.create.errors,
  }),
  (dispatch, { router }) => ({
    onChangeSubject: value => dispatch(change('subject', value)),
    onChangeMessage: value => dispatch(change('message', value)),
    onSend: () => dispatch(send(router)),
  }),
)(CreateRequest)
