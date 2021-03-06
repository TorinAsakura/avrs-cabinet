import React from 'react'
import { Link } from 'avrs-ui/src/link'
import { Column, Row, Layout } from 'flex-layouts'
import { Block } from 'avrs-ui/src/content'
import { Text, Space } from 'avrs-ui/src/text'
import { Condition } from 'avrs-ui/src/condition'
import { LockIcon } from 'avrs-ui/src/icons'
import ActivationAction from './ActivationAction'

const names = {
  basis: 'Базис',
  standart: 'Стандарт',
  premium: 'Премиум',
  business: 'Бизнес',
}

const statuses = {
  INACTIVE: 'Неактивированный пакет',
  ACTIVE: 'Активный пакет',
  STOPPED: 'Приостановленный пакет',
}

const Activation = ({ servicePlan = {}, id, status, isInactive, isActive, leftTime, onStart }) => (
  <Condition match={servicePlan}>
    <Block
      offset
      shadow
      border={isActive ? 'green' : null}
    >
      <Column>
        <Layout basis='45%'>
          <Row>
            <Layout>
              <Text size='large' color='gray400'>
                {names[servicePlan.type]}
              </Text>
            </Layout>
            <Layout basis='4px' />
            <Layout>
              <Text size='xsmall' color='gray400'>
                {statuses[status]}
              </Text>
            </Layout>
            <Condition match={isInactive}>
              <Layout basis='25px' />
            </Condition>
            <Layout>
              <Column>
                <Condition match={isInactive}>
                  <Layout>
                    <Link onClick={() => onStart(id)}>
                      <Text
                        color='blue400'
                        size='xsmall'
                      >
                        Активировать
                      </Text>
                      <Space />
                      <Text
                        color='blue400'
                        size='xsmall'
                      >
                        &#10095;
                      </Text>
                    </Link>
                  </Layout>
                </Condition>
                <Condition match={isInactive}>
                  <Layout basis='25px' />
                </Condition>
                <Layout>
                  <Condition match={isInactive}>
                    <Link>
                      <Text
                        color='blue400'
                        size='xsmall'
                      >
                        Передать
                      </Text>
                      <Space />
                      <Text
                        color='blue400'
                        size='xsmall'
                      >
                        &#10095;
                      </Text>
                    </Link>
                  </Condition>
                </Layout>
              </Column>
            </Layout>
          </Row>
        </Layout>
        <Layout basis='10%' align='center' justify='center'>
          <Condition match={isInactive}>
            <ActivationAction onClick={() => onStart(id)}>
              <LockIcon height={30} fill='#E1E4E6' />
            </ActivationAction>
          </Condition>
        </Layout>
        <Layout basis='45%'>
          <Column>
            <Layout grow={1} />
            <Layout>
              <Row>
                <Layout>
                  <Text color='gray300' size='large'>
                    {leftTime}
                  </Text>
                </Layout>
                <Layout>
                  <div style={{ display: 'flex', width: '100%', justifyContent: 'flex-end' }}>
                    <Text color='gray300' size='xsmall'>
                      осталось
                    </Text>
                  </div>
                </Layout>
              </Row>
            </Layout>
          </Column>
        </Layout>
      </Column>
    </Block>
  </Condition>
)

export default Activation
