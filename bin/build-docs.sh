#!/bin/bash

set -e

cp -R src/assets/* docs/assets
cp -R src/index.md docs

mkdocs build
