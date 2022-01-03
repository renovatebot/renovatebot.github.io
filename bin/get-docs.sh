#!/bin/bash

set -e

pwd=$PWD

docs=$pwd/docs
rm -rf "$docs"
mkdir -p "$docs"

deps=$pwd/deps

cd "$deps/renovate"

if [ -z "$SKIP_BUILD" ]; then
  yarn install --frozen-lockfile
  yarn build:docs
fi

cp -R tmp/docs/* "$docs"

cd "$pwd"
cp -R src/* docs/

printf -- '---\ntitle: Merge Confidence\ndescription: Node versions support in Renovate\n---\n\n' > docs/merge-confidence.md
curl -sSLf https://raw.githubusercontent.com/whitesource/merge-confidence/main/README.md >> docs/merge-confidence.md
