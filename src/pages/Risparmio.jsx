import React from "react";
import { motion } from "framer-motion";
import AdBanner from "../components/AdBanner";

export default function Risparmio() {
  const testimonials = [
    {
      quote:
        "Mounjaro ha trasformato la mia gestione del diabete: più energia e maggior controllo!",
      name: "Mario Rossi",
    },
    {
      quote:
        "Grazie a Mounjaro, i miei livelli di glicemia sono stabili e mi sento più serena",
      name: "Laura Bianchi",
    },
  ];

  return (
    <div className="bg-white min-h-screen py-16 px-4 space-y-16">
      {/* Hero Section */}
      <section
        className="w-full bg-cover bg-center rounded-2xl overflow-hidden"
        style={{
          backgroundImage: "url(https://picsum.photos/seed/health/1200/400)",
        }}
      >
        <div className="bg-black bg-opacity-40 p-12 text-center">
          <motion.h1
            className="text-5xl md:text-6xl font-extrabold text-white mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Guida Completa a Mounjaro
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Mounjaro è un farmaco innovativo per il diabete di tipo 2, approvato
            da autorità internazionali. Ecco tutto quello che devi sapere:
            meccanismo di azione, benefici clinici e testimonianze reali.
          </motion.p>
        </div>
      </section>

      {/* Ad Banner */}
      <AdBanner />

      {/* In-Depth Section */}
      <section className="max-w-5xl mx-auto space-y-16">
        {/* Mechanism Explanation */}
        <div className="flex flex-col md:flex-row items-center md:space-x-8">
          <img
            src="https://picsum.photos/seed/pharma/600/400"
            alt="Descrizione Mounjaro"
            className="w-full md:w-1/2 rounded-2xl shadow-lg object-cover mb-6 md:mb-0"
          />
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Cos'è Mounjaro?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Mounjaro (tirzepatide) è un agonista duale dei recettori
              GLP‑1/GIP, indicato per migliorare il controllo glicemico nel
              diabete di tipo 2. Agisce stimolando la secrezione di insulina
              quando necessario e riducendo la produzione di glucagone.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Studi clinici, come SURPASS-2 e SURPASS-3, hanno evidenziato
              riduzioni medie di HbA1c tra il 1.8% e il 2.5% e una perdita di
              peso fino al 12% in 6 mesi, migliorando complessivamente il
              profilo metabolico.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-4xl mx-auto space-y-12">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">
          Testimonianze Utenti
        </h2>
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            className="bg-gray-100 rounded-xl p-8 shadow-lg"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 * i, duration: 0.6 }}
          >
            <p className="italic text-gray-800 mb-4">“{t.quote}”</p>
            <p className="font-semibold text-gray-700 text-right">– {t.name}</p>
          </motion.div>
        ))}
      </section>

      {/* Banner */}
      <AdBanner />

      {/* Footer Disclaimer */}
      <section className="max-w-4xl mx-auto text-center text-gray-600 space-y-4">
        <p className="leading-relaxed">
          Tutte le informazioni qui presenti sono a scopo puramente informativo,
          tratte da fonti ufficiali (EMA, AIFA, FDA) ed esperienze personali.
          Non costituiscono un parere medico.
        </p>
      </section>

      {/* Banner */}
      <AdBanner />
    </div>
  );
}
