import Ratings from "./Ratings";

const ProductCard = ({ product, onClick }) => {
  return (
    <div className="bg-gray-100 rounded-lg overflow-hidden transition-transform hover:scale-[1.02] duration-300">
      <div className="h-48 bg-gray-200 flex items-center justify-center">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-auto object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="font-medium">{product.name}</h3>
        <div className="flex items-center justify-between">
          <div className="flex items-center my-1">
            <div className="flex">
              <Ratings rating={product.rating} />
            </div>
            <span className="text-xs text-gray-500 ml-1">
              {product.rating}/5
            </span>
          </div>
          <span className="text-xs text-gray-700">
            ({product.stock} pcs left)
          </span>
        </div>
        <div className="flex items-center">
          <p className="font-bold">${product.price}</p>
          {product.originalPrice && (
            <p className="text-gray-400 line-through ml-2">
              ${product.originalPrice}
            </p>
          )}
        </div>
        <button
          onClick={onClick}
          className={`w-full mt-2 py-1 text-gray-100 rounded flex items-center justify-center active:translate-y-1 transition-all ${
            product.inCart
              ? "bg-red-800"
              : "bg-gray-800 hover:bg-gray-900 disabled:bg-gray-700 disabled:text-gray-400 disabled:cursor-not-allowed"
          }`}
          disabled={product.stock === 0}
        >
          {product.inCart ? "Remove from Cart" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
