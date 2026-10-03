import { Image as ImageIcon } from 'lucide-react';

/* Renders a photo if `src` is provided, otherwise a neat placeholder.
   Parent should control size/aspect ratio (e.g. "aspect-[4/3] overflow-hidden"). */
export default function ImageSlot({ src, alt = '', label = 'Add photo', imgClassName = '' }) {
  if (src) {
    return <img src={src} alt={alt} loading="lazy" className={`h-full w-full object-cover ${imgClassName}`} />;
  }
  return (
    <div
      role="img"
      aria-label={alt || label}
      className="flex h-full w-full flex-col items-center justify-center gap-2 bg-slate-100 text-slate-400"
    >
      <ImageIcon className="h-8 w-8" aria-hidden="true" />
      <span className="px-2 text-center text-xs font-medium uppercase tracking-wider">{label}</span>
    </div>
  );
}