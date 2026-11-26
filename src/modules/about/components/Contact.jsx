import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  return (
    <section id="contact" className="text-brand-blue w-full pb-20">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center md:text-left">Let's Connect & Work Together!</h2>
      <p className="text-base md:text-lg mb-8 italic text-center md:text-left">
        Feel free to reach out through any of these platforms:
      </p>
      <div className="flex flex-wrap justify-center md:justify-start items-center gap-x-8 gap-y-5">
        {/* GitHub */}
        <a
          href="https://github.com/rafikahfi"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-brand-red text-lg hover:text-brand-blue transition-colors duration-300"
          aria-label="Visit my GitHub profile"
        >
          <FontAwesomeIcon icon={faGithub} className="text-2xl" />
          <span>GitHub</span>
        </a>
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/rkahfiy/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-brand-red text-lg hover:text-brand-blue transition-colors duration-300"
          aria-label="Visit my LinkedIn profile"
        >
          <FontAwesomeIcon icon={faLinkedin} className="text-2xl" />
          <span>LinkedIn</span>
        </a>
        {/* Instagram */}
        <a
          href="https://www.instagram.com/rkahfiy/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-brand-red text-lg hover:text-brand-blue transition-colors duration-300"
          aria-label="Visit my Instagram profile"
        >
          <FontAwesomeIcon icon={faInstagram} className="text-2xl" />
          <span>Instagram</span>
        </a>
      </div>
    </section>
  );
}
