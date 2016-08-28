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
var Ng2SortableDirective = (function () {
    function Ng2SortableDirective(viewContainerRef) {
        var _this = this;
        this.viewContainerRef = viewContainerRef;
        this.orderChanged = new core_1.EventEmitter();
        this.dragStartHandler = function (event) {
            //console.log('dragStartHandler');
            _this.draggingEl = event.target;
            Object.assign(_this.draggingEl.style, {
                zIndex: 3,
                pointerEvents: 'none'
            });
        };
        this.dragHandler = function (event) {
            //console.log('dragHandler');
            Object.assign(_this.draggingEl.style, {
                transform: 'translate(0px,' + event.deltaY + 'px)'
            });
            var newElDragEnter = document.elementFromPoint(event.center.x, event.center.y);
            if (_this.elDragEnter !== newElDragEnter) {
                if (_this.elDragEnter) {
                    _this.elDragEnter.className = _this.elDragEnter.className.replace(/\ drag-enter/g, '');
                }
                _this.elDragEnter = newElDragEnter;
                if (newElDragEnter.tagName === 'LI') {
                    newElDragEnter.className += ' drag-enter';
                }
            }
        };
        this.dragEndHandler = function (event) {
            //console.log('dragEndHandler');
            Object.assign(_this.draggingEl.style, {
                transform: 'translate(0,0)',
                zIndex: 1,
                pointerEvents: 'inherit'
            });
            // remove class and drop the element
            if (_this.elDragEnter) {
                _this.elDragEnter.className = _this.elDragEnter.className.replace(/\ drag-enter/g, '');
                _this.elDragEnter.parentNode.insertBefore(_this.draggingEl, _this.elDragEnter);
                _this.emitOrderChanged();
            }
        };
        this.ulEl = this.viewContainerRef.element.nativeElement;
    }
    Ng2SortableDirective.prototype.ngAfterViewInit = function () {
        this.liEls = this.ulEl.querySelectorAll('li');
        for (var i = 0; i < this.liEls.length; i++) {
            var liEl = this.liEls[i];
            // create a simple instance by default, it only adds horizontal recognizers
            var mc = new Hammer(liEl);
            // let the pan gesture support all directions.
            // this will block the vertical scrolling on a touch-device while on the element
            mc.get('pan').set({ direction: Hammer.DIRECTION_ALL });
            mc.on('panstart', this.dragStartHandler);
            mc.on('panup pandown', this.dragHandler);
            mc.on('panend', this.dragEndHandler);
            this.emitOrderChanged();
        }
    };
    Ng2SortableDirective.prototype.emitOrderChanged = function () {
        var liEls = this.ulEl.querySelectorAll('li');
        var orders = Array.prototype.slice.call(liEls).map(function (el) { return el.id; });
        this.orderChanged.emit(orders);
    };
    __decorate([
        // order of LI ids
        core_1.Output(), 
        __metadata('design:type', Object)
    ], Ng2SortableDirective.prototype, "orderChanged", void 0);
    Ng2SortableDirective = __decorate([
        core_1.Directive({
            selector: '[ng2-sortable]'
        }), 
        __metadata('design:paramtypes', [core_1.ViewContainerRef])
    ], Ng2SortableDirective);
    return Ng2SortableDirective;
}());
exports.Ng2SortableDirective = Ng2SortableDirective;
//# sourceMappingURL=ng2-sortable.directive.js.map