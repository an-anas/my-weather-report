import { useEffect, useState } from 'react';
import styles from './style.module.css';
import { getWeatherCardBackground, getWeatherDescription } from '@/models/weather-code-description';
import { WeatherData } from '@/models/weather-data';


const Weather = () => {
  const [weatherData, setWeatherData] = useState<WeatherData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'http://localhost:8000/api/weather' // Replace with the actual API URL
        );

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        const dailyTimelines: WeatherData[] = data.timelines.daily;

        setWeatherData(dailyTimelines);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <h1>Weather Forecast</h1>
      <div className={styles.list}>
        {weatherData.map((daily, index) => (
          <div key={index} className={styles.card}
            style={{backgroundImage: `url(${getWeatherCardBackground(daily.values.weatherCodeMax)})` }}>
            <h2>{new Date(daily.time).toDateString()}</h2>
            <p>{daily.values.temperatureMax}°C - {daily.values.temperatureMin}°C</p>
            <p>{getWeatherDescription(daily.values.weatherCodeMax)}</p>
            <p>Precipitation Probability: {daily.values.precipitationProbabilityAvg}%</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Weather;
