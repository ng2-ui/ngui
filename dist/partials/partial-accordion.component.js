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
var PartialAccordionComponent = (function () {
    function PartialAccordionComponent() {
    }
    PartialAccordionComponent = __decorate([
        core_1.Component({
            selector: 'partial-accordion',
            template: "\n    <h2 class=\"group-title\"><a name=\"accordion\">Accordion</a></h2>\n\n    <div class=\"directive-group\">\n      <ul class=\"accordion\">\n        <li>\n          <div class=\"header\" (click)=\"accordion=1\" \n            [class.current]=\"!accordion || accordion == 1\">Header 1</div>\n          <div class=\"contents\" \n            [class.current]=\"!accordion || accordion == 1\">\n            Contents 1<br/>Contents 1<br/>Contents 1<br/>Contents 1<br/>Contents 1<br/>\n          </div>\n        </li>\n        <li>\n          <div class=\"header\" (click)=\"accordion=2\" \n            [class.current]=\"accordion == 2\">Header 2</div>\n          <div class=\"contents\" \n            [class.current]=\"accordion == 2\">\n            Contents 2<br/>Contents 2<br/>Contents 2<br/>Contents 2<br/>Contents 2<br/>\n          </div>\n        </li>\n        <li>\n          <div class=\"header\" (click)=\"accordion=3\" \n            [class.current]=\"accordion == 3\">Header 3</div>\n          <div class=\"contents\" \n            [class.current]=\"accordion == 3\">\n            Contents 3<br/>Contents 3<br/>Contents 3<br/>Contents 3<br/>Contents 3<br/>\n          </div>\n        </li>\n      </ul>\n      \n      HTML:\n      <pre>\n      &lt;ul class=\"accordion\">\n        &lt;li>\n          &lt;div class=\"header\" (click)=\"accordion=1\" \n            [class.current]=\"!accordion || accordion == 1\">Header 1&lt;/div>\n          &lt;div class=\"contents\" \n            [class.current]=\"!accordion || accordion == 1\">\n            Contents 1&lt;br/>Contents 1&lt;br/>Contents 1&lt;br/>Contents 1&lt;br/>Contents 1&lt;br/>\n          &lt;/div>\n        &lt;/li>\n        &lt;li>\n          &lt;div class=\"header\" (click)=\"accordion=1\" \n            [class.current]=\"accordion == 2\">Header 1&lt;/div>\n          &lt;div class=\"contents\" \n            [class.current]=\"accordion == 2\">\n            Contents 2&lt;br/>Contents 2&lt;br/>Contents 2&lt;br/>Contents 2&lt;br/>Contents 2&lt;br/>\n          &lt;/div>\n        &lt;/li>\n        &lt;li>\n          &lt;div class=\"header\" (click)=\"accordion=1\" \n            [class.current]=\"accordion == 3\">Header 1&lt;/div>\n          &lt;div class=\"contents\" \n            [class.current]=\"accordion == 3\">\n            Contents 3&lt;br/>Contents 3&lt;br/>Contents 3&lt;br/>Contents 3&lt;br/>Contents 3&lt;br/>\n          &lt;/div>\n        &lt;/li>\n      &lt;/ul>\n      </pre>\n      CSS:\n      <pre>\n      .accordion {\n        list-style: none;\n        position: relative;\n      }\n      .accordion .header {\n        background-color: #dcdcdc;\n        border: 1px solid #ccc;\n      }\n      .accordion .header.current {\n        background-color: #00b3ee;\n        color: #fff;\n      }\n      .accordion .contents {\n        display: none;\n      }\n      .accordion .contents.current {\n        display: inherit;\n      }\n      </pre>\n    </div>\n  ",
            styles: ["\n    .accordion {\n      list-style: none;\n      position: relative;\n    }\n    .accordion .header {\n      background-color: #dcdcdc;\n      border: 1px solid #ccc;\n    }\n    .accordion .header.current {\n      background-color: #00b3ee;\n      color: #fff;\n    }\n    .accordion .contents {\n      display: none;\n    }\n    .accordion .contents.current {\n      display: inherit;\n    }\n  "]
        }), 
        __metadata('design:paramtypes', [])
    ], PartialAccordionComponent);
    return PartialAccordionComponent;
}());
exports.PartialAccordionComponent = PartialAccordionComponent;
//# sourceMappingURL=partial-accordion.component.js.map