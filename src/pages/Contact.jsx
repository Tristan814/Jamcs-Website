import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <section className="bg-ja-dark py-20 text-white">
        <div className="container-ja">
          <div className="eyebrow">Contact Us</div>
          <h1 className="mt-4 text-4xl font-extrabold md:text-5xl">Let’s Discuss Your Requirements</h1>
        </div>
      </section>

      <section className="section">
        <div className="container-ja grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <h2 className="text-2xl font-extrabold text-ja-dark">Get in touch</h2>
            <p className="mt-3 text-sm leading-6 text-gray-500">Tell us what standard, service, or training you are considering.</p>

            <div className="mt-8 space-y-5">
              <Info icon={MapPin} title="Address" text="Business Address, Philippines" />
              <Info icon={Phone} title="Phone" text="+1 555-555-5556" />
              <Info icon={Mail} title="Email" text="tristanquino814@gmail.com" />
            </div>
          </div>

          <div className="rounded-xl border border-gray-100 p-7 shadow-soft">
            {!sent ? (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="grid gap-4 md:grid-cols-2">
                <input required className="rounded-md border border-gray-200 px-3 py-3 text-sm" placeholder="Name" />
                <input required type="email" className="rounded-md border border-gray-200 px-3 py-3 text-sm" placeholder="Email" />
                <input className="rounded-md border border-gray-200 px-3 py-3 text-sm md:col-span-2" placeholder="Company" />
                <textarea required className="min-h-[160px] rounded-md border border-gray-200 px-3 py-3 text-sm md:col-span-2" placeholder="Message" />
                <button className="btn-red md:col-span-2">Send Message <Send size={15} /></button>
              </form>
            ) : (
              <div className="py-16 text-center">
                <h2 className="text-2xl font-extrabold">Message received</h2>
                <p className="mt-2 text-sm text-gray-500">Connect this form to your preferred email service or backend.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

function Info({ icon: Icon, title, text }) {
  return (
    <div className="flex gap-4">
      <div className="rounded-lg bg-red-50 p-3 text-ja-red"><Icon size={20} /></div>
      <div>
        <h3 className="text-sm font-bold">{title}</h3>
        <p className="mt-1 text-sm text-gray-500">{text}</p>
      </div>
    </div>
  );
}
