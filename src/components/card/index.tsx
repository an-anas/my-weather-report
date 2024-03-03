import { getWeatherCardBackground, getWeatherDescription } from "@/models/weather-code-description";
import { WeatherData } from "@/models/weather-data";
import style from './style.module.css';

export const Card = (props: { index: number, data: WeatherData }) => {
    const cardStyle = { backgroundImage: `url(${getWeatherCardBackground(props.data.values.weatherCodeMax)})` };
    const title = new Date(props.data.time).toLocaleDateString('en-US', { weekday: 'short' });
    const values = props.data.values;
    const rainStyle = { opacity: Math.max(values.precipitationProbabilityAvg / 100, 0.5) };
    const windStyle = { opacity: Math.max(values.windSpeedAvg / 10, 0.5) };

    return (
        <div key={props.index} className={style.card} style={cardStyle}>
            <div className={style.internal}>
                <div className={style.title}>{title}</div><div>☀</div>
                <div className={style.maxTemp}>{values.temperatureMax.toFixed(0)}°d</div>
                <div className={style.minTemp}>{values.temperatureMin.toFixed(0)}°</div>
                <div>{getWeatherDescription(values.weatherCodeMax)}</div>
                <div className={style.rainInfo} style={rainStyle}>💧{values.precipitationProbabilityAvg}%</div>
                <div className={style.windInfo} style={windStyle}>💨{Math.round(values.windSpeedAvg * 3.6)}<small>km/h</small></div>
            </div>
        </div>
    )
}