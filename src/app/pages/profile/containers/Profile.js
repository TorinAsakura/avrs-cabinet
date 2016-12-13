import React from 'react'
import { Column, Row, Layout } from 'flex-layouts'
import Information from './Information'
import Tabs from '../components/Tabs'

const Profile = ({ children }) => (
  <Column>
    <Layout grow={1} />
    <Layout basis='924px'>
      <Row>
        <Layout>
          <Information />
        </Layout>
        <Layout basis='25px' />
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

export default Profile
