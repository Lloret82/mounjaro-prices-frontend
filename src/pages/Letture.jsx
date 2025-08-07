import React from "react";
const letture = [
  { title: "Articolo 1", url: "#" },
  { title: "Articolo 2", url: "#" },
  { title: "Articolo 3", url: "#" },
];

export default function Letture() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Letture Interessanti</h1>
      <ul className="space-y-2">
        {letture.map((l, i) => (
          <li key={i}>
            <a
              href={l.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:underline"
            >
              {l.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
