#!/bin/bash

set -e

pwd=$PWD

docs=$pwd/docs
rm -rf $docs
mkdir -p $docs

deps=$pwd/deps

cd $deps/renovate
yarn install --frozen-lockfile
yarn build
cp -R docs/usage/* $docs
yarn create-json-schema
cp renovate-schema.json $docs

cd $pwd
cp -R src/* docs/

echo '---\ntitle: Merge Confidence\ndescription: Node versions support in Renovate\n---\n' > docs/merge-confidence.md
curl https://raw.githubusercontent.com/whitesource/merge-confidence/main/README.md >> docs/merge-confidence.md
