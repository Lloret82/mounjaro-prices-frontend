import { useState } from "react";
import PriceForm from "./components/PriceForm";
import PriceList from "./components/PriceList";
import MapView from "./components/MapView";

export default function App() {
  const [refresh, setRefresh] = useState(false);

  return (
    <div className="max-w-6xl mx-auto p-4 space-y-6">
      <h1 className="text-3xl font-bold text-center text-indigo-700 mb-6">
        💉 Mounjaro Price Tracker
      </h1>
      <PriceForm onNewPrice={() => setRefresh((f) => !f)} />
      <PriceList key={refresh} />
      <MapView key={refresh} />
    </div>
  );
}
