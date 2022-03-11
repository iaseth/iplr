
default: all

all: freshbuild

fdp: freshdeploy
freshdeploy: clean build deploy

deploy:
	@echo "Deploying to netlify ..."
	netlify deploy --prod
	@echo "    deployment COMPLETE."

freshbuild: clean build

build:
	@echo "Building site ..."
	npm run build
	@echo "    build COMPLETE."

clean:
	@echo "Deleting 'build' directory ..."
	rm -rf build
	@echo "    deletion COMPLETE."
