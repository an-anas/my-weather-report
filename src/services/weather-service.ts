const WeatherService = {
    fetchData: async () => {
        try {
            const apiUrl = import.meta.env.VITE_WEATHER_API_URL;
            const queryParams = new URLSearchParams({
                location: '41.38222,+2.17701',
                timesteps: 'daily',
                units: 'metric'
            });
            const baseUrl = `${apiUrl}/v4/weather/forecast`;
            const url = `${baseUrl}?${queryParams.toString()}`;

            const options = 
            {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Host': import.meta.env.VITE_WEATHER_X_RAPIDAPI_HOST,
                    'X-RapidAPI-Key': import.meta.env.VITE_WEATHER_X_RAPIDAPI_KEY
                }
            };

            const response = await fetch(url, options);

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            const dailyTimelines = data.timelines.daily;

            return dailyTimelines;
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    }
};

export default WeatherService;