import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function Recenter({ center }) {
  const map = useMap();
  useEffect(() => {
    if (center) {
      map.flyTo(center, 13, { duration: 1 });
    }
  }, [center, map]);
  return null;
}

export default function MapView({ center, prices }) {
  return (
    <MapContainer
      center={center || [41.9028, 12.4964]}
      zoom={center ? 13 : 6}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {center && <Recenter center={center} />}
      {prices.map((p, i) => (
        <Marker key={i} position={[p.lat, p.lng]}>
          <Popup>
            <strong>{p.farmacia}</strong>
            <br />
            {p.indirizzo}, {p.cap} {p.citta} ({p.provincia})
            <br />
            {p.prodotto}: €{p.prezzo}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
