# Angular2 User Interface

Collection of Quality Angular 2 UIs

[Demo](https://jsvalley.github.io/ng2-ui)


## Current Modules Included
  * ng2-auto-complete
  * ng2-datetime-picker
  * ng2-map
  * ng2-overlay
  * ng2-scrollable

## Install 

   * npm
   
         $ npm install ng2-ui
   
   * update `config.js` map and packages
   
         //map tells the System loader where to look for things
         map: {
           app: "./src",
           '@angular': 'https://npmcdn.com/@angular',
           ...
           'ng2-ui': 'https://npmcdn.com/ng2-ui' // <----- this
         },
    
         packages: {
            app: {
              main: './main.ts',
              defaultExtension: 'ts'
            },
            ...
            'ng2-ui': {                              // <----- this
              main: 'dist/index.js',
              defaultExtension: 'js'
            }
         }

## Usage

Import and include directives for your application

* app.ts

        //our root app component
        import {Component, enableProdMode} from '@angular/core'
        import { NG2_DIRECTIVES } from "ng2-ui";
        enableProdMode();

        @Component({
          selector: 'my-app',
          templateUrl: 'src/app.tpl.html',
          directives: [ NG2_DIRECTIVES ]
        })
        export class App {
          arrayOfValues: any[] = ['a', 'b', 'c'];
        }

* src/app.tpl.html

        <input ng2-auto-complete [source]="arrayOfKeyValues" [(ngModel)]="myModel" />
        
        <input [(ngModel)]="date1" ng2-datetime-picker /> 
        
        <ng2-map center="Brampton, Canada"></ng2-map>

## Directives
 * `ng2-map` Google Maps Api V3 Wrappe
 * `ng2-auto-complete` Typeahead for local and remote sources
 * `ng2-datetime-picker` Date picker, Time picker, or both
 * `ng2-overlay`  Generic overlays
 * `ng2-scrollable` Scroll Enabler and Sccoll Detector

## For Developer,

To publish a directive as a part of Ng2 UI, `ng2-*`

1. Update `build.sh` by adding additional line, so it will be added to distribution

        declare -a packages=(
            ng2-map
            ng2-auto-complete
            ng2-datetime-picker
            ng2-overlay
            ng2-scrollable
        )

2. Update `dist/ng2-directives.ts`, so that it will included in `NG2_DIRECTIVES`

        import { NG2_MAP_DIRECTIVES } from './ng2-map';

        export const NG2_DIRECTIVES: any[] = [
          ..
          NG2_MAP_DIRECTIVES
        ];

3. Build again
        
        $ npm run build

