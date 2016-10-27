import React from 'react'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    width: '145px',
    height: '99px',
    backgroundImage: 'url(./prepaid-card-small.png)',
  },
})

const PrepaidCardImage = () => (
  <div className={styles()} />
)

export default PrepaidCardImage
