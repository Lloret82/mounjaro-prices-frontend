export default function PriceCard({ farmacia, indirizzo, prodotto, prezzo }) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-4 hover:shadow-xl transition duration-300">
      <h2 className="text-lg font-bold text-indigo-600">{farmacia}</h2>
      <p className="text-sm text-gray-500">{indirizzo}</p>
      <p className="mt-2 font-medium">{prodotto}</p>
      <p className="text-xl font-bold text-green-600">€ {prezzo}</p>
    </div>
  );
}
