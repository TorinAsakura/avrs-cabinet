import { connect } from 'react-redux'
import List from '../components/List'

export default connect(
  state => state.support.list,
)(List)
