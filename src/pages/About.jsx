import SectionHeading from "../components/SectionHeading";

export default function About() {
  return (
    <>
      <section className="bg-ja-dark py-20 text-white">
        <div className="container-ja">
          <div className="eyebrow">About JA</div>
          <h1 className="mt-4 text-4xl font-extrabold md:text-5xl">Building Better Management Systems</h1>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-gray-300">
            JA Management Consultancy Services supports organizations through practical ISO consultancy and professional training.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-ja grid gap-12 lg:grid-cols-2 lg:items-center">
          <img
            className="h-[400px] w-full rounded-xl object-cover"
            src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80"
            alt="Business team meeting"
          />
          <div>
            <SectionHeading eyebrow="Our Background" title="Practical Expertise With a Client-Focused Approach" />
            <p className="mt-5 text-sm leading-7 text-gray-500">
              We help organizations translate management system requirements into practical processes, documented information, training, and continual improvement activities.
            </p>
            <div className="mt-7 grid gap-5 sm:grid-cols-2">
              <div className="rounded-lg bg-gray-50 p-5">
                <h3 className="font-bold text-ja-dark">Mission</h3>
                <p className="mt-2 text-xs leading-5 text-gray-500">Deliver practical consultancy and training that creates useful, sustainable management systems.</p>
              </div>
              <div className="rounded-lg bg-gray-50 p-5">
                <h3 className="font-bold text-ja-dark">Vision</h3>
                <p className="mt-2 text-xs leading-5 text-gray-500">Be a trusted partner for organizations pursuing stronger performance and continual improvement.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
