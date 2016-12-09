import { connect } from 'react-redux'
import { injectIntl } from 'react-intl'
import { change, login } from '../actions/login'
import Login from '../components/Login'

export default connect(
  state => ({
    email: state.auth.login.email,
    password: state.auth.login.password,
    errors: state.auth.login.errors,
  }),
  dispatch => ({
    onChangeEmail: value => dispatch(change('email', value)),
    onChangePassword: value => dispatch(change('password', value)),
    onLogin: () => dispatch(login()),
  }),
)(injectIntl(Login))
