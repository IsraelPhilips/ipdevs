const clean = (value?: string) => value?.trim() || undefined;

export const links = {
  linkedIn: clean(import.meta.env.VITE_LINKEDIN_URL),
  email: clean(import.meta.env.VITE_CONTACT_EMAIL),
};

export const getMailtoLink = () => {
  if (!links.email) {
    return undefined;
  }

  return `mailto:${links.email}`;
};

export const getProjectUrl = (envKey?: keyof ImportMetaEnv) => {
  if (!envKey) {
    return undefined;
  }

  return clean(import.meta.env[envKey]);
};

