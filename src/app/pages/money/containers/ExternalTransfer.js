import React from 'react'
import { connect } from 'react-redux'
import { Column, Layout } from 'flex-layouts'
import { Block } from 'avrs-ui/src/content'
import { Steps, Step } from 'avrs-ui/src/steps'
import OutputMethods from './transfer/OutputMethods'
import CardMethod from './transfer/CardMethod'
import BitcoinMethod from './transfer/BitcoinMethod'
import PaymentSuccess from '../components/transfer/PaymentSuccess'

const renderMethod = (method) => {
  if (method === 'bitcoin') {
    return (
      <BitcoinMethod />
    )
  }

  return (
    <CardMethod />
  )
}

const External = ({ step, method, onChangeMethod }) => ( // eslint-disable-line no-unused-vars
  <Column>
    <Layout grow={1} />
    <Layout basis='924px'>
      <Block>
        <Steps current={step}>
          <Step title='Способ вывода'>
            <OutputMethods />
          </Step>
          <Step title='Информация'>
            {renderMethod(method)}
          </Step>
          <Step title='Подтверждение'>
            <PaymentSuccess />
          </Step>
        </Steps>
      </Block>
    </Layout>
    <Layout grow={1} />
  </Column>
)

export default connect(
  state => ({
    step: state.money.transfer.external.step,
    method: state.money.transfer.external.method,
  }),
)(External)
