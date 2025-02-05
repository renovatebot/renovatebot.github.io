FROM ghcr.io/containerbase/gitpod:13.7.7

# https://github.com/pnpm/pnpm/issues/8971
# renovate: datasource=npm
RUN install-tool pnpm 9.15.4

# renovate: datasource=pypi
RUN install-tool pdm 2.22.3

# https://github.com/parcel-bundler/parcel/issues/6569
ENV PARCEL_WORKER_BACKEND=process
