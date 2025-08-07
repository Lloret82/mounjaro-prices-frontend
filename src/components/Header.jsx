import { useState } from "react";
import logo from "../assets/react.svg";

export default function Header() {
  const [open, setOpen] = useState(false);

  const classes = [
    "md:flex md:space-x-4",
    "absolute md:static right-0 mt-2 md:mt-0",
    "bg-indigo-700 md:bg-transparent p-4 md:p-0",
    "rounded md:rounded-none shadow md:shadow-none",
    open ? "block" : "hidden",
    "md:block",
  ].join(" ");

  return (
    <header className="bg-indigo-700 text-white">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-8 w-8" />
          <span className="font-bold text-lg">Mounjaro Tracker</span>
        </div>
        <nav className="relative">
          <button
            className="md:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle navigation"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <ul className={classes}>
            <li>
              <a href="#" className="block py-1 hover:underline">
                Home
              </a>
            </li>
            <li>
              <a
                href="#useful-links"
                className="block py-1 hover:underline"
              >
                Useful Links
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

