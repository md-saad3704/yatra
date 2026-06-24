import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home";
import Destinations from "../pages/Destinations";
import DestinationDetail from "../pages/DestinationDetail";
import TripPlanner from "../pages/TripPlanner";
import TripResult from "../pages/TripResult";
import Analytics from "../pages/Analytics";
import MyTrips from "../pages/MyTrips";
import NotFound from "../pages/NotFound";
import SavedTripDetails from "../pages/SavedTripDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "destinations",
        element: <Destinations />,
      },
      {
        path: "destinations/:slug",
        element: <DestinationDetail />,
      },
      {
        path: "plan",
        element: <TripPlanner />,
      },
      {
        path: "trip/result",
        element: <TripResult />,
      },
      {
        path: "analytics",
        element: <Analytics />,
      },
      {
        path: "my-trips",
        element: <MyTrips />,
      },
      {
        path: "saved-trip",
        element: <SavedTripDetails />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);