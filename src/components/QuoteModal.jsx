import { useEffect, useState } from "react";
import { X, CheckCircle2 } from "lucide-react";
import { isoStandards } from "../data/isoStandards";

export default function QuoteModal({ open, onClose, iso = "" }) {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (open) setSubmitted(false);
  }, [open]);

  if (!open) return null;

  function submit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4">
      <div className="relative max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-xl bg-white p-6 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-2 text-gray-500 hover:bg-gray-100"
        >
          <X size={20} />
        </button>

        {!submitted ? (
          <>
            <div className="mb-6">
              <div className="eyebrow">Get a Quote</div>
              <h2 className="mt-2 text-2xl font-extrabold text-ja-dark">Tell us about your requirements</h2>
              <p className="mt-2 text-sm text-gray-500">We’ll use the details below to prepare an initial consultation.</p>
            </div>

            <form onSubmit={submit} className="grid gap-4 md:grid-cols-2">
              <input required className="rounded-md border border-gray-200 px-3 py-3 text-sm outline-none focus:border-ja-red" placeholder="Full Name" />
              <input required type="email" className="rounded-md border border-gray-200 px-3 py-3 text-sm outline-none focus:border-ja-red" placeholder="Email Address" />
              <input className="rounded-md border border-gray-200 px-3 py-3 text-sm outline-none focus:border-ja-red" placeholder="Phone Number" />
              <input className="rounded-md border border-gray-200 px-3 py-3 text-sm outline-none focus:border-ja-red" placeholder="Company Name" />

              <select defaultValue={iso} className="rounded-md border border-gray-200 px-3 py-3 text-sm outline-none focus:border-ja-red">
                <option value="">Select ISO Standard</option>
                {isoStandards.map((item) => <option key={item.code}>{item.code}</option>)}
              </select>

              <select className="rounded-md border border-gray-200 px-3 py-3 text-sm outline-none focus:border-ja-red">
                <option>Consultancy</option>
                <option>Training</option>
              </select>

              <textarea
                className="min-h-[120px] rounded-md border border-gray-200 px-3 py-3 text-sm outline-none focus:border-ja-red md:col-span-2"
                placeholder="Tell us about your requirements..."
              />

              <button className="btn-red md:col-span-2">Submit Request</button>
            </form>
          </>
        ) : (
          <div className="py-12 text-center">
            <CheckCircle2 className="mx-auto text-green-600" size={54} />
            <h2 className="mt-5 text-2xl font-extrabold text-ja-dark">Thank you!</h2>
            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-gray-500">
              Your request has been received. Connect this form to your email or CRM backend to process real leads.
            </p>
            <button onClick={onClose} className="btn-red mt-6">Close</button>
          </div>
        )}
      </div>
    </div>
  );
}
