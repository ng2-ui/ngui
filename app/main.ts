// The browser platform with a compiler
import 'core-js/es6';
import 'core-js/es7/reflect';
import 'zone.js/dist/zone';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// The app module
import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from "@angular/forms";
import { HttpModule } from '@angular/http';
import { NguiModule, NguiMapModule }  from '@ngui/ngui';

import { AppComponent }   from './app.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NguiModule,
    NguiMapModule['forRoot']({
      apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyCbMGRUwcqKjlYX4h4-P6t-xcDryRYLmCM' +
      '&libraries=visualization,places,drawing',
    })
  ],
  declarations: [AppComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

// Compile and launch the module
platformBrowserDynamic().bootstrapModule(AppModule);