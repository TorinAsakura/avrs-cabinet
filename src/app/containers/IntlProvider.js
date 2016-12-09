import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { IntlProvider } from 'react-intl'

const IntlProviderContainer = ({ locale, messages, children }) => {
  if (!messages) {
    return null
  }

  return (
    <IntlProvider
      locale={locale}
      messages={messages}
    >
      {children}
    </IntlProvider>
  )
}

IntlProviderContainer.propTypes = {
  locale: PropTypes.string,
  messages: PropTypes.any,
  children: PropTypes.element,
}

export default connect(
  state => ({
    locale: state.intl.locale,
    messages: state.intl.messages,
  }),
)(IntlProviderContainer)
