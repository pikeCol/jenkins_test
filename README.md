# docker + jenkins 自动化部署
> ## 为什么有docker
+ 虚拟机太大了
+ 复杂的环境，应用相互影响
+ docker 
> ## 撸前准备 docker
+ [docker download](https://www.docker.com/get-started)

+ [docker install for ubuntu](https://docs.docker.com/install/linux/docker-ce/ubuntu/)

+ docker image 镜像， 类似 node_moduels
  
> ## 开撸
检验docker是否安装成功
```
docker  --version
```
如果成功会有相应的版本号显示
![图1](./img/1.jpg)
然后就可以去下载自己想下载的镜像了[docker registry(镜像仓库)](https://hub.docker.com/_/jenkins?tab=tags&page=1) 类似 npm 仓库
也可以通过
```
docker search
```
来搜索镜像是否存在。接下来就是拉去镜像，默认的话docker 都会拉最新的镜像包，如果要拉取特定的版本在后面在，这边以Jenkins为例子。 
```
docker pull jenkins/jenkins:lts
```
！切记，直接docker pull jenkins 会拉去 jenkins:latest 版本是2.60.3，这个版本兼容问题贼大。有兴趣的同学可以去试一试。
下完的镜像都在docker image 下面，类似node_modules 通过 命令 <font color="color=#0099ff">docker images</font> 或者 <font color="color=#0099ff">docker image ls</font> 可以查看安装过的镜像
```
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


