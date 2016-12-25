import React from 'react'
import { Row, Layout } from 'flex-layouts'
import { Text, Space } from 'avrs-ui/src/text'
import { RouteLink } from 'avrs-ui/src/link'
import { MoneyIcon } from 'avrs-ui/src/icons'

const PaymentSuccess = () => (
  <Row>
    <Layout basis='40px' />
    <Layout justify='center'>
      <Text
        size='medium'
        color='gray400'
      >
        Успешно!
      </Text>
    </Layout>
    <Layout basis='2px' />
    <Layout justify='center'>
      <Text
        weight='light'
        color='gray400'
      >
        Перевод отправлен на обработку
      </Text>
    </Layout>
    <Layout basis='40px' />
    <Layout justify='center'>
      <MoneyIcon
        height={70}
        fill='#899BA8'
      />
    </Layout>
    <Layout basis='35px' />
    <Layout justify='center'>
      <RouteLink to='/money/operations_history'>
        <Text
          color='blue400'
          size='small'
        >
          Деньги
        </Text>
      </RouteLink>
      <Space />
      <Text
        color='blue400'
        size='small'
      >
        &#10095;
      </Text>
    </Layout>
    <Layout basis='70px' />
  </Row>
)

export default PaymentSuccess
