import React from "react";

function ProductSearchComponent({ searchTerm, setSearchTerm }) {
  return (
    <div className="mb-6 px-4">
      <input
        type="text"
        placeholder="🔍 Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full max-w-md mx-auto block px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-600 transition"
      />
    </div>
  );
}

export default ProductSearchComponent;
