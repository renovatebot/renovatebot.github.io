default: install build

install:
	yarn install --frozen-lockfile
	pip install -r requirements.txt

get-docs:
	bash bin/get-docs.sh

generate-config:
	node bin/generate-config.js

generate-modules:
	node bin/generate-modules.js

generate-presets:
	node bin/generate-presets.js

build-docs:
	bash bin/build-docs.sh

prepare: get-docs generate-config generate-modules generate-presets

build: prepare build-docs

clean:
	git clean -dfx
	rm -rf build
	rm -rf tmp
