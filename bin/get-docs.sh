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
npm i -g yarn
yarn install --ignore-optional
yarn build
cp -R docs/usage/* $docs
yarn create-json-schema
cp renovate-schema.json $pwd

cd $tmp
git clone --depth=1 https://github.com/renovatebot/pro
cd pro
mkdir $docs/pro
cp -R docs/* $docs/pro
rm $docs/pro/README.md

cd $tmp
git clone --depth=1 https://github.com/renovatebot/renovate-config