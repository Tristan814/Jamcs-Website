// import { ArrowUpRight } from "lucide-react";

// export default function ISOCard({ iso, onQuote }) {
//   return (
//     <article className="image-card group relative h-[150px] overflow-hidden rounded-md">
//       <img
//         src={iso.image}
//         alt={iso.title}
//         className="card-image absolute inset-0 h-full w-full object-cover"
//       />
//       <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/5" />
//       <div className="absolute inset-x-0 bottom-0 p-4">
//         <div className="pr-10">
//           <h3 className="text-[13px] font-bold text-white">{iso.code}</h3>
//           <p className="mt-1 text-[10px] text-gray-200">{iso.title}</p>
//         </div>
//         <button
//           onClick={() => onQuote(iso.code)}
//           className="absolute bottom-4 right-4 flex h-6 w-6 items-center justify-center rounded-full bg-ja-red text-white"
//           aria-label={`Get quote for ${iso.code}`}
//         >
//           <ArrowUpRight size={13} />
//         </button>
//       </div>
//     </article>
//   );
// }


//CLAUDE AI

import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { useQuote } from './QuoteModal';

export default function ISOCard({ standard, detailed = false }) {
  const { openQuote } = useQuote();
  const Icon = standard.icon;

  if (!detailed) {
    return (
      <article className="card group flex h-full flex-col p-7">
        <div className="flex h-12 w-12 items-center justify-center rounded-md bg-brand-light text-brand transition-colors group-hover:bg-brand group-hover:text-white">
          <Icon className="h-6 w-6" aria-hidden="true" />
        </div>
        <p className="mt-5 text-xs font-semibold uppercase tracking-widest text-brand">{standard.code}</p>
        <h3 className="mt-1 text-xl">{standard.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">{standard.short}</p>
        <Link
          to={`/iso-standards#${standard.id}`}
          className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:gap-2.5"
          aria-label={`Learn more about ${standard.code}`}
        >
          Learn more <ArrowRight className="h-4 w-4 transition-all" aria-hidden="true" />
        </Link>
      </article>
    );
  }

  return (
    <article id={standard.id} className="card flex h-full scroll-mt-28 flex-col p-8">
      <div className="flex items-center gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-md bg-brand text-white">
          <Icon className="h-7 w-7" aria-hidden="true" />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-brand">{standard.code}</p>
          <h2 className="font-sans text-xl font-semibold">{standard.title}</h2>
        </div>
      </div>

      <p className="mt-5 text-sm leading-relaxed text-ink-soft">{standard.description}</p>

      <h3 className="mt-6 text-xs uppercase tracking-widest text-ink">Key Benefits</h3>
      <ul className="mt-3 flex-1 space-y-2.5">
        {standard.benefits.map((b) => (
          <li key={b} className="flex gap-2.5 text-sm text-ink-soft">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" /> {b}
          </li>
        ))}
      </ul>

      <button
        type="button"
        onClick={() => openQuote(standard.code)}
        aria-label={`Learn more about ${standard.code}`}
        className="btn-outline mt-7 self-start"
      >
        Learn More <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </button>
    </article>
  );
}