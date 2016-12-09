import { connect } from 'react-redux'
import Direct from '../components/Direct'

export default connect(
  state => ({
    users: state.network.direct.users,
  }),
)(Direct)
