// import React from 'react';
// import { testimonialsData } from '../data/testimonials';
// import SectionHeading from './SectionHeading'; // Reusing your existing component

// export default function Testimonials() {
//   return (
//     <section className="py-16 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <SectionHeading category="TESTIMONIALS" title="What Our Clients Say" />
        
//         <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
//           {testimonialsData.map((item) => (
//             <div key={item.id} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col justify-between">
//               <p className="text-gray-600 italic">"{item.content}"</p>
//               <div className="mt-6 flex items-center justify-between border-t pt-4">
//                 <div>
//                   <h4 className="font-bold text-gray-900">{item.name}</h4>
//                   <p className="text-sm text-gray-500">{item.role}, <span className="text-red-600">{item.company}</span></p>
//                 </div>
//                 {/* Optional rating stars or company logo */}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

//CLAUDE AI

import { Star, Quote } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { Reveal } from './Motion';
import { testimonials } from '../data/testimonials';

export default function Testimonials() {
  return (
    <section id="testimonials" className="section bg-white" aria-labelledby="testimonials-title">
      <div className="container-x">
        <SectionHeading
          id="testimonials-title"
          eyebrow="Testimonials"
          title="Trusted by Teams That Take Quality Seriously"
          subtitle="Hear from the organizations we’ve supported on their ISO journey."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 100} className="h-full">
              <figure className="card relative flex h-full flex-col p-8">
                <Quote className="absolute right-6 top-6 h-10 w-10 text-brand-light" aria-hidden="true" />
                <div className="flex gap-1" role="img" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, n) => (
                    <Star key={n} className="h-5 w-5 fill-brand text-brand" aria-hidden="true" />
                  ))}
                </div>
                <blockquote className="mt-5 flex-1 text-base leading-relaxed text-ink">“{t.quote}”</blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-5">
                  <span
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-brand text-sm font-bold text-white"
                    aria-hidden="true"
                  >
                    {t.name.split(' ').map((p) => p[0]).join('')}
                  </span>
                  <span className="text-sm">
                    <span className="block font-semibold">{t.name}</span>
                    <span className="block text-ink-soft">{t.designation}, {t.company}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}