import { useEffect, useState } from "react";

export default function useGeoLocation() {
  const [position, setPosition] = useState(null);
  useEffect(() => {
    const watchId = navigator.geolocation.watchPosition(
      (pos) => {
        const { latitude, longitude, accuracy } = pos.coords;
        console.log("Accuracy in meters:", accuracy);

        setPosition({ latitude, longitude, accuracy });
      },
      (err) => {
        console.error("Geolocation error:", err);
      },
      {
        enableHighAccuracy: true, // 👈 improves precision if available
        timeout: 10000,
        maximumAge: 0,
      }
    );

    // Cleanup on unmount
    return () => navigator.geolocation.clearWatch(watchId);
  }, []);

  return { position };
}
