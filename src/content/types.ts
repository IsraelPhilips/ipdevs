export type ProjectGalleryItem = {
  src: string;
  alt: string;
  note: string;
  isPlaceholder?: boolean;
};

export type ProjectCaseStudy = {
  slug: string;
  name: string;
  eyebrow: string;
  summary: string;
  intro: string;
  role: string;
  outcome: string;
  challenge: string;
  approach: string;
  stack: string[];
  tags: string[];
  highlights: string[];
  metrics: string[];
  liveUrlEnvKey?: keyof ImportMetaEnv;
  gallery: ProjectGalleryItem[];
};

export type TechStackGroup = {
  title: string;
  items: string[];
};

export type WorkflowTool = {
  name: string;
  use: string;
};
