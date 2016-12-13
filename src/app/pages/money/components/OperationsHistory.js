import React from 'react'
import { Column, Row, Layout } from 'flex-layouts'
import { Block } from 'avrs-ui/src/content'
import { Button } from 'avrs-ui/src/button'
import { Table, Row as TableRow, Cell } from 'avrs-ui/src/table'

const OperationsHistory = ({ operations = [] }) => (
  <Block
    shadow
    offset
  >
    <Row>
      <Layout basis='10px' />
      <Layout>
        <Table>
          <TableRow>
            <Cell>
              Дата
            </Cell>
            <Cell>
              Сумма
            </Cell>
            <Cell>
              Тип
            </Cell>
            <Cell>
              Процент
            </Cell>
            <Cell>
              Участник
            </Cell>
            <Cell>
              Пакет
            </Cell>
            <Cell>
              Статус
            </Cell>
            <Cell>
              Период
            </Cell>
          </TableRow>
          {operations.map((operation, index) => (
            <TableRow key={index}>
              <Cell>
                {operation.date}
              </Cell>
              <Cell>
                {operation.amount}
              </Cell>
              <Cell />
              <Cell />
              <Cell />
              <Cell>
                {operation.package}
              </Cell>
              <Cell />
              <Cell />
            </TableRow>
          ))}
        </Table>
      </Layout>
      <Layout basis='20px' />
      <Layout>
        <Column>
          <Layout>
            <Button
              shadow
              rounded
              color='green'
            >
              Экспорт в XLS
            </Button>
          </Layout>
        </Column>
      </Layout>
    </Row>
  </Block>
)

export default OperationsHistory
