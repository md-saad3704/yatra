/* ===========================================================
   File       : MapPopup.jsx
   Folder     : components/maps
   Purpose    : Popup displayed when marker is clicked
   Project    : YĀTRĀ - AI Travel Planner
=========================================================== */

function MapPopup({ destination }) {
  return (
    <div className="w-56">

      <img
        src={destination.image}
        alt={destination.name}
        className="h-28 w-full rounded-lg object-cover"
      />

      <h3 className="mt-3 text-lg font-bold">
        {destination.name}
      </h3>

      <p className="text-sm text-gray-600">
        {destination.location}
      </p>

      <div className="mt-3 flex items-center justify-between">

        <span className="font-semibold text-[#FF6B35]">
          {destination.price}
        </span>

        <span>
          ⭐ {destination.rating}
        </span>

      </div>

    </div>
  );
}

export default MapPopup;