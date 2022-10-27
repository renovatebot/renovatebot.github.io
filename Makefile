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
	pipenv run mkdocs build

prepare: get-docs

build-decoder:
	bash bin/build-decoder.sh

build: prepare build-decoder build-docs

clean:
	git clean -dfx
	rm -rf build
	rm -rf tmp

serve:
	pipenv run mkdocs serve

deploy:
	pipenv run mkdocs gh-deploy --force
