import { MapContainer, TileLayer, Marker } from "react-leaflet";
import useGeoLocation from "../hooks/useGeoLocation";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// custom loading spinner
import LoadingSpinner from "../components/LoadingSpinner";

// Fix marker icon issue for React-Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

function MapProject() {
  const { position } = useGeoLocation();

  return (
    <div className="min-h-screen w-full dark:bg-gray-800 text-white pt-20 px-4 space-y-6 flex flex-col items-center">
      <h2 className="text-xl sm:text-2xl font-bold text-center">
        📍 Your Location
      </h2>

      {!position ? (
        <div className="flex flex-col items-center space-y-4">
          <LoadingSpinner />
          <p className="text-center text-sm sm:text-base">
            Fetching your location...
          </p>
        </div>
      ) : (
        <>
          <p className="text-center text-sm sm:text-base">
            Latitude: {position.latitude} <br />
            Longitude: {position.longitude}
          </p>

          <div className="w-full max-w-3xl">
            <MapContainer
              center={[position.latitude, position.longitude]}
              zoom={13}
              className="rounded-xl shadow-md"
              style={{ height: "60vh", width: "100%" }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="© OpenStreetMap contributors"
              />
              <Marker position={[position.latitude, position.longitude]} />
            </MapContainer>
          </div>

          <p className="text-center text-yellow-400 text-xs sm:text-sm">
            ⚠️ Location may be inaccurate (~{Math.round(position.accuracy)}{" "}
            meters)
          </p>
        </>
      )}
    </div>
  );
}

export default MapProject;
