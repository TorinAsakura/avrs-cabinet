import React from 'react'
import { Column, Row, Layout } from 'flex-layouts'
import { Button, GhostButton } from 'avrs-ui/src/button'
import { Block } from 'avrs-ui/src/content'
import { Label } from 'avrs-ui/src/label'
import { DatePicker } from 'avrs-ui/src/datepicker'
import { Select } from 'avrs-ui/src/select'
import { Input, PhoneInput } from 'avrs-ui/src/input'
import { Textarea } from 'avrs-ui/src/textarea'
import { Checkbox } from 'avrs-ui/src/checkbox'
import { Text } from 'avrs-ui/src/text'
import countriesData from 'i18n-iso-countries/langs/ru.json'

const countries =
  Object.keys(countriesData).reduce((result, code) =>
    [...result, { value: code, label: countriesData[code] }]
  , [])

const GeneralInformation = ({
  firstName, lastName, email, phone, sex, birthday, address, country, receiveEmails, receiveAnnouncements,
  onChangeFirstName, onChangeLastName, onChangeEmail, onChangePhone, onChangeSex,
  onChangeBirthday, onChangeAddress, onChangeCountry, onChangeReceiveEmails,
  onChangeReceiveAnnouncements, onSave, onReset,
}) => (
  <Block
    offset
    shadow
  >
    <Column>
      <Layout basis='300px'>
        <Row>
          <Layout>
            <Label>
              Имя:
            </Label>
          </Layout>
          <Layout basis='5px' />
          <Layout>
            <Input
              value={firstName}
              onChange={onChangeFirstName}
            />
          </Layout>
          <Layout basis='20px' />
          <Layout>
            <Label>
              Фамилия:
            </Label>
          </Layout>
          <Layout basis='5px' />
          <Layout>
            <Input
              value={lastName}
              onChange={onChangeLastName}
            />
          </Layout>
          <Layout basis='20px' />
          <Layout>
            <Label>
              Email адрес:
            </Label>
          </Layout>
          <Layout basis='5px' />
          <Layout>
            <Input
              value={email}
              onChange={onChangeEmail}
            />
          </Layout>
          <Layout basis='20px' />
          <Layout>
            <Label>
              Номер телефона:
            </Label>
          </Layout>
          <Layout basis='5px' />
          <div style={{ position: 'relative', overflow: 'visible' }}>
            <PhoneInput
              value={phone}
              onChange={onChangePhone}
            />
          </div>
          <Layout basis='20px' />
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
              onChange={onChangeSex}
            />
          </Layout>
          <Layout basis='20px' />
          <Layout>
            <Label>
              Дата рождения:
            </Label>
          </Layout>
          <Layout basis='5px' />
          <Layout>
            <DatePicker
              value={birthday}
              onChange={onChangeBirthday}
            />
          </Layout>
          <Layout basis='20px' />
          <Layout>
            <Label>
              Почтовый адрес (на Английском языке):
            </Label>
          </Layout>
          <Layout basis='5px' />
          <Layout>
            <Textarea
              rows={4}
              value={address}
              onChange={onChangeAddress}
            />
          </Layout>
          <Layout basis='20px' />
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
              onChange={onChangeCountry}
            />
          </Layout>
          <Layout basis='25px' />
          <Layout>
            <Column align='center'>
              <Layout>
                <Checkbox
                  value={receiveEmails}
                  onChange={onChangeReceiveEmails}
                />
              </Layout>
              <Layout basis='12px' />
              <Layout>
                <Text size='small' color='gray400'>
                  Receive system email notifications
                </Text>
              </Layout>
            </Column>
          </Layout>
          <Layout basis='16px' />
          <Layout>
            <Column align='center'>
              <Layout>
                <Checkbox
                  value={receiveAnnouncements}
                  onChange={onChangeReceiveAnnouncements}
                />
              </Layout>
              <Layout basis='12px' />
              <Layout>
                <Text size='small' color='gray400'>
                  Receive announcements
                </Text>
              </Layout>
            </Column>
          </Layout>
          <Layout basis='30px' />
          <Layout>
            <Column>
              <Layout>
                <GhostButton
                  rounded
                  onClick={onReset}
                >
                  Сбросить
                </GhostButton>
              </Layout>
              <Layout basis='12px' />
              <Layout>
                <Button
                  shadow
                  rounded
                  color='green'
                  onClick={onSave}
                >
                  Сохранить
                </Button>
              </Layout>
            </Column>
          </Layout>
        </Row>
      </Layout>
    </Column>
  </Block>
)

export default GeneralInformation
