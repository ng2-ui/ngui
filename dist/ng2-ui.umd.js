(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/core"), require("@angular/forms"), require("@angular/platform-browser"), require("@angular/common"), require("@angular/http"), require("rxjs/Rx"), require("rxjs/Subject"));
	else if(typeof define === 'function' && define.amd)
		define(["@angular/core", "@angular/forms", "@angular/platform-browser", "@angular/common", "@angular/http", "rxjs/Rx", "rxjs/Subject"], factory);
	else if(typeof exports === 'object')
		exports["ng2-ui"] = factory(require("@angular/core"), require("@angular/forms"), require("@angular/platform-browser"), require("@angular/common"), require("@angular/http"), require("rxjs/Rx"), require("rxjs/Subject"));
	else
		root["ng2-ui"] = factory(root["@angular/core"], root["@angular/forms"], root["@angular/platform-browser"], root["@angular/common"], root["@angular/http"], root["rxjs/Rx"], root["rxjs/Subject"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_9__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(1);
	var forms_1 = __webpack_require__(2);
	var platform_browser_1 = __webpack_require__(3);
	var ng2_overlay_1 = __webpack_require__(4);
	exports.OverlayManager = ng2_overlay_1.OverlayManager;
	var ng2_auto_complete_1 = __webpack_require__(5);
	var ng2_datetime_picker_1 = __webpack_require__(10);
	var ng2_collapsable_1 = __webpack_require__(11);
	var ng2_infinite_list_1 = __webpack_require__(12);
	var ng2_map_1 = __webpack_require__(13);
	exports.Ng2MapComponent = ng2_map_1.Ng2MapComponent;
	var ng2_menu_1 = __webpack_require__(14);
	var ng2_parallax_scroll_1 = __webpack_require__(15);
	var ng2_popup_1 = __webpack_require__(16);
	exports.Ng2MessagePopupComponent = ng2_popup_1.Ng2MessagePopupComponent;
	exports.Ng2PopupComponent = ng2_popup_1.Ng2PopupComponent;
	var ng2_sticky_1 = __webpack_require__(17);
	var ng2_tab_1 = __webpack_require__(18);
	var ng2_tooltip_overlay_1 = __webpack_require__(19);
	var ng2_scrollable_1 = __webpack_require__(20);
	exports.Ng2ScrollableDirective = ng2_scrollable_1.Ng2ScrollableDirective;
	var ng2_ui_sortable_1 = __webpack_require__(21);
	var Ng2UIModule = (function () {
	    function Ng2UIModule() {
	    }
	    Ng2UIModule = __decorate([
	        core_1.NgModule({
	            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule],
	            exports: [
	                ng2_auto_complete_1.Ng2AutoCompleteModule,
	                ng2_datetime_picker_1.Ng2DatetimePickerModule,
	                ng2_collapsable_1.Ng2CollapsableModule,
	                ng2_infinite_list_1.Ng2InfiniteListModule,
	                ng2_map_1.Ng2MapModule,
	                ng2_menu_1.Ng2MenuModule,
	                ng2_parallax_scroll_1.Ng2ParallaxScrollModule,
	                ng2_popup_1.Ng2PopupModule,
	                ng2_sticky_1.Ng2StickyModule,
	                ng2_tab_1.Ng2TabModule,
	                ng2_scrollable_1.Ng2ScrollableModule,
	                ng2_tooltip_overlay_1.Ng2TooltipOverlayModule,
	                ng2_overlay_1.Ng2OverlayModule,
	                ng2_ui_sortable_1.Ng2SortableModule
	            ],
	            providers: [ng2_overlay_1.OverlayManager]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], Ng2UIModule);
	    return Ng2UIModule;
	}());
	exports.Ng2UIModule = Ng2UIModule;


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory(__webpack_require__(1), __webpack_require__(2), __webpack_require__(3));
		else if(typeof define === 'function' && define.amd)
			define(["@angular/core", "@angular/forms", "@angular/platform-browser"], factory);
		else if(typeof exports === 'object')
			exports["ng2-overlay"] = factory(require("@angular/core"), require("@angular/forms"), require("@angular/platform-browser"));
		else
			root["ng2-overlay"] = factory(root["@angular/core"], root["@angular/forms"], root["@angular/platform-browser"]);
	})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__) {
	return /******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};
	/******/
	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {
	/******/
	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;
	/******/
	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			exports: {},
	/******/ 			id: moduleId,
	/******/ 			loaded: false
	/******/ 		};
	/******/
	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
	/******/
	/******/ 		// Flag the module as loaded
	/******/ 		module.loaded = true;
	/******/
	/******/ 		// Return the exports of the module
	/******/ 		return module.exports;
	/******/ 	}
	/******/
	/******/
	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules;
	/******/
	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules;
	/******/
	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";
	/******/
	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(0);
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */
	/***/ function(module, exports, __webpack_require__) {
	
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
		var core_1 = __webpack_require__(1);
		var forms_1 = __webpack_require__(2);
		var platform_browser_1 = __webpack_require__(3);
		var overlay_1 = __webpack_require__(4);
		exports.Overlay = overlay_1.Overlay;
		var overlay_manager_1 = __webpack_require__(6);
		exports.OverlayManager = overlay_manager_1.OverlayManager;
		var overlay_directive_1 = __webpack_require__(7);
		exports.OverlayDirective = overlay_directive_1.OverlayDirective;
		var Ng2OverlayModule = (function () {
		    function Ng2OverlayModule() {
		    }
		    Ng2OverlayModule = __decorate([
		        core_1.NgModule({
		            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule],
		            declarations: [overlay_directive_1.OverlayDirective],
		            providers: [overlay_manager_1.OverlayManager],
		            exports: [overlay_directive_1.OverlayDirective]
		        }), 
		        __metadata('design:paramtypes', [])
		    ], Ng2OverlayModule);
		    return Ng2OverlayModule;
		}());
		exports.Ng2OverlayModule = Ng2OverlayModule;
		;
	
	
	/***/ },
	/* 1 */
	/***/ function(module, exports) {
	
		module.exports = __WEBPACK_EXTERNAL_MODULE_1__;
	
	/***/ },
	/* 2 */
	/***/ function(module, exports) {
	
		module.exports = __WEBPACK_EXTERNAL_MODULE_2__;
	
	/***/ },
	/* 3 */
	/***/ function(module, exports) {
	
		module.exports = __WEBPACK_EXTERNAL_MODULE_3__;
	
	/***/ },
	/* 4 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		var util_1 = __webpack_require__(5);
		var Overlay = (function () {
		    function Overlay(el, options) {
		        options = options || {};
		        this.id = options.id;
		        this.type = options.type;
		        if (!this.id) {
		            throw "Invalid overlay id";
		        }
		        this.element = el; // overlay wrapper element with table dsplay
		        this.windowOverlay = options.windowOverlay;
		        this.position = this.getPositionProperty(options.position || 'center center');
		    }
		    Overlay.prototype.positionIt = function (event) {
		        if (this.position.inside) {
		            this.positionItInside(this.position);
		        }
		        else {
		            this.positionItOutside(this.position, event);
		        }
		    };
		    Overlay.prototype.getPositionProperty = function (positionStr) {
		        var position = {}, inside;
		        var _a = positionStr.split(' '), vertical = _a[0], horizontal = _a[1], insideStr = _a[2];
		        horizontal = horizontal || 'center';
		        vertical = vertical || 'center';
		        inside = (insideStr !== 'outside' || this.windowOverlay);
		        position.horizontal = Overlay[horizontal.toUpperCase()];
		        position.vertical = Overlay[vertical.toUpperCase()];
		        position.inside = inside;
		        return position;
		    };
		    Overlay.prototype.positionItInside = function (position) {
		        this.element.style.display = 'flex';
		        //top / left positioning
		        if (this.windowOverlay) {
		            this.element.style.position = 'fixed';
		            //works as blocker
		            Object.assign(this.element.style, {
		                backgroundColor: 'rgba(0,0,0,0.2)',
		                top: '0', left: '0', bottom: '0', right: '0',
		                width: '100%', height: '100%'
		            });
		        }
		        else {
		            //adjust top/left to match to parentElement
		            var parentEl = this.element.parentElement;
		            //works as a blocker
		            Object.assign(this.element.style, {
		                position: 'absolute',
		                // backgroundColor: 'transparent',
		                backgroundColor: 'rgba(0,0,0,0.2)',
		                top: parentEl.offsetTop + 'px',
		                left: parentEl.offsetLeft + 'px',
		                width: parentEl.offsetWidth + 'px',
		                height: parentEl.offsetHeight + 'px'
		            });
		        }
		        ;
		        //horizontal position
		        switch (position.horizontal) {
		            case Overlay.LEFT:
		                this.element.style.justifyContent = 'flex-start';
		                break;
		            case Overlay.CENTER:
		                this.element.style.justifyContent = 'center';
		                break;
		            case Overlay.RIGHT:
		                this.element.style.justifyContent = 'flex-end';
		                break;
		        }
		        //vertical position
		        switch (position.vertical) {
		            case Overlay.LEFT:
		                this.element.style.alignItems = 'flex-start';
		                break;
		            case Overlay.CENTER:
		            case Overlay.MIDDLE:
		                this.element.style.alignItems = 'center';
		                break;
		            case Overlay.RIGHT:
		                this.element.style.alignItems = 'flex-end';
		                break;
		        }
		    };
		    Overlay.prototype.positionItOutside = function (position, event) {
		        //adjust top/left to match to parentElement
		        var parentEl = this.element.parentElement;
		        //works as guide line?
		        Object.assign(this.element.style, {
		            position: 'absolute',
		            pointerEvents: 'none',
		            top: parentEl.offsetTop + 'px',
		            left: parentEl.offsetLeft + 'px',
		            width: parentEl.offsetWidth + 'px',
		            height: parentEl.offsetHeight + 'px'
		        });
		        this.element.style.display = 'block';
		        var elToPosition = (this.element.children[0]);
		        elToPosition.style.position = 'absolute';
		        elToPosition.style.pointerEvents = 'auto';
		        switch (position.vertical) {
		            case Overlay.TOP:
		                elToPosition.style.bottom = this.element.offsetHeight + 'px';
		                break;
		            case Overlay.BOTTOM:
		                elToPosition.style.top = this.element.offsetHeight + 'px';
		                break;
		            case Overlay.LEFT:
		                elToPosition.style.right = this.element.offsetWidth + 'px';
		                break;
		            case Overlay.RIGHT:
		                elToPosition.style.left = this.element.offsetWidth + 'px';
		                break;
		        }
		        switch (position.horizontal) {
		            case Overlay.CENTER:
		                elToPosition.style.left = (this.element.offsetWidth - elToPosition.offsetWidth) / 2 + 'px';
		                break;
		            case Overlay.LEFT:
		                elToPosition.style.left = '0';
		                break;
		            case Overlay.RIGHT:
		                elToPosition.style.right = '0';
		                break;
		            case Overlay.TOP:
		                elToPosition.style.top = '0';
		                break;
		            case Overlay.BOTTOM:
		                elToPosition.style.bottom = '0';
		                break;
		            case Overlay.CURSOR:
		                var mousePos = util_1.Util.getMousePositionInElement(event, this.element);
		                if ((mousePos.x + elToPosition.offsetWidth) > this.element.offsetWidth) {
		                    elToPosition.style.left = (this.element.offsetWidth - elToPosition.offsetWidth - 5) + 'px';
		                }
		                else if (mousePos.x < elToPosition.offsetWidth / 2) {
		                    elToPosition.style.left = '0px';
		                }
		                else {
		                    elToPosition.style.left = mousePos.x - elToPosition.offsetWidth / 2 + 'px';
		                }
		                break;
		        }
		    };
		    Overlay.TOP = 11;
		    Overlay.MIDDLE = 12;
		    Overlay.BOTTOM = 13;
		    Overlay.LEFT = 21;
		    Overlay.CENTER = 22;
		    Overlay.RIGHT = 23;
		    Overlay.CURSOR = 31;
		    return Overlay;
		}());
		exports.Overlay = Overlay;
	
	
	/***/ },
	/* 5 */
	/***/ function(module, exports) {
	
		"use strict";
		var Util = (function () {
		    function Util() {
		    }
		    Util.getDocumentPosition = function (oElement) {
		        var posX = 0, posY = 0;
		        if (oElement.offsetParent) {
		            for (; oElement; oElement = oElement.offsetParent) {
		                posX += oElement.offsetLeft;
		                posY += oElement.offsetTop;
		            }
		            return { x: posX, y: posY };
		        }
		        else {
		            return { x: oElement['x'], y: oElement['y'] };
		        }
		    };
		    Util.getMousePositionInElement = function (evt, element) {
		        evt = evt || window.event;
		        var posX = 0, posY = 0;
		        var elPos = this.getDocumentPosition(element);
		        if (evt.pageX || evt.pageY) {
		            posX = evt.pageX;
		            posY = evt.pageY;
		        }
		        else if (evt.clientX || evt.clientY) {
		            posX = evt.clientX +
		                document.body.scrollLeft +
		                document.documentElement.scrollLeft;
		            posY = evt.clientY +
		                document.body.scrollTop +
		                document.documentElement.scrollTop;
		        }
		        return {
		            x: posX - elPos.x,
		            y: posY - elPos.y
		        };
		    };
		    return Util;
		}());
		exports.Util = Util;
	
	
	/***/ },
	/* 6 */
	/***/ function(module, exports, __webpack_require__) {
	
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
		var core_1 = __webpack_require__(1);
		var OverlayManager = (function () {
		    function OverlayManager() {
		    }
		    OverlayManager.prototype.register = function (overlay) {
		        OverlayManager.overlays[overlay.id] = overlay;
		        // console.log('overlay.register, OverlayManager.overlays', OverlayManager.overlays);
		    };
		    OverlayManager.prototype.open = function (arg, event) {
		        var overlay = typeof arg === 'string' ? OverlayManager.overlays[arg] : arg;
		        if (!overlay.opened) {
		            overlay.positionIt(event);
		            overlay.opened = true;
		        }
		    };
		    OverlayManager.prototype.close = function (arg) {
		        var overlay = typeof arg === 'string' ? OverlayManager.overlays[arg] : arg;
		        overlay.element.style.display = 'none';
		        overlay.opened = false;
		    };
		    //list of overlay objects
		    OverlayManager.overlays = {};
		    OverlayManager = __decorate([
		        core_1.Injectable(), 
		        __metadata('design:paramtypes', [])
		    ], OverlayManager);
		    return OverlayManager;
		}());
		exports.OverlayManager = OverlayManager;
	
	
	/***/ },
	/* 7 */
	/***/ function(module, exports, __webpack_require__) {
	
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
		var core_1 = __webpack_require__(1);
		var overlay_manager_1 = __webpack_require__(6);
		var overlay_1 = __webpack_require__(4);
		var OverlayDirective = (function () {
		    function OverlayDirective(viewContainerRef, overlayManager) {
		        this.viewContainerRef = viewContainerRef;
		        this.overlayManager = overlayManager;
		        this.el = this.viewContainerRef.element.nativeElement;
		    }
		    OverlayDirective.prototype.ngAfterViewInit = function () {
		        this.wrapItWithOverlayTag();
		        this.registerToOverlayManager();
		    };
		    OverlayDirective.prototype.wrapItWithOverlayTag = function () {
		        //console.log('wrapped overlay directive element with <ng2-overlay>');
		        this.overlayEl = document.createElement('ng2-overlay');
		        this.overlayEl.style.display = 'none';
		        this.el.parentElement.insertBefore(this.overlayEl, this.el.nextSibling);
		        this.overlayEl.appendChild(this.el);
		    };
		    //create Overlay object,  then register this element to overlayManager
		    OverlayDirective.prototype.registerToOverlayManager = function () {
		        var positionStr = this.overlayPosition;
		        var overlay = new overlay_1.Overlay(this.overlayEl, {
		            id: this.el.id,
		            windowOverlay: this.overlayOf == "window",
		            position: positionStr
		        });
		        //console.log('registering overlay', overlay);
		        this.overlayManager.register(overlay);
		    };
		    __decorate([
		        core_1.Input('ng2-overlay-of'), 
		        __metadata('design:type', String)
		    ], OverlayDirective.prototype, "overlayOf", void 0);
		    __decorate([
		        core_1.Input('ng2-overlay-position'), 
		        __metadata('design:type', String)
		    ], OverlayDirective.prototype, "overlayPosition", void 0);
		    OverlayDirective = __decorate([
		        core_1.Directive({
		            selector: '[ng2-overlay], [ng2-overlay-of], [ng2-overlay-position]',
		        }), 
		        __metadata('design:paramtypes', [core_1.ViewContainerRef, overlay_manager_1.OverlayManager])
		    ], OverlayDirective);
		    return OverlayDirective;
		}());
		exports.OverlayDirective = OverlayDirective;
	
	
	/***/ }
	/******/ ])
	});
	;
	//# sourceMappingURL=ng2-overlay.umd.js.map

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory(__webpack_require__(1), __webpack_require__(2), __webpack_require__(6), __webpack_require__(7), __webpack_require__(8), __webpack_require__(9));
		else if(typeof define === 'function' && define.amd)
			define(["@angular/core", "@angular/forms", "@angular/common", "@angular/http", "rxjs/Rx", "rxjs/Subject"], factory);
		else if(typeof exports === 'object')
			exports["ng2-auto-complete"] = factory(require("@angular/core"), require("@angular/forms"), require("@angular/common"), require("@angular/http"), require("rxjs/Rx"), require("rxjs/Subject"));
		else
			root["ng2-auto-complete"] = factory(root["@angular/core"], root["@angular/forms"], root["@angular/common"], root["@angular/http"], root["rxjs/Rx"], root["rxjs/Subject"]);
	})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_8__) {
	return /******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};
	/******/
	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {
	/******/
	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;
	/******/
	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			exports: {},
	/******/ 			id: moduleId,
	/******/ 			loaded: false
	/******/ 		};
	/******/
	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
	/******/
	/******/ 		// Flag the module as loaded
	/******/ 		module.loaded = true;
	/******/
	/******/ 		// Return the exports of the module
	/******/ 		return module.exports;
	/******/ 	}
	/******/
	/******/
	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules;
	/******/
	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules;
	/******/
	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";
	/******/
	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(0);
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */
	/***/ function(module, exports, __webpack_require__) {
	
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
		var core_1 = __webpack_require__(1);
		var forms_1 = __webpack_require__(2);
		var common_1 = __webpack_require__(3);
		var auto_complete_1 = __webpack_require__(4);
		exports.AutoComplete = auto_complete_1.AutoComplete;
		var auto_complete_component_1 = __webpack_require__(7);
		exports.AutoCompleteComponent = auto_complete_component_1.AutoCompleteComponent;
		var auto_complete_directive_1 = __webpack_require__(9);
		exports.AutoCompleteDirective = auto_complete_directive_1.AutoCompleteDirective;
		var Ng2AutoCompleteModule = (function () {
		    function Ng2AutoCompleteModule() {
		    }
		    Ng2AutoCompleteModule = __decorate([
		        core_1.NgModule({
		            imports: [common_1.CommonModule, forms_1.FormsModule],
		            declarations: [auto_complete_component_1.AutoCompleteComponent, auto_complete_directive_1.AutoCompleteDirective],
		            exports: [auto_complete_component_1.AutoCompleteComponent, auto_complete_directive_1.AutoCompleteDirective],
		            entryComponents: [auto_complete_component_1.AutoCompleteComponent],
		            providers: [auto_complete_1.AutoComplete]
		        }), 
		        __metadata('design:paramtypes', [])
		    ], Ng2AutoCompleteModule);
		    return Ng2AutoCompleteModule;
		}());
		exports.Ng2AutoCompleteModule = Ng2AutoCompleteModule;
	
	
	/***/ },
	/* 1 */
	/***/ function(module, exports) {
	
		module.exports = __WEBPACK_EXTERNAL_MODULE_1__;
	
	/***/ },
	/* 2 */
	/***/ function(module, exports) {
	
		module.exports = __WEBPACK_EXTERNAL_MODULE_2__;
	
	/***/ },
	/* 3 */
	/***/ function(module, exports) {
	
		module.exports = __WEBPACK_EXTERNAL_MODULE_3__;
	
	/***/ },
	/* 4 */
	/***/ function(module, exports, __webpack_require__) {
	
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
		var core_1 = __webpack_require__(1);
		var http_1 = __webpack_require__(5);
		__webpack_require__(6);
		/**
		 * provides auto-complete related utility functions
		 */
		var AutoComplete = (function () {
		    function AutoComplete(http) {
		        this.http = http;
		        // ...
		    }
		    AutoComplete.prototype.filter = function (list, keyword) {
		        return list.filter(function (el) {
		            return !!JSON.stringify(el).match(new RegExp(keyword, "i"));
		        });
		    };
		    /**
		     * return remote data from the given source and options, and data path
		     *
		     * @param {*} options is an object containing the query paramters for the GET call
		     * @returns {Observable<Response>}
		     *
		     * @memberOf AutoComplete
		     */
		    AutoComplete.prototype.getRemoteData = function (options) {
		        var _this = this;
		        var keyValues = [];
		        var url = "";
		        for (var key in options) {
		            if (options.hasOwnProperty(key)) {
		                // replace all keyword to value
		                var regexp = new RegExp(":" + key, "g");
		                url = this.source;
		                if (url.match(regexp)) {
		                    url = url.replace(regexp, options[key]);
		                }
		                else {
		                    keyValues.push(key + "=" + options[key]);
		                }
		            }
		        }
		        if (keyValues.length) {
		            var qs = keyValues.join("&");
		            url += url.match(/\?[a-z]/i) ? qs : ("?" + qs);
		        }
		        return this.http.get(url)
		            .map(function (resp) { return resp.json(); })
		            .map(function (resp) {
		            var list = resp.data || resp;
		            if (_this.pathToData) {
		                var paths = _this.pathToData.split(".");
		                paths.forEach(function (prop) { return list = list[prop]; });
		            }
		            return list;
		        });
		    };
		    ;
		    AutoComplete = __decorate([
		        core_1.Injectable(), 
		        __metadata('design:paramtypes', [http_1.Http])
		    ], AutoComplete);
		    return AutoComplete;
		}());
		exports.AutoComplete = AutoComplete;
	
	
	/***/ },
	/* 5 */
	/***/ function(module, exports) {
	
		module.exports = __WEBPACK_EXTERNAL_MODULE_5__;
	
	/***/ },
	/* 6 */
	/***/ function(module, exports) {
	
		module.exports = __WEBPACK_EXTERNAL_MODULE_6__;
	
	/***/ },
	/* 7 */
	/***/ function(module, exports, __webpack_require__) {
	
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
		var core_1 = __webpack_require__(1);
		var Subject_1 = __webpack_require__(8);
		var auto_complete_1 = __webpack_require__(4);
		/**
		 * show a selected date in monthly calendar
		 * Each filteredList item has the following property in addition to data itself
		 *   1. displayValue as string e.g. Allen Kim
		 *   2. dataValue as any e.g.
		 */
		var AutoCompleteComponent = (function () {
		    /**
		     * constructor
		     */
		    function AutoCompleteComponent(elementRef, autoComplete) {
		        this.autoComplete = autoComplete;
		        this.minChars = 0;
		        this.valuePropertyName = "id";
		        this.displayPropertyName = "value";
		        this.dropdownVisible = false;
		        this.isLoading = false;
		        this.filteredList = [];
		        this.itemIndex = 0;
		        this.valueSelected = new Subject_1.Subject();
		        this.delay = (function () {
		            var timer = 0;
		            return function (callback, ms) {
		                clearTimeout(timer);
		                timer = setTimeout(callback, ms);
		            };
		        })();
		        this.el = elementRef.nativeElement;
		    }
		    AutoCompleteComponent.prototype.isSrcArr = function () {
		        return (this.source.constructor.name === "Array");
		    };
		    /**
		     * user enters into input el, shows list to select, then select one
		     */
		    AutoCompleteComponent.prototype.ngOnInit = function () {
		        this.inputEl = (this.el.querySelector("input"));
		        this.autoComplete.source = this.source;
		        this.autoComplete.pathToData = this.pathToData;
		    };
		    AutoCompleteComponent.prototype.reloadListInDelay = function () {
		        var _this = this;
		        var delayMs = this.isSrcArr() ? 10 : 500;
		        // executing after user stopped typing
		        this.delay(function () { return _this.reloadList(); }, delayMs);
		    };
		    AutoCompleteComponent.prototype.showDropdownList = function () {
		        this.keyword = "";
		        this.inputEl.focus();
		        this.reloadList();
		    };
		    AutoCompleteComponent.prototype.hideDropdownList = function () {
		        this.dropdownVisible = false;
		    };
		    AutoCompleteComponent.prototype.reloadList = function () {
		        var _this = this;
		        var keyword = this.inputEl.value;
		        this.hideDropdownList();
		        this.dropdownVisible = true;
		        if (this.isSrcArr()) {
		            // local source 
		            this.filteredList = this.autoComplete.filter(this.source, this.keyword);
		        }
		        else {
		            this.isLoading = true;
		            if (keyword.length >= this.minChars) {
		                if (typeof this.source === "function") {
		                    // custom function that returns observable 
		                    this.source(keyword).subscribe(function (resp) {
		                        if (_this.pathToData) {
		                            var paths = _this.pathToData.split(".");
		                            paths.forEach(function (prop) { return resp = resp[prop]; });
		                        }
		                        _this.filteredList = resp;
		                    }, function (error) { return null; }, function () { return _this.isLoading = false; } // complete
		                    );
		                }
		                else {
		                    // remote source  
		                    var query = { keyword: keyword };
		                    this.autoComplete.getRemoteData(query)
		                        .subscribe(function (resp) {
		                        _this.filteredList = resp;
		                    }, function (error) { return null; }, function () { return _this.isLoading = false; } // complete
		                    );
		                }
		            }
		        }
		    };
		    AutoCompleteComponent.prototype.selectOne = function (data) {
		        this.hideDropdownList();
		        this.valueSelected.next(data);
		    };
		    ;
		    AutoCompleteComponent.prototype.inputElKeyHandler = function (evt) {
		        var totalNumItem = this.filteredList.length;
		        switch (evt.keyCode) {
		            case 27:
		                this.hideDropdownList();
		                break;
		            case 38:
		                this.itemIndex = (totalNumItem + this.itemIndex - 1) % totalNumItem;
		                break;
		            case 40:
		                this.dropdownVisible = true;
		                this.itemIndex = (totalNumItem + this.itemIndex + 1) % totalNumItem;
		                break;
		            case 13:
		                if (this.filteredList.length > 0) {
		                    this.selectOne(this.filteredList[this.itemIndex]);
		                }
		                evt.preventDefault();
		                break;
		        }
		    };
		    ;
		    AutoCompleteComponent.prototype.getFormattedList = function (data) {
		        var formatter = this.listFormatter || this.defaultListFormatter;
		        return formatter.apply(this, [data]);
		    };
		    AutoCompleteComponent.prototype.defaultListFormatter = function (data) {
		        var html = "";
		        html += data[this.valuePropertyName] ? "<b>(" + data[this.valuePropertyName] + ")</b>" : "";
		        html += data[this.displayPropertyName] ? "<span>" + data[this.displayPropertyName] + "</span>" : data;
		        return html;
		    };
		    __decorate([
		        core_1.Input("list-formatter"), 
		        __metadata('design:type', Function)
		    ], AutoCompleteComponent.prototype, "listFormatter", void 0);
		    __decorate([
		        core_1.Input("source"), 
		        __metadata('design:type', Object)
		    ], AutoCompleteComponent.prototype, "source", void 0);
		    __decorate([
		        core_1.Input("path-to-data"), 
		        __metadata('design:type', String)
		    ], AutoCompleteComponent.prototype, "pathToData", void 0);
		    __decorate([
		        core_1.Input("min-chars"), 
		        __metadata('design:type', Number)
		    ], AutoCompleteComponent.prototype, "minChars", void 0);
		    __decorate([
		        core_1.Input("value-property-name"), 
		        __metadata('design:type', String)
		    ], AutoCompleteComponent.prototype, "valuePropertyName", void 0);
		    __decorate([
		        core_1.Input("display-property-name"), 
		        __metadata('design:type', String)
		    ], AutoCompleteComponent.prototype, "displayPropertyName", void 0);
		    __decorate([
		        core_1.Input("placeholder"), 
		        __metadata('design:type', String)
		    ], AutoCompleteComponent.prototype, "placeholder", void 0);
		    AutoCompleteComponent = __decorate([
		        core_1.Component({
		            selector: "auto-complete",
		            template: "\n  <div class=\"auto-complete\">\n\n    <!-- keyword input -->\n    <input class=\"keyword\"\n           placeholder=\"{{placeholder}}\"\n           (focus)=\"showDropdownList()\"\n           (blur)=\"dropdownVisible=false\"\n           (keydown)=\"inputElKeyHandler($event)\"\n           (input)=\"reloadListInDelay()\"\n           [(ngModel)]=\"keyword\" />\n\n    <!-- dropdown that user can select -->\n    <ul *ngIf=\"dropdownVisible\">\n      <li *ngIf=\"isLoading\" class=\"loading\">Loading</li>\n      <li class=\"item\"\n          *ngFor=\"let item of filteredList; let i=index\"\n          (mousedown)=\"selectOne(item)\"\n          [ngClass]=\"{selected: i === itemIndex}\"\n          [innerHtml]=\"getFormattedList(item)\">\n      </li>\n    </ul>\n\n  </div>",
		            providers: [auto_complete_1.AutoComplete],
		            styles: ["\n  @keyframes slideDown {\n    0% {\n      transform:  translateY(-10px);\n    }\n    100% {\n      transform: translateY(0px);\n    }\n  }\n  .auto-complete input {\n    outline: none;\n    border: 2px solid transparent;\n    border-width: 3px 2px;\n    margin: 0;\n    box-sizing: border-box;\n    background-clip: content-box;\n  }\n\n  .auto-complete ul {\n    background-color: #fff;\n    margin: 0;\n    width : 100%;\n    overflow-y: auto;\n    list-style-type: none;\n    padding: 0;\n    border: 1px solid #ccc;\n    box-sizing: border-box;\n    animation: slideDown 0.1s;\n  }\n\n  .auto-complete ul li {\n    padding: 2px 5px;\n    border-bottom: 1px solid #eee;\n  }\n\n  .auto-complete ul li.selected {\n    background-color: #ccc;\n  }\n\n  .auto-complete ul li:last-child {\n    border-bottom: none;\n  }\n\n  .auto-complete ul li:hover {\n    background-color: #ccc;\n  }"
		            ],
		            encapsulation: core_1.ViewEncapsulation.None
		        }), 
		        __metadata('design:paramtypes', [core_1.ElementRef, auto_complete_1.AutoComplete])
		    ], AutoCompleteComponent);
		    return AutoCompleteComponent;
		}());
		exports.AutoCompleteComponent = AutoCompleteComponent;
	
	
	/***/ },
	/* 8 */
	/***/ function(module, exports) {
	
		module.exports = __WEBPACK_EXTERNAL_MODULE_8__;
	
	/***/ },
	/* 9 */
	/***/ function(module, exports, __webpack_require__) {
	
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
		var core_1 = __webpack_require__(1);
		__webpack_require__(6);
		var auto_complete_component_1 = __webpack_require__(7);
		/**
		 * display auto-complete section with input and dropdown list when it is clicked
		 */
		var AutoCompleteDirective = (function () {
		    function AutoCompleteDirective(resolver, viewContainerRef) {
		        var _this = this;
		        this.resolver = resolver;
		        this.viewContainerRef = viewContainerRef;
		        this.ngModelChange = new core_1.EventEmitter();
		        this.valueChanged = new core_1.EventEmitter();
		        this.hideAutoCompleteDropdown = function (event) {
		            if (_this.componentRef) {
		                if (event && event.type === "click" &&
		                    event.target.tagName !== "INPUT" &&
		                    !_this.elementIn(event.target, _this.acDropdownEl)) {
		                    _this.componentRef.destroy();
		                    _this.componentRef = undefined;
		                }
		                else if (!event) {
		                    _this.componentRef.destroy();
		                    _this.componentRef = undefined;
		                }
		            }
		        };
		        this.styleAutoCompleteDropdown = function () {
		            var component = _this.componentRef.instance;
		            /* setting width/height auto complete */
		            var thisElBCR = _this.el.getBoundingClientRect();
		            _this.acDropdownEl.style.width = thisElBCR.width + "px";
		            _this.acDropdownEl.style.position = "absolute";
		            _this.acDropdownEl.style.zIndex = "1";
		            _this.acDropdownEl.style.top = "0";
		            _this.acDropdownEl.style.left = "0";
		            _this.acDropdownEl.style.display = "inline-block";
		            var thisInputElBCR = _this.inputEl.getBoundingClientRect();
		            component.inputEl.style.width = (thisInputElBCR.width - 30) + "px";
		            component.inputEl.style.height = thisInputElBCR.height + "px";
		            component.inputEl.focus();
		        };
		        this.selectNewValue = function (val) {
		            /* modify toString function of value if value is an object */
		            if (val && typeof val === "object") {
		                var displayVal_1 = val[_this.displayPropertyName || "value"];
		                val.toString = function () { return displayVal_1; };
		            }
		            /* emit ngModelChange and valueChanged */
		            if (val !== _this.ngModel) {
		                _this.ngModelChange.emit(val);
		            }
		            if (val) {
		                _this.valueChanged.emit(val);
		            }
		            /* hide dropdown */
		            _this.hideAutoCompleteDropdown();
		        };
		        this.el = this.viewContainerRef.element.nativeElement;
		    }
		    AutoCompleteDirective.prototype.ngOnInit = function () {
		        // wrap this element with <div class="ng2-auto-complete">
		        var divEl = document.createElement("div");
		        divEl.className = "ng2-auto-complete";
		        divEl.style.display = "inline-block";
		        divEl.style.position = "relative";
		        this.el.parentElement.insertBefore(divEl, this.el.nextSibling);
		        divEl.appendChild(this.el);
		        // apply toString() method for the object
		        this.selectNewValue(this.ngModel);
		        // when somewhere else clicked, hide this autocomplete
		        document.addEventListener("click", this.hideAutoCompleteDropdown);
		    };
		    AutoCompleteDirective.prototype.ngOnDestroy = function () {
		        if (this.componentRef) {
		            this.componentRef.instance.valueSelected.unsubscribe();
		        }
		        document.removeEventListener("click", this.hideAutoCompleteDropdown);
		    };
		    //show auto-complete list below the current element
		    AutoCompleteDirective.prototype.showAutoCompleteDropdown = function () {
		        this.hideAutoCompleteDropdown();
		        var factory = this.resolver.resolveComponentFactory(auto_complete_component_1.AutoCompleteComponent);
		        this.componentRef = this.viewContainerRef.createComponent(factory);
		        var component = this.componentRef.instance;
		        component.listFormatter = this.listFormatter;
		        //component.prefillFunc = this.prefillFunc;
		        component.pathToData = this.pathToData;
		        component.minChars = this.minChars;
		        component.valuePropertyName = this.valuePropertyName || "id";
		        component.displayPropertyName = this.displayPropertyName || "value";
		        component.source = this.source;
		        component.placeholder = this.autoCompletePlaceholder;
		        component.valueSelected.subscribe(this.selectNewValue);
		        this.acDropdownEl = this.componentRef.location.nativeElement;
		        this.acDropdownEl.style.display = "none";
		        // if this element is not an input tag, move dropdown after input tag
		        // so that it displays correctly
		        this.moveAutocompleteDropDownAfterInputEl();
		        setTimeout(this.styleAutoCompleteDropdown);
		    };
		    AutoCompleteDirective.prototype.moveAutocompleteDropDownAfterInputEl = function () {
		        this.inputEl = this.el;
		        if (this.el.tagName !== "INPUT" && this.acDropdownEl) {
		            this.inputEl = this.el.querySelector("input");
		            this.inputEl.parentElement.insertBefore(this.acDropdownEl, this.inputEl.nextSibling);
		        }
		    };
		    AutoCompleteDirective.prototype.elementIn = function (el, containerEl) {
		        while (el = el.parentNode) {
		            if (el === containerEl) {
		                return true;
		            }
		            ;
		        }
		        return false;
		    };
		    __decorate([
		        core_1.Input("auto-complete-placeholder"), 
		        __metadata('design:type', String)
		    ], AutoCompleteDirective.prototype, "autoCompletePlaceholder", void 0);
		    __decorate([
		        core_1.Input("list-formatter"), 
		        __metadata('design:type', Function)
		    ], AutoCompleteDirective.prototype, "listFormatter", void 0);
		    __decorate([
		        core_1.Input("source"), 
		        __metadata('design:type', Object)
		    ], AutoCompleteDirective.prototype, "source", void 0);
		    __decorate([
		        core_1.Input("path-to-data"), 
		        __metadata('design:type', String)
		    ], AutoCompleteDirective.prototype, "pathToData", void 0);
		    __decorate([
		        core_1.Input("min-chars"), 
		        __metadata('design:type', Number)
		    ], AutoCompleteDirective.prototype, "minChars", void 0);
		    __decorate([
		        core_1.Input("value-property-name"), 
		        __metadata('design:type', String)
		    ], AutoCompleteDirective.prototype, "valuePropertyName", void 0);
		    __decorate([
		        core_1.Input("display-property-name"), 
		        __metadata('design:type', String)
		    ], AutoCompleteDirective.prototype, "displayPropertyName", void 0);
		    __decorate([
		        core_1.Input(), 
		        __metadata('design:type', String)
		    ], AutoCompleteDirective.prototype, "ngModel", void 0);
		    __decorate([
		        core_1.Output(), 
		        __metadata('design:type', Object)
		    ], AutoCompleteDirective.prototype, "ngModelChange", void 0);
		    __decorate([
		        core_1.Output("value-changed"), 
		        __metadata('design:type', Object)
		    ], AutoCompleteDirective.prototype, "valueChanged", void 0);
		    AutoCompleteDirective = __decorate([
		        core_1.Directive({
		            selector: "[auto-complete], [ng2-auto-complete]",
		            host: {
		                "(click)": "showAutoCompleteDropdown()"
		            }
		        }), 
		        __metadata('design:paramtypes', [core_1.ComponentFactoryResolver, core_1.ViewContainerRef])
		    ], AutoCompleteDirective);
		    return AutoCompleteDirective;
		}());
		exports.AutoCompleteDirective = AutoCompleteDirective;
	
	
	/***/ }
	/******/ ])
	});
	;
	//# sourceMappingURL=ng2-auto-complete.umd.js.map

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_9__;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory(__webpack_require__(1), __webpack_require__(2), __webpack_require__(6));
		else if(typeof define === 'function' && define.amd)
			define(["@angular/core", "@angular/forms", "@angular/common"], factory);
		else if(typeof exports === 'object')
			exports["ng2-datetime-picker"] = factory(require("@angular/core"), require("@angular/forms"), require("@angular/common"));
		else
			root["ng2-datetime-picker"] = factory(root["@angular/core"], root["@angular/forms"], root["@angular/common"]);
	})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__) {
	return /******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};
	/******/
	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {
	/******/
	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;
	/******/
	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			exports: {},
	/******/ 			id: moduleId,
	/******/ 			loaded: false
	/******/ 		};
	/******/
	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
	/******/
	/******/ 		// Flag the module as loaded
	/******/ 		module.loaded = true;
	/******/
	/******/ 		// Return the exports of the module
	/******/ 		return module.exports;
	/******/ 	}
	/******/
	/******/
	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules;
	/******/
	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules;
	/******/
	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";
	/******/
	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(0);
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */
	/***/ function(module, exports, __webpack_require__) {
	
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
		var core_1 = __webpack_require__(1);
		var forms_1 = __webpack_require__(2);
		var common_1 = __webpack_require__(3);
		var datetime_1 = __webpack_require__(4);
		exports.DateTime = datetime_1.DateTime;
		var datetime_picker_component_1 = __webpack_require__(5);
		exports.DateTimePickerComponent = datetime_picker_component_1.DateTimePickerComponent;
		var datetime_picker_directive_1 = __webpack_require__(6);
		exports.DateTimePickerDirective = datetime_picker_directive_1.DateTimePickerDirective;
		var Ng2DatetimePickerModule = (function () {
		    function Ng2DatetimePickerModule() {
		    }
		    Ng2DatetimePickerModule = __decorate([
		        core_1.NgModule({
		            imports: [common_1.CommonModule, forms_1.FormsModule],
		            declarations: [datetime_picker_component_1.DateTimePickerComponent, datetime_picker_directive_1.DateTimePickerDirective],
		            exports: [datetime_picker_component_1.DateTimePickerComponent, datetime_picker_directive_1.DateTimePickerDirective],
		            entryComponents: [datetime_picker_component_1.DateTimePickerComponent],
		            providers: [datetime_1.DateTime]
		        }), 
		        __metadata('design:paramtypes', [])
		    ], Ng2DatetimePickerModule);
		    return Ng2DatetimePickerModule;
		}());
		exports.Ng2DatetimePickerModule = Ng2DatetimePickerModule;
	
	
	/***/ },
	/* 1 */
	/***/ function(module, exports) {
	
		module.exports = __WEBPACK_EXTERNAL_MODULE_1__;
	
	/***/ },
	/* 2 */
	/***/ function(module, exports) {
	
		module.exports = __WEBPACK_EXTERNAL_MODULE_2__;
	
	/***/ },
	/* 3 */
	/***/ function(module, exports) {
	
		module.exports = __WEBPACK_EXTERNAL_MODULE_3__;
	
	/***/ },
	/* 4 */
	/***/ function(module, exports, __webpack_require__) {
	
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
		var core_1 = __webpack_require__(1);
		var DateTime = (function () {
		    function DateTime() {
		        this.initialize();
		    }
		    DateTime.prototype.initialize = function () {
		        this.months = [
		            { fullName: 'January', shortName: 'Jan' },
		            { fullName: 'February', shortName: 'Feb' },
		            { fullName: 'March', shortName: 'Mar' },
		            { fullName: 'April', shortName: 'Apr' },
		            { fullName: 'May', shortName: 'May' },
		            { fullName: 'June', shortName: 'Jun' },
		            { fullName: 'July', shortName: 'Jul' },
		            { fullName: 'August', shortName: 'Aug' },
		            { fullName: 'September', shortName: 'Sep' },
		            { fullName: 'October', shortName: 'Oct' },
		            { fullName: 'November', shortName: 'Nov' },
		            { fullName: 'December', shortName: 'Dec' }
		        ];
		        this.days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
		        /**
		         * According to International Standard ISO 8601, Monday is the first day of the week
		         * followed by Tuesday, Wednesday, Thursday, Friday, Saturday,
		         * and with Sunday as the seventh and final day.
		         * However, in Javascript Sunday is 0, Monday is 1.. and so on
		         */
		        this.daysOfWeek = [
		            { fullName: 'Sunday', shortName: 'Su', weekend: true },
		            { fullName: 'Monday', shortName: 'Mo' },
		            { fullName: 'Tuesday', shortName: 'Tu' },
		            { fullName: 'Wednesday', shortName: 'We' },
		            { fullName: 'Thursday', shortName: 'Th' },
		            { fullName: 'Friday', shortName: 'Fr' },
		            { fullName: 'Saturday', shortName: 'Sa', weekend: true }
		        ];
		        /**
		         * if momentjs is available, use momentjs localized months, week, etc.
		         */
		        if (typeof moment !== 'undefined') {
		            this.months = this.months.map(function (el, index) {
		                el.fullName = moment.months()[index];
		                el.shortName = moment.monthsShort()[index];
		                return el;
		            });
		            this.daysOfWeek = this.daysOfWeek.map(function (el, index) {
		                el.fullName = moment.weekdays()[index];
		                el.shortName = moment.weekdaysShort()[index].substr(0, 2);
		                return el;
		            });
		            this.firstDayOfWeek = moment.localeData().firstDayOfWeek();
		        }
		        this.firstDayOfWeek = this.firstDayOfWeek || 0;
		        this.localizedDaysOfWeek = this.daysOfWeek
		            .concat(this.daysOfWeek)
		            .splice(this.firstDayOfWeek, 7);
		    };
		    DateTime.prototype.getMonthData = function (year, month) {
		        year = month > 11 ? year + 1 :
		            month < 0 ? year - 1 : year;
		        month = (month + 12) % 12;
		        var firstDayOfMonth = new Date(year, month, 1);
		        var lastDayOfMonth = new Date(year, month + 1, 0);
		        var lastDayOfPreviousMonth = new Date(year, month, 0);
		        var daysInMonth = lastDayOfMonth.getDate();
		        var daysInLastMonth = lastDayOfPreviousMonth.getDate();
		        var dayOfWeek = firstDayOfMonth.getDay();
		        // Ensure there are always leading days to give context
		        var leadingDays = (dayOfWeek - this.firstDayOfWeek + 7) % 7 || 7;
		        var trailingDays = this.days.slice(0, 6 * 7 - (leadingDays + daysInMonth));
		        if (trailingDays.length > 7) {
		            trailingDays = trailingDays.slice(0, trailingDays.length - 7);
		        }
		        var monthData = {
		            year: year,
		            month: month,
		            days: this.days.slice(0, daysInMonth),
		            leadingDays: this.days.slice(-leadingDays - (31 - daysInLastMonth), daysInLastMonth),
		            trailingDays: trailingDays
		        };
		        return monthData;
		    };
		    ;
		    DateTime.momentFormatDate = function (d, dateFormat) {
		        if (typeof moment === 'undefined') {
		            console.error("momentjs is required with dateFormat.\n        please add <script src=\"moment.min.js\"></script>\"> in your html.");
		        }
		        return moment(d).format(dateFormat);
		    };
		    DateTime.momentParse = function (dateStr) {
		        if (typeof moment === 'undefined') {
		            console.error("momentjs is required with dateFormat.\n        please add <script src=\"moment.min.js\"></script>\"> in your html.");
		        }
		        return moment(dateStr).toDate();
		    };
		    DateTime.formatDate = function (d, dateOnly) {
		        // return d.toLocaleString('en-us', hash); // IE11 does not understand this
		        var pad0 = function (number) {
		            return ("0" + number).slice(-2);
		        };
		        var ret = d.getFullYear() + '-' + pad0(d.getMonth() + 1) + '-' + pad0(d.getDate());
		        if (!dateOnly) {
		            ret += ' ' + pad0(d.getHours()) + ':' + pad0(d.getMinutes());
		        }
		        return ret;
		    };
		    //return date as given from given string
		    // without considering timezone and day light saving time considered
		    DateTime.parse = function (dateStr) {
		        dateStr = DateTime.removeTimezone(dateStr);
		        dateStr = dateStr + DateTime.addDSTOffset(dateStr);
		        return DateTime.getDateFromString(dateStr);
		    };
		    //remove timezone
		    DateTime.removeTimezone = function (dateStr) {
		        // if no time is given, add 00:00:00 at the end
		        var matches = dateStr.match(/[0-9]{2}:/);
		        dateStr += matches ? '' : ' 00:00:00';
		        return dateStr.replace(/([0-9]{2}-[0-9]{2})-([0-9]{4})/, '$2-$1') //mm-dd-yyyy to yyyy-mm-dd
		            .replace(/([\/-][0-9]{2,4})\ ([0-9]{2}\:[0-9]{2}\:)/, '$1T$2') //reformat for FF
		            .replace(/EDT|EST|CDT|CST|MDT|PDT|PST|UT|GMT/g, '') //remove timezone
		            .replace(/\s*\(\)\s*/, '') //remove timezone
		            .replace(/[\-\+][0-9]{2}:?[0-9]{2}$/, '') //remove timezone
		            .replace(/000Z$/, '00'); //remove timezone
		    };
		    DateTime.addDSTOffset = function (dateStr) {
		        var date = DateTime.getDateFromString(dateStr);
		        var jan = new Date(date.getFullYear(), 0, 1);
		        var jul = new Date(date.getFullYear(), 6, 1);
		        var stdTimezoneOffset = Math.max(jan.getTimezoneOffset(), jul.getTimezoneOffset());
		        var isDST = date.getTimezoneOffset() < stdTimezoneOffset;
		        var offset = isDST ? stdTimezoneOffset - 60 : stdTimezoneOffset;
		        var diff = offset >= 0 ? '-' : '+';
		        offset = Math.abs(offset);
		        return diff +
		            ('0' + (offset / 60)).slice(-2) + ':' +
		            ('0' + (offset % 60)).slice(-2);
		    };
		    ;
		    DateTime.getDateFromString = function (dateStr) {
		        var tmp = dateStr.split(/[\+\-:\ T]/); // split by dash, colon or space
		        return new Date(parseInt(tmp[0], 10), parseInt(tmp[1], 10) - 1, parseInt(tmp[2], 10), parseInt(tmp[3] || '0', 10), parseInt(tmp[4] || '0', 10), parseInt(tmp[5] || '0', 10));
		    };
		    DateTime = __decorate([
		        core_1.Injectable(), 
		        __metadata('design:paramtypes', [])
		    ], DateTime);
		    return DateTime;
		}());
		exports.DateTime = DateTime;
	
	
	/***/ },
	/* 5 */
	/***/ function(module, exports, __webpack_require__) {
	
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
		var core_1 = __webpack_require__(1);
		var datetime_1 = __webpack_require__(4);
		//@TODO
		// . display currently selected day
		/**
		 * show a selected date in monthly calendar
		 */
		var DateTimePickerComponent = (function () {
		    function DateTimePickerComponent(elementRef, dateTime, cdRef) {
		        this.dateTime = dateTime;
		        this.cdRef = cdRef;
		        this.changes = new core_1.EventEmitter();
		        this.closing = new core_1.EventEmitter();
		        this.el = elementRef.nativeElement;
		    }
		    DateTimePickerComponent.prototype.ngAfterViewInit = function () {
		        if (!this.dateOnly) {
		            this._hours.nativeElement.addEventListener('keyup', function (e) {
		                e.stopPropagation();
		            });
		            this._hours.nativeElement.addEventListener('mousedown', function (e) {
		                e.stopPropagation();
		            });
		            this._minutes.nativeElement.addEventListener('keyup', function (e) {
		                e.stopPropagation();
		            });
		            this._minutes.nativeElement.addEventListener('mousedown', function (e) {
		                e.stopPropagation();
		            });
		        }
		    };
		    Object.defineProperty(DateTimePickerComponent.prototype, "year", {
		        get: function () {
		            return this.selectedDate.getFullYear();
		        },
		        enumerable: true,
		        configurable: true
		    });
		    Object.defineProperty(DateTimePickerComponent.prototype, "month", {
		        get: function () {
		            return this.selectedDate.getMonth();
		        },
		        enumerable: true,
		        configurable: true
		    });
		    Object.defineProperty(DateTimePickerComponent.prototype, "day", {
		        get: function () {
		            return this.selectedDate.getDate();
		        },
		        enumerable: true,
		        configurable: true
		    });
		    Object.defineProperty(DateTimePickerComponent.prototype, "today", {
		        get: function () {
		            var dt = new Date();
		            dt.setHours(0);
		            dt.setMinutes(0);
		            dt.setSeconds(0);
		            dt.setMilliseconds(0);
		            return dt;
		        },
		        enumerable: true,
		        configurable: true
		    });
		    DateTimePickerComponent.prototype.initDateTime = function (date) {
		        this.selectedDate = date;
		        this.hour = this.selectedDate.getHours();
		        this.minute = this.selectedDate.getMinutes();
		        this.monthData = this.dateTime.getMonthData(this.year, this.month);
		    };
		    DateTimePickerComponent.prototype.toDate = function (year, month, day) {
		        return new Date(year, month, day);
		    };
		    DateTimePickerComponent.prototype.toDateOnly = function (date) {
		        return new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0, 0);
		    };
		    /**
		     * set the selected date and close it when closeOnSelect is true
		     * @param date {Date}
		     */
		    DateTimePickerComponent.prototype.selectDate = function (dayNum) {
		        if (dayNum) {
		            this.selectedDate = new Date(this.monthData.year, this.monthData.month, dayNum);
		        }
		        this.changes.emit({
		            selectedDate: this.selectedDate,
		            hour: this.hour,
		            minute: this.minute
		        });
		        this.closing.emit(true);
		    };
		    ;
		    /**
		     * show prev/next month calendar
		     */
		    DateTimePickerComponent.prototype.updateMonthData = function (num) {
		        this.monthData = this.dateTime.getMonthData(this.monthData.year, this.monthData.month + num);
		    };
		    __decorate([
		        core_1.ViewChild('hours'), 
		        __metadata('design:type', core_1.ElementRef)
		    ], DateTimePickerComponent.prototype, "_hours", void 0);
		    __decorate([
		        core_1.ViewChild('minutes'), 
		        __metadata('design:type', core_1.ElementRef)
		    ], DateTimePickerComponent.prototype, "_minutes", void 0);
		    DateTimePickerComponent = __decorate([
		        core_1.Component({
		            providers: [datetime_1.DateTime],
		            selector: 'datetime-picker',
		            template: "\n<div class=\"datetime-picker\" tabindex=\"0\">\n\n  <!-- Month - Year  -->\n  <div class=\"month\">\n    <button type=\"button\" class=\"prev\" (click)=\"updateMonthData(-1)\">&laquo;</button>\n     <span title=\"{{dateTime.months[monthData.month].fullName}}\">\n           {{dateTime.months[monthData.month].shortName}}\n     </span>\n    {{monthData.year}}\n    <button type=\"button\" class=\"next\" (click)=\"updateMonthData(+1)\">&raquo;</button>\n  </div>\n\n  <div class=\"days\">\n\n    <!-- Su Mo Tu We Th Fr Sa -->\n    <div class=\"day-of-week\"\n         *ngFor=\"let dayOfWeek of dateTime.localizedDaysOfWeek\"\n         [ngClass]=\"{weekend: dayOfWeek.weekend}\"\n         title=\"{{dayOfWeek.fullName}}\">\n      {{dayOfWeek.shortName}}\n    </div>\n\n    <!-- Fill up blank days for this month -->\n    <div *ngIf=\"monthData.leadingDays.length < 7\">\n      <div class=\"day\" *ngFor=\"let dayNum of monthData.leadingDays\"\n           [ngClass]=\"{weekend: [0,6].indexOf(toDate(monthData.year, monthData.month-1, dayNum).getDay()) !== -1}\">\n        {{dayNum}}\n      </div>\n    </div>\n\n    <div class=\"day selectable\"\n         *ngFor=\"let dayNum of monthData.days\"\n         (click)=\"selectDate(dayNum)\"\n         title=\"{{monthData.year}}-{{monthData.month+1}}-{{dayNum}}\"\n         [ngClass]=\"{\n           selected:\n             toDate(monthData.year, monthData.month, dayNum).getTime() === toDateOnly(selectedDate).getTime(),\n           today:\n             toDate(monthData.year, monthData.month, dayNum).getTime() === today.getTime(),\n           weekend:\n             [0,6].indexOf(toDate(monthData.year, monthData.month, dayNum).getDay()) !== -1\n         }\">\n      {{dayNum}}\n    </div>\n\n    <!-- Fill up blank days for this month -->\n    <div *ngIf=\"monthData.trailingDays.length < 7\">\n      <div class=\"day\"\n           *ngFor=\"let dayNum of monthData.trailingDays\"\n           [ngClass]=\"{weekend: [0,6].indexOf(toDate(monthData.year, monthData.month+1, dayNum).getDay()) !== -1}\">\n        {{dayNum}}\n      </div>\n    </div>\n  </div>\n\n  <!-- Time -->\n  <div class=\"days\" id=\"time\" *ngIf=\"!dateOnly\">\n    <label class=\"timeLabel\">Time:</label>\n    <span class=\"timeValue\">\n      {{(\"0\"+hour).slice(-2)}} : {{(\"0\"+minute).slice(-2)}}\n    </span><br/>\n    <label class=\"hourLabel\">Hour:</label>\n    <input #hours class=\"hourInput\"\n           (change)=\"selectDate()\"\n           type=\"range\" min=\"0\" max=\"23\" [(ngModel)]=\"hour\" />\n    <label class=\"minutesLabel\">Min:</label>\n    <input #minutes class=\"minutesInput\"\n           (change)=\"selectDate()\"\n           type=\"range\" min=\"0\" max=\"59\" range=\"10\" [(ngModel)]=\"minute\"/>\n  </div>\n</div>\n\n<!--<hr/>-->\n<!--Date: {{selectedDate}}<br/>-->\n<!--Hour: {{hour}} Minute: {{minute}}<br/>-->\n  ",
		            styles: [
		                "\n @keyframes slideDown {\n  0% {\n    transform:  translateY(-10px);\n  }\n  100% {\n    transform: translateY(0px);\n  }\n}\n\n.datetime-picker {\n    color: #333;\n    outline-width: 0;\n    font: normal 14px sans-serif;\n    border: 1px solid #ddd;\n    display: inline-block;\n    background: #fff;\n    animation: slideDown 0.1s ease-in-out;\n    animation-fill-mode: both;\n}\n.datetime-picker > .month {\n    text-align: center;\n    line-height: 22px;\n    padding: 10px;\n    background: #fcfcfc;\n    text-transform: uppercase;\n    font-weight: bold;\n    border-bottom: 1px solid #ddd;\n    position: relative;\n}\n.datetime-picker > .month > button {\n    color: #555;\n    font: normal 14px sans-serif;\n    outline: none;\n    position: absolute;\n    background: transparent;\n    border: none;\n    cursor: pointer;\n}\n.datetime-picker > .month > button:hover {\n    color: #333;\n}\n.datetime-picker > .month > button.prev {\n    left: 10px;\n}\n.datetime-picker > .month > button.next {\n    right: 10px;\n}\n.datetime-picker > .days {\n    width: 210px; /* 30 x 7 */\n    margin: 10px;\n    text-align: center;\n}\n.datetime-picker > .days .day-of-week,\n.datetime-picker > .days .day {\n    box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    border: 1px solid transparent;\n    width: 30px;\n    line-height: 28px;\n    float: left;\n}\n.datetime-picker > .days .day-of-week {\n    font-weight: bold;\n}\n.datetime-picker > .days .day-of-week.weekend {\n    color: #ccc;\n    background-color: inherit;\n}\n.datetime-picker > .days .day:not(.selectable) {\n    color: #ccc;\n    cursor: default;\n}\n.datetime-picker > .days .weekend {\n    color: #ccc;\n    background-color: #eee;\n}\n.datetime-picker > .days .day.selectable  {\n    cursor: pointer;\n}\n.datetime-picker > .days .day.selected {\n    background: gray;\n    color: #fff;\n}\n.datetime-picker > .days .day:not(.selected).selectable:hover {\n    background: #eee;\n}\n.datetime-picker > .days:after {\n    content: '';\n    display: block;\n    clear: left;\n    height: 0;\n}\n.datetime-picker .hourLabel,\n.datetime-picker .minutesLabel {\n    display: inline-block;\n    width: 40px;\n    text-align: right;\n}\n.datetime-picker input[type=range] {\n    width: 150px;\n}\n  "
		            ],
		            encapsulation: core_1.ViewEncapsulation.None
		        }), 
		        __metadata('design:paramtypes', [core_1.ElementRef, datetime_1.DateTime, core_1.ChangeDetectorRef])
		    ], DateTimePickerComponent);
		    return DateTimePickerComponent;
		}());
		exports.DateTimePickerComponent = DateTimePickerComponent;
	
	
	/***/ },
	/* 6 */
	/***/ function(module, exports, __webpack_require__) {
	
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
		var core_1 = __webpack_require__(1);
		var datetime_picker_component_1 = __webpack_require__(5);
		var datetime_1 = __webpack_require__(4);
		/**
		 * To simplify the implementation, it limits the type if value to string only, not a date
		 * If the given string is not a valid date, it defaults back to today
		 */
		var DateTimePickerDirective = (function () {
		    function DateTimePickerDirective(_resolver, _viewContainerRef) {
		        var _this = this;
		        this._resolver = _resolver;
		        this._viewContainerRef = _viewContainerRef;
		        /**
		         * @deprecated
		         */
		        this.ngModelChange = new core_1.EventEmitter();
		        this.valueChange = new core_1.EventEmitter();
		        this._keyEventListener = function (e) {
		            if (e.keyCode === 27) {
		                _this.hideDatetimePicker();
		            }
		        };
		        this.hideDatetimePicker = function (event) {
		            if (_this._componentRef) {
		                if (event && event.type === 'click' &&
		                    event.target !== _this._el && !_this._elementIn(event.target, _this._datetimePicker)) {
		                    _this._componentRef.destroy();
		                    _this._componentRef = undefined;
		                }
		                else if (!event) {
		                    _this._componentRef.destroy();
		                    _this._componentRef = undefined;
		                }
		            }
		        };
		        this._el = this._viewContainerRef.element.nativeElement;
		    }
		    DateTimePickerDirective.prototype.ngOnInit = function () {
		        //wrap this element with a <div> tag, so that we can position dynamic elememnt correctly
		        var wrapper = document.createElement("div");
		        wrapper.className = 'ng2-datetime-picker';
		        wrapper.style.display = 'inline-block';
		        wrapper.style.position = 'relative';
		        this._el.parentElement.insertBefore(wrapper, this._el.nextSibling);
		        wrapper.appendChild(this._el);
		        this._registerEventListeners();
		    };
		    DateTimePickerDirective.prototype.ngOnChanges = function (changes) {
		        var _this = this;
		        if (changes['value'] !== undefined || changes['ngModel'] !== undefined) {
		            if (changes['ngModel'] !== undefined) {
		                this.value = this.ngModel;
		            }
		            var dateNgModel_1;
		            if (typeof this.value === 'string') {
		                //remove timezone and respect day light saving time
		                dateNgModel_1 = this.dateFormat ?
		                    datetime_1.DateTime.momentParse('' + this.value) :
		                    datetime_1.DateTime.parse('' + this.value);
		            }
		            else if (this.value instanceof Date) {
		                dateNgModel_1 = this.value;
		            }
		            else {
		                dateNgModel_1 = new Date();
		            }
		            var formatted = void 0;
		            if (this.dateFormat) {
		                formatted = datetime_1.DateTime.momentFormatDate(dateNgModel_1, this.dateFormat);
		            }
		            else {
		                formatted = datetime_1.DateTime.formatDate(dateNgModel_1, this.dateOnly);
		            }
		            this._el['value'] = formatted;
		            this._value = dateNgModel_1;
		            // @deprecated
		            if (this.dateFormat) {
		                dateNgModel_1.toString = function () {
		                    return datetime_1.DateTime.momentFormatDate(dateNgModel_1, _this.dateFormat);
		                };
		            }
		            else {
		                dateNgModel_1.toString = function () {
		                    return datetime_1.DateTime.formatDate(dateNgModel_1, _this.dateOnly);
		                };
		            }
		            setTimeout(function () {
		                _this.ngModelChange.emit(dateNgModel_1);
		            });
		            this._initDate();
		        }
		    };
		    DateTimePickerDirective.prototype.ngOnDestroy = function () {
		        // add a click listener to document, so that it can hide when others clicked
		        document.body.removeEventListener('click', this.hideDatetimePicker);
		        this._el.removeEventListener('keyup', this._keyEventListener);
		        if (this._datetimePicker) {
		            this._datetimePicker.removeEventListener('keyup', this._keyEventListener);
		        }
		    };
		    //show datetimePicker below the current element
		    DateTimePickerDirective.prototype.showDatetimePicker = function () {
		        var _this = this;
		        if (this._componentRef) {
		            return;
		        }
		        var factory = this._resolver.resolveComponentFactory(datetime_picker_component_1.DateTimePickerComponent);
		        this._componentRef = this._viewContainerRef.createComponent(factory);
		        this._datetimePicker = this._componentRef.location.nativeElement;
		        this._datetimePicker.addEventListener('keyup', this._keyEventListener);
		        this._initDate();
		        this._styleDatetimePicker();
		        var component = this._componentRef.instance;
		        component.changes.subscribe(function (changes) {
		            var newNgModel = new Date(changes.selectedDate);
		            newNgModel.setHours(parseInt(changes.hour, 10));
		            newNgModel.setMinutes(parseInt(changes.minute, 10));
		            var formatted;
		            if (_this.dateFormat) {
		                formatted = datetime_1.DateTime.momentFormatDate(newNgModel, _this.dateFormat);
		            }
		            else {
		                formatted = datetime_1.DateTime.formatDate(newNgModel, _this.dateOnly);
		            }
		            _this._el['value'] = formatted;
		            _this._value = newNgModel;
		            _this.valueChange.emit(newNgModel);
		            // @deprecated
		            if (_this.dateFormat) {
		                newNgModel.toString = function () {
		                    return datetime_1.DateTime.momentFormatDate(newNgModel, _this.dateFormat);
		                };
		            }
		            else {
		                newNgModel.toString = function () {
		                    return datetime_1.DateTime.formatDate(newNgModel, _this.dateOnly);
		                };
		            }
		            _this.ngModelChange.emit(newNgModel);
		        });
		        component.closing.subscribe(function () {
		            if (_this.closeOnSelect !== "false") {
		                _this.hideDatetimePicker();
		            }
		        });
		    };
		    DateTimePickerDirective.prototype._elementIn = function (el, containerEl) {
		        while (el = el.parentNode) {
		            if (el === containerEl)
		                return true;
		        }
		        return false;
		    };
		    DateTimePickerDirective.prototype._initDate = function () {
		        if (this._componentRef) {
		            var component = this._componentRef.instance;
		            component.initDateTime(this._value);
		            component.dateOnly = this.dateOnly;
		        }
		    };
		    DateTimePickerDirective.prototype._registerEventListeners = function () {
		        // add a click listener to document, so that it can hide when others clicked
		        document.body.addEventListener('click', this.hideDatetimePicker);
		        this._el.addEventListener('keyup', this._keyEventListener);
		    };
		    DateTimePickerDirective.prototype._styleDatetimePicker = function () {
		        var _this = this;
		        // setting width/height auto complete
		        var thisElBCR = this._el.getBoundingClientRect();
		        this._datetimePicker.style.width = thisElBCR.width + 'px';
		        this._datetimePicker.style.position = 'absolute';
		        this._datetimePicker.style.zIndex = '1000';
		        this._datetimePicker.style.left = '0';
		        this._datetimePicker.style.transition = 'height 0.3s ease-in';
		        this._datetimePicker.style.visibility = 'hidden';
		        setTimeout(function () {
		            var thisElBcr = _this._el.getBoundingClientRect();
		            var datetimePickerElBcr = _this._datetimePicker.getBoundingClientRect();
		            if (thisElBcr.bottom + datetimePickerElBcr.height > window.innerHeight) {
		                // if not enough space to show on below, show above
		                _this._datetimePicker.style.bottom = '0';
		            }
		            else {
		                // otherwise, show below
		                _this._datetimePicker.style.top = thisElBcr.height + 'px';
		            }
		            _this._datetimePicker.style.visibility = 'visible';
		        });
		    };
		    ;
		    __decorate([
		        core_1.Input('date-format'), 
		        __metadata('design:type', String)
		    ], DateTimePickerDirective.prototype, "dateFormat", void 0);
		    __decorate([
		        core_1.Input('date-only'), 
		        __metadata('design:type', Boolean)
		    ], DateTimePickerDirective.prototype, "dateOnly", void 0);
		    __decorate([
		        core_1.Input('close-on-select'), 
		        __metadata('design:type', String)
		    ], DateTimePickerDirective.prototype, "closeOnSelect", void 0);
		    __decorate([
		        core_1.Input(), 
		        __metadata('design:type', Date)
		    ], DateTimePickerDirective.prototype, "ngModel", void 0);
		    __decorate([
		        core_1.Output(), 
		        __metadata('design:type', core_1.EventEmitter)
		    ], DateTimePickerDirective.prototype, "ngModelChange", void 0);
		    __decorate([
		        core_1.Input('value'), 
		        __metadata('design:type', Object)
		    ], DateTimePickerDirective.prototype, "value", void 0);
		    __decorate([
		        core_1.Output('valueChange'), 
		        __metadata('design:type', core_1.EventEmitter)
		    ], DateTimePickerDirective.prototype, "valueChange", void 0);
		    DateTimePickerDirective = __decorate([
		        core_1.Directive({
		            selector: '[datetime-picker], [ng2-datetime-picker]',
		            providers: [datetime_1.DateTime],
		            host: {
		                '(click)': 'showDatetimePicker()'
		            }
		        }), 
		        __metadata('design:paramtypes', [core_1.ComponentFactoryResolver, core_1.ViewContainerRef])
		    ], DateTimePickerDirective);
		    return DateTimePickerDirective;
		}());
		exports.DateTimePickerDirective = DateTimePickerDirective;
	
	
	/***/ }
	/******/ ])
	});
	;
	//# sourceMappingURL=ng2-datetime-picker.umd.js.map

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory(__webpack_require__(1), __webpack_require__(2), __webpack_require__(3));
		else if(typeof define === 'function' && define.amd)
			define(["@angular/core", "@angular/forms", "@angular/platform-browser"], factory);
		else if(typeof exports === 'object')
			exports["ng2-collapsable"] = factory(require("@angular/core"), require("@angular/forms"), require("@angular/platform-browser"));
		else
			root["ng2-collapsable"] = factory(root["@angular/core"], root["@angular/forms"], root["@angular/platform-browser"]);
	})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__) {
	return /******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};
	/******/
	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {
	/******/
	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;
	/******/
	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			exports: {},
	/******/ 			id: moduleId,
	/******/ 			loaded: false
	/******/ 		};
	/******/
	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
	/******/
	/******/ 		// Flag the module as loaded
	/******/ 		module.loaded = true;
	/******/
	/******/ 		// Return the exports of the module
	/******/ 		return module.exports;
	/******/ 	}
	/******/
	/******/
	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules;
	/******/
	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules;
	/******/
	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";
	/******/
	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(0);
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */
	/***/ function(module, exports, __webpack_require__) {
	
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
		var core_1 = __webpack_require__(1);
		var forms_1 = __webpack_require__(2);
		var platform_browser_1 = __webpack_require__(3);
		var ng2_collapsable_component_1 = __webpack_require__(4);
		exports.Ng2CollapsableComponent = ng2_collapsable_component_1.Ng2CollapsableComponent;
		var Ng2CollapsableModule = (function () {
		    function Ng2CollapsableModule() {
		    }
		    Ng2CollapsableModule = __decorate([
		        core_1.NgModule({
		            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule],
		            declarations: [ng2_collapsable_component_1.Ng2CollapsableComponent],
		            exports: [ng2_collapsable_component_1.Ng2CollapsableComponent]
		        }), 
		        __metadata('design:paramtypes', [])
		    ], Ng2CollapsableModule);
		    return Ng2CollapsableModule;
		}());
		exports.Ng2CollapsableModule = Ng2CollapsableModule;
	
	
	/***/ },
	/* 1 */
	/***/ function(module, exports) {
	
		module.exports = __WEBPACK_EXTERNAL_MODULE_1__;
	
	/***/ },
	/* 2 */
	/***/ function(module, exports) {
	
		module.exports = __WEBPACK_EXTERNAL_MODULE_2__;
	
	/***/ },
	/* 3 */
	/***/ function(module, exports) {
	
		module.exports = __WEBPACK_EXTERNAL_MODULE_3__;
	
	/***/ },
	/* 4 */
	/***/ function(module, exports, __webpack_require__) {
	
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
		var core_1 = __webpack_require__(1);
		var Ng2CollapsableComponent = (function () {
		    function Ng2CollapsableComponent(viewContainer) {
		        this.viewContainer = viewContainer;
		        this.selectedIndexClass = 'selected';
		        this.selectedContentsClass = 'selected';
		        this.el = this.viewContainer.element.nativeElement;
		    }
		    Ng2CollapsableComponent.prototype.ngAfterViewInit = function () {
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
		    Ng2CollapsableComponent.prototype.selectTab = function (id) {
		        var _this = this;
		        id = id || this.indexEls[0].getAttribute('index');
		        this.indexEls.forEach(function (el) {
		            _this.removeClass(el, _this.selectedIndexClass);
		            if (el.getAttribute('index') == id) {
		                _this.addClass(el, _this.selectedIndexClass);
		            }
		        });
		        this.contentsEls.forEach(function (el) {
		            _this.removeClass(el, _this.selectedContentsClass);
		            if (el.getAttribute('contents') == id) {
		                _this.addClass(el, _this.selectedContentsClass);
		            }
		        });
		    };
		    Ng2CollapsableComponent.prototype.addClass = function (el, str) {
		        var classNames = (el.className || '').split(' ');
		        classNames.push(str);
		        el.className = classNames.join(' ');
		    };
		    Ng2CollapsableComponent.prototype.removeClass = function (el, str) {
		        el.className = (el.className || '').replace(new RegExp('[ ]*' + str), '');
		    };
		    __decorate([
		        core_1.Input('selected'), 
		        __metadata('design:type', String)
		    ], Ng2CollapsableComponent.prototype, "selectedIndex", void 0);
		    __decorate([
		        core_1.Input('selected-index-class'), 
		        __metadata('design:type', String)
		    ], Ng2CollapsableComponent.prototype, "selectedIndexClass", void 0);
		    __decorate([
		        core_1.Input('selected-contents-class'), 
		        __metadata('design:type', String)
		    ], Ng2CollapsableComponent.prototype, "selectedContentsClass", void 0);
		    Ng2CollapsableComponent = __decorate([
		        core_1.Component({
		            selector: 'ng2-collapsable, [ng2-collapsable]',
		            encapsulation: core_1.ViewEncapsulation.None,
		            template: "<ng-content></ng-content>",
		            styles: ["\n    [ng2-collapsable] [index] {\n      display: block;\n      cursor: pointer;\n      position: relative;\n      margin: 2px 0 0 0;\n      padding: .5em .5em .5em .7em;\n      border: 1px solid #cccccc;\n      background: #ededed;\n      font-weight: normal;\n      border-radius: 2px; \n      color: #2b2b2b;\n    }\n    [ng2-collapsable] [index].selected {\n      border: 1px solid #003eff;\n      background: #007fff;\n      color: #ffffff;\n      border-radius: 2px 2px 0 0;\n    }\n    [ng2-collapsable] [contents] {\n      border-top: 0;\n      background: #ffffff;\n      color: #333333;\n      padding: 0px;\n      border-radius: 0 0 2px 2px;\n      height: 0;\n      border: 0;\n      font-size: 0;\n    }\n    [ng2-collapsable] [contents].selected {\n      height: 50px;\n      padding: 10px;\n      border: 1px solid #dddddd;\n      transition: font-size 0.3s ease-in, height 0.3s ease-in;\n      font-size: inherit;\n    }\n  "],
		        }), 
		        __metadata('design:paramtypes', [core_1.ViewContainerRef])
		    ], Ng2CollapsableComponent);
		    return Ng2CollapsableComponent;
		}());
		exports.Ng2CollapsableComponent = Ng2CollapsableComponent;
	
	
	/***/ }
	/******/ ])
	});
	;
	//# sourceMappingURL=ng2-collapsable.umd.js.map

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory(__webpack_require__(1), __webpack_require__(2), __webpack_require__(3));
		else if(typeof define === 'function' && define.amd)
			define(["@angular/core", "@angular/forms", "@angular/platform-browser"], factory);
		else if(typeof exports === 'object')
			exports["ng2-infinite-list"] = factory(require("@angular/core"), require("@angular/forms"), require("@angular/platform-browser"));
		else
			root["ng2-infinite-list"] = factory(root["@angular/core"], root["@angular/forms"], root["@angular/platform-browser"]);
	})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__) {
	return /******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};
	/******/
	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {
	/******/
	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;
	/******/
	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			exports: {},
	/******/ 			id: moduleId,
	/******/ 			loaded: false
	/******/ 		};
	/******/
	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
	/******/
	/******/ 		// Flag the module as loaded
	/******/ 		module.loaded = true;
	/******/
	/******/ 		// Return the exports of the module
	/******/ 		return module.exports;
	/******/ 	}
	/******/
	/******/
	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules;
	/******/
	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules;
	/******/
	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";
	/******/
	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(0);
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */
	/***/ function(module, exports, __webpack_require__) {
	
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
		var core_1 = __webpack_require__(1);
		var forms_1 = __webpack_require__(2);
		var platform_browser_1 = __webpack_require__(3);
		var ng2_infinite_list_directive_1 = __webpack_require__(4);
		exports.Ng2InfiniteListDirective = ng2_infinite_list_directive_1.Ng2InfiniteListDirective;
		var Ng2InfiniteListModule = (function () {
		    function Ng2InfiniteListModule() {
		    }
		    Ng2InfiniteListModule = __decorate([
		        core_1.NgModule({
		            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule],
		            declarations: [ng2_infinite_list_directive_1.Ng2InfiniteListDirective],
		            exports: [ng2_infinite_list_directive_1.Ng2InfiniteListDirective]
		        }), 
		        __metadata('design:paramtypes', [])
		    ], Ng2InfiniteListModule);
		    return Ng2InfiniteListModule;
		}());
		exports.Ng2InfiniteListModule = Ng2InfiniteListModule;
	
	
	/***/ },
	/* 1 */
	/***/ function(module, exports) {
	
		module.exports = __WEBPACK_EXTERNAL_MODULE_1__;
	
	/***/ },
	/* 2 */
	/***/ function(module, exports) {
	
		module.exports = __WEBPACK_EXTERNAL_MODULE_2__;
	
	/***/ },
	/* 3 */
	/***/ function(module, exports) {
	
		module.exports = __WEBPACK_EXTERNAL_MODULE_3__;
	
	/***/ },
	/* 4 */
	/***/ function(module, exports, __webpack_require__) {
	
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
		var core_1 = __webpack_require__(1);
		var ng2_utils_1 = __webpack_require__(5);
		var Ng2InfiniteListDirective = (function () {
		    function Ng2InfiniteListDirective(el) {
		        var _this = this;
		        this.endVisible = new core_1.EventEmitter();
		        this.elementVisible = ng2_utils_1.elementVisible;
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
	
	
	/***/ },
	/* 5 */
	/***/ function(module, exports, __webpack_require__) {
	
		(function webpackUniversalModuleDefinition(root, factory) {
			if(true)
				module.exports = factory(__webpack_require__(1));
			else if(typeof define === 'function' && define.amd)
				define(["@angular/core"], factory);
			else if(typeof exports === 'object')
				exports["ng2-utils"] = factory(require("@angular/core"));
			else
				root["ng2-utils"] = factory(root["@angular/core"]);
		})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
		return /******/ (function(modules) { // webpackBootstrap
		/******/ 	// The module cache
		/******/ 	var installedModules = {};
		/******/
		/******/ 	// The require function
		/******/ 	function __webpack_require__(moduleId) {
		/******/
		/******/ 		// Check if module is in cache
		/******/ 		if(installedModules[moduleId])
		/******/ 			return installedModules[moduleId].exports;
		/******/
		/******/ 		// Create a new module (and put it into the cache)
		/******/ 		var module = installedModules[moduleId] = {
		/******/ 			exports: {},
		/******/ 			id: moduleId,
		/******/ 			loaded: false
		/******/ 		};
		/******/
		/******/ 		// Execute the module function
		/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
		/******/
		/******/ 		// Flag the module as loaded
		/******/ 		module.loaded = true;
		/******/
		/******/ 		// Return the exports of the module
		/******/ 		return module.exports;
		/******/ 	}
		/******/
		/******/
		/******/ 	// expose the modules object (__webpack_modules__)
		/******/ 	__webpack_require__.m = modules;
		/******/
		/******/ 	// expose the module cache
		/******/ 	__webpack_require__.c = installedModules;
		/******/
		/******/ 	// __webpack_public_path__
		/******/ 	__webpack_require__.p = "";
		/******/
		/******/ 	// Load entry module and return exports
		/******/ 	return __webpack_require__(0);
		/******/ })
		/************************************************************************/
		/******/ ([
		/* 0 */
		/***/ function(module, exports, __webpack_require__) {
		
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
			var core_1 = __webpack_require__(1);
			var scroll_to_1 = __webpack_require__(2);
			exports.scrollTo = scroll_to_1.scrollTo;
			var element_visible_1 = __webpack_require__(3);
			exports.elementVisible = element_visible_1.elementVisible;
			var computed_style_1 = __webpack_require__(4);
			exports.computedStyle = computed_style_1.computedStyle;
			var outer_width_1 = __webpack_require__(5);
			exports.outerWidth = outer_width_1.outerWidth;
			var outer_height_1 = __webpack_require__(6);
			exports.outerHeight = outer_height_1.outerHeight;
			var Ng2UtilsModule = (function () {
			    function Ng2UtilsModule() {
			    }
			    Ng2UtilsModule = __decorate([
			        core_1.NgModule({
			            declarations: [
			                scroll_to_1.scrollTo,
			                element_visible_1.elementVisible,
			                computed_style_1.computedStyle,
			                outer_width_1.outerWidth,
			                outer_height_1.outerHeight
			            ],
			            exports: [
			                scroll_to_1.scrollTo,
			                element_visible_1.elementVisible,
			                computed_style_1.computedStyle,
			                outer_width_1.outerWidth,
			                outer_height_1.outerHeight
			            ]
			        }), 
			        __metadata('design:paramtypes', [])
			    ], Ng2UtilsModule);
			    return Ng2UtilsModule;
			}());
			exports.Ng2UtilsModule = Ng2UtilsModule;
		
		
		/***/ },
		/* 1 */
		/***/ function(module, exports) {
		
			module.exports = __WEBPACK_EXTERNAL_MODULE_1__;
		
		/***/ },
		/* 2 */
		/***/ function(module, exports) {
		
			"use strict";
			/**
			 * scroll to the selector within the parent selector by scrolling 10 times within 500ms
			 * @param selector
			 * @param parentSelector
			 */
			function scrollTo(selector, parentSelector) {
			    console.log('selector', selector, 'parentSelector', parentSelector);
			    var parentEl, targetEl;
			    targetEl = document.querySelector(selector);
			    if (!targetEl) {
			        throw "Invalid selector " + selector;
			    }
			    parentEl = document.querySelector(parentSelector);
			    if (!parentEl) {
			        throw "Invalid parent selector " + parentSelector;
			    }
			    var parentElStyle = window.getComputedStyle(parentEl);
			    parentEl = parentElStyle['overflow'] === 'auto' ? parentEl : document.body;
			    var currentScrollTop = parentEl.scrollTop;
			    var targetOffsetTop = targetEl.offsetTop;
			    if (parentEl === document.body) {
			        var bodyRect = document.body.getBoundingClientRect();
			        var targetRect = targetEl.getBoundingClientRect();
			        targetOffsetTop = targetRect.top - bodyRect.top;
			    }
			    var step = Math.ceil((targetOffsetTop - currentScrollTop) / 10);
			    (function loop(i) {
			        setTimeout(function main() {
			            parentEl.scrollTop += step;
			            i > 1 && loop(i - 1);
			        }, 50);
			    }(10));
			}
			exports.scrollTo = scrollTo;
		
		
		/***/ },
		/* 3 */
		/***/ function(module, exports) {
		
			"use strict";
			/**
			 * Returns an element is visible within outer element
			 * @param innerEl
			 * @param outerEl
			 * @param adjustment
			 * @returns {{top: boolean, bottom: boolean, left: boolean, right: boolean}}
			 */
			function elementVisible(innerEl, outerEl, adjustment) {
			    var innerRect = innerEl.getBoundingClientRect();
			    var bottomAdjustment = (adjustment && adjustment.bottom || 0);
			    if (outerEl === window) {
			        return {
			            top: innerRect.bottom - bottomAdjustment > window.innerHeight
			                && innerRect.top < window.innerHeight,
			            bottom: innerRect.bottom - bottomAdjustment > 0
			                && innerRect.bottom < window.innerHeight,
			            left: innerRect.right > window.innerWidth
			                && innerRect.left < window.innerWidth,
			            right: innerRect.right > 0
			                && innerRect.right < window.innerWidth
			        };
			    }
			    else {
			        var outerRect = outerEl.getBoundingClientRect();
			        var defaultView = (innerEl.ownerDocument || document).defaultView;
			        var computedStyle = defaultView.getComputedStyle(outerEl, null);
			        var outerRectBorderTopWidth = parseInt(computedStyle.getPropertyValue('border-top-width'), 10);
			        var outerRectBorderLeftWidth = parseInt(computedStyle.getPropertyValue('border-left-width'), 10);
			        /* top is visible or bottom is visible */
			        var topVisible = (innerRect.top >= outerRect.top
			            && innerRect.top < outerRect.bottom);
			        var bottomVisible = (innerRect.bottom > (outerRect.top + outerRectBorderTopWidth)
			            && innerRect.bottom < outerRect.bottom);
			        var leftVisible = (innerRect.left >= outerRect.left
			            && innerRect.left < outerRect.right);
			        var rightVisible = (innerRect.right > (outerRect.left + outerRectBorderLeftWidth)
			            && innerRect.right < outerRect.right);
			        return {
			            top: topVisible,
			            bottom: bottomVisible,
			            left: leftVisible,
			            right: rightVisible
			        };
			    }
			}
			exports.elementVisible = elementVisible;
		
		
		/***/ },
		/* 4 */
		/***/ function(module, exports) {
		
			"use strict";
			/**
			 * returns coumputed style of given element
			 * @param el
			 * @param styleProp
			 * @returns {any}
			 */
			function computedStyle(el, styleProp) {
			    var value, defaultView = (el.ownerDocument || document).defaultView;
			    // W3C standard way:
			    if (defaultView && defaultView.getComputedStyle) {
			        // sanitize property name to css notation
			        // (hypen separated words eg. font-Size)
			        styleProp = styleProp.replace(/([A-Z])/g, "-$1").toLowerCase();
			        return defaultView.getComputedStyle(el, null).getPropertyValue(styleProp);
			    }
			    else if (el['currentStyle']) {
			        // sanitize property name to camelCase
			        styleProp = styleProp.replace(/\-(\w)/g, function (str, letter) {
			            return letter.toUpperCase();
			        });
			        value = el['currentStyle'][styleProp];
			        // convert other units to pixels on IE
			        if (/^\d+(em|pt|%|ex)?$/i.test(value)) {
			            return (function (value) {
			                var oldLeft = el.style.left, oldRsLeft = el['runtimeStyle'].left;
			                el['runtimeStyle'].left = el['currentStyle'].left;
			                el.style.left = value || 0;
			                value = el.style['pixelLeft'] + "px";
			                el.style.left = oldLeft;
			                el['runtimeStyle'].left = oldRsLeft;
			                return value;
			            })(value);
			        }
			        return value;
			    }
			}
			exports.computedStyle = computedStyle;
		
		
		/***/ },
		/* 5 */
		/***/ function(module, exports) {
		
			"use strict";
			function outerWidth(el) {
			    var style = getComputedStyle(el);
			    return el.offsetWidth +
			        parseInt(style.getPropertyValue('margin-left')) +
			        parseInt(style.getPropertyValue('margin-right'));
			}
			exports.outerWidth = outerWidth;
		
		
		/***/ },
		/* 6 */
		/***/ function(module, exports) {
		
			"use strict";
			function outerHeight(el) {
			    var style = getComputedStyle(el);
			    return el.offsetHeight +
			        parseInt(style.getPropertyValue('margin-top')) +
			        parseInt(style.getPropertyValue('margin-bottom'));
			}
			exports.outerHeight = outerHeight;
		
		
		/***/ }
		/******/ ])
		});
		;
		//# sourceMappingURL=ng2-utils.umd.js.map
	
	/***/ }
	/******/ ])
	});
	;
	//# sourceMappingURL=ng2-infinite-list.umd.js.map

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory(__webpack_require__(1), __webpack_require__(6), __webpack_require__(8));
		else if(typeof define === 'function' && define.amd)
			define(["@angular/core", "@angular/common", "rxjs/Rx"], factory);
		else if(typeof exports === 'object')
			exports["ng2-map"] = factory(require("@angular/core"), require("@angular/common"), require("rxjs/Rx"));
		else
			root["ng2-map"] = factory(root["@angular/core"], root["@angular/common"], root["rxjs/Rx"]);
	})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_6__) {
	return /******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};
	/******/
	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {
	/******/
	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;
	/******/
	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			exports: {},
	/******/ 			id: moduleId,
	/******/ 			loaded: false
	/******/ 		};
	/******/
	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
	/******/
	/******/ 		// Flag the module as loaded
	/******/ 		module.loaded = true;
	/******/
	/******/ 		// Return the exports of the module
	/******/ 		return module.exports;
	/******/ 	}
	/******/
	/******/
	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules;
	/******/
	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules;
	/******/
	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";
	/******/
	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(0);
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */
	/***/ function(module, exports, __webpack_require__) {
	
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
		var core_1 = __webpack_require__(1);
		var common_1 = __webpack_require__(2);
		var option_builder_1 = __webpack_require__(3);
		exports.OptionBuilder = option_builder_1.OptionBuilder;
		var geo_coder_1 = __webpack_require__(5);
		exports.GeoCoder = geo_coder_1.GeoCoder;
		var navigator_geolocation_1 = __webpack_require__(7);
		exports.NavigatorGeolocation = navigator_geolocation_1.NavigatorGeolocation;
		var ng2_map_1 = __webpack_require__(8);
		exports.Ng2Map = ng2_map_1.Ng2Map;
		var ng2_map_component_1 = __webpack_require__(9);
		exports.Ng2MapComponent = ng2_map_component_1.Ng2MapComponent;
		var marker_1 = __webpack_require__(10);
		exports.Marker = marker_1.Marker;
		var info_window_1 = __webpack_require__(11);
		exports.InfoWindow = info_window_1.InfoWindow;
		var Ng2MapModule = (function () {
		    function Ng2MapModule() {
		    }
		    Ng2MapModule = __decorate([
		        core_1.NgModule({
		            imports: [common_1.CommonModule],
		            declarations: [ng2_map_component_1.Ng2MapComponent, marker_1.Marker, info_window_1.InfoWindow],
		            providers: [geo_coder_1.GeoCoder, navigator_geolocation_1.NavigatorGeolocation, ng2_map_1.Ng2Map, option_builder_1.OptionBuilder],
		            exports: [ng2_map_component_1.Ng2MapComponent, marker_1.Marker, info_window_1.InfoWindow]
		        }), 
		        __metadata('design:paramtypes', [])
		    ], Ng2MapModule);
		    return Ng2MapModule;
		}());
		exports.Ng2MapModule = Ng2MapModule;
	
	
	/***/ },
	/* 1 */
	/***/ function(module, exports) {
	
		module.exports = __WEBPACK_EXTERNAL_MODULE_1__;
	
	/***/ },
	/* 2 */
	/***/ function(module, exports) {
	
		module.exports = __WEBPACK_EXTERNAL_MODULE_2__;
	
	/***/ },
	/* 3 */
	/***/ function(module, exports, __webpack_require__) {
	
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
		var core_1 = __webpack_require__(1);
		var util_1 = __webpack_require__(4);
		var geo_coder_1 = __webpack_require__(5);
		/**
		 * change any object to google object options
		 * e.g. [1,2] -> new google.maps.LatLng(1,2);
		 */
		var OptionBuilder = (function () {
		    function OptionBuilder(geoCoder) {
		        this.geoCoder = geoCoder;
		    }
		    OptionBuilder.prototype.googlizeAllInputs = function (definedInputs, userInputs) {
		        var _this = this;
		        var options = {};
		        definedInputs.forEach(function (input) {
		            if (userInputs[input] !== undefined) {
		                options[input] = _this.googlize(userInputs[input], { key: input });
		            }
		        });
		        return options;
		    };
		    OptionBuilder.prototype.googlizeMultiple = function (inputs, options) {
		        options = options || {};
		        for (var key in inputs) {
		            var val = inputs[key];
		            // (non-strings are fully converted)
		            if (typeof val !== 'string') {
		                options[key] = val;
		            } // sometimes '0' needed to stay as it is
		            else if (!(options['doNotConverStringToNumber'] && val.match(/^[0-9]+$/))) {
		                options[key] = this.googlize(val, { key: key });
		            }
		        } // for(var key in attrs)
		        return options;
		    };
		    OptionBuilder.prototype.googlize = function (input, options) {
		        options = options || {};
		        var output;
		        if (input === 'false' || input === false) {
		            output = false;
		        }
		        else if (input === '0' || input === 0) {
		            output = 0;
		        }
		        else {
		            output =
		                // -> googlize -> getJsonParsed -> googlizeMultiple -> googlize until all elements are parsed
		                this.getJSONParsed(input, options)
		                    || this.getAnyMapObject(input)
		                    || this.getAnyMapConstant(input, options)
		                    || this.getDateObject(input);
		        }
		        if (output instanceof Array) {
		            if (options['key'] === "bounds") {
		                output = new google.maps.LatLngBounds(output[0], output[1]);
		            }
		            else if (options['key'] === "icons") {
		                output = this.getMapIcons(output);
		            }
		        }
		        if (options['key'] && output instanceof Object) {
		            if (options['key'] === 'icon') {
		                output = this.getMarkerIcon(output);
		            }
		            else if (options['key'].match(/ControlOptions$/)) {
		                output = this.getMapControlOption(output);
		            }
		        }
		        return output;
		    };
		    OptionBuilder.prototype.getLatLng = function (input) {
		        var output;
		        if (input[0].constructor == Array) {
		            output = input.map(function (el) { return new google.maps.LatLng(el[0], el[1]); });
		        }
		        else if (!isNaN(parseFloat(input[0])) && isFinite(input[0])) {
		            output = new google.maps.LatLng(input[0], input[1]);
		        }
		        return output;
		    };
		    OptionBuilder.prototype.getJSONParsed = function (input, options) {
		        var output;
		        try {
		            output = util_1.getJSON(input);
		            if (output instanceof Array) {
		                // [{a:1}] : not lat/lng ones
		                if (output[0].constructor !== Object) {
		                    output = this.getLatLng(output);
		                }
		            }
		            else if (output === Object(output)) {
		                // check for nested hashes and convert to Google API options
		                var newOptions = options;
		                newOptions['doNotConverStringToNumber'] = true;
		                output = this.googlizeMultiple(output, newOptions);
		            }
		        }
		        catch (e) {
		        }
		        return output;
		    };
		    OptionBuilder.prototype.getAnyMapObject = function (input) {
		        var output;
		        if (input.match(/^[A-Z][a-zA-Z0-9]+\(.*\)$/)) {
		            try {
		                var exp = "new google.maps." + input;
		                output = eval(exp);
		            }
		            catch (e) { }
		        }
		        return output;
		    };
		    OptionBuilder.prototype.getAnyMapConstant = function (input, options) {
		        var output;
		        if (input.match(/^([A-Z][a-zA-Z0-9]+)\.([A-Z]+)$/)) {
		            try {
		                var matches = input.match(/^([A-Z][a-zA-Z0-9]+)\.([A-Z]+)$/);
		                output = google.maps[matches[1]][matches[2]];
		            }
		            catch (e) { }
		        }
		        else if (input.match(/^[A-Z]+$/)) {
		            try {
		                var capitalizedKey = options['key'].charAt(0).toUpperCase() +
		                    options['key'].slice(1);
		                output = google.maps[capitalizedKey][input];
		            }
		            catch (e) { }
		        }
		        return output;
		    };
		    /**
		     * streetviewControl, panControl, etc, not a general control
		     */
		    OptionBuilder.prototype.getMapControlOption = function (controlOptions) {
		        var newControlOptions = controlOptions;
		        for (var key in newControlOptions) {
		            if (newControlOptions[key]) {
		                var value = newControlOptions[key];
		                if (typeof value === 'string') {
		                    value = value.toUpperCase();
		                }
		                else if (key === "mapTypeIds") {
		                    value = value.map(function (str) {
		                        if (str.match(/^[A-Z]+$/)) {
		                            return google.maps.MapTypeId[str.toUpperCase()];
		                        }
		                        else {
		                            return str;
		                        }
		                    });
		                }
		                if (key === "style") {
		                    var objName = key.replace(/Options$/, '') + "Style";
		                    newControlOptions[key] = google.maps[objName][value];
		                }
		                else if (key === "position") {
		                    newControlOptions[key] = google.maps.ControlPosition[value];
		                }
		                else {
		                    newControlOptions[key] = value;
		                }
		            }
		        }
		        return newControlOptions;
		    };
		    OptionBuilder.prototype.getDateObject = function (input) {
		        var output;
		        if (input.match(/^(\d{4}\-\d\d\-\d\d([tT][\d:\.]*)?)([zZ]|([+\-])(\d\d):?(\d\d))?$/)) {
		            try {
		                output = new Date(input);
		            }
		            catch (e) { }
		        }
		        return output;
		    };
		    OptionBuilder.prototype.getMapIcons = function (input) {
		        return input.map(function (el) {
		            if (el.icon.path.match(/^[A-Z_]+$/)) {
		                el.icon.path = google.maps.SymbolPath[el.icon.path];
		            }
		            return el;
		        });
		    };
		    OptionBuilder.prototype.getMarkerIcon = function (input) {
		        var output = input;
		        if (("" + output.path).match(/^[A-Z_]+$/)) {
		            output.path = google.maps.SymbolPath[output.path];
		        }
		        for (var key in output) {
		            var arr = output[key];
		            if (key == "anchor" || key == "origin" || key == "labelOrigin") {
		                output[key] = new google.maps.Point(arr[0], arr[1]);
		            }
		            else if (key == "size" || key == "scaledSize") {
		                output[key] = new google.maps.Size(arr[0], arr[1]);
		            }
		        }
		        return output;
		    };
		    OptionBuilder = __decorate([
		        core_1.Injectable(), 
		        __metadata('design:paramtypes', [geo_coder_1.GeoCoder])
		    ], OptionBuilder);
		    return OptionBuilder;
		}());
		exports.OptionBuilder = OptionBuilder;
	
	
	/***/ },
	/* 4 */
	/***/ function(module, exports) {
	
		"use strict";
		/**
		 * return json string from json-like string
		 */
		var jsonize = function (str) {
		    try {
		        JSON.parse(str);
		        return str;
		    }
		    catch (e) {
		        return str
		            .replace(/([\$\w]+)\s*:/g, // wrap keys without double quote
		        function (_, $1) {
		            return '"' + $1 + '":';
		        })
		            .replace(/'([^']+)'/g, // replacing single quote to double quote
		        function (_, $1) {
		            return '"' + $1 + '"';
		        });
		    }
		};
		exports.jsonize = jsonize;
		/**
		 * Returns string to an object by using JSON.parse()
		 */
		var getJSON = function (input) {
		    if (typeof input === 'string') {
		        var re = /^[\+\-]?[0-9\.]+,[ ]*\ ?[\+\-]?[0-9\.]+$/; //lat,lng
		        if (input.match(re)) {
		            input = "[" + input + "]";
		        }
		        return JSON.parse(jsonize(input));
		    }
		    else {
		        return input;
		    }
		};
		exports.getJSON = getJSON;
		/* tslint:enable */
	
	
	/***/ },
	/* 5 */
	/***/ function(module, exports, __webpack_require__) {
	
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
		var core_1 = __webpack_require__(1);
		var Rx_1 = __webpack_require__(6);
		/**
		 *   Provides [defered/promise API](https://docs.angularjs.org/api/ng/service/$q)
		 *   service for Google Geocoder service
		 */
		var GeoCoder = (function () {
		    function GeoCoder() {
		    }
		    GeoCoder.prototype.geocode = function (options) {
		        var geocode$ = new Rx_1.Subject();
		        var geocoder = new google.maps.Geocoder();
		        geocoder.geocode(options, function (results, status) {
		            if (status == google.maps.GeocoderStatus.OK) {
		                geocode$.next(results);
		            }
		            else {
		                geocode$.error(results);
		            }
		        });
		        return geocode$;
		    };
		    ;
		    GeoCoder = __decorate([
		        core_1.Injectable(), 
		        __metadata('design:paramtypes', [])
		    ], GeoCoder);
		    return GeoCoder;
		}());
		exports.GeoCoder = GeoCoder;
	
	
	/***/ },
	/* 6 */
	/***/ function(module, exports) {
	
		module.exports = __WEBPACK_EXTERNAL_MODULE_6__;
	
	/***/ },
	/* 7 */
	/***/ function(module, exports, __webpack_require__) {
	
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
		var core_1 = __webpack_require__(1);
		var Rx_1 = __webpack_require__(6);
		/**
		 *  service for navigator.geolocation methods
		 */
		var NavigatorGeolocation = (function () {
		    function NavigatorGeolocation() {
		    }
		    NavigatorGeolocation.prototype.getCurrentPosition = function (geoLocationOptions) {
		        geoLocationOptions = geoLocationOptions || { timeout: 5000 };
		        var getCurrentPosition$ = new Rx_1.Subject();
		        if (navigator.geolocation) {
		            navigator.geolocation.getCurrentPosition(function (position) {
		                getCurrentPosition$.next(position);
		            }, function (evt) {
		                getCurrentPosition$.error(evt);
		            }, geoLocationOptions);
		        }
		        else {
		            getCurrentPosition$.error("Browser Geolocation service failed.");
		        }
		        return getCurrentPosition$;
		    };
		    ;
		    NavigatorGeolocation = __decorate([
		        core_1.Injectable(), 
		        __metadata('design:paramtypes', [])
		    ], NavigatorGeolocation);
		    return NavigatorGeolocation;
		}());
		exports.NavigatorGeolocation = NavigatorGeolocation;
	
	
	/***/ },
	/* 8 */
	/***/ function(module, exports, __webpack_require__) {
	
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
		var core_1 = __webpack_require__(1);
		var Rx_1 = __webpack_require__(6);
		var option_builder_1 = __webpack_require__(3);
		var geo_coder_1 = __webpack_require__(5);
		/**
		 * collection of map instance-related properties and methods
		 */
		var Ng2Map = (function () {
		    function Ng2Map(geoCoder, optionBuilder) {
		        this.geoCoder = geoCoder;
		        this.optionBuilder = optionBuilder;
		        this.mapReady$ = new Rx_1.Subject();
		    }
		    Ng2Map.prototype.setObjectEvents = function (definedEvents, thisObj, prefix) {
		        definedEvents.forEach(function (definedEvent) {
		            var eventName = definedEvent
		                .toLowerCase()
		                .replace(new RegExp("^" + prefix), '');
		            thisObj[prefix].addListener(eventName, function (event) {
		                thisObj[definedEvent].emit(this);
		            });
		        });
		    };
		    Ng2Map.prototype.updateGoogleObject = function (object, changes) {
		        var val, currentValue, setMethodName;
		        if (object) {
		            for (var key in changes) {
		                setMethodName = "set" + key.replace(/^[a-z]/, function (x) { return x.toUpperCase(); });
		                currentValue = changes[key].currentValue;
		                if (['position', 'center'].indexOf(key) !== -1 && typeof currentValue === 'string') {
		                    this.geoCoder.geocode({ address: currentValue }).subscribe(function (results) {
		                        object[setMethodName](results[0].geometry.location);
		                    });
		                }
		                else {
		                    val = this.optionBuilder.googlize(currentValue);
		                    object[setMethodName](val);
		                }
		            }
		        }
		    };
		    Ng2Map.prototype.updateProperty = function (object, key, currentValue) {
		        var val, setMethodName;
		        setMethodName = "set" + key.replace(/^[a-z]/, function (x) { return x.toUpperCase(); });
		        if (['position', 'center'].indexOf(key) !== -1 && typeof currentValue === 'string') {
		            this.geoCoder.geocode({ address: currentValue }).subscribe(function (results) {
		                object[setMethodName](results[0].geometry.location);
		            });
		        }
		        else {
		            val = this.optionBuilder.googlize(currentValue);
		            object[setMethodName](val);
		        }
		    };
		    Ng2Map = __decorate([
		        core_1.Injectable(), 
		        __metadata('design:paramtypes', [geo_coder_1.GeoCoder, option_builder_1.OptionBuilder])
		    ], Ng2Map);
		    return Ng2Map;
		}());
		exports.Ng2Map = Ng2Map;
	
	
	/***/ },
	/* 9 */
	/***/ function(module, exports, __webpack_require__) {
	
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
		var core_1 = __webpack_require__(1);
		var option_builder_1 = __webpack_require__(3);
		var navigator_geolocation_1 = __webpack_require__(7);
		var geo_coder_1 = __webpack_require__(5);
		var ng2_map_1 = __webpack_require__(8);
		var Rx_1 = __webpack_require__(6);
		var INPUTS = "\n  backgroundColor, center, disableDefaultUI, disableDoubleClickZoom, draggable, draggableCursor,\n  draggingCursor, heading, keyboardShortcuts, mapMaker, mapTypeControl, mapTypeId, maxZoom, minZoom,\n  noClear, overviewMapControl, panControl, panControlOptions, rotateControl, scaleControl, scrollwheel,\n  streetView, styles, tilt, zoom, streetViewControl, zoomControl, mapTypeControlOptions,\n  overviewMapControlOptions, rotateControlOptions, scaleControlOptions, streetViewControlOptions,\n  zoomControlOptions".split(',').map(function (el) { return el.trim(); });
		var OUTPUTS = "\n  bounds_changed, center_changed, click, dblclick, drag, dragend, dragstart, heading_changed, idle\n  maptypeid_changed, mousemove, mouseout, mouseover, projection_changed, resize, rightclick, \n  tilesloaded, tile_changed, zoom_changed"
		    .split(',').map(function (el) { return ("map" + el.trim().replace(/^[a-z]/, function (x) { return x.toUpperCase(); })); });
		var Ng2MapComponent = (function () {
		    function Ng2MapComponent(optionBuilder, elementRef, zone, geolocation, geoCoder, ng2Map) {
		        var _this = this;
		        this.optionBuilder = optionBuilder;
		        this.elementRef = elementRef;
		        this.zone = zone;
		        this.geolocation = geolocation;
		        this.geoCoder = geoCoder;
		        this.ng2Map = ng2Map;
		        this.mapOptions = {};
		        this.inputChanges$ = new Rx_1.Subject();
		        //map objects by group
		        this.infoWindows = {};
		        if (typeof google === 'undefined' || !google.maps.Map) {
		            this.mapInitPath = 1;
		            this.addGoogleMapsApi();
		        }
		        // all outputs needs to be initialized,
		        // http://stackoverflow.com/questions/37765519/angular2-directive-cannot-read-property-subscribe-of-undefined-with-outputs
		        OUTPUTS.forEach(function (output) { return _this[output] = new core_1.EventEmitter(); });
		    }
		    Ng2MapComponent.prototype.ngAfterViewInit = function () {
		        if (this.mapInitPath !== 1) {
		            this.initializeMap();
		        }
		    };
		    Ng2MapComponent.prototype.ngOnChanges = function (changes) {
		        this.inputChanges$.next(changes);
		    };
		    Ng2MapComponent.prototype.addGoogleMapsApi = function () {
		        var _this = this;
		        window['ng2MapComponentRef'] = { zone: this.zone, componentFn: function () { return _this.initializeMap(); } };
		        window['initNg2Map'] = function () {
		            window['ng2MapComponentRef'].zone.run(function () { window['ng2MapComponentRef'].componentFn(); });
		        };
		        if (!window['google'] && !document.querySelector('#ng2-map-api')) {
		            var script = document.createElement('script');
		            script.id = "ng2-map-api";
		            // script.src = "https://maps.google.com/maps/api/js?callback=initNg2Map";
		            var apiUrl = Ng2MapComponent['apiUrl'] || "https://maps.google.com/maps/api/js";
		            apiUrl += apiUrl.indexOf('?') ? '&' : '?';
		            script.src = apiUrl + "callback=initNg2Map";
		            document.querySelector('body').appendChild(script);
		        }
		    };
		    Ng2MapComponent.prototype.initializeMap = function () {
		        var _this = this;
		        this.el = this.elementRef.nativeElement.querySelector('.google-map');
		        console.log('this.el...............', this.el);
		        this.mapOptions = this.optionBuilder.googlizeAllInputs(INPUTS, this);
		        console.log('this.mapOptions', this.mapOptions);
		        this.mapOptions.zoom = this.mapOptions.zoom || 15;
		        typeof this.mapOptions.center === 'string' && (delete this.mapOptions.center);
		        this.map = new google.maps.Map(this.el, this.mapOptions);
		        this.setCenter();
		        //set google events listeners and emits to this outputs listeners
		        this.ng2Map.setObjectEvents(OUTPUTS, this, 'map');
		        // broadcast map ready message
		        this.ng2Map.map = this.map;
		        this.ng2Map.mapComponent = this;
		        this.ng2Map.map['mapComponent'] = this;
		        // ........
		        console.log('map is ready.......');
		        this.ng2Map.mapReady$.next(this.map);
		        // update map when input changes
		        this.inputChanges$
		            .debounceTime(1000)
		            .subscribe(function (changes) { return _this.ng2Map.updateGoogleObject(_this.map, changes); });
		    };
		    Ng2MapComponent.prototype.setCenter = function () {
		        var _this = this;
		        if (!this['center']) {
		            this.geolocation.getCurrentPosition().subscribe(function (position) {
		                console.log('setting map center from current location');
		                var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
		                _this.map.setCenter(latLng);
		            });
		        }
		        else if (typeof this['center'] === 'string') {
		            this.geoCoder.geocode({ address: this['center'] }).subscribe(function (results) {
		                console.log('setting map center from address', _this['center']);
		                _this.map.setCenter(results[0].geometry.location);
		            });
		        }
		    };
		    Ng2MapComponent.prototype.openInfoWindow = function (id, anchor, data) {
		        this.infoWindows[id].open(anchor, data);
		    };
		    Ng2MapComponent.prototype.ngOnDestroy = function () {
		        var _this = this;
		        OUTPUTS.forEach(function (output) { return google.maps.event.clearListeners(_this.map, output); });
		    };
		    Ng2MapComponent = __decorate([
		        core_1.Component({
		            selector: 'ng2-map, jui-map',
		            providers: [ng2_map_1.Ng2Map, option_builder_1.OptionBuilder, geo_coder_1.GeoCoder, navigator_geolocation_1.NavigatorGeolocation],
		            styles: ["\n    ng2-map {display: block; height: 300px;}\n    .google-map {width: 100%; height: 100%}\n  "],
		            inputs: INPUTS,
		            outputs: OUTPUTS,
		            encapsulation: core_1.ViewEncapsulation.None,
		            template: "\n    <div class=\"google-map\"></div>\n    <ng-content></ng-content>\n  "
		        }), 
		        __metadata('design:paramtypes', [option_builder_1.OptionBuilder, core_1.ElementRef, core_1.NgZone, navigator_geolocation_1.NavigatorGeolocation, geo_coder_1.GeoCoder, ng2_map_1.Ng2Map])
		    ], Ng2MapComponent);
		    return Ng2MapComponent;
		}());
		exports.Ng2MapComponent = Ng2MapComponent;
	
	
	/***/ },
	/* 10 */
	/***/ function(module, exports, __webpack_require__) {
	
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
		var core_1 = __webpack_require__(1);
		var option_builder_1 = __webpack_require__(3);
		var navigator_geolocation_1 = __webpack_require__(7);
		var geo_coder_1 = __webpack_require__(5);
		var ng2_map_1 = __webpack_require__(8);
		var Rx_1 = __webpack_require__(6);
		var INPUTS = "\n  anchorPoint, animation, clickable, cursor, draggable, icon, label, opacity\n  ,optimized,place, position, shape, title, visible, zIndex".split(',').map(function (el) { return el.trim(); });
		var OUTPUTS = "\n  animation_changed, click, clickable_changed, cursor_changed, dblclick, drag, dragend, draggable_changed,\n  dragstart, flat_changed, icon_changed, mousedown, mouseout, mouseover, mouseup, position_changed, rightclick,\n  shape_changed, title_changed, visible_changed, zindex_changed\n  ".split(',').map(function (el) { return ("marker" + el.trim().replace(/^[a-z]/, function (x) { return x.toUpperCase(); })); });
		var Marker = (function () {
		    function Marker(ng2Map, optionBuilder, geolocation, geoCoder) {
		        var _this = this;
		        this.ng2Map = ng2Map;
		        this.optionBuilder = optionBuilder;
		        this.geolocation = geolocation;
		        this.geoCoder = geoCoder;
		        this.options = {};
		        this.inputChanges$ = new Rx_1.Subject();
		        if (this.ng2Map.map) {
		            this.initialize(this.ng2Map.map);
		        }
		        else {
		            this.ng2Map.mapReady$.subscribe(function (map) { return _this.initialize(map); });
		        }
		        // all outputs needs to be initialized,
		        // http://stackoverflow.com/questions/37765519/angular2-directive-cannot-read-property-subscribe-of-undefined-with-outputs
		        OUTPUTS.forEach(function (output) { return _this[output] = new core_1.EventEmitter(); });
		    }
		    Marker.prototype.ngOnChanges = function (changes) {
		        this.inputChanges$.next(changes);
		    };
		    // called when map is ready
		    Marker.prototype.initialize = function (map) {
		        var _this = this;
		        console.log('marker is being initialized');
		        this.options = this.optionBuilder.googlizeAllInputs(INPUTS, this);
		        console.log('MARKER options', this.options);
		        this.options.map = map;
		        // will be set after geocoded
		        typeof this.options.position === 'string' && (delete this.options.position);
		        this.marker = new google.maps.Marker(this.options);
		        this.setPosition();
		        //set google events listeners and emits to this outputs listeners
		        this.ng2Map.setObjectEvents(OUTPUTS, this, 'marker');
		        // update marker when input changes
		        this.inputChanges$
		            .subscribe(function (changes) {
		            console.log('marker options are changed', changes);
		            _this.ng2Map.updateGoogleObject(_this.marker, changes);
		        });
		    };
		    Marker.prototype.setPosition = function () {
		        var _this = this;
		        setTimeout(function () {
		            if (!_this['position']) {
		                _this.geolocation.getCurrentPosition().subscribe(function (position) {
		                    console.log('setting marker position from current location');
		                    var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
		                    _this.marker.setPosition(latLng);
		                });
		            }
		            else if (typeof _this['position'] === 'string') {
		                _this.geoCoder.geocode({ address: _this['position'] }).subscribe(function (results) {
		                    console.log('setting marker position from address', _this['position']);
		                    _this.marker.setPosition(results[0].geometry.location);
		                });
		            }
		        }, 500);
		    };
		    Marker.prototype.ngOnDestroy = function () {
		        var _this = this;
		        OUTPUTS.forEach(function (output) { return google.maps.event.clearListeners(_this.marker, output); });
		        delete this.marker.setMap(null);
		        delete this.marker;
		    };
		    Marker = __decorate([
		        core_1.Directive({
		            selector: 'marker',
		            inputs: INPUTS,
		            outputs: OUTPUTS
		        }), 
		        __metadata('design:paramtypes', [ng2_map_1.Ng2Map, option_builder_1.OptionBuilder, navigator_geolocation_1.NavigatorGeolocation, geo_coder_1.GeoCoder])
		    ], Marker);
		    return Marker;
		}());
		exports.Marker = Marker;
	
	
	/***/ },
	/* 11 */
	/***/ function(module, exports, __webpack_require__) {
	
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
		var core_1 = __webpack_require__(1);
		var option_builder_1 = __webpack_require__(3);
		var ng2_map_1 = __webpack_require__(8);
		var Rx_1 = __webpack_require__(6);
		var INPUTS = "\n  content, disableAutoPan, maxWidth, pixelOffset, position, zIndex\n  ".split(',').map(function (el) { return el.trim(); });
		var OUTPUTS = "\n  closeclick, content_changed, domready, position_changed, zindex_changed\n  ".split(',').map(function (el) { return ("infoWindow" + el.trim().replace(/^[a-z]/, function (x) { return x.toUpperCase(); })); });
		var InfoWindow = (function () {
		    function InfoWindow(optionBuilder, elementRef, ng2Map) {
		        var _this = this;
		        this.optionBuilder = optionBuilder;
		        this.elementRef = elementRef;
		        this.ng2Map = ng2Map;
		        this.options = {};
		        this.inputChanges$ = new Rx_1.Subject();
		        this.elementRef.nativeElement.style.display = 'none';
		        if (this.ng2Map.map) {
		            this.initialize(this.ng2Map.map);
		        }
		        else {
		            this.ng2Map.mapReady$.subscribe(function (map) { return _this.initialize(map); });
		        }
		        // all outputs needs to be initialized,
		        // http://stackoverflow.com/questions/37765519/angular2-directive-cannot-read-property-subscribe-of-undefined-with-outputs
		        OUTPUTS.forEach(function (output) { return _this[output] = new core_1.EventEmitter(); });
		    }
		    InfoWindow.prototype.ngOnChanges = function (changes) {
		        this.inputChanges$.next(changes);
		    };
		    // called when map is ready
		    InfoWindow.prototype.initialize = function (map) {
		        var _this = this;
		        console.log('infowindow is being initialized');
		        this.template = this.elementRef.nativeElement.innerHTML;
		        this.options = this.optionBuilder.googlizeAllInputs(INPUTS, this);
		        this.infoWindow = new google.maps.InfoWindow(this.options);
		        console.log('INFOWINDOW options', this.options);
		        //register infoWindow ids to Ng2Map, so that it can be opened by id
		        this.el = this.elementRef.nativeElement;
		        if (this.el.id) {
		            this.ng2Map.mapComponent.infoWindows[this.el.id] = this;
		        }
		        else {
		            console.error('An InfoWindow must have an id. e.g. id="detail"');
		        }
		        //set google events listeners and emits to this outputs listeners
		        this.ng2Map.setObjectEvents(OUTPUTS, this, 'infoWindow');
		        // update object when input changes
		        this.inputChanges$
		            .debounceTime(1000)
		            .subscribe(function (changes) { return _this.ng2Map.updateGoogleObject(_this.infoWindow, changes); });
		    };
		    InfoWindow.prototype.open = function (anchor, data) {
		        var html = this.template;
		        for (var key in data) {
		            this[key] = data[key];
		            html = html.replace("[[" + key + "]]", data[key]);
		        }
		        //set content and open it
		        this.infoWindow.setContent(html);
		        this.infoWindow.open(this.ng2Map.map, anchor);
		    };
		    InfoWindow.prototype.ngOnDestroy = function () {
		        var _this = this;
		        OUTPUTS.forEach(function (output) { return google.maps.event.clearListeners(_this.infoWindow, output); });
		        delete this.infoWindow;
		    };
		    InfoWindow = __decorate([
		        core_1.Component({
		            selector: 'info-window',
		            inputs: INPUTS,
		            outputs: OUTPUTS,
		            template: "<ng-content></ng-content>"
		        }), 
		        __metadata('design:paramtypes', [option_builder_1.OptionBuilder, core_1.ElementRef, ng2_map_1.Ng2Map])
		    ], InfoWindow);
		    return InfoWindow;
		}());
		exports.InfoWindow = InfoWindow;
	
	
	/***/ }
	/******/ ])
	});
	;
	//# sourceMappingURL=ng2-map.umd.js.map

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory(__webpack_require__(1), __webpack_require__(2), __webpack_require__(3));
		else if(typeof define === 'function' && define.amd)
			define(["@angular/core", "@angular/forms", "@angular/platform-browser"], factory);
		else if(typeof exports === 'object')
			exports["ng2-menu"] = factory(require("@angular/core"), require("@angular/forms"), require("@angular/platform-browser"));
		else
			root["ng2-menu"] = factory(root["@angular/core"], root["@angular/forms"], root["@angular/platform-browser"]);
	})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__) {
	return /******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};
	/******/
	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {
	/******/
	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;
	/******/
	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			exports: {},
	/******/ 			id: moduleId,
	/******/ 			loaded: false
	/******/ 		};
	/******/
	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
	/******/
	/******/ 		// Flag the module as loaded
	/******/ 		module.loaded = true;
	/******/
	/******/ 		// Return the exports of the module
	/******/ 		return module.exports;
	/******/ 	}
	/******/
	/******/
	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules;
	/******/
	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules;
	/******/
	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";
	/******/
	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(0);
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */
	/***/ function(module, exports, __webpack_require__) {
	
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
		var core_1 = __webpack_require__(1);
		var forms_1 = __webpack_require__(2);
		var platform_browser_1 = __webpack_require__(3);
		var ng2_menu_directive_1 = __webpack_require__(4);
		exports.Ng2MenuDirective = ng2_menu_directive_1.Ng2MenuDirective;
		var Ng2MenuModule = (function () {
		    function Ng2MenuModule() {
		    }
		    Ng2MenuModule = __decorate([
		        core_1.NgModule({
		            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule],
		            declarations: [ng2_menu_directive_1.Ng2MenuDirective],
		            exports: [ng2_menu_directive_1.Ng2MenuDirective]
		        }), 
		        __metadata('design:paramtypes', [])
		    ], Ng2MenuModule);
		    return Ng2MenuModule;
		}());
		exports.Ng2MenuModule = Ng2MenuModule;
	
	
	/***/ },
	/* 1 */
	/***/ function(module, exports) {
	
		module.exports = __WEBPACK_EXTERNAL_MODULE_1__;
	
	/***/ },
	/* 2 */
	/***/ function(module, exports) {
	
		module.exports = __WEBPACK_EXTERNAL_MODULE_2__;
	
	/***/ },
	/* 3 */
	/***/ function(module, exports) {
	
		module.exports = __WEBPACK_EXTERNAL_MODULE_3__;
	
	/***/ },
	/* 4 */
	/***/ function(module, exports, __webpack_require__) {
	
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
		var core_1 = __webpack_require__(1);
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
	
	
	/***/ }
	/******/ ])
	});
	;
	//# sourceMappingURL=ng2-menu.umd.js.map

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory(__webpack_require__(1), __webpack_require__(2), __webpack_require__(3));
		else if(typeof define === 'function' && define.amd)
			define(["@angular/core", "@angular/forms", "@angular/platform-browser"], factory);
		else if(typeof exports === 'object')
			exports["ng2-parallax-scroll"] = factory(require("@angular/core"), require("@angular/forms"), require("@angular/platform-browser"));
		else
			root["ng2-parallax-scroll"] = factory(root["@angular/core"], root["@angular/forms"], root["@angular/platform-browser"]);
	})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__) {
	return /******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};
	/******/
	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {
	/******/
	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;
	/******/
	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			exports: {},
	/******/ 			id: moduleId,
	/******/ 			loaded: false
	/******/ 		};
	/******/
	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
	/******/
	/******/ 		// Flag the module as loaded
	/******/ 		module.loaded = true;
	/******/
	/******/ 		// Return the exports of the module
	/******/ 		return module.exports;
	/******/ 	}
	/******/
	/******/
	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules;
	/******/
	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules;
	/******/
	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";
	/******/
	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(0);
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */
	/***/ function(module, exports, __webpack_require__) {
	
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
		var core_1 = __webpack_require__(1);
		var forms_1 = __webpack_require__(2);
		var platform_browser_1 = __webpack_require__(3);
		var ng2_parallax_scroll_directive_1 = __webpack_require__(4);
		exports.Ng2ParallaxScrollDirective = ng2_parallax_scroll_directive_1.Ng2ParallaxScrollDirective;
		var Ng2ParallaxScrollModule = (function () {
		    function Ng2ParallaxScrollModule() {
		    }
		    Ng2ParallaxScrollModule = __decorate([
		        core_1.NgModule({
		            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule],
		            declarations: [ng2_parallax_scroll_directive_1.Ng2ParallaxScrollDirective],
		            exports: [ng2_parallax_scroll_directive_1.Ng2ParallaxScrollDirective]
		        }), 
		        __metadata('design:paramtypes', [])
		    ], Ng2ParallaxScrollModule);
		    return Ng2ParallaxScrollModule;
		}());
		exports.Ng2ParallaxScrollModule = Ng2ParallaxScrollModule;
	
	
	/***/ },
	/* 1 */
	/***/ function(module, exports) {
	
		module.exports = __WEBPACK_EXTERNAL_MODULE_1__;
	
	/***/ },
	/* 2 */
	/***/ function(module, exports) {
	
		module.exports = __WEBPACK_EXTERNAL_MODULE_2__;
	
	/***/ },
	/* 3 */
	/***/ function(module, exports) {
	
		module.exports = __WEBPACK_EXTERNAL_MODULE_3__;
	
	/***/ },
	/* 4 */
	/***/ function(module, exports, __webpack_require__) {
	
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
		var core_1 = __webpack_require__(1);
		var Ng2ParallaxScrollDirective = (function () {
		    function Ng2ParallaxScrollDirective(viewContainer) {
		        this.viewContainer = viewContainer;
		        this.el = this.viewContainer.element.nativeElement;
		    }
		    Ng2ParallaxScrollDirective.prototype.ngAfterViewInit = function () {
		        var _this = this;
		        this.img = this.el.querySelector("img");
		        this.img.onload = function () {
		            _this.imgOrgWidth = _this.imgOrgWidth || _this.img.offsetWidth;
		            _this.imgOrgHeight = _this.imgOrgHeight || _this.img.offsetHeight;
		            console.log(_this.img.offsetWidth, _this.img.offsetHeight, _this.img.width, _this.img.height);
		            _this.setParallaxImage();
		            _this.updateParallaxImage();
		            window.addEventListener('scroll', function () {
		                _this.updateParallaxImage();
		            });
		            window.addEventListener('resize', function () {
		                _this.setParallaxImage();
		                _this.updateParallaxImage();
		            });
		        };
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
	
	
	/***/ }
	/******/ ])
	});
	;
	//# sourceMappingURL=ng2-parallax-scroll.umd.js.map

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory(__webpack_require__(1), __webpack_require__(2), __webpack_require__(3));
		else if(typeof define === 'function' && define.amd)
			define(["@angular/core", "@angular/forms", "@angular/platform-browser"], factory);
		else if(typeof exports === 'object')
			exports["ng2-popup"] = factory(require("@angular/core"), require("@angular/forms"), require("@angular/platform-browser"));
		else
			root["ng2-popup"] = factory(root["@angular/core"], root["@angular/forms"], root["@angular/platform-browser"]);
	})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__) {
	return /******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};
	/******/
	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {
	/******/
	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;
	/******/
	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			exports: {},
	/******/ 			id: moduleId,
	/******/ 			loaded: false
	/******/ 		};
	/******/
	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
	/******/
	/******/ 		// Flag the module as loaded
	/******/ 		module.loaded = true;
	/******/
	/******/ 		// Return the exports of the module
	/******/ 		return module.exports;
	/******/ 	}
	/******/
	/******/
	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules;
	/******/
	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules;
	/******/
	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";
	/******/
	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(0);
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */
	/***/ function(module, exports, __webpack_require__) {
	
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
		var core_1 = __webpack_require__(1);
		var forms_1 = __webpack_require__(2);
		var platform_browser_1 = __webpack_require__(3);
		var ng2_overlay_1 = __webpack_require__(4);
		var ng2_popup_component_1 = __webpack_require__(5);
		exports.Ng2PopupComponent = ng2_popup_component_1.Ng2PopupComponent;
		var ng2_message_popup_component_1 = __webpack_require__(6);
		exports.Ng2MessagePopupComponent = ng2_message_popup_component_1.Ng2MessagePopupComponent;
		var Ng2PopupModule = (function () {
		    function Ng2PopupModule() {
		    }
		    Ng2PopupModule = __decorate([
		        core_1.NgModule({
		            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, ng2_overlay_1.Ng2OverlayModule],
		            declarations: [ng2_message_popup_component_1.Ng2MessagePopupComponent, ng2_popup_component_1.Ng2PopupComponent],
		            exports: [ng2_message_popup_component_1.Ng2MessagePopupComponent, ng2_popup_component_1.Ng2PopupComponent],
		            entryComponents: [ng2_message_popup_component_1.Ng2MessagePopupComponent]
		        }), 
		        __metadata('design:paramtypes', [])
		    ], Ng2PopupModule);
		    return Ng2PopupModule;
		}());
		exports.Ng2PopupModule = Ng2PopupModule;
	
	
	/***/ },
	/* 1 */
	/***/ function(module, exports) {
	
		module.exports = __WEBPACK_EXTERNAL_MODULE_1__;
	
	/***/ },
	/* 2 */
	/***/ function(module, exports) {
	
		module.exports = __WEBPACK_EXTERNAL_MODULE_2__;
	
	/***/ },
	/* 3 */
	/***/ function(module, exports) {
	
		module.exports = __WEBPACK_EXTERNAL_MODULE_3__;
	
	/***/ },
	/* 4 */
	/***/ function(module, exports, __webpack_require__) {
	
		(function webpackUniversalModuleDefinition(root, factory) {
			if(true)
				module.exports = factory(__webpack_require__(1), __webpack_require__(2), __webpack_require__(3));
			else if(typeof define === 'function' && define.amd)
				define(["@angular/core", "@angular/forms", "@angular/platform-browser"], factory);
			else if(typeof exports === 'object')
				exports["ng2-overlay"] = factory(require("@angular/core"), require("@angular/forms"), require("@angular/platform-browser"));
			else
				root["ng2-overlay"] = factory(root["@angular/core"], root["@angular/forms"], root["@angular/platform-browser"]);
		})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__) {
		return /******/ (function(modules) { // webpackBootstrap
		/******/ 	// The module cache
		/******/ 	var installedModules = {};
		/******/
		/******/ 	// The require function
		/******/ 	function __webpack_require__(moduleId) {
		/******/
		/******/ 		// Check if module is in cache
		/******/ 		if(installedModules[moduleId])
		/******/ 			return installedModules[moduleId].exports;
		/******/
		/******/ 		// Create a new module (and put it into the cache)
		/******/ 		var module = installedModules[moduleId] = {
		/******/ 			exports: {},
		/******/ 			id: moduleId,
		/******/ 			loaded: false
		/******/ 		};
		/******/
		/******/ 		// Execute the module function
		/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
		/******/
		/******/ 		// Flag the module as loaded
		/******/ 		module.loaded = true;
		/******/
		/******/ 		// Return the exports of the module
		/******/ 		return module.exports;
		/******/ 	}
		/******/
		/******/
		/******/ 	// expose the modules object (__webpack_modules__)
		/******/ 	__webpack_require__.m = modules;
		/******/
		/******/ 	// expose the module cache
		/******/ 	__webpack_require__.c = installedModules;
		/******/
		/******/ 	// __webpack_public_path__
		/******/ 	__webpack_require__.p = "";
		/******/
		/******/ 	// Load entry module and return exports
		/******/ 	return __webpack_require__(0);
		/******/ })
		/************************************************************************/
		/******/ ([
		/* 0 */
		/***/ function(module, exports, __webpack_require__) {
		
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
			var core_1 = __webpack_require__(1);
			var forms_1 = __webpack_require__(2);
			var platform_browser_1 = __webpack_require__(3);
			var overlay_1 = __webpack_require__(4);
			exports.Overlay = overlay_1.Overlay;
			var overlay_manager_1 = __webpack_require__(6);
			exports.OverlayManager = overlay_manager_1.OverlayManager;
			var overlay_directive_1 = __webpack_require__(7);
			exports.OverlayDirective = overlay_directive_1.OverlayDirective;
			var Ng2OverlayModule = (function () {
			    function Ng2OverlayModule() {
			    }
			    Ng2OverlayModule = __decorate([
			        core_1.NgModule({
			            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule],
			            declarations: [overlay_directive_1.OverlayDirective],
			            providers: [overlay_manager_1.OverlayManager],
			            exports: [overlay_directive_1.OverlayDirective]
			        }), 
			        __metadata('design:paramtypes', [])
			    ], Ng2OverlayModule);
			    return Ng2OverlayModule;
			}());
			exports.Ng2OverlayModule = Ng2OverlayModule;
			;
		
		
		/***/ },
		/* 1 */
		/***/ function(module, exports) {
		
			module.exports = __WEBPACK_EXTERNAL_MODULE_1__;
		
		/***/ },
		/* 2 */
		/***/ function(module, exports) {
		
			module.exports = __WEBPACK_EXTERNAL_MODULE_2__;
		
		/***/ },
		/* 3 */
		/***/ function(module, exports) {
		
			module.exports = __WEBPACK_EXTERNAL_MODULE_3__;
		
		/***/ },
		/* 4 */
		/***/ function(module, exports, __webpack_require__) {
		
			"use strict";
			var util_1 = __webpack_require__(5);
			var Overlay = (function () {
			    function Overlay(el, options) {
			        options = options || {};
			        this.id = options.id;
			        this.type = options.type;
			        if (!this.id) {
			            throw "Invalid overlay id";
			        }
			        this.element = el; // overlay wrapper element with table dsplay
			        this.windowOverlay = options.windowOverlay;
			        this.position = this.getPositionProperty(options.position || 'center center');
			    }
			    Overlay.prototype.positionIt = function (event) {
			        if (this.position.inside) {
			            this.positionItInside(this.position);
			        }
			        else {
			            this.positionItOutside(this.position, event);
			        }
			    };
			    Overlay.prototype.getPositionProperty = function (positionStr) {
			        var position = {}, inside;
			        var _a = positionStr.split(' '), vertical = _a[0], horizontal = _a[1], insideStr = _a[2];
			        horizontal = horizontal || 'center';
			        vertical = vertical || 'center';
			        inside = (insideStr !== 'outside' || this.windowOverlay);
			        position.horizontal = Overlay[horizontal.toUpperCase()];
			        position.vertical = Overlay[vertical.toUpperCase()];
			        position.inside = inside;
			        return position;
			    };
			    Overlay.prototype.positionItInside = function (position) {
			        this.element.style.display = 'flex';
			        //top / left positioning
			        if (this.windowOverlay) {
			            this.element.style.position = 'fixed';
			            //works as blocker
			            Object.assign(this.element.style, {
			                backgroundColor: 'rgba(0,0,0,0.2)',
			                top: '0', left: '0', bottom: '0', right: '0',
			                width: '100%', height: '100%'
			            });
			        }
			        else {
			            //adjust top/left to match to parentElement
			            var parentEl = this.element.parentElement;
			            //works as a blocker
			            Object.assign(this.element.style, {
			                position: 'absolute',
			                // backgroundColor: 'transparent',
			                backgroundColor: 'rgba(0,0,0,0.2)',
			                top: parentEl.offsetTop + 'px',
			                left: parentEl.offsetLeft + 'px',
			                width: parentEl.offsetWidth + 'px',
			                height: parentEl.offsetHeight + 'px'
			            });
			        }
			        ;
			        //horizontal position
			        switch (position.horizontal) {
			            case Overlay.LEFT:
			                this.element.style.justifyContent = 'flex-start';
			                break;
			            case Overlay.CENTER:
			                this.element.style.justifyContent = 'center';
			                break;
			            case Overlay.RIGHT:
			                this.element.style.justifyContent = 'flex-end';
			                break;
			        }
			        //vertical position
			        switch (position.vertical) {
			            case Overlay.LEFT:
			                this.element.style.alignItems = 'flex-start';
			                break;
			            case Overlay.CENTER:
			            case Overlay.MIDDLE:
			                this.element.style.alignItems = 'center';
			                break;
			            case Overlay.RIGHT:
			                this.element.style.alignItems = 'flex-end';
			                break;
			        }
			    };
			    Overlay.prototype.positionItOutside = function (position, event) {
			        //adjust top/left to match to parentElement
			        var parentEl = this.element.parentElement;
			        //works as guide line?
			        Object.assign(this.element.style, {
			            position: 'absolute',
			            pointerEvents: 'none',
			            top: parentEl.offsetTop + 'px',
			            left: parentEl.offsetLeft + 'px',
			            width: parentEl.offsetWidth + 'px',
			            height: parentEl.offsetHeight + 'px'
			        });
			        this.element.style.display = 'block';
			        var elToPosition = (this.element.children[0]);
			        elToPosition.style.position = 'absolute';
			        elToPosition.style.pointerEvents = 'auto';
			        switch (position.vertical) {
			            case Overlay.TOP:
			                elToPosition.style.bottom = this.element.offsetHeight + 'px';
			                break;
			            case Overlay.BOTTOM:
			                elToPosition.style.top = this.element.offsetHeight + 'px';
			                break;
			            case Overlay.LEFT:
			                elToPosition.style.right = this.element.offsetWidth + 'px';
			                break;
			            case Overlay.RIGHT:
			                elToPosition.style.left = this.element.offsetWidth + 'px';
			                break;
			        }
			        switch (position.horizontal) {
			            case Overlay.CENTER:
			                elToPosition.style.left = (this.element.offsetWidth - elToPosition.offsetWidth) / 2 + 'px';
			                break;
			            case Overlay.LEFT:
			                elToPosition.style.left = '0';
			                break;
			            case Overlay.RIGHT:
			                elToPosition.style.right = '0';
			                break;
			            case Overlay.TOP:
			                elToPosition.style.top = '0';
			                break;
			            case Overlay.BOTTOM:
			                elToPosition.style.bottom = '0';
			                break;
			            case Overlay.CURSOR:
			                var mousePos = util_1.Util.getMousePositionInElement(event, this.element);
			                if ((mousePos.x + elToPosition.offsetWidth) > this.element.offsetWidth) {
			                    elToPosition.style.left = (this.element.offsetWidth - elToPosition.offsetWidth - 5) + 'px';
			                }
			                else if (mousePos.x < elToPosition.offsetWidth / 2) {
			                    elToPosition.style.left = '0px';
			                }
			                else {
			                    elToPosition.style.left = mousePos.x - elToPosition.offsetWidth / 2 + 'px';
			                }
			                break;
			        }
			    };
			    Overlay.TOP = 11;
			    Overlay.MIDDLE = 12;
			    Overlay.BOTTOM = 13;
			    Overlay.LEFT = 21;
			    Overlay.CENTER = 22;
			    Overlay.RIGHT = 23;
			    Overlay.CURSOR = 31;
			    return Overlay;
			}());
			exports.Overlay = Overlay;
		
		
		/***/ },
		/* 5 */
		/***/ function(module, exports) {
		
			"use strict";
			var Util = (function () {
			    function Util() {
			    }
			    Util.getDocumentPosition = function (oElement) {
			        var posX = 0, posY = 0;
			        if (oElement.offsetParent) {
			            for (; oElement; oElement = oElement.offsetParent) {
			                posX += oElement.offsetLeft;
			                posY += oElement.offsetTop;
			            }
			            return { x: posX, y: posY };
			        }
			        else {
			            return { x: oElement['x'], y: oElement['y'] };
			        }
			    };
			    Util.getMousePositionInElement = function (evt, element) {
			        evt = evt || window.event;
			        var posX = 0, posY = 0;
			        var elPos = this.getDocumentPosition(element);
			        if (evt.pageX || evt.pageY) {
			            posX = evt.pageX;
			            posY = evt.pageY;
			        }
			        else if (evt.clientX || evt.clientY) {
			            posX = evt.clientX +
			                document.body.scrollLeft +
			                document.documentElement.scrollLeft;
			            posY = evt.clientY +
			                document.body.scrollTop +
			                document.documentElement.scrollTop;
			        }
			        return {
			            x: posX - elPos.x,
			            y: posY - elPos.y
			        };
			    };
			    return Util;
			}());
			exports.Util = Util;
		
		
		/***/ },
		/* 6 */
		/***/ function(module, exports, __webpack_require__) {
		
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
			var core_1 = __webpack_require__(1);
			var OverlayManager = (function () {
			    function OverlayManager() {
			    }
			    OverlayManager.prototype.register = function (overlay) {
			        OverlayManager.overlays[overlay.id] = overlay;
			        // console.log('overlay.register, OverlayManager.overlays', OverlayManager.overlays);
			    };
			    OverlayManager.prototype.open = function (arg, event) {
			        var overlay = typeof arg === 'string' ? OverlayManager.overlays[arg] : arg;
			        if (!overlay.opened) {
			            overlay.positionIt(event);
			            overlay.opened = true;
			        }
			    };
			    OverlayManager.prototype.close = function (arg) {
			        var overlay = typeof arg === 'string' ? OverlayManager.overlays[arg] : arg;
			        overlay.element.style.display = 'none';
			        overlay.opened = false;
			    };
			    //list of overlay objects
			    OverlayManager.overlays = {};
			    OverlayManager = __decorate([
			        core_1.Injectable(), 
			        __metadata('design:paramtypes', [])
			    ], OverlayManager);
			    return OverlayManager;
			}());
			exports.OverlayManager = OverlayManager;
		
		
		/***/ },
		/* 7 */
		/***/ function(module, exports, __webpack_require__) {
		
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
			var core_1 = __webpack_require__(1);
			var overlay_manager_1 = __webpack_require__(6);
			var overlay_1 = __webpack_require__(4);
			var OverlayDirective = (function () {
			    function OverlayDirective(viewContainerRef, overlayManager) {
			        this.viewContainerRef = viewContainerRef;
			        this.overlayManager = overlayManager;
			        this.el = this.viewContainerRef.element.nativeElement;
			    }
			    OverlayDirective.prototype.ngAfterViewInit = function () {
			        this.wrapItWithOverlayTag();
			        this.registerToOverlayManager();
			    };
			    OverlayDirective.prototype.wrapItWithOverlayTag = function () {
			        //console.log('wrapped overlay directive element with <ng2-overlay>');
			        this.overlayEl = document.createElement('ng2-overlay');
			        this.overlayEl.style.display = 'none';
			        this.el.parentElement.insertBefore(this.overlayEl, this.el.nextSibling);
			        this.overlayEl.appendChild(this.el);
			    };
			    //create Overlay object,  then register this element to overlayManager
			    OverlayDirective.prototype.registerToOverlayManager = function () {
			        var positionStr = this.overlayPosition;
			        var overlay = new overlay_1.Overlay(this.overlayEl, {
			            id: this.el.id,
			            windowOverlay: this.overlayOf == "window",
			            position: positionStr
			        });
			        //console.log('registering overlay', overlay);
			        this.overlayManager.register(overlay);
			    };
			    __decorate([
			        core_1.Input('ng2-overlay-of'), 
			        __metadata('design:type', String)
			    ], OverlayDirective.prototype, "overlayOf", void 0);
			    __decorate([
			        core_1.Input('ng2-overlay-position'), 
			        __metadata('design:type', String)
			    ], OverlayDirective.prototype, "overlayPosition", void 0);
			    OverlayDirective = __decorate([
			        core_1.Directive({
			            selector: '[ng2-overlay], [ng2-overlay-of], [ng2-overlay-position]',
			        }), 
			        __metadata('design:paramtypes', [core_1.ViewContainerRef, overlay_manager_1.OverlayManager])
			    ], OverlayDirective);
			    return OverlayDirective;
			}());
			exports.OverlayDirective = OverlayDirective;
		
		
		/***/ }
		/******/ ])
		});
		;
		//# sourceMappingURL=ng2-overlay.umd.js.map
	
	/***/ },
	/* 5 */
	/***/ function(module, exports, __webpack_require__) {
	
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
		var core_1 = __webpack_require__(1);
		var ng2_overlay_1 = __webpack_require__(4);
		var Ng2PopupComponent = (function () {
		    function Ng2PopupComponent(componentResolver, overlayManager) {
		        this.componentResolver = componentResolver;
		        this.overlayManager = overlayManager;
		    }
		    Ng2PopupComponent.prototype.ngAfterViewInit = function () {
		        var overlayEl = this.marker.element.nativeElement.parentElement.parentElement;
		        var overlay = new ng2_overlay_1.Overlay(overlayEl, {
		            id: 'ng2-popup-overlay',
		            windowOverlay: true,
		            position: 'center center'
		        });
		        this.overlayManager.register(overlay);
		    };
		    Ng2PopupComponent.prototype.open = function (component, options) {
		        this.close();
		        this.opened = true;
		        this.classNames = options.classNames;
		        this.closeButton = options.closeButton;
		        var factory = this.componentResolver.resolveComponentFactory(component);
		        var componentRef = this.marker.createComponent(factory);
		        componentRef.instance.popupOptions = options;
		        componentRef.instance.popup = this;
		        this.overlayManager.open('ng2-popup-overlay', null); //(id, event)
		    };
		    Ng2PopupComponent.prototype.close = function () {
		        this.opened = false;
		        this.overlayManager.close('ng2-popup-overlay');
		        try {
		            this.marker.remove();
		        }
		        catch (e) { }
		    };
		    __decorate([
		        core_1.ViewChild('marker', { read: core_1.ViewContainerRef }), 
		        __metadata('design:type', Object)
		    ], Ng2PopupComponent.prototype, "marker", void 0);
		    Ng2PopupComponent = __decorate([
		        core_1.Component({
		            selector: 'ng2-popup',
		            directives: [ng2_overlay_1.OverlayDirective],
		            providers: [ng2_overlay_1.OverlayManager],
		            template: "\n    <div id=\"ng2-popup-overlay\"> <!-- <-- this is overlay -->\n      <div class=\"popup-container {{classNames}}\" [ngClass]=\"{opened: opened}\">\n        <div *ngIf=\"closeButton != false\" class=\"close-popup\" (click)=\"close()\">x</div>\n        <div class=\"marker\" #marker></div> <!-- to position popup component -->\n        <!-- popup component will be here -->\n      </div>\n    </div>\n  ",
		            styles: ["\n    .popup-container { \n      background: #fff;\n      border: 1px solid #ccc;\n      box-shadow: 0 5px 15px rgba(0,0,0,.5);\n      border-radius: 5px;\n      width: 600px;\n      display: none;\n    }\n    .popup-container.opened { \n      display: block;\n    }\n    .close-popup {\n      font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n      float: right; \n      cursor: pointer; \n      font-size: 21px;\n      line-height: 1;\n      text-shadow: 0 1px 0 #fff;\n      opacity: 0.2;\n      padding: 10px;\n    }\n    /*.marker ~ * { display:block; background: #fff}*/\n    .popup-container.small { width: 300px}\n    .popup-container.large { width: 900px}\n  "],
		            encapsulation: core_1.ViewEncapsulation.None
		        }), 
		        __metadata('design:paramtypes', [core_1.ComponentFactoryResolver, ng2_overlay_1.OverlayManager])
		    ], Ng2PopupComponent);
		    return Ng2PopupComponent;
		}());
		exports.Ng2PopupComponent = Ng2PopupComponent;
	
	
	/***/ },
	/* 6 */
	/***/ function(module, exports, __webpack_require__) {
	
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
		var core_1 = __webpack_require__(1);
		var Ng2MessagePopupComponent = (function () {
		    function Ng2MessagePopupComponent() {
		    }
		    Ng2MessagePopupComponent = __decorate([
		        core_1.Component({
		            selector: 'ng2-message-popup',
		            template: "\n    <div>\n      <div class=\"popup-header\">{{popupOptions.title}}</div>\n      <div class=\"popup-body\">{{popupOptions.message}}</div>\n      <div class=\"popup-footer\" *ngIf=\"popupOptions.buttons\">\n        <button *ngIf=\"popupOptions.buttons.OK\"\n          (click)=\"popupOptions.buttons.OK()\">Ok</button>\n        <button *ngIf=\"popupOptions.buttons.CANCEL\"\n          (click)=\"popupOptions.buttons.CANCEL()\">Cancel</button>\n      </div>\n    </div>\n  ",
		            encapsulation: core_1.ViewEncapsulation.None,
		            styles: ["\n    .popup-header, .popup-body, .popup-footer {\n      padding: 15px;\n      text-align: center;\n    }\n    .popup-header  {\n      font-weight: bold;\n      font-size: 18px;\n      border-bottom: 1px solid #ccc;\n    }\n  "]
		        }), 
		        __metadata('design:paramtypes', [])
		    ], Ng2MessagePopupComponent);
		    return Ng2MessagePopupComponent;
		}());
		exports.Ng2MessagePopupComponent = Ng2MessagePopupComponent;
	
	
	/***/ }
	/******/ ])
	});
	;
	//# sourceMappingURL=ng2-popup.umd.js.map

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory(__webpack_require__(1), __webpack_require__(2), __webpack_require__(3));
		else if(typeof define === 'function' && define.amd)
			define(["@angular/core", "@angular/forms", "@angular/platform-browser"], factory);
		else if(typeof exports === 'object')
			exports["ng2-sticky"] = factory(require("@angular/core"), require("@angular/forms"), require("@angular/platform-browser"));
		else
			root["ng2-sticky"] = factory(root["@angular/core"], root["@angular/forms"], root["@angular/platform-browser"]);
	})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__) {
	return /******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};
	/******/
	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {
	/******/
	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;
	/******/
	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			exports: {},
	/******/ 			id: moduleId,
	/******/ 			loaded: false
	/******/ 		};
	/******/
	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
	/******/
	/******/ 		// Flag the module as loaded
	/******/ 		module.loaded = true;
	/******/
	/******/ 		// Return the exports of the module
	/******/ 		return module.exports;
	/******/ 	}
	/******/
	/******/
	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules;
	/******/
	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules;
	/******/
	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";
	/******/
	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(0);
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */
	/***/ function(module, exports, __webpack_require__) {
	
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
		var core_1 = __webpack_require__(1);
		var forms_1 = __webpack_require__(2);
		var platform_browser_1 = __webpack_require__(3);
		var ng2_sticky_directive_1 = __webpack_require__(4);
		exports.Ng2StickyDirective = ng2_sticky_directive_1.Ng2StickyDirective;
		var Ng2StickyModule = (function () {
		    function Ng2StickyModule() {
		    }
		    Ng2StickyModule = __decorate([
		        core_1.NgModule({
		            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule],
		            declarations: [ng2_sticky_directive_1.Ng2StickyDirective],
		            exports: [ng2_sticky_directive_1.Ng2StickyDirective]
		        }), 
		        __metadata('design:paramtypes', [])
		    ], Ng2StickyModule);
		    return Ng2StickyModule;
		}());
		exports.Ng2StickyModule = Ng2StickyModule;
	
	
	/***/ },
	/* 1 */
	/***/ function(module, exports) {
	
		module.exports = __WEBPACK_EXTERNAL_MODULE_1__;
	
	/***/ },
	/* 2 */
	/***/ function(module, exports) {
	
		module.exports = __WEBPACK_EXTERNAL_MODULE_2__;
	
	/***/ },
	/* 3 */
	/***/ function(module, exports) {
	
		module.exports = __WEBPACK_EXTERNAL_MODULE_3__;
	
	/***/ },
	/* 4 */
	/***/ function(module, exports, __webpack_require__) {
	
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
		var core_1 = __webpack_require__(1);
		var ng2_utils_1 = __webpack_require__(5);
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
		        var parentElPosition = ng2_utils_1.computedStyle(this.parentEl, 'position');
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
		            position: ng2_utils_1.computedStyle(this.el, 'position'),
		            float: ng2_utils_1.computedStyle(this.el, 'float'),
		            top: ng2_utils_1.computedStyle(this.el, 'top'),
		            bottom: ng2_utils_1.computedStyle(this.el, 'bottom'),
		            left: ng2_utils_1.computedStyle(this.el, 'left'),
		            width: ng2_utils_1.computedStyle(this.el, 'width'),
		            offsetTop: this.el.offsetTop,
		            offsetLeft: this.el.offsetLeft,
		            marginTop: parseInt(ng2_utils_1.computedStyle(this.el, 'marginTop')),
		            marginBottom: parseInt(ng2_utils_1.computedStyle(this.el, 'marginBottom')),
		            marginLeft: parseInt(ng2_utils_1.computedStyle(this.el, 'marginLeft')),
		            marginRight: parseInt(ng2_utils_1.computedStyle(this.el, 'marginLeft'))
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
	
	
	/***/ },
	/* 5 */
	/***/ function(module, exports, __webpack_require__) {
	
		(function webpackUniversalModuleDefinition(root, factory) {
			if(true)
				module.exports = factory(__webpack_require__(1));
			else if(typeof define === 'function' && define.amd)
				define(["@angular/core"], factory);
			else if(typeof exports === 'object')
				exports["ng2-utils"] = factory(require("@angular/core"));
			else
				root["ng2-utils"] = factory(root["@angular/core"]);
		})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
		return /******/ (function(modules) { // webpackBootstrap
		/******/ 	// The module cache
		/******/ 	var installedModules = {};
		/******/
		/******/ 	// The require function
		/******/ 	function __webpack_require__(moduleId) {
		/******/
		/******/ 		// Check if module is in cache
		/******/ 		if(installedModules[moduleId])
		/******/ 			return installedModules[moduleId].exports;
		/******/
		/******/ 		// Create a new module (and put it into the cache)
		/******/ 		var module = installedModules[moduleId] = {
		/******/ 			exports: {},
		/******/ 			id: moduleId,
		/******/ 			loaded: false
		/******/ 		};
		/******/
		/******/ 		// Execute the module function
		/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
		/******/
		/******/ 		// Flag the module as loaded
		/******/ 		module.loaded = true;
		/******/
		/******/ 		// Return the exports of the module
		/******/ 		return module.exports;
		/******/ 	}
		/******/
		/******/
		/******/ 	// expose the modules object (__webpack_modules__)
		/******/ 	__webpack_require__.m = modules;
		/******/
		/******/ 	// expose the module cache
		/******/ 	__webpack_require__.c = installedModules;
		/******/
		/******/ 	// __webpack_public_path__
		/******/ 	__webpack_require__.p = "";
		/******/
		/******/ 	// Load entry module and return exports
		/******/ 	return __webpack_require__(0);
		/******/ })
		/************************************************************************/
		/******/ ([
		/* 0 */
		/***/ function(module, exports, __webpack_require__) {
		
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
			var core_1 = __webpack_require__(1);
			var scroll_to_1 = __webpack_require__(2);
			exports.scrollTo = scroll_to_1.scrollTo;
			var element_visible_1 = __webpack_require__(3);
			exports.elementVisible = element_visible_1.elementVisible;
			var computed_style_1 = __webpack_require__(4);
			exports.computedStyle = computed_style_1.computedStyle;
			var outer_width_1 = __webpack_require__(5);
			exports.outerWidth = outer_width_1.outerWidth;
			var outer_height_1 = __webpack_require__(6);
			exports.outerHeight = outer_height_1.outerHeight;
			var Ng2UtilsModule = (function () {
			    function Ng2UtilsModule() {
			    }
			    Ng2UtilsModule = __decorate([
			        core_1.NgModule({
			            declarations: [
			                scroll_to_1.scrollTo,
			                element_visible_1.elementVisible,
			                computed_style_1.computedStyle,
			                outer_width_1.outerWidth,
			                outer_height_1.outerHeight
			            ],
			            exports: [
			                scroll_to_1.scrollTo,
			                element_visible_1.elementVisible,
			                computed_style_1.computedStyle,
			                outer_width_1.outerWidth,
			                outer_height_1.outerHeight
			            ]
			        }), 
			        __metadata('design:paramtypes', [])
			    ], Ng2UtilsModule);
			    return Ng2UtilsModule;
			}());
			exports.Ng2UtilsModule = Ng2UtilsModule;
		
		
		/***/ },
		/* 1 */
		/***/ function(module, exports) {
		
			module.exports = __WEBPACK_EXTERNAL_MODULE_1__;
		
		/***/ },
		/* 2 */
		/***/ function(module, exports) {
		
			"use strict";
			/**
			 * scroll to the selector within the parent selector by scrolling 10 times within 500ms
			 * @param selector
			 * @param parentSelector
			 */
			function scrollTo(selector, parentSelector) {
			    console.log('selector', selector, 'parentSelector', parentSelector);
			    var parentEl, targetEl;
			    targetEl = document.querySelector(selector);
			    if (!targetEl) {
			        throw "Invalid selector " + selector;
			    }
			    parentEl = document.querySelector(parentSelector);
			    if (!parentEl) {
			        throw "Invalid parent selector " + parentSelector;
			    }
			    var parentElStyle = window.getComputedStyle(parentEl);
			    parentEl = parentElStyle['overflow'] === 'auto' ? parentEl : document.body;
			    var currentScrollTop = parentEl.scrollTop;
			    var targetOffsetTop = targetEl.offsetTop;
			    if (parentEl === document.body) {
			        var bodyRect = document.body.getBoundingClientRect();
			        var targetRect = targetEl.getBoundingClientRect();
			        targetOffsetTop = targetRect.top - bodyRect.top;
			    }
			    var step = Math.ceil((targetOffsetTop - currentScrollTop) / 10);
			    (function loop(i) {
			        setTimeout(function main() {
			            parentEl.scrollTop += step;
			            i > 1 && loop(i - 1);
			        }, 50);
			    }(10));
			}
			exports.scrollTo = scrollTo;
		
		
		/***/ },
		/* 3 */
		/***/ function(module, exports) {
		
			"use strict";
			/**
			 * Returns an element is visible within outer element
			 * @param innerEl
			 * @param outerEl
			 * @param adjustment
			 * @returns {{top: boolean, bottom: boolean, left: boolean, right: boolean}}
			 */
			function elementVisible(innerEl, outerEl, adjustment) {
			    var innerRect = innerEl.getBoundingClientRect();
			    var bottomAdjustment = (adjustment && adjustment.bottom || 0);
			    if (outerEl === window) {
			        return {
			            top: innerRect.bottom - bottomAdjustment > window.innerHeight
			                && innerRect.top < window.innerHeight,
			            bottom: innerRect.bottom - bottomAdjustment > 0
			                && innerRect.bottom < window.innerHeight,
			            left: innerRect.right > window.innerWidth
			                && innerRect.left < window.innerWidth,
			            right: innerRect.right > 0
			                && innerRect.right < window.innerWidth
			        };
			    }
			    else {
			        var outerRect = outerEl.getBoundingClientRect();
			        var defaultView = (innerEl.ownerDocument || document).defaultView;
			        var computedStyle = defaultView.getComputedStyle(outerEl, null);
			        var outerRectBorderTopWidth = parseInt(computedStyle.getPropertyValue('border-top-width'), 10);
			        var outerRectBorderLeftWidth = parseInt(computedStyle.getPropertyValue('border-left-width'), 10);
			        /* top is visible or bottom is visible */
			        var topVisible = (innerRect.top >= outerRect.top
			            && innerRect.top < outerRect.bottom);
			        var bottomVisible = (innerRect.bottom > (outerRect.top + outerRectBorderTopWidth)
			            && innerRect.bottom < outerRect.bottom);
			        var leftVisible = (innerRect.left >= outerRect.left
			            && innerRect.left < outerRect.right);
			        var rightVisible = (innerRect.right > (outerRect.left + outerRectBorderLeftWidth)
			            && innerRect.right < outerRect.right);
			        return {
			            top: topVisible,
			            bottom: bottomVisible,
			            left: leftVisible,
			            right: rightVisible
			        };
			    }
			}
			exports.elementVisible = elementVisible;
		
		
		/***/ },
		/* 4 */
		/***/ function(module, exports) {
		
			"use strict";
			/**
			 * returns coumputed style of given element
			 * @param el
			 * @param styleProp
			 * @returns {any}
			 */
			function computedStyle(el, styleProp) {
			    var value, defaultView = (el.ownerDocument || document).defaultView;
			    // W3C standard way:
			    if (defaultView && defaultView.getComputedStyle) {
			        // sanitize property name to css notation
			        // (hypen separated words eg. font-Size)
			        styleProp = styleProp.replace(/([A-Z])/g, "-$1").toLowerCase();
			        return defaultView.getComputedStyle(el, null).getPropertyValue(styleProp);
			    }
			    else if (el['currentStyle']) {
			        // sanitize property name to camelCase
			        styleProp = styleProp.replace(/\-(\w)/g, function (str, letter) {
			            return letter.toUpperCase();
			        });
			        value = el['currentStyle'][styleProp];
			        // convert other units to pixels on IE
			        if (/^\d+(em|pt|%|ex)?$/i.test(value)) {
			            return (function (value) {
			                var oldLeft = el.style.left, oldRsLeft = el['runtimeStyle'].left;
			                el['runtimeStyle'].left = el['currentStyle'].left;
			                el.style.left = value || 0;
			                value = el.style['pixelLeft'] + "px";
			                el.style.left = oldLeft;
			                el['runtimeStyle'].left = oldRsLeft;
			                return value;
			            })(value);
			        }
			        return value;
			    }
			}
			exports.computedStyle = computedStyle;
		
		
		/***/ },
		/* 5 */
		/***/ function(module, exports) {
		
			"use strict";
			function outerWidth(el) {
			    var style = getComputedStyle(el);
			    return el.offsetWidth +
			        parseInt(style.getPropertyValue('margin-left')) +
			        parseInt(style.getPropertyValue('margin-right'));
			}
			exports.outerWidth = outerWidth;
		
		
		/***/ },
		/* 6 */
		/***/ function(module, exports) {
		
			"use strict";
			function outerHeight(el) {
			    var style = getComputedStyle(el);
			    return el.offsetHeight +
			        parseInt(style.getPropertyValue('margin-top')) +
			        parseInt(style.getPropertyValue('margin-bottom'));
			}
			exports.outerHeight = outerHeight;
		
		
		/***/ }
		/******/ ])
		});
		;
		//# sourceMappingURL=ng2-utils.umd.js.map
	
	/***/ }
	/******/ ])
	});
	;
	//# sourceMappingURL=ng2-sticky.umd.js.map

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory(__webpack_require__(1), __webpack_require__(2), __webpack_require__(3));
		else if(typeof define === 'function' && define.amd)
			define(["@angular/core", "@angular/forms", "@angular/platform-browser"], factory);
		else if(typeof exports === 'object')
			exports["ng2-tab"] = factory(require("@angular/core"), require("@angular/forms"), require("@angular/platform-browser"));
		else
			root["ng2-tab"] = factory(root["@angular/core"], root["@angular/forms"], root["@angular/platform-browser"]);
	})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__) {
	return /******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};
	/******/
	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {
	/******/
	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;
	/******/
	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			exports: {},
	/******/ 			id: moduleId,
	/******/ 			loaded: false
	/******/ 		};
	/******/
	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
	/******/
	/******/ 		// Flag the module as loaded
	/******/ 		module.loaded = true;
	/******/
	/******/ 		// Return the exports of the module
	/******/ 		return module.exports;
	/******/ 	}
	/******/
	/******/
	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules;
	/******/
	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules;
	/******/
	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";
	/******/
	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(0);
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */
	/***/ function(module, exports, __webpack_require__) {
	
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
		var core_1 = __webpack_require__(1);
		var forms_1 = __webpack_require__(2);
		var platform_browser_1 = __webpack_require__(3);
		var ng2_tab_component_1 = __webpack_require__(4);
		exports.Ng2TabComponent = ng2_tab_component_1.Ng2TabComponent;
		var Ng2TabModule = (function () {
		    function Ng2TabModule() {
		    }
		    Ng2TabModule = __decorate([
		        core_1.NgModule({
		            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule],
		            declarations: [ng2_tab_component_1.Ng2TabComponent],
		            exports: [ng2_tab_component_1.Ng2TabComponent]
		        }), 
		        __metadata('design:paramtypes', [])
		    ], Ng2TabModule);
		    return Ng2TabModule;
		}());
		exports.Ng2TabModule = Ng2TabModule;
	
	
	/***/ },
	/* 1 */
	/***/ function(module, exports) {
	
		module.exports = __WEBPACK_EXTERNAL_MODULE_1__;
	
	/***/ },
	/* 2 */
	/***/ function(module, exports) {
	
		module.exports = __WEBPACK_EXTERNAL_MODULE_2__;
	
	/***/ },
	/* 3 */
	/***/ function(module, exports) {
	
		module.exports = __WEBPACK_EXTERNAL_MODULE_3__;
	
	/***/ },
	/* 4 */
	/***/ function(module, exports, __webpack_require__) {
	
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
		var core_1 = __webpack_require__(1);
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
	
	
	/***/ }
	/******/ ])
	});
	;
	//# sourceMappingURL=ng2-tab.umd.js.map

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory(__webpack_require__(1), __webpack_require__(2), __webpack_require__(3));
		else if(typeof define === 'function' && define.amd)
			define(["@angular/core", "@angular/forms", "@angular/platform-browser"], factory);
		else if(typeof exports === 'object')
			exports["ng2-tooltip-overlay"] = factory(require("@angular/core"), require("@angular/forms"), require("@angular/platform-browser"));
		else
			root["ng2-tooltip-overlay"] = factory(root["@angular/core"], root["@angular/forms"], root["@angular/platform-browser"]);
	})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__) {
	return /******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};
	/******/
	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {
	/******/
	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;
	/******/
	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			exports: {},
	/******/ 			id: moduleId,
	/******/ 			loaded: false
	/******/ 		};
	/******/
	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
	/******/
	/******/ 		// Flag the module as loaded
	/******/ 		module.loaded = true;
	/******/
	/******/ 		// Return the exports of the module
	/******/ 		return module.exports;
	/******/ 	}
	/******/
	/******/
	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules;
	/******/
	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules;
	/******/
	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";
	/******/
	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(0);
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */
	/***/ function(module, exports, __webpack_require__) {
	
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
		var core_1 = __webpack_require__(1);
		var forms_1 = __webpack_require__(2);
		var platform_browser_1 = __webpack_require__(3);
		var ng2_tooltip_directive_1 = __webpack_require__(4);
		exports.Ng2TooltipDirective = ng2_tooltip_directive_1.Ng2TooltipDirective;
		var ng2_overlay_1 = __webpack_require__(5);
		var Ng2TooltipOverlayModule = (function () {
		    function Ng2TooltipOverlayModule() {
		    }
		    Ng2TooltipOverlayModule = __decorate([
		        core_1.NgModule({
		            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, ng2_overlay_1.Ng2OverlayModule],
		            declarations: [ng2_tooltip_directive_1.Ng2TooltipDirective],
		            exports: [ng2_tooltip_directive_1.Ng2TooltipDirective]
		        }), 
		        __metadata('design:paramtypes', [])
		    ], Ng2TooltipOverlayModule);
		    return Ng2TooltipOverlayModule;
		}());
		exports.Ng2TooltipOverlayModule = Ng2TooltipOverlayModule;
	
	
	/***/ },
	/* 1 */
	/***/ function(module, exports) {
	
		module.exports = __WEBPACK_EXTERNAL_MODULE_1__;
	
	/***/ },
	/* 2 */
	/***/ function(module, exports) {
	
		module.exports = __WEBPACK_EXTERNAL_MODULE_2__;
	
	/***/ },
	/* 3 */
	/***/ function(module, exports) {
	
		module.exports = __WEBPACK_EXTERNAL_MODULE_3__;
	
	/***/ },
	/* 4 */
	/***/ function(module, exports, __webpack_require__) {
	
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
		var core_1 = __webpack_require__(1);
		var ng2_overlay_1 = __webpack_require__(5);
		var Ng2TooltipDirective = (function () {
		    function Ng2TooltipDirective(viewContainerRef, overlayManager) {
		        this.viewContainerRef = viewContainerRef;
		        this.overlayManager = overlayManager;
		        this.el = this.viewContainerRef.element.nativeElement;
		    }
		    Ng2TooltipDirective.prototype.ngAfterViewInit = function () {
		        this.overlay = this.getTooltipOverlay(this.el, this.tooltip);
		    };
		    Ng2TooltipDirective.prototype.showTooltip = function ($event) {
		        this.overlayManager.open(this.overlay, $event);
		        $event.stopPropagation();
		    };
		    Ng2TooltipDirective.prototype.hideTooltip = function ($event) {
		        this.overlayManager.close(this.overlay);
		        $event.stopPropagation();
		    };
		    Ng2TooltipDirective.prototype.getTooltipOverlay = function (el, tooltip) {
		        var tooltipEl = document.createElement('ng2-tooltip');
		        tooltipEl.style.display = 'none';
		        var divEl = document.createElement('div');
		        divEl.innerHTML = "\n       <div class='tooltip-contents'>" + tooltip + "</div>\n       <div class='tooltip-down-arrow'></div>\n    ";
		        tooltipEl.appendChild(divEl);
		        //el.parentElement.insertBefore(tooltipEl, el.nextSibling);
		        el.appendChild(tooltipEl);
		        var overlay = new ng2_overlay_1.Overlay(tooltipEl, {
		            id: 'tooltip-' + (el.id || Math.floor(Math.random() * 1000000)),
		            position: 'top cursor outside'
		        });
		        this.overlayManager.register(overlay);
		        return overlay;
		    };
		    __decorate([
		        core_1.Input('ng2-tooltip'), 
		        __metadata('design:type', String)
		    ], Ng2TooltipDirective.prototype, "tooltip", void 0);
		    Ng2TooltipDirective = __decorate([
		        core_1.Directive({
		            selector: '[ng2-tooltip]',
		            host: {
		                '(mouseover)': 'showTooltip($event)',
		                '(mouseout)': 'hideTooltip($event)'
		            }
		        }), 
		        __metadata('design:paramtypes', [core_1.ViewContainerRef, ng2_overlay_1.OverlayManager])
		    ], Ng2TooltipDirective);
		    return Ng2TooltipDirective;
		}());
		exports.Ng2TooltipDirective = Ng2TooltipDirective;
	
	
	/***/ },
	/* 5 */
	/***/ function(module, exports, __webpack_require__) {
	
		(function webpackUniversalModuleDefinition(root, factory) {
			if(true)
				module.exports = factory(__webpack_require__(1), __webpack_require__(2), __webpack_require__(3));
			else if(typeof define === 'function' && define.amd)
				define(["@angular/core", "@angular/forms", "@angular/platform-browser"], factory);
			else if(typeof exports === 'object')
				exports["ng2-overlay"] = factory(require("@angular/core"), require("@angular/forms"), require("@angular/platform-browser"));
			else
				root["ng2-overlay"] = factory(root["@angular/core"], root["@angular/forms"], root["@angular/platform-browser"]);
		})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__) {
		return /******/ (function(modules) { // webpackBootstrap
		/******/ 	// The module cache
		/******/ 	var installedModules = {};
		/******/
		/******/ 	// The require function
		/******/ 	function __webpack_require__(moduleId) {
		/******/
		/******/ 		// Check if module is in cache
		/******/ 		if(installedModules[moduleId])
		/******/ 			return installedModules[moduleId].exports;
		/******/
		/******/ 		// Create a new module (and put it into the cache)
		/******/ 		var module = installedModules[moduleId] = {
		/******/ 			exports: {},
		/******/ 			id: moduleId,
		/******/ 			loaded: false
		/******/ 		};
		/******/
		/******/ 		// Execute the module function
		/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
		/******/
		/******/ 		// Flag the module as loaded
		/******/ 		module.loaded = true;
		/******/
		/******/ 		// Return the exports of the module
		/******/ 		return module.exports;
		/******/ 	}
		/******/
		/******/
		/******/ 	// expose the modules object (__webpack_modules__)
		/******/ 	__webpack_require__.m = modules;
		/******/
		/******/ 	// expose the module cache
		/******/ 	__webpack_require__.c = installedModules;
		/******/
		/******/ 	// __webpack_public_path__
		/******/ 	__webpack_require__.p = "";
		/******/
		/******/ 	// Load entry module and return exports
		/******/ 	return __webpack_require__(0);
		/******/ })
		/************************************************************************/
		/******/ ([
		/* 0 */
		/***/ function(module, exports, __webpack_require__) {
		
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
			var core_1 = __webpack_require__(1);
			var forms_1 = __webpack_require__(2);
			var platform_browser_1 = __webpack_require__(3);
			var overlay_1 = __webpack_require__(4);
			exports.Overlay = overlay_1.Overlay;
			var overlay_manager_1 = __webpack_require__(6);
			exports.OverlayManager = overlay_manager_1.OverlayManager;
			var overlay_directive_1 = __webpack_require__(7);
			exports.OverlayDirective = overlay_directive_1.OverlayDirective;
			var Ng2OverlayModule = (function () {
			    function Ng2OverlayModule() {
			    }
			    Ng2OverlayModule = __decorate([
			        core_1.NgModule({
			            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule],
			            declarations: [overlay_directive_1.OverlayDirective],
			            providers: [overlay_manager_1.OverlayManager],
			            exports: [overlay_directive_1.OverlayDirective]
			        }), 
			        __metadata('design:paramtypes', [])
			    ], Ng2OverlayModule);
			    return Ng2OverlayModule;
			}());
			exports.Ng2OverlayModule = Ng2OverlayModule;
			;
		
		
		/***/ },
		/* 1 */
		/***/ function(module, exports) {
		
			module.exports = __WEBPACK_EXTERNAL_MODULE_1__;
		
		/***/ },
		/* 2 */
		/***/ function(module, exports) {
		
			module.exports = __WEBPACK_EXTERNAL_MODULE_2__;
		
		/***/ },
		/* 3 */
		/***/ function(module, exports) {
		
			module.exports = __WEBPACK_EXTERNAL_MODULE_3__;
		
		/***/ },
		/* 4 */
		/***/ function(module, exports, __webpack_require__) {
		
			"use strict";
			var util_1 = __webpack_require__(5);
			var Overlay = (function () {
			    function Overlay(el, options) {
			        options = options || {};
			        this.id = options.id;
			        this.type = options.type;
			        if (!this.id) {
			            throw "Invalid overlay id";
			        }
			        this.element = el; // overlay wrapper element with table dsplay
			        this.windowOverlay = options.windowOverlay;
			        this.position = this.getPositionProperty(options.position || 'center center');
			    }
			    Overlay.prototype.positionIt = function (event) {
			        if (this.position.inside) {
			            this.positionItInside(this.position);
			        }
			        else {
			            this.positionItOutside(this.position, event);
			        }
			    };
			    Overlay.prototype.getPositionProperty = function (positionStr) {
			        var position = {}, inside;
			        var _a = positionStr.split(' '), vertical = _a[0], horizontal = _a[1], insideStr = _a[2];
			        horizontal = horizontal || 'center';
			        vertical = vertical || 'center';
			        inside = (insideStr !== 'outside' || this.windowOverlay);
			        position.horizontal = Overlay[horizontal.toUpperCase()];
			        position.vertical = Overlay[vertical.toUpperCase()];
			        position.inside = inside;
			        return position;
			    };
			    Overlay.prototype.positionItInside = function (position) {
			        this.element.style.display = 'flex';
			        //top / left positioning
			        if (this.windowOverlay) {
			            this.element.style.position = 'fixed';
			            //works as blocker
			            Object.assign(this.element.style, {
			                backgroundColor: 'rgba(0,0,0,0.2)',
			                top: '0', left: '0', bottom: '0', right: '0',
			                width: '100%', height: '100%'
			            });
			        }
			        else {
			            //adjust top/left to match to parentElement
			            var parentEl = this.element.parentElement;
			            //works as a blocker
			            Object.assign(this.element.style, {
			                position: 'absolute',
			                // backgroundColor: 'transparent',
			                backgroundColor: 'rgba(0,0,0,0.2)',
			                top: parentEl.offsetTop + 'px',
			                left: parentEl.offsetLeft + 'px',
			                width: parentEl.offsetWidth + 'px',
			                height: parentEl.offsetHeight + 'px'
			            });
			        }
			        ;
			        //horizontal position
			        switch (position.horizontal) {
			            case Overlay.LEFT:
			                this.element.style.justifyContent = 'flex-start';
			                break;
			            case Overlay.CENTER:
			                this.element.style.justifyContent = 'center';
			                break;
			            case Overlay.RIGHT:
			                this.element.style.justifyContent = 'flex-end';
			                break;
			        }
			        //vertical position
			        switch (position.vertical) {
			            case Overlay.LEFT:
			                this.element.style.alignItems = 'flex-start';
			                break;
			            case Overlay.CENTER:
			            case Overlay.MIDDLE:
			                this.element.style.alignItems = 'center';
			                break;
			            case Overlay.RIGHT:
			                this.element.style.alignItems = 'flex-end';
			                break;
			        }
			    };
			    Overlay.prototype.positionItOutside = function (position, event) {
			        //adjust top/left to match to parentElement
			        var parentEl = this.element.parentElement;
			        //works as guide line?
			        Object.assign(this.element.style, {
			            position: 'absolute',
			            pointerEvents: 'none',
			            top: parentEl.offsetTop + 'px',
			            left: parentEl.offsetLeft + 'px',
			            width: parentEl.offsetWidth + 'px',
			            height: parentEl.offsetHeight + 'px'
			        });
			        this.element.style.display = 'block';
			        var elToPosition = (this.element.children[0]);
			        elToPosition.style.position = 'absolute';
			        elToPosition.style.pointerEvents = 'auto';
			        switch (position.vertical) {
			            case Overlay.TOP:
			                elToPosition.style.bottom = this.element.offsetHeight + 'px';
			                break;
			            case Overlay.BOTTOM:
			                elToPosition.style.top = this.element.offsetHeight + 'px';
			                break;
			            case Overlay.LEFT:
			                elToPosition.style.right = this.element.offsetWidth + 'px';
			                break;
			            case Overlay.RIGHT:
			                elToPosition.style.left = this.element.offsetWidth + 'px';
			                break;
			        }
			        switch (position.horizontal) {
			            case Overlay.CENTER:
			                elToPosition.style.left = (this.element.offsetWidth - elToPosition.offsetWidth) / 2 + 'px';
			                break;
			            case Overlay.LEFT:
			                elToPosition.style.left = '0';
			                break;
			            case Overlay.RIGHT:
			                elToPosition.style.right = '0';
			                break;
			            case Overlay.TOP:
			                elToPosition.style.top = '0';
			                break;
			            case Overlay.BOTTOM:
			                elToPosition.style.bottom = '0';
			                break;
			            case Overlay.CURSOR:
			                var mousePos = util_1.Util.getMousePositionInElement(event, this.element);
			                if ((mousePos.x + elToPosition.offsetWidth) > this.element.offsetWidth) {
			                    elToPosition.style.left = (this.element.offsetWidth - elToPosition.offsetWidth - 5) + 'px';
			                }
			                else if (mousePos.x < elToPosition.offsetWidth / 2) {
			                    elToPosition.style.left = '0px';
			                }
			                else {
			                    elToPosition.style.left = mousePos.x - elToPosition.offsetWidth / 2 + 'px';
			                }
			                break;
			        }
			    };
			    Overlay.TOP = 11;
			    Overlay.MIDDLE = 12;
			    Overlay.BOTTOM = 13;
			    Overlay.LEFT = 21;
			    Overlay.CENTER = 22;
			    Overlay.RIGHT = 23;
			    Overlay.CURSOR = 31;
			    return Overlay;
			}());
			exports.Overlay = Overlay;
		
		
		/***/ },
		/* 5 */
		/***/ function(module, exports) {
		
			"use strict";
			var Util = (function () {
			    function Util() {
			    }
			    Util.getDocumentPosition = function (oElement) {
			        var posX = 0, posY = 0;
			        if (oElement.offsetParent) {
			            for (; oElement; oElement = oElement.offsetParent) {
			                posX += oElement.offsetLeft;
			                posY += oElement.offsetTop;
			            }
			            return { x: posX, y: posY };
			        }
			        else {
			            return { x: oElement['x'], y: oElement['y'] };
			        }
			    };
			    Util.getMousePositionInElement = function (evt, element) {
			        evt = evt || window.event;
			        var posX = 0, posY = 0;
			        var elPos = this.getDocumentPosition(element);
			        if (evt.pageX || evt.pageY) {
			            posX = evt.pageX;
			            posY = evt.pageY;
			        }
			        else if (evt.clientX || evt.clientY) {
			            posX = evt.clientX +
			                document.body.scrollLeft +
			                document.documentElement.scrollLeft;
			            posY = evt.clientY +
			                document.body.scrollTop +
			                document.documentElement.scrollTop;
			        }
			        return {
			            x: posX - elPos.x,
			            y: posY - elPos.y
			        };
			    };
			    return Util;
			}());
			exports.Util = Util;
		
		
		/***/ },
		/* 6 */
		/***/ function(module, exports, __webpack_require__) {
		
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
			var core_1 = __webpack_require__(1);
			var OverlayManager = (function () {
			    function OverlayManager() {
			    }
			    OverlayManager.prototype.register = function (overlay) {
			        OverlayManager.overlays[overlay.id] = overlay;
			        // console.log('overlay.register, OverlayManager.overlays', OverlayManager.overlays);
			    };
			    OverlayManager.prototype.open = function (arg, event) {
			        var overlay = typeof arg === 'string' ? OverlayManager.overlays[arg] : arg;
			        if (!overlay.opened) {
			            overlay.positionIt(event);
			            overlay.opened = true;
			        }
			    };
			    OverlayManager.prototype.close = function (arg) {
			        var overlay = typeof arg === 'string' ? OverlayManager.overlays[arg] : arg;
			        overlay.element.style.display = 'none';
			        overlay.opened = false;
			    };
			    //list of overlay objects
			    OverlayManager.overlays = {};
			    OverlayManager = __decorate([
			        core_1.Injectable(), 
			        __metadata('design:paramtypes', [])
			    ], OverlayManager);
			    return OverlayManager;
			}());
			exports.OverlayManager = OverlayManager;
		
		
		/***/ },
		/* 7 */
		/***/ function(module, exports, __webpack_require__) {
		
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
			var core_1 = __webpack_require__(1);
			var overlay_manager_1 = __webpack_require__(6);
			var overlay_1 = __webpack_require__(4);
			var OverlayDirective = (function () {
			    function OverlayDirective(viewContainerRef, overlayManager) {
			        this.viewContainerRef = viewContainerRef;
			        this.overlayManager = overlayManager;
			        this.el = this.viewContainerRef.element.nativeElement;
			    }
			    OverlayDirective.prototype.ngAfterViewInit = function () {
			        this.wrapItWithOverlayTag();
			        this.registerToOverlayManager();
			    };
			    OverlayDirective.prototype.wrapItWithOverlayTag = function () {
			        //console.log('wrapped overlay directive element with <ng2-overlay>');
			        this.overlayEl = document.createElement('ng2-overlay');
			        this.overlayEl.style.display = 'none';
			        this.el.parentElement.insertBefore(this.overlayEl, this.el.nextSibling);
			        this.overlayEl.appendChild(this.el);
			    };
			    //create Overlay object,  then register this element to overlayManager
			    OverlayDirective.prototype.registerToOverlayManager = function () {
			        var positionStr = this.overlayPosition;
			        var overlay = new overlay_1.Overlay(this.overlayEl, {
			            id: this.el.id,
			            windowOverlay: this.overlayOf == "window",
			            position: positionStr
			        });
			        //console.log('registering overlay', overlay);
			        this.overlayManager.register(overlay);
			    };
			    __decorate([
			        core_1.Input('ng2-overlay-of'), 
			        __metadata('design:type', String)
			    ], OverlayDirective.prototype, "overlayOf", void 0);
			    __decorate([
			        core_1.Input('ng2-overlay-position'), 
			        __metadata('design:type', String)
			    ], OverlayDirective.prototype, "overlayPosition", void 0);
			    OverlayDirective = __decorate([
			        core_1.Directive({
			            selector: '[ng2-overlay], [ng2-overlay-of], [ng2-overlay-position]',
			        }), 
			        __metadata('design:paramtypes', [core_1.ViewContainerRef, overlay_manager_1.OverlayManager])
			    ], OverlayDirective);
			    return OverlayDirective;
			}());
			exports.OverlayDirective = OverlayDirective;
		
		
		/***/ }
		/******/ ])
		});
		;
		//# sourceMappingURL=ng2-overlay.umd.js.map
	
	/***/ }
	/******/ ])
	});
	;
	//# sourceMappingURL=ng2-tooltip-overlay.umd.js.map

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory(__webpack_require__(1), __webpack_require__(2), __webpack_require__(3));
		else if(typeof define === 'function' && define.amd)
			define(["@angular/core", "@angular/forms", "@angular/platform-browser"], factory);
		else if(typeof exports === 'object')
			exports["ng2-scrollable"] = factory(require("@angular/core"), require("@angular/forms"), require("@angular/platform-browser"));
		else
			root["ng2-scrollable"] = factory(root["@angular/core"], root["@angular/forms"], root["@angular/platform-browser"]);
	})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__) {
	return /******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};
	/******/
	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {
	/******/
	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;
	/******/
	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			exports: {},
	/******/ 			id: moduleId,
	/******/ 			loaded: false
	/******/ 		};
	/******/
	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
	/******/
	/******/ 		// Flag the module as loaded
	/******/ 		module.loaded = true;
	/******/
	/******/ 		// Return the exports of the module
	/******/ 		return module.exports;
	/******/ 	}
	/******/
	/******/
	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules;
	/******/
	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules;
	/******/
	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";
	/******/
	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(0);
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */
	/***/ function(module, exports, __webpack_require__) {
	
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
		var core_1 = __webpack_require__(1);
		var forms_1 = __webpack_require__(2);
		var platform_browser_1 = __webpack_require__(3);
		var ng2_scrollable_directive_1 = __webpack_require__(4);
		exports.Ng2ScrollableDirective = ng2_scrollable_directive_1.Ng2ScrollableDirective;
		var Ng2ScrollableModule = (function () {
		    function Ng2ScrollableModule() {
		    }
		    Ng2ScrollableModule = __decorate([
		        core_1.NgModule({
		            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule],
		            declarations: [ng2_scrollable_directive_1.Ng2ScrollableDirective],
		            exports: [ng2_scrollable_directive_1.Ng2ScrollableDirective]
		        }), 
		        __metadata('design:paramtypes', [])
		    ], Ng2ScrollableModule);
		    return Ng2ScrollableModule;
		}());
		exports.Ng2ScrollableModule = Ng2ScrollableModule;
	
	
	/***/ },
	/* 1 */
	/***/ function(module, exports) {
	
		module.exports = __WEBPACK_EXTERNAL_MODULE_1__;
	
	/***/ },
	/* 2 */
	/***/ function(module, exports) {
	
		module.exports = __WEBPACK_EXTERNAL_MODULE_2__;
	
	/***/ },
	/* 3 */
	/***/ function(module, exports) {
	
		module.exports = __WEBPACK_EXTERNAL_MODULE_3__;
	
	/***/ },
	/* 4 */
	/***/ function(module, exports, __webpack_require__) {
	
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
		var core_1 = __webpack_require__(1);
		var ng2_utils_1 = __webpack_require__(5);
		var Ng2ScrollableDirective = (function () {
		    function Ng2ScrollableDirective(el) {
		        this.elementVisible = new core_1.EventEmitter();
		        this.sections = [];
		        this.visible = ng2_utils_1.elementVisible;
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
	
	
	/***/ },
	/* 5 */
	/***/ function(module, exports, __webpack_require__) {
	
		(function webpackUniversalModuleDefinition(root, factory) {
			if(true)
				module.exports = factory(__webpack_require__(1));
			else if(typeof define === 'function' && define.amd)
				define(["@angular/core"], factory);
			else if(typeof exports === 'object')
				exports["ng2-utils"] = factory(require("@angular/core"));
			else
				root["ng2-utils"] = factory(root["@angular/core"]);
		})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
		return /******/ (function(modules) { // webpackBootstrap
		/******/ 	// The module cache
		/******/ 	var installedModules = {};
		/******/
		/******/ 	// The require function
		/******/ 	function __webpack_require__(moduleId) {
		/******/
		/******/ 		// Check if module is in cache
		/******/ 		if(installedModules[moduleId])
		/******/ 			return installedModules[moduleId].exports;
		/******/
		/******/ 		// Create a new module (and put it into the cache)
		/******/ 		var module = installedModules[moduleId] = {
		/******/ 			exports: {},
		/******/ 			id: moduleId,
		/******/ 			loaded: false
		/******/ 		};
		/******/
		/******/ 		// Execute the module function
		/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
		/******/
		/******/ 		// Flag the module as loaded
		/******/ 		module.loaded = true;
		/******/
		/******/ 		// Return the exports of the module
		/******/ 		return module.exports;
		/******/ 	}
		/******/
		/******/
		/******/ 	// expose the modules object (__webpack_modules__)
		/******/ 	__webpack_require__.m = modules;
		/******/
		/******/ 	// expose the module cache
		/******/ 	__webpack_require__.c = installedModules;
		/******/
		/******/ 	// __webpack_public_path__
		/******/ 	__webpack_require__.p = "";
		/******/
		/******/ 	// Load entry module and return exports
		/******/ 	return __webpack_require__(0);
		/******/ })
		/************************************************************************/
		/******/ ([
		/* 0 */
		/***/ function(module, exports, __webpack_require__) {
		
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
			var core_1 = __webpack_require__(1);
			var scroll_to_1 = __webpack_require__(2);
			exports.scrollTo = scroll_to_1.scrollTo;
			var element_visible_1 = __webpack_require__(3);
			exports.elementVisible = element_visible_1.elementVisible;
			var computed_style_1 = __webpack_require__(4);
			exports.computedStyle = computed_style_1.computedStyle;
			var outer_width_1 = __webpack_require__(5);
			exports.outerWidth = outer_width_1.outerWidth;
			var outer_height_1 = __webpack_require__(6);
			exports.outerHeight = outer_height_1.outerHeight;
			var Ng2UtilsModule = (function () {
			    function Ng2UtilsModule() {
			    }
			    Ng2UtilsModule = __decorate([
			        core_1.NgModule({
			            declarations: [
			                scroll_to_1.scrollTo,
			                element_visible_1.elementVisible,
			                computed_style_1.computedStyle,
			                outer_width_1.outerWidth,
			                outer_height_1.outerHeight
			            ],
			            exports: [
			                scroll_to_1.scrollTo,
			                element_visible_1.elementVisible,
			                computed_style_1.computedStyle,
			                outer_width_1.outerWidth,
			                outer_height_1.outerHeight
			            ]
			        }), 
			        __metadata('design:paramtypes', [])
			    ], Ng2UtilsModule);
			    return Ng2UtilsModule;
			}());
			exports.Ng2UtilsModule = Ng2UtilsModule;
		
		
		/***/ },
		/* 1 */
		/***/ function(module, exports) {
		
			module.exports = __WEBPACK_EXTERNAL_MODULE_1__;
		
		/***/ },
		/* 2 */
		/***/ function(module, exports) {
		
			"use strict";
			/**
			 * scroll to the selector within the parent selector by scrolling 10 times within 500ms
			 * @param selector
			 * @param parentSelector
			 */
			function scrollTo(selector, parentSelector) {
			    console.log('selector', selector, 'parentSelector', parentSelector);
			    var parentEl, targetEl;
			    targetEl = document.querySelector(selector);
			    if (!targetEl) {
			        throw "Invalid selector " + selector;
			    }
			    parentEl = document.querySelector(parentSelector);
			    if (!parentEl) {
			        throw "Invalid parent selector " + parentSelector;
			    }
			    var parentElStyle = window.getComputedStyle(parentEl);
			    parentEl = parentElStyle['overflow'] === 'auto' ? parentEl : document.body;
			    var currentScrollTop = parentEl.scrollTop;
			    var targetOffsetTop = targetEl.offsetTop;
			    if (parentEl === document.body) {
			        var bodyRect = document.body.getBoundingClientRect();
			        var targetRect = targetEl.getBoundingClientRect();
			        targetOffsetTop = targetRect.top - bodyRect.top;
			    }
			    var step = Math.ceil((targetOffsetTop - currentScrollTop) / 10);
			    (function loop(i) {
			        setTimeout(function main() {
			            parentEl.scrollTop += step;
			            i > 1 && loop(i - 1);
			        }, 50);
			    }(10));
			}
			exports.scrollTo = scrollTo;
		
		
		/***/ },
		/* 3 */
		/***/ function(module, exports) {
		
			"use strict";
			/**
			 * Returns an element is visible within outer element
			 * @param innerEl
			 * @param outerEl
			 * @param adjustment
			 * @returns {{top: boolean, bottom: boolean, left: boolean, right: boolean}}
			 */
			function elementVisible(innerEl, outerEl, adjustment) {
			    var innerRect = innerEl.getBoundingClientRect();
			    var bottomAdjustment = (adjustment && adjustment.bottom || 0);
			    if (outerEl === window) {
			        return {
			            top: innerRect.bottom - bottomAdjustment > window.innerHeight
			                && innerRect.top < window.innerHeight,
			            bottom: innerRect.bottom - bottomAdjustment > 0
			                && innerRect.bottom < window.innerHeight,
			            left: innerRect.right > window.innerWidth
			                && innerRect.left < window.innerWidth,
			            right: innerRect.right > 0
			                && innerRect.right < window.innerWidth
			        };
			    }
			    else {
			        var outerRect = outerEl.getBoundingClientRect();
			        var defaultView = (innerEl.ownerDocument || document).defaultView;
			        var computedStyle = defaultView.getComputedStyle(outerEl, null);
			        var outerRectBorderTopWidth = parseInt(computedStyle.getPropertyValue('border-top-width'), 10);
			        var outerRectBorderLeftWidth = parseInt(computedStyle.getPropertyValue('border-left-width'), 10);
			        /* top is visible or bottom is visible */
			        var topVisible = (innerRect.top >= outerRect.top
			            && innerRect.top < outerRect.bottom);
			        var bottomVisible = (innerRect.bottom > (outerRect.top + outerRectBorderTopWidth)
			            && innerRect.bottom < outerRect.bottom);
			        var leftVisible = (innerRect.left >= outerRect.left
			            && innerRect.left < outerRect.right);
			        var rightVisible = (innerRect.right > (outerRect.left + outerRectBorderLeftWidth)
			            && innerRect.right < outerRect.right);
			        return {
			            top: topVisible,
			            bottom: bottomVisible,
			            left: leftVisible,
			            right: rightVisible
			        };
			    }
			}
			exports.elementVisible = elementVisible;
		
		
		/***/ },
		/* 4 */
		/***/ function(module, exports) {
		
			"use strict";
			/**
			 * returns coumputed style of given element
			 * @param el
			 * @param styleProp
			 * @returns {any}
			 */
			function computedStyle(el, styleProp) {
			    var value, defaultView = (el.ownerDocument || document).defaultView;
			    // W3C standard way:
			    if (defaultView && defaultView.getComputedStyle) {
			        // sanitize property name to css notation
			        // (hypen separated words eg. font-Size)
			        styleProp = styleProp.replace(/([A-Z])/g, "-$1").toLowerCase();
			        return defaultView.getComputedStyle(el, null).getPropertyValue(styleProp);
			    }
			    else if (el['currentStyle']) {
			        // sanitize property name to camelCase
			        styleProp = styleProp.replace(/\-(\w)/g, function (str, letter) {
			            return letter.toUpperCase();
			        });
			        value = el['currentStyle'][styleProp];
			        // convert other units to pixels on IE
			        if (/^\d+(em|pt|%|ex)?$/i.test(value)) {
			            return (function (value) {
			                var oldLeft = el.style.left, oldRsLeft = el['runtimeStyle'].left;
			                el['runtimeStyle'].left = el['currentStyle'].left;
			                el.style.left = value || 0;
			                value = el.style['pixelLeft'] + "px";
			                el.style.left = oldLeft;
			                el['runtimeStyle'].left = oldRsLeft;
			                return value;
			            })(value);
			        }
			        return value;
			    }
			}
			exports.computedStyle = computedStyle;
		
		
		/***/ },
		/* 5 */
		/***/ function(module, exports) {
		
			"use strict";
			function outerWidth(el) {
			    var style = getComputedStyle(el);
			    return el.offsetWidth +
			        parseInt(style.getPropertyValue('margin-left')) +
			        parseInt(style.getPropertyValue('margin-right'));
			}
			exports.outerWidth = outerWidth;
		
		
		/***/ },
		/* 6 */
		/***/ function(module, exports) {
		
			"use strict";
			function outerHeight(el) {
			    var style = getComputedStyle(el);
			    return el.offsetHeight +
			        parseInt(style.getPropertyValue('margin-top')) +
			        parseInt(style.getPropertyValue('margin-bottom'));
			}
			exports.outerHeight = outerHeight;
		
		
		/***/ }
		/******/ ])
		});
		;
		//# sourceMappingURL=ng2-utils.umd.js.map
	
	/***/ }
	/******/ ])
	});
	;
	//# sourceMappingURL=ng2-scrollable.umd.js.map

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory(__webpack_require__(1), __webpack_require__(2), __webpack_require__(3));
		else if(typeof define === 'function' && define.amd)
			define(["@angular/core", "@angular/forms", "@angular/platform-browser"], factory);
		else if(typeof exports === 'object')
			exports["ng2-ui-sortable"] = factory(require("@angular/core"), require("@angular/forms"), require("@angular/platform-browser"));
		else
			root["ng2-ui-sortable"] = factory(root["@angular/core"], root["@angular/forms"], root["@angular/platform-browser"]);
	})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__) {
	return /******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};
	/******/
	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {
	/******/
	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;
	/******/
	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			exports: {},
	/******/ 			id: moduleId,
	/******/ 			loaded: false
	/******/ 		};
	/******/
	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
	/******/
	/******/ 		// Flag the module as loaded
	/******/ 		module.loaded = true;
	/******/
	/******/ 		// Return the exports of the module
	/******/ 		return module.exports;
	/******/ 	}
	/******/
	/******/
	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules;
	/******/
	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules;
	/******/
	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";
	/******/
	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(0);
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */
	/***/ function(module, exports, __webpack_require__) {
	
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
		var core_1 = __webpack_require__(1);
		var forms_1 = __webpack_require__(2);
		var platform_browser_1 = __webpack_require__(3);
		var ng2_sortable_directive_1 = __webpack_require__(4);
		exports.Ng2SortableDirective = ng2_sortable_directive_1.Ng2SortableDirective;
		var Ng2SortableModule = (function () {
		    function Ng2SortableModule() {
		    }
		    Ng2SortableModule = __decorate([
		        core_1.NgModule({
		            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule],
		            declarations: [ng2_sortable_directive_1.Ng2SortableDirective],
		            exports: [ng2_sortable_directive_1.Ng2SortableDirective]
		        }), 
		        __metadata('design:paramtypes', [])
		    ], Ng2SortableModule);
		    return Ng2SortableModule;
		}());
		exports.Ng2SortableModule = Ng2SortableModule;
	
	
	/***/ },
	/* 1 */
	/***/ function(module, exports) {
	
		module.exports = __WEBPACK_EXTERNAL_MODULE_1__;
	
	/***/ },
	/* 2 */
	/***/ function(module, exports) {
	
		module.exports = __WEBPACK_EXTERNAL_MODULE_2__;
	
	/***/ },
	/* 3 */
	/***/ function(module, exports) {
	
		module.exports = __WEBPACK_EXTERNAL_MODULE_3__;
	
	/***/ },
	/* 4 */
	/***/ function(module, exports, __webpack_require__) {
	
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
		var core_1 = __webpack_require__(1);
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
	
	
	/***/ }
	/******/ ])
	});
	;
	//# sourceMappingURL=ng2-ui-sortable.umd.js.map

/***/ }
/******/ ])
});
;
//# sourceMappingURL=ng2-ui.umd.js.map