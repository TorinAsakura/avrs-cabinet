import React from 'react'
import { Column, Row, Layout } from 'flex-layouts'
import { Block } from 'avrs-ui/src/content'
import { Button } from 'avrs-ui/src/button'
import { Table, Row as TableRow, Cell } from 'avrs-ui/src/table'

const directions = {
  INTERNAL: 'Перевод между счетами',
  EXTERNAL: 'Вывод средств',
}

const statuses = {
  SENT: 'Отправлено',
  PERFORMED: 'Выполнено',
  NOT_PERFORMED: 'Не выполнено',
}

const OperationsHistory = ({ operations = [], onExportXls }) => (
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
              Тип
            </Cell>
            <Cell>
              Сумма
            </Cell>
            <Cell>
              Статус
            </Cell>
          </TableRow>
          {operations.map((operation, index) => (
            <TableRow key={index}>
              <Cell>
                {operation.date}
              </Cell>
              <Cell>
                {directions[operation.direction]}
              </Cell>
              <Cell>
                {operation.amount}
              </Cell>
              <Cell>
                {statuses[operation.status]}
              </Cell>
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
              onClick={onExportXls}
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
