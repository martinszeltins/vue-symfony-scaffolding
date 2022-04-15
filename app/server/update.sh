#!/bin/bash
echo "--------- Running update.sh... ---------"

# install composer dependencies
composer install

# clear cache
./bin/console c:c
./bin/console c:w

# Update db schema
./bin/console do:sc:up --force

# Run migrations
./bin/console do:mi:mi --no-interaction --allow-no-migration

# Generate encryption keypair for token generation
./bin/console lexik:jwt:generate-keypair --skip-if-exists

# Load fixtures
./bin/console doctrine:fixtures:load --append

# Set var permissions
chmod -R 777 var/

# Restart supervisor processes
supervisorctl restart all
