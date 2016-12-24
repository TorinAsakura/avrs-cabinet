import React from 'react'
import { Column, Row, Layout } from 'flex-layouts'
import { Text, Space } from 'avrs-ui/src/text'
import { Input } from 'avrs-ui/src/input'
import { Label } from 'avrs-ui/src/label'
import { Link } from 'avrs-ui/src/link'

const CardMethod = ({ number, amount, onChangeNumber, onChangeAmount, onSent }) => (
  <Row>
    <Layout basis='40px' />
    <Layout justify='center'>
      <Text
        size='medium'
        color='gray400'
      >
        Mastercard Aversis
      </Text>
    </Layout>
    <Layout basis='2px' />
    <Layout justify='center'>
      <Text
        weight='light'
        color='gray400'
      >
        Введите данные для перевода
      </Text>
    </Layout>
    <Layout basis='40px' />
    <Layout>
      <Column>
        <Layout grow={1} />
        <Layout basis='350px'>
          <Row>
            <Layout>
              <Label>
                Номер карты
              </Label>
            </Layout>
            <Layout basis='8px' />
            <Layout>
              <Input
                value={number}
                onChange={onChangeNumber}
              />
            </Layout>
            <Layout basis='16px' />
            <Layout>
              <Label>
                Сумма, €
              </Label>
            </Layout>
            <Layout basis='8px' />
            <Layout>
              <Input
                value={amount}
                onChange={onChangeAmount}
              />
            </Layout>
          </Row>
        </Layout>
        <Layout grow={1} />
      </Column>
    </Layout>
    <Layout basis='25px' />
    <Layout justify='center'>
      <Link onClick={onSent}>
        <Text
          color='blue400'
          size='small'
        >
          Перевести
        </Text>
      </Link>
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

export default CardMethod
