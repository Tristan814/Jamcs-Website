import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ChevronDown, Menu, Phone, Mail, X } from "lucide-react";
import Logo from "./Logo";

const links = [
  ["/", "Home"],
  ["/iso-standards", "ISO Standards"],
  ["/services", "Trainings"],
  ["/about", "About Us"],
  ["/contact", "Contact Us"]
];

export default function Navbar({ onQuote }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur">
      <div className="container-ja">
        <div className="flex min-h-[68px] items-center justify-between gap-5">
          <Link to="/" onClick={() => setOpen(false)}>
            <Logo />
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {links.map(([to, label]) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `relative py-6 text-[12px] font-semibold ${
                    isActive ? "text-ja-dark after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-ja-red" : "text-gray-600"
                  }`
                }
              >
                {label}
                {label === "ISO Standards" && <ChevronDown size={13} className="ml-1 inline" />}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-4 xl:flex">
            <div className="flex items-center gap-2 text-[11px] text-gray-600">
              <Phone size={14} className="text-ja-red" />
              +1 555-555-5556
            </div>
            <div className="flex items-center gap-2 text-[11px] text-gray-600">
              <Mail size={14} className="text-ja-red" />
              tristan...@gmail.com
            </div>
          </div>

          <button onClick={onQuote} className="btn-red hidden md:inline-flex">
            Contact Us
          </button>

          <button
            className="rounded-md p-2 text-gray-700 lg:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="border-t border-gray-100 py-4 lg:hidden">
            <nav className="flex flex-col gap-1">
              {links.map(([to, label]) => (
                <NavLink
                  key={to}
                  to={to}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50"
                >
                  {label}
                </NavLink>
              ))}
              <button
                onClick={() => {
                  setOpen(false);
                  onQuote();
                }}
                className="btn-red mt-2"
              >
                Contact Us
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
