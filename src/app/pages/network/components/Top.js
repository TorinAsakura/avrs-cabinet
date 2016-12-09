import React from 'react'
import { Row, Layout } from 'flex-layouts'
import { Block } from 'avrs-ui/src/content'
import { Table, Row as TableRow, Cell } from 'avrs-ui/src/table'

const Top = ({ users = [] }) => (
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
              #
            </Cell>
            <Cell>
              Имя Фамилия
            </Cell>
            <Cell>
              Позиция
            </Cell>
            <Cell>
              Сумма
            </Cell>
          </TableRow>
          {users.map((user, index) => (
            <TableRow key={index}>
              <Cell>
                {index + 1}
              </Cell>
              <Cell>
                {user.firstName} {user.lastName}
              </Cell>
              <Cell>
                {user.position}
              </Cell>
              <Cell>
                € {user.salesBalance}
              </Cell>
            </TableRow>
          ))}
        </Table>
      </Layout>
      <Layout basis='10px' />
    </Row>
  </Block>
)

export default Top
