#!/usr/bin/env bash

set -e

# empty dist directory
rm -rf dist/* src/ng2-*

# Reinstall all packages
declare -a packages=(
    ng2-map
    ng2-auto-complete
    ng2-datetime-picker
    ng2-overlay
    ng2-scrollable
)

installPackage() {
  npm uninstall $1 --save-dev
  npm install $1 --save-dev
  mkdir src/$1
  cp -R node_modules/$1/dist/* src/$1
}

for package in "${packages[@]}"
do
 echo ">>>>>>>>>>>$package<<<<<<<<<"
 installPackage $package
done

tsc --outDir dist


