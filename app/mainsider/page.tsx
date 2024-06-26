'use client'

import React, { useState } from "react";
import { useRouter } from 'next/navigation'

import { Button, Layout, Menu, MenuProps } from 'antd';
import {
  AppstoreOutlined,
  CloudOutlined,
  UserOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserAddOutlined,
  FileDoneOutlined,

} from '@ant-design/icons';

const { Sider } = Layout;



export default function MainSider() {
  const router = useRouter();
  const [collapsed, setCollapsed] = useState(false);

  const items: MenuProps['items'] = [
    {
      key: "dashboard",
      icon: <AppstoreOutlined />,
      label: "Dashboard",
    },
    {
      key: "about",
      icon: <FileDoneOutlined />,
      label: "About",
    },
    {
      key: "registration",
      icon: <UserAddOutlined />,
      label: "registration",
    },
    {
      key: "signin",
      icon: <UserOutlined />,
      label: "Sign-IN",
    },
    {
      key: "Dailyweather",
      icon: <CloudOutlined />,
      label: "Weather",
    },

  ];

  return (
    <Sider
      style={{ overflow: 'auto', height: '100vh' }}
      trigger={null} collapsible collapsed={collapsed}>

      <div className="demo-logo-vertical" />
      <Button
        type="text"
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={() => setCollapsed(!collapsed)}
        style={{
          fontSize: '16px',
          width: 64,
          height: 64,
          backgroundColor: "cyan",
        }}
      />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['4']}
        items={items}
        onSelect={x => {
          router.push(x.key)
        }}
      />
    </Sider>

  )
}