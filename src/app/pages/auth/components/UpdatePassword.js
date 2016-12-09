import React, { PropTypes } from 'react'
import { Column, Row, Layout } from 'flex-layouts'
import { intlShape } from 'react-intl'
import { Text } from 'avrs-ui/src/text'
import { Input } from 'avrs-ui/src/input'
import { Button } from 'avrs-ui/src/button'
import { Condition } from 'avrs-ui/src/condition'
import { Divider } from 'avrs-ui/src/divider'
import { Label } from 'avrs-ui/src/label'
import { Block } from 'avrs-ui/src/content'

const UpdatePassword = ({
  password, passwordConfirmation, errors,
  onChangePassword, onChangePasswordConfirmation, onUpdate,
}) => (
  <Block>
    <Row>
      <Layout basis='20px' />
      <Layout justify='center'>
        <Text color='black400'>
          Изменение пароля
        </Text>
      </Layout>
      <Layout basis='20px' />
      <Layout>
        <Divider />
      </Layout>
      <Layout basis='30px' />
      <Layout>
        <Column>
          <Layout grow={1} />
          <Layout basis='300px'>
            <Row>
              <Layout>
                <Label>
                  Пароль
                </Label>
              </Layout>
              <Layout basis='5px' />
              <Layout>
                <Input
                  type='password'
                  value={password}
                  invalid={errors.password && errors.password.value}
                  onChange={onChangePassword}
                />
              </Layout>
              <Condition match={errors.password && errors.password.value}>
                <Row>
                  <Layout basis='5px' />
                  <Layout>
                    <Text color='red400' size='xsmall'>
                      {errors.password && errors.password.value}
                    </Text>
                  </Layout>
                </Row>
              </Condition>
              <Layout basis='16px' />
              <Layout>
                <Label>
                  Повторите пароль
                </Label>
              </Layout>
              <Layout basis='5px' />
              <Layout>
                <Input
                  type='password'
                  value={passwordConfirmation}
                  invalid={errors.password && errors.password.confirmation}
                  onChange={onChangePasswordConfirmation}
                />
              </Layout>
              <Condition match={errors.password && errors.password.confirmation}>
                <Row>
                  <Layout basis='5px' />
                  <Layout>
                    <Text color='red400' size='xsmall'>
                      {errors.password && errors.password.confirmation}
                    </Text>
                  </Layout>
                </Row>
              </Condition>
            </Row>
          </Layout>
          <Layout grow={1} />
        </Column>
      </Layout>
      <Layout basis='30px' />
      <Layout>
        <Column>
          <Layout grow={1} />
          <Layout basis='200px'>
            <Button
              fill
              shadow
              rounded
              color='green'
              onClick={onUpdate}
            >
              Изменить
            </Button>
          </Layout>
          <Layout grow={1} />
        </Column>
      </Layout>
      <Layout basis='30px' />
    </Row>
  </Block>
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
