export interface WeatherData {
    time: number;
    values: {
        temperatureMax: number;
        temperatureMin: number;
        weatherCodeMax: number;
        precipitationProbabilityAvg: number;
        // Add other properties as needed
    };
}