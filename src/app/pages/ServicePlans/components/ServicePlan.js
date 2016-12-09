import React from 'react'
import { Column, Row, Layout } from 'flex-layouts'
import { Table, Row as TableRow, Cell } from 'avrs-ui/src/table'
import { Block } from 'avrs-ui/src/content'
import { Text, Space } from 'avrs-ui/src/text'
import { Divider } from 'avrs-ui/src/divider'
import { Link } from 'avrs-ui/src/link'

const ServicePlan = ({
  active, color, name, month, quarter, halfYear,
  year, onMonth, onQuarter, onHalfYear, onYear, onBuy,
}) => (
  <Block shadow>
    <Row>
      <Layout basis='40px' />
      <Layout justify='center'>
        <Text
          size='large'
          color={color}
          align='center'
        >
          {name}
        </Text>
      </Layout>
      <Layout basis='30px' />
      <Layout>
        <Column>
          <Layout grow={1} />
          <Layout basis='650px'>
            <Table>
              <colgroup>
                <col style={{ width: '36%' }} />
                <col style={{ width: '18%' }} />
                <col style={{ width: '18%' }} />
                <col style={{ width: '18%' }} />
                <col style={{ width: '18%' }} />
              </colgroup>
              <TableRow>
                <Cell>
                  Подписка
                </Cell>
                <Cell
                  selectable
                  align='center'
                  onClick={onMonth}
                >
                  <Text
                    size='small'
                    color={(active && active.period === 30) ? 'blue400' : 'gray400'}
                  >
                    30 Дней
                  </Text>
                </Cell>
                <Cell
                  selectable
                  align='center'
                  onClick={onQuarter}
                >
                  <Text
                    size='small'
                    color={(active && active.period === 90) ? 'blue400' : 'gray400'}
                  >
                    90 Дней
                  </Text>
                </Cell>
                <Cell
                  selectable
                  align='center'
                  onClick={onHalfYear}
                >
                  <Text
                    size='small'
                    color={(active && active.period === 180) ? 'blue400' : 'gray400'}
                  >
                    180 Дней
                  </Text>
                </Cell>
                <Cell
                  selectable
                  align='center'
                  onClick={onYear}
                >
                  <Text
                    size='small'
                    color={(active && active.period === 365) ? 'blue400' : 'gray400'}
                  >
                    365 Дней
                  </Text>
                </Cell>
              </TableRow>
              <TableRow>
                <Cell>
                  Аренда часов в сутки
                </Cell>
                <Cell
                  selectable
                  align='center'
                  color='black400'
                  onClick={onMonth}
                >
                  {month.time}
                </Cell>
                <Cell
                  selectable
                  align='center'
                  color='black400'
                  onClick={onQuarter}
                >
                  {quarter.time}
                </Cell>
                <Cell
                  selectable
                  align='center'
                  color='black400'
                  onClick={onHalfYear}
                >
                  {halfYear.time}
                </Cell>
                <Cell
                  selectable
                  align='center'
                  color='black400'
                  onClick={onYear}
                >
                  {year.time}
                </Cell>
              </TableRow>
              <TableRow>
                <Cell>
                  Загрузка CPU
                </Cell>
                <Cell
                  selectable
                  align='center'
                  color='black400'
                  onClick={onMonth}
                >
                  {month.cpu.from}
                </Cell>
                <Cell
                  selectable
                  align='center'
                  color='black400'
                  onClick={onQuarter}
                >
                  {quarter.cpu.from}
                </Cell>
                <Cell
                  selectable
                  align='center'
                  color='black400'
                  onClick={onHalfYear}
                >
                  {halfYear.cpu.from}
                </Cell>
                <Cell
                  selectable
                  align='center'
                  color='black400'
                  onClick={onYear}
                >
                  {year.cpu.from}
                </Cell>
              </TableRow>
              <TableRow>
                <Cell>
                  Загрузка RAM
                </Cell>
                <Cell
                  selectable
                  align='center'
                  color='black400'
                  onClick={onMonth}
                >
                  {month.memory}
                </Cell>
                <Cell
                  selectable
                  align='center'
                  color='black400'
                  onClick={onQuarter}
                >
                  {quarter.memory}
                </Cell>
                <Cell
                  selectable
                  align='center'
                  color='black400'
                  onClick={onHalfYear}
                >
                  {halfYear.memory}
                </Cell>
                <Cell
                  selectable
                  align='center'
                  color='black400'
                  onClick={onYear}
                >
                  {year.memory}
                </Cell>
              </TableRow>
              <TableRow>
                <Cell>
                  Стоимость лицензии
                </Cell>
                <Cell
                  selectable
                  align='center'
                  color='black400'
                  onClick={onMonth}
                >
                  {month.price} €
                </Cell>
                <Cell
                  selectable
                  align='center'
                  color='black400'
                  onClick={onQuarter}
                >
                  {quarter.price} €
                </Cell>
                <Cell
                  selectable
                  align='center'
                  color='black400'
                  onClick={onHalfYear}
                >
                  {halfYear.price} €
                </Cell>
                <Cell
                  selectable
                  align='center'
                  color='black400'
                  onClick={onYear}
                >
                  {year.price} €
                </Cell>
              </TableRow>
              <TableRow>
                <Cell>
                  Рентабельность в час
                </Cell>
                <Cell
                  selectable
                  align='center'
                  color='black400'
                  onClick={onMonth}
                >
                  {month.profitabilityPerHour} €
                </Cell>
                <Cell
                  align='center'
                  color='black400'
                  onClick={onQuarter}
                >
                  {quarter.profitabilityPerHour} €
                </Cell>
                <Cell
                  selectable
                  align='center'
                  color='black400'
                  onClick={onHalfYear}
                >
                  {halfYear.profitabilityPerHour} €
                </Cell>
                <Cell
                  selectable
                  align='center'
                  color='black400'
                  onClick={onYear}
                >
                  {year.profitabilityPerHour} €
                </Cell>
              </TableRow>
              <TableRow>
                <Cell>
                  Рентабельность в день
                </Cell>
                <Cell
                  selectable
                  align='center'
                  color='black400'
                  onClick={onMonth}
                >
                  {month.profitabilityPerDay} €
                </Cell>
                <Cell
                  selectable
                  align='center'
                  color='black400'
                  onClick={onQuarter}
                >
                  {quarter.profitabilityPerDay} €
                </Cell>
                <Cell
                  selectable
                  align='center'
                  color='black400'
                  onClick={onHalfYear}
                >
                  {halfYear.profitabilityPerDay} €
                </Cell>
                <Cell
                  selectable
                  align='center'
                  color='black400'
                  onClick={onYear}
                >
                  {year.profitabilityPerDay} €
                </Cell>
              </TableRow>
              <TableRow>
                <Cell>
                  Общая сумма на выплату
                </Cell>
                <Cell
                  selectable
                  align='center'
                  color='black400'
                  weight='medium'
                  selected={active && active.period === 30}
                  onClick={onMonth}
                >
                  {month.amount} €
                </Cell>
                <Cell
                  selectable
                  align='center'
                  color='black400'
                  weight='medium'
                  selected={active && active.period === 90}
                  onClick={onQuarter}
                >
                  {quarter.amount} €
                </Cell>
                <Cell
                  selectable
                  align='center'
                  color='black400'
                  weight='medium'
                  selected={active && active.period === 180}
                  onClick={onHalfYear}
                >
                  {halfYear.amount} €
                </Cell>
                <Cell
                  selectable
                  align='center'
                  color='black400'
                  weight='medium'
                  selected={active && active.period === 365}
                  onClick={onYear}
                >
                  {year.amount} €
                </Cell>
              </TableRow>
            </Table>
          </Layout>
          <Layout grow={1} />
        </Column>
      </Layout>
      <Layout basis='60px' />
      <Layout>
        <Divider />
      </Layout>
      <Layout basis='15px' />
      <Layout>
        <Column>
          <Layout grow={1} />
          <Layout>
            <Link onClick={onBuy}>
              <Text
                color='blue400'
                size='small'
              >
                Купить
              </Text>
            </Link>
            <Space />
            <Text
              color='blue400'
              size='small'
            >
              &#10095;
            </Text>
          </Layout>
          <Layout basis='25px' />
        </Column>
      </Layout>
      <Layout basis='15px' />
    </Row>
  </Block>
)

export default ServicePlan
