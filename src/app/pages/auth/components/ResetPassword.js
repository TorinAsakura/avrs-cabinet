import React, { PropTypes } from 'react'
import { Column, Row, Layout } from 'flex-layouts'
import { intlShape } from 'react-intl'
import { Text } from 'avrs-ui/src/text'
import { Input } from 'avrs-ui/src/input'
import { Button } from 'avrs-ui/src/button'
import { Condition } from 'avrs-ui/src/condition'
import { Divider } from 'avrs-ui/src/divider'
import { Block } from 'avrs-ui/src/content'

const ResetPassword = ({ email, errors, onChangeEmail, onReset }) => (
  <Block>
    <Row>
      <Layout basis='20px' />
      <Layout justify='center'>
        <Text color='black400'>
          Восстановление пароля
        </Text>
      </Layout>
      <Layout basis='20px' />
      <Layout>
        <Divider />
      </Layout>
      <Layout basis='20px' />
      <Layout justify='center'>
        <Text size='xsmall' color='gray300'>
          Укажите Email адрес, для которого хотите восстановить пароль.
        </Text>
      </Layout>
      <Layout basis='20px' />
      <Layout>
        <Column>
          <Layout grow={1} />
          <Layout basis='300px'>
            <Row>
              <Layout>
                <Input
                  value={email}
                  placeholder='Email'
                  invalid={errors.email}
                  onChange={onChangeEmail}
                />
              </Layout>
              <Condition match={errors.email}>
                <Row>
                  <Layout basis='5px' />
                  <Layout>
                    <Text color='red400' size='xsmall'>
                      {errors.email}
                    </Text>
                  </Layout>
                </Row>
              </Condition>
            </Row>
          </Layout>
          <Layout grow={1} />
        </Column>
      </Layout>
      <Layout basis='20px' />
      <Layout>
        <Column align='center'>
          <Layout grow={1} />
          <Layout>
            <Button
              shadow
              rounded
              color='green'
              onClick={onReset}
            >
              Восстановить
            </Button>
          </Layout>
          <Layout grow={1} />
        </Column>
      </Layout>
      <Layout basis='30px' />
    </Row>
  </Block>
)

ResetPassword.propTypes = {
  email: PropTypes.string,
  errors: PropTypes.object,
  onChangeEmail: PropTypes.func,
  onReset: PropTypes.func,
  intl: intlShape.isRequired,
}

export default ResetPassword
