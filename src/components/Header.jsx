import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";

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
    <header className="fixed inset-x-0 top-0 z-[1002] bg-indigo-700 text-white h-16">
      <div className="max-w-6xl mx-auto flex items-center justify-between h-full px-4">
        {/* Logo */}
        <NavLink to="/" className="flex items-center space-x-4">
          <img
            src={logo}
            alt="Logo"
            className="h-32 w-32 md:h-40 md:w-40 lg:h-48 lg:w-48"
          />
          <span className="font-bold text-2xl md:text-3xl lg:text-4xl">
            Mounjaro Italia
          </span>
        </NavLink>

        {/* Desktop navigation */}
        <nav className="hidden md:flex space-x-6">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-lg hover:underline ${
                  isActive ? "underline font-semibold" : ""
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2"
          onClick={() => setOpen(!open)}
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
      </div>

      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 z-[1000] bg-black bg-opacity-50"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Mobile drawer */}
      <div
        className={`fixed inset-y-0 left-0 z-[1001] w-64 bg-indigo-700 transform transition-transform duration-300 md:hidden ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="mt-16 flex flex-col p-6 space-y-4">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `block text-white text-xl hover:underline ${
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
