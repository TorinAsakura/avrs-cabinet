import { connect } from 'react-redux'
import { change, register } from '../actions/signUp'
import SignUp from '../components/SignUp'

export default connect(
  state => ({
    email: state.auth.signUp.email,
    password: state.auth.signUp.password,
    passwordConfirmation: state.auth.signUp.passwordConfirmation,
  }),
  dispatch => ({
    onChangeEmail: value => dispatch(change('email', value)),
    onChangePassword: value => dispatch(change('password', value)),
    onChangePasswordConfirmation: value => dispatch(change('passwordConfirmation', value)),
    onRegister: () => dispatch(register()),
  })
)(SignUp)
