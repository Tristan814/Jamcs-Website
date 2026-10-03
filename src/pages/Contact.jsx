// import { Mail, MapPin, Phone, Send } from "lucide-react";
// import { useState } from "react";

// export default function Contact() {
//   const [sent, setSent] = useState(false);

//   return (
//     <>
//       <section className="bg-ja-dark py-20 text-white">
//         <div className="container-ja">
//           <div className="eyebrow">Contact Us</div>
//           <h1 className="mt-4 text-4xl font-extrabold md:text-5xl">Let’s Discuss Your Requirements</h1>
//         </div>
//       </section>

//       <section className="section">
//         <div className="container-ja grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
//           <div>
//             <h2 className="text-2xl font-extrabold text-ja-dark">Get in touch</h2>
//             <p className="mt-3 text-sm leading-6 text-gray-500">Tell us what standard, service, or training you are considering.</p>

//             <div className="mt-8 space-y-5">
//               <Info icon={MapPin} title="Address" text="Business Address, Philippines" />
//               <Info icon={Phone} title="Phone" text="+1 555-555-5556" />
//               <Info icon={Mail} title="Email" text="tristanquino814@gmail.com" />
//             </div>
//           </div>

//           <div className="rounded-xl border border-gray-100 p-7 shadow-soft">
//             {!sent ? (
//               <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="grid gap-4 md:grid-cols-2">
//                 <input required className="rounded-md border border-gray-200 px-3 py-3 text-sm" placeholder="Name" />
//                 <input required type="email" className="rounded-md border border-gray-200 px-3 py-3 text-sm" placeholder="Email" />
//                 <input className="rounded-md border border-gray-200 px-3 py-3 text-sm md:col-span-2" placeholder="Company" />
//                 <textarea required className="min-h-[160px] rounded-md border border-gray-200 px-3 py-3 text-sm md:col-span-2" placeholder="Message" />
//                 <button className="btn-red md:col-span-2">Send Message <Send size={15} /></button>
//               </form>
//             ) : (
//               <div className="py-16 text-center">
//                 <h2 className="text-2xl font-extrabold">Message received</h2>
//                 <p className="mt-2 text-sm text-gray-500">Connect this form to your preferred email service or backend.</p>
//               </div>
//             )}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// function Info({ icon: Icon, title, text }) {
//   return (
//     <div className="flex gap-4">
//       <div className="rounded-lg bg-red-50 p-3 text-ja-red"><Icon size={20} /></div>
//       <div>
//         <h3 className="text-sm font-bold">{title}</h3>
//         <p className="mt-1 text-sm text-gray-500">{text}</p>
//       </div>
//     </div>
//   );
// }

//CLAUDE AI

import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import Seo from '../components/Seo';
import { PageHeader } from '../components/SectionHeading';
import CtaBanner from '../components/CtaBanner';
import { InquiryForm } from '../components/QuoteModal';
import { company } from '../data/siteData';

export default function Contact() {
  const info = [
    { icon: Phone, label: 'Phone', value: company.phone, href: `tel:${company.phone.replace(/\s/g, '')}` },
    { icon: Mail, label: 'Email', value: company.email, href: `mailto:${company.email}` },
    { icon: MapPin, label: 'Office', value: company.address },
    { icon: Clock, label: 'Office Hours', value: company.hours },
  ];

  return (
    <>
      <Seo
        title="Contact Us"
        description="Contact JA Consultancy & Training for a free consultation or quote on ISO consultancy, audits and training."
      />
      <PageHeader
        eyebrow="Contact Us"
        title="Let’s Talk About Your ISO Goals"
        subtitle="Send us a message and one of our consultants will respond promptly."
      />

      <section className="section bg-white" aria-label="Contact form and details">
        <div className="container-x grid gap-10 lg:grid-cols-5">
          <div className="card p-8 hover:translate-y-0 lg:col-span-3">
            <h2 className="font-sans text-2xl font-semibold">Send Us a Message</h2>
            <p className="mb-6 mt-1 text-sm text-ink-soft">Fields marked * are required.</p>
            <InquiryForm idPrefix="contact" />
          </div>

          <aside className="space-y-4 lg:col-span-2" aria-label="Office information">
            {info.map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="flex gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-card">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-brand-light text-brand">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div className="text-sm">
                  <p className="font-semibold">{label}</p>
                  {href ? (
                    <a href={href} className="text-ink-soft hover:text-brand">{value}</a>
                  ) : (
                    <p className="text-ink-soft">{value}</p>
                  )}
                </div>
              </div>
            ))}
          </aside>
        </div>

        {/* Google Maps placeholder */}
        <div className="container-x mt-10">
          <div
            role="img"
            aria-label="Map placeholder"
            className="flex aspect-[16/6] min-h-[220px] w-full flex-col items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-100 text-slate-400"
          >
            <MapPin className="h-10 w-10" aria-hidden="true" />
            <p className="text-sm font-medium">Google Maps embed goes here</p>
          </div>
          {/* Replace the placeholder above with:
          <iframe
            title="JA Consultancy office location"
            src="YOUR_GOOGLE_MAPS_EMBED_URL"
            className="aspect-[16/6] min-h-[220px] w-full rounded-xl border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          /> */}
        </div>
      </section>

      <CtaBanner
        title="Prefer to Talk It Through?"
        subtitle="Request a quote and we’ll arrange a no-obligation conversation about your requirements."
      />
    </>
  );
}