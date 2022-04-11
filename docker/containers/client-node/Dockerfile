FROM node:14

WORKDIR /var/www

ADD entrypoint.sh /app/client-node-entrypoint.sh
RUN chmod -R 777 /app/client-node-entrypoint.sh

# Add .bashrc config file for color and alias support
COPY ./root/.bashrc /root/.bashrc

CMD ["/app/client-node-entrypoint.sh"]
