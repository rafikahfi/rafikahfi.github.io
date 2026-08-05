import Navbar from "./components/Navbar";
import Hero from "./modules/hero/Hero";
import Projects from "./modules/projects/Projects";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col">
        <Hero />
        <Projects />
      </main>
    </div>
  );
}
