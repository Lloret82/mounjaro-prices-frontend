import React, { useState } from "react";
import PriceForm from "../components/PriceForm";
import AdBanner from "../components/AdBanner";

export default function Aggiungi() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Aggiungi Nuovo Prezzo</h1>
      <PriceForm onNewPrice={() => setSubmitted(true)} />
      {submitted && (
        <p className="text-green-600">Prezzo aggiunto con successo!</p>
      )}
      <AdBanner />
    </div>
  );
}
