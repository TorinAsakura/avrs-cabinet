import React from 'react'
import { Column, Row, Layout } from 'flex-layouts'
import PrepaidCard from '../components/PrepaidCard/PrepaidCard'
import Tabs from '../components/Tabs'
import Balance from './Balance'
import ReferalBalance from './ReferalBalance'

const Money = ({ children }) => (
  <Column>
    <Layout grow={1} />
    <Layout basis='924px'>
      <Row>
        <Layout>
          <Column>
            <Layout shrink={1} basis='50%'>
              <Balance />
            </Layout>
            <Layout basis='25px' />
            <Layout shrink={1} basis='50%'>
              <ReferalBalance />
            </Layout>
          </Column>
        </Layout>
        <Layout basis='20px' />
        <Layout>
          <PrepaidCard />
        </Layout>
        <Layout basis='20px' />
        <Layout>
          <Tabs />
        </Layout>
        <Layout>
          {children}
        </Layout>
      </Row>
    </Layout>
    <Layout grow={1} />
  </Column>
)

export default Money
