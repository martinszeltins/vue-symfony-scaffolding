#!/bin/bash
set -e

bash -c "service supervisor start && php-fpm"
