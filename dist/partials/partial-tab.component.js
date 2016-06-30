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
var PartialTabComponent = (function () {
    function PartialTabComponent() {
    }
    PartialTabComponent = __decorate([
        core_1.Component({
            selector: 'partial-tab',
            template: "\n    <h2 class=\"group-title\"><a name=\"tab\">tab</a></h2>\n\n    <div class=\"directive-group\">\n      <ul class=\"tabs\">\n        <li class=\"tab\" (click)=\"tab=1\" [class.current]=\"!tab || tab == 1\">Tab 1</li>\n        <li class=\"tab\" (click)=\"tab=2\" [class.current]=\"tab == 2\">Tab 2</li>\n        <li class=\"tab\" (click)=\"tab=3\" [class.current]=\"tab == 3\">Tab 3</li>\n      </ul>\n      <div class=\"tab-contents\">\n        <div *ngIf=\"!tab || tab == 1\">\n          Tab Contents 1<br/> Tab Contents 1<br/>Tab Contents 1<br/>Tab Contents 1<br/>Tab Contents 1<br/>\n        </div>\n        <div *ngIf=\"tab == 2\">\n          Tab Contents 2<br/> Tab Contents 2<br/>Tab Contents 2<br/>Tab Contents 2<br/>Tab Contents 2<br/>\n        </div>\n        <div *ngIf=\"tab == 3\">\n          Tab Contents 3<br/> Tab Contents 3<br/>Tab Contents 3<br/>Tab Contents 3<br/>Tab Contents 3<br/>\n        </div>\n      </div>\n      \n      HTML:\n      <pre>\n      &lt;ul class=\"tabs\">\n        &lt;li class=\"tab\" (click)=\"tab=1\" [class.current]=\"!tab || tab == 1\">Tab 1&lt;/li>\n        &lt;li class=\"tab\" (click)=\"tab=2\" [class.current]=\"tab == 2\">Tab 2&lt;/li>\n        &lt;li class=\"tab\" (click)=\"tab=3\" [class.current]=\"tab == 3\">Tab 3&lt;/li>\n      &lt;/ul>\n      &lt;div class=\"tab-contents\">\n        &lt;div *ngIf=\"!tab || tab == 1\">\n          Tab Contents 1&lt;br/> Tab Contents 1&lt;br/>Tab Contents 1&lt;br/>Tab Contents 1&lt;br/>Tab Contents 1&lt;br/>\n        &lt;/div>\n        &lt;div *ngIf=\"tab == 2\">\n          Tab Contents 2&lt;br/> Tab Contents 2&lt;br/>Tab Contents 2&lt;br/>Tab Contents 2&lt;br/>Tab Contents 2&lt;br/>\n        &lt;/div>\n        &lt;div *ngIf=\"tab == 3\">\n          Tab Contents 3&lt;br/> Tab Contents 3&lt;br/>Tab Contents 3&lt;br/>Tab Contents 3&lt;br/>Tab Contents 3&lt;br/>\n        &lt;/div>\n      &lt;/div>\n      </pre>\n      CSS:\n      <pre>\n       .tabs {\n        padding: 0;\n        list-style: none;\n        position: relative;\n        top: 1px;\n      }\n      .tabs .tab {\n        display: block;\n        float: left;\n        border: 1px solid #ccc;\n        border-radius: 5px 5px 0 0;\n        background-color: #eee;\n        padding: 0 10px;\n      }\n      .tabs .tab.current {\n        background-color: #fff;\n        border-bottom: 1px solid transparent;\n      }\n      .tab-contents {\n        clear:both;\n        border: 1px solid #ccc;\n        border-radius: 0 0 5px 5px;\n        padding: 10px;\n      }\n      </pre>\n    </div>\n  ",
            styles: ["\n     .tabs {\n      padding: 0;\n      list-style: none;\n      position: relative;\n      top: 1px;\n    }\n    .tabs .tab {\n      display: block;\n      float: left;\n      border: 1px solid #ccc;\n      border-radius: 5px 5px 0 0;\n      background-color: #eee;\n      padding: 0 10px;\n    }\n    .tabs .tab.current {\n      background-color: #fff;\n      border-bottom: 1px solid transparent;\n    }\n    .tab-contents {\n      clear:both;\n      border: 1px solid #ccc;\n      border-radius: 0 0 5px 5px;\n      padding: 10px;\n    }\n  "]
        }), 
        __metadata('design:paramtypes', [])
    ], PartialTabComponent);
    return PartialTabComponent;
}());
exports.PartialTabComponent = PartialTabComponent;
//# sourceMappingURL=partial-tab.component.js.map