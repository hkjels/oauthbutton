

build: components *.js *.html
	component build

components: component.json
	component install

clean:
	rm -fr components build


.PHONY: build components clean

