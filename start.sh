mvn clean package -P build-docker-image

docker-compose down
docker-compose pull
docker-compose up -d
