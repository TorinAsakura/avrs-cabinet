import React from 'react'
import { Column, Row, Layout } from 'flex-layouts'
import { Block } from 'avrs-ui/src/content'
import { Text, Space } from 'avrs-ui/src/text'
import { RouteLink } from 'avrs-ui/src/link'

const names = {
  Basis: 'Базис',
  Standard: 'Стандарт',
  Premium: 'Премиум',
  Business: 'Бизнес',
}

const Activation = ({ servicePlan = {}, leftTime }) => (
  <Block
    shadow
    offset
    border='green'
  >
    <Row>
      <Layout>
        <Column>
          <Layout>
            <Row>
              <Layout>
                <Text size='large' color='gray400'>
                  {names[servicePlan.name]}
                </Text>
              </Layout>
              <Layout>
                <Text size='xsmall' color='gray400'>
                  Текущий пакет
                </Text>
              </Layout>
            </Row>
          </Layout>
          <Layout grow={1} />
          <Layout>
            <Row>
              <Layout>
                <Text size='large' color='gray400'>
                  {leftTime}
                </Text>
              </Layout>
              <Layout>
                <div style={{ display: 'flex', width: '100%', justifyContent: 'flex-end' }}>
                  <Text size='xsmall' color='gray400'>
                    осталось
                  </Text>
                </div>
              </Layout>
            </Row>
          </Layout>
        </Column>
      </Layout>
      <Layout basis='25px' />
      <Layout>
        <Column>
          <Layout>
            <RouteLink to='/service_plans'>
              <Text
                color='blue400'
                size='xsmall'
              >
                Продлить
              </Text>
            </RouteLink>
            <Space />
            <Text
              color='blue400'
              size='xsmall'
            >
              &#10095;
            </Text>
          </Layout>
          <Layout basis='25px' />
          <Layout>
            <RouteLink to='/service_plans'>
              <Text
                color='blue400'
                size='xsmall'
              >
                Переключить
              </Text>
            </RouteLink>
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

export default Activation
