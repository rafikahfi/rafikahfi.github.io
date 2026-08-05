import { useState, useEffect } from "react";
import cartoonProfile from "../../assets/images/profile-cartoon.png";

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollDownText = (
    <p className="text-brand-blue font-light  text-sm order-3 md:order-2">
      Scroll down to see what I've been learning!
    </p>
  );

  return (
    <section
      id="hero"
      aria-label="Hero Section"
      className="max-w-7xl w-full mx-auto flex-1 px-8 md:px-28 py-12 md:py-0 flex flex-col md:flex-row items-center md:justify-center gap-8 md:gap-10 text-left"
    >
      <div className="w-full md:flex-1 order-1">
        <h1 className="text-brand-blue font-extrabold text-3xl md:text-4xl tracking-wider mb-4 md:mb-6">
          Hello, I'm Rafi!
        </h1>
        <p className="text-brand-dark font-medium text-lg md:text-xl leading-relaxed mb-4 md:mb-8">
          An <span className="font-extrabold text-brand-blue">informatics graduate</span> and passionate{" "}
          <span className="font-extrabold text-brand-blue">web developer</span> focused on building clean and
          user-friendly digital experiences.
        </p>
        {!isMobile && scrollDownText}
      </div>
      <div className="flex justify-center md:justify-end w-full md:w-auto order-2 md:order-3">
        <img
          src={cartoonProfile}
          alt="Illustration Cartoon Profile"
          className="w-56 h-56 md:w-64 md:h-64 rounded-full object-cover border-4 border-brand-blue shadow-md "
        />
      </div>
      {isMobile && scrollDownText}
    </section>
  );
}
