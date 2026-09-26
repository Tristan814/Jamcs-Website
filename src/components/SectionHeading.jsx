export default function SectionHeading({ eyebrow, title, redWord, text, centered = false }) {
  const parts = redWord ? title.split(redWord) : [title];

  return (
    <div className={centered ? "mx-auto max-w-2xl text-center" : "max-w-xl"}>
      <div className={`eyebrow ${centered ? "justify-center" : ""}`}>{eyebrow}</div>
      <h2 className="mt-3 text-3xl font-extrabold leading-tight text-ja-dark md:text-[36px]">
        {redWord ? (
          <>
            {parts[0]}
            <span className="text-ja-red">{redWord}</span>
            {parts[1]}
          </>
        ) : title}
      </h2>
      {text && <p className="mt-4 text-sm leading-6 text-gray-500">{text}</p>}
    </div>
  );
}
