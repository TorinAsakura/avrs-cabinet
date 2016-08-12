import React, { PropTypes } from 'react'
import { StyleSheet } from 'elementum'
import { ColumnLayout, RowLayout, Layout } from 'flex-layouts'
import { Text, Space } from '../../../../ui/text'
import { Input } from '../../../../ui/input'
import { RouteLink } from '../../../../ui/link'
import { Button } from '../../../../ui/button'
import Info from './Info'

const styles = StyleSheet.create({
  self: {
    background: 'rgba(255, 255, 255, 0.95)',
    boxShadow: '0px 1px 2px 2px rgba(0,0,0,0.05)',
    border: '0px solid #e2e2e2',
    margin: '5px',
    width: '100%',
    boxSizing: 'border-box',
  },
})

const SignIn = ({ email, password, onChangeEmail, onChangePassword, onSignIn }) => (
  <div className={styles()}>
    <RowLayout>
      <Layout>
        <ColumnLayout>
          <Layout basis='35px' />
          <Layout shrink={1} basis='100%'>
            <RowLayout>
              <Layout basis='30px' />
              <Layout justify='center'>
                <Text size='large'>
                  Sign In
                </Text>
              </Layout>
              <Layout basis='4px' />
              <Layout justify='center'>
                <Text size='xsmall' color='gray300'>
                  Please fill your basic information
                </Text>
              </Layout>
              <Layout basis='25px' />
              <Layout>
                <Input
                  value={email}
                  placeholder='Email'
                  onChange={onChangeEmail}
                />
              </Layout>
              <Layout basis='15px' />
              <Layout>
                <Input
                  type='password'
                  value={password}
                  placeholder='Password'
                  onChange={onChangePassword}
                />
              </Layout>
              <Layout basis='25px' />
              <Layout>
                <ColumnLayout>
                  <Layout align='center'>
                    <RouteLink to='/auth/sign_in'>
                      <Text size='xsmall' color='blue400'>
                        Forgot Password?
                      </Text>
                    </RouteLink>
                  </Layout>
                  <Layout grow={1} />
                  <Layout>
                    <Button onClick={onSignIn}>
                      Login
                    </Button>
                  </Layout>
                </ColumnLayout>
              </Layout>
              <Layout basis='30px' />
            </RowLayout>
          </Layout>
          <Layout basis='35px' />
        </ColumnLayout>
      </Layout>
      <Layout>
        <Info>
          <Text size='xsmall'>
            Don't have an account?
          </Text>
          <Space />
          <RouteLink to='/auth/sign_up'>
            <Text color='blue400' size='xsmall'>
              Sign Up
            </Text>
          </RouteLink>
        </Info>
      </Layout>
    </RowLayout>
  </div>
)

SignIn.propTypes = {
  email: PropTypes.string,
  password: PropTypes.string,
  onChangeEmail: PropTypes.func,
  onChangePassword: PropTypes.func,
  onSignIn: PropTypes.func,
}

export default SignIn
