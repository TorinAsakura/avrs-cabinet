import { addLocaleData } from 'react-intl'
import { load, change } from '../../constants/intl'

let initialized = false

const loadLocale = (locale, callback) => {
  System.import(`react-intl/locale-data/${locale}`).then(addLocaleData)

  if (locale === 'en') {
    callback({ locale_data: { messages: {} } })
  } else {
    System.import(`../../../../locales/${locale}/messages.po`).then(callback)
  }
}

export default function api({ dispatch, getState }) {
  return next => action => {
    if (!initialized) {
      initialized = true

      loadLocale(getState().intl.locale, messages => {
        dispatch({
          type: load,
          messages,
          locale: getState().intl.locale,
        })
      })
    }

    if (action.type === change) {
      loadLocale(action.locale, messages => {
        dispatch({
          type: load,
          messages,
          locale: action.locale,
        })
      })
    }

    next(action)
  }
}
