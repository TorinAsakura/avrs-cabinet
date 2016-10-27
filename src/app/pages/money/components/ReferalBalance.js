import React from 'react'
import { Column, Row, Layout } from 'flex-layouts'
import { Block } from 'avrs-ui/src/content'
import { Text, Space } from 'avrs-ui/src/text'

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
          </Layout>
        </Column>
      </Layout>
    </Row>
  </Block>
)

export default ReferalBalance
