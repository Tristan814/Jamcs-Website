import { Link } from "react-router-dom";
import { Mail, MapPin, Phone, ArrowRight } from "lucide-react";
import Logo from "./Logo";
import { isoStandards } from "../data/isoStandards";

export default function Footer() {
  return (
    <footer className="bg-ja-dark text-white">
      <div className="container-ja grid gap-10 py-14 md:grid-cols-4">
        <div>
          <Logo light />
          <p className="mt-5 max-w-xs text-sm leading-6 text-gray-400">
            Professional ISO consultancy and training services for organizations
            seeking stronger systems, compliance, and continuous improvement.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-bold">Quick Links</h3>
          <div className="space-y-2 text-sm text-gray-400">
            <Link className="block hover:text-white" to="/">Home</Link>
            <Link className="block hover:text-white" to="/iso-standards">ISO Standards</Link>
            <Link className="block hover:text-white" to="/services">Trainings</Link>
            <Link className="block hover:text-white" to="/about">About Us</Link>
            <Link className="block hover:text-white" to="/contact">Contact Us</Link>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-bold">Standards</h3>
          <div className="space-y-2 text-xs text-gray-400">
            {isoStandards.slice(0, 5).map((iso) => (
              <div key={iso.code}>{iso.code}</div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-bold">Contact</h3>
          <div className="space-y-3 text-sm text-gray-400">
            <div className="flex gap-2"><MapPin size={16} /> Business Address, Philippines</div>
            <div className="flex gap-2"><Phone size={16} /> +1 555-555-5556</div>
            <div className="flex gap-2"><Mail size={16} /> tristanquino814@gmail.com</div>
          </div>

          <div className="mt-7">
            <p className="mb-2 text-xs font-semibold">Stay Updated</p>
            <div className="flex">
              <input className="min-w-0 flex-1 rounded-l-md px-3 py-2 text-xs text-gray-800 outline-none" placeholder="Your email address" />
              <button className="rounded-r-md bg-ja-red px-3"><ArrowRight size={16} /></button>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-ja flex flex-col gap-3 py-4 text-[11px] text-gray-500 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} JA Management Consultancy Services. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="/privacy">Privacy Policy</Link>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
