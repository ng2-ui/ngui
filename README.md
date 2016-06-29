# JsValley User Interface

Collection of Quality Angular 2 UIs

[Demo](http://plnkr.co/edit/BcGThZ?p=preview)

## Install 

   * npm
   
         $ npm install jsvalley-ui
   
   * update `config.js` map and packages
   
         //map tells the System loader where to look for things
         map: {
           app: "./src",
           '@angular': 'https://npmcdn.com/@angular',
           ...
           'jsvalley-ui': 'https://npmcdn.com/jsvalley-ui' // <----- this
         },
    
         packages: {
            app: {
              main: './main.ts',
              defaultExtension: 'ts'
            },
            ...
            'jsvalley-ui': {                              // <----- this
              main: 'dist/index.js',
              defaultExtension: 'js'
            }
         }

## Usage

Import and include directives for your application

* app.ts

        //our root app component
        import {Component, enableProdMode} from '@angular/core'
        import { JSVALLEY_DIRECTIVES } from "jsvalley-ui";
        enableProdMode();

        @Component({
          selector: 'my-app',
          templateUrl: 'src/app.tpl.html',
          directives: [ JSVALLEY_DIRECTIVES ]
        })
        export class App {
          arrayOfValues: any[] = ['a', 'b', 'c'];
        }

* src/app.tpl.html

        <input jui-auto-complete [source]="arrayOfKeyValues" [(ngModel)]="myModel" />
        
        <input [(ngModel)]="date1" jui-datetime-picker /> 
        
        <jui-map center="Brampton, Canada"></jui-map>

## Directives
 * `jui-map` Google Maps Api V3 Wrappe
 * `jui-auto-complete` Typeahead for local and remote sources
 *  `jui-datetime-picker` Date picker, Time picker, or both

## For Developer,

To publish a directive as a part of Jsvalley UI, `jui`

1. Install a modularized directive.
 
       e.g. $ npm install ng2-map

2. Update `build.sh` by adding additional line, so it will be added to distribution

        cp -R node_modules/ng2-map/dist             dist/jui-map

3. Update `dist/jsvalley-directives.ts`, so that it will included in `JSVALLEY_DIRECTIVES`

        import { NG2_MAP_DIRECTIVES } from './jui-map';

        export const JSVALLEY_DIRECTIVES: any[] = [
          ..
          NG2_MAP_DIRECTIVES
        ];

4. Build again
        
        $ npm run build

