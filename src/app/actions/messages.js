import * as actions from '../constants/messages'

let uniqKey = 0

export const dismiss = key => ({ type: actions.dismiss, key })

export function send({ key = String(uniqKey++), message, dismissTime = 6000 }) { // eslint-disable-line no-plusplus
  return (dispatch) => {
    dispatch({ type: actions.send, key, message })

    if (dismissTime) {
      setTimeout(() => {
        dispatch(dismiss(key))
      }, dismissTime)
    }
  }
}
