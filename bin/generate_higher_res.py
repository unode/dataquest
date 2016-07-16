#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import os
from glob import glob
from subprocess import check_call


def more_recent(one, two):
    "Returns True if file 'one' is more recent than file 'two'"
    date_one = os.stat(one).st_mtime
    try:
        date_two = os.stat(two).st_mtime
    except FileNotFoundError:
        # Second file doesn't exist, so create it
        return True

    if (date_one - date_two) > 0:
        return True

    return False


def convert(old, new, scale):
    if more_recent(old, new):
        path, filename = os.path.split(new)
        _, path = os.path.split(path)
        print("\033[92mUpdating:\033[0m", os.path.join(path, filename))
        check_call(["convert", "-scale", "{}%".format(scale), old, new])


def handle_exceptions(file):
    folder, file = os.path.split(file)

    if file in EXCEPTIONS:
        print("\033[93mSkipping\033[0m exception:", file)
        return False

    return True


if __name__ == "__main__":

    EXCEPTIONS = (
        # Files that have been independently modified at each resolution
        # and shouldn't be recreated
        "guard.png",
    )

    LOCATION = os.path.dirname(os.path.realpath(__file__))
    file_location = os.path.realpath(os.path.join(LOCATION, "../client/img"))

    files = glob(os.path.join(file_location, "1/*.png"))
    final_files = tuple(filter(handle_exceptions, files))

    for filepath in final_files:
        folder, file = os.path.split(filepath)

        scale = 200
        new = os.path.join(file_location, "2/{}".format(file))
        convert(filepath, new, scale)

        # 300% scale
        scale = 300
        new = os.path.join(file_location, "3/{}".format(file))
        convert(filepath, new, scale)

# vim: ai sts=4 et sw=4
