import { Link } from 'react-router-dom';
import { useQuote } from './QuoteModal';

export default function CtaBanner({
  title = 'Ready to Start Your ISO Journey?',
  subtitle = 'Our consultants are ready to help your organization achieve compliance, improve performance, and build confidence.',
}) {
  const { openQuote } = useQuote();
  return (
    <section className="bg-brand py-20 text-white" aria-labelledby="cta-title">
      <div className="container-x text-center">
        <h2 id="cta-title" className="mx-auto max-w-3xl text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
          {title}
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-red-50">{subtitle}</p>
        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button type="button" onClick={() => openQuote()} className="btn-light px-8">
            Get a Quote
          </button>
          <Link to="/contact" className="btn-ghost-light px-8">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}