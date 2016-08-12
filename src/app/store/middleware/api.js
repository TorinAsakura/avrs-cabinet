import createApi from '../../api'

export default function api({ dispatch, getState }) {
  return next => action => {
    if (typeof action === 'function') {
      action(dispatch, getState, createApi(dispatch, getState))
    } else {
      next(action)
    }
  }
}
