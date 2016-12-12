# Angular2 User Interface

Collection of Quality Angular 2 UIs

[Example]((https://rawgit.com/ng2-ui/ng2-ui/master/app/index.html)

## Modules Included

| module             | version | most-recent version                                                                 |
| ------------------ | ------- | ----------------------------------------------------------------------------------- |
| ng2-auto-complete  | 0.8.2   | ![](https://badge.fury.io/js/ng2-auto-complete.svg)                                 |
| ng2-collapsable    | 0.4.2   | ![](https://badge.fury.io/js/ng2-collapsable.svg)                                   |
| ng2-datetime-picker| 0.12.0  | ![](https://badge.fury.io/js/ng2-datetime-picker.svg)                               |
| ng2-infinite-list  | 0.5.1   | ![](https://badge.fury.io/js/ng2-infinite-list.svg)                                 |
| ng2-map            | 0.12.2  | ![](https://badge.fury.io/js/ng2-map.svg)                                           |
| ng2-menu           | 0.5.1   | ![](https://badge.fury.io/js/ng2-menu.svg)                                          |
| ng2-overlay        | 0.7.0   | ![](https://badge.fury.io/js/ng2-overlay.svg)                                       |
| ng2-parallax-scroll| 0.4.0   | ![](https://badge.fury.io/js/ng2-parallax-scroll.svg)                               |
| ng2-popup          | 0.4.0   | ![](https://badge.fury.io/js/ng2-popup.svg)                                         |
| ng2-scrollable     | 0.7.0   | ![](https://badge.fury.io/js/ng2-scrollable.svg)                                    |
| ng2-sticky         | 0.4.0   | ![](https://badge.fury.io/js/ng2-sticky.svg)                                        |
| ng2-tab            | 0.4.0   | ![](https://badge.fury.io/js/ng2-tab.svg)                                           |
| ng2-tooltip-overlay| 0.4.0   | ![](https://badge.fury.io/js/ng2-tooltip-overlay.svg)                               |
| ng2-ui-sortable    | 0.3.0   | ![](https://badge.fury.io/js/ng2-ui-sortable.svg)                                   |

## Install

* npm

    ```Shell
    $ npm install ng2-ui
    ```

* update `systemjs.config.js` map and packages

    ```TypeScript
    map['ng2-ui'] =  'node_modules/ng2-ui/dist';
    packages['ng2-ui'] = {main: 'ng2-ui.umd.js', defaultExtension: 'js'}
    ```

## Usage

* import `Ng2UIModule` into your app.module.ts

    ```TypeScript
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
    ```

* It's ready. Now use it in your template

    ```HTML
    <input ng2-auto-complete [source]="arrayOfKeyValues" [(ngModel)]="myModel" />

    <input [(ngModel)]="date1" ng2-datetime-picker />

    <ng2-map center="Brampton, Canada"></ng2-map>
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
$ git clone https://github.com/ng2-ui/ng2-map.git
$ cd ng2-ui
$ npm install
$ npm run build
$ npm start
```

### To update dependencies

```Shell
$ npm run upgrade
```
