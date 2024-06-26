'use client'
import Link from 'next/link';

import React from 'react';

import { Button, Card, Col , Form, Input, Row, Space, notification } from 'antd';

import styles from './styles.module.css';


type NotificationType = 'success' | 'info' | 'warning' | 'error';


export default function signin() {

  function onFinish(values: any): void {
    openNotificationWithIcon("success")
  }
  const [api, contextHolder] = notification.useNotification();

  const openNotificationWithIcon = (type: NotificationType) => {
    api[type]({
      message: 'Notification Title',
      description:
        'Submit ',
    });
  };
  return (
    <main className={styles.main}>
      <Link href={"signin"}>Go to Registration Page</Link>
      <Card
        hoverable

      >
        <img />
        <Row className={styles.R1}>

          <Form
            name="basic"
            labelCol={{ span: 8 }}
            layout="vertical"
            className={styles.From}
            onFinish={onFinish}
            initialValues={{ remember: true }}



            autoComplete="off"
          >
            <Col className={styles.col1} span={24}>
              <Form.Item
                label="Email"
                name="Pass"
                rules={[{ required: true, message: 'Please input your username!' }]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                label="Password"
                name="Password"
                rules={[{ required: true, message: 'Please input your username!' }]}
              >
                <Input />
              </Form.Item>
            </Col>
            <>
      {contextHolder}
      <Space  >
      
      </Space>
    </>
    <Button block type="primary" htmlType="submit">Submit</Button>
          </Form>


        </Row>
      </Card>
    </main>
  );
}