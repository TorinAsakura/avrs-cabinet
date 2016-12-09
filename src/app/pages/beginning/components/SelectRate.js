import React from 'react'
import { Column, Row, Layout } from 'flex-layouts'
import { Block } from 'avrs-ui/src/content'
import { Text, Space } from 'avrs-ui/src/text'
import { Divider } from 'avrs-ui/src/divider'
import { Slider } from 'avrs-ui/src/slider'
import { RouteLink } from 'avrs-ui/src/link'

const names = {
  Basis: 'Базис',
  Standard: 'Стандарт',
  Premium: 'Премиум',
  Business: 'Бизнес',
}

const cpu = {
  Basis: 5,
  Standard: 15,
  Premium: 20,
  Business: 40,
}

const SelectRate = ({ plan, onChangePeriod, onChangeTime, onChangeCPU, onChangeMemory }) => (
  <Block shadow>
    <Row>
      <Layout basis='15px' />
      <Layout justify='center'>
        <Text
          size='medium'
          color='black400'
        >
          Выберите тариф
        </Text>
      </Layout>
      <Layout basis='15px' />
      <Layout>
        <Divider />
      </Layout>
      <Layout basis='45px' />
      <Layout>
        <Column>
          <Layout basis='135px' />
          <Layout basis='310px'>
            <Text
              weight='light'
              color='gray250'
              lineHeight='extended'
            >
              Настройте параметры и мы подскажем, какой тариф вам подходит:
            </Text>
          </Layout>
        </Column>
      </Layout>
      <Layout basis='25px' />
      <Layout>
        <Column>
          <Layout basis='135px' />
          <Layout basis='310px'>
            <Row>
              <Layout>
                <Text
                  size='small'
                  color='gray250'
                >
                  Сколько ваш ПК может находиться в сети?
                </Text>
              </Layout>
              <Layout basis='10px' />
              <Layout>
                <Slider
                  prefix='ч.'
                  value={plan.time}
                  markers={[10, 12, 15, 20]}
                  onChange={onChangeTime}
                />
              </Layout>
              <Layout basis='45px' />
              <Layout>
                <Text
                  size='small'
                  color='gray250'
                >
                  Планируемый арендный ресурс CPU
                </Text>
              </Layout>
              <Layout basis='10px' />
              <Layout>
                <Slider
                  prefix='%'
                  value={cpu[plan.name]}
                  markers={[5, 15, 20, 40]}
                  onChange={onChangeCPU}
                />
              </Layout>
              <Layout basis='45px' />
              <Layout>
                <Text
                  size='small'
                  color='gray250'
                >
                  Планируемый арендный ресурс RAM Gb
                </Text>
              </Layout>
              <Layout basis='10px' />
              <Layout>
                <Slider
                  prefix='Gb'
                  value={plan.memory / 1024}
                  markers={[1, 2, 3, 4]}
                  onChange={onChangeMemory}
                />
              </Layout>
            </Row>
          </Layout>
          <Layout basis='80px' />
          <Layout>
            <Divider vertical />
          </Layout>
          <Layout basis='45px' />
          <Layout basis='300px'>
            <Row>
              <Layout basis='60px' />
              <Layout>
                <Text
                  weight='light'
                  color='gray250'
                  lineHeight='extended'
                >
                  Ваш заработок:
                </Text>
              </Layout>
              <Layout basis='35px' />
              <Layout>
                <Text size='large'>
                  {plan.amount} €
                </Text>
              </Layout>
              <Layout basis='10px' />
              <Layout>
                <Text
                  color='gray250'
                  size='small'
                >
                  С тарифом
                </Text>
                <Space />
                <Text
                  color='blue400'
                  size='small'
                >
                  {names[plan.name]}
                </Text>
                <Space />
                <Text
                  color='gray250'
                  size='small'
                >
                  за
                </Text>
                <Space />
                <Text
                  color='blue400'
                  size='small'
                >
                  {plan.period} дней
                </Text>
                <Space />
                <Text
                  color='gray250'
                  size='small'
                >
                  подписки
                </Text>
              </Layout>
              <Layout basis='25px' />
              <Layout>
                <Slider
                  value={plan.period}
                  markers={[30, 90, 180, 365]}
                  onChange={onChangePeriod}
                />
              </Layout>
            </Row>
          </Layout>
          <Layout grow={1} />
        </Column>
      </Layout>
      <Layout basis='50px' />
      <Layout>
        <Divider />
      </Layout>
      <Layout basis='15px' />
      <Layout>
        <Column>
          <Layout basis='25px' />
          <Layout>
            <Text
              color='blue400'
              size='small'
            >
              Подробнее о тарифах
            </Text>
          </Layout>
          <Layout grow={1} />
          <Layout>
            <RouteLink to='/service_plans'>
              <Text
                color='gray250'
                size='small'
              >
                Продолжить
              </Text>
            </RouteLink>
            <Space />
            <Text
              color='gray250'
              size='small'
            >
              &#10095;
            </Text>
          </Layout>
          <Layout basis='25px' />
        </Column>
      </Layout>
      <Layout basis='15px' />
    </Row>
  </Block>
)

export default SelectRate
