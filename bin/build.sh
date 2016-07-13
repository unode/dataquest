#!/bin/bash

# Any failure is fatal
set -e

# Script to generate an optimized client build of BrowserQuest

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd "${DIR}"

BUILDDIR="../client-build"
PROJECTDIR="../client/js"
CURDIR=$(pwd)


echo "Deleting previous build directory"
rm -rf $BUILDDIR

echo "Building client with RequireJS"
cd $PROJECTDIR
node ../../bin/r.js -o build.js
cd $CURDIR

echo "Removing unnecessary js files from the build directory"
find $BUILDDIR/js -type f -not \( \
    -name "modernizr.js" -o\
    -name "detect.js" -o\
    -name "log.js" -o\
    -name "require-jquery.js" -o\
    -name "home.js" -o\
    -name "main.js" -o\
    -name "app.js" -o\
    -name "storage.js" -o\
    -name "game.js" -o\
    -name "mapworker.js" -o\
    -name "world_client.js" -o\
    -name "underscore.min.js" -o\
    -name "css3-mediaqueries.js" -o\
    -name "text.js" \
    \) -print -delete | sort

echo "Removing sprites directory"
rm -rf $BUILDDIR/sprites

echo "Removing config directory"
rm -rf $BUILDDIR/config

echo "Moving build.txt to current dir"
mv $BUILDDIR/build.txt $CURDIR

echo "Build complete"
