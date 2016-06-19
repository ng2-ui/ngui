# JsValley User Interface

Collection of Well-Engineered Angular 2 UIs


## Install

    npm install javalley-ui

## Usage

## Directives
 * `jui-map` Google Maps Api V3 Wrappe
 * `jui-auto-complete` Typeahead for local and remote sources
 *  `jui-datetime-picker` Date picker, Time picker, or both

## For Developer,

To publish a directive as s part of Jsvalley UI, `jui`

1. Install a modularized directive.
 
       e.g. $ npm instlal ng2-map

2. Update `build.sh` by adding additional line, so it will be added to distribution

        cp -R node_modules/ng2-map/dist             dist/jui-map

3. Update `dist/jsvalley-directives.ts`, so that it will included in `JSVALLEY_DIRECTIVES`

        import { NG2_MAP_DIRECTIVES } from './jui-map';

        export const JSVALLEY_DIRECTIVES: any[] = [
          ..
          NG2_MAP_DIRECTIVES
        ];


