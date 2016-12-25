import React from 'react'
import { Column, Row, Layout } from 'flex-layouts'
import { Block } from 'avrs-ui/src/content'
import { Text, Space } from 'avrs-ui/src/text'

const getPosition = (salesBalance) => {
  if (salesBalance < 5000) {
    return 'Starting'
  } else if (salesBalance < 20000) {
    return 'Agent'
  } else if (salesBalance < 60000) {
    return 'Seller'
  } else if (salesBalance < 120000) {
    return 'Manager'
  } else if (salesBalance < 250000) {
    return 'Gold'
  }

  return 'Platinum'
}

const statuses = {
  NEW: 'Новый',
  ACTIVE: 'Активный',
  INACTIVE: 'Неактивный',
}

const Information = ({ firstName, lastName, inviteCode, salesBalance, registeredAt, status, sponsor }) => (
  <Row>
    <Layout>
      <Block
        offset
        attach='bottom'
      >
        <Text size='medium'>
          {firstName}
          <Space />
          {lastName}
        </Text>
      </Block>
    </Layout>
    <Layout>
      <Block offset shadow>
        <Row>
          <Layout>
            <Column>
              <Layout basis='120px'>
                <Text size='small' weight='medium' color='black400'>
                  Реф. ссылка:
                </Text>
              </Layout>
              <Layout basis='60px' />
              <Layout basis='30%'>
                <Text size='small' color='black400'>
                  {inviteCode}
                </Text>
              </Layout>
              <Layout basis='110px' />
              <Layout basis='120px'>
                <Text size='small' weight='medium' color='black400'>
                  Статус:
                </Text>
              </Layout>
              <Layout>
                <Text size='small' color='black400'>
                  {statuses[status]}
                </Text>
              </Layout>
            </Column>
          </Layout>
          <Layout basis='16px' />
          <Layout>
            <Column>
              <Layout basis='120px'>
                <Text size='small' weight='medium' color='black400'>
                  Реф. статус:
                </Text>
              </Layout>
              <Layout basis='60px' />
              <Layout basis='30%'>
                <Text size='small' color='black400'>
                  {getPosition(salesBalance)}
                </Text>
              </Layout>
              <Layout basis='110px' />
            </Column>
          </Layout>
          <Layout basis='16px' />
          <Layout>
            <Column>
              <Layout basis='120px'>
                <Text size='small' weight='medium' color='black400'>
                  Спонсор:
                </Text>
              </Layout>
              <Layout basis='60px' />
              <Layout basis='30%'>
                <Text size='small' color='black400'>
                  {sponsor ? `${sponsor.firstName} ${sponsor.lastName}` : null}
                </Text>
              </Layout>
              <Layout basis='110px' />
            </Column>
          </Layout>
          <Layout basis='16px' />
          <Layout>
            <Column>
              <Layout basis='120px'>
                <Text size='small' weight='medium' color='black400'>
                  Регистрация:
                </Text>
              </Layout>
              <Layout basis='60px' />
              <Layout basis='30%'>
                <Text size='small' color='black400'>
                  {registeredAt}
                </Text>
              </Layout>
              <Layout basis='110px' />
            </Column>
          </Layout>
        </Row>
      </Block>
    </Layout>
  </Row>
)

export default Information
