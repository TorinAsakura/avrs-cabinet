import React from 'react'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    width: '250px',
    fontSize: '16px',
    cursor: 'pointer',
    padding: '20px 0px',
    borderWidth: '1px',
    borderStyle: 'solid',
    background: 'transparent',
    textDecoration: 'none',
    outline: 0,
    color: '#505458',
    borderColor: '#E5E5E5',
    textAlign: 'center',
    '&:hover': {
      borderColor: '#0288D1',
      color: '#0288D1',
    },
  },
})

const OutputMethod = ({ children, onClick }) => (
  <button
    className={styles()}
    onClick={onClick}
  >
    {children}
  </button>
)

export default OutputMethod
