export default {
  'src/**/*.{js,jsx,ts,tsx}': ['eslint --fix', 'prettier --write'],
  'src/**/*.{json,md,css}': ['prettier --write'],
  // Repo-root configs and docs, which the `src/**` patterns above never reach.
  // `package.json` and `tsconfig.json` are in `.prettierignore`, so they stay untouched.
  '*.{js,cjs,mjs,ts,json,md}': ['prettier --write'],
};
