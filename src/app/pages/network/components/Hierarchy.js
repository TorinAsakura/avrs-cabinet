import React from 'react'
import { Row, Layout } from 'flex-layouts'
import { Block } from 'avrs-ui/src/content'
import { Condition } from 'avrs-ui/src/condition'
import { Network } from 'avrs-ui/src/network'

const Hierarchy = ({ children, data = {}, history }) => (
  <Row>
    <Layout>
      <Block
        offset
        shadow
      >
        <Condition match={data.id}>
          <Network
            width={924}
            data={data}
            onClick={user => history.push(`/network/tree/${user.id}/stat`)}
          />
        </Condition>
      </Block>
    </Layout>
    <Layout>
      {children}
    </Layout>
  </Row>
)

export default Hierarchy
