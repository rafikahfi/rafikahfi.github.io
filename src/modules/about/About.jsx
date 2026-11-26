import AboutContent from "./components/AboutContent";
import Contact from "./components/Contact";
import ProfileSidebar from "./components/ProfileSidebar";

export default function About() {
  return (
    <section className="w-full max-w-300 mx-auto px-6 md:px-20 mb-12">
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="w-full md:flex-2">
          <AboutContent />
          <Contact />
        </div>
        <div className="w-full md:flex-1">
          <ProfileSidebar />
        </div>
      </div>
    </section>
  );
}
