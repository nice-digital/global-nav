# Runs functional tests via Docker

docker-compose down --remove-orphans && docker-compose rm -vf
docker-compose build && docker-compose up -d

# docker-compose run -e RUNNING_IN_DOCKER=true tests npm run test -- --host hub
docker-compose run -T tests npm run wait-then-test

# Generate an Allure test report
docker-compose run -T tests allure generate --clean

# Copy any error shots out of the docker container
docker cp functional-tests_tests_1:/tests/errorShots ./docker-output/errorShots
docker-compose logs --no-color > ./docker-output/logs.txt

# Clean up
docker volume ls
docker-compose down -v
docker volume ls
#docker volume prune -f
