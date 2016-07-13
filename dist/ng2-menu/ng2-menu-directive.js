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
var Ng2MenuDirective = (function () {
    function Ng2MenuDirective(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
        this.el = this.viewContainerRef.element.nativeElement;
        this.el.parentElement.style.position = 'relative';
        this.el.parentElement.className += ' has-ng2-menu';
    }
    Ng2MenuDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.el.parentElement.addEventListener('mouseover', function (event) {
            _this.el.parentElement.className += " active";
            _this.el.style.position = "absolute";
            if (_this.el.parentElement.offsetWidth) {
                _this.setPosition();
            }
            else {
                setTimeout(function () { return _this.setPosition(); });
            }
        });
        this.el.parentElement.addEventListener('mouseout', function (event) {
            _this.el.parentElement.className = _this.el.parentElement.className.replace(/\s?active/, '');
        });
    };
    Ng2MenuDirective.prototype.setPosition = function () {
        if (this.position === "bottom") {
            this.el.style.left = "0";
            this.el.style.top = this.el.parentElement.offsetHeight - 1 + 'px';
        }
        else if (this.position === "top") {
            this.el.style.left = "0";
            this.el.style.bottom = this.el.parentElement.offsetHeight - 1 + 'px';
        }
        else if (this.position === "right") {
            this.el.style.left = this.el.parentElement.offsetWidth - 1 + 'px';
            this.el.style.top = "0";
        }
        else if (this.position === "left") {
            this.el.style.right = this.el.parentElement.offsetWidth - 1 + 'px';
            this.el.style.top = "0";
        }
    };
    __decorate([
        core_1.Input('ng2-menu'), 
        __metadata('design:type', String)
    ], Ng2MenuDirective.prototype, "position", void 0);
    Ng2MenuDirective = __decorate([
        core_1.Directive({
            selector: '[ng2-menu]'
        }), 
        __metadata('design:paramtypes', [core_1.ViewContainerRef])
    ], Ng2MenuDirective);
    return Ng2MenuDirective;
}());
exports.Ng2MenuDirective = Ng2MenuDirective;
//# sourceMappingURL=ng2-menu-directive.js.map