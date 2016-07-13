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
var Ng2TooltipDirective = (function () {
    function Ng2TooltipDirective(viewContainerRef, overlayManager) {
        this.viewContainerRef = viewContainerRef;
        this.overlayManager = overlayManager;
        this.el = this.viewContainerRef.element.nativeElement;
    }
    Ng2TooltipDirective.prototype.ngAfterViewInit = function () {
        this.overlay = this.getTooltipOverlay(this.el, this.tooltip);
    };
    Ng2TooltipDirective.prototype.showTooltip = function ($event) {
        this.overlayManager.open(this.overlay, $event);
        $event.stopPropagation();
    };
    Ng2TooltipDirective.prototype.hideTooltip = function ($event) {
        this.overlayManager.close(this.overlay);
        $event.stopPropagation();
    };
    Ng2TooltipDirective.prototype.getTooltipOverlay = function (el, tooltip) {
        var tooltipEl = document.createElement('ng2-tooltip');
        tooltipEl.style.display = 'none';
        var divEl = document.createElement('div');
        divEl.innerHTML = "\n       <div class='tooltip-contents'>" + tooltip + "</div>\n       <div class='tooltip-down-arrow'></div>\n    ";
        tooltipEl.appendChild(divEl);
        //el.parentElement.insertBefore(tooltipEl, el.nextSibling);
        el.appendChild(tooltipEl);
        var overlay = new ng2_overlay_1.Overlay(tooltipEl, {
            id: 'tooltip-' + (el.id || Math.floor(Math.random() * 1000000)),
            position: 'top cursor outside'
        });
        this.overlayManager.register(overlay);
        return overlay;
    };
    __decorate([
        core_1.Input('ng2-tooltip'), 
        __metadata('design:type', String)
    ], Ng2TooltipDirective.prototype, "tooltip", void 0);
    Ng2TooltipDirective = __decorate([
        core_1.Directive({
            selector: '[ng2-tooltip]',
            host: {
                '(mouseover)': 'showTooltip($event)',
                '(mouseout)': 'hideTooltip($event)'
            }
        }), 
        __metadata('design:paramtypes', [core_1.ViewContainerRef, ng2_overlay_1.OverlayManager])
    ], Ng2TooltipDirective);
    return Ng2TooltipDirective;
}());
exports.Ng2TooltipDirective = Ng2TooltipDirective;
//# sourceMappingURL=tooltip-directive.js.map