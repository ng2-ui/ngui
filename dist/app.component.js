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
var core_1 = require('@angular/core');
var partial_datetime_picker_component_1 = require("./partials/partial-datetime-picker.component");
var partial_auto_complete_component_1 = require("./partials/partial-auto-complete.component");
var partial_ng2_map_component_1 = require("./partials/partial-ng2-map.component");
var partial_tab_component_1 = require("./partials/partial-tab.component");
var partial_accordion_component_1 = require("./partials/partial-accordion.component");
var partial_overlay_component_1 = require("./partials/partial-overlay.component");
var partial_scrollable_component_1 = require("./partials/partial-scrollable.component");
var ng2_ui_1 = require("ng2-ui");
core_1.enableProdMode();
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.scrollTo = function (selector) {
        ng2_ui_1.Ng2ScrollableDirective.scrollTo(selector);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            // template: templateStr,
            directives: [
                partial_datetime_picker_component_1.PartialDateTimePickerComponent,
                partial_auto_complete_component_1.PartialAutoCompleteComponent,
                partial_ng2_map_component_1.PartialNg2MapComponent,
                partial_tab_component_1.PartialTabComponent,
                partial_accordion_component_1.PartialAccordionComponent,
                partial_overlay_component_1.PartialOverlayComponent,
                partial_scrollable_component_1.PartialScrollableComponent,
                ng2_ui_1.Ng2ScrollableDirective
            ],
            template: "\n    <div class=\"menu\">\n      <div class=\"icon\" (click)=\"opened = !opened\">&#9776;</div>\n      <div class=\"items\" *ngIf=\"opened\">\n        <ul>\n          <li [class.current]=\"scrolled=='datetime-picker'\" (click)=\"scrollTo('#datetime-picker')\">Datetime Picker\n          <li [class.current]=\"scrolled=='auto-complete'\" (click)=\"scrollTo('#auto-complete')\" >Autocomplete\n          <li [class.current]=\"scrolled=='map'\" (click)=\"scrollTo('#map')\" >Map\n          <li [class.current]=\"scrolled=='tab'\" (click)=\"scrollTo('#tab')\" >Tab\n          <li [class.current]=\"scrolled=='accordion'\" (click)=\"scrollTo('#accordion')\" >Accordion\n          <li [class.current]=\"scrolled=='overlay'\" (click)=\"scrollTo('#overlay')\" >Overlay\n          <li [class.current]=\"scrolled=='scrollable'\" (click)=\"scrollTo('#scrollable')\" >Scrollable\n        </ul> \n      </div>\n    </div>\n    <div ng2-scrollable (scrolledTo)=\"scrolled=$event\" (click)=\"opened=false\">\n      <partial-datetime-picker id=\"datetime-picker\"></partial-datetime-picker>\n      <partial-auto-complete id=\"auto-complete\"></partial-auto-complete>\n      <partial-ng2-map id=\"map\"></partial-ng2-map>\n      <partial-tab id=\"tab\"></partial-tab>\n      <partial-accordion id=\"accordion\"></partial-accordion>\n      <partial-overlay id=\"overlay\"></partial-overlay>\n      <partial-scrollable id=\"scrollable\"></partial-scrollable>\n    </div>\n  ",
            styles: ["\n    .menu {\n      position:fixed; top:0; left: 0;\n      color: #fff;\n      z-index: 10;\n      background-color: #159957;\n      background-image: linear-gradient(120deg, #155799, #156799);\n      padding: 5px;\n    }\n    .menu .icon {\n      padding: 5px;\n      font-size: 24px;\n    }\n    .menu .items {\n      width: 20%;\n      min-width: 200px;\n    }\n    .menu .items ul {\n      list-style: none; padding: 0\n    }\n    .menu .items ul li {\n      padding: 5px 10px;\n    }\n    .menu .items ul li:hover {\n      background-color: #ccc;\n      color: #155799;\n    }\n    .menu .items ul li.current {\n      background-color: #fff;\n      color: #159957;\n    }\n  "]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map