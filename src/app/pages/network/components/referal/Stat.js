import React from 'react'
import { Row, Layout } from 'flex-layouts'
import { Block } from 'avrs-ui/src/content'
import { Table, Row as TableRow, Cell } from 'avrs-ui/src/table'

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

const Stat = ({ firstName, lastName, salesBalance }) => (
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
              Сумма
            </Cell>
          </TableRow>
          <TableRow>
            <Cell>
              {firstName} {lastName}
            </Cell>
            <Cell>
              Aversis {getPosition(salesBalance)}
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
