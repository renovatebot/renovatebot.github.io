#!/bin/bash

set -e

# renovate: datasource=github-releases depName=renovatebot/renovate
RENOVATE_VERSION=42.22.0

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
