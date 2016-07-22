FROM node:alpine

LABEL maintainer "alves.rjc+docker@gmail.com"

RUN apk --no-cache add bash git python3
    
RUN mkdir -p /srv && \
    git clone https://git.embl.de/ralves/dataquest.git /srv/dataquest && \
    cd /srv/dataquest && \
    sed "s/Set production websocket host here/127.0.0.1/" client/config/config_build.json-dist > client/config/config_build.json && \
    bash bin/build_prod.sh && \
    npm install

ENTRYPOINT ["/srv/dataquest/dumb_launch.sh"]
WORKDIR "/srv/dataquest"
