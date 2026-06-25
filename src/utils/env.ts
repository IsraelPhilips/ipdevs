const clean = (value?: string) => value?.trim() || undefined;

const fallbackLinks = {
  linkedIn: "https://www.linkedin.com/in/israel-philips-0ab274202",
  email: "israelphils.tech@gmail.com",
} as const;

const fallbackProjectUrls: Partial<Record<keyof ImportMetaEnv, string>> = {
  VITE_PROJECT_PRYMAGENT_URL: "https://prymagent.com",
  VITE_PROJECT_IWACUMO_URL: "https://www.iwacumo.com",
  VITE_PROJECT_PREPADI_URL: "http://www.prepadi.online",
  VITE_PROJECT_WORKIETECHIE_URL: "https://workietechie.com",
};

export const links = {
  linkedIn: clean(import.meta.env.VITE_LINKEDIN_URL) ?? fallbackLinks.linkedIn,
  email: clean(import.meta.env.VITE_CONTACT_EMAIL) ?? fallbackLinks.email,
};

export const getMailtoLink = () => {
  return `mailto:${links.email}`;
};

export const getProjectUrl = (envKey?: keyof ImportMetaEnv) => {
  if (!envKey) {
    return undefined;
  }

  return clean(import.meta.env[envKey]) ?? fallbackProjectUrls[envKey];
};
