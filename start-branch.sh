git checkout 344vu84-url-filtration
git pull

mvn clean package -P build-docker-image

docker-compose down
docker-compose pull
docker-compose up -d

pm2 kill

cd front
npm i
pm2 start npm --  run dev

#----------
#----------
