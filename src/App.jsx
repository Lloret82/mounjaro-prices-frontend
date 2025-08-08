import { Routes, Route } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Home from "./pages/Home";
import Trova from "./pages/Trova";
import Aggiungi from "./pages/Aggiungi";
import Letture from "./pages/Letture";
import Notizie from "./pages/Notizie";
import Risparmio from "./pages/Risparmio";
import PerditaPeso from "./pages/PerditaPeso";

export default function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trova" element={<Trova />} />
        <Route path="/aggiungi" element={<Aggiungi />} />
        <Route path="/letture" element={<Letture />} />
        <Route path="/notizie" element={<Notizie />} />
        <Route path="/risparmio" element={<Risparmio />} />
        <Route path="/perditapeso" element={<PerditaPeso />} />
      </Routes>
    </MainLayout>
  );
}
