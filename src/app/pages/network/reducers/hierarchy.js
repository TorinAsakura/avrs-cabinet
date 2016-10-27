import { createReducer } from '../../../../utils'
import * as actions from '../constants/hierarchy'

const initialState = {
  tree: {},
}

const format = ({ id, firstName, lastName, children = [] }) => ({
  id,
  name: `${firstName} ${lastName}`,
  children: children.map(format),
})

export default createReducer(initialState, {
  [actions.load]: (state, { current, children }) => ({
    ...state,
    tree: format({ id: current.id, firstName: 'Вы', lastName: '', children }),
  }),
  [actions.loadStat]: (state, { stat }) => ({
    ...state,
    stat,
  }),
})
