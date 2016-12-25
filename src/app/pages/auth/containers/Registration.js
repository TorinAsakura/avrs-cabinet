import { connect } from 'react-redux'
import { injectIntl } from 'react-intl'
import { change, register, nextStep, prevStep } from '../actions/registration'
import Registration from '../components/Registration'

export default connect(
  state => ({
    step: state.auth.registration.step,
    email: state.auth.registration.email,
    password: state.auth.registration.password,
    passwordConfirmation: state.auth.registration.passwordConfirmation,
    inviteCode: state.auth.registration.inviteCode,
    phone: state.auth.registration.phone,
    country: state.auth.registration.country,
    sex: state.auth.registration.sex,
    birthday: state.auth.registration.birthday,
    agreement: state.auth.registration.agreement,
    errors: state.auth.registration.errors,
  }),
  dispatch => ({
    onChangeEmail: value => dispatch(change('email', value)),
    onChangeFirstName: value => dispatch(change('firstName', value)),
    onChangeLastName: value => dispatch(change('lastName', value)),
    onChangePassword: value => dispatch(change('password', value)),
    onChangePasswordConfirmation: value => dispatch(change('passwordConfirmation', value)),
    onChangeInviteCode: value => dispatch(change('inviteCode', value)),
    onChangePhone: value => dispatch(change('phone', value)),
    onChangeCountry: value => dispatch(change('country', value)),
    onChangeSex: value => dispatch(change('sex', value)),
    onChangeBirthday: value => dispatch(change('birthday', value)),
    onChangeCaptcha: value => dispatch(change('captcha', value)),
    onChangeAgreement: value => dispatch(change('agreement', value)),
    onNextStep: () => dispatch(nextStep()),
    onPrevStep: () => dispatch(prevStep()),
    onRegister: () => dispatch(register()),
  }),
)(injectIntl(Registration))
