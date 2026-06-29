import {
  CloudSun,
  Droplets,
  Wind,
  Thermometer,
  Eye,
  Gauge,
} from "lucide-react";

function WeatherCard({
  liveWeather,
  fallbackWeather,
  loading,
  error,
}) {
  if (loading) {
    return (
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="rounded-3xl bg-gradient-to-r from-sky-500 to-cyan-500 p-10 text-white shadow-xl">
          <h2 className="text-3xl font-bold">
            Loading live weather...
          </h2>
        </div>
      </section>
    );
  }

  const weather =
    liveWeather && !error
      ? {
          temperature: `${liveWeather.temperature}°C`,
          condition: liveWeather.condition,
          humidity: `${liveWeather.humidity}%`,
          wind: `${liveWeather.wind} km/h`,
          feelsLike: `${liveWeather.feelsLike}°C`,
          visibility: `${liveWeather.visibility} km`,
          pressure: `${liveWeather.pressure} hPa`,
          icon: liveWeather.icon,
        }
      : {
          ...fallbackWeather,
          feelsLike: "--",
          visibility: "--",
          pressure: "--",
          icon: null,
        };

  const cards = [
    {
      icon: Thermometer,
      label: "Temperature",
      value: weather.temperature,
    },
    {
      icon: CloudSun,
      label: "Condition",
      value: weather.condition,
    },
    {
      icon: Droplets,
      label: "Humidity",
      value: weather.humidity,
    },
    {
      icon: Wind,
      label: "Wind",
      value: weather.wind,
    },
    {
      icon: Thermometer,
      label: "Feels Like",
      value: weather.feelsLike,
    },
    {
      icon: Eye,
      label: "Visibility",
      value: weather.visibility,
    },
    {
      icon: Gauge,
      label: "Pressure",
      value: weather.pressure,
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 pb-20">

      <div className="rounded-3xl bg-gradient-to-r from-sky-500 via-cyan-500 to-blue-600 p-10 text-white shadow-2xl">

        <div className="mb-10 flex items-center justify-between">

          <div>

            <h2 className="flex items-center gap-3 text-3xl font-bold">

              <CloudSun size={34} />

              Current Weather

            </h2>

            <p className="mt-2 text-white/80">
              Live weather information
            </p>

          </div>

          <div className="flex items-center gap-4">

            {weather.icon && (
              <img
                src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
                alt={weather.condition}
                className="h-16 w-16"
              />
            )}

            {!error && liveWeather && (
              <span className="rounded-full bg-green-500 px-4 py-2 text-sm font-medium">
                LIVE
              </span>
            )}

          </div>

        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          {cards.map((item) => {

            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="rounded-2xl bg-white/15 p-6 backdrop-blur-md transition hover:bg-white/20"
              >

                <Icon size={28} />

                <p className="mt-4 text-sm text-white/80">
                  {item.label}
                </p>

                <h3 className="mt-2 text-2xl font-bold">
                  {item.value}
                </h3>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}

export default WeatherCard;