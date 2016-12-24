import { connect } from 'react-redux'
import { selectMethod } from '../../actions/externalTransfer'
import OutputMethods from '../../components/transfer/OutputMethods'

export default connect(
  null,
  dispatch => ({
    onSelectSepa: () => dispatch(selectMethod('sepa')),
    onSelectPerfectMoney: () => dispatch(selectMethod('perfectmoney')),
    onSelectBitconin: () => dispatch(selectMethod('bitcoin')),
    onSelectMastercard: () => dispatch(selectMethod('mastercard')),
  }),
)(OutputMethods)
