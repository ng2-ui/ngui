'use strict';
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
var index_1 = require('ng2-utils/index');
var Ng2StickyDirective = (function () {
    function Ng2StickyDirective(el) {
        var _this = this;
        this.stickyOffsetTop = 0;
        this.scrollHandler = function () {
            // let elRect: ClientRect = this.el.getBoundingClientRect();
            var parentRect = _this.el.parentElement.getBoundingClientRect();
            var bodyRect = document.body.getBoundingClientRect();
            var dynProps;
            if (_this.original.float === 'right') {
                var right = bodyRect.right - parentRect.right + _this.original.marginRight;
                dynProps = { right: right + 'px' };
            }
            else if (_this.original.float === 'left') {
                var left = parentRect.left - bodyRect.left + _this.original.marginLeft;
                dynProps = { left: left + 'px' };
            }
            else {
                //console.log('parentRect..............', parentRect.width);
                dynProps = { width: parentRect.width + 'px' };
            }
            //console.log('dynProps', dynProps);
            if (_this.original.marginTop + _this.original.marginBottom +
                _this.original.boundingClientRect.height + _this.stickyOffsetTop >= parentRect.bottom) {
                /**
                 * stikcy element reached to the bottom of the container
                 */
                // console.log('case 1 (absolute)', parentRect.bottom, this.original.marginBottom);
                var floatAdjustment = _this.original.float === 'right' ? { right: 0 } :
                    _this.original.float === 'left' ? { left: 0 } : {};
                Object.assign(_this.el.style, {
                    position: 'absolute',
                    float: 'none',
                    top: 'inherit',
                    bottom: 0
                }, dynProps, floatAdjustment);
            }
            else if (parentRect.top * -1 + _this.original.marginTop + _this.stickyOffsetTop > _this.original.offsetTop) {
                /**
                 * stikcy element is in the middle of container
                 */
                //console.log('case 2 (fixed)', parentRect.top * -1, this.original.marginTop, this.original.offsetTop);
                // if not floating, add an empty filler element, since the original elements becames 'fixed'
                if (_this.original.float !== 'left' && _this.original.float !== 'right' && !_this.fillerEl) {
                    _this.fillerEl = document.createElement('div');
                    _this.fillerEl.style.height = _this.el.offsetHeight + 'px';
                    _this.parentEl.insertBefore(_this.fillerEl, _this.el);
                }
                Object.assign(_this.el.style, {
                    position: 'fixed',
                    float: 'none',
                    top: _this.stickyOffsetTop + 'px',
                    bottom: 'inherit'
                }, dynProps);
            }
            else {
                /**
                 * stikcy element is in the original position
                 */
                // console.log('case 3 (original)');
                if (_this.fillerEl) {
                    _this.parentEl.removeChild(_this.fillerEl); //IE11 does not work with el.remove()
                    _this.fillerEl = undefined;
                }
                Object.assign(_this.el.style, {
                    position: _this.original.position,
                    float: _this.original.float,
                    top: _this.original.top,
                    bottom: _this.original.bottom,
                    width: _this.original.width,
                    left: _this.original.left
                }, dynProps);
            }
        };
        this.el = this.el = el.nativeElement;
        this.parentEl = this.el.parentElement;
    }
    Ng2StickyDirective.prototype.ngAfterViewInit = function () {
        this.el.style.boxSizing = 'border-box';
        if (this.stickyAfter) {
            var cetStickyAfterEl = document.querySelector(this.stickyAfter);
            if (cetStickyAfterEl) {
                this.stickyOffsetTop = cetStickyAfterEl.getBoundingClientRect().bottom;
            }
        }
        // set the parent relatively positioned
        var allowedPositions = ['absolute', 'fixed', 'relative'];
        var parentElPosition = index_1.computedStyle(this.parentEl, 'position');
        if (allowedPositions.indexOf(parentElPosition) === -1) {
            this.parentEl.style.position = 'relative';
        }
        this.diff = {
            top: this.el.offsetTop - this.parentEl.offsetTop,
            left: this.el.offsetLeft - this.parentEl.offsetLeft
        };
        var elRect = this.el.getBoundingClientRect();
        this.original = {
            boundingClientRect: elRect,
            position: index_1.computedStyle(this.el, 'position'),
            float: index_1.computedStyle(this.el, 'float'),
            top: index_1.computedStyle(this.el, 'top'),
            bottom: index_1.computedStyle(this.el, 'bottom'),
            left: index_1.computedStyle(this.el, 'left'),
            width: index_1.computedStyle(this.el, 'width'),
            offsetTop: this.el.offsetTop,
            offsetLeft: this.el.offsetLeft,
            marginTop: parseInt(index_1.computedStyle(this.el, 'marginTop')),
            marginBottom: parseInt(index_1.computedStyle(this.el, 'marginBottom')),
            marginLeft: parseInt(index_1.computedStyle(this.el, 'marginLeft')),
            marginRight: parseInt(index_1.computedStyle(this.el, 'marginLeft'))
        };
        this.attach();
    };
    Ng2StickyDirective.prototype.attach = function () {
        window.addEventListener('scroll', this.scrollHandler);
        window.addEventListener('resize', this.scrollHandler);
    };
    Ng2StickyDirective.prototype.detach = function () {
        window.removeEventListener('scroll', this.scrollHandler);
        window.removeEventListener('resize', this.scrollHandler);
    };
    __decorate([
        core_1.Input('sticky-after'), 
        __metadata('design:type', String)
    ], Ng2StickyDirective.prototype, "stickyAfter", void 0);
    Ng2StickyDirective = __decorate([
        core_1.Directive({
            selector: '[ng2-sticky]'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], Ng2StickyDirective);
    return Ng2StickyDirective;
}());
exports.Ng2StickyDirective = Ng2StickyDirective;
//# sourceMappingURL=ng2-sticky.directive.js.map