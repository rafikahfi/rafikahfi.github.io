import { projectsData } from "../../constants/projectsData";
import ProjectCard from "./components/ProjectCard";

export default function Projects() {
  return (
    <section id="projects" aria-label="Projects Section">
      <h2>These are some of my projects</h2>

      {/* Project Cards */}
      <div>
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
