#!/bin/bash

set -e

pwd=$PWD

docs=$pwd/docs
rm -rf "$docs"
mkdir -p "$docs"

deps=$pwd/deps

cd "$deps/renovate"

if [ -z "$SKIP_BUILD" ]; then
  pnpm install --frozen-lockfile
  pnpm build:docs
fi

cp -R tmp/docs/. "$docs"

cd "$pwd"
cp -R src/. docs/
