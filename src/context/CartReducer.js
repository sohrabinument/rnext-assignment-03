import { ACTIONS } from "../constants";
import {
  addProductToCart,
  updateProductStock,
  removeProductFromCart,
  updateCartItemsQuantity,
} from "../utils/helper";

const cartReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };

    case ACTIONS.ADD_TO_CART: {
      const product = action.payload;
      return {
        ...state,
        products: addProductToCart(state.products, product),
        cartItems: [...state.cartItems, { ...product, quantity: 1 }],
      };
    }

    case ACTIONS.REMOVE_FROM_CART: {
      const { id } = action.payload;
      const { cartItems, products } = state;

      const cartItem = cartItems.find((item) => item.id === action.payload.id);
      const quantity = cartItem ? cartItem.quantity : 1;

      return {
        ...state,
        products: removeProductFromCart(products, id, quantity),
        cartItems: cartItems.filter((item) => item.id !== id),
      };
    }

    case ACTIONS.UPDATE_QUANTITY: {
      const { id, change } = action.payload;
      return {
        ...state,
        products: updateProductStock(state.products, id, change),
        cartItems: updateCartItemsQuantity(state.cartItems, id, change),
      };
    }

    case ACTIONS.SET_SEARCH_QUERY:
      return {
        ...state,
        searchQuery: action.payload,
      };

    default:
      return state;
  }
};

export default cartReducer;
