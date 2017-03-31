import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { BrowserModule  } from '@angular/platform-browser';

import { NguiAutoCompleteModule }   from "@ngui/auto-complete";
import { NguiDatetimePickerModule } from "@ngui/datetime-picker";
import { NguiMapModule }            from "@ngui/map";
import { NguiPopupModule }          from "@ngui/popup";
import { NguiMenuModule }           from "@ngui/menu";
import { NguiParallaxScrollModule } from "@ngui/parallax-scroll";
import { NguiStickyModule }         from "@ngui/sticky";
import { NguiTabModule }            from "@ngui/tab";
import { NguiTooltipModule }        from "@ngui/tooltip";
import { NguiSortableModule }       from "@ngui/sortable";
import { NguiOverlayModule }        from '@ngui/overlay';
import { NguiScrollableModule }     from "@ngui/scrollable";
import { NguiCollapsableModule }    from "@ngui/collapsable";
import { NguiInfiniteListModule }   from "@ngui/infinite-list";
import { NguiReactModule }          from "@ngui/react";
import { NguiUtilsModule }         from "@ngui/utils";

import { NguiOverlayManager }  from '@ngui/overlay';
import { NguiScrollableDirective } from "@ngui/scrollable";
import { NguiMessagePopupComponent, NguiPopupComponent }   from "@ngui/popup";
import { NguiMapComponent } from "@ngui/map";
import {
  scrollTo,
  elementVisible,
  computedStyle,
  outerWidth,
  outerHeight,
  MemoryStorage,
  Storage
} from '@ngui/utils';

export {
  NguiOverlayManager,
  NguiScrollableDirective,
  NguiMessagePopupComponent,
  NguiPopupComponent,
  NguiMapComponent,
  NguiMapModule,
  NguiUtilsModule,
  scrollTo,
  elementVisible,
  computedStyle,
  outerWidth,
  outerHeight,
  MemoryStorage,
  Storage
};

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  exports: [
    NguiAutoCompleteModule,
    NguiDatetimePickerModule,
    NguiMapModule,
    NguiInfiniteListModule,
    NguiMenuModule,
    NguiParallaxScrollModule,
    NguiPopupModule,
    NguiStickyModule,
    NguiTabModule,
    NguiScrollableModule,
    NguiTooltipModule,
    NguiOverlayModule,
    NguiSortableModule,
    NguiCollapsableModule,
    NguiReactModule,
    NguiUtilsModule
  ],
  providers: [ NguiOverlayManager ]
})
export class NguiModule {}
