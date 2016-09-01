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
var ng2_overlay_1 = require('ng2-overlay');
var Ng2PopupComponent = (function () {
    function Ng2PopupComponent(componentResolver, overlayManager) {
        this.componentResolver = componentResolver;
        this.overlayManager = overlayManager;
    }
    Ng2PopupComponent.prototype.ngAfterViewInit = function () {
        var overlayEl = this.marker.element.nativeElement.parentElement.parentElement;
        var overlay = new ng2_overlay_1.Overlay(overlayEl, {
            id: 'ng2-popup-overlay',
            windowOverlay: true,
            position: 'center center'
        });
        this.overlayManager.register(overlay);
    };
    Ng2PopupComponent.prototype.open = function (component, options) {
        this.close();
        this.opened = true;
        this.classNames = options.classNames;
        this.closeButton = options.closeButton;
        var factory = this.componentResolver.resolveComponentFactory(component);
        var componentRef = this.marker.createComponent(factory);
        componentRef.instance.popupOptions = options;
        componentRef.instance.popup = this;
        this.overlayManager.open('ng2-popup-overlay', null); //(id, event)
    };
    Ng2PopupComponent.prototype.close = function () {
        this.opened = false;
        this.overlayManager.close('ng2-popup-overlay');
        try {
            this.marker.remove();
        }
        catch (e) { }
    };
    __decorate([
        core_1.ViewChild('marker', { read: core_1.ViewContainerRef }), 
        __metadata('design:type', Object)
    ], Ng2PopupComponent.prototype, "marker", void 0);
    Ng2PopupComponent = __decorate([
        core_1.Component({
            selector: 'ng2-popup',
            directives: [ng2_overlay_1.OverlayDirective],
            providers: [ng2_overlay_1.OverlayManager],
            template: "\n    <div id=\"ng2-popup-overlay\"> <!-- <-- this is overlay -->\n      <div class=\"popup-container {{classNames}}\" [ngClass]=\"{opened: opened}\">\n        <div *ngIf=\"closeButton != false\" class=\"close-popup\" (click)=\"close()\">x</div>\n        <div class=\"marker\" #marker></div> <!-- to position popup component -->\n        <!-- popup component will be here -->\n      </div>\n    </div>\n  ",
            styles: ["\n    .popup-container { \n      background: #fff;\n      border: 1px solid #ccc;\n      box-shadow: 0 5px 15px rgba(0,0,0,.5);\n      border-radius: 5px;\n      width: 600px;\n      display: none;\n    }\n    .popup-container.opened { \n      display: block;\n    }\n    .close-popup {\n      font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n      float: right; \n      cursor: pointer; \n      font-size: 21px;\n      line-height: 1;\n      text-shadow: 0 1px 0 #fff;\n      opacity: 0.2;\n      padding: 10px;\n    }\n    /*.marker ~ * { display:block; background: #fff}*/\n    .popup-container.small { width: 300px}\n    .popup-container.large { width: 900px}\n  "],
            encapsulation: core_1.ViewEncapsulation.None
        }), 
        __metadata('design:paramtypes', [core_1.ComponentFactoryResolver, ng2_overlay_1.OverlayManager])
    ], Ng2PopupComponent);
    return Ng2PopupComponent;
}());
exports.Ng2PopupComponent = Ng2PopupComponent;
//# sourceMappingURL=ng2-popup.component.js.map