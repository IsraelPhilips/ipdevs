import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ProjectCard } from "../components/ProjectCard";
import { Section } from "../components/Section";
import {
  heroMetrics,
  projects,
  siteTitle,
  softwareSeoDescription,
  techStackGroups,
  workflowTools,
} from "../content/siteContent";
import { getMailtoLink, links } from "../utils/env";

export function HomePage() {
  const mailtoLink = getMailtoLink();

  return (
    <>
      <Helmet>
        <title>{siteTitle} | Software Engineer Portfolio</title>
        <meta name="description" content={softwareSeoDescription} />
      </Helmet>

      <section className="hero-shell">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="hero-kicker">Software Engineer • AI Developer • Product Builder</span>
          <h1>I build polished software and practical AI systems people actually use.</h1>
          <p className="hero-description">
            I am Israel Philips, a software engineer and AI developer with 6+ years of
            experience building for startups, operators, and global-facing teams. My work
            focuses on shipping clean interfaces, dependable product logic, and AI features
            that solve real business problems.
          </p>
          <div className="hero-actions">
            <a className="button" href="#projects">
              Explore selected work
            </a>
            <a
              className="button button-secondary"
              href={links.linkedIn}
              target="_blank"
              rel="noreferrer"
            >
              Connect on LinkedIn
            </a>
            <a className="button button-ghost" href={mailtoLink}>
              Send an email
            </a>
          </div>
        </motion.div>

        <motion.aside
          className="hero-panel"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.12 }}
        >
          <div className="panel-chip">What teams get</div>
          <ul className="metric-list">
            {heroMetrics.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="hero-mini-grid">
            <div className="mini-stat">
              <strong>Frontend</strong>
              <span>Clear systems, premium execution, responsive experiences</span>
            </div>
            <div className="mini-stat">
              <strong>Backend + AI</strong>
              <span>Operational logic, automation, and AI that fits real workflows</span>
            </div>
          </div>
        </motion.aside>
      </section>

      <Section
        id="stack"
        eyebrow="Tech stack"
        title="The stack I use across frontend, backend, and AI delivery"
        copy="A focused toolset for product UI, platform systems, mobile builds, cloud-backed apps, and practical AI implementation."
      >
        <div className="stack-grid">
          {techStackGroups.map((group) => (
            <article key={group.title} className="stack-card">
              <span className="stack-card-kicker">{group.title}</span>
              <h3>{group.title}</h3>
              <div className="stack-chip-grid">
                {group.items.map((item) => (
                  <span key={item} className="stack-chip">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section
        id="projects"
        eyebrow="Selected projects"
        title="Work that blends strong product thinking with reliable execution"
        copy="These case studies show how I approach AI products, marketplaces, multi-tenant systems, and mission-critical user flows."
      >
        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Section>

      <Section
        id="workflow"
        eyebrow="Engineering workflow"
        title="I use modern tooling to strengthen delivery speed, review quality, and implementation depth"
        copy="AI-assisted tools are part of my workflow, but always under clear engineering judgment. I use them to support architecture thinking, execution speed, and review loops without lowering standards."
      >
        <div className="workflow-grid">
          {workflowTools.map((tool) => (
            <motion.article
              key={tool.name}
              className="workflow-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
            >
              <span className="workflow-label">{tool.name}</span>
              <p>{tool.use}</p>
            </motion.article>
          ))}
        </div>
      </Section>

      <Section
        id="contact"
        eyebrow="Let’s connect"
        title="Need an engineer who understands product, UI, and practical AI?"
        copy="If you are building something ambitious and want someone who can pair product taste with dependable execution, I would love to connect."
        actions={
          <div className="inline-actions">
            <a
              className="button"
              href={links.linkedIn}
              target="_blank"
              rel="noreferrer"
            >
              Reach out on LinkedIn
            </a>
            <a className="button button-secondary" href={mailtoLink}>
              Send an email
            </a>
          </div>
        }
      >
        <div className="cta-panel">
          <div>
            <span className="section-eyebrow">What I bring</span>
            <h3>Calm delivery. Strong product judgment. Useful AI.</h3>
          </div>
          <p>
            From dashboards and marketplaces to AI-enabled operational tools, I focus on
            building systems that look sharp, work clearly, and help teams move forward.
          </p>
          <Link className="text-link" to="/projects/prymagent">
            Start with the PrymAgent case study
          </Link>
        </div>
      </Section>
    </>
  );
}
