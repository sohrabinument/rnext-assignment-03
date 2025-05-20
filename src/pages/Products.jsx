import { useContext } from "react";
import Dropdown from "../components/Dropdown";
import MiniCart from "../components/MiniCart";
import ProductCard from "../components/ProductCard";
import { CartContext } from "../context/CartContext";
import { ACTIONS, sortBy, sortOptions } from "../constants";
import { getSortedProducts } from "../utils/helper";

const Products = () => {
  const { state, dispatch } = useContext(CartContext);
  const { products, searchQuery } = state;

  const handleSortChange = (e) => {
    const sortedProducts = getSortedProducts(products, e.target.value);
    dispatch({ type: ACTIONS.SET_PRODUCTS, payload: sortedProducts });
  };

  const toggleCartItem = (product) => {
    dispatch({
      type: product.inCart ? ACTIONS.REMOVE_FROM_CART : ACTIONS.ADD_TO_CART,
      payload: product,
    });
  };

  // Filter products by search query
  const filteredProducts = searchQuery
    ? products.filter((p) =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : products;

  return (
    <main className="container mx-auto px-4 md:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Your Products</h2>
            <Dropdown
              label="Sort by:"
              value={sortBy.DEFAULT}
              options={sortOptions}
              onChange={handleSortChange}
            />
          </div>

          {filteredProducts.length ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onProductClick={() => toggleCartItem(product)}
                />
              ))}
            </div>
          ) : (
            <div className="col-span-full text-center py-8 text-gray-500">
              No products found
            </div>
          )}
        </div>

        <MiniCart />
      </div>
    </main>
  );
};

export default Products;
