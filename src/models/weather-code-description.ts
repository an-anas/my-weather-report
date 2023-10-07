const weatherDescriptions: Record<number,string> = {
    0: "Unknown",
    1000: "Clear, Sunny",
    1100: "Mostly Clear",
    1101: "Partly Cloudy",
    1102: "Mostly Cloudy",
    1001: "Cloudy",
    2000: "Fog",
    2100: "Light Fog",
    4000: "Drizzle",
    4001: "Rain",
    4200: "Light Rain",
    4201: "Heavy Rain",
    5000: "Snow",
    5001: "Flurries",
    5100: "Light Snow",
    5101: "Heavy Snow",
    6000: "Freezing Drizzle",
    6001: "Freezing Rain",
    6200: "Light Freezing Rain",
    6201: "Heavy Freezing Rain",
    7000: "Ice Pellets",
    7101: "Heavy Ice Pellets",
    7102: "Light Ice Pellets",
    8000: "Thunderstorm"
};

const weatherImages: Record<number,string> = {
    0: "unknown.jpg",
    1000: "clear_sunny.jpg",
    1100: "mostly_clear.jpg",
    1101: "partly_cloudy.jpg",
    1102: "mostly_cloudy.jpg",
    1001: "cloudy.jpg",
    2000: "fog.jpg",
    2100: "light_fog.jpg",
    4000: "drizzle.jpg",
    4001: "rain.jpg",
    4200: "light_rain.jpg",
    4201: "heavy_rain.jpg",
    5000: "snow.jpg",
    5001: "flurries.jpg",
    5100: "light_snow.jpg",
    5101: "heavy_snow.jpg",
    6000: "freezing_drizzle.jpg",
    6001: "freezing_rain.jpg",
    6200: "light_freezing_rain.jpg",
    6201: "heavy_freezing_rain.jpg",
    7000: "ice_pellets.jpg",
    7101: "heavy_ice_pellets.jpg",
    7102: "light_ice_pellets.jpg",
    8000: "thunderstorm.jpg"
  };
  

export function getWeatherDescription(code: number): string {
    return weatherDescriptions[code] || '';
}

export const getWeatherCardBackground = (code: number): string => {
    return weatherImages[code] || '';
    };