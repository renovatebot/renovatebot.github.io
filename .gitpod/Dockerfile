FROM ghcr.io/containerbase/gitpod:13.8.61

# https://github.com/pnpm/pnpm/issues/8971
# renovate: datasource=npm
RUN install-tool pnpm 10.13.1

# renovate: datasource=pypi
RUN install-tool pdm 2.25.4

# https://github.com/parcel-bundler/parcel/issues/6569
ENV PARCEL_WORKER_BACKEND=process
