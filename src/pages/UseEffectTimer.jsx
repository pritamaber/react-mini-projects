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
    <div className="flex flex-col items-center gap-4 p-6">
      <h1 className="text-4xl font-bold text-blue-600">{timer}s</h1>
      <div className="flex gap-3">
        <button
          onClick={() => setIsRunning(true)}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          ▶ Start
        </button>
        <button
          onClick={() => setIsRunning(false)}
          className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
        >
          ⏸ Pause
        </button>
        <button
          onClick={() => {
            setTimer(10);
            setIsRunning(false);
          }}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          🔁 Reset
        </button>
      </div>
    </div>
  );
}
