git checkout main
git pull

mvn clean package -P build-docker-image

docker-compose down
docker-compose pull
docker-compose up -d

pm2 kill

cd front
npm i
npm run build
pm2 serve build 3000 --spa
