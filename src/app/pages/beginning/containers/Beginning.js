import React from 'react'
import { Column, Row, Layout } from 'flex-layouts'
import Welcome from '../components/Welcome'
import SelectRate from './SelectRate'

const Beginning = () => (
  <Column>
    <Layout grow={1} />
    <Layout basis='924px'>
      <Row>
        <Layout>
          <Welcome />
        </Layout>
        <Layout basis='20px' />
        <Layout>
          <SelectRate />
        </Layout>
        <Layout basis='20px' />
      </Row>
    </Layout>
    <Layout grow={1} />
  </Column>
)

export default Beginning
