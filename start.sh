git checkout main
git pull

mvn clean package -P build-docker-image

docker-compose down
docker-compose pull
docker-compose up -d

pm2 kill

cd front
npm i
pm2 start npm --name "gunconfig" --interpreter bash -- start
pm2 show gunconfig
