import React from 'react'
import { Column, Row, Layout } from 'flex-layouts'
import { Block } from 'avrs-ui/src/content'
import { Button } from 'avrs-ui/src/button'
import { Table, Row as TableRow, Cell } from 'avrs-ui/src/table'

const Referal = ({ operations = [], onExportXls }) => (
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
              Процент
            </Cell>
            <Cell>
              Участник
            </Cell>
            <Cell>
              Пакет
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
              <Cell>
                {operation.percent}%
              </Cell>
              <Cell>
                {operation.participant}
              </Cell>
              <Cell>
                {operation.package}
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

export default Referal
