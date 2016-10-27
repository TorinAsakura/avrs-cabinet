import React from 'react'
import moment from 'moment'
import { Column, Row, Layout } from 'flex-layouts'
import { Block } from 'avrs-ui/src/content'
import { Text } from 'avrs-ui/src/text'
import ComplexLineChart from 'avrs-ui/src/chart/ComplexLineChart'
import Legend from './Legend'

const generateData = () =>
  ['rent', 'referal'].map(id => ({
    id,
    values: Array.from(Array(30).keys()).map(day => ({
      date: moment().subtract(day, 'days').toDate(),
      amount: 1 + (Math.round((Math.random() * 10) * 100) / 1000),
    })),
    stroke: id === 'rent' ? '#00BB27' : '#0288D1',
    title: id === 'rent' ? 'Аренда' : 'Сеть',
  }))

const brushDomain = [moment().subtract(7, 'days').toDate(), moment().toDate()]

const NetDynamics = ({ data = generateData(), defaultPeriod = brushDomain }) => (
  <Block shadow>
    <Row>
      <Layout basis='15px' />
      <Layout>
        <Column align='center'>
          <Layout basis='25px' />
          <Layout>
            <Text>
              Динамика сети
            </Text>
          </Layout>
          <Layout grow={1} />
          <Layout>
            <Legend color='blue' />
          </Layout>
          <Layout basis='6px' />
          <Layout>
            <Text size='small' color='gray250'>
              Активации
            </Text>
          </Layout>
          <Layout basis='40px' />
          <Layout>
            <Legend color='green' />
          </Layout>
          <Layout basis='6px' />
          <Layout>
            <Text size='small' color='gray250'>
              Подключения к сети
            </Text>
          </Layout>
          <Layout basis='25px' />
        </Column>
      </Layout>
      <Layout basis='15px' />
      <Layout>
        <div style={{ width: 924, height: 360, position: 'relative' }}>
          <ComplexLineChart
            width={924}
            height={360}
            data={data}
            brushDomain={defaultPeriod}
          />
        </div>
      </Layout>
    </Row>
  </Block>
)

export default NetDynamics
