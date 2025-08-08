// frontend/src/pages/PerditaPeso.jsx
import React from "react";
import { motion } from "framer-motion";
import AdBanner from "../components/AdBanner";

export default function PerditaPeso() {
  const testimonials = [
    {
      quote:
        "Con Mounjaro ho perso oltre il 15% del mio peso in 6 mesi, senza rinunce drastiche!",
      name: "Giulia Verdi",
    },
    {
      quote:
        "Finalmente vedo risultati reali: più energia, meno voglia di zucchero e una nuova routine salutare.",
      name: "Carlo Neri",
    },
  ];

  return (
    <div className="bg-gray-50 py-16 px-4 space-y-20 min-h-screen">
      {/* Hero */}
      <section className="max-w-3xl mx-auto text-center">
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Uso di Mounjaro per la Perdita di Peso
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-gray-700 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Scopri come il principio attivo tirzepatide, commercializzato come
          Mounjaro (diabete) e Zepbound (gestione del peso), supporta la perdita
          di peso attraverso studi clinici, meccanismi biologici e testimonianze
          vere.
        </motion.p>
      </section>

      {/* Banner */}
      <AdBanner />

      {/* Approval & Trials */}
      <section className="max-w-5xl mx-auto space-y-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Approvazioni Ufficiali
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Nel novembre 2023 l’<strong>FDA</strong> ha approvato tirzepatide
            (brand <em>Zepbound</em>) per la gestione cronica del peso in adulti
            con obesità o sovrappeso con comorbilità. In Europa è in fase
            avanzata di valutazione da EMA.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col md:flex-row items-center gap-8"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">
              Studi SURMOUNT
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 leading-relaxed">
              <li>
                <strong>SURMOUNT-1:</strong> fino al 20% di perdita di peso in
                72 settimane
              </li>
              <li>
                <strong>SURMOUNT-2 e 3:</strong> conferme di efficacia anche in
                pazienti con obesità e diabete
              </li>
            </ul>
          </div>
          <img
            src="https://picsum.photos/seed/weight/600/400"
            alt="Grafico trial"
            className="md:w-1/2 rounded-2xl shadow-lg object-cover"
          />
        </motion.div>
      </section>

      {/* Mechanism */}
      <section className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        <motion.img
          src="https://picsum.photos/seed/biology/600/400"
          alt="Meccanismo biologico"
          className="w-full rounded-2xl shadow-lg object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        />
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Come Funziona
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Tirzepatide combina l’azione di due incretine (GLP-1 e GIP),
            aumentando la sensazione di sazietà e rallentando lo svuotamento
            gastrico. Questo porta a un apporto calorico ridotto spontaneamente.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Gli effetti integrati su appetito, metabolismo e glicemia spiegano
            l’eccellente profilo di perdita di peso osservato nei trial clinici.
          </p>
        </motion.div>
      </section>

      {/* Testimonials */}
      <section className="max-w-4xl mx-auto space-y-12">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
          Testimonianze
        </h2>
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            className="bg-white rounded-2xl p-8 shadow-lg"
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

      {/* Disclaimer Footer */}
      <section className="max-w-4xl mx-auto text-center text-gray-600">
        <p className="leading-relaxed">
          Le informazioni qui fornite sono basate su studi clinici ufficiali
          (SURMOUNT, FDA, EMA) e testimonianze personali. Non costituiscono in
          alcun modo un parere medico. Consulta sempre il tuo specialista prima
          di iniziare qualsiasi terapia.
        </p>
      </section>

      <AdBanner />
    </div>
  );
}
