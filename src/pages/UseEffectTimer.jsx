import { useEffect, useState } from "react";

export default function UseEffectTimer() {
  const [timer, setTimer] = useState(10);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev === 1) {
          setIsRunning(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center px-4">
      <div className="w-full max-w-md p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg text-center">
        <h1 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-6">
          ⏳ Timer: {timer}s
        </h1>
        <div className="flex justify-center gap-4">
          <button
            onClick={() => setIsRunning(true)}
            className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg transition"
          >
            ▶ Start
          </button>
          <button
            onClick={() => setIsRunning(false)}
            className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white font-medium rounded-lg transition"
          >
            ⏸ Pause
          </button>
          <button
            onClick={() => {
              setTimer(10);
              setIsRunning(false);
            }}
            className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-medium rounded-lg transition"
          >
            🔁 Reset
          </button>
        </div>
      </div>
    </div>
  );
}
