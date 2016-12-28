import React from 'react'
import { Condition } from 'avrs-ui/src/condition'
import { Block } from 'avrs-ui/src/content'
import Common from './registration/Common'
import Personal from './registration/Personal'
import Success from './registration/Success'

const Registration = ({ step, ...props }) => (
  <Block>
    <Condition match={step === 0}>
      <Common {...props} />
    </Condition>
    <Condition match={step === 1}>
      <Personal {...props} />
    </Condition>
    <Condition match={step === 2}>
      <Success {...props} />
    </Condition>
  </Block>
)

export default Registration
