import React from 'react'
import { Column, Row, Layout } from 'flex-layouts'
import { Block } from 'avrs-ui/src/content'
import { Text, Space } from 'avrs-ui/src/text'

const Profile = ({ firstName, lastName, inviteCode }) => (
  <Row>
    <Layout>
      <Block
        offset
        fill='blue'
        attach='bottom'
      >
        <Text size='medium' color='white'>
          {firstName}
          <Space />
          {lastName}
        </Text>
      </Block>
    </Layout>
    <Layout>
      <Block offset shadow>
        <Row>
          <Layout>
            <Column>
              <Layout basis='120px'>
                <Text size='small' weight='medium' color='black400'>
                  Invite code:
                </Text>
              </Layout>
              <Layout basis='60px' />
              <Layout basis='30%'>
                <Text size='small' color='black400'>
                  {inviteCode}
                </Text>
              </Layout>
            </Column>
          </Layout>
          <Layout basis='16px' />
          <Layout>
            <Column>
              <Layout basis='120px'>
                <Text size='small' weight='medium' color='black400'>
                  Birthday:
                </Text>
              </Layout>
              <Layout basis='60px' />
              <Layout basis='30%'>
                <Text size='small' color='black400'>
                  1975/05/05
                </Text>
              </Layout>
              <Layout basis='110px' />
              <Layout basis='120px'>
                <Text size='small' weight='medium' color='black400'>
                  Status:
                </Text>
              </Layout>
              <Layout>
                <Text size='small' color='black400'>
                  Passive
                </Text>
              </Layout>
            </Column>
          </Layout>
          <Layout basis='16px' />
          <Layout>
            <Column>
              <Layout basis='120px'>
                <Text size='small' weight='medium' color='black400'>
                  Registeed:
                </Text>
              </Layout>
              <Layout basis='60px' />
              <Layout basis='30%'>
                <Text size='small' color='black400'>
                  2016/01/16
                </Text>
              </Layout>
              <Layout basis='110px' />
              <Layout basis='120px'>
                <Text size='small' weight='medium' color='black400'>
                  Verification:
                </Text>
              </Layout>
              <Layout>
                <Text size='small' color='black400'>
                  Not verified
                </Text>
              </Layout>
            </Column>
          </Layout>
          <Layout basis='16px' />
          <Layout>
            <Column>
              <Layout basis='120px'>
                <Text size='small' weight='medium' color='black400'>
                  Career:
                </Text>
              </Layout>
              <Layout basis='60px' />
              <Layout basis='30%'>
                <Text size='small' color='black400'>
                  None
                </Text>
              </Layout>
              <Layout basis='110px' />
              <Layout basis='120px'>
                <Text size='small' weight='medium' color='black400'>
                  Debtor:
                </Text>
              </Layout>
              <Layout>
                <Text size='small' color='black400'>
                  No
                </Text>
              </Layout>
            </Column>
          </Layout>
          <Layout basis='16px' />
          <Layout>
            <Column>
              <Layout basis='120px'>
                <Text size='small' weight='medium' color='black400'>
                  Sponsor:
                </Text>
              </Layout>
              <Layout basis='60px' />
              <Layout basis='30%'>
                <Text size='small' color='black400'>
                  David Reimer
                </Text>
              </Layout>
              <Layout basis='110px' />
              <Layout basis='120px'>
                <Text size='small' weight='medium' color='black400'>
                  Leader:
                </Text>
              </Layout>
              <Layout>
                <Text size='small' color='black400'>
                  David Reimer
                </Text>
              </Layout>
            </Column>
          </Layout>
        </Row>
      </Block>
    </Layout>
    <Layout basis='25px' />
  </Row>
)

export default Profile
