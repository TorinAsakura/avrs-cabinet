import React from 'react'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    width: '100%',
    border: '1px solid #E5E5E5',
    padding: '15px',
    display: 'flex',
    flexDirection: 'column',
  },
  'color=orange': {
    borderLeft: '5px solid #FF6701',
  },
  'color=blue': {
    borderLeft: '5px solid #0288D1',
  },
})

const Balance = ({ children, color }) => (
  <div className={styles({ color })}>
    {children}
  </div>
)

export default Balance
