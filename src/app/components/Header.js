import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { Column, Layout } from 'flex-layouts'
import { Logo } from 'avrs-ui/src/logo'
import { Item } from 'avrs-ui/src/navigation'
import { AccountIcon, LogOutIcon } from 'avrs-ui/src/icons'
import { Condition } from 'avrs-ui/src/condition'
import { Text, Space } from 'avrs-ui/src/text'
import { NavLink } from 'avrs-ui/src/link'

const Header = ({ firstName, lastName, balance, isNew, onLogout }) => (
  <Column align='center'>
    <Layout basis='25px' />
    <Layout align='center'>
      <Link to='/'>
        <Logo height={24} />
      </Link>
    </Layout>
    <Layout basis='35px' />
    <Condition match={isNew}>
      <Layout>
        <NavLink to='/'>
          Начало работы
        </NavLink>
      </Layout>
    </Condition>
    <Condition match={!isNew}>
      <Layout>
        <NavLink to='/'>
          Главная
        </NavLink>
      </Layout>
    </Condition>
    <Layout basis='30px' />
    <Layout>
      <NavLink to='/service_plans'>
        Тарифы
      </NavLink>
    </Layout>
    <Layout basis='30px' />
    <Condition match={!isNew}>
      <Layout>
        <NavLink to='/money'>
          Деньги
        </NavLink>
      </Layout>
    </Condition>
    <Condition match={!isNew}>
      <Layout basis='30px' />
    </Condition>
    <Condition match={!isNew}>
      <Layout>
        <NavLink to='/network'>
          Сеть
        </NavLink>
      </Layout>
    </Condition>
    <Layout grow={1} />
    <Condition match={!isNew}>
      <Layout align='center'>
        <Text color='gray250' size='small' weight='medium' lineHeight='extended'>
          € {balance}
        </Text>
      </Layout>
    </Condition>
    <Layout basis='30px' />
    <Layout>
      <NavLink to='/profile'>
        <Column align='center'>
          <Layout>
            <AccountIcon height={24} />
            <Space />
            <Space />
          </Layout>
          <Layout>
            <span>
              {firstName}
              <Space />
              {lastName}
            </span>
          </Layout>
        </Column>
      </NavLink>
    </Layout>
    <Layout basis='30px' />
    <Layout>
      <Item
        plain
        border='left'
        onClick={onLogout}
      >
        <LogOutIcon />
      </Item>
    </Layout>
  </Column>
)

Header.propTypes = {
  children: PropTypes.element,
}

export default Header
