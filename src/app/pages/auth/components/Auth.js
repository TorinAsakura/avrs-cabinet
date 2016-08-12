import React, { PropTypes } from 'react'
import { StyleSheet } from 'elementum'
import { ColumnLayout, RowLayout, Layout } from 'flex-layouts'
import { LogoWithText } from '../../../../ui/logo'

const styles = StyleSheet.create({
  self: {
    width: '100%',
    height: '100%',
    background: 'linear-gradient(135deg, #eef3f8 0%,#e6edf3 100%)',
  },
})

const Auth = ({ children }) => (
  <div className={styles()}>
    <ColumnLayout fill>
      <Layout grow={1} />
      <Layout basis='400px'>
        <RowLayout fill>
          <Layout shrink={1} basis='25%' />
          <Layout justify='center'>
            <LogoWithText height={40} />
          </Layout>
          <Layout basis='30px' />
          <Layout>
            {children}
          </Layout>
          <Layout basis='5%' />
        </RowLayout>
      </Layout>
      <Layout grow={1} />
    </ColumnLayout>
  </div>
)

Auth.propTypes = {
  children: PropTypes.element,
}

export default Auth
