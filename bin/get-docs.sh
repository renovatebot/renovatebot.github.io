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

cd $deps/renovate-pro
mkdir $docs/pro
cp -R docs/* $docs/pro
rm $docs/pro/README.md

cd $pwd
cp -R src/* docs/
