import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import { projects, siteTitle } from "../content/siteContent";
import { getProjectUrl } from "../utils/env";

export function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <section className="detail-shell narrow-shell">
        <p className="section-eyebrow">Not found</p>
        <h1>This case study does not exist.</h1>
        <Link className="button" to="/">
          Return home
        </Link>
      </section>
    );
  }

  const liveUrl = getProjectUrl(project.liveUrlEnvKey);

  return (
    <>
      <Helmet>
        <title>
          {project.name} | {siteTitle}
        </title>
        <meta name="description" content={project.summary} />
      </Helmet>

      <section className="detail-shell">
        <div className="detail-topbar">
          <Link className="text-link" to="/">
            Back to portfolio
          </Link>
          {liveUrl ? (
            <a className="button button-secondary" href={liveUrl} target="_blank" rel="noreferrer">
              Visit live project
            </a>
          ) : null}
        </div>

        <div className="detail-hero">
          <div className="detail-copy">
            <span className="section-eyebrow">{project.eyebrow}</span>
            <h1>{project.name}</h1>
            <p className="detail-summary">{project.intro}</p>
            <div className="tag-row">
              {project.tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <aside className="detail-side-card">
            <div>
              <span className="side-label">Role</span>
              <p>{project.role}</p>
            </div>
            <div>
              <span className="side-label">Outcome</span>
              <p>{project.outcome}</p>
            </div>
          </aside>
        </div>

        <div className="detail-grid">
          <article className="detail-card">
            <span className="section-eyebrow">Challenge</span>
            <p>{project.challenge}</p>
          </article>
          <article className="detail-card">
            <span className="section-eyebrow">Approach</span>
            <p>{project.approach}</p>
          </article>
        </div>

        <section className="detail-section">
          <div className="section-copy">
            <span className="section-eyebrow">What I built</span>
            <h2>Key product contributions</h2>
          </div>
          <div className="detail-list-grid">
            <article className="info-card">
              <h3>Highlights</h3>
              <ul>
                {project.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <article className="info-card">
              <h3>Stack</h3>
              <ul>
                {project.stack.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <article className="info-card">
              <h3>Impact</h3>
              <ul>
                {project.metrics.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section className="detail-section">
          <div className="section-copy">
            <span className="section-eyebrow">Gallery</span>
            <h2>Product visuals</h2>
            <p>
              Each image below supports how the product experience was structured. Placeholder
              visuals are clearly marked and can be replaced later with additional project assets.
            </p>
          </div>
          <div className="gallery-grid">
            {project.gallery.map((item) => (
              <figure
                key={item.src}
                className={`gallery-card${item.isPlaceholder ? " gallery-card-placeholder" : ""}`}
              >
                <img src={item.src} alt={item.alt} />
                <figcaption>{item.note}</figcaption>
              </figure>
            ))}
          </div>
        </section>
      </section>
    </>
  );
}

