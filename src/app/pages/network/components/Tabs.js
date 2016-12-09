import React from 'react'
import { Column, Layout } from 'flex-layouts'
import { Block } from 'avrs-ui/src/content'
import { TabRouteLink } from 'avrs-ui/src/link'

const Tabs = () => (
  <Block attach='bottom'>
    <Column align='center'>
      <Layout>
        <TabRouteLink to='/network/top'>
          Топ рефералов
        </TabRouteLink>
      </Layout>
      <Layout>
        <TabRouteLink to='/network/direct'>
          Прямые рефералы
        </TabRouteLink>
      </Layout>
      <Layout>
        <TabRouteLink to='/network/tree'>
          Дерево
        </TabRouteLink>
      </Layout>
    </Column>
  </Block>
)

export default Tabs
