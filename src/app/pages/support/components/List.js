import React from 'react'
import { Column, Row, Layout } from 'flex-layouts'
import { Condition } from 'avrs-ui/src/condition'
import { Text } from 'avrs-ui/src/text'
import { Block } from 'avrs-ui/src/content'
import Placeholder from './Placeholder'
import Requests from './Requests'

const List = ({ loaded, requests = [] }) => (
  <Column>
    <Layout grow={1} />
    <Layout basis='924px'>
      <Row>
        <Layout basis='20px' />
        <Layout>
          <Block attach='bottom'>
            <Row>
              <Layout basis='20px' />
              <Layout justify='center'>
                <Text>
                  Поддержка
                </Text>
              </Layout>
              <Layout basis='20px' />
            </Row>
          </Block>
        </Layout>
        <Layout>
          <Block
            offset
            shadow
          >
            <Row>
              <Layout basis='10px' />
              <Condition match={loaded && requests.length === 0}>
                <Placeholder />
              </Condition>
              <Condition match={loaded && requests.length > 0}>
                <Requests requests={requests} />
              </Condition>
            </Row>
          </Block>
        </Layout>
      </Row>
    </Layout>
    <Layout grow={1} />
  </Column>
)

export default List
