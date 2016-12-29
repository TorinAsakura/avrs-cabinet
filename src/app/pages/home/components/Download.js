import React from 'react'
import { Column, Row, Layout } from 'flex-layouts'
import { Divider } from 'avrs-ui/src/divider'
import { Block } from 'avrs-ui/src/content'
import { Text } from 'avrs-ui/src/text'
import Win from './download/Win'

const Download = () => (
  <Block shadow>
    <Row>
      <Layout basis='15px' />
      <Layout justify='center'>
        <Text color='gray400'>
          Скачайте приложение
        </Text>
      </Layout>
      <Layout basis='15px' />
      <Layout>
        <Divider />
      </Layout>
      <Layout basis='35px' />
      <Layout>
        <Column>
          <Layout grow={1} />
          <Layout basis='520px'>
            <Text color='gray400' weight='light' lineHeight='extended' align='center'>
              Остался всего один шаг. Скачайте наше програмное обеспечение, которое позволит вам начать зарабатывать.
            </Text>
          </Layout>
          <Layout grow={1} />
        </Column>
      </Layout>
      <Layout basis='80px' />
      <Layout justify='center'>
        <Win height={90} />
      </Layout>
      <Layout basis='80px' />
    </Row>
  </Block>
)

export default Download
