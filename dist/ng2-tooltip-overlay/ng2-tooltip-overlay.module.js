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
var forms_1 = require("@angular/forms");
var platform_browser_1 = require('@angular/platform-browser');
var ng2_tooltip_directive_1 = require("./ng2-tooltip-directive");
var index_1 = require('ng2-overlay/index');
var Ng2TooltipOverlayModule = (function () {
    function Ng2TooltipOverlayModule() {
    }
    Ng2TooltipOverlayModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, index_1.Ng2OverlayModule],
            declarations: [ng2_tooltip_directive_1.Ng2TooltipDirective],
            exports: [ng2_tooltip_directive_1.Ng2TooltipDirective]
        }), 
        __metadata('design:paramtypes', [])
    ], Ng2TooltipOverlayModule);
    return Ng2TooltipOverlayModule;
}());
exports.Ng2TooltipOverlayModule = Ng2TooltipOverlayModule;
//# sourceMappingURL=ng2-tooltip-overlay.module.js.map