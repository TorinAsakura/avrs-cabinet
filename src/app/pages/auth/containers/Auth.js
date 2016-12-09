import { connect } from 'react-redux'
import { injectIntl } from 'react-intl'
import Auth from '../components/Auth'

export default connect(
  state => ({
    landingUrl: state.config.landingUrl,
    pathname: state.router.location.pathname,
  }),
)(injectIntl(Auth))
