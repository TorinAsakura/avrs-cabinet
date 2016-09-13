import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { StyleSheet } from 'elementum'
import { Progress } from '../../ui/progress'

const styles = StyleSheet.create({
  self: {
    width: '100%',
    height: '100%',
    background: '#f1f2f3',
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
