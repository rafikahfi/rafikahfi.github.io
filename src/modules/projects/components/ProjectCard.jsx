export default function ProjectCard({ project }) {
  return (
    <article>
      {/* Project Image */}
      <div>
        <img src={project.image} alt={project.title} />
      </div>

      {/* Project Details */}
      <div>
        <code>&lt; {""}</code>
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          {project.title}
        </a>
        <code> {""} /&gt;</code>
      </div>
    </article>
  );
}
