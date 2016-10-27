import { connect } from 'react-redux'
import { injectIntl } from 'react-intl'
import { change, update } from '../actions/updatePassword'
import UpdatePassword from '../components/UpdatePassword'

export default connect(
  state => ({
    password: state.auth.updatePassword.password.value,
    passwordConfirmation: state.auth.updatePassword.password.confirmation,
    errors: state.auth.updatePassword.errors,
  }),
  dispatch => ({
    onChangePassword: value => dispatch(change('value', value)),
    onChangePasswordConfirmation: value => dispatch(change('confirmation', value)),
    onUpdate: () => dispatch(update()),
  }),
)(injectIntl(UpdatePassword))
