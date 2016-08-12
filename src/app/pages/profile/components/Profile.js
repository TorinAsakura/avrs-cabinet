import React from 'react'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    background: 'rgba(255, 255, 255, 0.95)',
    boxShadow: '0px 1px 2px 2px rgba(0,0,0,0.05)',
    padding: '40px',
    margin: '10px',
    width: '100%',
    boxSizing: 'border-box',
  },
  clean: {
    padding: 0,
  },
  left: {
    marginLeft: '15px',
    marginRight: '5px',
  },
  right: {
    marginRight: '15px',
  },
})

const Profile = () => (
  <div className={styles()}>
    Profile
  </div>
)

export default Profile
