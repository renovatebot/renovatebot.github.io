FROM ghcr.io/containerbase/gitpod:13.0.11

# renovate: datasource=pypi
RUN install-tool pdm 2.20.0.post1

# https://github.com/parcel-bundler/parcel/issues/6569
ENV PARCEL_WORKER_BACKEND=process
