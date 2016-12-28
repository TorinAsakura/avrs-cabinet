import React from 'react'
import { StyleSheet } from 'elementum'
import { Column, Row, Layout } from 'flex-layouts'
import { Condition } from 'avrs-ui/src/condition'
import { LogoWithText } from 'avrs-ui/src/logo'
import { Link } from 'avrs-ui/src/link'
import { Text, Space } from 'avrs-ui/src/text'

const Icon = () => (
  <svg viewBox='0 14 32 18' width='192' height='24' fill='#0288d1' preserveAspectRatio='none'>
    <path
      opacity='0.8'
      d='M2 14 V18 H6 V14z'
      transform='translate(0 0)'
    >
      <animateTransform
        dur='2s'
        begin='0'
        type='translate'
        calcMode='spline'
        values='0 0; 24 0; 0 0'
        repeatCount='indefinite'
        attributeName='transform'
        keySplines='0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8'
      />
    </path>
    <path
      opacity='0.5'
      d='M0 14 V18 H8 V14z'
      transform='translate(0 0)'
    >
      <animateTransform
        dur='2s'
        begin='0.1s'
        type='translate'
        calcMode='spline'
        values='0 0; 24 0; 0 0'
        repeatCount='indefinite'
        attributeName='transform'
        keySplines='0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8'
      />
    </path>
    <path
      opacity='0.25'
      d='M0 14 V18 H8 V14z'
      transform='translate(0 0)'
    >
      <animateTransform
        dur='2s'
        begin='0.2s'
        type='translate'
        calcMode='spline'
        values='0 0; 24 0; 0 0'
        repeatCount='indefinite'
        attributeName='transform'
        keySplines='0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8'
      />
    </path>
  </svg>
)

const styles = StyleSheet.create({
  self: {
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 9999,
    width: '100%',
    minHeight: '100%',
    background: '#ffffff',
  },
  hide: {
    '& svg': {
      transition: 'opacity 0.5s ease-in-out',
      opacity: 0,
    },
  },
})

const Saver = ({ hide, notActivated, activationSent, activationError, onSendActivation }) => (
  <div className={styles({ hide })}>
    <Column fill>
      <Layout grow={1} />
      <Layout>
        <Row>
          <Layout grow={1} />
          <Layout basis='15px' />
          <Layout justify='center'>
            <LogoWithText height={30} />
          </Layout>
          <Condition match={!(notActivated || activationError)}>
            <Layout justify='center' basis='80px'>
              <Row>
                <Layout basis='25px' />
                <Layout>
                  <Icon />
                </Layout>
              </Row>
            </Layout>
          </Condition>
          <Condition match={activationError}>
            <Layout justify='center' basis='80px'>
              <Row>
                <Layout basis='22px' />
                <Layout justify='center'>
                  <Text color='black400'>
                    Ошибка активации аккаунта. Пользователь не найден.
                  </Text>
                </Layout>
              </Row>
            </Layout>
          </Condition>
          <Condition match={notActivated}>
            <Layout justify='center' basis='80px'>
              <Row>
                <Layout basis='22px' />
                <Layout justify='center'>
                  <Text color='black400'>
                    Ваш аккаунт не активирован.
                  </Text>
                </Layout>
                <Layout basis='4px' />
                <Condition match={activationSent}>
                  <Layout justify='center'>
                    <Text size='small' color='black400' weight='light'>
                      Инструкции для активации высланы на ваш email адрес.
                    </Text>
                  </Layout>
                </Condition>
                <Condition match={!activationSent}>
                  <Layout justify='center'>
                    <Text size='small' color='black400' weight='light'>
                      Для активации перейдите по ссылке, высланной на ваш email адрес.
                    </Text>
                  </Layout>
                </Condition>
                <Layout basis='4px' />
                <Condition match={!activationSent}>
                  <Layout justify='center'>
                    <Text size='small' color='black400' weight='light'>
                      Если вы не получали письмо,
                    </Text>
                    <Space />
                    <Link onClick={onSendActivation}>
                      <Text size='small' color='blue400' weight='light'>
                        выслать инструкции
                      </Text>
                    </Link>
                    <Text size='small' color='black400' weight='light'>
                      .
                    </Text>
                  </Layout>
                </Condition>
              </Row>
            </Layout>
          </Condition>
          <Layout grow={1} />
        </Row>
      </Layout>
      <Layout grow={1} />
    </Column>
  </div>
)

export default Saver
