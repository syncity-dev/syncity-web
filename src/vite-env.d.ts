/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** `true` to publish draft posts and keep the whole site out of search engines. */
  readonly VITE_SHOW_DRAFTS?: string;
  /** The address the build is deployed to, e.g. `https://develop.syncity.dev`. Defaults to production. */
  readonly VITE_SITE_URL?: string;
}
