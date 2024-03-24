import { WeatherData } from "@/models/weather-data";
import { useQuery } from "@tanstack/react-query";

const useWeatherService = (location: string, timesteps: string, units: string) => {
    const apiUrl = import.meta.env.VITE_WEATHER_API_URL;
    const queryParams = new URLSearchParams({
        location: location || '41.38222,+2.17701',
        timesteps: timesteps || 'daily',
        units: units || 'metric'
    });
    const baseUrl = `${apiUrl}/v4/weather/forecast`;
    const url = `${baseUrl}?${queryParams.toString()}`;

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': import.meta.env.VITE_WEATHER_X_RAPIDAPI_HOST,
            'X-RapidAPI-Key': import.meta.env.VITE_WEATHER_X_RAPIDAPI_KEY
        }
    };

    const { isPending, error, data } = useQuery({
        queryKey: [`weatherData_${location}_${timesteps}_${units}`],
        queryFn: () =>
            fetch(url, options).then((res) =>
                res.json()
                    .then((data) => {
                        return data.timelines.daily as WeatherData[];
                    }),
            ),
            staleTime: 60 * 60 * 1000,
            gcTime: Infinity,
            refetchOnMount: false,
            refetchOnWindowFocus: false,
    })

    return { isPending, error, data };
};

export default useWeatherService;
