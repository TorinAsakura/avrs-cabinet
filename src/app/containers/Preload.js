import React, { Component } from 'react'
import { connect } from 'react-redux'
import { init } from '../actions/init'
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
    const { process } = this.state

    if (process) {
      this.props.onInit()
      this.setState({ start: (new Date()).getTime() })
    }
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

  hideSaver = () => {
    this.setState({ hide: true })

    setTimeout(() => {
      this.setState({ initialized: true })
    }, 500)
  }

  render() {
    const { children } = this.props
    const { initialized, process, hide } = this.state

    if (!process) {
      return children
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
    initialized: state.config.initialized,
    token: state.security.token,
  }),
  dispatch => ({
    onInit: () => dispatch(init()),
  }),
)(Preload)
