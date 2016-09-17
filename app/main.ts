// The browser platform with a compiler
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// The app module
import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from "@angular/forms";
import { HttpModule } from '@angular/http';
import { Ng2UIModule }    from 'ng2-ui';

import { AppComponent }   from './app.component';


@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule, Ng2UIModule],
  declarations: [AppComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

// Compile and launch the module
platformBrowserDynamic().bootstrapModule(AppModule);