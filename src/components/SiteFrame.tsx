import { AnimatePresence, motion } from "framer-motion";
import { Outlet, useLocation } from "react-router-dom";
import { links } from "../utils/env";

const navItems = [
  { label: "Projects", href: "/#projects" },
  { label: "Tech Stack", href: "/#stack" },
  { label: "Workflow", href: "/#workflow" },
  { label: "Connect", href: "/#contact" },
];

export function SiteFrame() {
  const location = useLocation();

  return (
    <div className="app-shell">
      <div className="background-orb background-orb-left" />
      <div className="background-orb background-orb-right" />
      <header className="site-header">
        <a className="brand-mark" href="/">
          <span className="brand-dot" />
          Israel Philips
        </a>
        <nav className="site-nav" aria-label="Primary">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <a
          className="button button-secondary header-cta"
          href={links.linkedIn}
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </header>
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 48, scale: 0.985, rotateX: 5 }}
          animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
          exit={{ opacity: 0, y: -28, scale: 0.992, rotateX: -3 }}
          transition={{ duration: 0.55, ease: [0.2, 0.9, 0.24, 1] }}
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
      <footer className="site-footer">
        <p>Building beautifully useful software for teams that want clarity, speed, and real AI value.</p>
        <div className="footer-links">
          <a href="/">Home</a>
          <a href={links.linkedIn} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </footer>
    </div>
  );
}
