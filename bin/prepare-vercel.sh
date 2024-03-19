#!/bin/bash

set -e

yum install -y python3-pip

# renovate: datasource=pypi depName=poetry
POETRY_VERSION=1.8.2

python3 -m pip install poetry==${POETRY_VERSION}

poetry --version
