
import React from 'react';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image';
import { Card, Col, Row } from 'antd';
import styles from './styles.module.css';
import {
  SolutionOutlined
} from '@ant-design/icons';
import { faUser, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faHandshake } from '@fortawesome/free-regular-svg-icons/faHandshake';
import { faLocation } from '@fortawesome/free-solid-svg-icons/faLocation';
import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone';








export default function About() {
  return (

    <><div style={{
      backgroundImage: "url('about1.jpg')",
      minHeight: "100dvh",
      minWidth: "40dvw",
      backgroundSize: "cover",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}>
      <Row style={{
        marginTop: "200px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center", 
      }}
        gutter={20}>
        <Col span={6} style={{marginTop: 30}} >

          <FontAwesomeIcon icon={faUser} style={{ width: 100, marginTop: 50,color:'white' }} />
          <Card hoverable bordered={false} style={{ minHeight: "400px" }}>

            <h1>  Solutions</h1>
            <p> Through a meticulous process of analysis and collaboration, we craft bespoke strategies designed to address challenges
              head-on and unlock new opportunities for growth. Leveraging cutting-edge technology and a deep understanding of industry trends,
              our solution seamlessly integrates into existing workflows.
            </p>

          </Card>
        </Col>
        <Col span={6} style={{marginTop: 30}} >
          <FontAwesomeIcon icon={faLocationDot} style={{ width: 100, marginTop: 30,color:'white'  }} />
          <Card hoverable bordered={false} style={{ minHeight: "400px" }}>
            <h1 style={{ marginTop: 10 }}>Location</h1>
            <p style={{ marginTop: 30 }}>Address</p>
            <a href="https://maps.app.goo.gl/wJfEd7A4dm5CEMi78" style={{ marginTop: 10 }}>Plot CM54, V5M9+J9R, Shamsi Society Shah Faisal Colony, Karachi, Karachi City, Sindh 75210</a>
          </Card>
        </Col>
        <Col span={6} style={{marginTop: 30}}>
          <FontAwesomeIcon icon={faPhone} style={{ width: 130, marginTop: 30 , color:'white' }} />
          <Card hoverable title="Contacts" bordered={false} style={{ minHeight: "400px" }}>

            <a href="http://ifcondition.com/" style={{ marginTop: 0 }}>Our Webiste</a>
            <h4 style={{ marginTop: 10 }}>03111766766</h4>
            <p style={{ marginTop: 10 }}>info@ifcondition.com </p>

          </Card>
        </Col>
      </Row>

    </div><>



      </></>

  );
}