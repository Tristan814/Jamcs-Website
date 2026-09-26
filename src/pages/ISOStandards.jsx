import { useState } from "react";
import SectionHeading from "../components/SectionHeading";
import ISOCard from "../components/ISOCard";
import { isoStandards } from "../data/isoStandards";

export default function ISOStandards({ onQuote }) {
  return (
    <>
      <section className="bg-ja-dark py-20 text-white">
        <div className="container-ja">
          <div className="eyebrow">ISO Standards</div>
          <h1 className="mt-4 text-4xl font-extrabold md:text-5xl">Standards That Strengthen Organizations</h1>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-gray-300">
            Explore the ISO and industry standards supported by JA Management Consultancy Services.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-ja">
          <SectionHeading
            eyebrow="Our Standards"
            title="ISO Standards We Support"
            text="Select a standard to discuss consultancy, implementation, internal audit, or training requirements."
            centered
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {isoStandards.map((iso) => (
              <ISOCard key={iso.code} iso={iso} onQuote={onQuote} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
