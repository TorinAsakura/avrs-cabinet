import React from 'react'
import { Column, Row, Layout } from 'flex-layouts'
import { Block } from 'avrs-ui/src/content'
import { Text, Space } from 'avrs-ui/src/text'
import { RouteLink } from 'avrs-ui/src/link'

const names = {
  basis: 'Базис',
  standart: 'Стандарт',
  premium: 'Премиум',
  business: 'Бизнес',
}

const Activation = ({ servicePlan = {}, leftTime }) => (
  <Block
    shadow
    offset
    border='blue'
  >
    <Row>
      <Layout>
        <Text size='large' color='gray400'>
          {leftTime}
        </Text>
      </Layout>
      <Layout>
        <Text size='xsmall' color='gray400'>
          Пакет {names[servicePlan.type]}
        </Text>
      </Layout>
      <Layout basis='25px' />
      <Layout>
        <Column>
          <Layout>
            <RouteLink to='/service-plans'>
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
        </Column>
      </Layout>
    </Row>
  </Block>
)

export default Activation
