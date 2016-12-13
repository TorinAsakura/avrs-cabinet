import React from 'react'
import { Column, Layout } from 'flex-layouts'
import { Block } from 'avrs-ui/src/content'
import { TabRouteLink } from 'avrs-ui/src/link'

const Tabs = () => (
  <Block attach='bottom'>
    <Column align='center'>
      <Layout>
        <TabRouteLink to='/money/rent'>
          Аренда
        </TabRouteLink>
      </Layout>
      <Layout>
        <TabRouteLink to='/money/referal'>
          Реферальная сеть
        </TabRouteLink>
      </Layout>
      <Layout>
        <TabRouteLink to='/money/operations_history'>
          История операций
        </TabRouteLink>
      </Layout>
    </Column>
  </Block>
)

export default Tabs
