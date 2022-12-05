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

cp -R tmp/docs/. "$docs"

cd "$pwd"
cp -R src/. docs/

{
  printf -- '---\n'
  printf -- 'title: Merge Confidence\ndescription: Learn about Renovate'\''s Merge Confidence feature\n'
  printf -- 'edit_url: https://github.com/whitesource/merge-confidence/edit/main/README.md\n'
  printf -- '---\n\n'
  curl -sSLf https://raw.githubusercontent.com/whitesource/merge-confidence/main/README.md
} > docs/merge-confidence.md
