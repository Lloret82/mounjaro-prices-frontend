import { useState, useEffect } from "react";
import { API_URL } from "../config";
import provincesList from "../constants/provinces";
import PriceCard from "../components/PriceCard";
import MapView from "../components/MapView";

const PER_PAGE = 5;

// Haversine formula for distance in km
const haversine = (lat1, lon1, lat2, lon2) => {
  const toRad = (v) => (v * Math.PI) / 180;
  const R = 6371;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(a));
};

export default function Trova() {
  const [prices, setPrices] = useState([]);
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const [province, setProvince] = useState("");

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
      ({ coords }) => {
        setUserLocation([coords.latitude, coords.longitude]);
        setPage(1);
      },
      () => alert("Impossibile ottenere la posizione"),
      { enableHighAccuracy: true }
    );
  };

  // Filtro: geolocalizzazione ha priorità, altrimenti per provincia
  const filtered = userLocation
    ? prices.filter(
        (p) => haversine(userLocation[0], userLocation[1], p.lat, p.lng) <= 50
      )
    : province
    ? prices.filter((p) => p.provincia === province)
    : prices;

  const totalPages = Math.ceil(filtered.length / PER_PAGE);
  const start = (page - 1) * PER_PAGE;
  const paginated = filtered.slice(start, start + PER_PAGE);

  return (
    <div className="flex flex-col md:flex-row w-full h-[calc(100vh-128px)]">
      {/* Sidebar */}
      <div className="md:w-1/3 overflow-y-auto p-4 space-y-4">
        {/* Dropdown provincia e geolocalizza */}
        <div className="flex space-x-2 mb-4">
          <select
            value={province}
            onChange={(e) => {
              setProvince(e.target.value);
              setPage(1);
            }}
            className="flex-1 border rounded p-2"
          >
            <option value="">Tutte le province</option>
            {provincesList.map((p, i) => {
              const code = p.match(/\((.*?)\)/)[1];
              return (
                <option key={i} value={code}>
                  {p}
                </option>
              );
            })}
          </select>
          <button
            onClick={handleLocate}
            className="bg-indigo-600 text-white p-2 rounded"
          >
            📍 Vicini a me
          </button>
        </div>

        {/* Card prezzi */}
        {paginated.map((p) => (
          <div
            key={p._id}
            className="cursor-pointer"
            onClick={() => setSelected([p.lat, p.lng])}
          >
            <PriceCard {...p} />
          </div>
        ))}

        {/* Paginazione */}
        <div className="flex justify-center space-x-2 mt-4">
          {page > 1 && (
            <button
              onClick={() => setPage(page - 1)}
              className="px-3 py-1 bg-indigo-600 text-white rounded"
            >
              Prev
            </button>
          )}
          <span className="px-3 py-1">
            {page} / {totalPages}
          </span>
          {page < totalPages && (
            <button
              onClick={() => setPage(page + 1)}
              className="px-3 py-1 bg-indigo-600 text-white rounded"
            >
              Next
            </button>
          )}
        </div>
      </div>

      {/* Mappa */}
      <div className="md:w-2/3 h-full">
        <MapView center={selected || userLocation} prices={filtered} />
      </div>
    </div>
  );
}
