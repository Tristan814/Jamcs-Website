// import { useState } from "react";
// import { Link, NavLink } from "react-router-dom";
// import { ChevronDown, Menu, Phone, Mail, X } from "lucide-react";
// import Logo from "./Logo";

// const links = [
//   ["/", "Home"],
//   ["/iso-standards", "ISO Standards"],
//   ["/services", "Trainings"],
//   ["/about", "About Us"],
//   ["/contact", "Contact Us"]
// ];

// export default function Navbar({ onQuote }) {
//   const [open, setOpen] = useState(false);

//   return (
//     <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur">
//       <div className="container-ja">
//         <div className="flex min-h-[68px] items-center justify-between gap-5">
//           <Link to="/" onClick={() => setOpen(false)}>
//             <Logo />
//           </Link>

//           <nav className="hidden items-center gap-7 lg:flex">
//             {links.map(([to, label]) => (
//               <NavLink
//                 key={to}
//                 to={to}
//                 className={({ isActive }) =>
//                   `relative py-6 text-[12px] font-semibold ${
//                     isActive ? "text-ja-dark after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-ja-red" : "text-gray-600"
//                   }`
//                 }
//               >
//                 {label}
//                 {label === "ISO Standards" && <ChevronDown size={13} className="ml-1 inline" />}
//               </NavLink>
//             ))}
//           </nav>

//           <div className="hidden items-center gap-4 xl:flex">
//             <div className="flex items-center gap-2 text-[11px] text-gray-600">
//               <Phone size={14} className="text-ja-red" />
//               +1 555-555-5556
//             </div>
//             <div className="flex items-center gap-2 text-[11px] text-gray-600">
//               <Mail size={14} className="text-ja-red" />
//               tristan...@gmail.com
//             </div>
//           </div>

//           <button onClick={onQuote} className="btn-red hidden md:inline-flex">
//             Contact Us
//           </button>

//           <button
//             className="rounded-md p-2 text-gray-700 lg:hidden"
//             onClick={() => setOpen(!open)}
//             aria-label="Toggle navigation"
//           >
//             {open ? <X /> : <Menu />}
//           </button>
//         </div>

//         {open && (
//           <div className="border-t border-gray-100 py-4 lg:hidden">
//             <nav className="flex flex-col gap-1">
//               {links.map(([to, label]) => (
//                 <NavLink
//                   key={to}
//                   to={to}
//                   onClick={() => setOpen(false)}
//                   className="rounded-md px-3 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50"
//                 >
//                   {label}
//                 </NavLink>
//               ))}
//               <button
//                 onClick={() => {
//                   setOpen(false);
//                   onQuote();
//                 }}
//                 className="btn-red mt-2"
//               >
//                 Contact Us
//               </button>
//             </nav>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// }


//CLAUDE AI

import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';
import Logo from './Logo';
import { useQuote } from './QuoteModal';
import { company } from '../data/siteData';

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'ISO Standards', to: '/iso-standards' },
  { label: 'Services', to: '/#services' },
  { label: 'Testimonials', to: '/#testimonials' },
  { label: 'Activities', to: '/#activities' },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const { pathname, hash } = useLocation();
  const { openQuote } = useQuote();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isActive = (to) => {
    const [path, h = ''] = to.split('#');
    if (h) return pathname === '/' && hash === `#${h}`;
    if (path === '/') return pathname === '/' && !hash;
    return pathname === path;
  };

  return (
    <>
      {/* Top contact bar */}
      <div className="hidden bg-ink text-xs text-slate-300 md:block">
        <div className="container-x flex h-9 items-center justify-between">
          <p>ISO Consultancy &amp; Training for Corporate and Enterprise Clients</p>
          <div className="flex items-center gap-6">
            <a href={`tel:${company.phone.replace(/\s/g, '')}`} className="flex items-center gap-1.5 hover:text-white">
              <Phone className="h-3.5 w-3.5" aria-hidden="true" /> {company.phone}
            </a>
            <a href={`mailto:${company.email}`} className="flex items-center gap-1.5 hover:text-white">
              <Mail className="h-3.5 w-3.5" aria-hidden="true" /> {company.email}
            </a>
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 bg-white transition-shadow ${
          scrolled ? 'shadow-md' : 'border-b border-slate-100'
        }`}
      >
        <div className="container-x flex h-[72px] items-center justify-between">
          <Logo />

          <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
            {links.map((l) => (
              <Link
                key={l.label}
                to={l.to}
                aria-current={isActive(l.to) ? 'page' : undefined}
                className={`rounded px-3 py-2 text-sm font-medium transition-colors ${
                  isActive(l.to) ? 'text-brand' : 'text-ink hover:text-brand'
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button type="button" onClick={() => openQuote()} className="btn-primary hidden !py-2.5 sm:inline-flex">
              Get a Quote
            </button>
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-slate-200 lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? 'Close menu' : 'Open menu'}
              onClick={() => setOpen((o) => !o)}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {open && (
          <nav id="mobile-menu" aria-label="Mobile" className="border-t border-slate-100 bg-white lg:hidden">
            <ul className="container-x flex flex-col py-3">
              {links.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    onClick={() => setOpen(false)}
                    aria-current={isActive(l.to) ? 'page' : undefined}
                    className={`block rounded px-2 py-3 text-base font-medium ${
                      isActive(l.to) ? 'text-brand' : 'text-ink'
                    }`}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li className="pt-3">
                <button
                  type="button"
                  onClick={() => {
                    setOpen(false);
                    openQuote();
                  }}
                  className="btn-primary w-full"
                >
                  Get a Quote
                </button>
              </li>
            </ul>
          </nav>
        )}
      </header>
    </>
  );
}