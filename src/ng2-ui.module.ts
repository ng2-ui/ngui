import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { BrowserModule  } from '@angular/platform-browser';

import { Ng2AutoCompleteModule }   from "ng2-auto-complete";
import { Ng2DatetimePickerModule } from "ng2-datetime-picker";
import { Ng2MapModule }            from "ng2-map";
import { Ng2PopupModule }          from "ng2-popup";
import { Ng2MenuModule }           from "ng2-menu";
import { Ng2ParallaxScrollModule } from "ng2-parallax-scroll";
import { Ng2StickyModule }         from "ng2-sticky";
import { Ng2TabModule }            from "ng2-tab";
import { Ng2TooltipOverlayModule } from "ng2-tooltip-overlay";
import { Ng2SortableModule }       from "ng2-ui-sortable";
import { Ng2OverlayModule }        from 'ng2-overlay';
import { Ng2ScrollableModule }     from "ng2-scrollable";
import { Ng2CollapsableModule }    from "ng2-collapsable";
import { Ng2InfiniteListModule }   from "ng2-infinite-list";

import { Ng2OverlayManager }  from 'ng2-overlay';
import { Ng2ScrollableDirective } from "ng2-scrollable";
import { Ng2MessagePopupComponent, Ng2PopupComponent }   from "ng2-popup";
import { Ng2MapComponent } from "ng2-map";

export {
  Ng2OverlayManager,
  Ng2ScrollableDirective,
  Ng2MessagePopupComponent,
  Ng2PopupComponent,
  Ng2MapComponent
};

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  exports: [
    Ng2AutoCompleteModule,
    Ng2DatetimePickerModule,
    Ng2MapModule,
    Ng2InfiniteListModule,
    Ng2MenuModule,
    Ng2ParallaxScrollModule,
    Ng2PopupModule,
    Ng2StickyModule,
    Ng2TabModule,
    Ng2ScrollableModule,
    Ng2TooltipOverlayModule,
    Ng2OverlayModule,
    Ng2SortableModule,
    Ng2CollapsableModule
  ],
  providers: [ Ng2OverlayManager ]
})
export class Ng2UIModule {}
