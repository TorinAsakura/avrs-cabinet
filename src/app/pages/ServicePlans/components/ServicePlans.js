import React from 'react'
import { Row, Layout } from 'flex-layouts'
import ServicePlan from './ServicePlan'

const ServicePlans = ({
  active, basis, standart, premium, business,
  onMonth, onQuarter, onHalfYear, onYear, onOpenProduct,
}) => (
  <Row>
    <Layout>
      <ServicePlan
        {...basis}
        name='Базис'
        color='gray250'
        onOpenProduct={onOpenProduct}
        onMonth={() => onMonth('basis')}
        onQuarter={() => onQuarter('basis')}
        onHalfYear={() => onHalfYear('basis')}
        onYear={() => onYear('basis')}
        active={active && active.type === 'basis' ? active : null}
      />
    </Layout>
    <Layout basis='20px' />
    <Layout>
      <ServicePlan
        {...standart}
        name='Стандарт'
        color='blue400'
        onOpenProduct={onOpenProduct}
        onMonth={() => onMonth('standart')}
        onQuarter={() => onQuarter('standart')}
        onHalfYear={() => onHalfYear('standart')}
        onYear={() => onYear('standart')}
        active={active && active.type === 'standart' ? active : null}
      />
    </Layout>
    <Layout basis='20px' />
    <Layout>
      <ServicePlan
        {...premium}
        name='Премиум'
        color='orange500'
        onOpenProduct={onOpenProduct}
        onMonth={() => onMonth('premium')}
        onQuarter={() => onQuarter('premium')}
        onHalfYear={() => onHalfYear('premium')}
        onYear={() => onYear('premium')}
        active={active && active.type === 'premium' ? active : null}
      />
    </Layout>
    <Layout basis='20px' />
    <Layout>
      <ServicePlan
        {...business}
        name='Бизнес'
        color='green500'
        onOpenProduct={onOpenProduct}
        onMonth={() => onMonth('business')}
        onQuarter={() => onQuarter('business')}
        onHalfYear={() => onHalfYear('business')}
        onYear={() => onYear('business')}
        active={active && active.type === 'business' ? active : null}
      />
    </Layout>
  </Row>
)

export default ServicePlans
