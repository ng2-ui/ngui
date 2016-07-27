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
var Ng2MessagePopupComponent = (function () {
    function Ng2MessagePopupComponent() {
    }
    Ng2MessagePopupComponent = __decorate([
        core_1.Component({
            selector: 'ng2-message-popup',
            template: "\n    <div>\n      <div class=\"popup-header\">{{popupOptions.title}}</div>\n      <div class=\"popup-body\">{{popupOptions.message}}</div>\n      <div class=\"popup-footer\" *ngIf=\"popupOptions.buttons\">\n        <button *ngIf=\"popupOptions.buttons.OK\"\n          (click)=\"popupOptions.buttons.OK()\">Ok</button>\n        <button *ngIf=\"popupOptions.buttons.CANCEL\"\n          (click)=\"popupOptions.buttons.CANCEL()\">Cancel</button>\n      </div>\n    </div>\n  ",
            encapsulation: core_1.ViewEncapsulation.None,
            styles: ["\n    .popup-header, .popup-body, .popup-footer {\n      padding: 15px;\n      text-align: center;\n    }\n    .popup-header  {\n      font-weight: bold;\n      font-size: 18px;\n      border-bottom: 1px solid #ccc;\n    }\n  "]
        }), 
        __metadata('design:paramtypes', [])
    ], Ng2MessagePopupComponent);
    return Ng2MessagePopupComponent;
}());
exports.Ng2MessagePopupComponent = Ng2MessagePopupComponent;
//# sourceMappingURL=ng2-message-popup.component.js.map