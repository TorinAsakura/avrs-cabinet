import { connect } from 'react-redux'
import Profile from '../components/Profile'

export default connect(
  state => state.user,
)(Profile)
