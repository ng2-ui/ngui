"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var platform_browser_1 = require("@angular/platform-browser");
var ng2_auto_complete_1 = require("ng2-auto-complete");
var ng2_datetime_picker_1 = require("ng2-datetime-picker");
var ng2_map_1 = require("ng2-map");
var ng2_popup_1 = require("ng2-popup");
var ng2_menu_1 = require("ng2-menu");
var ng2_parallax_scroll_1 = require("ng2-parallax-scroll");
var ng2_sticky_1 = require("ng2-sticky");
var ng2_tab_1 = require("ng2-tab");
var ng2_tooltip_overlay_1 = require("ng2-tooltip-overlay");
var ng2_ui_sortable_1 = require("ng2-ui-sortable");
var ng2_overlay_1 = require("ng2-overlay");
var ng2_scrollable_1 = require("ng2-scrollable");
var ng2_collapsable_1 = require("ng2-collapsable");
var ng2_infinite_list_1 = require("ng2-infinite-list");
var ng2_overlay_2 = require("ng2-overlay");
exports.Ng2OverlayManager = ng2_overlay_2.Ng2OverlayManager;
var ng2_map_2 = require("ng2-map");
exports.Ng2MapComponent = ng2_map_2.Ng2MapComponent;
var ng2_scrollable_2 = require("ng2-scrollable");
exports.Ng2ScrollableDirective = ng2_scrollable_2.Ng2ScrollableDirective;
var ng2_popup_2 = require("ng2-popup");
exports.Ng2MessagePopupComponent = ng2_popup_2.Ng2MessagePopupComponent;
exports.Ng2PopupComponent = ng2_popup_2.Ng2PopupComponent;
var Ng2UIModule = (function () {
    function Ng2UIModule() {
    }
    return Ng2UIModule;
}());
Ng2UIModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule],
        exports: [
            ng2_auto_complete_1.Ng2AutoCompleteModule,
            ng2_datetime_picker_1.Ng2DatetimePickerModule,
            ng2_map_1.Ng2MapModule,
            ng2_infinite_list_1.Ng2InfiniteListModule,
            ng2_menu_1.Ng2MenuModule,
            ng2_parallax_scroll_1.Ng2ParallaxScrollModule,
            ng2_popup_1.Ng2PopupModule,
            ng2_sticky_1.Ng2StickyModule,
            ng2_tab_1.Ng2TabModule,
            ng2_scrollable_1.Ng2ScrollableModule,
            ng2_tooltip_overlay_1.Ng2TooltipOverlayModule,
            ng2_overlay_1.Ng2OverlayModule,
            ng2_ui_sortable_1.Ng2SortableModule,
            ng2_collapsable_1.Ng2CollapsableModule
        ],
        providers: [ng2_overlay_2.Ng2OverlayManager]
    }),
    __metadata("design:paramtypes", [])
], Ng2UIModule);
exports.Ng2UIModule = Ng2UIModule;
//# sourceMappingURL=index.js.map