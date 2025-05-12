# 1) BUILD STAGE
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package.json & lockfile and install all deps
COPY package*.json ./
RUN npm ci

# Copy your source & build
COPY . .
RUN npm run build            # assumes you have "build": "tsc" in package.json

# 2) PRODUCTION STAGE
FROM node:18-alpine

WORKDIR /app

# Only install production deps
COPY package*.json ./
RUN npm ci --only=production

# Copy built artifacts from builder
COPY --from=builder /app/dist ./dist

# Expose your app’s port (adjust if you use a different one)
EXPOSE 3000

# Default env vars (can be overridden at runtime)
ENV API_PATH=api/v1
ENV BASE_URL=http://localhost:3000

# Start the server
CMD ["node", "dist/app.js"]
