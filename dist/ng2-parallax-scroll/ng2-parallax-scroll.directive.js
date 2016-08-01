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
var Ng2ParallaxScrollDirective = (function () {
    function Ng2ParallaxScrollDirective(viewContainer) {
        this.viewContainer = viewContainer;
        this.el = this.viewContainer.element.nativeElement;
    }
    Ng2ParallaxScrollDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.img = this.el.querySelector("img");
        this.imgOrgWidth = this.imgOrgWidth || this.img.offsetWidth;
        this.imgOrgHeight = this.imgOrgHeight || this.img.offsetHeight;
        this.setParallaxImage();
        this.updateParallaxImage();
        window.addEventListener('scroll', function () {
            _this.updateParallaxImage();
        });
        window.addEventListener('resize', function () {
            _this.setParallaxImage();
            _this.updateParallaxImage();
        });
    };
    Ng2ParallaxScrollDirective.prototype.setParallaxImage = function () {
        //set img style
        var imgSize = this.imgOrgWidth > this.el.offsetWidth ?
            { width: this.el.offsetWidth + 'px' } : { height: this.el.offsetHeight * 1.5 + 'px' };
        Object.assign(this.img.style, {
            display: 'block', position: 'absolute', bottom: 0, left: 0
        }, imgSize);
        // set container style
        Object.assign(this.el.style, {
            position: 'relative', overflow: 'hidden'
        });
        // wrap image with a div, then set style
        var imgWrapperEl = this.el.querySelector('.parallax-img-wrapper');
        if (!imgWrapperEl) {
            imgWrapperEl = document.createElement('div');
            imgWrapperEl.className = 'parallax-img-wrapper';
            imgWrapperEl.appendChild(this.img);
            this.el.appendChild(imgWrapperEl);
        }
        Object.assign(imgWrapperEl.style, {
            position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: -1
        });
    };
    Ng2ParallaxScrollDirective.prototype.updateParallaxImage = function () {
        var elRect = this.el.getBoundingClientRect();
        var imgRect = this.img.getBoundingClientRect();
        var imgDist = imgRect.height - elRect.height;
        var bottom = this.el.offsetTop + elRect.height;
        var top = this.el.offsetTop;
        var scrollTop = document.body.scrollTop;
        var windowBottom = scrollTop + window.innerHeight;
        var percentScrolled = (windowBottom - top) / (elRect.height + window.innerHeight);
        //console.log(imgDist, percentScrolled, imgDist * percentScrolled);
        var parallax = Math.round((imgDist * percentScrolled));
        if ((bottom > scrollTop) && (top < (scrollTop + window.innerHeight))) {
            this.img.style.bottom = parallax * -1 + 'px';
        }
    };
    Ng2ParallaxScrollDirective = __decorate([
        core_1.Directive({
            selector: '[ng2-parallax], ng2-parallax'
        }), 
        __metadata('design:paramtypes', [core_1.ViewContainerRef])
    ], Ng2ParallaxScrollDirective);
    return Ng2ParallaxScrollDirective;
}());
exports.Ng2ParallaxScrollDirective = Ng2ParallaxScrollDirective;
//# sourceMappingURL=ng2-parallax-scroll.directive.js.map