import { useState } from "react";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import Dropdown from "../components/Dropdown";
import { sortOptions } from "../constants";
import MiniCart from "../components/MiniCart";

const Products = () => {
  const [sortBy, setSortBy] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const [productList, setProductList] = useState([...products]);

  const handleSortChange = (e) => {
    const selected = e.target.value;
    setSortBy(selected);

    let sorted = [...productList];

    switch (selected) {
      case "price-high":
        sorted.sort((a, b) => b.price - a.price);
        break;
      case "price-low":
        sorted.sort((a, b) => a.price - b.price);
        break;
      case "newest":
        sorted.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
        break;
      case "popular":
        sorted.sort((a, b) => b.rating - a.rating);
      default:
        sorted;
    }

    setProductList(sorted);
  };

  const handleProduct = (product) => {
    // Update Product Info
    const { inCart, stock } = product;
    const updatedProduct = {
      ...product,
      inCart: !inCart,
      stock: inCart ? stock + 1 : stock - 1,
    };

    // Update the productList to reflect the change
    const updatedList = productList.map((item) =>
      item.id === product.id ? updatedProduct : item
    );
    const updatedCart = updatedList.filter((item) => item.inCart);

    setProductList(updatedList);
    setCartItems(updatedCart);
  };

  return (
    <main className="container mx-auto px-4 md:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
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
            {productList.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onClick={() => handleProduct(product)}
              />
            ))}
          </div>
        </div>

        <MiniCart cartItems={cartItems} />
      </div>
    </main>
  );
};

export default Products;
