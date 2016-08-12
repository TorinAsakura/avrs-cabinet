import React, { PropTypes } from 'react'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    width: '100%',
    height: '100%',
    background: '#f1f2f3',
  },
})

const Container = ({ children }) => (
  <div className={styles()}>
    {children}
  </div>
)

Container.propTypes = {
  children: PropTypes.element,
}

export default Container
