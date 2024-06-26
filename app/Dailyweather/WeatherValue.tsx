import { height } from "@fortawesome/free-regular-svg-icons/faHandshake";
import { Card } from "antd";
import styles from './styles.module.css';


export interface WeatherValueProps {
    content: string;
    image: string;
  }
  export default function WeatherValue({ content, image }: WeatherValueProps) {
    return (
      <Card className={"weather-item"} style={{height:"100%"}} cover>
        <p style={{ fontSize: "20px" }}>{content}</p>
        <img alt="" src={image} style={{
           display: 'block',
           width: "100%",
           color: "black"
        }} />
      </Card>
    )
  }