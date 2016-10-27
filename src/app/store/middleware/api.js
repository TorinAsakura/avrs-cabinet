export default client => ({ dispatch, getState }) => next => (action) => {
  if (typeof action === 'function') {
    action(dispatch, getState, client)
  } else {
    next(action)
  }
}
