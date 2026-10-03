// export default function SectionHeading({ eyebrow, title, redWord, text, centered = false }) {
//   const parts = redWord ? title.split(redWord) : [title];

//   return (
//     <div className={centered ? "mx-auto max-w-2xl text-center" : "max-w-xl"}>
//       <div className={`eyebrow ${centered ? "justify-center" : ""}`}>{eyebrow}</div>
//       <h2 className="mt-3 text-3xl font-extrabold leading-tight text-ja-dark md:text-[36px]">
//         {redWord ? (
//           <>
//             {parts[0]}
//             <span className="text-ja-red">{redWord}</span>
//             {parts[1]}
//           </>
//         ) : title}
//       </h2>
//       {text && <p className="mt-4 text-sm leading-6 text-gray-500">{text}</p>}
//     </div>
//   );
// }


//CLAUDE AI

export default function SectionHeading({ eyebrow, title, subtitle, align = 'center', light = false, id }) {
  const center = align === 'center';
  return (
    <div className={`mb-12 max-w-3xl ${center ? 'mx-auto text-center' : ''}`}>
      {eyebrow && (
        <p
          className={`mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] ${
            light ? 'text-red-300' : 'text-brand'
          }`}
        >
          <span className="h-px w-8 bg-current" aria-hidden="true" />
          {eyebrow}
        </p>
      )}
      <h2 id={id} className={`text-3xl font-bold leading-tight sm:text-4xl ${light ? 'text-white' : ''}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base leading-relaxed sm:text-lg ${light ? 'text-slate-300' : 'text-ink-soft'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

/* Header band for inner pages */
export function PageHeader({ eyebrow, title, subtitle }) {
  return (
    <section className="border-b border-slate-100 bg-slate-50">
      <div className="container-x py-16 md:py-20">
        {eyebrow && (
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">{eyebrow}</p>
        )}
        <h1 className="mt-3 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">{title}</h1>
        {subtitle && <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-soft">{subtitle}</p>}
      </div>
    </section>
  );
}