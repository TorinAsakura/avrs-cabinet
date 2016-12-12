import moment from 'moment'
import { createReducer } from '../../../../utils'
import * as actions from '../constants/list'

const initialState = {
  loaded: false,
  requests: [],
}

const sortRequests = (a, b) => moment(new Date(b.createdAt)).diff(new Date(a.createdAt))

const formatRequest = request => ({
  ...request,
  date: moment(new Date(request.createdAt)).format('YYYY-MM-DD, HH:mm'),
  unread: request.messages.reduce((result, message) => {
    if (message.type === 'ANSWER' && !message.read) {
      return result + 1
    }

    return result
  }, 0),
})

export default createReducer(initialState, {
  [actions.load]: (state, { requests }) => ({
    loaded: true,
    requests: requests.sort(sortRequests).map(formatRequest),
  }),
  [actions.add]: (state, { request }) => ({
    ...state,
    requests: [formatRequest(request), ...state.requests].sort(sortRequests),
  }),
})
