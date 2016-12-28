import { connect } from 'react-redux'
import Footer from '../components/Footer'

export default connect(
  state => ({
    landingUrl: state.config.landingUrl,
  }),
)(Footer)
