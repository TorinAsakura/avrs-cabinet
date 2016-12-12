import React from 'react'
import { StyleSheet } from 'elementum'
import { Column, Row, Layout } from 'flex-layouts'
import { Button } from 'avrs-ui/src/button'
import { Block } from 'avrs-ui/src/content'
import { Divider } from 'avrs-ui/src/divider'
import { Input } from 'avrs-ui/src/input'
import { Text } from 'avrs-ui/src/text'

const styles = StyleSheet.create({
  self: {
    width: '100%',
    border: '1px solid #E5E5E5',
    padding: '15px',
    display: 'flex',
    flexDirection: 'column',
  },
  'color=orange': {
    borderLeft: '5px solid #FF6701',
  },
  'color=blue': {
    borderLeft: '5px solid #0288D1',
  },
})

const Balance = ({ children, color }) => (
  <div className={styles({ color })}>
    {children}
  </div>
)

const Transfer = () => (
  <div style={{ width: 924 }}>
    <Block>
      <Row>
        <Layout basis='15px' />
        <Layout justify='center'>
          <Text>
            Перевод средств
          </Text>
        </Layout>
        <Layout basis='15px' />
        <Layout>
          <Divider />
        </Layout>
        <Layout basis='60px' />
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
                      € 578
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
                      € 578
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
            <Layout grow={1} />
          </Column>
        </Layout>
        <Layout basis='60px' />
        <Layout>
          <Column align='center'>
            <Layout grow={1} />
            <Layout>
              <Text>
                Сумма, €
              </Text>
            </Layout>
            <Layout basis='15px' />
            <Layout basis='240px'>
              <Input />
            </Layout>
            <Layout basis='25px' />
            <Layout>
              <Button
                shadow
                rounded
                color='green'
              >
                Перевести
              </Button>
            </Layout>
            <Layout grow={1} />
          </Column>
        </Layout>
        <Layout basis='60px' />
      </Row>
    </Block>
  </div>
)

export default Transfer
