import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from "@angular/forms";
import { HTTP_PROVIDERS } from "@angular/http";

import { AppComponent }   from './app.component';
import { Ng2UIModule }    from "../../src/ng2-ui.module";

@NgModule({
  imports: [BrowserModule, Ng2UIModule, FormsModule],
  declarations: [AppComponent],
  providers: [HTTP_PROVIDERS],
  bootstrap: [ AppComponent ]
})
export class AppModule { }