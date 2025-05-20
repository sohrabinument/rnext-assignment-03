import { useContext } from "react";
import { CartContext } from "../context/CartContext.jsx";
import { ACTIONS } from "../constants";

const MiniCartItem = ({ product }) => {
  const { dispatch } = useContext(CartContext);
  const { id, image, name, price, quantity, stock } = product;

  const handleQuantityChange = (change) => {
    dispatch({ type: ACTIONS.UPDATE_QUANTITY, payload: { id, change } });
  };

  const handleRemove = () => {
    dispatch({ type: ACTIONS.REMOVE_FROM_CART, payload: product });
  };

  return (
    <div className="flex items-start space-x-4 pb-4 border-b border-gray-200 mb-4">
      <div className="w-16 h-16 bg-gray-100 rounded flex-shrink-0 flex items-center justify-center">
        <img src={image} alt={name} className="h-full w-auto object-cover" />
      </div>
      <div className="flex-grow">
        <div className="flex justify-between">
          <h3 className="font-medium">{name}</h3>
          <span
            className="text-red-500 text-sm cursor-pointer"
            onClick={handleRemove}
          >
            ×
          </span>
        </div>
        <p className="text-sm text-gray-500">Size: Medium</p>
        <p className="text-sm text-gray-500">Color: Black</p>
        <div className="flex justify-between items-center mt-2">
          <p className="font-bold">${price}</p>
          <div className="flex items-center space-x-2">
            <button
              className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center"
              onClick={() => handleQuantityChange(-1)}
              disabled={quantity <= 1}
            >
              −
            </button>
            <span className="text-sm">{quantity}</span>
            <button
              className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center"
              onClick={() => handleQuantityChange(1)}
              disabled={quantity === stock}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiniCartItem;
