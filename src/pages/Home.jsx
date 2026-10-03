// // import { ArrowRight, ShieldCheck, Users, Target, Handshake } from "lucide-react";
// // import { Link } from "react-router-dom";
// // import SectionHeading from "../components/SectionHeading";
// // import ISOCard from "../components/ISOCard";
// // import { isoStandards } from "../data/isoStandards";

// // const why = [
// //   { icon: ShieldCheck, title: "Expert Guidance", text: "Practical solutions tailored to your organization’s needs." },
// //   { icon: Users, title: "Experienced Team", text: "Skilled consultants and trainers with real-world experience." },
// //   { icon: Target, title: "Results Driven", text: "Focus on measurable improvement and compliance." },
// //   { icon: Handshake, title: "Long-Term Support", text: "We’re with you at every step of your journey." }
// // ];

// // export default function Home({ onQuote }) {
// //   return (
// //     <>
// //       <section className="relative overflow-hidden bg-white">
// //         <div className="container-ja grid min-h-[520px] items-center lg:grid-cols-[.9fr_1.1fr]">
// //           <div className="relative z-10 py-16 lg:pr-8">
// //             <div className="eyebrow">ISO Consultancy & Training</div>
// //             <h1 className="mt-4 max-w-xl text-4xl font-extrabold leading-[1.08] text-ja-dark md:text-5xl">
// //               Build Stronger Systems.<br />
// //               Achieve <span className="text-ja-red">Greater Results.</span>
// //             </h1>
// //             <p className="mt-5 max-w-lg text-sm leading-6 text-gray-500">
// //               JA provides professional ISO consultancy and training services to help organizations improve their management systems, processes and performance.
// //             </p>
// //             <div className="mt-7 flex flex-wrap gap-3">
// //               <Link to="/iso-standards" className="btn-red">Explore ISO Standards <ArrowRight size={16} /></Link>
// //               <button onClick={() => onQuote()} className="btn-outline">Get a Quote</button>
// //             </div>
// //           </div>

// //           <div className="relative min-h-[390px] overflow-hidden lg:min-h-[520px]">
// //             <img
// //               className="absolute inset-0 h-full w-full object-cover"
// //               src="https://images.unsplash.com/photo-1581091870620-fd1d2d4d1a9a?auto=format&fit=crop&w=1400&q=85"
// //               alt="Professional working in an industrial environment"
// //             />
// //             <div className="absolute inset-0 bg-gradient-to-r from-white via-white/20 to-transparent" />
// //             <div className="absolute bottom-0 right-0 h-full w-24 bg-gradient-to-l from-ja-red to-transparent opacity-90" />
// //             <div className="absolute right-8 top-12 grid grid-cols-2 gap-3 text-white md:right-14">
// //               {["QUALITY", "ENVIRONMENT", "SAFETY", "SECURITY"].map((item) => (
// //                 <div key={item} className="flex h-20 w-24 flex-col items-center justify-center rounded-xl border border-white/70 bg-black/20 text-center backdrop-blur-sm">
// //                   <ShieldCheck size={25} />
// //                   <span className="mt-1 text-[9px] font-bold">{item}</span>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       <section className="section border-y border-gray-100">
// //         <div className="container-ja grid gap-10 lg:grid-cols-[290px_1fr]">
// //           <div>
// //             <SectionHeading
// //               eyebrow="ISO Standards"
// //               title="Global Standards for a Stronger Tomorrow"
// //               redWord="Stronger Tomorrow"
// //               text="We support a wide range of ISO and industry-specific standards to help you achieve compliance, improve performance, and build long-term resilience."
// //             />
// //             <Link to="/iso-standards" className="btn-red mt-6">View All ISO Standards <ArrowRight size={16} /></Link>
// //           </div>

// //           <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
// //             {isoStandards.map((iso) => (
// //               <ISOCard key={iso.code} iso={iso} onQuote={onQuote} />
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       <section className="bg-gray-50 py-12">
// //         <div className="container-ja grid gap-7 md:grid-cols-[220px_1fr]">
// //           <SectionHeading eyebrow="Why Choose JA" title="Your Trusted ISO Partner" redWord="Trusted ISO Partner" />
// //           <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
// //             {why.map(({ icon: Icon, title, text }) => (
// //               <div key={title} className="border-l border-gray-200 pl-5">
// //                 <Icon className="text-ja-red" size={30} />
// //                 <h3 className="mt-3 text-sm font-bold text-ja-dark">{title}</h3>
// //                 <p className="mt-1 text-xs leading-5 text-gray-500">{text}</p>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       <section className="section">
// //         <div className="container-ja grid gap-8 lg:grid-cols-[290px_1fr]">
// //           <div>
// //             <SectionHeading
// //               eyebrow="Our Services"
// //               title="Consultancy & Training for Lasting Impact"
// //               redWord="Lasting Impact"
// //               text="From initial assessment to full implementation, we provide end-to-end support for your management system needs."
// //             />
// //             <Link to="/services" className="btn-red mt-6">Explore Our Services <ArrowRight size={16} /></Link>
// //           </div>

// //           <div className="grid gap-5 md:grid-cols-2">
// //             <ServiceImageCard
// //               image="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1000&q=80"
// //               title="ISO Consultancy"
// //               text="Gap assessments, system development, internal audit support and more."
// //             />
// //             <ServiceImageCard
// //               image="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1000&q=80"
// //               title="Training Services"
// //               text="ISO awareness, internal auditor training, customized corporate training and more."
// //             />
// //           </div>
// //         </div>
// //       </section>
// //     </>
// //   );
// // }

// // function ServiceImageCard({ image, title, text }) {
// //   return (
// //     <div className="image-card relative h-[260px] overflow-hidden rounded-lg">
// //       <img src={image} alt={title} className="card-image absolute inset-0 h-full w-full object-cover" />
// //       <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
// //       <div className="absolute bottom-0 left-0 right-0 p-5">
// //         <div className="rounded-lg bg-white/95 p-4 shadow-soft">
// //           <h3 className="font-bold text-ja-dark">{title}</h3>
// //           <p className="mt-1 text-xs leading-5 text-gray-500">{text}</p>
// //           <Link to="/services" className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-ja-red">
// //             Learn More <ArrowRight size={13} />
// //           </Link>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }
// import { ArrowRight, ShieldCheck, Users, Target, Handshake } from "lucide-react";
// import { Link } from "react-router-dom";
// import SectionHeading from "../components/SectionHeading";
// import ISOCard from "../components/ISOCard";
// import Testimonials from "../components/Testimonials"; // 1. Import your new Testimonials component
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

//       {/* 2. Add the Testimonials section here */}
//       <Testimonials />
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

import { Link } from 'react-router-dom';
import { ArrowRight, Check, ShieldCheck } from 'lucide-react';
import heroImg from '../assets/hero.png'; // swap for a consulting/training photo when ready
import Seo from '../components/Seo';
import SectionHeading from '../components/SectionHeading';
import ISOCard from '../components/ISOCard';
import Testimonials from '../components/Testimonials';
import CtaBanner from '../components/CtaBanner';
import ImageSlot from '../components/ImageSlot';
import { Reveal, CountUp } from '../components/Motion';
import { ReasonCards, IndustryCards } from '../components/Blocks';
import { useQuote } from '../components/QuoteModal';
import { isoStandards } from '../data/isoStandards';
import { stats, services, activities, gallery } from '../data/siteData';

const trust = ['ISO Experts', 'Training Specialists', 'Certification Readiness', 'End-to-End Support'];

export default function Home() {
  const { openQuote } = useQuote();

  return (
    <>
      <Seo
        description="Professional ISO consultancy and training services that help organizations improve performance, achieve compliance, and drive continual improvement."
      />

      {/* 1. HERO */}
      <section id="home" className="relative overflow-hidden bg-white" aria-labelledby="hero-title">
        <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-slate-50 lg:block" aria-hidden="true" />
        <div className="container-x relative grid items-center gap-14 py-16 md:py-24 lg:grid-cols-2">
          <div>
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand">
              <span className="h-px w-8 bg-current" aria-hidden="true" />
              ISO Consultancy &amp; Training
            </p>
            <h1 id="hero-title" className="mt-5 text-4xl font-bold leading-[1.1] sm:text-5xl lg:text-6xl">
              Build Stronger Systems. <span className="text-brand">Achieve Greater Results.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
              Professional ISO consultancy and training services that help organizations improve performance,
              achieve compliance, and drive continual improvement.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <button type="button" onClick={() => openQuote()} className="btn-primary px-8">
                Get a Quote
              </button>
              <Link to="/iso-standards" className="btn-outline px-8">
                Explore ISO Standards <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>

            <ul className="mt-10 grid gap-3 sm:grid-cols-2">
              {trust.map((t) => (
                <li key={t} className="flex items-center gap-3 text-sm font-semibold">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand text-white">
                    <Check className="h-3.5 w-3.5" strokeWidth={3} aria-hidden="true" />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="absolute -bottom-4 -left-4 h-full w-full rounded-xl border-2 border-brand/30" aria-hidden="true" />
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-slate-100 shadow-card-hover">
              <img src={heroImg} alt="ISO consultants collaborating on a management system" className="h-full w-full object-cover" />
            </div>
            <div className="absolute -bottom-6 right-4 flex items-center gap-3 rounded-lg bg-white px-5 py-4 shadow-card-hover sm:right-8">
              <span className="flex h-10 w-10 items-center justify-center rounded-md bg-brand text-white">
                <ShieldCheck className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="text-sm">
                <span className="block font-semibold">Audit-Ready Systems</span>
                <span className="block text-ink-soft">Built for certification</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ABOUT PREVIEW */}
      <section id="about" className="section bg-white" aria-labelledby="about-title">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <div className="aspect-[4/3] overflow-hidden rounded-xl shadow-card">
              <ImageSlot alt="JA Consultancy team in a client workshop" label="Add team / workshop photo" />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <p className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand">
              <span className="h-px w-8 bg-current" aria-hidden="true" /> About JA Consultancy
            </p>
            <h2 id="about-title" className="text-3xl font-bold leading-tight sm:text-4xl">
              Helping Organizations Build Effective Management Systems
            </h2>
            <p className="mt-5 leading-relaxed text-ink-soft">
              JA Consultancy &amp; Training partners with organizations to design, implement and sustain ISO management
              systems that genuinely work. We combine technical expertise with a practical, people-first approach —
              so your system supports performance, not paperwork.
            </p>
            <ul className="mt-6 space-y-3">
              {['Right-sized systems tailored to your operations', 'Hands-on training that builds internal capability', 'Support from first gap assessment to certification'].map((p) => (
                <li key={p} className="flex gap-3 text-sm">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" /> {p}
                </li>
              ))}
            </ul>
            <Link to="/about" className="btn-primary mt-8">
              Learn More <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* 3. ISO STANDARDS */}
      <section id="iso-standards" className="section bg-slate-50" aria-labelledby="iso-title">
        <div className="container-x">
          <SectionHeading
            id="iso-title"
            eyebrow="ISO Standards"
            title="Standards We Help You Implement"
            subtitle="Internationally recognised frameworks that strengthen quality, safety, security and resilience."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {isoStandards.map((s, i) => (
              <Reveal key={s.id} delay={i * 70} className="h-full">
                <ISOCard standard={s} />
              </Reveal>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/iso-standards" className="btn-primary px-8">
              View All Standards <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. STATISTICS */}
      <section className="bg-ink py-20 text-white" aria-label="Company statistics">
        <div className="container-x">
          <dl className="grid grid-cols-2 gap-y-12 lg:grid-cols-4">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`px-4 text-center ${i > 0 ? 'lg:border-l lg:border-white/10' : ''}`}
              >
                <dt className="order-2 mt-3 text-sm font-medium uppercase tracking-widest text-slate-300">{s.label}</dt>
                <dd className="font-serif text-5xl font-bold text-white sm:text-6xl">
                  <CountUp end={s.value} suffix={s.suffix} />
                  <span className="mx-auto mt-4 block h-1 w-10 bg-brand" aria-hidden="true" />
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* 5. SERVICES */}
      <section id="services" className="section bg-white" aria-labelledby="services-title">
        <div className="container-x">
          <SectionHeading
            id="services-title"
            eyebrow="Our Services"
            title="Complete Support Across Your ISO Journey"
            subtitle="From the first gap assessment to certification and beyond, we provide the expertise at every step."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <Reveal key={s.title} delay={i * 60} className="h-full">
                  <article className="card group h-full p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-md bg-brand-light text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <h3 className="mt-5 text-lg">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.desc}</p>
                  </article>
                </Reveal>
              );
            })}
            <Reveal delay={7 * 60} className="h-full">
              <article className="flex h-full flex-col justify-between rounded-xl bg-ink p-6 text-white shadow-card">
                <div>
                  <h3 className="text-lg text-white">Not sure where to start?</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">
                    Talk to a consultant about the right standard and approach for your organization.
                  </p>
                </div>
                <button type="button" onClick={() => openQuote()} className="btn-primary mt-6">
                  Get a Quote
                </button>
              </article>
            </Reveal>
          </div>
          <div className="mt-10 text-center">
            <Link to="/services" className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:underline">
              See service details <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. WHY CHOOSE JA */}
      <section id="why-ja" className="section bg-slate-50" aria-labelledby="why-title">
        <div className="container-x">
          <SectionHeading
            id="why-title"
            eyebrow="Why Choose JA"
            title="A Partner You Can Rely On"
            subtitle="We pair technical depth with a practical mindset to deliver systems that last."
          />
          <ReasonCards />
        </div>
      </section>

      {/* 7. TESTIMONIALS */}
      <Testimonials />

      {/* 8. RECENT ACTIVITIES */}
      <section id="activities" className="section bg-slate-50" aria-labelledby="activities-title">
        <div className="container-x">
          <SectionHeading
            id="activities-title"
            eyebrow="Recent Activities"
            title="Recent Client Engagements"
            subtitle="A snapshot of the training sessions, assessments, audits and certification projects we’ve delivered."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {activities.map((a, i) => (
              <Reveal key={a.title} delay={i * 80} className="h-full">
                <article className="card flex h-full flex-col overflow-hidden">
                  <div className="aspect-[16/10] overflow-hidden">
                    <ImageSlot src={a.image} alt={a.title} label={a.tag} />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center justify-between text-xs">
                      <span className="rounded-full bg-brand-light px-3 py-1 font-semibold text-brand">{a.tag}</span>
                      <time className="text-ink-soft">{a.date}</time>
                    </div>
                    <h3 className="mt-4 text-lg leading-snug">{a.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">{a.desc}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 9. TRAINING GALLERY */}
      <section id="gallery" className="section bg-white" aria-labelledby="gallery-title">
        <div className="container-x">
          <SectionHeading
            id="gallery-title"
            eyebrow="Gallery"
            title="Inside Our Workshops, Audits and Meetings"
            subtitle="Moments from training sessions, on-site audits and client collaboration."
          />
          <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
            {gallery.map((g) => (
              <figure key={g.label} className="group relative break-inside-avoid overflow-hidden rounded-xl">
                <div className={`${g.ratio} overflow-hidden`}>
                  <ImageSlot
                    src={g.image}
                    alt={g.label}
                    label={g.label}
                    imgClassName="transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <figcaption className="absolute inset-x-0 bottom-0 bg-ink/75 px-4 py-2.5 text-sm font-medium text-white">
                  {g.label}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* 10. INDUSTRIES */}
      <section id="industries" className="section bg-slate-50" aria-labelledby="industries-title">
        <div className="container-x">
          <SectionHeading
            id="industries-title"
            eyebrow="Industries Served"
            title="Experience Across Sectors"
            subtitle="Our consultants adapt ISO requirements to the realities of your industry."
          />
          <IndustryCards />
        </div>
      </section>

      {/* 11. CONTACT CTA */}
      <CtaBanner />
    </>
  );
}