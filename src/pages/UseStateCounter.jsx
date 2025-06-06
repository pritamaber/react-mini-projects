import { useState } from "react";

export default function UseStateCounter() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center px-4">
      <div className="w-full max-w-sm bg-white dark:bg-gray-800 shadow-xl rounded-xl p-6 text-center">
        <h1 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-6">
          🔢 Count: {count}
        </h1>
        <div className="flex justify-center gap-4">
          <button
            onClick={() => setCount(count + 1)}
            className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition"
          >
            ➕ Add
          </button>
          <button
            onClick={() => setCount(count - 1)}
            className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-lg transition"
          >
            ➖ Subtract
          </button>
          <button
            onClick={() => setCount(0)}
            className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg transition"
          >
            🔁 Reset
          </button>
        </div>
      </div>
    </div>
  );
}
