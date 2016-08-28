import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { BrowserModule  } from '@angular/platform-browser';

import { Ng2ParallaxScrollDirective} from "./ng2-parallax-scroll.directive";

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [Ng2ParallaxScrollDirective],
  exports: [ Ng2ParallaxScrollDirective ]
})
export class Ng2ParallaxScrollModule {}
