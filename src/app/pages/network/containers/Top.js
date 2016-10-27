import { connect } from 'react-redux'
import Top from '../components/Top'

export default connect(
  state => ({
    users: state.network.top.users,
  }),
)(Top)
