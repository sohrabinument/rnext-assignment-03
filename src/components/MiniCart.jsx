import MiniCartItem from "./MiniCartItem";

const MiniCart = ({ cartItems }) => {
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * 1, 0);
  const discount = subtotal * 0.2;
  const total = subtotal - discount;

  return (
    <div className="lg:col-span-1">
      <div className="bg-white rounded-lg p-6 border border-gray-200">
        <h2 className="text-2xl font-bold mb-6">YOUR CART</h2>

        {cartItems.map((product) => (
          <MiniCartItem key={product.id} product={product} />
        ))}

        {/* Order Summary */}
        <div className="mt-6">
          <h3 className="font-bold text-lg mb-4">Order Summary</h3>

          <div className="space-y-2 mb-4">
            <div className="flex justify-between">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-medium">${subtotal}</span>
            </div>
            <div className="flex justify-between text-red-500">
              <span>Discount (-20%)</span>
              <span>-${discount}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Delivery Fee</span>
              <span className="font-medium">${total && 15}</span>
            </div>
            <div className="flex justify-between font-bold text-lg pt-2 border-t border-gray-200">
              <span>Total</span>
              <span>${total ? total + 15 : 0}</span>
            </div>
          </div>

          {/* Promo Code */}
          <div className="flex items-center space-x-2 mb-6">
            <div className="flex-grow relative">
              <input
                type="text"
                placeholder="Add promo code"
                className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm"
              />
              <span className="absolute left-3 top-2.5">
                <img
                  src="/assets/icons/tag.svg"
                  alt="Tag"
                  className="h-4 w-4 text-gray-400"
                />
              </span>
            </div>
            <button className="bg-black text-white rounded-md px-4 py-2 text-sm">
              Apply
            </button>
          </div>

          {/* Checkout Button */}
          <a
            href="#"
            className="block bg-black text-white text-center py-3 rounded-md hover:bg-gray-800 transition-colors"
          >
            Go to Checkout
            <span className="inline-block ml-2">→</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MiniCart;
