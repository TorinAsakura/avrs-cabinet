import React, { cloneElement } from 'react'
import { Column, Row, Layout } from 'flex-layouts'
import { Condition } from 'avrs-ui/src/condition'
import { Block } from 'avrs-ui/src/content'
import { TabRouteLink } from 'avrs-ui/src/link'

const Referal = ({ children, ...stat }) => (
  <Row>
    <Layout basis='15px' />
    <Condition match={stat.id}>
      <Layout>
        <Block attach='bottom'>
          <Column align='center'>
            <Layout>
              <TabRouteLink to={`/network/tree/${stat.id}/stat`}>
                Личная статистика
              </TabRouteLink>
            </Layout>
          </Column>
        </Block>
      </Layout>
    </Condition>
    <Condition match={stat.id}>
      <Layout>
        {cloneElement(children, stat)}
      </Layout>
    </Condition>
  </Row>
)

export default Referal
