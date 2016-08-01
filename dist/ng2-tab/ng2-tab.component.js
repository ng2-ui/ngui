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
var Ng2TabComponent = (function () {
    function Ng2TabComponent(viewContainer) {
        this.viewContainer = viewContainer;
        this.selectedIndexClass = 'selected';
        this.selectedContentsClass = 'selected';
        this.el = this.viewContainer.element.nativeElement;
    }
    Ng2TabComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.indexEls = [].slice.call(this.el.querySelectorAll('[index]'));
        this.contentsEls = [].slice.call(this.el.querySelectorAll('[contents]'));
        this.selectTab(this.selectedIndex);
        this.indexEls.forEach(function (el) {
            el.addEventListener('click', function () {
                _this.selectTab(el.getAttribute('index'));
            });
        });
    };
    Ng2TabComponent.prototype.selectTab = function (id) {
        var _this = this;
        id = id || this.indexEls[0].getAttribute('index');
        this.indexEls.forEach(function (el) {
            _this.removeClass(el, _this.selectedIndexClass);
            if (el.getAttribute('index') == id) {
                _this.addClass(el, _this.selectedIndexClass);
            }
        });
        this.contentsEls.forEach(function (el) {
            el.style.display = 'none';
            _this.removeClass(el, _this.selectedContentsClass);
            if (el.getAttribute('contents') == id) {
                el.style.display = '';
                _this.addClass(el, _this.selectedContentsClass);
            }
        });
    };
    Ng2TabComponent.prototype.addClass = function (el, str) {
        var classNames = (el.className || '').split(' ');
        classNames.push(str);
        el.className = classNames.join(' ');
    };
    Ng2TabComponent.prototype.removeClass = function (el, str) {
        el.className = (el.className || '').replace(new RegExp('[ ]*' + str), '');
    };
    __decorate([
        core_1.Input('selected'), 
        __metadata('design:type', String)
    ], Ng2TabComponent.prototype, "selectedIndex", void 0);
    __decorate([
        core_1.Input('selected-index-class'), 
        __metadata('design:type', String)
    ], Ng2TabComponent.prototype, "selectedIndexClass", void 0);
    __decorate([
        core_1.Input('selected-contents-class'), 
        __metadata('design:type', String)
    ], Ng2TabComponent.prototype, "selectedContentsClass", void 0);
    Ng2TabComponent = __decorate([
        core_1.Component({
            selector: 'ng2-tab, [ng2-tab]',
            encapsulation: core_1.ViewEncapsulation.None,
            template: "<ng-content></ng-content>",
            styles: ["\n    .tabs {\n      position: relative;\n      top: 1px;\n      background: transparent;\n      display: block;\n    }\n    .tabs [index] {\n      display: inline-block;\n      border: 1px solid #999;\n      padding: 5px 10px;\n      border-radius: 2px 2px 0 0;\n    }\n    .tabs [index].selected {\n      padding-top: 0;\n      background: #f7f7f7;\n      border-top: 5px solid #00BCD4;\n      border-bottom: 1px solid transparent;\n    }\n    .tab-contents {\n      border: 1px solid #999;\n      border-radius: 2px;\n      min-height: 3em;\n    }\n  "],
        }), 
        __metadata('design:paramtypes', [core_1.ViewContainerRef])
    ], Ng2TabComponent);
    return Ng2TabComponent;
}());
exports.Ng2TabComponent = Ng2TabComponent;
//# sourceMappingURL=ng2-tab.component.js.map