import { createContext, useReducer } from "react";
import { products } from "../data/products";
import cartReducer from "./CartReducer";

// Initial state
const initialState = {
  products: products,
  cartItems: [],
  searchQuery: "",
};

// Create context
export const CartContext = createContext();

// Context provider component
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

