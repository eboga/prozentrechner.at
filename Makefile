.PHONY: dev prod

dev:
	jekyll serve & npm run dev

prod:
	jekyll build & npm run prod
