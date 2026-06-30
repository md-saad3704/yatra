/* ===========================================================
   File       : maps.js
   Folder     : services
=========================================================== */

export function getCoordinates(destination) {
  return [
    destination.latitude,
    destination.longitude,
  ];
}

export function getGoogleMapsLink(destination) {
  return `https://www.google.com/maps/search/?api=1&query=${destination.latitude},${destination.longitude}`;
}

export function getDirectionsLink(destination) {
  return `https://www.google.com/maps/dir/?api=1&destination=${destination.latitude},${destination.longitude}`;
}