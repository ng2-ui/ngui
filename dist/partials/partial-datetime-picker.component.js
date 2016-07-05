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
var ng2_ui_1 = require("ng2-ui");
var PartialDateTimePickerComponent = (function () {
    function PartialDateTimePickerComponent() {
        this.arrayOfStrings = ["this", "is", "array", "of", "text"];
        this.arrayOfKeyValues = [{ id: 1, value: 'One' }, { id: 2, value: 'Two' }, { id: 3, value: 'Three' }, { id: 4, value: 'Four' }];
        this.arrayOfKeyValues2 = [{ key: 1, name: 'Key One' }, { key: 2, name: 'Key Two' }, { key: 3, name: 'Key Three' }, { key: 4, name: 'Key Four' }];
        this.googleGeoCode = "https://maps.googleapis.com/maps/api/geocode/json?address=:keyword";
    }
    PartialDateTimePickerComponent = __decorate([
        core_1.Component({
            selector: 'partial-datetime-picker',
            template: "\n    <h2 class=\"group-title\">\n      <a name=\"ng2-datetime-picker\" href=\"https://github.com/jsvalley/ng2-datetime-picker\">ng2-datetime-picker</a>\n    </h2>\n\n    <div class=\"directive-group ng2-datetime-picker\">\n\n      <h3>Date Only</h3>\n      <input [(ngModel)]=\"date1\" ng2-datetime-picker date-only=\"true\" />\n      <pre>&lt;input [(ngModel)]=\"date1\" ng2-datetime-picker date-only=\"true\" /&gt;</pre>\n\n      <h3>Current Date and Time</h3>\n      <input [(ngModel)]=\"date2\" ng2-datetime-picker [close-on-select]=\"false\" />\n      <pre>&lt;input  [(ngModel)]=\"date2\" ng2-datetime-picker [close-on-select]=\"false\" /&gt;</pre>\n\n      <h3>Specific Date and Time</h3>\n      <input [(ngModel)]=\"date3\" ng2-datetime-picker year=\"2014\" month=\"12\" day=\"31\" hour=\"23\" minute='59'/>\n      <pre>&lt;input ng-model=\"date3\" ng2-datetime-picker year=\"2014\" month=\"12\" day=\"31\" hour=\"23\" minute='59'/&gt;</pre>\n\n    </div>\n  ",
            directives: [ng2_ui_1.NG2_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], PartialDateTimePickerComponent);
    return PartialDateTimePickerComponent;
}());
exports.PartialDateTimePickerComponent = PartialDateTimePickerComponent;
//# sourceMappingURL=partial-datetime-picker.component.js.map