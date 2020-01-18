# Exercise10

I followed the instructions to make a network for mysql-db and wordpress server.
And I managed to do that.

![WP-server](https://github.com/harrinupponen/docker-course/blob/master/images/wp-server-running.PNG "WP-server")

Here' the inspection:

```
[
    {
        "Name": "if-wordpress",
        "Id": "0cf0fabd495d87a245a5fbd1f5644775b44bd0148fdc600c1befca553e70d921",
        "Created": "2020-01-16T23:54:07.52076968Z",
        "Scope": "local",
        "Driver": "bridge",
        "EnableIPv6": false,
        "IPAM": {
            "Driver": "default",
            "Options": {},
            "Config": [
                {
                    "Subnet": "172.20.0.0/16",
                    "Gateway": "172.20.0.1"
                }
            ]
        },
        "Internal": false,
        "Attachable": false,
        "Ingress": false,
        "ConfigFrom": {
            "Network": ""
        },
        "ConfigOnly": false,
        "Containers": {
            "22f18934d8099e1552053e81bcd7f98325d10ad804aff02fd8f073bb5bfa9d28": {
                "Name": "wordpress-container",
                "EndpointID": "d8b2c3f82e90f3ebdc4ffe44e1e0189d9996be95316bab2c39605b9be6edf710",
                "MacAddress": "02:42:ac:14:00:03",
                "IPv4Address": "172.20.0.3/16",
                "IPv6Address": ""
            },
            "3e75110c8fe2209e7b2c55cc99264e17da591903f1a93530605923d433a9f280": {
                "Name": "mysql-container",
                "EndpointID": "6232666a9b592fef83bd901c8a14491cf9a5e0287772e423783b0c6808231e73",
                "MacAddress": "02:42:ac:14:00:02",
                "IPv4Address": "172.20.0.2/16",
                "IPv6Address": ""
            }
        },
        "Options": {},
        "Labels": {}
    }
]
```