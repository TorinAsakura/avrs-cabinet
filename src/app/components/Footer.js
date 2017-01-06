import React, { PropTypes } from 'react'
import { Column, Row, Layout } from 'flex-layouts'
import { Link, RouteLink } from 'avrs-ui/src/link'
import { Condition } from 'avrs-ui/src/condition'
import { Text } from 'avrs-ui/src/text'

const Footer = ({ landingUrl, external }) => (
  <div style={{ minWidth: 350 }}>
    <Row>
      <Layout>
        <Column justify='center'>
          <Layout>
            <Link href={`${landingUrl}/about`}>
              <Text
                color='gray250'
                size='xsmall'
                weight='light'
              >
                О продукте
              </Text>
            </Link>
          </Layout>
          <Layout basis='15px' />
          <Layout>
            <Link href={`${landingUrl}/?section=capabilities`}>
              <Text
                color='gray250'
                size='xsmall'
                weight='light'
              >
                Возможности
              </Text>
            </Link>
          </Layout>
          <Layout basis='15px' />
          <Layout>
            <Condition match={!external}>
              <RouteLink to='/service-plans'>
                <Text
                  color='gray250'
                  size='xsmall'
                  weight='light'
                >
                  Тарифы
                </Text>
              </RouteLink>
            </Condition>
            <Condition match={external}>
              <Link href={`${landingUrl}/service-plans`}>
                <Text
                  color='gray250'
                  size='xsmall'
                  weight='light'
                >
                  Тарифы
                </Text>
              </Link>
            </Condition>
          </Layout>
          <Layout basis='15px' />
          <Layout>
            <Condition match={!external}>
              <RouteLink to='/support'>
                <Text
                  color='gray250'
                  size='xsmall'
                  weight='light'
                >
                  Поддержка
                </Text>
              </RouteLink>
            </Condition>
            <Condition match={external}>
              <Link href={`${landingUrl}/support`}>
                <Text
                  color='gray250'
                  size='xsmall'
                  weight='light'
                >
                  Поддержка
                </Text>
              </Link>
            </Condition>
          </Layout>
        </Column>
      </Layout>
      <Layout basis='12px' />
      <Layout>
        <Column justify='center'>
          <Layout>
            <Link href={`${landingUrl}/`}>
              <Text
                color='gray250'
                size='xsmall'
                weight='light'
              >
                Промо акции
              </Text>
            </Link>
          </Layout>
          <Layout basis='15px' />
          <Layout>
            <Link href={`${landingUrl}/about`}>
              <Text
                color='gray250'
                size='xsmall'
                weight='light'
              >
                Помощь
              </Text>
            </Link>
          </Layout>
          <Layout basis='15px' />
          <Layout>
            <Link href={`${landingUrl}/`}>
              <Text
                color='gray250'
                size='xsmall'
                weight='light'
              >
                Aversis © 2016
              </Text>
            </Link>
          </Layout>
        </Column>
      </Layout>
    </Row>
  </div>
)

Footer.propTypes = {
  landingUrl: PropTypes.string,
}

export default Footer
