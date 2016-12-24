import React from 'react'
import { Column, Row, Layout } from 'flex-layouts'
import { Text, Space } from 'avrs-ui/src/text'
import { Input } from 'avrs-ui/src/input'
import { RouteLink } from 'avrs-ui/src/link'
import { Button } from 'avrs-ui/src/button'
import { Condition } from 'avrs-ui/src/condition'
import { Divider } from 'avrs-ui/src/divider'
import { Label } from 'avrs-ui/src/label'

const Common = ({
  email, firstName, lastName, password, passwordConfirmation, inviteCode, errors,
  onChangeEmail, onChangeFirstName, onChangeLastName,
  onChangePassword, onChangePasswordConfirmation, onChangeInviteCode, onNextStep,
}) => (
  <Row>
    <Layout basis='20px' />
    <Layout justify='center'>
      <Text color='black400'>
        Стать участником
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
        <Layout shrink={1} basis='300px'>
          <Row>
            <Layout>
              <Column>
                <Layout shrink={1} basis='50%'>
                  <Row>
                    <Layout>
                      <Label>
                        Имя
                      </Label>
                    </Layout>
                    <Layout basis='5px' />
                    <Layout>
                      <Input
                        value={firstName}
                        invalid={errors.firstName}
                        onChange={onChangeFirstName}
                      />
                    </Layout>
                  </Row>
                </Layout>
                <Layout basis='10px' />
                <Layout shrink={1} basis='50%'>
                  <Row>
                    <Layout>
                      <Label>
                        Фамилия
                      </Label>
                    </Layout>
                    <Layout basis='5px' />
                    <Layout>
                      <Input
                        value={lastName}
                        invalid={errors.lastName}
                        onChange={onChangeLastName}
                      />
                    </Layout>
                  </Row>
                </Layout>
              </Column>
            </Layout>
            <Condition match={errors.firstName || errors.lastName}>
              <Row>
                <Layout basis='5px' />
                <Layout>
                  <Text color='red400' size='xsmall'>
                    {errors.firstName || errors.lastName}
                  </Text>
                </Layout>
              </Row>
            </Condition>
            <Layout basis='16px' />
            <Layout>
              <Label>
                Email адрес
              </Label>
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
              <Row>
                <Layout basis='5px' />
                <Layout>
                  <Text color='red400' size='xsmall'>
                    {errors.email}
                  </Text>
                </Layout>
              </Row>
            </Condition>
            <Layout basis='16px' />
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
            <Layout basis='16px' />
            <Layout>
              <Label>
                Invite code
              </Label>
            </Layout>
            <Layout basis='5px' />
            <Layout>
              <Input
                value={inviteCode}
                invalid={errors.inviteCode}
                onChange={onChangeInviteCode}
              />
            </Layout>
            <Condition match={errors.inviteCode}>
              <Row>
                <Layout basis='5px' />
                <Layout>
                  <Text color='red400' size='xsmall'>
                    {errors.inviteCode}
                  </Text>
                </Layout>
              </Row>
            </Condition>
            <Layout basis='25px' />
          </Row>
        </Layout>
        <Layout grow={1} />
      </Column>
    </Layout>
    <Layout>
      <Column>
        <Layout grow={1} />
        <Layout basis='200px'>
          <Button
            fill
            shadow
            rounded
            color='green'
            onClick={onNextStep}
          >
            Продолжить
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
            Уже есть аккаунт?
          </Text>
          <Space />
          <RouteLink to='/auth/login'>
            <Text color='blue400' size='xsmall'>
              Войти
            </Text>
          </RouteLink>
        </Layout>
        <Layout grow={1} />
      </Column>
    </Layout>
    <Layout basis='20px' />
  </Row>
)

export default Common
