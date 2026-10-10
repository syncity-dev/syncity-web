/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** `true` to publish draft posts and keep the whole site out of search engines. */
  readonly VITE_SHOW_DRAFTS?: string;
}
