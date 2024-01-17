#!/bin/bash

set -e

PYTON_VERSION=3.12.1

yum install -y \
  openssl11 \
  sqlite \
  xz \
  ;

mkdir -p /usr/local/python

curl -sSLo /tmp/python.tar.xz "https://github.com/containerbase/python-prebuild/releases/download/${PYTON_VERSION}/python-amzn-2-x86_64.tar.xz"

tar -xf /tmp/python.tar.xz -C /usr/local/python

ln -sf /usr/local/python/${PYTON_VERSION}/bin/python /usr/local/bin/python
ln -sf /usr/local/python/${PYTON_VERSION}/bin/pip /usr/local/bin/pip

python -m pip install --prefix /usr/local poetry

poetry --version
