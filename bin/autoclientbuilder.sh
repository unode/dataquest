#!/bin/bash
# autoclientbuilder.sh -- created 2016-07-11, Renato Alves
# @Last Change: 14-Jul-2016.
# @Revision:    0.2
#
# Use this script to rebuild the client every time a file is changed
# This script requires inotifywait from the inotify-tools package

command -v inotifywait >/dev/null 2>&1 || { echo >&2 "Command inotifywait not found, please install inotify-tools. Exiting."; exit 1; }

MONITORDIR="$(dirname $( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd ))"

while inotifywait -r -e modify -e move -e create -e delete $MONITORDIR/client/ >/dev/null 2>&1; do
    echo $line
    $MONITORDIR/bin/build_dev.sh
done

# vi: 
