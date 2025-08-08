import { useState } from "react";
import { API_URL } from "../config";
import provincesList from "../constants/provinces";

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
      .then((data) => onNewPrice(data))
      .catch((err) => console.error("Errore spedizione:", err));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 rounded-xl shadow-md grid grid-cols-1 sm:grid-cols-2 gap-4"
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
      <select
        name="provincia"
        value={form.provincia}
        onChange={handleChange}
        required
        className="border p-2 rounded"
      >
        <option value="" disabled>
          Seleziona Provincia
        </option>
        {provincesList.map((p, i) => {
          const code = p.match(/\((.*?)\)/)[1];
          return (
            <option key={i} value={code}>
              {p}
            </option>
          );
        })}
      </select>
      <select
        name="prodotto"
        value={form.provincia}
        onChange={handleChange}
        required
        className="border p-2 rounded"
      >
        <option value="" disabled>
          Mounjaro
        </option>
        ;
      </select>
      <input
        name="prezzo"
        type="number"
        value={form.prezzo}
        onChange={handleChange}
        placeholder="Prezzo"
        required
        className="border p-2 rounded"
      />
      <button
        type="submit"
        className="col-span-full bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700"
      >
        Aggiungi Prezzo
      </button>
    </form>
  );
}
