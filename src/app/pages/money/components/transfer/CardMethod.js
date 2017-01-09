import React from 'react'
import { Column, Row, Layout } from 'flex-layouts'
import { Condition } from 'avrs-ui/src/condition'
import { Text, Space } from 'avrs-ui/src/text'
import { Input } from 'avrs-ui/src/input'
import { Label } from 'avrs-ui/src/label'
import { RouteLink, Link } from 'avrs-ui/src/link'

const CardMethod = ({ number, amount, errors, onChangeAmount, onSent }) => (
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
                readOnly
                value={number}
              />
            </Layout>
            <Condition match={errors.number}>
              <Row>
                <Layout basis='5px' />
                <Layout>
                  <Text color='red400' size='xsmall'>
                    {errors.number}
                  </Text>
                </Layout>
              </Row>
            </Condition>
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
                invalid={errors.amount}
                onChange={onChangeAmount}
              />
            </Layout>
            <Condition match={errors.amount}>
              <Row>
                <Layout basis='5px' />
                <Layout>
                  <Text color='red400' size='xsmall'>
                    {errors.amount}
                  </Text>
                </Layout>
              </Row>
            </Condition>
          </Row>
        </Layout>
        <Layout grow={1} />
      </Column>
    </Layout>
    <Layout basis='25px' />
    <Condition match={number}>
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
    </Condition>
    <Condition match={!number}>
      <Layout justify='center'>
        <Text size='xsmall'>
          Для совершения перевода, необходимо заполнить номер карты в
        </Text>
        <Space />
        <RouteLink to='/profile/withdraw'>
          <Text size='xsmall' color='blue400'>
            профайле
          </Text>
        </RouteLink>
        <Text size='xsmall'>
          .
        </Text>
      </Layout>
    </Condition>
    <Layout basis='70px' />
  </Row>
)

export default CardMethod
