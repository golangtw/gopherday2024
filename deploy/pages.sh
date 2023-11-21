#!/bin/bash

# move ./2024 to ./dist/2024
mv ./dist ./2024
mkdir -p ./dist
mv ./2024 ./dist

# move _redirects to dist
cp ./deploy/_redirects ./dist
