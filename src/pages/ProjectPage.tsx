import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import { projects, siteTitle } from "../content/siteContent";
import { getProjectUrl } from "../utils/env";

export function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);
  const [activeGalleryIndex, setActiveGalleryIndex] = useState<number | null>(null);
  const galleryLength = project?.gallery.length ?? 0;

  useEffect(() => {
    if (activeGalleryIndex === null || !project) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveGalleryIndex(null);
      }

      if (event.key === "ArrowRight") {
        setActiveGalleryIndex((currentIndex) => {
          if (currentIndex === null) {
            return 0;
          }

          return (currentIndex + 1) % project.gallery.length;
        });
      }

      if (event.key === "ArrowLeft") {
        setActiveGalleryIndex((currentIndex) => {
          if (currentIndex === null) {
            return 0;
          }

          return (currentIndex - 1 + project.gallery.length) % project.gallery.length;
        });
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeGalleryIndex, galleryLength, project]);

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
  const activeGalleryItem = activeGalleryIndex === null ? null : project.gallery[activeGalleryIndex];

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
            <p>Click any image to open it in a larger gallery view and inspect the product more closely.</p>
          </div>
          <div className="gallery-grid">
            {project.gallery.map((item, index) => (
              <figure
                key={item.src}
                className={`gallery-card${item.isPlaceholder ? " gallery-card-placeholder" : ""}`}
              >
                <button
                  type="button"
                  className="gallery-trigger"
                  onClick={() => setActiveGalleryIndex(index)}
                  aria-label={`Open ${project.name} gallery image ${index + 1}`}
                >
                  <div className="gallery-media-shell">
                    <img
                      className={item.isPlaceholder ? "gallery-image gallery-image-placeholder" : "gallery-image"}
                      src={item.src}
                      alt={item.alt}
                    />
                  </div>
                </button>
              </figure>
            ))}
          </div>
        </section>

        {activeGalleryItem ? (
          <div
            className="gallery-modal"
            role="dialog"
            aria-modal="true"
            aria-label={`${project.name} image gallery`}
          >
            <button
              type="button"
              className="gallery-modal-backdrop"
              aria-label="Close image gallery"
              onClick={() => setActiveGalleryIndex(null)}
            />
            <div className="gallery-modal-panel">
              <div className="gallery-modal-topbar">
                <p className="gallery-modal-count">
                  {activeGalleryIndex + 1} / {project.gallery.length}
                </p>
                <button
                  type="button"
                  className="gallery-modal-close"
                  onClick={() => setActiveGalleryIndex(null)}
                  aria-label="Close image gallery"
                >
                  <span aria-hidden="true">+</span>
                </button>
              </div>
              <div className="gallery-modal-stage">
                {project.gallery.length > 1 ? (
                  <button
                    type="button"
                    className="gallery-nav-button"
                    onClick={() =>
                      setActiveGalleryIndex(
                        (activeGalleryIndex - 1 + project.gallery.length) % project.gallery.length,
                      )
                    }
                    aria-label="View previous image"
                  >
                    <span aria-hidden="true">&lsaquo;</span>
                  </button>
                ) : null}
                <img
                  className="gallery-modal-image"
                  src={activeGalleryItem.src}
                  alt={activeGalleryItem.alt}
                />
                {project.gallery.length > 1 ? (
                  <button
                    type="button"
                    className="gallery-nav-button"
                    onClick={() => setActiveGalleryIndex((activeGalleryIndex + 1) % project.gallery.length)}
                    aria-label="View next image"
                  >
                    <span aria-hidden="true">&rsaquo;</span>
                  </button>
                ) : null}
              </div>
            </div>
          </div>
        ) : null}
      </section>
    </>
  );
}
