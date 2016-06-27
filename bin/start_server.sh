#!/bin/bash
# start_server.sh -- created 2016-06-27 - Renato Alves
# @Last Change: 2016-06-27
# @Revision:    0.1

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd "${DIR}/.."

node server/js/main.js

# vi: 
