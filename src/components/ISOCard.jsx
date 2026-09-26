import { ArrowUpRight } from "lucide-react";

export default function ISOCard({ iso, onQuote }) {
  return (
    <article className="image-card group relative h-[150px] overflow-hidden rounded-md">
      <img
        src={iso.image}
        alt={iso.title}
        className="card-image absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/5" />
      <div className="absolute inset-x-0 bottom-0 p-4">
        <div className="pr-10">
          <h3 className="text-[13px] font-bold text-white">{iso.code}</h3>
          <p className="mt-1 text-[10px] text-gray-200">{iso.title}</p>
        </div>
        <button
          onClick={() => onQuote(iso.code)}
          className="absolute bottom-4 right-4 flex h-6 w-6 items-center justify-center rounded-full bg-ja-red text-white"
          aria-label={`Get quote for ${iso.code}`}
        >
          <ArrowUpRight size={13} />
        </button>
      </div>
    </article>
  );
}
