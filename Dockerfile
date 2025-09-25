# Use an official NGINX image as the base image
FROM nginx:alpine

# Copy the simple HTML file into the container's web server directory
COPY index.html /usr/share/nginx/html