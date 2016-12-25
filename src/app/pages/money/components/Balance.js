import React from 'react'
import { Column, Row, Layout } from 'flex-layouts'
import { Block } from 'avrs-ui/src/content'
import { Text, Space } from 'avrs-ui/src/text'
import { RouteLink } from 'avrs-ui/src/link'

const Balance = ({ balance = 0 }) => (
  <Block
    shadow
    offset
    border='blue'
  >
    <Row>
      <Layout>
        <Text size='large' color='gray400'>
          € {balance}
        </Text>
      </Layout>
      <Layout>
        <Text size='xsmall' color='gray400'>
          Основной счет
        </Text>
      </Layout>
      <Layout basis='25px' />
      <Layout>
        <Column>
          <Layout>
            <RouteLink to='/money/operations_history'>
              <Text
                color='blue400'
                size='xsmall'
              >
                История операций
              </Text>
            </RouteLink>
            <Space />
            <Text
              color='blue400'
              size='xsmall'
            >
              &#10095;
            </Text>
          </Layout>
          <Layout basis='25px' />
          <Layout>
            <RouteLink to='/transfer/external'>
              <Text
                color='blue400'
                size='xsmall'
              >
                Вывести
              </Text>
            </RouteLink>
            <Space />
            <Text
              color='blue400'
              size='xsmall'
            >
              &#10095;
            </Text>
          </Layout>
        </Column>
      </Layout>
    </Row>
  </Block>
)

export default Balance
