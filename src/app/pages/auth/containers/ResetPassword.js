import { connect } from 'react-redux'
import { injectIntl } from 'react-intl'
import { change, reset } from '../actions/resetPassword'
import ResetPassword from '../components/ResetPassword'

export default connect(
  state => ({
    email: state.auth.resetPassword.email,
    errors: state.auth.resetPassword.errors,
  }),
  dispatch => ({
    onChangeEmail: value => dispatch(change('email', value)),
    onReset: () => dispatch(reset()),
  })
)(injectIntl(ResetPassword))
