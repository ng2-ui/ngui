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
var Ng2ScrollableDirective = (function () {
    function Ng2ScrollableDirective(el) {
        this.scrolledTo = new core_1.EventEmitter();
        this.sections = [];
        this.el = el.nativeElement;
        this.el.style.position = 'relative';
    }
    // setup list of sections
    Ng2ScrollableDirective.prototype.ngAfterViewInit = function () {
        for (var i = 0; i < this.el.children.length; i++) {
            var childEl = this.el.children[i];
            childEl.id && this.sections.push(childEl);
        }
        var thisElStyle = window.getComputedStyle(this.el);
        var elToListenScroll = thisElStyle.overflow === 'auto' ? this.el : window;
        this.listenScrollOn(elToListenScroll);
    };
    Ng2ScrollableDirective.prototype.listenScrollOn = function (el) {
        var _this = this;
        console.log('adding scroll listener on', el, this.sections);
        el.addEventListener('scroll', function () {
            var scrolledTo = null;
            for (var i = 0; i < _this.sections.length; i++) {
                if (_this.isElementVisible(_this.sections[i], el)) {
                    scrolledTo = _this.sections[i];
                    break;
                }
            }
            ;
            scrolledTo && _this.scrolledTo.emit(scrolledTo.id);
        });
    };
    Ng2ScrollableDirective.scrollTo = function (selector) {
        var parentEl, targetEl;
        targetEl = document.querySelector(selector);
        if (!targetEl) {
            throw "Invalid selector " + selector;
        }
        parentEl = targetEl.parentElement;
        do {
            if (parentEl.getAttribute('ng2-scrollable') !== undefined) {
                break;
            }
        } while (parentEl = parentEl.parentElement);
        var parentElStyle = window.getComputedStyle(parentEl);
        parentEl = parentElStyle.overflow === 'auto' ? parentEl : document.body;
        var currentScrollTop = parentEl.scrollTop;
        var targetOffsetTop = targetEl.offsetTop;
        if (parentEl === document.body) {
            var bodyRect = document.body.getBoundingClientRect();
            var targetRect = targetEl.getBoundingClientRect();
            targetOffsetTop = targetRect.top - bodyRect.top;
        }
        var step = (targetOffsetTop - currentScrollTop) / 10;
        (function loop(i) {
            setTimeout(function main() {
                parentEl.scrollTop += step;
                i > 1 && loop(i - 1);
            }, 50);
        }(10));
    };
    Ng2ScrollableDirective.prototype.isElementVisible = function (innerEl, outerEl) {
        var innerRect = innerEl.getBoundingClientRect();
        if (outerEl === window) {
            return innerRect.top > 0 &&
                innerRect.top < window.innerHeight;
        }
        else {
            var outerRect = outerEl.getBoundingClientRect();
            return innerRect.top >= outerRect.top && innerRect.top <= outerRect.bottom;
        }
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], Ng2ScrollableDirective.prototype, "scrolledTo", void 0);
    Ng2ScrollableDirective = __decorate([
        core_1.Directive({
            selector: '[ng2-scrollable]'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], Ng2ScrollableDirective);
    return Ng2ScrollableDirective;
}());
exports.Ng2ScrollableDirective = Ng2ScrollableDirective;
//# sourceMappingURL=ng2-scrollable.directive.js.map