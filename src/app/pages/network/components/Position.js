import React from 'react'
import { Column, Row, Layout } from 'flex-layouts'
import { Block } from 'avrs-ui/src/content'
import { Text, Space } from 'avrs-ui/src/text'

const getPosition = (salesBalance) => {
  if (salesBalance < 5000) {
    return 'Starting'
  } else if (salesBalance < 20000) {
    return 'Agent'
  } else if (salesBalance < 60000) {
    return 'Seller'
  } else if (salesBalance < 120000) {
    return 'Manager'
  } else if (salesBalance < 250000) {
    return 'Gold'
  }

  return 'Platinum'
}

const Position = ({ salesBalance }) => (
  <Block
    shadow
    offset
    border='red'
  >
    <Row>
      <Layout>
        <Text size='large' color='gray400'>
          {getPosition(salesBalance)}
        </Text>
      </Layout>
      <Layout>
        <Text size='xsmall' color='gray400'>
          Реф. позиция
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
              Позиции
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

export default Position
