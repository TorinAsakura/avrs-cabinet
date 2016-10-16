import React, { PropTypes } from 'react'
import { StyleSheet } from 'elementum'
import { ColumnLayout, RowLayout, Layout } from 'flex-layouts'
import { intlShape, defineMessages } from 'react-intl'
import { Text, Space } from 'avrs-ui/src/text'
import { Input } from 'avrs-ui/src/input'
import { RouteLink } from 'avrs-ui/src/link'
import { Button } from 'avrs-ui/src/button'
import { Condition } from 'avrs-ui/src/condition'
import Info from './Info'

const messages = defineMessages({
  registration: {
    id: 'registration.registration',
    defaultMessage: 'Create account',
  },
  email: {
    id: 'registration.email',
    defaultMessage: 'Email',
  },
  name: {
    id: 'registration.name',
    defaultMessage: 'Name',
  },
  firstName: {
    id: 'registration.first_name',
    defaultMessage: 'First',
  },
  lastName: {
    id: 'registration.last_name',
    defaultMessage: 'Last',
  },
  password: {
    id: 'registration.password',
    defaultMessage: 'Password',
  },
  passwordConfirmation: {
    id: 'registration.password_confirmation',
    defaultMessage: 'Confirmation',
  },
  register: {
    id: 'registration.register',
    defaultMessage: 'Register',
  },
  alreadyHaveAccount: {
    id: 'registration.already_have_account',
    defaultMessage: 'Already have an account?',
  },
  logIn: {
    id: 'registration.log_in',
    defaultMessage: 'Log In',
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

const Registration = ({
  email, firstName, lastName, password, passwordConfirmation, errors,
  onChangeEmail, onChangeFirstName, onChangeLastName,
  onChangePassword, onChangePasswordConfirmation, onRegister, intl,
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
                  {intl.formatMessage(messages.registration)}
                </Text>
              </Layout>
              <Layout basis='20px' />
              <Layout>
                <Text size='xsmall' weight='bold'>
                  {intl.formatMessage(messages.email)}
                </Text>
              </Layout>
              <Layout basis='5px' />
              <Layout>
                <Input
                  value={email}
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
              <Layout basis='16px' />
              <Layout>
                <Text size='xsmall' weight='bold'>
                  {intl.formatMessage(messages.name)}
                </Text>
              </Layout>
              <Layout basis='5px' />
              <Layout>
                <ColumnLayout>
                  <Layout shrink={1} basis='50%'>
                    <Input
                      value={firstName}
                      placeholder={intl.formatMessage(messages.firstName)}
                      invalid={errors.firstName}
                      onChange={onChangeFirstName}
                    />
                  </Layout>
                  <Layout basis='10px' />
                  <Layout shrink={1} basis='50%'>
                    <Input
                      value={lastName}
                      placeholder={intl.formatMessage(messages.lastName)}
                      invalid={errors.lastName}
                      onChange={onChangeLastName}
                    />
                  </Layout>
                </ColumnLayout>
              </Layout>
              <Condition match={errors.firstName || errors.lastName}>
                <RowLayout>
                  <Layout basis='5px' />
                  <Layout>
                    <Text color='red400' size='xsmall'>
                      {errors.firstName || errors.lastName}
                    </Text>
                  </Layout>
                </RowLayout>
              </Condition>
              <Layout basis='20px' />
              <Layout>
                <Text size='xsmall' weight='bold'>
                  {intl.formatMessage(messages.password)}
                </Text>
              </Layout>
              <Layout basis='5px' />
              <Layout>
                <Input
                  type='password'
                  value={password}
                  placeholder={intl.formatMessage(messages.password)}
                  invalid={errors.password}
                  onChange={onChangePassword}
                />
              </Layout>
              <Condition match={errors.password}>
                <RowLayout>
                  <Layout basis='5px' />
                  <Layout>
                    <Text color='red400' size='xsmall'>
                      {errors.password}
                    </Text>
                  </Layout>
                </RowLayout>
              </Condition>
              <Layout basis='15px' />
              <Layout>
                <Input
                  type='password'
                  value={passwordConfirmation}
                  placeholder={intl.formatMessage(messages.passwordConfirmation)}
                  invalid={errors.passwordConfirmation}
                  onChange={onChangePasswordConfirmation}
                />
              </Layout>
              <Condition match={errors.passwordConfirmation}>
                <RowLayout>
                  <Layout basis='5px' />
                  <Layout>
                    <Text color='red400' size='xsmall'>
                      {errors.passwordConfirmation}
                    </Text>
                  </Layout>
                </RowLayout>
              </Condition>
              <Layout basis='25px' />
              <Layout>
                <ColumnLayout>
                  <Layout grow={1} />
                  <Layout>
                    <Button onClick={onRegister}>
                      {intl.formatMessage(messages.register)}
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
            {intl.formatMessage(messages.alreadyHaveAccount)}
          </Text>
          <Space />
          <RouteLink to='/auth/login'>
            <Text color='blue400' size='xsmall'>
              {intl.formatMessage(messages.logIn)}
            </Text>
          </RouteLink>
        </Info>
      </Layout>
    </RowLayout>
  </div>
)

Registration.propTypes = {
  email: PropTypes.string,
  password: PropTypes.string,
  passwordConfirmation: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  errors: PropTypes.object,
  onChangeEmail: PropTypes.func,
  onChangePassword: PropTypes.func,
  onChangePasswordConfirmation: PropTypes.func,
  onChangeFirstName: PropTypes.func,
  onChangeLastName: PropTypes.func,
  onRegister: PropTypes.func,
  intl: intlShape.isRequired,
}

export default Registration
