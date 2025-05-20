import { sortBy } from "../constants";

export const addProductToCart = (products, productToAdd) => {
  return products.map((product) =>
    product.id === productToAdd.id
      ? { ...product, inCart: true, stock: product.stock - 1 }
      : product
  );
};

export const removeProductFromCart = (products, id, quantity) => {
  return products.map((product) =>
    product.id === id
      ? { ...product, inCart: false, stock: product.stock + quantity }
      : product
  );
};

export const updateCartItemsQuantity = (cartItems, id, change) => {
  return cartItems.map((item) =>
    item.id === id ? { ...item, quantity: item.quantity + change } : item
  );
};

export const updateProductStock = (products, id, change) => {
  return products.map((product) =>
    product.id === id ? { ...product, stock: product.stock - change } : product
  );
};

export const getSortedProducts = (products, criteria) => {
  const sorted = [...products];
  switch (criteria) {
    case sortBy.PRICE_HIGH:
      return sorted.sort((a, b) => b.price - a.price);
    case sortBy.PRICE_LOW:
      return sorted.sort((a, b) => a.price - b.price);
    case sortBy.NEWEST:
      return sorted.sort(
        (a, b) => new Date(b.createdDate) - new Date(a.createdDate)
      );
    case sortBy.POPULAR:
      return sorted.sort((a, b) => b.rating - a.rating);
    default:
      return products;
  }
};
