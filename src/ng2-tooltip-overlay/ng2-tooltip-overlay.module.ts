import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { BrowserModule  } from '@angular/platform-browser';

import {Ng2TooltipDirective} from "./ng2-tooltip-directive";
import {Ng2OverlayModule} from 'ng2-overlay/index';

@NgModule({
  imports: [ BrowserModule, FormsModule, Ng2OverlayModule ],
  declarations: [Ng2TooltipDirective],
  exports: [ Ng2TooltipDirective ]
})
export class Ng2TooltipOverlayModule {}
