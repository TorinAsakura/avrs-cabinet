import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { StyleSheet } from 'elementum'
import { Progress } from 'avrs-ui/src/progress'

const styles = StyleSheet.create({
  self: {
    width: '100%',
    height: '100%',
    background: '#ffffff',
  },
})

const Container = ({ percent, children }) => (
  <div className={styles()}>
    <Progress percent={percent} />
    {children}
  </div>
)

Container.propTypes = {
  percent: PropTypes.number,
  children: PropTypes.element,
}

export default connect(
  state => ({
    percent: state.remote.percent,
  }),
)(Container)
