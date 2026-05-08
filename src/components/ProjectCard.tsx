import { Link } from "react-router-dom";
import type { ProjectCaseStudy } from "../content/types";
import { getProjectUrl } from "../utils/env";

type ProjectCardProps = {
  project: ProjectCaseStudy;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const liveUrl = getProjectUrl(project.liveUrlEnvKey);

  return (
    <article className="project-card">
      <div className="project-preview">
        <img src={project.gallery[0].src} alt={project.gallery[0].alt} />
      </div>
      <div className="project-content">
        <div className="project-heading">
          <span className="section-eyebrow">{project.eyebrow}</span>
          <h3>{project.name}</h3>
        </div>
        <p>{project.summary}</p>
        <div className="tag-row">
          {project.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
        <div className="project-footer">
          <span>{project.outcome}</span>
          <div className="project-links">
            <Link className="text-link" to={`/projects/${project.slug}`}>
              View case study
            </Link>
            {liveUrl ? (
              <a className="text-link" href={liveUrl} target="_blank" rel="noreferrer">
                Visit live
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
}
