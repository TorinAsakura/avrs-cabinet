import { lensPath, set } from 'ramda'

export function formatErrors(errors = []) {
  return errors.reduce((result, error) => set(lensPath(error.key), error.message, result), {})
}

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
