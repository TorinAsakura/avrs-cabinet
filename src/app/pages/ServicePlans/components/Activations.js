import React from 'react'
import { Row, Layout } from 'flex-layouts'
import Activation from './Activation'

const Activations = ({ activations, onStart, onStop }) => (
  <Row>
    {activations.reduce((result, activation, index) => {
      result.push(
        (
          <Layout key={index}>
            <Activation
              {...activation}
              onStart={onStart}
              onStop={onStop}
            />
          </Layout>
        ),
      )

      result.push(
        (
          <Layout
            key={`offset-${index}`}
            basis='20px'
          />
        ),
      )

      return result
    }, [])}
  </Row>
)

export default Activations
