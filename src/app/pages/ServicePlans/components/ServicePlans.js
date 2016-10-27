import React from 'react'
import { Row, Layout } from 'flex-layouts'
import { Condition } from 'avrs-ui/src/condition'
import ServicePlan from './ServicePlan'

const ServicePlans = ({ active, basis, onMonth, onQuarter, onHalfYear, onYear, onBuy }) => (
  <Row>
    <Layout>
      <Condition match={basis}>
        <ServicePlan
          {...basis}
          name='Базис'
          color='gray250'
          onBuy={onBuy}
          onMonth={() => onMonth('basis')}
          onQuarter={() => onQuarter('basis')}
          onHalfYear={() => onHalfYear('basis')}
          onYear={() => onYear('basis')}
          active={(active && active.id.includes('basis')) ? active : null}
        />
      </Condition>
    </Layout>
    <Layout basis='20px' />
    <Layout>
      <Condition match={basis}>
        <ServicePlan
          {...basis}
          name='Стандарт'
          color='blue400'
          onBuy={onBuy}
          onMonth={() => onMonth('standard')}
          onQuarter={() => onQuarter('standard')}
          onHalfYear={() => onHalfYear('standard')}
          onYear={() => onYear('standard')}
          active={(active && active.id.includes('standard')) ? active : null}
        />
      </Condition>
    </Layout>
    <Layout basis='20px' />
    <Layout>
      <Condition match={basis}>
        <ServicePlan
          {...basis}
          name='Премиум'
          color='orange500'
          onBuy={onBuy}
          onMonth={() => onMonth('premium')}
          onQuarter={() => onQuarter('premium')}
          onHalfYear={() => onHalfYear('premium')}
          onYear={() => onYear('premium')}
          active={(active && active.id.includes('premium')) ? active : null}
        />
      </Condition>
    </Layout>
    <Layout basis='20px' />
    <Layout>
      <Condition match={basis}>
        <ServicePlan
          {...basis}
          name='Бизнес'
          color='green500'
          onBuy={onBuy}
          onMonth={() => onMonth('business')}
          onQuarter={() => onQuarter('business')}
          onHalfYear={() => onHalfYear('business')}
          onYear={() => onYear('business')}
          active={(active && active.id.includes('business')) ? active : null}
        />
      </Condition>
    </Layout>
  </Row>
)

export default ServicePlans
