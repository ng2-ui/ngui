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
var PartialAutoCompleteComponent = (function () {
    function PartialAutoCompleteComponent() {
        this.arrayOfStrings = ["this", "is", "array", "of", "text"];
        this.arrayOfKeyValues = [{ id: 1, value: 'One' }, { id: 2, value: 'Two' }, { id: 3, value: 'Three' }, { id: 4, value: 'Four' }];
        this.arrayOfKeyValues2 = [{ key: 1, name: 'Key One' }, { key: 2, name: 'Key Two' }, { key: 3, name: 'Key Three' }, { key: 4, name: 'Key Four' }];
        this.googleGeoCode = "https://maps.googleapis.com/maps/api/geocode/json?address=:keyword";
    }
    PartialAutoCompleteComponent = __decorate([
        core_1.Component({
            selector: 'partial-auto-complete',
            template: "\n    <h2 class=\"group-title\">\n      <a name=\"ng2-auto-complete\" href=\"https://github.com/jsvalley/ng2-auto-complete\">ng2-auto-complete</a>\n    </h2>\n\n    <div class=\"directive-group ng2-auto-complete\">\n\n      <h3> Autocomplete From Local Source - Array </h3>\n      source:\n      <pre>{{arrayOfStrings | json}}</pre>\n      <input ng2-auto-complete\n             [(ngModel)]=\"model1\"\n             [source]=\"arrayOfStrings\"\n             placeholder=\"enter text\"/>\n      <pre>selected: {{model1 | json}}</pre>\n      <pre> &lt;input ng2-auto-complete\n        [(ngModel)]=\"model1\"\n        [source]=\"arrayOfStrings\"\n        placeholder=\"enter text\"/></pre>\n\n      <h3> Autocomplete From Local Source - id/value </h3>\n      source:\n      <pre>{{arrayOfKeyValues | json}}</pre>\n      <input\n          ng2-auto-complete\n          [(ngModel)]=\"model2\"\n          [source]=\"arrayOfKeyValues\"\n          placeholder=\"enter text\"/>\n      <pre>selected: {{model2 | json}}</pre>\n      <pre>&lt;input\n        ng2-auto-complete\n        [(ngModel)]=\"model2\"\n        [source]=\"arrayOfKeyValues\"\n        placeholder=\"enter text\"/></pre>\n\n      <h3> Autocomplete From Local Source - key/name </h3>\n      source:\n      <pre>{{arrayOfKeyVaues2 | json}}</pre>\n      <input ng2-auto-complete [source]=\"arrayOfKeyValues2\"\n             [(ngModel)]=\"model3\"\n             placeholder=\"enter text\"\n             value-property-name=\"key\"\n             display-property-name=\"name\"/>\n      <pre>selected: {{model3 | json}}</pre>\n      <pre> &lt;input ng2-auto-complete [source]=\"arrayOfKeyValues2\"\n        [(ngModel)]=\"model3\"\n        placeholder=\"enter text\"\n        value-property-name=\"key\"\n        display-property-name=\"name\"/></pre>\n\n      <h3> Autocomplete From Remote Source - Google GeoCode </h3>\n      <pre>source: {{googleGeoCode}}</pre>\n      <input  ng2-auto-complete\n              [(ngModel)]=\"model4\"\n              placeholder=\"Enter Address(min. 2 chars)\"\n              [source]=\"googleGeoCode\"\n              display-property-name=\"formatted_address\"\n              path-to-data=\"results\"\n              min-chars=\"2\" />\n      <pre>selected: {{model4 | json}}</pre>\n      <pre>&lt;input  ng2-auto-complete\n        [(ngModel)]=\"model4\"\n        placeholder=\"Enter Address(min. 2 chars)\"\n        [source]=\"googleGeoCode\"\n        display-property-name=\"formatted_address\"\n        path-to-data=\"results\"\n        min-chars=\"2\" /></pre>\n\n    </div>\n  ",
            directives: [ng2_ui_1.NG2_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], PartialAutoCompleteComponent);
    return PartialAutoCompleteComponent;
}());
exports.PartialAutoCompleteComponent = PartialAutoCompleteComponent;
//# sourceMappingURL=partial-auto-complete.component.js.map