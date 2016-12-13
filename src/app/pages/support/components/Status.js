import React from 'react'
import { Text } from 'avrs-ui/src/text'

const Status = ({ children }) => {
  if (children === 'OPEN') {
    return (
      <Text
        size='small'
        color='green500'
      >
        Открыто
      </Text>
    )
  }

  return (
    <Text
      size='small'
      color='red400'
    >
      Закрыто
    </Text>
  )
}

export default Status
