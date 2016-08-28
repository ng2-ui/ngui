import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { BrowserModule  } from '@angular/platform-browser';

import {Ng2TabComponent} from "./ng2-tab.component";

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [Ng2TabComponent],
  exports: [Ng2TabComponent]
})
export class Ng2TabModule {}
