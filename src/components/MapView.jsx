import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { API_URL } from "../config";

// Haversine per distanza in km
function haversine(lat1, lon1, lat2, lon2) {
  const toRad = (v) => (v * Math.PI) / 180;
  const R = 6371;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(a));
}

function Recenter({ center }) {
  const map = useMap();
  if (center) map.setView(center, 13);
  return null;
}

export default function MapView() {
  const [prices, setPrices] = useState([]);
  const [userLocation, setUserLocation] = useState(null);
  const [radiusKm, setRadiusKm] = useState(10);

  useEffect(() => {
    fetch(`${API_URL}/prezzi`)
      .then((res) => res.json())
      .then(setPrices)
      .catch(console.error);
  }, []);

  const handleLocate = () => {
    if (!navigator.geolocation) {
      alert("Geolocalizzazione non supportata");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => setUserLocation([coords.latitude, coords.longitude]),
      () => alert("Impossibile ottenere la posizione"),
      { enableHighAccuracy: true }
    );
  };

  const displayed = userLocation
    ? prices.filter(
        (p) =>
          haversine(userLocation[0], userLocation[1], p.lat, p.lng) <= radiusKm
      )
    : prices;

  return (
    <div className="relative h-screen">
      <button
        onClick={handleLocate}
        className="absolute top-4 right-4 z-10 bg-white p-2 rounded shadow"
      >
        📍 Trova prezzi vicino a me
      </button>

      {userLocation && (
        <div className="absolute top-16 right-4 z-10 bg-white p-2 rounded shadow">
          <label className="text-sm">
            Raggio (km):
            <input
              type="number"
              value={radiusKm}
              onChange={(e) => setRadiusKm(+e.target.value)}
              className="ml-2 w-16 border rounded p-1"
            />
          </label>
        </div>
      )}

      <MapContainer
        center={userLocation || [41.9028, 12.4964]}
        zoom={userLocation ? 13 : 6}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {userLocation && <Recenter center={userLocation} />}
        {displayed.map((p, i) => (
          <Marker key={i} position={[p.lat, p.lng]}>
            <Popup>
              <strong>{p.farmacia}</strong>
              <br />
              {p.indirizzo}, {p.cap} {p.citta} ({p.provincia})
              <br />
              {p.prodotto}: €{p.prezzo}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
