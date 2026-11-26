import { projectsData } from "../../constants/projectsData";
import ProjectCard from "./components/ProjectCard";

export default function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="mb-16 -mt-10 md:mt-0 ">
      <h2 id="projects-heading" className="text-brand-blue text-center text-3xl md:text-4xl mb-16 font-bold">
        These are some of my projects
      </h2>

      {/* Project Cards */}
      <div className="w-[90%] md:w-4/5 mx-auto my-12 flex flex-wrap justify-between gap-12 md:gap-8">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
