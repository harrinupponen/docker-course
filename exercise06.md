# Exercise6

CLI:

![cmd](https://github.com/harrinupponen/docker-course/blob/master/images/compose-hello-world-cmd.PNG "CMD")

docker-compose -file:

![docker-compose](https://github.com/harrinupponen/docker-course/blob/master/images/compose-hello-world-dc-yml.PNG "docker-compose")


I made the change to the compose file to use Ubuntu image and with command

```
"echo "Hello from me"
```

Well, it says "Hello from me"

```
Re-creating docker-compose_hello-world_1 ... done                                                                                                        Attaching to docker-compose_hello-world_1
hello-world_1  | Hello from me
docker-compose_hello-world_1 exited with code 0
```