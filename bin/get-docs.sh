#!/bin/bash

set -e

# renovate: datasource=git-refs depName=https://github.com/renovatebot/renovate.git
RENOVATE_VERSION=42.89.3

pwd=$PWD

docs=$pwd/docs
rm -rf "$docs"
mkdir -p "$docs"

deps=$pwd/deps

cd "$deps/renovate"

if [ -z "$SKIP_BUILD" ]; then
  pnpm install --frozen-lockfile
  pnpm build:docs --version "$RENOVATE_VERSION"
fi

cp -R tmp/docs/. "$docs"

cd "$pwd"
cp -R src/. docs/
