import { useState } from "react";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import CartItem from "../components/CartItem";
import Dropdown from "../components/Dropdown";
import { sortOptions } from "../constants";

const Products = () => {
  const [sortBy, setSortBy] = useState("popular");

  const cartItems = products.filter((product) => product.inCart);
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * 1, 0);
  const discount = subtotal * 0.2;
  const deliveryFee = 15;
  const total = subtotal - discount + deliveryFee;

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  return (
    <main className="container mx-auto px-4 md:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Products Section */}
        <div className="lg:col-span-2">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Your Products</h2>
            <Dropdown
              label="Sort by:"
              options={sortOptions}
              value={sortBy}
              onChange={handleSortChange}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        {/* Cart Section */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h2 className="text-2xl font-bold mb-6">YOUR CART</h2>

            {cartItems.map((product) => (
              <CartItem key={product.id} product={product} />
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
                  <span className="font-medium">${deliveryFee}</span>
                </div>
                <div className="flex justify-between font-bold text-lg pt-2 border-t border-gray-200">
                  <span>Total</span>
                  <span>${total}</span>
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
      </div>
    </main>
  );
};

export default Products;
