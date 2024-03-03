import { getWeatherDescription, getWeatherIcon } from "@/models/weather-code-description";
import style from './style.module.css';

export const WeatherIcon = (props: { weatherCode: number }) => {
    const weatherIcon = getWeatherIcon(props.weatherCode);
    const weatherDescription = getWeatherDescription(props.weatherCode);
    
    return (
        <div className={style.icon} data-tooltip-text={weatherDescription}>{weatherIcon}</div>
    )
}