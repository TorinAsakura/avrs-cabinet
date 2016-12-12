import moment from 'moment'
import { createReducer } from '../../../../utils'
import * as actions from '../constants/detail'

const initialState = {
  messages: [],
  message: '',
}

const sortMessages = (a, b) => moment(new Date(b.createdAt)).diff(new Date(a.createdAt))

const formatMessage = message => ({
  ...message,
  createdAt: moment(new Date(message.createdAt)).format('DD MMMM, HH:mm'),
})

export default createReducer(initialState, {
  [actions.load]: (state, { request }) => ({
    ...state,
    ...request,
    messages: request.messages.map(formatMessage).sort(sortMessages),
  }),
  [actions.change]: (state, { message }) => ({ ...state, message }),
  [actions.addMessage]: (state, { message }) => ({
    ...state,
    message: '',
    messages: [...state.messages, formatMessage(message)],
  }),
})
