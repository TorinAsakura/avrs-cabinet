import locale from 'locale'
import { createReducer } from '../../utils'
import * as actions from '../constants/intl'

const supportedLocales = new locale.Locales(['en', 'ru'])

const getLanguage = () => {
  const lang = new locale.Locales(window.navigator.userLanguage || window.navigator.language || 'en')
  const { language } = lang.best(supportedLocales)

  return language
}

const initialState = {
  locale: getLanguage(),
  messages: {},
}

export default createReducer(initialState, {
  [actions.load]: (state, { locale, messages }) => ({ // eslint-disable-line no-shadow
    ...state,
    locale,
    messages: Object.keys(messages.locale_data.messages).reduce((result, message) => {
      const [id] = message.split('\u0004')

      return {
        ...result,
        [id]: messages.locale_data.messages[message][0],
      }
    }, {}),
  }),
})
