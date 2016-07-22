#!/usr/bin/env sh

cd /srv/dataquest || exit

node server/js/main.js &
cd client-build && python3 -m http.server 9000 &

wait
