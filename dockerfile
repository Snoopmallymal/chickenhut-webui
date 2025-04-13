# Use the official Nginx image as a base
FROM nginx:alpine

# Remove the default Nginx static assets
RUN rm -rf /usr/share/nginx/html/*

# Copy the React build output to the Nginx HTML directory
COPY ./build/ /usr/share/nginx/html

# Copy a custom Nginx config (optional but recommended)
# Uncomment the following lines if you have a custom nginx.conf
# COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80

# Run Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
