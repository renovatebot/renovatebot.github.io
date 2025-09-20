FROM ghcr.io/containerbase/devcontainer:13.13.10

# https://github.com/pnpm/pnpm/issues/8971
# renovate: datasource=npm
RUN install-tool pnpm 10.16.1

# renovate: datasource=pypi
RUN install-tool pdm 2.25.9

# https://github.com/parcel-bundler/parcel/issues/6569
ENV PARCEL_WORKER_BACKEND=process
