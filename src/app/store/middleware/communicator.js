/* eslint-disable no-console */
import sio from 'socket.io-client'
import { connect, addListener, removeListener, event } from '../../constants/communicator'

let socket = null
const listeners = {}

export default function communicator({ dispatch }) {
  return next => (action) => {
    if (action.type.includes('@@avrs-cabinet/communicator')) {
      if (action.type === connect) {
        socket = sio(process.env.API_URL, {
          query: `token=${action.token}&type=client`,
        })

        socket.on('connect', () => {
          console.log('connect')
          // handle connect
        })

        socket.on('disconect', () => {
          console.log('disconect')
          // handle disconect
        })

        socket.on('error', () => {
          console.log('error')
          // handle error
        })
      }

      if (action.type === addListener) {
        listeners[action.event] = data => dispatch({ type: event, event: action.event, data })

        socket.on(action.event, listeners[action.event])
      }

      if (action.type === removeListener) {
        socket.off(action.event, listeners[action.event])
      }
    }

    return next(action)
  }
}
