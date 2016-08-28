import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { BrowserModule  } from '@angular/platform-browser';

import {Ng2ScrollableDirective} from "./ng2-scrollable.directive";

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [Ng2ScrollableDirective],
  exports: [ Ng2ScrollableDirective ]
})
export class Ng2ScrollableModule {}
