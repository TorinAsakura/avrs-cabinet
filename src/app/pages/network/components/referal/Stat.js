import React from 'react'
import { Row, Layout } from 'flex-layouts'
import { Block } from 'avrs-ui/src/content'
import { Table, Row as TableRow, Cell } from 'avrs-ui/src/table'

const Stat = ({ firstName, lastName, salesBalance, position, country }) => (
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
              Имя Фамилия
            </Cell>
            <Cell>
              Позиция
            </Cell>
            <Cell>
              Страна
            </Cell>
            <Cell>
              Сумма
            </Cell>
          </TableRow>
          <TableRow>
            <Cell>
              {firstName} {lastName}
            </Cell>
            <Cell>
              {position}
            </Cell>
            <Cell>
              {country}
            </Cell>
            <Cell>
              € {salesBalance}
            </Cell>
          </TableRow>
        </Table>
      </Layout>
      <Layout basis='10px' />
    </Row>
  </Block>
)

export default Stat
