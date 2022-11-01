# docker-task
Dockerhub link: 
https://hub.docker.com/repository/docker/erbidium/docker-task

To build image
```
docker build -t erbidium/docker-task
```
To push image
```
docker login
docker push erbidium/docker-task
```
To pull image
```
docker pull erbidium/docker-task:latest
```
To run image with memory and CPU limits on the port 80
```
docker run -p 80:80 --cpus=1 -m 512m erbidium/docker-task
```
