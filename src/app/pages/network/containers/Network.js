import React from 'react'
import { Column, Row, Layout } from 'flex-layouts'
import Tabs from '../components/Tabs'
import Activation from './Activation'
import Position from './Position'
import Referals from './Referals'
import Sales from './Sales'

const Network = ({ children }) => (
  <Column>
    <Layout grow={1} />
    <Layout basis='924px'>
      <Row>
        <Layout>
          <Column>
            <Layout shrink={1} basis='25%'>
              <Activation />
            </Layout>
            <Layout basis='25px' />
            <Layout shrink={1} basis='25%'>
              <Position />
            </Layout>
            <Layout basis='25px' />
            <Layout shrink={1} basis='25%'>
              <Referals />
            </Layout>
            <Layout basis='25px' />
            <Layout shrink={1} basis='25%'>
              <Sales />
            </Layout>
          </Column>
        </Layout>
        <Layout basis='15px' />
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

export default Network
