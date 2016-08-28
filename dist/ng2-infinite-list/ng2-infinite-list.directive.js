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
var index_1 = require("ng2-utils/index");
var Ng2InfiniteListDirective = (function () {
    function Ng2InfiniteListDirective(el) {
        var _this = this;
        this.endVisible = new core_1.EventEmitter();
        this.elementVisible = index_1.elementVisible;
        this.scrollListener = function () {
            var visible = _this.elementVisible(_this.endEl, _this.el);
            if (_this.horizontal && (visible.left || visible.right)) {
                _this.endVisible.emit(true);
            }
            else if (!_this.horizontal && (visible.top || visible.bottom)) {
                _this.endVisible.emit(true);
            }
        };
        this.el = el.nativeElement;
    }
    // setup list of sections
    Ng2InfiniteListDirective.prototype.ngOnInit = function () {
        this.endEl = this.el.querySelector('[ng2-infinite-list-end]');
        if (!this.endEl) {
            throw "Invalid 'ng2-infinite-list-end";
        }
        this.scrollListener();
        this.el.addEventListener('scroll', this.scrollListener);
        window.addEventListener('resize', this.scrollListener);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], Ng2InfiniteListDirective.prototype, "horizontal", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], Ng2InfiniteListDirective.prototype, "endVisible", void 0);
    Ng2InfiniteListDirective = __decorate([
        core_1.Directive({ selector: '[ng2-infinite-list]' }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], Ng2InfiniteListDirective);
    return Ng2InfiniteListDirective;
}());
exports.Ng2InfiniteListDirective = Ng2InfiniteListDirective;
//# sourceMappingURL=ng2-infinite-list.directive.js.map