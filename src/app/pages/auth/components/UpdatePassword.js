import React, { PropTypes } from 'react'
import { StyleSheet } from 'elementum'
import { ColumnLayout, RowLayout, Layout } from 'flex-layouts'
import { intlShape, defineMessages } from 'react-intl'
import { Text } from 'avrs-ui/src/text'
import { Input } from 'avrs-ui/src/input'
import { Button } from 'avrs-ui/src/button'
import { Condition } from 'avrs-ui/src/condition'

const messages = defineMessages({
  title: {
    id: 'update_password.title',
    defaultMessage: 'Update password',
  },
  description: {
    id: 'update_password.description',
    defaultMessage: 'Please enter your new password.',
  },
  password: {
    id: 'update_password.password',
    defaultMessage: 'Password',
  },
  passwordConfirmation: {
    id: 'update_password.password_confirmation',
    defaultMessage: 'Confirmation',
  },
  update: {
    id: 'update_password.update',
    defaultMessage: 'Update',
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

const UpdatePassword = ({
  password, passwordConfirmation, intl, errors,
  onChangePassword, onChangePasswordConfirmation, onUpdate,
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
              <Layout basis='15px' />
              <Layout>
                <ColumnLayout>
                  <Layout grow={1} />
                  <Layout>
                    <Button onClick={onUpdate}>
                      {intl.formatMessage(messages.update)}
                    </Button>
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

UpdatePassword.propTypes = {
  password: PropTypes.string,
  passwordConfirmation: PropTypes.string,
  errors: PropTypes.object,
  onChangePassword: PropTypes.func,
  onChangePasswordConfirmation: PropTypes.func,
  onUpdate: PropTypes.func,
  intl: intlShape.isRequired,
}

export default UpdatePassword
