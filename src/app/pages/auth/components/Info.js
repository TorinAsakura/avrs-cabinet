import React, { PropTypes } from 'react'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    background: '#f6f7fa',
    borderTop: '1px solid #f2f2f2',
    boxSizing: 'border-box',
    padding: '14px',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

const Info = ({ children }) => (
  <div className={styles()}>
    {children}
  </div>
)

Info.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]),
}

export default Info
