# Exercise 2

First I pulled the alpine

```
docker image pull alpine
```

Checked the images

```
docker image ls
```

Ran the container, made a few more commands to test it
Then:

```
docker container run alpine /bin/sh
```

Nothing.. But without interactive (-it) mode the container dies after running commands.

Then listing with "ls" and "ls -a". The first one shows the running containers (0) and "-a" shows all containers


## Deletion

I ran command

```
docker container run -ti alpine
```

I listed the directories:

```
/ # ls
bin    dev    etc    home   lib    media  mnt    opt    proc   root   run    sbin   srv    sys    tmp    usr    var
```

Ran the command

```
rm -rf /
``` 

Tried to list the folders and got answer "Not found". So, all gone.

Then I put the alpine up again and noticed that the folders were back and I could get other information too.