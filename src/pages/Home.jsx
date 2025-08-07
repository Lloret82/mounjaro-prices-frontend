import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../components/Modal";
import PriceForm from "../components/PriceForm";
import AdBanner from "../components/AdBanner";

export default function Home() {
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="space-y-8">
      <section className="text-center py-10">
        <h1 className="text-3xl font-bold">Cosa ti può servire?</h1>
        <p className="mt-4">
          Trova le farmacie con il prezzo più basso intorno a te.
        </p>
        <button
          onClick={() => navigate("/trova")}
          className="mt-6 bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700"
        >
          Inizia ora 📍
        </button>
      </section>

      <AdBanner />

      <section>
        <h2 className="text-2xl font-semibold mb-4">
          Aggiungi farmacia e prezzo
        </h2>
        <button
          onClick={() => setShowForm(true)}
          className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
        >
          Apri form
        </button>
        <Modal isOpen={showForm} onClose={() => setShowForm(false)}>
          <PriceForm onNewPrice={() => setShowForm(false)} />
        </Modal>
      </section>

      <AdBanner />

      <section>
        <h2 className="text-2xl font-semibold mb-4">Letture interessanti</h2>
        {/* Placeholder per card letture */}
      </section>

      <AdBanner />

      <section>
        <h2 className="text-2xl font-semibold mb-4">Notizie</h2>
        {/* Feed notizie stub */}
      </section>
    </div>
  );
}
