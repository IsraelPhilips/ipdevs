import { useEffect } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { ProjectCard } from "../components/ProjectCard";
import { Section } from "../components/Section";
import { TypewriterText } from "../components/TypewriterText";
import {
  heroMetrics,
  projects,
  siteTitle,
  softwareSeoDescription,
  techStackGroups,
  workflowTools,
} from "../content/siteContent";
import { consumePortfolioScrollPosition } from "../utils/scrollState";
import { getMailtoLink, links } from "../utils/env";

export function HomePage() {
  const location = useLocation();
  const mailtoLink = getMailtoLink();

  useEffect(() => {
    if (location.hash !== "#projects") {
      return;
    }

    const savedScroll = consumePortfolioScrollPosition();

    if (savedScroll === null) {
      return;
    }

    window.requestAnimationFrame(() => {
      window.scrollTo({ top: savedScroll, behavior: "auto" });
    });
  }, [location.hash]);

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
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="hero-glow hero-glow-left" />
          <div className="hero-glow hero-glow-right" />
          <span className="hero-kicker">Software Engineer • AI Systems Engineer • Product Builder</span>
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 54, rotate: 1.5 }}
            animate={{
              opacity: 1,
              y: 0,
              rotate: 0,
            }}
            transition={{
              opacity: { duration: 0.72, ease: [0.16, 1, 0.3, 1] },
              rotate: { duration: 0.72, ease: [0.16, 1, 0.3, 1] },
              y: { duration: 0.72, ease: [0.16, 1, 0.3, 1] },
            }}
          >
            <span className="hero-title-line">
              I build polished software and{" "}
            </span>{" "}
            <TypewriterText text="practical AI systems" startDelay={700} />{" "}
            <span className="hero-title-line">people actually use.</span>
          </motion.h1>
          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.2, 0.9, 0.24, 1] }}
          >
            I am Israel Philips, a software engineer and AI systems engineer with 6+ years of
            experience building for startups, operators, and global-facing teams. My work
            focuses on shipping clean interfaces, dependable product logic, and practical AI
            features and AI systems that solve real business problems.
          </motion.p>
          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.48, ease: [0.2, 0.9, 0.24, 1] }}
          >
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
          </motion.div>
        </motion.div>

        <motion.aside
          className="hero-panel"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1, y: [0, 10, 0] }}
          transition={{
            opacity: { duration: 0.7, delay: 0.12 },
            scale: { duration: 0.7, delay: 0.12 },
            y: { duration: 9, repeat: Infinity, ease: "easeInOut" },
          }}
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
          {techStackGroups.map((group, index) => (
            <motion.article
              key={group.title}
              className="stack-card"
              initial={{ opacity: 0, y: 70, rotateX: 14, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{ duration: 0.8, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="stack-card-kicker">{group.title}</span>
              <h3>{group.title}</h3>
              <div className="stack-chip-grid">
                {group.items.map((item) => (
                  <span key={item} className="stack-chip">
                    {item}
                  </span>
                ))}
              </div>
            </motion.article>
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
        title="AI-assisted workflow when needed"
        copy="Codex, Claude Code, and AntiGravity are used selectively where they genuinely improve speed, review quality, or controlled experimentation."
      >
        <div className="workflow-panel">
          <p className="workflow-caption">Selected tools in an intentionally human-led engineering process.</p>
          <div className="workflow-chip-cloud">
            {workflowTools.map((tool, index) => (
              <motion.div
                key={tool.name}
                className="workflow-chip-card"
                initial={{ opacity: 0, scale: 0.84, y: 46, rotate: index % 2 === 0 ? -8 : 8 }}
                whileInView={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
                whileHover={{ y: -8, rotate: index % 2 === 0 ? -3 : 3, scale: 1.04 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.58, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="workflow-label">{tool.name}</span>
              </motion.div>
            ))}
          </div>
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
      />
    </>
  );
}
