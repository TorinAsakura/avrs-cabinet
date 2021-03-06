import { connect } from 'react-redux'
import Position from '../components/Position'

export default connect(
  state => ({
    landingUrl: state.config.landingUrl,
    salesBalance: state.user.salesBalance,
  }),
)(Position)
