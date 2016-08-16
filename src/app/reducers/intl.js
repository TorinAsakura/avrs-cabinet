import { createReducer } from '../../utils'
import * as actions from '../constants/intl'

const initialState = {
  locale: 'en',
  messages: {},
}

export default createReducer(initialState, {
  [actions.load]: (state, { locale, messages }) => ({
    ...state,
    locale,
    messages: Object.keys(messages.locale_data.messages).reduce((result, message) => ({
      ...result,
      [message]: messages.locale_data.messages[message][0],
    }), {}),
  }),
})
