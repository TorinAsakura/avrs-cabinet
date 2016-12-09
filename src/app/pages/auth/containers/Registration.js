import { connect } from 'react-redux'
import { injectIntl } from 'react-intl'
import { change, register } from '../actions/registration'
import Registration from '../components/Registration'

export default connect(
  state => ({
    email: state.auth.registration.email,
    password: state.auth.registration.password,
    passwordConfirmation: state.auth.registration.passwordConfirmation,
    inviteCode: state.auth.registration.inviteCode,
    errors: state.auth.registration.errors,
  }),
  dispatch => ({
    onChangeEmail: value => dispatch(change('email', value)),
    onChangeFirstName: value => dispatch(change('firstName', value)),
    onChangeLastName: value => dispatch(change('lastName', value)),
    onChangePassword: value => dispatch(change('password', value)),
    onChangePasswordConfirmation: value => dispatch(change('passwordConfirmation', value)),
    onChangeInviteCode: value => dispatch(change('inviteCode', value)),
    onRegister: () => dispatch(register()),
  }),
)(injectIntl(Registration))
