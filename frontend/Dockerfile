# Step 1: Build the React app
FROM node:18-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .

RUN npm run build

# Step 2: Serve the build using Nginx
FROM nginx:stable-alpine

# Copy custom Nginx config (optional)
# COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
