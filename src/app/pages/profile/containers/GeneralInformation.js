import { connect } from 'react-redux'
import GeneralInformation from '../components/GeneralInformation'

export default connect(
  state => state.user,
)(GeneralInformation)
