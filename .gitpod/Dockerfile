FROM ghcr.io/containerbase/gitpod:9.31.3

# renovate: datasource=pypi
RUN install-tool pipenv 2023.11.15

# https://github.com/parcel-bundler/parcel/issues/6569
ENV PARCEL_WORKER_BACKEND=process
