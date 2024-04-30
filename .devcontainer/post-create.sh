#!/bin/bash

set -e

if [[ "${CODESPACES}" == true ]]; then
  echo "Fixing permissions of /tmp for GitHub Codespaces..." >&2
  sudo chmod 1777 /tmp
fi

git submodule update --init
COREPACK_ENABLE_DOWNLOAD_PROMPT=0 make
