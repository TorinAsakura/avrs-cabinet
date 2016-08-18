import { connect } from 'react-redux'
import { IntlProvider as BaseIntlProvider } from 'react-intl'

class IntlProvider extends BaseIntlProvider {
  getBoundFormatFns(config, state) {
    const { formatMessage, ...formatFns } = super.getBoundFormatFns(config, state)

    return {
      ...formatFns,
      formatMessage: (descriptor, values) => {
        if (config.locale === 'en') {
          return formatMessage({ ...descriptor, defaultMessage: descriptor.id }, values)
        }

        return formatMessage(descriptor, values)
      },
    }
  }
}

export default connect(
  state => ({
    locale: state.intl.locale,
    messages: state.intl.messages,
  })
)(IntlProvider)
