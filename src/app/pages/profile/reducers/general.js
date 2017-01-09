import moment from 'moment'
import { createReducer, formatErrors } from '../../../../utils'
import * as actions from '../constants'

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  sex: '',
  birthday: '',
  country: '',
  receiveEmails: false,
  receiveAnnouncements: false,
  errors: {},
}

export default createReducer(initialState, {
  [actions.sync]: (state, { user }) => ({
    ...state,
    ...user,
    birthday: user.birthday ? moment(new Date(user.birthday)).format('DD.MM.YYYY') : state.birthday,
  }),
  [actions.changeGeneral]: (state, { field, value }) => ({ ...state, [field]: value }),
  [actions.setErrors]: (state, { errors }) => ({ ...state, errors: formatErrors(errors) }),
})
