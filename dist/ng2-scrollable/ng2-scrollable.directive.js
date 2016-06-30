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
        var _this = this;
        this.scrolledTo = new core_1.EventEmitter();
        this.sections = [];
        this.scrollTo = function (targetId) {
            var targetEl = _this.el.querySelector('#' + targetId);
            var currentScrollTop = _this.el.scrollTop;
            var targetOffsetTop = targetEl.offsetTop;
            var step = (targetOffsetTop - currentScrollTop) / 10;
            var that = _this;
            (function loop(i) {
                setTimeout(function main() {
                    that.el.scrollTop += step;
                    i > 1 && loop(i - 1);
                }, 50);
            }(10));
        };
        this.el = el.nativeElement;
        this.el.style.position = 'relative';
        this.el.scrollTo = this.scrollTo;
    }
    Ng2ScrollableDirective.prototype.onScroll = function () {
        var scrolledTo = null;
        for (var i = 0; i < this.sections.length; i++) {
            if (this.isElementVisible(this.sections[i], this.el)) {
                scrolledTo = this.sections[i];
                break;
            }
        }
        ;
        this.scrolledTo.emit(scrolledTo.id);
    };
    // setup list of sections
    Ng2ScrollableDirective.prototype.ngAfterViewInit = function () {
        for (var i = 0; i < this.el.children.length; i++) {
            var childEl = this.el.children[i];
            childEl.id && this.sections.push(childEl);
        }
    };
    Ng2ScrollableDirective.prototype.isElementVisible = function (innerEl, outerEl) {
        var innerRect = innerEl.getBoundingClientRect();
        var outerRect = outerEl.getBoundingClientRect();
        return innerRect.top >= outerRect.top && innerRect.top <= outerRect.bottom;
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], Ng2ScrollableDirective.prototype, "scrolledTo", void 0);
    Ng2ScrollableDirective = __decorate([
        core_1.Directive({
            selector: '[ng2-scrollable]',
            host: {
                '(scroll)': 'onScroll($event)'
            }
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], Ng2ScrollableDirective);
    return Ng2ScrollableDirective;
}());
exports.Ng2ScrollableDirective = Ng2ScrollableDirective;
//# sourceMappingURL=ng2-scrollable.directive.js.map