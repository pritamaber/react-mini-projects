import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import LoadingSpinner from "../components/LoadingSpinner";
import Searchbar from "../components/Searchbar";
import useDebounce from "../hooks/useDebounce";

function Productlist() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const debouncedSearch = useDebounce(searchTerm, 500);

  useEffect(() => {
    async function fetchProducts() {
      const result = await fetch("https://dummyjson.com/products");
      const data = await result.json();
      setProducts(data.products);
      setLoading(false);
    }

    fetchProducts();
  }, []);

  // Trigger search spinner when searchTerm changes
  useEffect(() => {
    if (searchTerm !== "") {
      setIsSearching(true);
    }
  }, [searchTerm]);

  // Stop search spinner when debounce completes
  useEffect(() => {
    setIsSearching(false);
  }, [debouncedSearch]);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(debouncedSearch.toLowerCase())
  );

  return (
    <>
      <h1 className="text-center text-5xl m-8">Context API - Shopping Cart</h1>
      <Searchbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      {/* Initial product loading */}
      {loading ? (
        <LoadingSpinner />
      ) : isSearching ? (
        <LoadingSpinner />
      ) : filteredProducts.length === 0 && debouncedSearch ? (
        <p className="text-center text-gray-500 mt-8 text-xl">
          No products found for "
          <span className="font-semibold">{debouncedSearch}</span>"
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      )}
    </>
  );
}

export default Productlist;
