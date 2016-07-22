#!/usr/bin/env sh

cd /srv/dataquest || exit

node server/js/main.js &
cd client-build && python -m http.server 9000 &

wait
