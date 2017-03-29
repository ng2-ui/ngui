# Angular2 User Interface

Collection of Quality Angular 2 UIs

[Example](https://rawgit.com/ng2-ui/ngui/master/app/index.html)

## Modules Included

| module               | version | most-recent version                                                                 |
| -------------------- | ------- | ----------------------------------------------------------------------------------- |
| @ngui/auto-complete  | 0.13.0  | ![](https://badge.fury.io/js/%40ngui%2Fauto-complete.svg)                           |
| @ngui/collapsable    | 0.5.0   | ![](https://badge.fury.io/js/%40ngui%2Fcollapsable.svg)                             |
| @ngui/datetime-picker| 0.16.0  | ![](https://badge.fury.io/js/%40ngui%2Fdatetime-picker.svg)                         |
| @ngui/infinite-list  | 0.6.0   | ![](https://badge.fury.io/js/%40ngui%2Finfinite-list.svg)                           |
| @ngui/map            | 0.17.0  | ![](https://badge.fury.io/js/%40ngui%2Fmap.svg)                                     |
| @ngui/menu           | 0.6.0   | ![](https://badge.fury.io/js/%40ngui%2Fmenu.svg)                                    |
| @ngui/overlay        | 0.8.0   | ![](https://badge.fury.io/js/%40ngui%2Foverlay.svg)                                 |
| @ngui/parallax-scroll| 0.5.0   | ![](https://badge.fury.io/js/%40ngui%2Fparallax-scroll.svg)                         |
| @ngui/popup          | 0.5.0   | ![](https://badge.fury.io/js/%40ngui%2Fpopup.svg)                                   |
| @ngui/scrollable     | 0.9.0   | ![](https://badge.fury.io/js/%40ngui%2Fscrollable.svg)                              |
| @ngui/sticky         | 0.6.0   | ![](https://badge.fury.io/js/%40ngui%2Fsticky.svg)                                  |
| @ngui/tab            | 0.5.0   | ![](https://badge.fury.io/js/%40ngui%2Ftab.svg)                                     |
| @ngui/tooltip        | 0.5.0   | ![](https://badge.fury.io/js/%40ngui%2Ftooltip.svg)                                 |
| @ngui/sortable       | 0.4.0   | ![](https://badge.fury.io/js/%40ngui%2Fsortable.svg)                                |
| @ngui/react          | 0.3.0   | ![](https://badge.fury.io/js/%40ngui%2Freact.svg)                                   |

## Install

* npm

    ```Shell
    $ npm install @ngui/ngui @types/googlemaps @types/hammerjs --save-dev
    ```

* update `systemjs.config.js` map and packages

    ```TypeScript
    map['@ngui/ngui'] =  'node_modules/@ngui/ngui/dist/ngui.umd.js';
    ```

## Usage

* import `NguiModule` into your app.module.ts

    ```TypeScript
    import { NgModule }       from '@angular/core';
    import { BrowserModule }  from '@angular/platform-browser';
    import { FormsModule }    from "@angular/forms";
    import { HttpModule } from '@angular/http';

    import { AppComponent }   from './app.component';
    import { NguiModule, NguiMapModule }  from '@ngui/ngui';              // <---- this

    @NgModule({
      imports: [
        BrowserModule, 
        FormsModule, 
        HttpModule, 
        NguiModule,  // <--- this
        NguiMapModule['forRoot']({ apiUrl: 'YOUR GOOGLE MAP URL WITH KEY'}) // <---- this
      ],
      declarations: [AppComponent],
      bootstrap: [AppComponent]
    })
    export class AppModule { }
    ```

* It's ready. Now use it in your template

    ```HTML
    <input ngui-auto-complete [source]="arrayOfKeyValues" [(ngModel)]="myModel" />

    <input [(ngModel)]="date1" ngui-datetime-picker />

    <ngui-map center="Brampton, Canada"></ngui-map>
    ```

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

## For Developers

### To start

```Shell
$ git clone https://github.com/ng2-ui/ngui.git
$ cd ngui
$ npm install
$ npm run build
$ npm start
```

### To update dependencies

```Shell
$ npm run upgrade
```
