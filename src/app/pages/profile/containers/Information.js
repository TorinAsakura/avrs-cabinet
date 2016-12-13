import { connect } from 'react-redux'
import Information from '../components/Information'

export default connect(
  state => state.user,
)(Information)
