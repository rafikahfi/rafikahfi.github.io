import cartoonProfile from "../../assets/images/profile-cartoon.png";

export default function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="min-h-screen max-w-7xl w-full mx-auto flex-1 px-8 md:px-28 py-12 md:py-0 md:-mt-8 flex flex-col md:flex-row items-center md:justify-center gap-8 md:gap-10 text-left"
    >
      <div className="w-full md:flex-1 order-1 flex flex-col items-start md:mt-0">
        <h1
          id="hero-heading"
          className="text-brand-blue font-extrabold text-3xl md:text-4xl tracking-wider mb-8 md:mb-6"
        >
          Hello, I'm Rafi!
        </h1>
        <p className="text-brand-dark font-medium text-lg md:text-xl leading-relaxed mb-6 md:mb-8 max-w-md md:max-w-none">
          An <span className="font-extrabold text-brand-blue">informatics graduate</span> and passionate{" "}
          <span className="font-extrabold text-brand-blue">web developer</span> focused on building clean and
          user-friendly digital experiences.
        </p>
        <a
          href="#projects"
          className="hidden md:inline-block text-brand-blue font-light text-sm hover:underline focus:outline-none focus:ring-2 focus:ring-brand-blue rounded-sm"
        >
          Scroll down to see what I've been learning.
        </a>
      </div>
      <div className="flex justify-center md:justify-end w-full md:w-auto order-2 ">
        <img
          src={cartoonProfile}
          alt="Cartoon illustration profile of Rafi Kahfi Yugi"
          className="w-56 h-56 md:w-64 md:h-64 rounded-full object-cover border-4 border-brand-blue shadow-md "
        />
      </div>
      <div className="order-3 block md:hidden mb-auto pt-2">
        <a
          href="#projects"
          className="flex flex-col items-center gap-2 text-brand-blue font-light text-xs sm:text-sm hover:opacity-80 focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded-md p-1 transition-opacity"
          aria-label="Scroll down to Projects section"
        >
          <span>Scroll down to see what I've been learning.</span>

          <svg
            className="w-5 h-5 text-brand-blue animate-bounce"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </div>
    </section>
  );
}
