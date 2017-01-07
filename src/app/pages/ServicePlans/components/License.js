import React from 'react'
import { Column, Row, Layout } from 'flex-layouts'
import { Block } from 'avrs-ui/src/content'
import { Link } from 'avrs-ui/src/link'
import { Text, Space } from 'avrs-ui/src/text'
import ApplyCode from './ApplyCode'

const License = ({ license, onChange, onApply }) => (
  <Block
    offset
    shadow
  >
    <Column align='center'>
      <Layout basis='350px'>
        <Row>
          <Layout>
            <Text size='medium' color='gray400'>
              Активация тарифа
            </Text>
          </Layout>
          <Layout basis='2px' />
          <div>
            <Text size='xsmall' color='gray400'>
              После покупки пакета в
            </Text>
            <Space />
            <Link href='https://www.aversis-shop.com' target='_blank'>
              <Text size='xsmall' color='blue400'>
                магазине
              </Text>
            </Link>
            <Space />
            <Text size='xsmall' color='gray400'>
              , вам необходимо
            </Text>
            <Text size='xsmall' color='gray400'>
               ввести код для начала ее использования.
            </Text>
          </div>
        </Row>
      </Layout>
      <Layout grow={1} />
      <Layout basis='260px'>
        <ApplyCode
          value={license}
          placeholder='Код лицензии'
          onChange={onChange}
          onApply={onApply}
        />
      </Layout>
    </Column>
  </Block>
)

export default License
