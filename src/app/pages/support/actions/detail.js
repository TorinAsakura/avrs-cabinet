import gql from 'graphql-tag'
import * as actions from '../constants/detail'

export function load(id) {
  return async (dispatch, getState, client) => {
    const { data } = await client.query({
      query: gql`
        query {
          supportRequest (id: "${id}") {
            id
            subject
            status
            createdAt
            messages {
              id
              type
              body
              read
              createdAt
            }
          }
        }
      `,
    })

    dispatch({
      type: actions.load,
      request: data.supportRequest,
    })
  }
}

export function change(message) {
  return {
    type: actions.change,
    message,
  }
}

export function send() {
  return async (dispatch, getState, client) => {
    const { message, id } = getState().support.detail

    if (message && message.length === 0) {
      return
    }

    const { data } = await client.mutate({
      mutation: gql`
        mutation sendSupportRequestMessage($requestId: ID!, $message: String!) {
          sendSupportRequestMessage(requestId: $requestId, message: $message) {
            errors {
              key
              message
            }
            message {
              id
              type
              body
              read
              createdAt
            }
          }
        }
      `,
      variables: {
        message,
        requestId: id,
      },
    })

    if (data.sendSupportRequestMessage.errors.length === 0) {
      dispatch({
        type: actions.addMessage,
        message: data.sendSupportRequestMessage.message,
      })
    }
  }
}
