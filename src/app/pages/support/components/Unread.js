import React from 'react'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    background: '#E75656',
    color: '#ffffff',
    fontSize: '12px',
    padding: '3px 6px',
    borderRadius: '50%',
    boxSizing: 'border-box',
    fontWeight: 400,
  },
})

const Unread = ({ messages = 0 }) => {
  if (messages === 0) {
    return null
  }

  return (
    <span className={styles()}>
      {messages}
    </span>
  )
}

export default Unread
