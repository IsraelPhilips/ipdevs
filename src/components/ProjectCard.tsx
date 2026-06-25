import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import type { ProjectCaseStudy } from "../content/types";
import { savePortfolioScrollPosition } from "../utils/scrollState";
import { getProjectUrl } from "../utils/env";

type ProjectCardProps = {
  project: ProjectCaseStudy;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const liveUrl = getProjectUrl(project.liveUrlEnvKey);

  return (
    <motion.article
      className="project-card"
      initial={{ opacity: 0, y: 72, rotateX: 18, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.16 }}
      whileHover={{ y: -12, rotateX: 5, rotateY: -5 }}
      transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1] }}
    >
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
            <Link
              className="text-link"
              to={`/projects/${project.slug}`}
              onClick={savePortfolioScrollPosition}
            >
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
    </motion.article>
  );
}
