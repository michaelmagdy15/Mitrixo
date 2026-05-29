# Multi-stage Dockerfile for Next.js 15 Standalone Deployment on Google Cloud Run

# Stage 1: Dependency resolution
FROM node:20-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install dependencies based on package.json lockfile
COPY package.json package-lock.json* ./
RUN npm install

# Stage 2: Production compilation
FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Set Next.js Telemetry to disabled for security and performance
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build

# Stage 3: Dynamic runner container
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Create dedicated non-privileged user and group for runtime execution
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy essential files for standalone runtime operation
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Transition operation to unprivileged environment
USER nextjs

# Standardize Cloud Run port binding
EXPOSE 8080
ENV PORT=8080
ENV HOSTNAME="0.0.0.0"

# Execute the standalone Next.js server entry point
CMD ["node", "server.js"]
