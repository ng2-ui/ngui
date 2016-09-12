///<reference path="../node_modules/@types/hammerjs/index.d.ts"/>
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { BrowserModule  } from '@angular/platform-browser';

import {
  OverlayManager,
  Ng2OverlayModule
}  from 'ng2-overlay';
import { Ng2AutoCompleteModule }   from "ng2-auto-complete";
import { Ng2DatetimePickerModule } from "ng2-datetime-picker";
import { Ng2CollapsableModule }    from "ng2-collapsable";
import { Ng2InfiniteListModule }   from "ng2-infinite-list";
import {
  Ng2MapModule,
  Ng2MapComponent
} from "ng2-map";
import { Ng2MenuModule }           from "ng2-menu";
import { Ng2ParallaxScrollModule } from "ng2-parallax-scroll";
import {
  Ng2PopupModule,
  Ng2MessagePopupComponent,
  Ng2PopupComponent
}             from "ng2-popup";
import { Ng2StickyModule }         from "ng2-sticky";
import { Ng2TabModule }            from "ng2-tab";
import { Ng2TooltipOverlayModule } from "ng2-tooltip-overlay";
import {
  Ng2ScrollableModule,
  Ng2ScrollableDirective
}         from "ng2-scrollable";
import { Ng2SortableModule }       from "ng2-ui-sortable";

export {
  OverlayManager,
  Ng2PopupComponent,
  Ng2MessagePopupComponent,
  Ng2MapComponent,
  Ng2ScrollableDirective
};

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  exports: [
    Ng2AutoCompleteModule,
    Ng2DatetimePickerModule,
    Ng2CollapsableModule,
    Ng2InfiniteListModule,
    Ng2MapModule,
    Ng2MenuModule,
    Ng2ParallaxScrollModule,
    Ng2PopupModule,
    Ng2StickyModule,
    Ng2TabModule,
    Ng2ScrollableModule,
    Ng2TooltipOverlayModule,
    Ng2OverlayModule,
    Ng2SortableModule
  ],
  providers: [ OverlayManager ]
})
export class Ng2UIModule {}

