import { connect } from 'react-redux'
import { send, change } from '../actions/detail'
import Detail from '../components/Detail'

export default connect(
  state => state.support.detail,
  dispatch => ({
    onChangeMessage: value => dispatch(change(value)),
    onSend: () => dispatch(send()),
  }),
)(Detail)
