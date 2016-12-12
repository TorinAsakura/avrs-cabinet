import React from 'react'
import { Column, Row, Layout } from 'flex-layouts'
import { Text } from 'avrs-ui/src/text'
import { Divider } from 'avrs-ui/src/divider'
import { Block } from 'avrs-ui/src/content'
import { RouteLink } from 'avrs-ui/src/link'
import { Messages, Reply } from 'avrs-ui/src/chat'
import Status from './Status'

const Detail = ({ subject, status, message, messages = [], onChangeMessage, onSend }) => (
  <Column>
    <Layout grow={1} />
    <Layout basis='924px'>
      <Block>
        <Row>
          <Layout basis='15px' />
          <Layout>
            <Column align='center'>
              <Layout basis='25px' />
              <Layout>
                <Row>
                  <Layout>
                    <Text color='gray400'>
                      {subject}
                    </Text>
                  </Layout>
                  <Layout>
                    <Status>
                      {status}
                    </Status>
                  </Layout>
                </Row>
              </Layout>
              <Layout grow={1} />
              <Layout>
                <RouteLink to='/support'>
                  <Text
                    size='xsmall'
                    color='blue400'
                  >
                    Вернуться к списку
                  </Text>
                </RouteLink>
              </Layout>
              <Layout basis='25px' />
            </Column>
          </Layout>
          <Layout basis='10px' />
          <Layout>
            <Divider />
          </Layout>
          <Layout basis='20px' />
          <Layout>
            <Column>
              <Layout basis='30px' />
              <Layout grow={1}>
                <Messages messages={messages} />
              </Layout>
              <Layout basis='30px' />
            </Column>
          </Layout>
          <Layout basis='20px' />
          <Layout>
            <Divider />
          </Layout>
          <Layout basis='15px' />
          <Layout>
            <Reply
              placeholder='Новое сообщение ...'
              value={message}
              onChange={onChangeMessage}
              onSend={onSend}
            />
          </Layout>
          <Layout basis='15px' />
        </Row>
      </Block>
    </Layout>
    <Layout grow={1} />
  </Column>
)

export default Detail
