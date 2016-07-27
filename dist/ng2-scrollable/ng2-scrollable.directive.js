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
var util_1 = require('./util');
var Ng2ScrollableDirective = (function () {
    function Ng2ScrollableDirective(el) {
        this.scrolledToVisible = new core_1.EventEmitter();
        this.scrolledToHidden = new core_1.EventEmitter();
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
        el.addEventListener('scroll', function () {
            var elScrolledToVisible = null;
            var elScrolledToHidden = null;
            for (var i = 0; i < _this.sections.length; i++) {
                if (util_1.isElementPartlyVisible(_this.sections[i], el)) {
                    elScrolledToVisible = _this.sections[i];
                    break;
                }
                if (util_1.isElementNotVisible(_this.sections[i], el)) {
                    elScrolledToHidden = _this.sections[i];
                }
            }
            elScrolledToVisible && _this.scrolledToVisible.emit(elScrolledToVisible.id);
            elScrolledToHidden && _this.scrolledToHidden.emit(elScrolledToHidden.id);
        });
    };
    Ng2ScrollableDirective.scrollTo = util_1.scrollTo;
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], Ng2ScrollableDirective.prototype, "scrolledToVisible", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], Ng2ScrollableDirective.prototype, "scrolledToHidden", void 0);
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