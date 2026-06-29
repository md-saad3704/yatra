const STORAGE_KEY = "yatra_wishlist";

export function getWishlist() {
  const saved = localStorage.getItem(STORAGE_KEY);
  return saved ? JSON.parse(saved) : [];
}

export function isWishlisted(id) {
  return getWishlist().includes(id);
}

export function toggleWishlist(id) {
  const wishlist = getWishlist();

  const updated = wishlist.includes(id)
    ? wishlist.filter((item) => item !== id)
    : [...wishlist, id];

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(updated)
  );

  // Notify the application
  window.dispatchEvent(
    new Event("wishlistUpdated")
  );

  return updated;
}