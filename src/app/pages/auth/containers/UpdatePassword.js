import { connect } from 'react-redux'
import { injectIntl } from 'react-intl'
import { change, update } from '../actions/updatePassword'
import UpdatePassword from '../components/UpdatePassword'

export default connect(
  state => ({
    password: state.auth.updatePassword.password,
    passwordConfirmation: state.auth.updatePassword.passwordConfirmation,
    errors: state.auth.updatePassword.errors,
  }),
  dispatch => ({
    onChangePassword: value => dispatch(change('password', value)),
    onChangePasswordConfirmation: value => dispatch(change('passwordConfirmation', value)),
    onUpdate: () => dispatch(update()),
  })
)(injectIntl(UpdatePassword))
