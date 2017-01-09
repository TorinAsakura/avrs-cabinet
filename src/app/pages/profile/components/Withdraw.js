import React from 'react'
import { Column, Row, Layout } from 'flex-layouts'
import { Condition } from 'avrs-ui/src/condition'
import { Button } from 'avrs-ui/src/button'
import { Block } from 'avrs-ui/src/content'
import { Label } from 'avrs-ui/src/label'
import { Input } from 'avrs-ui/src/input'
import { Text } from 'avrs-ui/src/text'

const Withdraw = ({ cardNumber, btcAddress, errors, onChangeCardNumber, onChangeBtcAddress, onSave }) => (
  <Block
    offset
    shadow
  >
    <Column>
      <Layout basis='300px'>
        <Row>
          <Layout>
            <Label>
              Номер карты:
            </Label>
          </Layout>
          <Layout basis='5px' />
          <Layout>
            <Input
              size='20'
              value={cardNumber}
              invalid={errors.cardNumber}
              mask='1111 1111 1111 1111'
              placeholder='xxxx xxxx xxxx xxxx'
              onChange={onChangeCardNumber}
            />
          </Layout>
          <Condition match={errors.cardNumber}>
            <Row>
              <Layout basis='5px' />
              <Layout>
                <Text color='red400' size='xsmall'>
                  {errors.cardNumber}
                </Text>
              </Layout>
            </Row>
          </Condition>
          <Layout basis='20px' />
          <Layout>
            <Label>
              Bitcoin адрес:
            </Label>
          </Layout>
          <Layout basis='5px' />
          <Layout>
            <Input
              value={btcAddress}
              invalid={errors.btcAddress}
              onChange={onChangeBtcAddress}
            />
          </Layout>
          <Condition match={errors.btcAddress}>
            <Row>
              <Layout basis='5px' />
              <Layout>
                <Text color='red400' size='xsmall'>
                  {errors.btcAddress}
                </Text>
              </Layout>
            </Row>
          </Condition>
          <Layout basis='30px' />
          <Layout>
            <Column>
              <Layout>
                <Button
                  shadow
                  rounded
                  color='green'
                  onClick={onSave}
                >
                  Сохранить
                </Button>
              </Layout>
            </Column>
          </Layout>
        </Row>
      </Layout>
    </Column>
  </Block>
)

export default Withdraw
