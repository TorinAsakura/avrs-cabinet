import React from 'react'
import { Column, Row, Layout } from 'flex-layouts'
import { Block } from 'avrs-ui/src/content'
import { Label } from 'avrs-ui/src/label'
import { Input } from 'avrs-ui/src/input'

const GeneralInformation = ({ firstName, lastName, email }) => (
  <Block
    offset
    shadow
  >
    <Column>
      <Layout basis='300px'>
        <Row>
          <Layout>
            <Label>
              Имя:
            </Label>
          </Layout>
          <Layout basis='5px' />
          <Layout>
            <Input
              value={firstName}
            />
          </Layout>
          <Layout basis='20px' />
          <Layout>
            <Label>
              Фамилия:
            </Label>
          </Layout>
          <Layout basis='5px' />
          <Layout>
            <Input
              value={lastName}
            />
          </Layout>
          <Layout basis='20px' />
          <Layout>
            <Label>
              Email адрес:
            </Label>
          </Layout>
          <Layout basis='5px' />
          <Layout>
            <Input
              value={email}
            />
          </Layout>
        </Row>
      </Layout>
    </Column>
  </Block>
)

export default GeneralInformation
