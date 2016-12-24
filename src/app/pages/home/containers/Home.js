import React from 'react'
import { connect } from 'react-redux'
import { Column, Row, Layout } from 'flex-layouts'
import { Condition } from 'avrs-ui/src/condition'
import Balance from '../../money/containers/Balance'
import Activation from './Activation'
import Payments from './Payments'
import Network from './Network'

const Home = ({ isNew = true }) => (
  <Condition match={!isNew}>
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
                <Activation />
              </Layout>
            </Column>
          </Layout>
          <Layout basis='20px' />
          <Layout>
            <Payments />
          </Layout>
          <Layout basis='20px' />
          <Layout>
            <Network />
          </Layout>
        </Row>
      </Layout>
      <Layout grow={1} />
    </Column>
  </Condition>
)

export default connect(
  state => ({
    isNew: state.user.isNew,
  }),
)(Home)
