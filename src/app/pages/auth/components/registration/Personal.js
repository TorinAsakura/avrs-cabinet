import React from 'react'
import { Column, Row, Layout } from 'flex-layouts'
import Recaptcha from 'react-gcaptcha'
import { Text, Space } from 'avrs-ui/src/text'
import { PhoneInput } from 'avrs-ui/src/input'
import { Link } from 'avrs-ui/src/link'
import { Button, GhostButton } from 'avrs-ui/src/button'
import { Condition } from 'avrs-ui/src/condition'
import { Divider } from 'avrs-ui/src/divider'
import { Label } from 'avrs-ui/src/label'
import { Select } from 'avrs-ui/src/select'
import { DatePicker } from 'avrs-ui/src/datepicker'
import { Checkbox } from 'avrs-ui/src/checkbox'
import countriesData from 'i18n-iso-countries/langs/ru.json'

const countries =
  Object.keys(countriesData).reduce((result, code) =>
    [...result, { value: code, label: countriesData[code] }]
  , [])

const Personal = ({
  phone, country, sex, birthday, agreement, errors,
  onChangePhone, onChangeCountry, onChangeBirthday, onChangeSex, onChangeCaptcha,
  onChangeAgreement, onPrevStep, onRegister,
}) => (
  <Row>
    <Layout basis='20px' />
    <Layout justify='center'>
      <Text color='black400'>
        Персональная информация
      </Text>
    </Layout>
    <Layout basis='20px' />
    <Layout>
      <Divider />
    </Layout>
    <Layout basis='30px' />
    <Layout>
      <Column>
        <Layout grow={1} />
        <Layout shrink={1} basis='302px'>
          <Row>
            <Layout>
              <Label>
                Номер телефона:
              </Label>
            </Layout>
            <Layout basis='5px' />
            <div style={{ position: 'relative', overflow: 'visible' }}>
              <PhoneInput
                value={phone}
                invalid={errors.phone}
                onChange={onChangePhone}
              />
            </div>
            <Condition match={errors.phone}>
              <Row>
                <Layout basis='5px' />
                <Layout>
                  <Text color='red400' size='xsmall'>
                    {errors.phone}
                  </Text>
                </Layout>
              </Row>
            </Condition>
            <Layout basis='16px' />
            <Layout>
              <Label>
                Старана:
              </Label>
            </Layout>
            <Layout basis='5px' />
            <Layout>
              <Select
                options={countries}
                value={country}
                invalid={errors.country}
                onChange={onChangeCountry}
              />
            </Layout>
            <Condition match={errors.country}>
              <Row>
                <Layout basis='5px' />
                <Layout>
                  <Text color='red400' size='xsmall'>
                    {errors.country}
                  </Text>
                </Layout>
              </Row>
            </Condition>
            <Layout basis='16px' />
            <Layout>
              <Label>
                Пол:
              </Label>
            </Layout>
            <Layout basis='5px' />
            <Layout>
              <Select
                value={sex}
                options={[{
                  label: 'Муж.',
                  value: 'male',
                }, {
                  label: 'Жен.',
                  value: 'female',
                }]}
                invalid={errors.sex}
                onChange={onChangeSex}
              />
            </Layout>
            <Condition match={errors.sex}>
              <Row>
                <Layout basis='5px' />
                <Layout>
                  <Text color='red400' size='xsmall'>
                    {errors.sex}
                  </Text>
                </Layout>
              </Row>
            </Condition>
            <Layout basis='16px' />
            <Layout>
              <Label>
                Дата рождения:
              </Label>
            </Layout>
            <Layout basis='5px' />
            <Layout>
              <DatePicker
                value={birthday}
                invalid={errors.birthday}
                onChange={onChangeBirthday}
              />
            </Layout>
            <Condition match={errors.birthday}>
              <Row>
                <Layout basis='5px' />
                <Layout>
                  <Text color='red400' size='xsmall'>
                    {errors.birthday}
                  </Text>
                </Layout>
              </Row>
            </Condition>
            <Layout basis='25px' />
            <Layout>
              <Recaptcha
                sitekey='6Ldkrw8UAAAAALVD730V83tTVeY72KHULjPo-TvO'
                verifyCallback={onChangeCaptcha}
              />
            </Layout>
            <Condition match={errors.captcha}>
              <Row>
                <Layout basis='5px' />
                <Layout>
                  <Text color='red400' size='xsmall'>
                    {errors.captcha}
                  </Text>
                </Layout>
              </Row>
            </Condition>
            <Layout basis='20px' />
          </Row>
        </Layout>
        <Layout grow={1} />
      </Column>
    </Layout>
    <Layout>
      <Column>
        <Layout grow={1} />
        <Layout basis='30px'>
          <div style={{ paddingTop: 4 }}>
            <Checkbox
              value={agreement}
              onChange={onChangeAgreement}
            />
          </div>
        </Layout>
        <Layout basis='302px'>
          <Row>
            <div>
              <Text size='xsmall' lineHeight='extended' color='black400'>
                I have read and accept
              </Text>
              <Space />
              <Link>
                <Text size='xsmall' color='blue400' lineHeight='extended'>
                  Aversis Participant Agreement
                </Text>
              </Link>
              <Space />
              <Text size='xsmall' lineHeight='extended' color='black400'>
                and i agree to receive email notifications from Aversis Project
              </Text>
            </div>
            <Condition match={errors.agreement}>
              <Row>
                <Layout basis='5px' />
                <Layout>
                  <Text color='red400' size='xsmall'>
                    {errors.agreement}
                  </Text>
                </Layout>
              </Row>
            </Condition>
            <Layout basis='20px' />
          </Row>
        </Layout>
        <Layout basis='30px' />
        <Layout grow={1} />
      </Column>
    </Layout>
    <Layout>
      <Column justify='center'>
        <Layout basis='140px'>
          <GhostButton
            fill
            rounded
            onClick={onPrevStep}
          >
            Назад
          </GhostButton>
        </Layout>
        <Layout basis='12px' />
        <Layout basis='140px'>
          <Button
            fill
            shadow
            rounded
            color='green'
            onClick={onRegister}
          >
            Регистрация
          </Button>
        </Layout>
      </Column>
    </Layout>
    <Layout basis='30px' />
  </Row>
)

export default Personal
