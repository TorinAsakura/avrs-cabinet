import { connect } from 'react-redux'
import { changeCard, sentToCard } from '../../actions/externalTransfer'
import CardMethod from '../../components/transfer/CardMethod'

export default connect(
  state => ({
    amount: state.money.transfer.external.card.amount,
    number: state.money.transfer.external.card.number,
  }),
  dispatch => ({
    onChangeNumber: value => dispatch(changeCard('number', value)),
    onChangeAmount: value => dispatch(changeCard('amount', value)),
    onSent: () => dispatch(sentToCard()),
  }),
)(CardMethod)
