import React from 'react'
import { StyleSheet } from 'elementum'
import { ColumnLayout, RowLayout, Layout } from 'flex-layouts'
import { LogoWithText } from 'avrs-ui/src/logo'

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

const Saver = ({ hide }) => (
  <div className={styles({ hide })}>
    <ColumnLayout fill>
      <Layout grow={1} />
      <Layout>
        <RowLayout>
          <Layout grow={1} />
          <Layout basis='15px' />
          <Layout>
            <LogoWithText height={30} />
          </Layout>
          <Layout basis='25px' />
          <Layout justify='center'>
            <Icon />
          </Layout>
          <Layout grow={1} />
        </RowLayout>
      </Layout>
      <Layout grow={1} />
    </ColumnLayout>
  </div>
)

export default Saver
