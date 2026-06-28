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

  const exists = wishlist.includes(id);

  let updated;

  if (exists) {
    updated = wishlist.filter(
      (item) => item !== id
    );
  } else {
    updated = [...wishlist, id];
  }

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(updated)
  );

  return updated;
}