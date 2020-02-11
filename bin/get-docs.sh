#!/bin/bash

set -e

pwd=$PWD

docs=$pwd/docs
rm -rf $docs
mkdir -p $docs

tmp=$pwd/tmp
rm -rf $tmp
mkdir -p $tmp

cd $tmp
git clone --depth=1 https://github.com/renovatebot/renovate
cd renovate
yarn install --ignore-optional  --frozen-lockfile
yarn build
cp -R docs/usage/* $docs
yarn create-json-schema
cp renovate-schema.json $docs

cd $tmp
git clone --depth=1 https://github.com/renovatebot/pro
cd pro
mkdir $docs/pro
cp -R docs/* $docs/pro
rm $docs/pro/README.md

cd $tmp
git clone --depth=1 https://github.com/renovatebot/renovate-config

cd $pwd
cp -R src/assets/* docs/assets
cp -R src/index.md docs
