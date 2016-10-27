import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { Column, Layout } from 'flex-layouts'
import { Logo } from 'avrs-ui/src/logo'
import { Item } from 'avrs-ui/src/navigation'
import { AccountIcon, LogOutIcon } from 'avrs-ui/src/icons'
import { Condition } from 'avrs-ui/src/condition'
import { Text, Space } from 'avrs-ui/src/text'
import NavLink from './NavLink'

const Header = ({ firstName, lastName, balance, isNew, history }) => (
  <Column align='center'>
    <Layout basis='25px' />
    <Layout align='center'>
      <Link to={isNew ? '/beginning' : '/'}>
        <Logo height={24} />
      </Link>
    </Layout>
    <Layout basis='35px' />
    <Condition match={isNew}>
      <Layout>
        <NavLink to='/beginning' history={history}>
          Начало работы
        </NavLink>
      </Layout>
    </Condition>
    <Condition match={!isNew}>
      <Layout>
        <NavLink to='/' history={history}>
          Главная
        </NavLink>
      </Layout>
    </Condition>
    <Layout basis='30px' />
    <Layout>
      <NavLink to='/service_plans' history={history}>
        Тарифы
      </NavLink>
    </Layout>
    <Layout basis='30px' />
    <Condition match={!isNew}>
      <Layout>
        <NavLink to='/money' history={history}>
          Деньги
        </NavLink>
      </Layout>
    </Condition>
    <Condition match={!isNew}>
      <Layout basis='30px' />
    </Condition>
    <Condition match={!isNew}>
      <Layout>
        <NavLink to='/network' history={history}>
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
    <Layout basis='15px' />
    <Layout>
      <Item to='/profile'>
        <AccountIcon />
        <Space count={2} />
        {firstName}
        <Space />
        {lastName}
      </Item>
    </Layout>
    <Layout>
      <Item
        plain
        border='left'
        to='/auth/logout'
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
