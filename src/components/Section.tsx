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
    <section id={id} className="section-shell">
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
    </section>
  );
}
