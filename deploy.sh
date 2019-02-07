#!/bin/bash

echo "* Build site"
jekyll build > /dev/null

echo "* Clean deployment dir"
cd ../www.prozentrechner.at
shopt -u dotglob
rm -rf *

echo "* Copy files"
cp -R ../x-prozentrechner.at/_site/* . > /dev/null

echo "* Add untracked files"
git add .

echo "* Commit changes"
git commit -m "Update $(date +%Y-%m-%d_%H:%M:%S)" > /dev/null

echo "* Publish"
git push
