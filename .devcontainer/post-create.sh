#!/bin/bash

set -ex

git config --global --add safe.directory "${PWD}"
git config --global --add safe.directory "${PWD}/deps/renovate"

git submodule update --init

exec make
