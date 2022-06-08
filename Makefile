default: install build

install:
	yarn install --frozen-lockfile
	pip install -r requirements.txt

shellcheck:
	shellcheck bin/*.sh
	shellcheck .husky/pre-commit

get-docs:
	bash bin/get-docs.sh

build-docs:
	mkdocs build

prepare: get-docs

build: prepare build-docs

clean:
	git clean -dfx
	rm -rf build
	rm -rf tmp
