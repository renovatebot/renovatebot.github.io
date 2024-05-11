#!/bin/bash

set -e


# renovate: datasource=docker depName=python
PYTHON_VERSION=3.11

# renovate: datasource=pypi depName=poetry
POETRY_VERSION=1.8.3

# install python and pip
yum install -y python${PYTHON_VERSION} python${PYTHON_VERSION}-pip

# install poetry
python${PYTHON_VERSION} -m pip install poetry==${POETRY_VERSION}

# print versions
python${PYTHON_VERSION} --version
poetry --version
