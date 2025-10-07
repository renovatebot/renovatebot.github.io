#!/bin/bash

set -e

pwd=$PWD

docs=$pwd/docs
rm -rf "$docs"
mkdir -p "$docs"

deps=$pwd/deps

cd "$deps/renovate"

if [ -z "$SKIP_BUILD" ]; then
  # https://github.com/pnpm/pnpm/issues/9715
  # pnpm has issues with the `~/.local` symlink
  corepack pnpm install --frozen-lockfile
  corepack pnpm build:docs
fi

cp -R tmp/docs/. "$docs"

cd "$pwd"
cp -R src/. docs/
