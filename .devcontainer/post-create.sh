#!/bin/bash

set -e

if [[ "${CODESPACES}" == true ]]; then
  echo "Fixing permissions of /tmp for GitHub Codespaces..." >&2
  sudo chmod 1777 /tmp
fi

set -x

git config --global --add safe.directory "${PWD}"
git config --global --add safe.directory "${PWD}/deps/renovate"

git submodule update --init

exec make
