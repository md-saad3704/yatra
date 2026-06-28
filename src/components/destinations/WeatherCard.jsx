import {
  CloudSun,
  Droplets,
  Wind,
  Thermometer,
} from "lucide-react";

function WeatherCard({ weather }) {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-20">

      <div className="rounded-3xl bg-gradient-to-r from-sky-500 to-cyan-500 p-8 text-white shadow-xl">

        <div className="mb-8 flex items-center gap-3">
          <CloudSun size={32} />
          <h2 className="text-3xl font-bold">
            Current Weather
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-4">

          <div className="rounded-2xl bg-white/15 p-6 backdrop-blur-md">
            <Thermometer size={26} />
            <p className="mt-4 text-sm">
              Temperature
            </p>
            <h3 className="text-3xl font-bold">
              {weather.temperature}
            </h3>
          </div>

          <div className="rounded-2xl bg-white/15 p-6 backdrop-blur-md">
            <CloudSun size={26} />
            <p className="mt-4 text-sm">
              Condition
            </p>
            <h3 className="text-xl font-semibold">
              {weather.condition}
            </h3>
          </div>

          <div className="rounded-2xl bg-white/15 p-6 backdrop-blur-md">
            <Droplets size={26} />
            <p className="mt-4 text-sm">
              Humidity
            </p>
            <h3 className="text-xl font-semibold">
              {weather.humidity}
            </h3>
          </div>

          <div className="rounded-2xl bg-white/15 p-6 backdrop-blur-md">
            <Wind size={26} />
            <p className="mt-4 text-sm">
              Wind
            </p>
            <h3 className="text-xl font-semibold">
              {weather.wind}
            </h3>
          </div>

        </div>

      </div>

    </section>
  );
}

export default WeatherCard;