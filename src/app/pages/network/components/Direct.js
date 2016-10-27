import React from 'react'
import { Row, Layout } from 'flex-layouts'
import { Block } from 'avrs-ui/src/content'
import { Table, Row as TableRow, Cell } from 'avrs-ui/src/table'

const Direct = ({ users = [] }) => (
  <Block
    offset
    shadow
  >
    <Row>
      <Layout basis='10px' />
      <Layout>
        <Table>
          <TableRow>
            <Cell>
              Дата регистрации
            </Cell>
            <Cell>
              Страна
            </Cell>
            <Cell>
              Город
            </Cell>
            <Cell>
              Позиция
            </Cell>
            <Cell>
              Имя Фамилия
            </Cell>
            <Cell>
              ID
            </Cell>
            <Cell>
              Статус
            </Cell>
          </TableRow>
          {users.map((user, index) => (
            <TableRow key={index}>
              <Cell weight='medium'>
                {user.createdAt}
              </Cell>
              <Cell />
              <Cell />
              <Cell />
              <Cell>
                {user.firstName} {user.lastName}
              </Cell>
              <Cell>
                {user.id}
              </Cell>
              <Cell />
            </TableRow>
          ))}
        </Table>
      </Layout>
      <Layout basis='10px' />
    </Row>
  </Block>
)

export default Direct
