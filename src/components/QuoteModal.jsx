// import { useEffect, useState } from "react";
// import { X, CheckCircle2 } from "lucide-react";
// import { isoStandards } from "../data/isoStandards";

// export default function QuoteModal({ open, onClose, iso = "" }) {
//   const [submitted, setSubmitted] = useState(false);

//   useEffect(() => {
//     if (open) setSubmitted(false);
//   }, [open]);

//   if (!open) return null;

//   function submit(e) {
//     e.preventDefault();
//     setSubmitted(true);
//   }

//   return (
//     <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4">
//       <div className="relative max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-xl bg-white p-6 shadow-2xl">
//         <button
//           onClick={onClose}
//           className="absolute right-4 top-4 rounded-full p-2 text-gray-500 hover:bg-gray-100"
//         >
//           <X size={20} />
//         </button>

//         {!submitted ? (
//           <>
//             <div className="mb-6">
//               <div className="eyebrow">Get a Quote</div>
//               <h2 className="mt-2 text-2xl font-extrabold text-ja-dark">Tell us about your requirements</h2>
//               <p className="mt-2 text-sm text-gray-500">We’ll use the details below to prepare an initial consultation.</p>
//             </div>

//             <form onSubmit={submit} className="grid gap-4 md:grid-cols-2">
//               <input required className="rounded-md border border-gray-200 px-3 py-3 text-sm outline-none focus:border-ja-red" placeholder="Full Name" />
//               <input required type="email" className="rounded-md border border-gray-200 px-3 py-3 text-sm outline-none focus:border-ja-red" placeholder="Email Address" />
//               <input className="rounded-md border border-gray-200 px-3 py-3 text-sm outline-none focus:border-ja-red" placeholder="Phone Number" />
//               <input className="rounded-md border border-gray-200 px-3 py-3 text-sm outline-none focus:border-ja-red" placeholder="Company Name" />

//               <select defaultValue={iso} className="rounded-md border border-gray-200 px-3 py-3 text-sm outline-none focus:border-ja-red">
//                 <option value="">Select ISO Standard</option>
//                 {isoStandards.map((item) => <option key={item.code}>{item.code}</option>)}
//               </select>

//               <select className="rounded-md border border-gray-200 px-3 py-3 text-sm outline-none focus:border-ja-red">
//                 <option>Consultancy</option>
//                 <option>Training</option>
//               </select>

//               <textarea
//                 className="min-h-[120px] rounded-md border border-gray-200 px-3 py-3 text-sm outline-none focus:border-ja-red md:col-span-2"
//                 placeholder="Tell us about your requirements..."
//               />

//               <button className="btn-red md:col-span-2">Submit Request</button>
//             </form>
//           </>
//         ) : (
//           <div className="py-12 text-center">
//             <CheckCircle2 className="mx-auto text-green-600" size={54} />
//             <h2 className="mt-5 text-2xl font-extrabold text-ja-dark">Thank you!</h2>
//             <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-gray-500">
//               Your request has been received. Connect this form to your email or CRM backend to process real leads.
//             </p>
//             <button onClick={onClose} className="btn-red mt-6">Close</button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }


//CLAUDE AI

import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react';
import { X, CheckCircle2 } from 'lucide-react';
import { isoStandards } from '../data/isoStandards';

const QuoteContext = createContext({ openQuote: () => {} });
export const useQuote = () => useContext(QuoteContext);

const interests = [...isoStandards.map((s) => s.code), 'ISO Training', 'Not sure yet'];

const inputCls =
  'mt-1.5 w-full rounded-md border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-ink placeholder:text-slate-400 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20';

function Field({ label, id, required, children }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium">
        {label} {required && <span className="text-brand" aria-hidden="true">*</span>}
      </label>
      {children}
    </div>
  );
}

/* Reusable form — used in the modal and on the Contact page */
export function InquiryForm({ preset = '', idPrefix = 'inq', onDone, submitLabel = 'Send Request' }) {
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    setStatus('sending');
    try {
      // TODO: connect to your backend / email service (EmailJS, Formspree, your own API…)
      // await fetch('/api/inquiry', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(data),
      // });
      console.log('Inquiry payload:', data);
      await new Promise((r) => setTimeout(r, 900)); // simulate request
      form.reset();
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div role="status" className="py-8 text-center">
        <CheckCircle2 className="mx-auto h-14 w-14 text-brand" aria-hidden="true" />
        <h3 className="mt-4 text-xl">Thank you — we’ve received your request.</h3>
        <p className="mt-2 text-sm text-ink-soft">One of our consultants will get back to you shortly.</p>
        <button
          type="button"
          className="btn-outline mt-6"
          onClick={() => (onDone ? onDone() : setStatus('idle'))}
        >
          {onDone ? 'Close' : 'Send another message'}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" id={`${idPrefix}-name`} required>
          <input id={`${idPrefix}-name`} name="name" type="text" required autoComplete="name" className={inputCls} />
        </Field>
        <Field label="Company / Organization" id={`${idPrefix}-company`} required>
          <input id={`${idPrefix}-company`} name="company" type="text" required autoComplete="organization" className={inputCls} />
        </Field>
        <Field label="Email address" id={`${idPrefix}-email`} required>
          <input id={`${idPrefix}-email`} name="email" type="email" required autoComplete="email" className={inputCls} />
        </Field>
        <Field label="Phone number" id={`${idPrefix}-phone`}>
          <input id={`${idPrefix}-phone`} name="phone" type="tel" autoComplete="tel" className={inputCls} />
        </Field>
      </div>

      <Field label="I’m interested in" id={`${idPrefix}-interest`} required>
        <select id={`${idPrefix}-interest`} name="interest" required defaultValue={preset} className={inputCls}>
          <option value="" disabled>Select a standard or service…</option>
          {interests.map((i) => (
            <option key={i} value={i}>{i}</option>
          ))}
        </select>
      </Field>

      <Field label="How can we help?" id={`${idPrefix}-message`} required>
        <textarea
          id={`${idPrefix}-message`}
          name="message"
          rows={4}
          required
          placeholder="Tell us about your organization, goals and timeline…"
          className={inputCls}
        />
      </Field>

      {status === 'error' && (
        <p role="alert" className="rounded-md bg-red-50 px-4 py-3 text-sm text-red-700">
          Something went wrong. Please try again or email us directly.
        </p>
      )}

      <button type="submit" disabled={status === 'sending'} className="btn-primary w-full disabled:opacity-60">
        {status === 'sending' ? 'Sending…' : submitLabel}
      </button>
    </form>
  );
}

export function QuoteProvider({ children }) {
  const [open, setOpen] = useState(false);
  const [preset, setPreset] = useState('');
  const dialogRef = useRef(null);

  const openQuote = useCallback((p = '') => {
    setPreset(typeof p === 'string' ? p : '');
    setOpen(true);
  }, []);

  useEffect(() => {
    if (!open) return;
    const previous = document.activeElement;
    document.body.style.overflow = 'hidden';
    dialogRef.current?.focus();

    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
      if (e.key === 'Tab' && dialogRef.current) {
        const f = dialogRef.current.querySelectorAll(
          'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (!f.length) return;
        const first = f[0];
        const last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
      previous?.focus?.();
    };
  }, [open]);

  return (
    <QuoteContext.Provider value={{ openQuote }}>
      {children}
      {open && (
        <div
          className="fixed inset-0 z-[90] flex items-end justify-center bg-ink/60 sm:items-center sm:p-6"
          onMouseDown={(e) => e.target === e.currentTarget && setOpen(false)}
        >
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="quote-title"
            tabIndex={-1}
            className="max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-t-2xl bg-white p-6 shadow-2xl outline-none sm:rounded-2xl sm:p-8"
          >
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <h2 id="quote-title" className="text-2xl font-bold">Request a Free Quote</h2>
                <p className="mt-1 text-sm text-ink-soft">Tell us what you need and we’ll prepare a tailored proposal.</p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close dialog"
                className="rounded-md p-2 text-ink-soft hover:bg-slate-100 hover:text-ink"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <InquiryForm
              key={preset}
              preset={preset}
              idPrefix="quote"
              submitLabel="Request Quote"
              onDone={() => setOpen(false)}
            />
          </div>
        </div>
      )}
    </QuoteContext.Provider>
  );
}