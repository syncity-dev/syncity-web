FROM node:18-alpine AS base

# Stage 1: Install dependencies
FROM base AS deps
WORKDIR /app
COPY package.json pnpm-lock.yaml panda.config.ts ./
RUN npm install -g pnpm && pnpm install --frozen-lockfile


# Stage 2: Build the application
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY ./src ./src
COPY ./public ./public
COPY . .

RUN npm install -g pnpm
# Run PandaCSS code generation
RUN pnpm run prepare 
RUN pnpm build

# Stage 3: Production server
FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000
CMD ["node", "server.js"]