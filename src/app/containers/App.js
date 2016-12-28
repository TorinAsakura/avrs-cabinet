import React from 'react'
import { Row, Layout } from 'flex-layouts'
import Workspace from '../components/Workspace'
import Divider from '../components/Divider'
import Header from './Header'
import Footer from './Footer'
import Messages from './Messages'

const App = ({ children, history }) => (
  <Row fill>
    <Layout>
      <Header history={history} />
    </Layout>
    <Layout>
      <Divider />
    </Layout>
    <Layout>
      <Messages />
    </Layout>
    <Layout shrink={1} grow={1}>
      <Workspace>
        <Row>
          <Layout>
            {children}
          </Layout>
          <Layout basis='35px' />
          <Layout justify='center'>
            <Footer />
          </Layout>
          <Layout basis='20px' />
        </Row>
      </Workspace>
    </Layout>
  </Row>
)

export default App
