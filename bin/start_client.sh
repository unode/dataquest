#!/bin/bash
# start_client.sh -- created 2016-06-27 - Renato Alves
# @Last Change: 2016-06-27
# @Revision:    0.1

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd "${DIR}/../client-build"

python3 -m http.server --bind 127.0.0.1 9000

# vi: 
