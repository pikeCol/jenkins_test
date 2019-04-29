# docker + jenkins 自动化部署
> ## 为什么有docker
+ 虚拟机太大了
+ 复杂的环境，应用相互影响
+ docker 
> ## 撸前准备 docker
+ [docker download](https://www.docker.com/get-started)

+ [docker install for ubuntu](https://docs.docker.com/install/linux/docker-ce/ubuntu/)

+ [docker registry](https://hub.docker.com/_/jenkins?tab=tags&page=1) 镜像仓库，类似 npm 仓库
+ docker image 镜像， 类似 node_moduels
  
> ## 开撸
```
docker  --version
docker pull jenkins/jenkins:lts
docker images || docker image ls
docker container ls -a || docker ps
docker container run -d -p --name -v jenkins
docker container stop (container id )
docker container start (container id )
docker container rm (container id )
docker image rm (image id )

docker logs (container id )
docker exec -it (container id ) /bin/bash?
```
> ## 构建自己的镜像
## dockerfile
```
from ...
run
cmd
expose

docker build -t tagname .
```


