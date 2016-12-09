/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    cursor: 'pointer',
    transition: 'all .1s ease-in-out',
    '&:hover': {
      transform: 'scale(1.1)',
    },
  },
})

const ActivationAction = ({ children, onClick }) => (
  <div
    className={styles()}
    onClick={onClick}
  >
    {children}
  </div>
)

export default ActivationAction
