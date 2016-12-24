import { combineReducers } from 'redux'
import rental from './rental'
import referal from './referal'
import history from './history'
import transfer from './transfer'

export default combineReducers({
  rental,
  referal,
  history,
  transfer,
})
