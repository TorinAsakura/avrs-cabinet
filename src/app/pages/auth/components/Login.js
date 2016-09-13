import React, { PropTypes } from 'react'
import { StyleSheet } from 'elementum'
import { ColumnLayout, RowLayout, Layout } from 'flex-layouts'
import { intlShape, defineMessages } from 'react-intl'
import { Text, Space } from '../../../../ui/text'
import { Input } from '../../../../ui/input'
import { RouteLink } from '../../../../ui/link'
import { Button } from '../../../../ui/button'
import { Condition } from '../../../../ui/condition'
import Info from './Info'

const messages = defineMessages({
  title: {
    id: 'login.title',
    defaultMessage: 'Log In',
  },
  login: {
    id: 'login.login',
    defaultMessage: 'Login',
  },
  forgotPassword: {
    id: 'login.forgot_password',
    defaultMessage: 'Forgot password?',
  },
  registerQuestion: {
    id: 'login.register_question',
    defaultMessage: 'Don\'t have an account?',
  },
  register: {
    id: 'login.register',
    defaultMessage: 'Register',
  },
})

const styles = StyleSheet.create({
  self: {
    background: 'rgba(255, 255, 255, 0.95)',
    boxShadow: '0px 1px 2px 2px rgba(0,0,0,0.05)',
    border: '0px solid #e2e2e2',
    margin: '5px',
    width: '400px',
    boxSizing: 'border-box',
  },
})

const Login = ({ email, password, errors, intl, onChangeEmail, onChangePassword, onLogin }) => (
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
                  {intl.formatMessage(messages.title)}
                </Text>
              </Layout>
              <Layout basis='4px' />
              <Layout justify='center'>
                <Text size='xsmall' color='gray300'>
                  {' ' || 'Please fill your basic information'}
                </Text>
              </Layout>
              <Layout basis='25px' />
              <Layout>
                <Input
                  value={email}
                  placeholder='Email'
                  invalid={errors.email}
                  onChange={onChangeEmail}
                />
              </Layout>
              <Condition match={errors.email}>
                <RowLayout>
                  <Layout basis='5px' />
                  <Layout>
                    <Text color='red400' size='xsmall'>
                      {errors.email}
                    </Text>
                  </Layout>
                </RowLayout>
              </Condition>
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
                    <RouteLink to='/auth/reset_password'>
                      <Text size='xsmall' color='blue400'>
                        {intl.formatMessage(messages.forgotPassword)}
                      </Text>
                    </RouteLink>
                  </Layout>
                  <Layout grow={1} />
                  <Layout>
                    <Button onClick={onLogin}>
                      {intl.formatMessage(messages.login)}
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
            {intl.formatMessage(messages.registerQuestion)}
          </Text>
          <Space />
          <RouteLink to='/auth/registration'>
            <Text color='blue400' size='xsmall'>
              {intl.formatMessage(messages.register)}
            </Text>
          </RouteLink>
        </Info>
      </Layout>
    </RowLayout>
  </div>
)

Login.propTypes = {
  email: PropTypes.string,
  password: PropTypes.string,
  errors: PropTypes.object,
  onChangeEmail: PropTypes.func,
  onChangePassword: PropTypes.func,
  onLogin: PropTypes.func,
  intl: intlShape.isRequired,
}

export default Login
