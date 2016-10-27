import React from 'react'
import { Column, Row, Layout } from 'flex-layouts'
import { Block } from 'avrs-ui/src/content'
import { Text } from 'avrs-ui/src/text'
import { Divider } from 'avrs-ui/src/divider'
import { InstrumentIcon, GlassesIcon, RocketIcon } from 'avrs-ui/src/icons'
import VideoPreview from './VideoPreview/VideoPreview'

const Welcome = () => (
  <Block shadow>
    <Row>
      <Layout basis='15px' />
      <Layout justify='center'>
        <Text
          size='medium'
          color='black400'
        >
          Добро пожаловать!
        </Text>
      </Layout>
      <Layout basis='15px' />
      <Layout>
        <Divider />
      </Layout>
      <Layout basis='40px' />
      <Layout>
        <Column>
          <Layout grow={1} />
          <Layout basis='600px'>
            <Text
              align='center'
              weight='light'
              lineHeight='large'
            >
              Пожалуйста, ознакомьтесь с функционалом личного кабинета.
              Подберите подходящий для вас тариф и узнайте, сколько вы заработаете.
            </Text>
          </Layout>
          <Layout grow={1} />
        </Column>
      </Layout>
      <Layout basis='25px' />
      <Layout>
        <Column>
          <Layout grow={1} />
          <Layout basis='270px'>
            <Row>
              <Layout basis='30px' />
              <Layout>
                <Column>
                  <Layout basis='60px'>
                    <InstrumentIcon height={40} />
                  </Layout>
                  <Layout
                    basis='200px'
                    align='center'
                  >
                    <Text
                      size='small'
                      color='gray250'
                      lineHeight='extended'
                    >
                      Ознакомьтесь с инструкцией по приложению.
                    </Text>
                  </Layout>
                </Column>
              </Layout>
              <Layout basis='45px' />
              <Layout>
                <Column>
                  <Layout basis='60px'>
                    <GlassesIcon height={40} />
                  </Layout>
                  <Layout
                    basis='200px'
                    align='center'
                  >
                    <Text
                      size='small'
                      color='gray250'
                      lineHeight='extended'
                    >
                      Ознакомьтесь с лицензионным соглашением.
                    </Text>
                  </Layout>
                </Column>
              </Layout>
              <Layout basis='45px' />
              <Layout>
                <Column>
                  <Layout basis='60px'>
                    <RocketIcon height={40} />
                  </Layout>
                  <Layout
                    basis='200px'
                    align='center'
                  >
                    <Text
                      size='small'
                      color='gray250'
                      lineHeight='extended'
                    >
                      Ознакомьтесь с реферальной программой.
                    </Text>
                  </Layout>
                </Column>
              </Layout>
              <Layout basis='40px' />
            </Row>
          </Layout>
          <Layout basis='60px' />
          <Layout>
            <Divider vertical />
          </Layout>
          <Layout basis='60px' />
          <Layout basis='240px'>
            <Row>
              <Layout basis='30px' />
              <Layout>
                <VideoPreview />
              </Layout>
              <Layout basis='16px' />
              <Layout>
                <Text
                  size='medium'
                  color='black400'
                >
                  Посмотрите видео
                </Text>
              </Layout>
              <Layout basis='6px' />
              <Layout>
                <Text
                  size='small'
                  color='gray250'
                  lineHeight='extended'
                >
                  Ознакомьтесь с функционалом личного кабинета
                </Text>
              </Layout>
            </Row>
          </Layout>
          <Layout grow={1} />
        </Column>
      </Layout>
      <Layout basis='40px' />
    </Row>
  </Block>
)

export default Welcome
