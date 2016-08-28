import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { BrowserModule  } from '@angular/platform-browser';

import {OverlayManager}          from './ng2-overlay/index';

import {Ng2AutoCompleteModule}   from "./ng2-auto-complete/index";
import {Ng2DatetimePickerModule} from "./ng2-datetime-picker/index";
import {Ng2CollapsableModule}    from "./ng2-collapsable/index";
import {Ng2InfiniteListModule}   from "./ng2-infinite-list/index";
import {Ng2MapModule}            from "./ng2-map/index";
import {Ng2MenuModule}           from "./ng2-menu/index";
import {Ng2ParallaxScrollModule} from "./ng2-parallax-scroll/index";
import {Ng2PopupModule}          from "./ng2-popup/index";
import {Ng2StickyModule}         from "./ng2-sticky/index";
import {Ng2TabModule}            from "./ng2-tab/index";
import {Ng2TooltipOverlayModule} from "./ng2-tooltip-overlay/index";
import {Ng2OverlayModule}        from "./ng2-overlay/index";
import {Ng2ScrollableModule}     from "./ng2-scrollable/index";
import {Ng2SortableModule}       from "./ng2-ui-sortable/index";

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

