import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className={`sticky top-0 z-50 bg-brand-cream  px-6 md:px-16 py-4 flex justify-between items-center backdrop-blur-md transition-shadow ${!isOpen ? "shadow-sm" : ""}`}
    >
      {/* Logo */}
      <div className="logo">
        <a href="#" className="font-extrabold text-2xl text-brand-blue ">
          rafikahfi.
        </a>
      </div>

      {/* Desktop Navigation */}
      <nav aria-label="Main Navigation" className="hidden md:block">
        <ul className="flex gap-2">
          <li>
            <a
              href="#projects"
              className="px-4 py-2 rounded-full font-medium text-brand-blue hover:bg-brand-blue hover:text-brand-cream transition-colors"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#about-me"
              className="px-4 py-2 rounded-full font-medium text-brand-blue hover:bg-brand-blue hover:text-brand-cream transition-colors"
            >
              About Me
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="px-4 py-2 rounded-full font-medium text-brand-blue hover:bg-brand-blue hover:text-brand-cream transition-colors"
              target="_blank"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>

      {/* Mobile Navigation */}
      <nav
        aria-label="Mobile Navigation"
        className={`absolute top-full left-0 w-full bg-brand-cream shadow-dropdown-bottom md:hidden grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100 pointer-events-auto" : "grid-rows-[0fr] opacity-0 pointer-events-none"}`}
      >
        <div className="overflow-hidden">
          <ul className="flex flex-col gap-2 px-6 py-4 text-center">
            <li>
              <a
                href="#projects"
                onClick={() => setIsOpen(false)}
                className="text-brand-blue py-2.5 font-medium hover:bg-brand-blue hover:text-brand-cream transition-colors block rounded-lg"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#about-me"
                onClick={() => setIsOpen(false)}
                className="text-brand-blue py-2.5 font-medium hover:bg-brand-blue hover:text-brand-cream transition-colors block rounded-lg"
              >
                About Me
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="text-brand-blue py-2.5 font-medium hover:bg-brand-blue hover:text-brand-cream transition-colors block rounded-lg"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hamburger Menu (Mobile) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue p-2 rounded-full cursor-pointer"
        aria-label={isOpen ? "Close Menu Navigation" : "Open Menu Navigation"}
        aria-expanded={isOpen}
      >
        <svg
          className={`w-6 h-6 transition-transform duration-300 ${isOpen ? "rotate-90 scale-110" : "rotate-0 scale-100"} `}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>
    </header>
  );
}
