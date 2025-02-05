#!/bin/bash

set -e

if [[ "${CODESPACES}" == true ]]; then
  echo "Fixing permissions of /tmp for GitHub Codespaces..." >&2
  sudo chmod 1777 /tmp
fi

git submodule update --init
# make STRICT=false

ls -la /tmp/
ls -la /home/vscode/
ls -la /home/vscode/.local/
ls -la /home/vscode/.local/share/
ls -la /home/vscode/.local/share/pdm/
pdm install
