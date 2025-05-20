import Ratings from "./Ratings";

const ProductCard = ({ product, onProductClick }) => {
  const { name, image, rating, price, originalPrice, stock, inCart } = product;

  const isOutOfStock = stock === 0 && !inCart;
  const buttonLabel = inCart ? "Remove from Cart" : "Add to Cart";
  const buttonStyle = inCart
    ? "bg-red-800"
    : "bg-gray-800 hover:bg-gray-900 disabled:bg-gray-700 disabled:text-gray-400 disabled:cursor-not-allowed";

  return (
    <div className="bg-gray-100 rounded-lg overflow-hidden transition-transform hover:scale-[1.02] duration-300">
      <div className="h-48 bg-gray-200 flex items-center justify-center">
        <img src={image} alt={name} className="h-full w-auto object-cover" />
      </div>

      <div className="p-4 space-y-2">
        <h3 className="font-medium text-sm">{name}</h3>

        <div className="flex items-center justify-between text-xs text-gray-700">
          <div className="flex items-center gap-1">
            <Ratings rating={rating} />
            <span className="text-gray-500">{rating}/5</span>
          </div>
          <span className="text-gray-500">({stock} pcs left)</span>
        </div>

        <div className="flex items-center text-sm font-bold">
          <span>${price}</span>
          {originalPrice && (
            <span className="text-gray-400 line-through ml-2 font-normal">
              ${originalPrice}
            </span>
          )}
        </div>

        <button
          className={`w-full mt-2 py-1 text-white rounded flex items-center justify-center active:translate-y-1 transition-all ${buttonStyle}`}
          onClick={onProductClick}
          disabled={isOutOfStock}
        >
          {buttonLabel}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
