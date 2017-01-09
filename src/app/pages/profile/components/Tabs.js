import React from 'react'
import { Column, Layout } from 'flex-layouts'
import { Block } from 'avrs-ui/src/content'
import { TabRouteLink } from 'avrs-ui/src/link'

const Tabs = () => (
  <Block attach='bottom'>
    <Column align='center'>
      <Layout basis='10px' />
      <Layout>
        <TabRouteLink to='/profile/general_information'>
          Основная информация
        </TabRouteLink>
      </Layout>
      <Layout>
        <TabRouteLink to='/profile/withdraw'>
          Вывод средств
        </TabRouteLink>
      </Layout>
    </Column>
  </Block>
)

export default Tabs
