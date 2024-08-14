default: install build

STRICT?=true

ifeq ($(STRICT),true)
  build_args=--strict
endif

install:
	pnpm install --frozen-lockfile
	pdm install

prepare-vercel:
	bash bin/prepare-vercel.sh

install-vercel: prepare-vercel install

shellcheck:
	shellcheck bin/*.sh .devcontainer/*.sh .husky/pre-commit

get-docs:
	bash bin/get-docs.sh

build-docs:
	pdm run mkdocs build $(build_args)

prepare: get-docs

build-decoder:
	bash bin/build-decoder.sh

build: prepare build-decoder build-docs

clean:
	git clean -dfx
	rm -rf build tmp

serve:
	pdm run mkdocs serve

deploy:
	pdm run mkdocs gh-deploy --force
