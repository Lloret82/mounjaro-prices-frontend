import { useState } from "react";
import { API_URL } from "../config";

export default function PriceForm({ onNewPrice }) {
  const [form, setForm] = useState({
    farmacia: "",
    indirizzo: "",
    cap: "",
    citta: "",
    provincia: "",
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
          cap: "",
          citta: "",
          provincia: "",
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
        name="farmacia"
        value={form.farmacia}
        onChange={handleChange}
        placeholder="Nome farmacia"
        required
        className="border p-2 rounded"
      />
      <input
        name="indirizzo"
        value={form.indirizzo}
        onChange={handleChange}
        placeholder="Indirizzo"
        required
        className="border p-2 rounded"
      />
      <input
        name="cap"
        value={form.cap}
        onChange={handleChange}
        placeholder="CAP"
        required
        className="border p-2 rounded"
      />
      <input
        name="citta"
        value={form.citta}
        onChange={handleChange}
        placeholder="Città"
        required
        className="border p-2 rounded"
      />
      <input
        name="provincia"
        value={form.provincia}
        onChange={handleChange}
        placeholder="Provincia"
        required
        className="border p-2 rounded"
      />
      <input
        name="prodotto"
        value={form.prodotto}
        onChange={handleChange}
        placeholder="Prodotto"
        required
        className="border p-2 rounded"
      />
      <input
        name="prezzo"
        type="number"
        value={form.prezzo}
        onChange={handleChange}
        placeholder="Prezzo"
        required
        className="border p-2 rounded"
      />
      <button className="col-span-full bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700">
        Aggiungi Prezzo
      </button>
    </form>
  );
}
