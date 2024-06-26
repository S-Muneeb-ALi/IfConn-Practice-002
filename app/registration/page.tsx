'use client'

import { Form, Input, Typography, Dropdown, message, Space, Tooltip, Button, Select, Row, Col, Flex, notification } from "antd";

const { Title } = Typography;
const add = {
  color: "cyan",
  fontFamily: "Arial"

};

import styles from './styles.module.css';
import SizeContext from "antd/es/config-provider/SizeContext";
import Link from "next/link";


type NotificationType = 'success' | 'info' | 'warning' | 'error';
export default function Registration() {
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
      <p className={styles.title}>Tell us about Your home</p>
      <p className={styles.title2}><b style={{ fontSize: 40, color: 'cyan' }}>Address</b> Your Information is Private </p>

      <Link href={"signin"}>Go to Login Page</Link>

      <Form
        className={styles.form}
        name="registration"
        layout="vertical"
        style={{ maxWidth: 1200 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"

      >

        <Row className={styles.R1}>
          <Col span={24}>
            <Form.Item
              label="Address 1"
              name="Address 1"
              rules={[{ required: true, message: 'Please input your Address 1!' }]}
            >
              <Input />
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item
              label="Address 2"
              name="Address 2"
              rules={[{ required: true, message: 'Please input your Address 2!' }]}
            >
              <Input />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item
              label="City"
              name="City"
              rules={[{ required: true }]}
              style={{ width: "calc(100% - 10px)", marginRight: "10px" }}
            >
              <Input placeholder="Input City" />
            </Form.Item>
          </Col>

          <Col span={6}>
            <Form.Item
              label="State"
              name="year"
              rules={[{ required: true }]}
              style={{ width: "calc(100% - 10px)", marginRight: "10px" }}
            >
              <Input placeholder="Input State" />
            </Form.Item>
          </Col>

          <Col span={6}>
            <Form.Item
              label="Zipcode"
              name="year"

              rules={[{ required: true }]}
            >
              <Input placeholder="Input Zipcode" />
            </Form.Item>
          </Col>
        </Row>
        <Row >
          <Col span={24}>
            <p className={styles.title2}><b style={{ fontSize: 40, color: 'cyan' }}>Bed & Bath</b> Your Information is Private </p>
          </Col>

          <Col span={12} >
            <Form.Item
              label="House Type"
              name="House Type"
              rules={[{ required: true }]}
              style={{ width: "calc(100% - 10px)", marginRight: "10px" }}

            >
              <Select
                defaultValue="House Type"
                onChange={x => { }}
                options={[
                  { value: 'Ground', label: 'Ground' },
                  { value: 'Double Story', label: 'Double Story' },
                  { value: 'Triple Story', label: 'Triple Story' },
                  { value: 'Flat', label: 'Flat' },
                ]}
              />
            </Form.Item>
          </Col>


          <Col span={12}>
            <Form.Item
              label="Room Type"
              name="Room Type"
              rules={[{ required: true }]}
              style={{ width: "calc(100% - 10px)", marginRight: "10px" }}
            >
              <Select
                defaultValue="Room Type"
                onChange={x => { }}
                options={[
                  { value: 'Kitchen', label: 'Kitchen' },
                  { value: 'Dine', label: 'Dine' },
                  { value: 'Sleeping', label: 'Sleeping' },
                  { value: 'Store', label: 'Store', },
                ]}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Bed Rooms"
              name="Bed Rooms"
              rules={[{ required: true }]}
              style={{ width: "calc(100% - 10px)", marginRight: "10px" }}
            >
              <Select
                defaultValue="Bed Rooms"
                onChange={x => { }}
                options={[
                  { value: '1 Bed Rooms', label: '1 Bed Rooms' },
                  { value: '2 Bed Rooms', label: '2 Bed Rooms' },
                  { value: '3 Bed Rooms', label: '3 Bed Rooms' },
                  { value: '4 Bed Rooms', label: '4 Bed Rooms' },
                ]}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Bath Rooms"
              name="Bath Rooms"
              rules={[{ required: true }]}
              style={{ width: "calc(100% - 10px)", marginRight: "10px" }}
            >
              <Select
                defaultValue="Bath Rooms"
                onChange={x => { }}
                options={[
                  { value: '1 Bath Rooms', label: '1 Bath Rooms' },
                  { value: '2 Bath Rooms', label: '2 Bath Rooms' },
                  { value: '3 Bath Rooms', label: '3 Bath Rooms' },
                  { value: '4 Bath Rooms', label: '4 Bath Rooms' },
                ]}
              />
            </Form.Item>
          </Col>


        </Row>
        <Row >

          <Col span={6}>
            <Form.Item
              label="King"
              name="King"
              rules={[{ required: true }]}
              style={{ width: "calc(100% - 10px)", marginRight: "10px" }}
            >
              <Select
                defaultValue="0"
                onChange={x => { }}
                options={[
                  { value: '1', label: '1' },
                  { value: '2', label: '2' },
                  { value: '3', label: '3' },
                  { value: '4', label: '4' },
                ]}
              />
            </Form.Item>
          </Col>


          <Col span={6}>
            <Form.Item
              label="Queen"
              name="Queen"
              rules={[{ required: true }]}
              style={{ width: "calc(100% - 10px)", marginRight: "10px" }}
            >
              <Select
                defaultValue="0"
                onChange={x => { }}
                options={[
                  { value: '1', label: '1' },
                  { value: '2', label: '2' },
                  { value: '3', label: '3' },
                  { value: '4', label: '4' },
                ]}
              />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item
              label="Full"
              name="Full"
              rules={[{ required: true }]}
              style={{ width: "calc(100% - 10px)", marginRight: "10px" }}
            >
              <Select
                defaultValue="0"
                onChange={x => { }}
                options={[
                  { value: '1', label: '1' },
                  { value: '2', label: '2' },
                  { value: '3', label: '3' },
                  { value: '4', label: '4' },
                ]}
              />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item
              label="Twin"
              name="Twin"
              rules={[{ required: true }]}
              style={{ width: "calc(100% - 10px)", marginRight: "10px" }}
            >
              <Select
                defaultValue="0"
                onChange={x => { }}
                options={[
                  { value: '1', label: '1' },
                  { value: '2', label: '2' },
                  { value: '3', label: '3' },
                  { value: '4', label: '4' },
                ]}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row>
        <Flex vertical gap="small"  >
        <>
      {contextHolder}
      <Space  >
        {/* <Button onClick={() => openNotificationWithIcon('success')  } style={{ width:930}} type="primary" danger>Submit</Button> */}
      </Space>

    </>

        </Flex>
        </Row>

        <Button block type="primary" htmlType="submit">Submit</Button>
      </Form>



    </main>
  );
}