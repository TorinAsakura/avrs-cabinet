import React from 'react'
import { Column, Row, Layout } from 'flex-layouts'
import { Condition } from 'avrs-ui/src/condition'
import { Button } from 'avrs-ui/src/button'
import { Block } from 'avrs-ui/src/content'
import { Divider } from 'avrs-ui/src/divider'
import { Input } from 'avrs-ui/src/input'
import { Text } from 'avrs-ui/src/text'
import PaymentSuccess from './PaymentSuccess'
import Balance from './Balance'

const Internal = ({ success, balance, referalBalance, amount, errors, onChange, onSend }) => (
  <Column>
    <Layout grow={1} />
    <Layout basis='924px'>
      <Block>
        <Row>
          <Layout basis='15px' />
          <Layout>
            <Column>
              <Layout grow={1} />
              <Layout>
                <Text>
                  Перевод средств
                </Text>
              </Layout>
              <Layout grow={1} />
            </Column>
          </Layout>
          <Layout basis='15px' />
          <Layout>
            <Divider />
          </Layout>
          <Layout basis='60px' />
          <Condition match={!success}>
            <Layout>
              <Row>
                <Layout>
                  <Column>
                    <Layout grow={1} />
                    <Layout basis='250px'>
                      <Balance color='orange'>
                        <Row>
                          <Layout>
                            <Text
                              color='gray250'
                              size='large'
                            >
                              € {referalBalance}
                            </Text>
                          </Layout>
                          <Layout basis='4px' />
                          <Layout>
                            <Text
                              color='gray250'
                              size='small'
                            >
                              Реферальный счет
                            </Text>
                          </Layout>
                        </Row>
                      </Balance>
                    </Layout>
                    <Layout basis='30px' />
                    <Layout align='center'>
                      <Text
                        size='large'
                        color='gray200'
                      >
                        &#10095;
                      </Text>
                    </Layout>
                    <Layout basis='30px' />
                    <Layout basis='250px'>
                      <Balance color='blue'>
                        <Row>
                          <Layout>
                            <Text
                              color='gray250'
                              size='large'
                            >
                              € {balance}
                            </Text>
                          </Layout>
                          <Layout basis='4px' />
                          <Layout>
                            <Text
                              color='gray250'
                              size='small'
                            >
                              Основной счет
                            </Text>
                          </Layout>
                        </Row>
                      </Balance>
                    </Layout>
                    <Layout basis='20px' />
                    <Layout grow={1} />
                  </Column>
                </Layout>
                <Layout basis='60px' />
                <Layout>
                  <Column align='center'>
                    <Layout grow={1} />
                    <Layout basis='80px'>
                      <Text color='gray250'>
                        Сумма, €
                      </Text>
                    </Layout>
                    <Layout basis='240px'>
                      <Input
                        value={amount}
                        invalid={errors.amount}
                        onChange={onChange}
                      />
                    </Layout>
                    <Layout basis='70px' />
                    <Layout grow={1} />
                  </Column>
                </Layout>
                <Layout basis='5px' />
                <Layout basis='25px' justify='center'>
                  <Condition match={errors.amount}>
                    <Column justify='center'>
                      <Layout basis='10px' />
                      <Layout basis='240px'>
                        <Text color='red400' size='xsmall'>
                          {errors.amount}
                        </Text>
                      </Layout>
                    </Column>
                  </Condition>
                </Layout>
                <Layout justify='center'>
                  <Button
                    shadow
                    rounded
                    color='green'
                    onClick={onSend}
                  >
                    Перевести
                  </Button>
                </Layout>
              </Row>
            </Layout>
          </Condition>
          <Condition match={success}>
            <Layout>
              <PaymentSuccess />
            </Layout>
          </Condition>
          <Layout basis='60px' />
        </Row>
      </Block>
    </Layout>
    <Layout grow={1} />
  </Column>
)

export default Internal
