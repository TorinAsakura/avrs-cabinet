import React from 'react'
import { Row, Layout } from 'flex-layouts'
import { Text } from 'avrs-ui/src/text'
import OutputMethod from './OutputMethod'

const OutputMethods = ({ onSelectSepa, onSelectPerfectMoney, onSelectBitconin, onSelectMastercard }) => (
  <Row>
    <Layout basis='40px' />
    <Layout justify='center'>
      <Text
        size='medium'
        color='gray400'
      >
        Вывод средств
      </Text>
    </Layout>
    <Layout basis='2px' />
    <Layout justify='center'>
      <Text
        weight='light'
        color='gray400'
      >
        Выберите удобный способ
      </Text>
    </Layout>
    <Layout basis='25px' />
    <Layout justify='center'>
      <OutputMethod onClick={onSelectSepa}>
        SEPA Direct transfer
      </OutputMethod>
    </Layout>
    <Layout basis='18px' />
    <Layout justify='center'>
      <OutputMethod onClick={onSelectPerfectMoney}>
        Perfect Money
      </OutputMethod>
    </Layout>
    <Layout basis='18px' />
    <Layout justify='center'>
      <OutputMethod onClick={onSelectBitconin}>
        Bitcoin
      </OutputMethod>
    </Layout>
    <Layout basis='18px' />
    <Layout justify='center'>
      <OutputMethod onClick={onSelectMastercard}>
        Mastercard Aversis
      </OutputMethod>
    </Layout>
    <Layout basis='70px' />
  </Row>
)

export default OutputMethods
