/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_LINKEDIN_URL?: string;
  readonly VITE_CONTACT_EMAIL?: string;
  readonly VITE_PROJECT_PRYMAGENT_URL?: string;
  readonly VITE_PROJECT_IWACUMO_URL?: string;
  readonly VITE_PROJECT_PREPADI_URL?: string;
  readonly VITE_PROJECT_WORKIETECHIE_URL?: string;
  readonly VITE_PROJECT_GHEALEAD_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

