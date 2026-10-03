// import { useState } from "react";
// import SectionHeading from "../components/SectionHeading";
// import ISOCard from "../components/ISOCard";
// import { isoStandards } from "../data/isoStandards";

// export default function ISOStandards({ onQuote }) {
//   return (
//     <>
//       <section className="bg-ja-dark py-20 text-white">
//         <div className="container-ja">
//           <div className="eyebrow">ISO Standards</div>
//           <h1 className="mt-4 text-4xl font-extrabold md:text-5xl">Standards That Strengthen Organizations</h1>
//           <p className="mt-4 max-w-2xl text-sm leading-6 text-gray-300">
//             Explore the ISO and industry standards supported by JA Management Consultancy Services.
//           </p>
//         </div>
//       </section>

//       <section className="section">
//         <div className="container-ja">
//           <SectionHeading
//             eyebrow="Our Standards"
//             title="ISO Standards We Support"
//             text="Select a standard to discuss consultancy, implementation, internal audit, or training requirements."
//             centered
//           />

//           <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
//             {isoStandards.map((iso) => (
//               <ISOCard key={iso.code} iso={iso} onQuote={onQuote} />
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }


//CLAUDE AI

import Seo from '../components/Seo';
import { PageHeader } from '../components/SectionHeading';
import ISOCard from '../components/ISOCard';
import CtaBanner from '../components/CtaBanner';
import { Reveal } from '../components/Motion';
import { isoStandards } from '../data/isoStandards';

export default function ISOStandards() {
  return (
    <>
      <Seo
        title="ISO Standards"
        description="Explore the ISO standards we support: ISO 9001, 14001, 45001, 27001, 22301 and 20000-1 — with benefits and implementation support."
      />
      <PageHeader
        eyebrow="ISO Standards"
        title="Standards We Support"
        subtitle="Choose the framework that fits your goals. We guide you from first assessment through to certification readiness."
      />

      <section className="section bg-white" aria-label="Supported ISO standards">
        <div className="container-x grid gap-8 md:grid-cols-2">
          {isoStandards.map((s, i) => (
            <Reveal key={s.id} delay={(i % 2) * 100} className="h-full">
              <ISOCard standard={s} detailed />
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBanner
        title="Not Sure Which Standard Fits You?"
        subtitle="Tell us about your organization and goals — we’ll recommend the right path."
      />
    </>
  );
}