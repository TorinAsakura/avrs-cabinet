import * as actions from '../constants/communicator'

export function connect(token) {
  return {
    type: actions.connect,
    token,
  }
}

export function listenStat() {
  return {
    type: actions.addListener,
    event: 'stat',
  }
}
