import { NgModule       } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';

import {
  AutoCompleteDirective,
  DateTimePickerDirective,
  Ng2MapComponent,
  Marker,
  InfoWindow,
  OverlayDirective,
  Ng2ScrollableDirective,
  Ng2TooltipDirective,
  Ng2MenuDirective,
  Ng2MessagePopupComponent,
  Ng2InfiniteListDirective,
  Ng2TabComponent,
  Ng2CollapsableComponent,
  Ng2ParallaxScrollDirective,
  Ng2PopupComponent,
  Ng2StickyDirective,
  Ng2ScrollableDirective,
  OverlayManager
} from './index';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [
    AutoCompleteDirective,
    DateTimePickerDirective,
    Ng2MapComponent,
    Marker,
    InfoWindow,
    OverlayDirective,
    Ng2ScrollableDirective,
    Ng2TooltipDirective,
    Ng2MenuDirective,
    Ng2MessagePopupComponent,
    Ng2InfiniteListDirective,
    Ng2TabComponent,
    Ng2CollapsableComponent,
    Ng2ParallaxScrollDirective,
    Ng2PopupComponent,
    Ng2StickyDirective,
    Ng2ScrollableDirective
  ],
  exports: [
    AutoCompleteDirective,
    DateTimePickerDirective,
    Ng2MapComponent,
    Marker,
    InfoWindow,
    OverlayDirective,
    Ng2ScrollableDirective,
    Ng2TooltipDirective,
    Ng2MenuDirective,
    Ng2MessagePopupComponent,
    Ng2InfiniteListDirective,
    Ng2TabComponent,
    Ng2CollapsableComponent,
    Ng2ParallaxScrollDirective,
    Ng2PopupComponent,
    Ng2StickyDirective,
    Ng2ScrollableDirective
  ],
  providers: [
    OverlayManager
  ]
})
export class Ng2UIModule { }
