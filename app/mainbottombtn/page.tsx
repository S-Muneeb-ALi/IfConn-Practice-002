
'use client'
import React from 'react';
import { CommentOutlined, CustomerServiceOutlined, QrcodeOutlined } from '@ant-design/icons';
import { FloatButton, Flex, QRCode } from 'antd';


export default function Mainbottombtn() {
  const value = 'https://www.youtube.com/';


  return (

    <>

      <FloatButton.Group
        trigger="hover"
        type="primary"
        style={{ right: 10, width: "8vw" }
        
        }
      >
        <Flex gap="large" wrap>
          <QRCode value={value} style={{ width: "10vw" }} />
        </Flex>
      </FloatButton.Group>
    </>
  );

}