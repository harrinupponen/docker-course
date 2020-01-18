# Exercise4

## Bind Mounts

### Here's what I did:

vagrant@ubuntu-bionic:~/course/docker-katas/labs/volumes$ pwd

/home/vagrant/course/docker-katas/labs/volumes

vagrant@ubuntu-bionic:~/course/docker-katas/labs/volumes$ docker container run --name some-nginx -v /home/vagrant/course/docker-katas/labs/volumes:/usr/share/nginx/html:ro -d nginx

Unable to find image 'nginx:latest' locally
latest: Pulling from library/nginx
8ec398bc0356: Pull complete                                                                                                                              dfb2a46f8c2c: Pull complete                                                                                                                              b65031b6a2a5: Pull complete                                                                                                                              Digest: sha256:8aa7f6a9585d908a63e5e418dc5d14ae7467d2e36e1ab4f0d8f9d059a3d071ce
Status: Downloaded newer image for nginx:latest
bd51f257dbe95a57847dac65423d4f7175d3f8667706a99d4e049a209a9a3659

vagrant@ubuntu-bionic:~/course/docker-katas/labs/volumes$ docker container ls

CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS               NAMES
bd51f257dbe9        nginx               "nginx -g 'daemon of…"   16 seconds ago      Up 14 seconds       80/tcp              some-nginx

vagrant@ubuntu-bionic:~/course/docker-katas/labs/volumes$ docker container run -p 8080:80 nginx

10.0.2.2 - - [14/Jan/2020:12:22:42 +0000] "GET / HTTP/1.1" 200 612 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.117 Safari/537.36" "-"
10.0.2.2 - - [14/Jan/2020:12:23:11 +0000] "GET / HTTP/1.1" 304 0 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.117 Safari/537.36" "-"

### And in the localhost:8080 I saw the nginx page

## Volumes

### And here's what I did with the volumes:

vagrant@ubuntu-bionic:~/course/docker-katas/labs/volumes$ docker volume create data
data
vagrant@ubuntu-bionic:~/course/docker-katas/labs/volumes$ docker volume ls
DRIVER              VOLUME NAME
local               data
vagrant@ubuntu-bionic:~/course/docker-katas/labs/volumes$ docker volume inspect data
[
    {
        "CreatedAt": "2020-01-14T12:27:37Z",
        "Driver": "local",
        "Labels": {},
        "Mountpoint": "/var/lib/docker/volumes/data/_data",
        "Name": "data",
        "Options": {},
        "Scope": "local"
    }
]
vagrant@ubuntu-bionic:~/course/docker-katas/labs/volumes$ docker container run --rm --name www -d -p 8080:80 -v data:/usr/share/nginx/html nginx
683f022bbe3252840c06d2030bdae4da28ba720158588e19f0406ca5674ea93e

vagrant@ubuntu-bionic:~/course/docker-katas/labs/volumes$ sudo ls /var/lib/docker/volumes/data/_data/
50x.html  index.html