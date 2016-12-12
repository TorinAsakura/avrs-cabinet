import React from 'react'
import { Column, Row, Layout } from 'flex-layouts'
import { Table, Row as TableRow, Cell } from 'avrs-ui/src/table'
import { Button } from 'avrs-ui/src/button'
import { Text } from 'avrs-ui/src/text'
import { RouteLink } from 'avrs-ui/src/link'
import Status from './Status'
import Unread from './Unread'

const Requests = ({ requests = [] }) => (
  <Row>
    <Layout>
      <Table>
        <colgroup>
          <col style={{ width: '5%' }} />
          <col style={{ width: '65%' }} />
          <col style={{ width: '15%' }} />
          <col style={{ width: '15%' }} />
        </colgroup>
        <TableRow>
          <Cell>
            #
          </Cell>
          <Cell>
            Тема
          </Cell>
          <Cell>
            Дата
          </Cell>
          <Cell>
            Статус
          </Cell>
        </TableRow>
        {requests.map(request => (
          <TableRow key={request.id}>
            <Cell>
              {request.id}
            </Cell>
            <Cell>
              <Column align='center'>
                <Layout grow={1}>
                  <RouteLink to={`/support/${request.id}`}>
                    <Text
                      size='small'
                      color='gray400'
                    >
                      {request.subject}
                    </Text>
                  </RouteLink>
                </Layout>
                <Layout basis='10px' />
                <Layout>
                  <Unread messages={request.unread} />
                </Layout>
              </Column>
            </Cell>
            <Cell>
              {request.date}
            </Cell>
            <Cell>
              <Status>
                {request.status}
              </Status>
            </Cell>
          </TableRow>
        ))}
      </Table>
    </Layout>
    <Layout basis='20px' />
    <Layout>
      <Column align='center'>
        <Layout grow={1} />
        <Layout>
          <Text
            size='small'
            color='gray250'
          >
            Обращение в службу поддержки
          </Text>
        </Layout>
        <Layout basis='15px' />
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
      </Column>
    </Layout>
  </Row>
)

export default Requests
