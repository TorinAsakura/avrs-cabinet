import { connect } from 'react-redux'
import Rental from '../components/Rental'

export default connect(
  state => ({
    operations: state.money.rental.operations,
  }),
)(Rental)
