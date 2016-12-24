import { connect } from 'react-redux'
import { changeLicense, applyLicense } from '../actions'
import License from '../components/License'

export default connect(
  state => ({
    license: state.servicePlans.license,
  }),
  dispatch => ({
    onChange: value => dispatch(changeLicense(value)),
    onApply: () => dispatch(applyLicense()),
  }),
)(License)
