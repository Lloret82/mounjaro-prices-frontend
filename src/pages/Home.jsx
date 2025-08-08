import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Modal from "../components/Modal";
import PriceForm from "../components/PriceForm";
import AdBanner from "../components/AdBanner";

// Contenuti “blog” di esempio
const articles = [
  {
    title: "Guida ai Farmaci: come risparmiare",
    excerpt:
      "Scopri consigli pratici per trovare sempre il prezzo più conveniente per i tuoi farmaci.",
    image: "https://picsum.photos/seed/pharmacy/400/300",
    link: "/risparmio",
  },
  {
    title: "Cos’è Mounjaro e come funziona",
    excerpt:
      "Approfondimento sul principio attivo, benefici e possibili effetti collaterali.",
    image: "https://picsum.photos/seed/medicine/400/300",
    link: "/perditapeso",
  },
  {
    title: "Storie di Successo: utenti reali",
    excerpt:
      "Leggi le esperienze di chi ha condiviso il proprio prezzo e ha aiutato la comunità.",
    image: "https://picsum.photos/seed/community/400/300",
    link: "/risparmio",
  },
];

export default function Home() {
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="space-y-16">
      {/* Hero */}
      <section className="relative bg-gradient-to-r from-indigo-600 to-indigo-400 text-white py-20 px-4 text-center">
        <h1 className="text-5xl font-extrabold mb-4">
          Benvenuti su{" "}
          <span className="underline decoration-white/30">Mounjaro Italia</span>
        </h1>
        <p className="text-lg mb-8">
          Monitora, condividi e trova i prezzi migliori direttamente sulla
          mappa.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={() => navigate("/trova")}
            className="bg-white text-indigo-600 py-3 px-6 rounded-lg font-semibold shadow hover:shadow-lg transition"
          >
            📍 Trova Farmacie
          </button>
          <button
            onClick={() => setShowForm(true)}
            className="bg-white text-indigo-600 py-3 px-6 rounded-lg font-semibold shadow hover:shadow-lg transition"
          >
            💾 Segnala Prezzo
          </button>
        </div>
      </section>

      {/* Blog Cards */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {articles.map((art, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition"
          >
            <img
              src={art.image}
              alt={art.title}
              className="w-full h-48 object-cover"
              onError={(e) => {
                e.currentTarget.src =
                  "https://via.placeholder.com/400x300?text=No+Image";
              }}
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">{art.title}</h3>
              <p className="text-gray-600 mb-4">{art.excerpt}</p>
              <Link
                to={art.link}
                className="text-indigo-600 font-medium hover:underline"
              >
                Leggi di più →
              </Link>
            </div>
          </div>
        ))}
      </section>

      {/* Banner */}
      <AdBanner />

      {/* Modal Form */}
      <Modal isOpen={showForm} onClose={() => setShowForm(false)}>
        <PriceForm onNewPrice={() => setShowForm(false)} />
      </Modal>
    </div>
  );
}
