#!/bin/sh

echo ">>>>> Fetching git updates"
cd /srv/dataquest/ && git pull

echo ">>>>> Building client"
/srv/dataquest/bin/build_prod.sh

echo ">>>>> Updating permissions"
/srv/dataquest/bin/ensure_permissions.sh

echo ">>>>> Restarting dataquest server"
stop dataquest ; sleep 1 ; start dataquest
