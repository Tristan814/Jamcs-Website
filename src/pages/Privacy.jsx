// export default function Privacy() {
//   return (
//     <>
//       <section className="bg-ja-dark py-20 text-white">
//         <div className="container-ja">
//           <div className="eyebrow">Privacy Policy</div>
//           <h1 className="mt-4 text-4xl font-extrabold">Privacy & Data Protection</h1>
//         </div>
//       </section>

//       <section className="section">
//         <div className="container-ja max-w-4xl">
//           <div className="space-y-8 text-sm leading-7 text-gray-600">
//             <div><h2 className="font-bold text-ja-dark">1. Information We Collect</h2><p>We may collect information you voluntarily submit through contact, quote, or inquiry forms.</p></div>
//             <div><h2 className="font-bold text-ja-dark">2. How We Use Information</h2><p>Information may be used to respond to inquiries, provide requested services, and communicate about relevant business matters.</p></div>
//             <div><h2 className="font-bold text-ja-dark">3. Data Security</h2><p>We take reasonable administrative and technical measures to protect submitted information.</p></div>
//             <div><h2 className="font-bold text-ja-dark">4. Third-Party Services</h2><p>Forms and analytics may use third-party providers. Configure this section to match the actual services used by the business.</p></div>
//             <div><h2 className="font-bold text-ja-dark">5. Cookies</h2><p>The website may use cookies or similar technologies where required for functionality or analytics.</p></div>
//             <div><h2 className="font-bold text-ja-dark">6. Your Rights</h2><p>Contact the organization to ask about access, correction, or other rights applicable to your personal information.</p></div>
//             <div><h2 className="font-bold text-ja-dark">7. Updates</h2><p>This policy may be updated as the website, services, and applicable requirements change.</p></div>
//             <div><h2 className="font-bold text-ja-dark">8. Contact</h2><p>For privacy questions, contact JA Management Consultancy Services using the contact information on this website.</p></div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }


//CLAUDE AI

import Seo from '../components/Seo';
import { PageHeader } from '../components/SectionHeading';
import { company } from '../data/siteData';

// NOTE: Generic template — have it reviewed by a qualified professional to match your
// jurisdiction and actual data practices before publishing.
const sections = [
  { h: 'Information We Collect', p: 'When you contact us or request a quote, we collect the details you provide such as your name, company, email address, phone number and message.' },
  { h: 'How We Use Your Information', p: 'We use your information to respond to enquiries, prepare proposals, deliver services and improve our website and communications.' },
  { h: 'Sharing of Information', p: 'We do not sell your personal information. We may share it with trusted service providers who help us operate our business, or where required by law.' },
  { h: 'Data Retention & Security', p: 'We keep personal information only as long as necessary for the purposes described and take reasonable measures to protect it.' },
  { h: 'Your Rights', p: 'You may request access to, correction of, or deletion of your personal information by contacting us.' },
];

export default function Privacy() {
  return (
    <>
      <Seo title="Privacy Policy" description="How JA Consultancy & Training collects, uses and protects your personal information." />
      <PageHeader eyebrow="Legal" title="Privacy Policy" subtitle="Last updated: replace with date" />
      <section className="section bg-white">
        <div className="container-x max-w-3xl space-y-8">
          {sections.map((s) => (
            <div key={s.h}>
              <h2 className="font-sans text-xl font-semibold">{s.h}</h2>
              <p className="mt-2 leading-relaxed text-ink-soft">{s.p}</p>
            </div>
          ))}
          <div>
            <h2 className="font-sans text-xl font-semibold">Contact</h2>
            <p className="mt-2 leading-relaxed text-ink-soft">
              Questions about this policy? Email us at{' '}
              <a className="text-brand underline" href={`mailto:${company.email}`}>{company.email}</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}