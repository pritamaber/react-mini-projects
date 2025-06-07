import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import SearchComponent from "../components/SearchComponent";

function CardMiniProject() {
  const [productCardData, setProductCardData] = useState([]);
  const [searchProducts, setSearchProducts] = useState("");

  // Filter products by title (case-insensitive)
  const filteredProducts = productCardData.filter((product) =>
    product.title.toLowerCase().includes(searchProducts.toLowerCase())
  );

  // Fetch products on mount
  useEffect(() => {
    async function fetchProductData() {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProductCardData(data);
    }

    fetchProductData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <h1 className="text-2xl sm:text-3xl text-center font-bold py-4">
        🛒 Product Listings
      </h1>

      <SearchComponent
        searchProducts={searchProducts}
        setSearchProducts={setSearchProducts}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 max-w-screen-lg mx-auto px-4 pb-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="h-full">
              <ProductCard
                title={product.title}
                price={product.price}
                image={product.image}
                description={product.description}
                category={product.category}
                rating={product.rating?.rate}
              />
            </div>
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500">
            No products found.
          </div>
        )}
      </div>
    </div>
  );
}

export default CardMiniProject;
