/* ===========================================================
   File       : DestinationMap.jsx
   Folder     : components/maps
   Purpose    : Interactive destination map
   Author     : Muhammad Saad Kamal
   Project    : YĀTRĀ - AI Travel Planner
=========================================================== */

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";

import L from "leaflet";

import MapPopup from "./MapPopup";
import OpenMapsButton from "./OpenMapsButton";

import { getCoordinates } from "../../services/maps";

/* ===========================================================
   Fix Leaflet Default Marker
=========================================================== */

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",

  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",

  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

/* ===========================================================
   Component
=========================================================== */

function DestinationMap({ destination }) {
  const coordinates =
    getCoordinates(destination);

  return (
    <section className="mx-auto max-w-7xl px-6 pb-20">

      <div className="overflow-hidden rounded-3xl bg-white shadow-xl">

        {/* =======================================================
            Header
        ======================================================= */}

        <div className="border-b p-8">

          <h2 className="text-3xl font-bold">
            📍 Destination Map
          </h2>

          <p className="mt-2 text-gray-600">
            Explore the exact location of{" "}
            <span className="font-semibold">
              {destination.name}
            </span>
          </p>

        </div>

        {/* =======================================================
            Interactive Map
        ======================================================= */}

        <MapContainer
          center={coordinates}
          zoom={12}
          scrollWheelZoom={true}
          className="h-[500px] w-full"
        >

          <TileLayer
            attribution='&copy; OpenStreetMap contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <Marker position={coordinates}>

            <Popup>

              <MapPopup
                destination={destination}
              />

            </Popup>

          </Marker>

        </MapContainer>

        {/* =======================================================
            Actions
        ======================================================= */}

        <div className="p-8">

          <OpenMapsButton
            destination={destination}
          />

        </div>

      </div>

    </section>
  );
}

export default DestinationMap;