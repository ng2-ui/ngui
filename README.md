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
   
         map['ng2-ui'] =  'node_modules/ng2-ui/dist';
         packages['ng2-ui'] = {main: 'ng2-ui.umd.js', defaultExtension: 'js'}

## Usage

* import `Ng2UIModule` into your app.module.ts

        import { NgModule }       from '@angular/core';
        import { BrowserModule }  from '@angular/platform-browser';
        import { FormsModule }    from "@angular/forms";
        import { HttpModule } from '@angular/http';

        import { AppComponent }   from './app.component';
        import { Ng2UIModule }    from 'ng2-ui';              // <---- this

        @NgModule({
          imports: [BrowserModule, FormsModule, HttpModule, Ng2UIModule], // <--- this
          declarations: [AppComponent],
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
    $ cd ng2-ui
    $ npm install
    $ npm run build
    $ npm start

