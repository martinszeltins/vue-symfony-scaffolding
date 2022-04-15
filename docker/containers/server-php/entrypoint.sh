#!/bin/bash
set -e

bash -c "service supervisor start && /var/www/update.sh && php-fpm"
