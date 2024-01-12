default: install build

install:
	pnpm install --frozen-lockfile
	poetry install --no-root

install-poetry:
	pipx install poetry

install-vercel: install-poetry install

shellcheck:
	shellcheck bin/*.sh .devcontainer/*.sh .husky/pre-commit

get-docs:
	bash bin/get-docs.sh

build-docs:
	poetry run mkdocs build

prepare: get-docs

build-decoder:
	bash bin/build-decoder.sh

build: prepare build-decoder build-docs

clean:
	git clean -dfx
	rm -rf build tmp

serve:
	poetry run mkdocs serve

deploy:
	poetry run mkdocs gh-deploy --force
