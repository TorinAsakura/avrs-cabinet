import React from 'react'
import { ColumnLayout, RowLayout, Layout } from 'flex-layouts'
import { Navigation, Item } from '../../../ui/navigation'
import { LogoWithText } from '../../../ui/logo'
import { Photo } from '../../../ui/photo'
import { Text, Space } from '../../../ui/text'
import { TriangleIcon } from '../../../ui/icons'

const Header = () => (
  <Navigation>
    <RowLayout>
      <Layout basis='10px' />
      <Layout>
        <ColumnLayout>
          <Layout basis='30px' />
          <Layout>
            <Item to='/'>
              <LogoWithText height={18} />
            </Item>
          </Layout>
          <Layout grow={1} />
          <Layout>
            <Item to='/'>
              <Text size='small'>
                Home
              </Text>
            </Item>
          </Layout>
          <Layout>
            <Item to='/'>
              <Text size='small'>
                Money
              </Text>
            </Item>
          </Layout>
          <Layout>
            <Item to='/'>
              <Text size='small'>
                Products
              </Text>
            </Item>
          </Layout>
          <Layout>
            <Item to='/'>
              <Text size='small'>
                Net
              </Text>
            </Item>
          </Layout>
          <Layout grow={1} />
          <Layout>
            <Item to='/profile'>
              <Photo src='https://randomuser.me/api/portraits/men/15.jpg' />
              <Space />
              <Space />
              <Space />
              <Text size='small'>
                Sergej Feifer
              </Text>
              <Space />
              <TriangleIcon down />
            </Item>
          </Layout>
          <Layout basis='30px' />
        </ColumnLayout>
      </Layout>
      <Layout basis='10px' />
    </RowLayout>
  </Navigation>
)

export default Header
