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
    ng2-utils
    ng2-infinite-list
    ng2-tab
    ng2-collapsable
    ng2-parallax-scroll
    ng2-popup
    ng2-sticky
    ng2-scrollable
    ng2-ui-sortable
)
if [ -z ${1+x} ]; then
  echo "no package given, skipping package rebuilding";
  packages=()
elif [ '$1' == 'all' ]; then
  echo "rebuilding all packages";
else
  echo "reguilding package '$1'";
  packages=($1)
fi
echo $packages

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


echo "Replacing ng2-overlay and ng2-utils to local"
# change all ng2-overlay npm module dependency to local dependency
sed -i '' -e "s/from ['\"]ng2-overlay\/index['\"]/from '..\/ng2-overlay\/index'/g" src/*/*.ts
sed -i '' -e "s/from ['\"]ng2-overlay['\"]/from '..\/ng2-overlay\/index'/g" src/*/*.ts
# change all ng2-utils npm module dependency to local dependency
sed -i '' -e "s/from ['\"]ng2-utils\/index['\"]/from '..\/ng2-utils\/index'/g" src/*/*.ts
echo "Replacing Done"

echo "Deleting dist directory"
rm -rf dist

echo "Copying all source to dist directory"
cp -R src dist

echo "Compiling dist directory"
tsc --rootDir dist

