import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { BrowserModule  } from '@angular/platform-browser';

import { Overlay } from './overlay';
import { OverlayManager } from './overlay-manager';
import { OverlayDirective } from './overlay.directive';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [OverlayDirective],
  providers: [ OverlayManager ],
  exports: [ OverlayDirective ]
})
export class Ng2OverlayModule {}
