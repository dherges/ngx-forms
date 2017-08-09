#!/usr/bin/env bash
cd demo

ng build --prod --progress=false --base-href "https://ngx-plus.github.io/ngx-forms/"

# Hack around router
cp dist/index.html dist/404.html

# Deploy to GitHub Pages
npx ngh angular-cli-ghpages --no-silent --repo=git@github.com:ngx-plus/ngx-forms.git
