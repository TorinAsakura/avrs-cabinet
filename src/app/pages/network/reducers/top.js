import { createReducer } from '../../../../utils'
import * as actions from '../constants/top'

const getPosition = (salesBalance) => {
  if (salesBalance < 5000) {
    return 'Aversis Starting'
  } else if (salesBalance < 20000) {
    return 'Aversis Agent'
  } else if (salesBalance < 60000) {
    return 'Aversis Seller'
  } else if (salesBalance < 120000) {
    return 'Aversis Manager'
  } else if (salesBalance < 250000) {
    return 'Aversis Gold'
  }

  return 'Aversis Platinum'
}

const initialState = {
  users: [],
}

export default createReducer(initialState, {
  [actions.load]: (state, { users }) => ({
    ...state,
    users: users.map(user => ({
      ...user,
      position: getPosition(user.salesBalance),
    })),
  }),
})
