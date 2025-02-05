#!/bin/bash

set -e

pwd=$PWD

docs=$pwd/docs
rm -rf "$docs"
mkdir -p "$docs"

deps=$pwd/deps

cd "$deps/renovate"

if [ -z "$SKIP_BUILD" ]; then
 # fix version mismatch until we're on pnpm v10
  COREPACK_ENABLE_STRICT=0 pnpm install --frozen-lockfile
  COREPACK_ENABLE_STRICT=0 pnpm build:docs
fi

cp -R tmp/docs/. "$docs"

cd "$pwd"
cp -R src/. docs/
