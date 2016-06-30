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
var overlay_manager_1 = require('./overlay-manager');
var overlay_1 = require('./overlay');
var OverlayDirective = (function () {
    function OverlayDirective(viewContainerRef, overlayManager) {
        this.viewContainerRef = viewContainerRef;
        this.overlayManager = overlayManager;
        this.el = this.viewContainerRef.element.nativeElement;
    }
    OverlayDirective.prototype.ngAfterViewInit = function () {
        this.wrapItWithOverlayTag();
        this.registerToOverlayManager();
    };
    OverlayDirective.prototype.wrapItWithOverlayTag = function () {
        //console.log('wrapped overlay directive element with <jui-overlay>');
        this.overlayEl = document.createElement('jui-overlay');
        this.overlayEl.style.display = 'none';
        this.el.parentElement.insertBefore(this.overlayEl, this.el.nextSibling);
        this.overlayEl.appendChild(this.el);
    };
    //create Overlay object,  then register this element to overlayManager
    OverlayDirective.prototype.registerToOverlayManager = function () {
        var positionStr = this.overlayPosition;
        var overlay = new overlay_1.Overlay(this.overlayEl, {
            id: this.el.id,
            windowOverlay: this.overlayOf == "window",
            position: positionStr
        });
        //console.log('registering overlay', overlay);
        this.overlayManager.register(overlay);
    };
    __decorate([
        core_1.Input('jui-overlay-of'), 
        __metadata('design:type', String)
    ], OverlayDirective.prototype, "overlayOf", void 0);
    __decorate([
        core_1.Input('jui-overlay-position'), 
        __metadata('design:type', String)
    ], OverlayDirective.prototype, "overlayPosition", void 0);
    OverlayDirective = __decorate([
        core_1.Directive({
            selector: '[jui-overlay], [jui-overlay-of], [jui-overlay-position]',
        }), 
        __metadata('design:paramtypes', [core_1.ViewContainerRef, overlay_manager_1.OverlayManager])
    ], OverlayDirective);
    return OverlayDirective;
}());
exports.OverlayDirective = OverlayDirective;
//# sourceMappingURL=overlay.directive.js.map