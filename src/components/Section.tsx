import { motion } from "framer-motion";
import type { PropsWithChildren, ReactNode } from "react";

type SectionProps = PropsWithChildren<{
  id?: string;
  eyebrow: string;
  title: string;
  copy: string;
  actions?: ReactNode;
}>;

export function Section({
  id,
  eyebrow,
  title,
  copy,
  actions,
  children,
}: SectionProps) {
  return (
    <motion.section
      id={id}
      className="section-shell"
      initial={{ opacity: 0, y: 68, scale: 0.97, rotateX: 8 }}
      whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="section-copy">
        <span className="section-eyebrow">{eyebrow}</span>
        <div className="section-heading-row">
          <div>
            <h2>{title}</h2>
            <p>{copy}</p>
          </div>
          {actions ? <div className="section-actions">{actions}</div> : null}
        </div>
      </div>
      {children}
    </motion.section>
  );
}
