
import { Link } from 'react-router-dom';

export default function Logo({ light = false }) {
  return (
    <Link to="/" className="flex items-center gap-3" aria-label="JA Consultancy & Training – Home">
      <span className="flex h-11 w-11 items-center justify-center rounded-md bg-brand font-serif text-lg font-bold text-white" aria-hidden="true">
        JA
      </span>
      <span className="leading-tight">
        <span className={`block font-serif text-lg font-bold ${light ? 'text-white' : 'text-ink'}`}>
          JA Consultancy
        </span>
        <span className={`block text-[11px] font-semibold uppercase tracking-[0.2em] ${light ? 'text-slate-400' : 'text-ink-soft'}`}>
          &amp; Training
        </span>
      </span>
    </Link>
  );
}