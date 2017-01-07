import React from 'react'
import { Column, Row, Layout } from 'flex-layouts'
import { Block } from 'avrs-ui/src/content'
import { Button } from 'avrs-ui/src/button'
import { Table, Row as TableRow, Cell } from 'avrs-ui/src/table'

const Rent = ({ operations = [], onExportXls }) => (
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
              Время
            </Cell>
            <Cell>
              Тип
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
                {operation.time}
              </Cell>
              <Cell>
                Заработок
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

export default Rent
