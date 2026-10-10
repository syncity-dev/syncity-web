/**
 * Set to `true` on the develop deploy (develop.syncity.dev) so drafts can be reviewed there.
 * The production build on GitHub Pages never sets it.
 */
export const showDrafts = import.meta.env.VITE_SHOW_DRAFTS === 'true';
