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
var PartialScrollableComponent = (function () {
    function PartialScrollableComponent() {
    }
    PartialScrollableComponent.prototype.scrollTo = function (selector) {
        ng2_ui_1.Ng2ScrollableDirective.scrollTo(selector);
    };
    PartialScrollableComponent = __decorate([
        core_1.Component({
            selector: 'partial-scrollable',
            template: "\n    <h2 class=\"group-title ng2-scrollable\">\n      <a name=\"ng2-overlay\" href=\"https://github.com/jsvalley/ng2-scrollable\">ng2-scrollable</a>\n    </h2>\n    <div class=\"directive-group\">\n      <ul style=\"padding-left: 25%\">\n        Scroll Within a Section<br/>\n        <li [class.current]=\"id=='s1'\" (click)=\"scrollTo('#s1')\">1\n        <li [class.current]=\"id=='s2'\" (click)=\"scrollTo('#s2')\">2\n        <li [class.current]=\"id=='s3'\" (click)=\"scrollTo('#s3')\">3\n        <li [class.current]=\"id=='s4'\" (click)=\"scrollTo('#s4')\">4\n        <li [class.current]=\"id=='s5'\" (click)=\"scrollTo('#s5')\">5\n        <li [class.current]=\"id=='s6'\" (click)=\"scrollTo('#s6')\">6\n        <li [class.current]=\"id=='s7'\" (click)=\"scrollTo('#s7')\">7\n        <li [class.current]=\"id=='s8'\" (click)=\"scrollTo('#s8')\">8\n        <li [class.current]=\"id=='s9'\" (click)=\"scrollTo('#s9')\">9\n      </ul>\n      <div class=\"scrollable section\" (scrolledTo)=\"id=$event\" ng2-scrollable>\n        <div id=\"s1\">Section 1</div>\n        <div id=\"s2\">Section 2</div>\n        <div id=\"s3\">Section 3</div>\n        <div id=\"s4\">Section 4</div>\n        <div id=\"s5\">Section 5</div>\n        <div id=\"s6\">Section 6</div>\n        <div id=\"s7\">Section 7</div>\n        <div id=\"s8\">Section 8</div>\n        <div id=\"s9\">Section 9</div>\n      </div>\n      <pre>\n&lt;ul style=\"padding-left: 25%\">\n  Scroll Within a Section&lt;br/>\n  &lt;li [class.current]=\"id=='s1'\" (click)=\"scrollTo('#s1')\">1\n  &lt;li [class.current]=\"id=='s2'\" (click)=\"scrollTo('#s2')\">2\n  &lt;li [class.current]=\"id=='s3'\" (click)=\"scrollTo('#s3')\">3\n  &lt;li [class.current]=\"id=='s4'\" (click)=\"scrollTo('#s4')\">4\n  &lt;li [class.current]=\"id=='s5'\" (click)=\"scrollTo('#s5')\">5\n  &lt;li [class.current]=\"id=='s6'\" (click)=\"scrollTo('#s6')\">6\n  &lt;li [class.current]=\"id=='s7'\" (click)=\"scrollTo('#s7')\">7\n  &lt;li [class.current]=\"id=='s8'\" (click)=\"scrollTo('#s8')\">8\n  &lt;li [class.current]=\"id=='s9'\" (click)=\"scrollTo('#s9')\">9\n&lt;/ul>\n&lt;div class=\"scrollable section\" (scrolledTo)=\"id=$event\" ng2-scrollable>\n  &lt;div id=\"s1\">Section 1&lt;/div>\n  &lt;div id=\"s2\">Section 2&lt;/div>\n  &lt;div id=\"s3\">Section 3&lt;/div>\n  &lt;div id=\"s4\">Section 4&lt;/div>\n  &lt;div id=\"s5\">Section 5&lt;/div>\n  &lt;div id=\"s6\">Section 6&lt;/div>\n  &lt;div id=\"s7\">Section 7&lt;/div>\n  &lt;div id=\"s8\">Section 8&lt;/div>\n  &lt;div id=\"s9\">Section 9&lt;/div>\n&lt;/div>\n      </pre>\n    </div>\n  ",
            styles: ["\n    ul {list-style: none}\n    ul li {display: inline-block; border: 1px solid #ccc; padding: 10px}\n    ul li.current { background: #ccc; color: #fff}\n    .scrollable {height: 400px; border: 1px solid #ccc}\n    .scrollable > div {height: 300px}\n    .scrollable > div:nth-child(odd) { background-color: #ccc}\n\n    ul.window {position: fixed; top: 160px; left: 0; width: 25%; padding: 0}\n    ul.window li {display: block;}\n    .scrollable.section {overflow:auto;}\n  "],
            directives: [ng2_ui_1.NG2_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], PartialScrollableComponent);
    return PartialScrollableComponent;
}());
exports.PartialScrollableComponent = PartialScrollableComponent;
//# sourceMappingURL=partial-scrollable.component.js.map