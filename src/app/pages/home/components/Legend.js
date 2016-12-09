import React from 'react'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    width: '18px',
    height: '18px',
    borderRadius: '50%',
    boxSizing: 'border-box',
  },
  'color=blue': {
    border: '1px solid #0288D1',
  },
  'color=green': {
    border: '1px solid #00BB27',
  },
})

const Legend = ({ color = 'blue' }) => (
  <div className={styles({ color })} />
)

export default Legend
