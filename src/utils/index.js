export function createReducer(initialState, reducers = {}, nested) {
  return (state = initialState, { type, ...payload }) => {
    const handler = reducers[type]
    const newState = handler ? handler(state, payload) : state

    if (nested) {
      const nestedState = Object.keys(nested).reduce((result, key) => ({
        ...result,
        [key]: nested[key](newState[key], { type, ...payload }),
      }), {})

      return { ...newState, ...nestedState }
    }

    return newState
  }
}
