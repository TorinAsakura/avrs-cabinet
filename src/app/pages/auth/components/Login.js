import React, { PropTypes } from 'react'
import { Column, Row, Layout } from 'flex-layouts'
import { intlShape } from 'react-intl'
import { Text, Space } from 'avrs-ui/src/text'
import { Input } from 'avrs-ui/src/input'
import { RouteLink } from 'avrs-ui/src/link'
import { Button } from 'avrs-ui/src/button'
import { Condition } from 'avrs-ui/src/condition'
import { Divider } from 'avrs-ui/src/divider'
import { Label } from 'avrs-ui/src/label'
import { Block } from 'avrs-ui/src/content'

const Login = ({ email, password, errors, onChangeEmail, onChangePassword, onLogin }) => (
  <Block>
    <Row>
      <Layout basis='20px' />
      <Layout justify='center'>
        <Text color='black400'>
          Вход
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
          <Layout shrink={1} basis='250px'>
            <Row>
              <Layout>
                <Label>
                  Email адрес
                </Label>
              </Layout>
              <Layout basis='5px' />
              <Layout>
                <Input
                  tabIndex={1}
                  value={email}
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
              <Layout basis='20px' />
              <Layout>
                <Column>
                  <Layout grow={1}>
                    <Label>
                      Пароль
                    </Label>
                  </Layout>
                  <Layout>
                    <RouteLink to='/auth/reset_password'>
                      <Text size='small' color='blue400' weight='light'>
                        Забыли?
                      </Text>
                    </RouteLink>
                  </Layout>
                </Column>
              </Layout>
              <Layout basis='5px' />
              <Layout>
                <Input
                  tabIndex={2}
                  type='password'
                  value={password}
                  onChange={onChangePassword}
                />
              </Layout>
            </Row>
          </Layout>
          <Layout grow={1} />
        </Column>
      </Layout>
      <Layout basis='25px' />
      <Layout>
        <Column>
          <Layout grow={1} />
          <Layout basis='200px'>
            <Button
              fill
              shadow
              rounded
              color='green'
              onClick={onLogin}
            >
              Войти
            </Button>
          </Layout>
          <Layout grow={1} />
        </Column>
      </Layout>
      <Layout basis='30px' />
      <Layout>
        <Column>
          <Layout basis='30px' />
          <Layout grow={1}>
            <Divider />
          </Layout>
          <Layout basis='30px' />
        </Column>
      </Layout>
      <Layout basis='20px' />
      <Layout>
        <Column>
          <Layout grow={1} />
          <Layout>
            <Text size='xsmall'>
              Впервые на Aversis?
            </Text>
            <Space />
            <RouteLink to='/auth/registration'>
              <Text color='blue400' size='xsmall'>
                Стать участником.
              </Text>
            </RouteLink>
          </Layout>
          <Layout grow={1} />
        </Column>
      </Layout>
      <Layout basis='20px' />
    </Row>
  </Block>
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
