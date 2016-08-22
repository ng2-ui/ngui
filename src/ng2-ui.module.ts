import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { BrowserModule  } from '@angular/platform-browser';

import {Ng2CollapsableComponent}                                    from './ng2-collapsable/index';
import {Ng2InfiniteListDirective}                                   from './ng2-infinite-list/index';
import {InfoWindow, Ng2MapComponent, Marker}                        from './ng2-map/index';
import {Ng2MenuDirective}                                           from './ng2-menu/index';
import {OverlayDirective, OverlayManager, Overlay}                  from './ng2-overlay/index';
import {Ng2ParallaxScrollDirective}                                 from './ng2-parallax-scroll/index';
import {Ng2MessagePopupComponent, Ng2PopupComponent}                from './ng2-popup/index';
import {Ng2ScrollableDirective}                                     from './ng2-scrollable/index';
import {Ng2StickyDirective}                                         from './ng2-sticky/index';
import {Ng2TabComponent}                                            from './ng2-tab/index';
import {Ng2TooltipDirective}                                        from './ng2-tooltip-overlay/index';

import {Ng2AutoCompleteModule}  from "./ng2-auto-complete/index";
import {Ng2DatetimePickerModule} from "./ng2-datetime-picker/index";

var directives = [
  Ng2CollapsableComponent,
  Ng2InfiniteListDirective,
  Ng2MapComponent, Marker, InfoWindow,
  Ng2MenuDirective,
  OverlayDirective,
  Ng2ParallaxScrollDirective,
  Ng2MessagePopupComponent, Ng2PopupComponent,
  Ng2ScrollableDirective,
  Ng2StickyDirective,
  Ng2TabComponent,
  Ng2TooltipDirective];
@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [directives],
  exports: [
    directives,
    Ng2AutoCompleteModule,
    Ng2DatetimePickerModule
  ],
  providers: [ OverlayManager ]
})
export class Ng2UIModule {}

