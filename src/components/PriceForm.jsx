import { useState } from "react";
import { API_URL } from "../config";

export default function PriceForm({ onNewPrice }) {
  const [form, setForm] = useState({
    farmacia: "",
    indirizzo: "",
    lat: "",
    lng: "",
    prodotto: "",
    prezzo: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${API_URL}/prezzi`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .then((data) => {
        onNewPrice(data);
        setForm({
          farmacia: "",
          indirizzo: "",
          lat: "",
          lng: "",
          prodotto: "",
          prezzo: "",
        });
      })
      .catch((err) => console.error("Errore nell'invio prezzo:", err));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 rounded-xl shadow-md mb-6 grid grid-cols-1 sm:grid-cols-2 gap-4"
    >
      <input
        className="border p-2 rounded"
        name="farmacia"
        value={form.farmacia}
        onChange={handleChange}
        placeholder="Nome farmacia"
        required
      />
      <input
        className="border p-2 rounded"
        name="indirizzo"
        value={form.indirizzo}
        onChange={handleChange}
        placeholder="Indirizzo"
        required
      />
      <input
        className="border p-2 rounded"
        name="lat"
        type="number"
        step="any"
        value={form.lat}
        onChange={handleChange}
        placeholder="Latitudine"
        required
      />
      <input
        className="border p-2 rounded"
        name="lng"
        type="number"
        step="any"
        value={form.lng}
        onChange={handleChange}
        placeholder="Longitudine"
        required
      />
      <input
        className="border p-2 rounded"
        name="prodotto"
        value={form.prodotto}
        onChange={handleChange}
        placeholder="Prodotto"
        required
      />
      <input
        className="border p-2 rounded"
        name="prezzo"
        type="number"
        value={form.prezzo}
        onChange={handleChange}
        placeholder="Prezzo"
        required
      />
      <button className="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 col-span-full">
        Aggiungi Prezzo
      </button>
    </form>
  );
}
