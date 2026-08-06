export default function ProjectCard({ project }) {
  return (
    <article className="group border border-black bg-brand-red flex flex-col justify-center items-center rounded-md overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl">
      {/* Project Image */}
      <div className="w-full h-64 overflow-hidden">
        <img
          src={project.image}
          alt={`Screenshot preview of ${project.title}`}
          className="w-full h-full block object-cover"
        />
      </div>

      {/* Project Details */}
      <div className="w-full text-center py-4 text-xl border-t-4 border-brand-blue">
        <code
          aria-hidden="true"
          className="text-brand-yellow opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          &lt; {""}
        </code>
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-brand-cream mx-1">
          {project.title}
        </a>
        <code
          aria-hidden="true"
          className="text-brand-yellow opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          {""} /&gt;
        </code>
      </div>
    </article>
  );
}
