import React from 'react'
import { StyleSheet } from 'elementum'
import { Column, Row, Layout } from 'flex-layouts'

const styles = StyleSheet.create({
  self: {
    width: '100%',
    overflowY: 'auto',
    background: '#f3f5f8',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
  },
})

const Workspace = ({ children }) => (
  <div className={styles()}>
    <div style={{ display: 'block' }}>
      <Column>
        <Layout basis='20px' />
        <Layout shrink={1} grow={1}>
          <Row>
            <Layout basis='20px' />
            <Layout>
              {children}
            </Layout>
            <Layout basis='20px' />
          </Row>
        </Layout>
        <Layout basis='20px' />
      </Column>
    </div>
  </div>
)

export default Workspace
