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
var ng2_tab_component_1 = require("./ng2-tab.component");
var Ng2TabModule = (function () {
    function Ng2TabModule() {
    }
    Ng2TabModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule],
            declarations: [ng2_tab_component_1.Ng2TabComponent],
            exports: [ng2_tab_component_1.Ng2TabComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], Ng2TabModule);
    return Ng2TabModule;
}());
exports.Ng2TabModule = Ng2TabModule;
//# sourceMappingURL=ng2-tab.module.js.map