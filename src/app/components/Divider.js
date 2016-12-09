import React from 'react'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    width: '100%',
    height: '3px',
    background: '#f3f5f8',
    boxShadow: 'inset 0px 1px 3px 0px rgba(29, 25, 42, 0.15)',
  },
})

const Divider = () => (
  <div className={styles()} />
)

export default Divider
