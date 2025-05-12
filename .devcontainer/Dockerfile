FROM ghcr.io/containerbase/devcontainer:13.8.26

# https://github.com/pnpm/pnpm/issues/8971
# renovate: datasource=npm
RUN install-tool pnpm 10.10.0

# renovate: datasource=pypi
RUN install-tool pdm 2.24.1

# https://github.com/parcel-bundler/parcel/issues/6569
ENV PARCEL_WORKER_BACKEND=process
