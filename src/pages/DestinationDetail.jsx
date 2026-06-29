/* ===========================================================
   File       : DestinationDetail.jsx
   Folder     : pages
   Purpose    : Destination Details Page
   Author     : Muhammad Saad Kamal
   Project    : YĀTRĀ - AI Travel Planner
=========================================================== */

import { useParams, Navigate } from "react-router-dom";

import { featuredDestinations } from "../data/featuredDestinations";

import DestinationHero from "../components/destinations/DestinationHero";
import DestinationOverview from "../components/destinations/DestinationOverview";
import WeatherCard from "../components/destinations/WeatherCard";
import AttractionsSection from "../components/destinations/AttractionsSection";
import FoodSection from "../components/destinations/FoodSection";
import TravelTips from "../components/destinations/TravelTips";
import PackingList from "../components/destinations/PackingList";
import PlanTripCTA from "../components/destinations/PlanTripCTA";

import useWeather from "../hooks/useWeather";

function DestinationDetail() {
  const { slug } = useParams();

  const destination = featuredDestinations.find(
    (item) => item.slug === slug
  );

  if (!destination) {
    return <Navigate to="/destinations" replace />;
  }

  const {
    weather,
    loading,
    error,
  } = useWeather(
    destination.latitude,
    destination.longitude
  );

  return (
    <main className="bg-[#FAFAF8]">
      <DestinationHero destination={destination} />

      <DestinationOverview destination={destination} />

      <WeatherCard
        liveWeather={weather}
        fallbackWeather={destination.weather}
        loading={loading}
        error={error}
      />

      <AttractionsSection
        attractions={destination.attractions}
      />

      <FoodSection
        foods={destination.famousFood}
      />

      <TravelTips
        tips={destination.travelTips}
      />

      <PackingList
        destination={destination}
      />

      <PlanTripCTA
        destination={destination}
      />
    </main>
  );
}

export default DestinationDetail;