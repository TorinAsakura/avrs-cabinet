import React from 'react'
import { Column, Row, Layout } from 'flex-layouts'
import { Condition } from 'avrs-ui/src/condition'
import { Block } from 'avrs-ui/src/content'
import { Text } from 'avrs-ui/src/text'
import { ComplexLineChart } from 'avrs-ui/src/chart'
import Legend from './Legend'

const Payments = ({ loaded, data }) => (
  <Condition match={loaded}>
    <Block shadow>
      <Row>
        <Layout basis='15px' />
        <Layout>
          <Column align='center'>
            <Layout basis='25px' />
            <Layout>
              <Text>
                Статистика выплат
              </Text>
            </Layout>
            <Layout grow={1} />
            <Layout>
              <Legend color='blue' />
            </Layout>
            <Layout basis='6px' />
            <Layout>
              <Text size='small' color='gray250'>
                Аренда
              </Text>
            </Layout>
            <Layout basis='40px' />
            <Layout>
              <Legend color='green' />
            </Layout>
            <Layout basis='6px' />
            <Layout>
              <Text size='small' color='gray250'>
                Сеть
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
            />
          </div>
        </Layout>
      </Row>
    </Block>
  </Condition>
)

export default Payments
