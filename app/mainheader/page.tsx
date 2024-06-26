'use client'

import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import { Button, Layout,notification  } from "antd";

import Image from "next/image";
import styles from './styles.module.css';
import { useState } from "react";
import Sider from 'antd/es/layout/Sider';


const { Header } = Layout;


export default function MainHeader() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <main>
      <Header  style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0, top: 0, bottom: 0 }}
      trigger={null} collapsible collapsed={collapsed}> }} >
       
          
        
      
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
      </Header>
      
      
    </main>


  )
}