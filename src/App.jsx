import { useState } from "react";
import PriceList from "./components/PriceList";
import PriceForm from "./components/PriceForm";

export default function App() {
  const [refresh, setRefresh] = useState(false);

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center text-indigo-700 mb-6">
        💉 Mounjaro Price Tracker
      </h1>
      <PriceForm onNewPrice={() => setRefresh(!refresh)} />
      <PriceList key={refresh} />
    </div>
  );
}
