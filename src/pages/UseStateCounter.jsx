import { useState } from "react";

export default function UseStateCounter() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center gap-4 p-6">
      <h1 className="text-2xl font-semibold">Count: {count}</h1>
      <div className="flex gap-3">
        <button
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Add
        </button>
        <button
          onClick={() => setCount(count - 1)}
          className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
        >
          Subtract
        </button>
        <button
          onClick={() => setCount(0)}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
