#!/bin/bash

set -e

# PYTHON_VERSION=3.12.1

# yum install -y \
#   openssl11 \
#   sqlite \
#   xz \
#   ;

# mkdir -p /usr/local/python

# curl -sSLo /tmp/python.tar.xz "https://github.com/containerbase/python-prebuild/releases/download/${PYTHON_VERSION}/python-amzn-2-x86_64.tar.xz"

# tar -xf /tmp/python.tar.xz -C /usr/local/python

# ln -sf /usr/local/python/${PYTHON_VERSION}/bin/python /usr/local/bin/python
# ln -sf /usr/local/python/${PYTHON_VERSION}/bin/pip /usr/local/bin/pip

python -m pip install poetry
# ln -sf /usr/local/python/${PYTHON_VERSION}/bin/poetry /usr/local/bin/poetry

poetry --version
