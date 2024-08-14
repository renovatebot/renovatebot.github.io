#!/bin/bash

set -e


# renovate: datasource=docker depName=python
PYTHON_VERSION=3.11

# renovate: datasource=pypi depName=pdm
PDM_VERSION=2.18.0

# install python and pip
yum install -y python${PYTHON_VERSION} python${PYTHON_VERSION}-pip

# install pdm
python${PYTHON_VERSION} -m pip install pdm==${PDM_VERSION}

# print versions
python${PYTHON_VERSION} --version
pdm --version
