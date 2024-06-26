'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Button, Input, Row, Col, Spin, Select, Radio, Card, Flex, Typography, Dropdown, Menu } from 'antd';
import WeatherResponse from '@/models/responses/WeatherResponse';
import { SettingOutlined, EditOutlined, EllipsisOutlined, SearchOutlined } from '@ant-design/icons';
import WeatherView from './WeatherView';
import styles from './styles.module.css';
import SunIcon from '@/components/icons/SunIcon';
import GaugeChart from 'react-gauge-chart';
interface TemperatureUnit {
  key: string;
  value: string;
  symbol: "C" | "F" | "K";
}

const temperatureUnits: TemperatureUnit[] = [
  {
    key: "standard",
    value: "Kelvin",
    symbol: "K",
  },
  {
    key: "metric",
    value: "Celsius",
    symbol: "C",
  },
  {
    key: "imperial",
    value: "Fahrenheit",
    symbol: "F",
  }
];

const cardStyle: React.CSSProperties = {

};

const Weather = () => {
  const handleUnitChange = (selectedUnit: string) => {
    setUnit(selectedUnit);
    // You may want to fetch weather data again here with the selected unit
    fetchDataAsync();
  };

  const unitMenu = (
    <Menu onClick={(e) => handleUnitChange(e.key)}>
      {temperatureUnits.map(unit => (
        <Menu.Item key={unit.key}>
          {unit.value}
        </Menu.Item>
      ))}
    </Menu>
  );
  const [isLoading, setIsLoading] = useState(false);
  const [city, setCity] = useState('karachi');
  const [unit, setUnit] = useState<string>(temperatureUnits[1].key);
  const [weatherData, setWeatherData] = useState<WeatherResponse | null>(null);
  const [position, setPosition] = useState<'start' | 'end'>('end');

  const fetchDataAsync = async () => {
    try {
      setIsLoading(true);
      const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY}`;
      const response = await axios.get(endpoint);
      setIsLoading(false);

      return response.data;
    } catch (error) {
      console.error(error);
    }
  }


  const loadWeatherDataAsync = async () => {
    const data = await fetchDataAsync();
    setWeatherData(data);
  }

  return (

    <div className={`${styles.weatherPage} weather-page`}>
      <Card hoverable style={{
        maxWidth: 620,
      }} styles={{ body: { padding: 0, overflow: 'hidden' } }} className='main-card'>

        <SunIcon
          color='yellow'
          style={{
            width: "240px",
            position: "absolute",
            top: "-70px",
            left: "-140px",
            animation: "move ",

          }} />

        <Card>
          <Flex gap={8}>
            <Input
              placeholder="Enter city name"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />

            <Button
              type="primary"
              onClick={loadWeatherDataAsync}
              loading={isLoading}
              icon={<SearchOutlined />}
              iconPosition={position}
              style={{ margin: "auto" }}
            />

            <Dropdown overlay={unitMenu}>
              <SettingOutlined />
            </Dropdown>
          </Flex>
        </Card>



          <Card>
        {weatherData && !isLoading && (
          <WeatherView data={weatherData} symbol={temperatureUnits.find(x => x.key === unit)!.symbol} />
        )}
        </Card>
      </Card>

    </div>
  );
};

export default Weather;



