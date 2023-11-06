#!/bin/bash

set -e

pwd=$PWD
deps=$pwd/deps

cd "$deps/cache-decoder"

if [ -z "$SKIP_BUILD" ]; then
  pnpm install --frozen-lockfile
  pnpm build
fi

cd "$pwd"
