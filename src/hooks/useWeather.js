import { useEffect, useState } from "react";

import { getWeather } from "../services/weatherService";

export default function useWeather(
  latitude,
  longitude
) {
  const [weather, setWeather] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState(null);

  useEffect(() => {
    if (!latitude || !longitude) return;

    async function fetchWeather() {
      try {
        setLoading(true);

        const data = await getWeather(
          latitude,
          longitude
        );

        if (!data) {
          setError(
            "Unable to fetch weather."
          );
          return;
        }

        setWeather(data);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchWeather();
  }, [latitude, longitude]);

  return {
    weather,
    loading,
    error,
  };
}