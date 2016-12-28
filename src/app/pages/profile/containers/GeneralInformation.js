import { connect } from 'react-redux'
import { changeGeneral, saveGeneral, sync } from '../actions'
import GeneralInformation from '../components/GeneralInformation'

export default connect(
  state => state.profile.general,
  dispatch => ({
    onChangeFirstName: value => dispatch(changeGeneral('firstName', value)),
    onChangeLastName: value => dispatch(changeGeneral('lastName', value)),
    onChangeEmail: value => dispatch(changeGeneral('email', value)),
    onChangePhone: value => dispatch(changeGeneral('phone', value)),
    onChangeSex: value => dispatch(changeGeneral('sex', value)),
    onChangeBirthday: value => dispatch(changeGeneral('birthday', value)),
    onChangeCountry: value => dispatch(changeGeneral('country', value)),
    onChangeReceiveEmails: value => dispatch(changeGeneral('receiveEmails', value)),
    onChangeReceiveAnnouncements: value => dispatch(changeGeneral('receiveAnnouncements', value)),
    onReset: () => dispatch(sync()),
    onSave: () => dispatch(saveGeneral()),
  }),
)(GeneralInformation)
