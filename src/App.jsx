import { useState } from "react";
import Header from "./components/Header";
import PriceForm from "./components/PriceForm";
import PriceList from "./components/PriceList";
import MapView from "./components/MapView";
import UsefulLinks from "./components/UsefulLinks";

export default function App() {
  const [refresh, setRefresh] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 max-w-6xl mx-auto p-4 space-y-6">
        <div className="grid gap-4 md:grid-cols-3">
          <PriceForm onNewPrice={() => setRefresh((f) => !f)} />
          <PriceList key={refresh} />
          <MapView key={refresh} />
        </div>
        <UsefulLinks />
      </main>
    </div>
  );
}

