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
var core_1 = require("@angular/core");
var OverlayManager = (function () {
    function OverlayManager() {
        //list of overlay objects
        this.overlays = {};
    }
    OverlayManager.prototype.register = function (overlay) {
        this.overlays[overlay.id] = overlay;
    };
    OverlayManager.prototype.open = function (id) {
        var overlay = this.overlays[id];
        overlay.element.style.display = overlay.position.inside ? 'flex' : 'block';
        overlay.positionIt();
    };
    OverlayManager.prototype.close = function (id) {
        var overlay = this.overlays[id];
        overlay.element.style.display = 'none';
    };
    OverlayManager = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], OverlayManager);
    return OverlayManager;
}());
exports.OverlayManager = OverlayManager;
//# sourceMappingURL=overlay-manager.js.map