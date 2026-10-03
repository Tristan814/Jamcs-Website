// import SectionHeading from "../components/SectionHeading";

// export default function About() {
//   return (
//     <>
//       <section className="bg-ja-dark py-20 text-white">
//         <div className="container-ja">
//           <div className="eyebrow">About JA</div>
//           <h1 className="mt-4 text-4xl font-extrabold md:text-5xl">Building Better Management Systems</h1>
//           <p className="mt-4 max-w-2xl text-sm leading-6 text-gray-300">
//             JA Management Consultancy Services supports organizations through practical ISO consultancy and professional training.
//           </p>
//         </div>
//       </section>

//       <section className="section">
//         <div className="container-ja grid gap-12 lg:grid-cols-2 lg:items-center">
//           <img
//             className="h-[400px] w-full rounded-xl object-cover"
//             src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80"
//             alt="Business team meeting"
//           />
//           <div>
//             <SectionHeading eyebrow="Our Background" title="Practical Expertise With a Client-Focused Approach" />
//             <p className="mt-5 text-sm leading-7 text-gray-500">
//               We help organizations translate management system requirements into practical processes, documented information, training, and continual improvement activities.
//             </p>
//             <div className="mt-7 grid gap-5 sm:grid-cols-2">
//               <div className="rounded-lg bg-gray-50 p-5">
//                 <h3 className="font-bold text-ja-dark">Mission</h3>
//                 <p className="mt-2 text-xs leading-5 text-gray-500">Deliver practical consultancy and training that creates useful, sustainable management systems.</p>
//               </div>
//               <div className="rounded-lg bg-gray-50 p-5">
//                 <h3 className="font-bold text-ja-dark">Vision</h3>
//                 <p className="mt-2 text-xs leading-5 text-gray-500">Be a trusted partner for organizations pursuing stronger performance and continual improvement.</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }


//CLAUDE AI

import { Target, Eye } from 'lucide-react';
import Seo from '../components/Seo';
import SectionHeading, { PageHeader } from '../components/SectionHeading';
import CtaBanner from '../components/CtaBanner';
import ImageSlot from '../components/ImageSlot';
import { Reveal } from '../components/Motion';
import { ReasonCards, IndustryCards } from '../components/Blocks';
import { values, consultants } from '../data/siteData';

export default function About() {
  return (
    <>
      <Seo
        title="About Us"
        description="Learn about JA Consultancy & Training — our mission, vision, values and the consultants who help organizations succeed with ISO."
      />
      <PageHeader
        eyebrow="About Us"
        title="Practical ISO Expertise, Delivered with Integrity"
        subtitle="We help organizations build management systems that improve performance and stand up to certification."
      />

      {/* Overview */}
      <section className="section bg-white" aria-labelledby="overview-title">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2">
          <div>
            <h2 id="overview-title" className="text-3xl font-bold sm:text-4xl">Company Overview</h2>
            <p className="mt-5 leading-relaxed text-ink-soft">
              JA Consultancy &amp; Training provides ISO consultancy and professional training to corporate and
              enterprise clients. We guide organizations through every stage — from gap assessment and documentation
              to internal audits, management review and certification readiness.
            </p>
            <p className="mt-4 leading-relaxed text-ink-soft">
              Our approach is simple: build systems that fit the way you work, develop your people so they can
              own the system, and stay beside you as your organization grows and improves.
            </p>
          </div>
          <div className="aspect-[4/3] overflow-hidden rounded-xl shadow-card">
            <ImageSlot alt="JA Consultancy office or team" label="Add company photo" />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section bg-slate-50" aria-label="Mission and vision">
        <div className="container-x grid gap-6 md:grid-cols-2">
          {[
            { icon: Target, title: 'Our Mission', text: 'To empower organizations with practical ISO consultancy and training that improves performance, strengthens compliance and builds lasting capability.' },
            { icon: Eye, title: 'Our Vision', text: 'To be the trusted partner of choice for organizations pursuing excellence through effective, sustainable management systems.' },
          ].map(({ icon: Icon, title, text }) => (
            <Reveal key={title} className="h-full">
              <article className="card h-full border-t-4 border-t-brand p-8">
                <Icon className="h-9 w-9 text-brand" aria-hidden="true" />
                <h2 className="mt-5 font-sans text-2xl font-semibold">{title}</h2>
                <p className="mt-3 leading-relaxed text-ink-soft">{text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Core values */}
      <section className="section bg-white" aria-labelledby="values-title">
        <div className="container-x">
          <SectionHeading id="values-title" eyebrow="Core Values" title="What Guides Our Work" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ title, icon: Icon, desc }, i) => (
              <Reveal key={title} delay={i * 80} className="h-full">
                <article className="card h-full p-7 text-center">
                  <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-light text-brand">
                    <Icon className="h-7 w-7" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-lg">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{desc}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="section bg-slate-50" aria-labelledby="why-about-title">
        <div className="container-x">
          <SectionHeading id="why-about-title" eyebrow="Why Choose Us" title="What Sets JA Apart" />
          <ReasonCards />
        </div>
      </section>

      {/* Consultants */}
      <section className="section bg-white" aria-labelledby="team-title">
        <div className="container-x">
          <SectionHeading
            id="team-title"
            eyebrow="Our Consultants"
            title="Meet the People Behind Your Success"
            subtitle="Experienced practitioners who have implemented, audited and trained across management systems."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {consultants.map((c, i) => (
              <Reveal key={c.name} delay={i * 100} className="h-full">
                <article className="card h-full overflow-hidden">
                  <div className="aspect-[4/5] overflow-hidden">
                    <ImageSlot src={c.image} alt={c.name} label="Add consultant photo" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg">{c.name}</h3>
                    <p className="mt-1 text-sm text-ink-soft">{c.role}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section bg-slate-50" aria-labelledby="ind-about-title">
        <div className="container-x">
          <SectionHeading id="ind-about-title" eyebrow="Industries Served" title="Experience Across Sectors" />
          <IndustryCards />
        </div>
      </section>

      <CtaBanner />
    </>
  );
}