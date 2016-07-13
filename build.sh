#!/usr/bin/env bash

# empty dist directory
rm -rf dist/* 

# Reinstall all packages
declare -a packages=(
    ng2-map
    ng2-auto-complete
    ng2-datetime-picker
    ng2-overlay
    ng2-scrollable
    ng2-tooltip-overlay
    ng2-menu
    ng2-popup
)

installPackage() {
  rm -rf src/$1
  mkdir src/$1
  npm uninstall $1 --save-dev
  npm install $1 --save-dev
  cp -R node_modules/$1/dist/* src/$1
}

for package in "${packages[@]}"
do
 echo ">>>>>>>>>>>$package<<<<<<<<<"
 installPackage $package
done

typings install

sed -i '' -e 's/ng2-overlay/..\/ng2-overlay\/index/g' src/ng2-popup/*.ts
sed -i '' -e 's/ng2-overlay/..\/ng2-overlay\/index/g' src/ng2-tooltip-overlay/*.ts

rm -rf dist
cp -R src dist
tsc --rootDir dist


