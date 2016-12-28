import { connect } from 'react-redux'
import { change, send } from '../actions/internalTransfer'
import Internal from '../components/transfer/Internal'

export default connect(
  state => ({
    balance: state.user.balance,
    referalBalance: state.user.referalBalance,
    amount: state.money.transfer.internal.amount,
    success: state.money.transfer.internal.success,
    errors: state.money.transfer.internal.errors,
  }),
  dispatch => ({
    onChange: amount => dispatch(change(amount)),
    onSend: () => dispatch(send()),
  }),
)(Internal)
