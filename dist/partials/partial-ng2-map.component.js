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
var PartialNg2MapComponent = (function () {
    function PartialNg2MapComponent() {
    }
    PartialNg2MapComponent = __decorate([
        core_1.Component({
            selector: 'partial-ng2-map',
            template: "\n    <h2 class=\"group-title ng2-map\">\n      <a name=\"ng2-map\" href=\"https://github.com/jsvalley/ng2-map\">ng2-map</a>\n    </h2>\n    <div class=\"directive-group\">\n      <ng2-map center=\"Brampton, Canada\">\n        <marker position=\"Brampton, Canada\" draggable=\"true\"></marker>\n      </ng2-map>\n      <pre>  &lt;ng2-map center=\"Brampton, Canada\">\n        &lt;marker position=\"Brampton, Canada\" draggable=\"true\">&lt;/marker>\n      &lt;/ng2-map></pre>\n    </div>\n  ",
            directives: [ng2_ui_1.NG2_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], PartialNg2MapComponent);
    return PartialNg2MapComponent;
}());
exports.PartialNg2MapComponent = PartialNg2MapComponent;
//# sourceMappingURL=partial-ng2-map.component.js.map