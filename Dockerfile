# syntax=docker/dockerfile:1

# Build the Astro static site.
FROM node:24-alpine AS builder

RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

# Cache dependencies unless the manifest or lockfile changes.
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY . .
RUN pnpm build

# Pre-compress text assets so nginx can serve .br/.gz files directly.
RUN apk add --no-cache brotli && \
    find dist -type f \( \
      -name "*.html" -o -name "*.css" -o -name "*.js" \
      -o -name "*.json" -o -name "*.svg" -o -name "*.xml" \
      -o -name "*.txt" -o -name "*.webmanifest" \
    \) | while read -r f; do \
      gzip -9 -k "$f"; \
      brotli -q 11 -k "$f"; \
    done

# Serve the built files with nginx + brotli_static support.
FROM macbre/nginx-brotli:latest AS runner

RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
