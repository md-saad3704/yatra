const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

const BASE_URL =
  "https://api.openweathermap.org/data/2.5/weather";

export async function getWeather(
  latitude,
  longitude
) {
  try {
    const response = await fetch(
      `${BASE_URL}?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`
    );

    if (!response.ok) {
      throw new Error("Unable to fetch weather.");
    }

    const data = await response.json();
    return {
      city: data.name,

      temperature: Math.round(data.main.temp),

      feelsLike: Math.round(data.main.feels_like),

      humidity: data.main.humidity,

      wind: Math.round(data.wind.speed * 3.6),

      pressure: data.main.pressure,

      visibility: Math.round(
        data.visibility / 1000
      ),

      condition: data.weather[0].main,

      description:
        data.weather[0].description,

      icon: data.weather[0].icon,
    };
  } catch (error) {
    console.error(error);
    return null;
  }
}