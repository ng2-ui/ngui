#!/usr/bin/env bash

set -e

# empty dist directory
rm -rf dist/jui-*

# update node_modules and copy to dist directory
npm update
cp -R node_modules/ng2-map/dist             dist/jui-map
cp -R node_modules/ng2-auto-complete/dist   dist/jui-auto-complete
cp -R node_modules/ng2-datetime-picker/dist dist/jui-datetime-picker
cp -R node_modules/ng2-overlay/dist         dist/jui-overlay
tsc
