import { connect } from 'react-redux'
import { change, signIn } from '../actions/signIn'
import SignIn from '../components/SignIn'

export default connect(
  state => ({
    email: state.auth.signIn.email,
    password: state.auth.signIn.password,
  }),
  dispatch => ({
    onChangeEmail: value => dispatch(change('email', value)),
    onChangePassword: value => dispatch(change('password', value)),
    onSignIn: () => dispatch(signIn()),
  })
)(SignIn)
