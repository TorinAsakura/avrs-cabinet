import { connect } from 'react-redux'
import Referals from '../components/Referals'

export default connect(
  state => ({
    referals: state.user.referals,
  }),
)(Referals)
