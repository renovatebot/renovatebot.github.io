FROM ghcr.io/containerbase/gitpod:13.8.13

# https://github.com/pnpm/pnpm/issues/8971
# renovate: datasource=npm
RUN install-tool pnpm 10.8.0

# renovate: datasource=pypi
RUN install-tool pdm 2.23.1

# https://github.com/parcel-bundler/parcel/issues/6569
ENV PARCEL_WORKER_BACKEND=process
