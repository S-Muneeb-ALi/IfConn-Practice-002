import WeatherResponse from "@/models/responses/WeatherResponse";
import { Card, Col, Row } from "antd";
import WeatherValue  from "./WeatherValue";
import React, { useEffect, useRef } from 'react'
import styles from './styles.module.css';


export interface WeatherViewProps {
    data: WeatherResponse,
    symbol: "C" | "F" | "K"
  }
  
  const WeatherView = ({ data: { name, main, weather, wind, clouds }, symbol }: WeatherViewProps) => {
    const getImageByTemperature = (temp: number) => {
      if (temp < 25) return "temp/sunnycloud.png";
      if (temp < 80) return "temp/sunny.png";
      return "cloud1.png";
    }
    const getImageByHumidity = (humidity: number) => {
        if (humidity < 20) return "humidity1.png";
        if (humidity < 100) return "humidity12.png";
        return "cloud1.png";
      }
  
    return (
      <Card style={{ fontSize: "20px" }} cover>
        <h1>{name}</h1>
        <Row gutter={[20, 20]} >
          <Col md={8} xs={24} sm={12}>
            <WeatherValue
              content={`Temperature: ${main.temp}°${symbol}`}
              image={getImageByTemperature(main.temp)}
            />
          </Col>
  
          <Col md={8} xs={24} sm={12}  >
            <WeatherValue
              content={`Description: ${weather[0].description}`}
              image={""}
            />
          </Col>
  
          <Col md={8} xs={24} sm={12}>
            <WeatherValue
              content={`Feels like : ${main.feels_like}°${symbol}`}
              image={getImageByTemperature(main.temp)}
            />
          </Col>
  
          <Col md={8} xs={24} sm={12}>
            <WeatherValue
              content={`Humidity : ${main.humidity}%`}
              image={getImageByHumidity(main.humidity)}
            />
          </Col>
  
          <Col md={8} xs={24} sm={12}>
            <WeatherValue
              content={`Pressure : ${main.pressure}`} 
              image={getImageByTemperature(main.temp)}
            />
          </Col>
  
          <Col md={8} xs={24} sm={12}>
            <WeatherValue
             content={`Wind Speed : ${wind.speed}m/s`}
              image={getImageByTemperature(main.temp)}
            />
          </Col>
          
        </Row>
      </Card>
    )
  }
  
  export default WeatherView;