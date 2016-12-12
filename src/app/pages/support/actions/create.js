import gql from 'graphql-tag'
import * as actions from '../constants/create'
import { load as loadDetail } from '../constants/detail'
import { add as addToList } from '../constants/list'
import { load as loadList } from './list'

export function change(field, value) {
  return {
    type: actions.change,
    field,
    value,
  }
}

export function send(router) {
  return async (dispatch, getState, client) => {
    const { subject, message } = getState().support.create

    const { data } = await client.mutate({
      mutation: gql`
        mutation createSupportRequest($subject: String!, $message: String!) {
          createSupportRequest(subject: $subject, message: $message) {
            errors {
              key
              message
            }
            request {
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
        }
      `,
      variables: {
        subject,
        message,
      },
    })

    if (data.createSupportRequest.errors.length > 0) {
      dispatch({
        type: actions.setErrors,
        errors: data.createSupportRequest.errors,
      })
    } else {
      if (getState().support.list.requests.length === 0) {
        dispatch(loadList())
      } else {
        dispatch({
          type: addToList,
          request: data.createSupportRequest.request,
        })
      }

      dispatch({
        type: loadDetail,
        request: data.createSupportRequest.request,
      })

      router.push(`/support/${data.createSupportRequest.request.id}`)
    }
  }
}
