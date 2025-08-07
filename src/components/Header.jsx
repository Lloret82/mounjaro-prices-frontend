import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/react.svg";

const links = [
  { to: "/", label: "Home" },
  { to: "/trova", label: "Trova" },
  { to: "/aggiungi", label: "Aggiungi" },
  { to: "/letture", label: "Letture" },
  { to: "/notizie", label: "Notizie" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="bg-indigo-700 text-white w-full">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-8 w-8" />
          <span className="font-bold text-lg">Mounjaro Tracker</span>
        </div>
        <button
          className="md:hidden z-20"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <ul
          className={`absolute top-0 right-0 bg-indigo-700 h-full w-2/3
     md:static md:flex md:space-x-6 p-6 md:p-0
     transform transition-transform duration-300 ease-in-out
     ${open ? "translate-x-0" : "translate-x-full"} md:translate-x-0`}
        >
          {links.map((link) => (
            <li key={link.to} className="mb-4 md:mb-0">
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `block text-lg hover:underline ${
                    isActive ? "underline font-semibold" : ""
                  }`
                }
                onClick={() => setOpen(false)}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
