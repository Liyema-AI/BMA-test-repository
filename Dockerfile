# Use the official NGINX image from Amazon ECR Public to avoid Docker Hub rate limits
FROM public.ecr.aws/nginx/nginx:alpine

# Copy the simple HTML file into the container
COPY index.html /usr/share/nginx/html

