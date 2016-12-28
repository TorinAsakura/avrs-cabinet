import React, { Component } from 'react'
import { connect } from 'react-redux'
import { init } from '../actions/init'
import { sendActivation, activate } from '../actions/user'
import Saver from '../components/Saver'

class Preload extends Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      initialized: props.initialized,
      hide: false,
      process: !!props.token,
    }
  }

  componentWillMount() {
    const { token, store } = this.props
    const { process } = this.state

    if (/^\/auth\/activate\//.test(window.location.pathname)) {
      this.sendActivation()
    }

    if (!token) {
      if (!/^\/auth/.test(window.location.pathname)) {
        store.history.push('/auth/login')

        return null
      }
    }

    if (process) {
      this.props.onInit()
      this.setState({ start: (new Date()).getTime() })
    }

    return null
  }

  componentWillReceiveProps(nextProps) {
    const { process } = this.state

    if (!process) {
      return
    }

    if (nextProps.initialized !== this.props.initialized && nextProps.initialized) {
      if (((new Date()).getTime() - this.state.start) > 1000) {
        this.hideSaver()
      } else {
        setTimeout(() => {
          this.hideSaver()
        }, 1000)
      }
    }
  }

  sendActivation = () => {
    const { onActivate } = this.props

    const parts = window.location.pathname.split('/')

    onActivate(parts[parts.length - 1])

    this.setState({ activation: true })
  }

  hideSaver = () => {
    this.setState({ hide: true })

    setTimeout(() => {
      this.setState({ initialized: true })
    }, 500)
  }

  render() {
    const { children, notActivated, activationSent, activationError, onSendActivation } = this.props
    const { initialized, process, hide, activation } = this.state

    if (!process) {
      return children
    }

    if (activation) {
      return (
        <Saver
          activationError={activationError}
        />
      )
    }

    if (notActivated === true) {
      return (
        <Saver
          notActivated
          activationSent={activationSent}
          onSendActivation={onSendActivation}
        />
      )
    }

    if (!initialized) {
      return (
        <Saver hide={hide} />
      )
    }

    return children
  }
}

export default connect(
  state => ({
    notActivated: state.user.notActivated,
    activationSent: state.user.activationSent,
    activationError: state.user.activationError,
    initialized: state.config.initialized,
    token: state.security.token,
  }),
  dispatch => ({
    onInit: () => dispatch(init()),
    onActivate: token => dispatch(activate(token)),
    onSendActivation: () => dispatch(sendActivation()),
  }),
)(Preload)
