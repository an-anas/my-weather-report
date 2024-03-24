import { Card } from '@/components/card';
import style from './style.module.css';
import useWeatherService from '@/services/weather-service';
import { CitySearch } from '@/features/city-search';
import { useState } from 'react';

export const Weather = () => {
  const [city, setCity] = useState({ name: 'Barcelona', country: 'Spain', latitude: 41.38222, longitude: 2.17701 });
  const { isPending, error, data } = useWeatherService(`${city.latitude},${city.longitude}`, 'daily', 'metric');

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className={style.container}>
      <div className={style.title}>Weather Forecast</div>
      <div className={style.subtitle}>
        {city.name}, {city.country}
        <CitySearch setCity={setCity} />
      </div>
      <div className={style.list}>
        {data?.map((daily, index) => (
          <Card key={index} index={index} data={daily} />
        ))}
      </div>
      {isPending && <div>Loading...</div>}
    </div>
  );
};