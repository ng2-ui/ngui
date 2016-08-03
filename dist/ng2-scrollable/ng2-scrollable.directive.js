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
var index_1 = require('../ng2-utils/index');
var Ng2ScrollableDirective = (function () {
    function Ng2ScrollableDirective(el) {
        this.elementVisible = new core_1.EventEmitter();
        this.sections = [];
        this.visible = index_1.elementVisible;
        this.el = el.nativeElement;
        this.el.style.position = 'relative';
    }
    // setup list of sections
    Ng2ScrollableDirective.prototype.ngOnInit = function () {
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
        el.addEventListener('scroll', function () {
            var elScrolledToVisible = null;
            for (var i = 0; i < _this.sections.length; i++) {
                var section = _this.sections[i];
                var visible = _this.visible(section, el);
                if (_this.horizontal && (visible.left || visible.right)) {
                    elScrolledToVisible = section;
                    break;
                }
                else if (!_this.horizontal && (visible.top || visible.bottom)) {
                    elScrolledToVisible = section;
                    break;
                }
            }
            elScrolledToVisible && _this.elementVisible.emit(elScrolledToVisible);
        });
    };
    Ng2ScrollableDirective.scrollTo = function (selector, parentSelector, horizontal, distance) {
        // argument validation
        var parentEl, targetEl;
        parentSelector = parentSelector || 'body';
        targetEl = document.querySelector(selector);
        if (!targetEl) {
            throw "Invalid selector " + selector;
        }
        parentEl = document.querySelector(parentSelector);
        if (!parentEl) {
            throw "Invalid parent selector " + parentSelector;
        }
        // detect the current environment
        var parentElStyle = window.getComputedStyle(parentEl);
        var scrollContainerEl = parentElStyle.overflow === 'auto' ?
            parentEl : document.body;
        var currentScrollTop = scrollContainerEl.scrollTop;
        var currentScrollLeft = scrollContainerEl.scrollLeft;
        // determine targetOffsetTop(or Left);
        var targetOffsetTop;
        var targetOffsetLeft;
        if (scrollContainerEl === document.body) {
            var bodyRect = document.body.getBoundingClientRect();
            var targetRect = targetEl.getBoundingClientRect();
            targetOffsetTop = targetRect.top - bodyRect.top;
            targetOffsetLeft = targetRect.left - bodyRect.left;
        }
        else {
            targetOffsetTop = targetEl.offsetTop;
            targetOffsetLeft = targetEl.offsetLeft;
        }
        if (distance) {
            currentScrollTop += distance;
            currentScrollLeft += distance;
        }
        // start scrolling
        var step = horizontal ?
            Math.ceil((targetOffsetLeft - currentScrollLeft) / 10) :
            Math.ceil((targetOffsetTop - currentScrollTop) / 10);
        var scrollProp = horizontal ? 'scrollLeft' : 'scrollTop';
        (function loop(i, prop) {
            setTimeout(function main() {
                scrollContainerEl[prop] += step;
                i > 1 && loop(i - 1, prop);
            }, 50);
        }(10, scrollProp));
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], Ng2ScrollableDirective.prototype, "horizontal", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], Ng2ScrollableDirective.prototype, "elementVisible", void 0);
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