// import { ArrowRight, ShieldCheck, Users, Target, Handshake } from "lucide-react";
// import { Link } from "react-router-dom";
// import SectionHeading from "../components/SectionHeading";
// import ISOCard from "../components/ISOCard";
// import { isoStandards } from "../data/isoStandards";

// const why = [
//   { icon: ShieldCheck, title: "Expert Guidance", text: "Practical solutions tailored to your organization’s needs." },
//   { icon: Users, title: "Experienced Team", text: "Skilled consultants and trainers with real-world experience." },
//   { icon: Target, title: "Results Driven", text: "Focus on measurable improvement and compliance." },
//   { icon: Handshake, title: "Long-Term Support", text: "We’re with you at every step of your journey." }
// ];

// export default function Home({ onQuote }) {
//   return (
//     <>
//       <section className="relative overflow-hidden bg-white">
//         <div className="container-ja grid min-h-[520px] items-center lg:grid-cols-[.9fr_1.1fr]">
//           <div className="relative z-10 py-16 lg:pr-8">
//             <div className="eyebrow">ISO Consultancy & Training</div>
//             <h1 className="mt-4 max-w-xl text-4xl font-extrabold leading-[1.08] text-ja-dark md:text-5xl">
//               Build Stronger Systems.<br />
//               Achieve <span className="text-ja-red">Greater Results.</span>
//             </h1>
//             <p className="mt-5 max-w-lg text-sm leading-6 text-gray-500">
//               JA provides professional ISO consultancy and training services to help organizations improve their management systems, processes and performance.
//             </p>
//             <div className="mt-7 flex flex-wrap gap-3">
//               <Link to="/iso-standards" className="btn-red">Explore ISO Standards <ArrowRight size={16} /></Link>
//               <button onClick={() => onQuote()} className="btn-outline">Get a Quote</button>
//             </div>
//           </div>

//           <div className="relative min-h-[390px] overflow-hidden lg:min-h-[520px]">
//             <img
//               className="absolute inset-0 h-full w-full object-cover"
//               src="https://images.unsplash.com/photo-1581091870620-fd1d2d4d1a9a?auto=format&fit=crop&w=1400&q=85"
//               alt="Professional working in an industrial environment"
//             />
//             <div className="absolute inset-0 bg-gradient-to-r from-white via-white/20 to-transparent" />
//             <div className="absolute bottom-0 right-0 h-full w-24 bg-gradient-to-l from-ja-red to-transparent opacity-90" />
//             <div className="absolute right-8 top-12 grid grid-cols-2 gap-3 text-white md:right-14">
//               {["QUALITY", "ENVIRONMENT", "SAFETY", "SECURITY"].map((item) => (
//                 <div key={item} className="flex h-20 w-24 flex-col items-center justify-center rounded-xl border border-white/70 bg-black/20 text-center backdrop-blur-sm">
//                   <ShieldCheck size={25} />
//                   <span className="mt-1 text-[9px] font-bold">{item}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="section border-y border-gray-100">
//         <div className="container-ja grid gap-10 lg:grid-cols-[290px_1fr]">
//           <div>
//             <SectionHeading
//               eyebrow="ISO Standards"
//               title="Global Standards for a Stronger Tomorrow"
//               redWord="Stronger Tomorrow"
//               text="We support a wide range of ISO and industry-specific standards to help you achieve compliance, improve performance, and build long-term resilience."
//             />
//             <Link to="/iso-standards" className="btn-red mt-6">View All ISO Standards <ArrowRight size={16} /></Link>
//           </div>

//           <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
//             {isoStandards.map((iso) => (
//               <ISOCard key={iso.code} iso={iso} onQuote={onQuote} />
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="bg-gray-50 py-12">
//         <div className="container-ja grid gap-7 md:grid-cols-[220px_1fr]">
//           <SectionHeading eyebrow="Why Choose JA" title="Your Trusted ISO Partner" redWord="Trusted ISO Partner" />
//           <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
//             {why.map(({ icon: Icon, title, text }) => (
//               <div key={title} className="border-l border-gray-200 pl-5">
//                 <Icon className="text-ja-red" size={30} />
//                 <h3 className="mt-3 text-sm font-bold text-ja-dark">{title}</h3>
//                 <p className="mt-1 text-xs leading-5 text-gray-500">{text}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="section">
//         <div className="container-ja grid gap-8 lg:grid-cols-[290px_1fr]">
//           <div>
//             <SectionHeading
//               eyebrow="Our Services"
//               title="Consultancy & Training for Lasting Impact"
//               redWord="Lasting Impact"
//               text="From initial assessment to full implementation, we provide end-to-end support for your management system needs."
//             />
//             <Link to="/services" className="btn-red mt-6">Explore Our Services <ArrowRight size={16} /></Link>
//           </div>

//           <div className="grid gap-5 md:grid-cols-2">
//             <ServiceImageCard
//               image="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1000&q=80"
//               title="ISO Consultancy"
//               text="Gap assessments, system development, internal audit support and more."
//             />
//             <ServiceImageCard
//               image="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1000&q=80"
//               title="Training Services"
//               text="ISO awareness, internal auditor training, customized corporate training and more."
//             />
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// function ServiceImageCard({ image, title, text }) {
//   return (
//     <div className="image-card relative h-[260px] overflow-hidden rounded-lg">
//       <img src={image} alt={title} className="card-image absolute inset-0 h-full w-full object-cover" />
//       <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
//       <div className="absolute bottom-0 left-0 right-0 p-5">
//         <div className="rounded-lg bg-white/95 p-4 shadow-soft">
//           <h3 className="font-bold text-ja-dark">{title}</h3>
//           <p className="mt-1 text-xs leading-5 text-gray-500">{text}</p>
//           <Link to="/services" className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-ja-red">
//             Learn More <ArrowRight size={13} />
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }


//CLAUDE AI
import { Check } from 'lucide-react';
import Seo from '../components/Seo';
import SectionHeading, { PageHeader } from '../components/SectionHeading';
import CtaBanner from '../components/CtaBanner';
import { Reveal } from '../components/Motion';
import { services, process } from '../data/siteData';

export default function Services() {
  return (
    <>
      <Seo
        title="Services"
        description="ISO consultancy, gap assessment, documentation development, internal audit support, management review facilitation, ISO training and certification preparation."
      />
      <PageHeader
        eyebrow="Our Services"
        title="Consultancy and Training, End to End"
        subtitle="Choose a single service or let us support the whole journey."
      />

      <section className="section bg-white" aria-label="Service details">
        <div className="container-x grid gap-6 md:grid-cols-2">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.title} delay={(i % 2) * 100} className="h-full">
                <article className="card flex h-full gap-5 p-7">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-md bg-brand text-white">
                    <Icon className="h-7 w-7" aria-hidden="true" />
                  </div>
                  <div>
                    <h2 className="font-sans text-xl font-semibold">{s.title}</h2>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.desc}</p>
                    <ul className="mt-4 space-y-2">
                      {s.points.map((p) => (
                        <li key={p} className="flex gap-2.5 text-sm">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" /> {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="section bg-slate-50" aria-labelledby="process-title">
        <div className="container-x">
          <SectionHeading id="process-title" eyebrow="How We Work" title="A Clear, Proven Process" />
          <ol className="grid gap-6 md:grid-cols-4">
            {process.map((p, i) => (
              <li key={p.step}>
                <Reveal delay={i * 100} className="h-full">
                  <div className="h-full rounded-xl border border-slate-200 bg-white p-7">
                    <span className="font-serif text-4xl font-bold text-brand">{p.step}</span>
                    <h3 className="mt-3 text-lg">{p.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">{p.desc}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}