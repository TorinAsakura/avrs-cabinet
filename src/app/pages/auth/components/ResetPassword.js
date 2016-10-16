import React, { PropTypes } from 'react'
import { StyleSheet } from 'elementum'
import { ColumnLayout, RowLayout, Layout } from 'flex-layouts'
import { intlShape, defineMessages } from 'react-intl'
import { Text } from 'avrs-ui/src/text'
import { Input } from 'avrs-ui/src/input'
import { RouteLink } from 'avrs-ui/src/link'
import { Button } from 'avrs-ui/src/button'
import { Condition } from 'avrs-ui/src/condition'

const messages = defineMessages({
  title: {
    id: 'reset_password.title',
    defaultMessage: 'Reset password',
  },
  description: {
    id: 'reset_password.description',
    defaultMessage: 'Enter your email address below to reset password.',
  },
  email: {
    id: 'reset_password.email',
    defaultMessage: 'Email',
  },
  reset: {
    id: 'reset_password.reset',
    defaultMessage: 'Reset',
  },
  cancel: {
    id: 'reset_password.cancel',
    defaultMessage: 'Cancel',
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

const ResetPassword = ({ email, intl, errors, onChangeEmail, onReset }) => (
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
                  {intl.formatMessage(messages.description)}
                </Text>
              </Layout>
              <Layout basis='20px' />
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
                <ColumnLayout>
                  <Layout grow={1} />
                  <Layout>
                    <Button onClick={onReset}>
                      {intl.formatMessage(messages.reset)}
                    </Button>
                  </Layout>
                  <Layout basis='10px' />
                  <Layout>
                    <RouteLink to='/auth/login'>
                      <Button>
                        {intl.formatMessage(messages.cancel)}
                      </Button>
                    </RouteLink>
                  </Layout>
                  <Layout grow={1} />
                </ColumnLayout>
              </Layout>
              <Layout basis='30px' />
            </RowLayout>
          </Layout>
          <Layout basis='35px' />
        </ColumnLayout>
      </Layout>
    </RowLayout>
  </div>
)

ResetPassword.propTypes = {
  email: PropTypes.string,
  errors: PropTypes.object,
  onChangeEmail: PropTypes.func,
  onReset: PropTypes.func,
  intl: intlShape.isRequired,
}

export default ResetPassword
