import React from 'react';
import { Card, Carousel,Flex } from 'antd';
import Link from 'next/link';


const contentStyle: React.CSSProperties = {
  height: '400px',
  color: '#fff',
  lineHeight: '300px',
  textAlign: 'center',
  background: '#364d79',

};

export default function Mainpage() {
 
  const images = ["/logo1.jpg", "/logo2.jpg", "/logo3.jpg"];
  return (
    <>
      <Carousel effect="fade" autoplay speed={200} >
        <div>
          <h1 style={contentStyle}><h2>Hellow</h2></h1>
        </div>
        <div>
          <h1 style={contentStyle}><h2>How are You ?</h2></h1>
        </div>
        <div>
          <h1 style={contentStyle}><h2>Are you fine?</h2></h1>
        </div>
        <div>
          <h1 style={contentStyle}><h2>Do you need Something?</h2></h1>
        </div>
      </Carousel>
      
      <div style={{ padding: '20px 0' }}>
      <Flex wrap="wrap" justify="center">
        {MainCard.map((card, index) => (
          <div key={index} style={{ margin: '10px' }}>
            {card}
          </div>
        ))}
      </Flex>
    </div>
    </>
  );
}
const MainCard = Array.from({ length: + 9 }, (_, index) => (
  <Card
    key={index}
    hoverable
    style={{ width: 240, margin: 40 }}
    cover={<img alt={`example ${index}`} src="/logo1.jpg" />}
  >
    <p>This is My Idea {index + 1}</p>
  </Card>
  
));

