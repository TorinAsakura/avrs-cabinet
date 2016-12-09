import React from 'react'
import { Column, Row, Layout } from 'flex-layouts'
import { Block } from 'avrs-ui/src/content'
import { Text, Space } from 'avrs-ui/src/text'
import PrepaidCardImage from './PrepaidCardImage'

const PrepaidCard = () => (
  <Block shadow>
    <Column align='center'>
      <Layout>
        <PrepaidCardImage />
      </Layout>
      <Layout basis='25px' />
      <Layout basis='460px'>
        <Row>
          <Layout>
            <Text color='black400' weight='medium' size='small'>
              Prepaid Card
            </Text>
          </Layout>
          <Layout basis='4px' />
          <Layout>
            <Text color='black400' lineHeight='extended' size='small'>
              Для удобства расчёта с нашими клиентами мы предлагаем Aversis Mastercard
            </Text>
          </Layout>
        </Row>
      </Layout>
      <Layout grow={1} />
      <Layout>
        <Text
          color='blue400'
          size='small'
          lineHeight='extended'
        >
          Регистрация карты
        </Text>
        <Space />
        <Text
          color='blue400'
          size='small'
          lineHeight='extended'
        >
          &#10095;
        </Text>
      </Layout>
      <Layout basis='35px' />
    </Column>
  </Block>
)

export default PrepaidCard
