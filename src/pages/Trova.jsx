import { useState, useEffect } from "react";
import { API_URL } from "../config";
import PriceCard from "../components/PriceCard";
import MapView from "../components/MapView";

const PER_PAGE = 3;

export default function Trova() {
  const [prices, setPrices] = useState([]);
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    fetch(`${API_URL}/prezzi`)
      .then((res) => res.json())
      .then(setPrices)
      .catch(console.error);
  }, []);

  const start = (page - 1) * PER_PAGE;
  const paginated = prices.slice(start, start + PER_PAGE);
  const totalPages = Math.ceil(prices.length / PER_PAGE);

  return (
    <div className="flex flex-col md:flex-row w-full h-[calc(100vh-128px)]">
      <div className="md:w-1/3 overflow-y-auto p-4">
        {paginated.map((p) => (
          <div
            key={p._id}
            onClick={() => setSelected([p.lat, p.lng])}
            className="mb-4 cursor-pointer"
          >
            <PriceCard {...p} />
          </div>
        ))}
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
      <div className="md:w-2/3 h-full">
        <MapView center={selected} />
      </div>
    </div>
  );
}
