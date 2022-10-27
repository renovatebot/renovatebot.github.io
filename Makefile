default: install build

install:
	yarn install --frozen-lockfile
	pipenv install

shellcheck:
	shellcheck bin/*.sh
	shellcheck .husky/pre-commit

get-docs:
	bash bin/get-docs.sh

build-docs:
	pipenv run mkdocs build --strict

prepare: get-docs

build-decoder:
	bash bin/build-decoder.sh

build: prepare build-docs build-decoder

clean:
	git clean -dfx
	rm -rf build
	rm -rf tmp

serve:
	pipenv run mkdocs serve --strict

deploy: clean install build
	pipenv run mkdocs gh-deploy --dirty --force
