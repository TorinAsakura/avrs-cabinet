import React, { PropTypes } from 'react'
import { StyleSheet } from 'elementum'
import { ColumnLayout, RowLayout, Layout } from 'flex-layouts'
import { Text, Space } from 'avrs-ui/src/text'
import { Input } from 'avrs-ui/src/input'
import { RouteLink } from 'avrs-ui/src/link'
import { Button } from 'avrs-ui/src/button'
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

const SignUp = ({
  email, password, passwordConfirmation,
  onChangeEmail, onChangePassword, onChangePasswordConfirmation,
  onRegister,
}) => (
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
                  Sign Up
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
              <Layout basis='15px' />
              <Layout>
                <Input
                  type='password'
                  value={passwordConfirmation}
                  placeholder='Repeat password'
                  onChange={onChangePasswordConfirmation}
                />
              </Layout>
              <Layout basis='25px' />
              <Layout>
                <ColumnLayout>
                  <Layout grow={1} />
                  <Layout>
                    <Button onClick={onRegister}>
                      Register
                    </Button>
                  </Layout>
                </ColumnLayout>
              </Layout>
              <Layout basis='25px' />
            </RowLayout>
          </Layout>
          <Layout basis='35px' />
        </ColumnLayout>
      </Layout>
      <Layout>
        <Info>
          <Text size='xsmall'>
            Already have an account?
          </Text>
          <Space />
          <RouteLink to='/auth/sign_in'>
            <Text color='blue400' size='xsmall'>
              Sign In
            </Text>
          </RouteLink>
        </Info>
      </Layout>
    </RowLayout>
  </div>
)

SignUp.propTypes = {
  email: PropTypes.string,
  password: PropTypes.string,
  passwordConfirmation: PropTypes.string,
  onChangeEmail: PropTypes.func,
  onChangePassword: PropTypes.func,
  onChangePasswordConfirmation: PropTypes.func,
  onRegister: PropTypes.func,
}

export default SignUp
