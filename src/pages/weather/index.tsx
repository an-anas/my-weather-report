import { useEffect, useState } from 'react';
import { WeatherData } from '@/models/weather-data';
import WeatherService from '@/services/weather-service';
import { Card } from '@/components/card';
import style from './style.module.css';

export const Weather = () => {
  const [weatherData, setWeatherData] = useState<WeatherData[]>([]);

  useEffect(() => {
    WeatherService.fetchData()
      .then(dailyTimelines => setWeatherData(dailyTimelines))
      .catch(error => console.error('Error fetching weather data:', error));
  }, []);

  return (
    <div className={style.container}>
      <h2>Weather Forecast</h2>
      <h3>Barcelona, Spain</h3>
      <div className={style.list}>
        {weatherData.map((daily, index) => (
          <Card index={index} data={daily} />
        ))}
      </div>
    </div>
  );
};