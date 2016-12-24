import React from 'react'
import { Column, Row, Layout } from 'flex-layouts'
import { Block } from 'avrs-ui/src/content'
import { Text, Space } from 'avrs-ui/src/text'
import { RouteLink } from 'avrs-ui/src/link'

const ReferalBalance = ({ balance = 0 }) => (
  <Block
    shadow
    offset
    border='orange'
  >
    <Row>
      <Layout>
        <Text size='large' color='gray400'>
          € {balance}
        </Text>
      </Layout>
      <Layout>
        <Text size='xsmall' color='gray400'>
          Реферальный счет
        </Text>
      </Layout>
      <Layout basis='25px' />
      <Layout>
        <Column>
          <Layout>
            <RouteLink to='/transfer/internal'>
              <Text
                color='blue400'
                size='xsmall'
              >
                Вывести на основной
              </Text>
              <Space />
              <Text
                color='blue400'
                size='xsmall'
              >
                &#10095;
              </Text>
            </RouteLink>
          </Layout>
        </Column>
      </Layout>
    </Row>
  </Block>
)

export default ReferalBalance
