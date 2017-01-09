import { connect } from 'react-redux'
import { changeWithdraw, saveWithdraw } from '../actions'
import Withdraw from '../components/Withdraw'

export default connect(
  state => state.profile.withdraw,
  dispatch => ({
    onChangeCardNumber: value => dispatch(changeWithdraw('cardNumber', value)),
    onChangeBtcAddress: value => dispatch(changeWithdraw('btcAddress', value)),
    onSave: () => dispatch(saveWithdraw()),
  }),
)(Withdraw)
