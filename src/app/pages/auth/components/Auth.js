import React, { PropTypes } from 'react'
import { Column, Row, Layout } from 'flex-layouts'
import { Logo } from 'avrs-ui/src/logo'
import { BackgroundArrowSection } from 'avrs-ui/src/section'
import { Button, GhostButton } from 'avrs-ui/src/button'
import { Text } from 'avrs-ui/src/text'
import { Divider } from 'avrs-ui/src/divider'
import { Link, RouteLink } from 'avrs-ui/src/link'
import Footer from '../../../containers/Footer'
import Container from './Container'

const Auth = ({ children, landingUrl, pathname }) => (
  <Row fill>
    <Layout basis='10px' />
    <Layout>
      <Column align='center'>
        <Layout basis='35px' />
        <Layout>
          <Link href={`${landingUrl}/`}>
            <Logo height={25} />
          </Link>
        </Layout>
        <Layout basis='30px' />
        <Layout>
          <Link href={`${landingUrl}/about`}>
            <Text
              size='small'
            >
              О продукте
            </Text>
          </Link>
        </Layout>
        <Layout basis='30px' />
        <Layout>
          <Link href={`${landingUrl}/?section=capabilities`}>
            <Text size='small'>
              Возможности
            </Text>
          </Link>
        </Layout>
        <Layout basis='30px' />
        <Layout>
          <Link href={`${landingUrl}/service-plans`}>
            <Text size='small'>
              Тарифы
            </Text>
          </Link>
        </Layout>
        <Layout basis='30px' />
        <Layout>
          <Link href={`${landingUrl}/news`}>
            <Text size='small'>
              Новости
            </Text>
          </Link>
        </Layout>
        <Layout grow={1} />
        <Layout>
          <RouteLink to='/auth/login'>
            <GhostButton rounded>
              Войти
            </GhostButton>
          </RouteLink>
        </Layout>
        <Layout basis='10px' />
        <Layout>
          <RouteLink to='/auth/registration'>
            <Button
              shadow
              rounded
              color='green'
            >
              Стать участником
            </Button>
          </RouteLink>
        </Layout>
        <Layout basis='15px' />
      </Column>
    </Layout>
    <Layout basis='10px' />
    <Layout>
      <Divider />
    </Layout>
    <Layout grow={1}>
      <BackgroundArrowSection>
        <Container pathname={pathname}>
          <Row align='center' justify='center' fill>
            <Layout>
              <div style={{ width: 480 }}>
                {children}
              </div>
            </Layout>
            <Layout basis='40px' />
            <Layout>
              <Footer external />
            </Layout>
          </Row>
        </Container>
      </BackgroundArrowSection>
    </Layout>
  </Row>
)

Auth.propTypes = {
  children: PropTypes.element,
  landingUrl: PropTypes.string,
  pathname: PropTypes.string,
}

export default Auth

