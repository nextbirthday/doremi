'use client'
import { MailOutlined } from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Menu } from 'antd'
import React from 'react'
type MenuItem = Required<MenuProps>['items'][number]
function getItem(label: React.ReactNode, key: React.Key, icon?: React.ReactNode, children?: MenuItem[], type?: 'group'): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem
}
const items: MenuProps['items'] = [
  { type: 'divider' },

  getItem(
    '남성의류',
    'men_group',
    null,
    [
      getItem('ALL', 'all'),
      getItem('NEW', 'new'),
      getItem('EXCLUSIVE', 'exclusive'),
      getItem('아우터', 'outer'),
      getItem('상의', 'top'),
      getItem('하의', 'pants'),
      getItem('셋업', 'setup'),
      getItem('이너웨어', 'inner'),
    ],
    'group'
  ),

  { type: 'divider' },
  getItem('ALL', 'sub1', <MailOutlined />, [
    getItem('Item 1', 'g1', null, [getItem('Option 1', '1'), getItem('Option 2', '2')], 'group'),
    getItem('Item 2', 'g2', null, [getItem('Option 3', '3'), getItem('Option 4', '4')], 'group'),
  ]),
]

const ProductMenu = () => {
  //const router = useRouter()

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e)
    console.log('e.key ', e.key)

    if (e.key === 'all') {
      //router.push('/product/111')
    }
  }

  return <Menu onClick={onClick} style={{ width: '256px' }} defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} mode="inline" items={items}></Menu>
}

export default ProductMenu
