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
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            // template: templateStr,
            directives: [
                partial_datetime_picker_component_1.PartialDateTimePickerComponent,
                partial_auto_complete_component_1.PartialAutoCompleteComponent,
                partial_ng2_map_component_1.PartialNg2MapComponent,
                partial_tab_component_1.PartialTabComponent,
                partial_accordion_component_1.PartialAccordionComponent
            ],
            template: "\n    <partial-datetime-picker></partial-datetime-picker>\n    <partial-auto-complete></partial-auto-complete>\n    <partial-ng2-map></partial-ng2-map>\n    <partial-tab></partial-tab>\n    <partial-accordion></partial-accordion>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map