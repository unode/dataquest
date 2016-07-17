#!/bin/sh

chown dataquest.dataquest -R /srv/dataquest
find /srv/dataquest -type f -exec chmod 640 {} \;
find /srv/dataquest -type d -exec chmod 750 {} \;
find /srv/dataquest/client-build/ -type f -exec chmod 644 {} \;
find /srv/dataquest/client-build/ -type d -exec chmod 755 {} \;
chmod 755 /srv/dataquest
