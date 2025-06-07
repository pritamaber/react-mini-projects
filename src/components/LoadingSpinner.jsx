import React from "react";

function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center mt-6">
      <div className="w-6 h-6 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      <span className="ml-3 text-blue-600 font-medium">Loading...</span>
    </div>
  );
}

export default LoadingSpinner;
