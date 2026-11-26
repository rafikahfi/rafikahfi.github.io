export default function AboutContent() {
  return (
    <section id="about-me" aria-labelledby="about-heading" className="mb-12 md:mb-22">
      <article>
        <h2
          id="about-heading"
          className="text-brand-blue text-center md:text-left text-3xl md:text-3xl font-bold tracking-wide mb-6 md:mb-8"
        >
          About Me!
        </h2>
        <div className="space-y-4 md:space-y-6 text-brand-dark font-medium text-base md:text-lg leading-relaxed">
          <p>
            <span className="text-brand-blue font-extrabold">Hello again!</span> Thanks for stopping by! I hold a
            Bachelor's degree in <span className="text-brand-blue font-extrabold">Computer Science</span> with a focus
            on Web Development. Currently, I am expanding my technical stack through the{" "}
            <span className="text-brand-blue font-extrabold">Coding Camp powered by DBS Foundation x Dicoding</span>,
            deepening my mastery in modern JavaScript, React.js, and interactive web standards.
          </p>
          <p>
            Other than coding, I spend most of my time playing{" "}
            <span className="text-brand-red font-extrabold"> Dota 2</span>{" "}
            <span className="font-handwriting font-normal text-brand-dark/50 text-lg">
              (yes, it's a love-hate relationship)
            </span>{" "}
            or messing around with <span className="text-brand-red font-extrabold">music</span>. Feel free to reach out
            if you want to talk about tech, music, or if you need a teammate for a match!
          </p>
        </div>
      </article>
    </section>
  );
}
