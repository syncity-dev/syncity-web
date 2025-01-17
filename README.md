# Syncity Web

This is a [Next.js](https://nextjs.org/) project bootstrapped with
[`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the
result.

You can start editing the page by modifying `app/page.tsx`. The page
auto-updates as you edit the file.

This project uses
[`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to
automatically optimize and load Roboto, a custom Google Font.

The app is hosted on [DigitalOcean](https://www.digitalocean.com/).

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js
  features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Deploy Script

The Bash deploy script does the following:

1. Installs all the necessary packages for the site's server
2. Installs Docker and Nginx Clones this repository
3. Generates an SSL certificate
4. Builds the Next.js application
5. Sets up Nginx and configures HTTPS and rate limiting
6. Creates a .env file

Once the deployment completes, the site will be available at:

```bash
https://www.syncity.dev
```

For pushing subsequent updates, use the update.sh script.
