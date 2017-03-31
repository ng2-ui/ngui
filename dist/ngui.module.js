"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var platform_browser_1 = require("@angular/platform-browser");
var auto_complete_1 = require("@ngui/auto-complete");
var datetime_picker_1 = require("@ngui/datetime-picker");
var map_1 = require("@ngui/map");
exports.NguiMapModule = map_1.NguiMapModule;
var popup_1 = require("@ngui/popup");
var menu_1 = require("@ngui/menu");
var parallax_scroll_1 = require("@ngui/parallax-scroll");
var sticky_1 = require("@ngui/sticky");
var tab_1 = require("@ngui/tab");
var tooltip_1 = require("@ngui/tooltip");
var sortable_1 = require("@ngui/sortable");
var overlay_1 = require("@ngui/overlay");
var scrollable_1 = require("@ngui/scrollable");
var collapsable_1 = require("@ngui/collapsable");
var infinite_list_1 = require("@ngui/infinite-list");
var react_1 = require("@ngui/react");
var utils_1 = require("@ngui/utils");
exports.NguiUtilsModule = utils_1.NguiUtilsModule;
var overlay_2 = require("@ngui/overlay");
exports.NguiOverlayManager = overlay_2.NguiOverlayManager;
var scrollable_2 = require("@ngui/scrollable");
exports.NguiScrollableDirective = scrollable_2.NguiScrollableDirective;
var popup_2 = require("@ngui/popup");
exports.NguiMessagePopupComponent = popup_2.NguiMessagePopupComponent;
exports.NguiPopupComponent = popup_2.NguiPopupComponent;
var map_2 = require("@ngui/map");
exports.NguiMapComponent = map_2.NguiMapComponent;
var utils_2 = require("@ngui/utils");
exports.scrollTo = utils_2.scrollTo;
exports.elementVisible = utils_2.elementVisible;
exports.computedStyle = utils_2.computedStyle;
exports.outerWidth = utils_2.outerWidth;
exports.outerHeight = utils_2.outerHeight;
exports.MemoryStorage = utils_2.MemoryStorage;
exports.Storage = utils_2.Storage;
var NguiModule = (function () {
    function NguiModule() {
    }
    return NguiModule;
}());
NguiModule.decorators = [
    { type: core_1.NgModule, args: [{
                imports: [platform_browser_1.BrowserModule, forms_1.FormsModule],
                exports: [
                    auto_complete_1.NguiAutoCompleteModule,
                    datetime_picker_1.NguiDatetimePickerModule,
                    map_1.NguiMapModule,
                    infinite_list_1.NguiInfiniteListModule,
                    menu_1.NguiMenuModule,
                    parallax_scroll_1.NguiParallaxScrollModule,
                    popup_1.NguiPopupModule,
                    sticky_1.NguiStickyModule,
                    tab_1.NguiTabModule,
                    scrollable_1.NguiScrollableModule,
                    tooltip_1.NguiTooltipModule,
                    overlay_1.NguiOverlayModule,
                    sortable_1.NguiSortableModule,
                    collapsable_1.NguiCollapsableModule,
                    react_1.NguiReactModule,
                    utils_1.NguiUtilsModule
                ],
                providers: [overlay_2.NguiOverlayManager]
            },] },
];
/** @nocollapse */
NguiModule.ctorParameters = function () { return []; };
exports.NguiModule = NguiModule;
//# sourceMappingURL=ngui.module.js.map