import { useEffect, useState } from "react";
import { API_URL } from "../config";
import PriceCard from "./PriceCard";

export default function PriceList() {
  const [prezzi, setPrezzi] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_URL}/prezzi`)
      .then((res) => res.json())
      .then((data) => {
        setPrezzi(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Errore nel caricamento prezzi:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="text-center text-gray-500">Caricamento prezzi...</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {prezzi.length > 0 ? (
        prezzi.map((p, i) => <PriceCard key={i} {...p} />)
      ) : (
        <p className="text-center text-gray-500">Nessun prezzo disponibile</p>
      )}
    </div>
  );
}
