import { connect } from 'react-redux'
import { changeBitcoin, sentToBitcoin } from '../../actions/externalTransfer'
import BitcoinMethod from '../../components/transfer/BitcoinMethod'

export default connect(
  state => ({
    amount: state.money.transfer.external.bitcoin.amount,
    address: state.money.transfer.external.bitcoin.address,
    errors: state.money.transfer.external.errors,
  }),
  dispatch => ({
    onChangeNumber: value => dispatch(changeBitcoin('number', value)),
    onChangeAmount: value => dispatch(changeBitcoin('amount', value)),
    onSent: () => dispatch(sentToBitcoin()),
  }),
)(BitcoinMethod)
