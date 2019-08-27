default: install build

install:
	yarn install
	pip install --upgrade pip
	pip install --upgrade mkdocs mkdocs-material

get-docs:
	bash bin/get-docs.sh

generate-config:
	node bin/generate-config.js

generate-presets:
	node bin/generate-presets.js

build-docs:
	bash bin/build-docs.sh

build: get-docs generate-config generate-presets build-docs

clean:
	git clean -dfx
	rm -rf build
	rm -rf tmp