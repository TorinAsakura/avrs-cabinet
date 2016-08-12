import React, { PropTypes } from 'react'
import { RowLayout, Layout } from 'flex-layouts'
import { Header } from '../components/header'
import Container from './Container'

const App = ({ children }) => (
  <Container>
    <RowLayout fill>
      <Layout>
        <Header />
      </Layout>
      <Layout grow={1}>
        {children}
      </Layout>
    </RowLayout>
  </Container>
)

App.propTypes = {
  children: PropTypes.element,
}

export default App
