import React from 'react'
import { Notification } from 'avrs-ui/src/notification'
import { Text } from 'avrs-ui/src/text'

const renderMessages = messages =>
  messages.map(({ message, ...props }) => ({
    ...props,
    message: (
      <Text
        size='small'
        color='white'
      >
        {message}
      </Text>
    ),
  }))

const Messages = ({ messages, onDismiss }) => (
  <Notification
    messages={renderMessages(messages)}
    onDismiss={onDismiss}
  />
)

export default Messages
