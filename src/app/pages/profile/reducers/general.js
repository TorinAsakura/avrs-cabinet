import { createReducer } from '../../../../utils'
import * as actions from '../constants'

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  sex: '',
  birthday: '',
  address: '',
  country: '',
  receiveEmails: false,
  receiveAnnouncements: false,
}

export default createReducer(initialState, {
  [actions.sync]: (state, { user }) => ({ ...state, ...user }),
  [actions.changeGeneral]: (state, { field, value }) => ({ ...state, [field]: value }),
})
