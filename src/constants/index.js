export const NavLinks = [
  { href: "#", label: "Shop" },
  { href: "#", label: "On Sale" },
  { href: "#", label: "New Arrivals" },
  { href: "#", label: "Brands" },
];

export const sortOptions = [
  { value: "popular", label: "Most Popular" },
  { value: "newest", label: "Newest" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
];

export const sortBy = {
  POPULAR: "popular",
  NEWEST: "newest",
  PRICE_LOW: "price-low",
  PRICE_HIGH: "price-high",
};

export const ACTIONS = {
  SET_PRODUCTS: "SET_PRODUCTS",
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_FROM_CART: "REMOVE_FROM_CART",
  UPDATE_QUANTITY: "UPDATE_QUANTITY",
  SET_SEARCH_QUERY: "SET_SEARCH_QUERY",
};
