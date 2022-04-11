FROM nginx:1.19-alpine

# We don't want to work with sh
RUN apk add --no-cache bash

# The busybox version of grep sucks (doesn't show colors), let's install GNU grep
RUN apk add --no-cache --upgrade grep

# Add .bashrc config file for color and alias support
COPY ./root/.bashrc /root/.bashrc

# Set working directory
WORKDIR /var/www

CMD ["/bin/bash", "-c", "nginx -g 'daemon off;'"]
