import { reasons, industries } from '../data/siteData';
import { Reveal } from './Motion';

export function ReasonCards() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {reasons.map((r, i) => {
        const Icon = r.icon;
        return (
          <Reveal key={r.title} delay={i * 80} className="h-full">
            <article className="card group relative h-full overflow-hidden p-7">
              <span
                className="absolute right-5 top-3 font-serif text-5xl font-bold text-slate-100"
                aria-hidden="true"
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="relative flex h-12 w-12 items-center justify-center rounded-md bg-brand-light text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="relative mt-5 text-lg">{r.title}</h3>
              <p className="relative mt-2 text-sm leading-relaxed text-ink-soft">{r.desc}</p>
              <span
                className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-brand transition-transform duration-300 group-hover:scale-x-100"
                aria-hidden="true"
              />
            </article>
          </Reveal>
        );
      })}
    </div>
  );
}

export function IndustryCards() {
  return (
    <ul className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {industries.map(({ name, icon: Icon }, i) => (
        <li key={name}>
          <Reveal delay={i * 50} className="h-full">
            <div className="card flex h-full flex-col items-center gap-3 p-6 text-center hover:border-brand">
              <Icon className="h-8 w-8 text-brand" aria-hidden="true" />
              <span className="text-sm font-semibold">{name}</span>
            </div>
          </Reveal>
        </li>
      ))}
    </ul>
  );
}