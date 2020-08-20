#!/bin/bash

docker stop web-oliver-react
docker container rm web-oliver-react

docker build -t web-oliver .

docker run -d --restart unless-stopped --name web-oliver-react -p 3080:1080 web-oliver