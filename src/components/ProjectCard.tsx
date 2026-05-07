import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import type { ProjectCaseStudy } from "../content/types";

type ProjectCardProps = {
  project: ProjectCaseStudy;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      className="project-card"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
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
          <Link className="text-link" to={`/projects/${project.slug}`}>
            View case study
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

