import React from 'react'
import { Column, Row, Layout } from 'flex-layouts'
import { MessagesIcon } from 'avrs-ui/src/icons'
import { RouteLink } from 'avrs-ui/src/link'
import { Button } from 'avrs-ui/src/button'
import { Text } from 'avrs-ui/src/text'

const Placeholder = () => (
  <Column>
    <Layout grow={1} />
    <Layout>
      <Row align='center'>
        <Layout basis='10px' />
        <Layout>
          <MessagesIcon
            height={68}
            fill='#778997'
          />
        </Layout>
        <Layout basis='8px' />
        <Layout>
          <Text color='gray250'>
            Обращение в службу поддержки
          </Text>
        </Layout>
        <Layout basis='35px' />
        <Layout>
          <RouteLink to='/support/new'>
            <Button
              shadow
              rounded
              color='green'
            >
              Создать новое
            </Button>
          </RouteLink>
        </Layout>
        <Layout basis='20px' />
      </Row>
    </Layout>
    <Layout grow={1} />
  </Column>
)

export default Placeholder
