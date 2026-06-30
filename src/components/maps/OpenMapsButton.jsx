/* ===========================================================
   File       : OpenMapsButton.jsx
   Folder     : components/maps
=========================================================== */

import {
  ExternalLink,
  Navigation,
} from "lucide-react";

import {
  getGoogleMapsLink,
  getDirectionsLink,
} from "../../services/maps";

function OpenMapsButton({ destination }) {
  return (
    <div className="flex flex-wrap gap-4">

      <a
        href={getGoogleMapsLink(destination)}
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-2 rounded-xl bg-[#FF6B35] px-5 py-3 font-medium text-white transition hover:scale-105"
      >
        <ExternalLink size={18} />
        Open in Google Maps
      </a>

      <a
        href={getDirectionsLink(destination)}
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-2 rounded-xl border border-[#FF6B35] px-5 py-3 font-medium text-[#FF6B35] transition hover:bg-[#FF6B35] hover:text-white"
      >
        <Navigation size={18} />
        Get Directions
      </a>

    </div>
  );
}

export default OpenMapsButton;