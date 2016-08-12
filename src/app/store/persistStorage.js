import persistState from 'redux-localstorage'

export default persistState('user', {
  merge: (initialState = {}, persistedState = {}) => {
    if (persistedState && persistedState.user) {
      return {
        ...initialState,
        user: persistedState.user,
      }
    }

    return initialState
  },
  serialize: state => JSON.stringify(state),
})
