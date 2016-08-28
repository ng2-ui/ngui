import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { BrowserModule  } from '@angular/platform-browser';
import {Ng2InfiniteListDirective} from "./ng2-infinite-list.directive";

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [Ng2InfiniteListDirective],
  exports:  [Ng2InfiniteListDirective]
})
export class Ng2InfiniteListModule {}
