# Angular2 User Interface

Collection of Quality Angular 2 UIs


## Modules Included

  * ng2-auto-complete
  * ng2-collapsable
  * ng2-datetime-picker
  * ng2-infinite-list
  * ng2-map
  * ng2-menu
  * ng2-overlay
  * ng2-parallax-scroll
  * ng2-popup
  * ng2-scrollable
  * ng2-sticky
  * ng2-tab
  * ng2-tooltip-overlay

## Install 

   * npm
   
         $ npm install ng2-ui

   * update `systemjs.config.js` map and packages
   
         //map tells the System loader where to look for things
         map: {
           app: "./src",
           '@angular': 'https://npmcdn.com/@angular',
           'ng2-ui': 'https://npmcdn.com/ng2-ui/dist'             // <----- this
         },
    
         packages: {
            app: { main: './main.ts', defaultExtension: 'ts' },
            'ng2-ui': { main: 'index.js', defaultExtension: 'js'} // <----- this
         }

## Usage

* import `Ng2UIModule` into your app.module.ts

        import { NgModule }       from '@angular/core';
        import { BrowserModule }  from '@angular/platform-browser';
        import { FormsModule }    from "@angular/forms";
        import { HTTP_PROVIDERS } from "@angular/http";

        import { AppComponent }   from './app.component';
        import { Ng2UIModule }    from 'ng2-ui';              // <---- this

        @NgModule({
          imports: [BrowserModule, FormsModule, Ng2UIModule], // <--- this
          declarations: [AppComponent],
          providers: [HTTP_PROVIDERS],
          bootstrap: [AppComponent]
        })
        export class AppModule { }

* It's ready. Now use it in your template

        <input ng2-auto-complete [source]="arrayOfKeyValues" [(ngModel)]="myModel" />
        
        <input [(ngModel)]="date1" ng2-datetime-picker /> 
        
        <ng2-map center="Brampton, Canada"></ng2-map>

## **ng2-ui** welcomes new members and contributors

This module is only improved and maintained by contributors like you;

As a contributor, it's NOT required to be skilled in Javascript nor Angular2. 
It’s required to be open-minded and interested in helping others.
You can contribute to the following;

  * Updating README.md
  * Making more and clearer comments
  * Answering issues and building FAQ
  * Documentation
  * Translation

In result of your active contribution, you will be listed as a core contributor
on https://ng2-ui.github.io, and a member of ng2-ui too.

If you are interested in becoming a contributor and/or a member of ng-ui,
please send me email to `allenhwkim AT gmail.com` with your github id. 


## For Developer,

### To start

    $ git clone https://github.com/ng2-ui/ng2-map.git
    $ cd ng2-popup
    $ npm install
    $ npm start


### To publish a new directive as a part of `ng2-ui`

1. Update `build.sh` by adding additional line, so it will do automatically `npm uninstall` and `npm install`

        declare -a packages=(
            ng2-map
            ng2-auto-complete
            ng2-datetime-picker
            ng2-overlay
            ng2-scrollable
        )

2. Update `src/index.ts` and `src/ng2-directives.ts`, so that it will included in `NG2_DIRECTIVES`

   **src/index.ts**

        export * from './ng2-auto-complete/index';
        export * from './ng2-datetime-picker/index';
        export * from './ng2-map/index';                // <--- this
        export * from './ng2-menu/index';
        export * from './ng2-overlay/index';
        export * from './ng2-popup/index';
        export * from './ng2-scrollable/index';
        export * from './ng2-tooltip-overlay/index';

        export * from './directives';
        export * from './providers';

3. Build again
        
        $ npm run build

