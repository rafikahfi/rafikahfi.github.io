import { projectsData } from "../../constants/projectsData";
import ProjectCard from "./components/ProjectCard";

export default function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="mb-16 -mt-10 md:mt-0 px-8">
      <h2 id="projects-heading" className="text-brand-blue text-center text-3xl md:text-4xl mb-16 font-bold">
        These are some of my projects
      </h2>

      {/* Project Cards */}
      <div className="w-11/12 md:w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2  gap-8 md:gap-x-16 md:gap-y-8 ">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
