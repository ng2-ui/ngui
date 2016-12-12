(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/core"), require("@angular/forms"), require("@angular/platform-browser"), require("@angular/http"), require("rxjs/add/operator/map"), require("@angular/common"), require("rxjs/Subject"), require("rxjs/add/operator/debounceTime"));
	else if(typeof define === 'function' && define.amd)
		define(["@angular/core", "@angular/forms", "@angular/platform-browser", "@angular/http", "rxjs/add/operator/map", "@angular/common", "rxjs/Subject", "rxjs/add/operator/debounceTime"], factory);
	else if(typeof exports === 'object')
		exports["ng2-ui"] = factory(require("@angular/core"), require("@angular/forms"), require("@angular/platform-browser"), require("@angular/http"), require("rxjs/add/operator/map"), require("@angular/common"), require("rxjs/Subject"), require("rxjs/add/operator/debounceTime"));
	else
		root["ng2-ui"] = factory(root["@angular/core"], root["@angular/forms"], root["@angular/platform-browser"], root["@angular/http"], root["rxjs/add/operator/map"], root["@angular/common"], root["rxjs/Subject"], root["rxjs/add/operator/debounceTime"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_10__, __WEBPACK_EXTERNAL_MODULE_11__) {
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
	var ng2_auto_complete_1 = __webpack_require__(4);
	var ng2_datetime_picker_1 = __webpack_require__(8);
	var ng2_map_1 = __webpack_require__(9);
	var ng2_popup_1 = __webpack_require__(12);
	var ng2_menu_1 = __webpack_require__(13);
	var ng2_parallax_scroll_1 = __webpack_require__(14);
	var ng2_sticky_1 = __webpack_require__(15);
	var ng2_tab_1 = __webpack_require__(16);
	var ng2_tooltip_overlay_1 = __webpack_require__(17);
	var ng2_ui_sortable_1 = __webpack_require__(18);
	var ng2_overlay_1 = __webpack_require__(19);
	var ng2_scrollable_1 = __webpack_require__(20);
	var ng2_collapsable_1 = __webpack_require__(21);
	var ng2_infinite_list_1 = __webpack_require__(22);
	var ng2_overlay_2 = __webpack_require__(19);
	exports.Ng2OverlayManager = ng2_overlay_2.Ng2OverlayManager;
	var ng2_map_2 = __webpack_require__(9);
	exports.Ng2MapComponent = ng2_map_2.Ng2MapComponent;
	var ng2_scrollable_2 = __webpack_require__(20);
	exports.Ng2ScrollableDirective = ng2_scrollable_2.Ng2ScrollableDirective;
	var ng2_popup_2 = __webpack_require__(12);
	exports.Ng2MessagePopupComponent = ng2_popup_2.Ng2MessagePopupComponent;
	exports.Ng2PopupComponent = ng2_popup_2.Ng2PopupComponent;
	var Ng2UIModule = (function () {
	    function Ng2UIModule() {
	    }
	    return Ng2UIModule;
	}());
	Ng2UIModule = __decorate([
	    core_1.NgModule({
	        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule],
	        exports: [
	            ng2_auto_complete_1.Ng2AutoCompleteModule,
	            ng2_datetime_picker_1.Ng2DatetimePickerModule,
	            ng2_map_1.Ng2MapModule,
	            ng2_infinite_list_1.Ng2InfiniteListModule,
	            ng2_menu_1.Ng2MenuModule,
	            ng2_parallax_scroll_1.Ng2ParallaxScrollModule,
	            ng2_popup_1.Ng2PopupModule,
	            ng2_sticky_1.Ng2StickyModule,
	            ng2_tab_1.Ng2TabModule,
	            ng2_scrollable_1.Ng2ScrollableModule,
	            ng2_tooltip_overlay_1.Ng2TooltipOverlayModule,
	            ng2_overlay_1.Ng2OverlayModule,
	            ng2_ui_sortable_1.Ng2SortableModule,
	            ng2_collapsable_1.Ng2CollapsableModule
	        ],
	        providers: [ng2_overlay_2.Ng2OverlayManager]
	    }),
	    __metadata("design:paramtypes", [])
	], Ng2UIModule);
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
			module.exports = factory(__webpack_require__(1), __webpack_require__(5), __webpack_require__(6), __webpack_require__(7), __webpack_require__(2));
		else if(typeof define === 'function' && define.amd)
			define(["@angular/core", "@angular/http", "rxjs/add/operator/map", "@angular/common", "@angular/forms"], factory);
		else if(typeof exports === 'object')
			exports["ng2-auto-complete"] = factory(require("@angular/core"), require("@angular/http"), require("rxjs/add/operator/map"), require("@angular/common"), require("@angular/forms"));
		else
			root["ng2-auto-complete"] = factory(root["@angular/core"], root["@angular/http"], root["rxjs/add/operator/map"], root["@angular/common"], root["@angular/forms"]);
	})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_7__) {
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
		var ng2_auto_complete_1 = __webpack_require__(1);
		exports.Ng2AutoComplete = ng2_auto_complete_1.Ng2AutoComplete;
		var ng2_auto_complete_module_1 = __webpack_require__(5);
		exports.Ng2AutoCompleteModule = ng2_auto_complete_module_1.Ng2AutoCompleteModule;
		var ng2_auto_complete_component_1 = __webpack_require__(8);
		exports.Ng2AutoCompleteComponent = ng2_auto_complete_component_1.Ng2AutoCompleteComponent;
		var ng2_auto_complete_directive_1 = __webpack_require__(9);
		exports.Ng2AutoCompleteDirective = ng2_auto_complete_directive_1.Ng2AutoCompleteDirective;
	
	
	/***/ },
	/* 1 */
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
		var core_1 = __webpack_require__(2);
		var http_1 = __webpack_require__(3);
		__webpack_require__(4);
		/**
		 * provides auto-complete related utility functions
		 */
		var Ng2AutoComplete = (function () {
		    function Ng2AutoComplete(http) {
		        this.http = http;
		        // ...
		    }
		    Ng2AutoComplete.prototype.filter = function (list, keyword) {
		        return list.filter(function (el) {
		            return !!JSON.stringify(el).match(new RegExp(keyword, "i"));
		        });
		    };
		    /**
		     * return remote data from the given source and options, and data path
		     */
		    Ng2AutoComplete.prototype.getRemoteData = function (keyword) {
		        var _this = this;
		        if (typeof this.source !== 'string') {
		            throw "Invalid type of source, must be a string. e.g. http://www.google.com?q=:my_keyword";
		        }
		        var matches = this.source.match(/:[a-zA-Z_]+/);
		        var replacementWord = matches[0];
		        var url = this.source.replace(replacementWord, keyword);
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
		    Ng2AutoComplete = __decorate([
		        core_1.Injectable(), 
		        __metadata('design:paramtypes', [http_1.Http])
		    ], Ng2AutoComplete);
		    return Ng2AutoComplete;
		}());
		exports.Ng2AutoComplete = Ng2AutoComplete;
	
	
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
	/***/ function(module, exports) {
	
		module.exports = __WEBPACK_EXTERNAL_MODULE_4__;
	
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
		var core_1 = __webpack_require__(2);
		var common_1 = __webpack_require__(6);
		var forms_1 = __webpack_require__(7);
		var ng2_auto_complete_component_1 = __webpack_require__(8);
		var ng2_auto_complete_directive_1 = __webpack_require__(9);
		var ng2_auto_complete_1 = __webpack_require__(1);
		var Ng2AutoCompleteModule = (function () {
		    function Ng2AutoCompleteModule() {
		    }
		    Ng2AutoCompleteModule.forRoot = function () {
		        return {
		            ngModule: Ng2AutoCompleteModule,
		            providers: [ng2_auto_complete_1.Ng2AutoComplete]
		        };
		    };
		    Ng2AutoCompleteModule = __decorate([
		        core_1.NgModule({
		            imports: [common_1.CommonModule, forms_1.FormsModule],
		            declarations: [ng2_auto_complete_component_1.Ng2AutoCompleteComponent, ng2_auto_complete_directive_1.Ng2AutoCompleteDirective],
		            exports: [ng2_auto_complete_component_1.Ng2AutoCompleteComponent, ng2_auto_complete_directive_1.Ng2AutoCompleteDirective],
		            entryComponents: [ng2_auto_complete_component_1.Ng2AutoCompleteComponent]
		        }), 
		        __metadata('design:paramtypes', [])
		    ], Ng2AutoCompleteModule);
		    return Ng2AutoCompleteModule;
		}());
		exports.Ng2AutoCompleteModule = Ng2AutoCompleteModule;
	
	
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
		var core_1 = __webpack_require__(2);
		var ng2_auto_complete_1 = __webpack_require__(1);
		/**
		 * show a selected date in monthly calendar
		 * Each filteredList item has the following property in addition to data itself
		 *   1. displayValue as string e.g. Allen Kim
		 *   2. dataValue as any e.g.
		 */
		var Ng2AutoCompleteComponent = (function () {
		    /**
		     * constructor
		     */
		    function Ng2AutoCompleteComponent(elementRef, autoComplete) {
		        this.autoComplete = autoComplete;
		        this.minChars = 0;
		        this.valuePropertyName = "id";
		        this.displayPropertyName = "value";
		        this.loadingText = "Loading";
		        this.valueSelected = new core_1.EventEmitter();
		        this.inputChanged = new core_1.EventEmitter();
		        this.closeToBottom = false;
		        this.dropdownVisible = false;
		        this.isLoading = false;
		        this.filteredList = [];
		        this.itemIndex = 0;
		        this.delay = (function () {
		            var timer = 0;
		            return function (callback, ms) {
		                clearTimeout(timer);
		                timer = setTimeout(callback, ms);
		            };
		        })();
		        this.el = elementRef.nativeElement;
		    }
		    Ng2AutoCompleteComponent.prototype.isSrcArr = function () {
		        return (this.source.constructor.name === "Array");
		    };
		    /**
		     * user enters into input el, shows list to select, then select one
		     */
		    Ng2AutoCompleteComponent.prototype.ngOnInit = function () {
		        this.inputEl = (this.el.querySelector("input"));
		        this.userInputEl = this.el.parentElement.querySelector("input");
		        this.autoComplete.source = this.source;
		        this.autoComplete.pathToData = this.pathToData;
		    };
		    Ng2AutoCompleteComponent.prototype.reloadListInDelay = function () {
		        var _this = this;
		        var delayMs = this.isSrcArr() ? 10 : 500;
		        // executing after user stopped typing
		        this.delay(function () { return _this.reloadList(); }, delayMs);
		        this.inputChanged.emit(this.inputEl.value);
		    };
		    Ng2AutoCompleteComponent.prototype.showDropdownList = function () {
		        this.keyword = this.userInputEl.value;
		        this.inputEl.style.display = '';
		        this.inputEl.focus();
		        this.userInputElTabIndex = this.userInputEl['tabIndex'];
		        this.userInputEl['tabIndex'] = -100; //disable tab focus for <shift-tab> pressed
		        this.reloadList();
		    };
		    Ng2AutoCompleteComponent.prototype.hideDropdownList = function () {
		        this.inputEl.style.display = 'none';
		        this.dropdownVisible = false;
		        this.userInputEl['tabIndex'] = this.userInputElTabIndex; // enable tab focus
		    };
		    Ng2AutoCompleteComponent.prototype.reloadList = function () {
		        var _this = this;
		        var keyword = this.inputEl.value;
		        this.dropdownVisible = true;
		        if (this.isSrcArr()) {
		            // local source
		            if (keyword.length >= (this.minChars || 0)) {
		                this.filteredList = this.autoComplete.filter(this.source, this.keyword);
		                if (this.maxNumList) {
		                    this.filteredList = this.filteredList.slice(0, this.maxNumList);
		                }
		            }
		        }
		        else {
		            this.isLoading = true;
		            if (keyword.length >= (this.minChars || 0)) {
		                if (typeof this.source === "function") {
		                    // custom function that returns observable 
		                    this.source(keyword).subscribe(function (resp) {
		                        if (_this.pathToData) {
		                            var paths = _this.pathToData.split(".");
		                            paths.forEach(function (prop) { return resp = resp[prop]; });
		                        }
		                        _this.filteredList = resp;
		                        if (_this.maxNumList) {
		                            _this.filteredList = _this.filteredList.slice(0, _this.maxNumList);
		                        }
		                    }, function (error) { return null; }, function () { return _this.isLoading = false; } // complete
		                    );
		                }
		                else {
		                    // remote source
		                    this.autoComplete.getRemoteData(keyword)
		                        .subscribe(function (resp) {
		                        _this.filteredList = resp;
		                        if (_this.maxNumList) {
		                            _this.filteredList = _this.filteredList.slice(0, _this.maxNumList);
		                        }
		                    }, function (error) { return null; }, function () { return _this.isLoading = false; } // complete
		                    );
		                }
		            }
		        }
		    };
		    Ng2AutoCompleteComponent.prototype.selectOne = function (data) {
		        this.hideDropdownList();
		        this.valueSelected.emit(data);
		    };
		    ;
		    Ng2AutoCompleteComponent.prototype.inputElKeyHandler = function (evt) {
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
		    Ng2AutoCompleteComponent.prototype.getFormattedList = function (data) {
		        var formatter = this.listFormatter || this.defaultListFormatter;
		        return formatter.apply(this, [data]);
		    };
		    Ng2AutoCompleteComponent.prototype.defaultListFormatter = function (data) {
		        var html = "";
		        html += data[this.valuePropertyName] ? "<b>(" + data[this.valuePropertyName] + ")</b>" : "";
		        html += data[this.displayPropertyName] ? "<span>" + data[this.displayPropertyName] + "</span>" : data;
		        return html;
		    };
		    __decorate([
		        core_1.Input("list-formatter"), 
		        __metadata('design:type', Function)
		    ], Ng2AutoCompleteComponent.prototype, "listFormatter", void 0);
		    __decorate([
		        core_1.Input("source"), 
		        __metadata('design:type', Object)
		    ], Ng2AutoCompleteComponent.prototype, "source", void 0);
		    __decorate([
		        core_1.Input("path-to-data"), 
		        __metadata('design:type', String)
		    ], Ng2AutoCompleteComponent.prototype, "pathToData", void 0);
		    __decorate([
		        core_1.Input("min-chars"), 
		        __metadata('design:type', Number)
		    ], Ng2AutoCompleteComponent.prototype, "minChars", void 0);
		    __decorate([
		        core_1.Input("value-property-name"), 
		        __metadata('design:type', String)
		    ], Ng2AutoCompleteComponent.prototype, "valuePropertyName", void 0);
		    __decorate([
		        core_1.Input("display-property-name"), 
		        __metadata('design:type', String)
		    ], Ng2AutoCompleteComponent.prototype, "displayPropertyName", void 0);
		    __decorate([
		        core_1.Input("placeholder"), 
		        __metadata('design:type', String)
		    ], Ng2AutoCompleteComponent.prototype, "placeholder", void 0);
		    __decorate([
		        core_1.Input("blank-option-text"), 
		        __metadata('design:type', String)
		    ], Ng2AutoCompleteComponent.prototype, "blankOptionText", void 0);
		    __decorate([
		        core_1.Input("accept-user-input"), 
		        __metadata('design:type', Boolean)
		    ], Ng2AutoCompleteComponent.prototype, "acceptUserInput", void 0);
		    __decorate([
		        core_1.Input("loading-text"), 
		        __metadata('design:type', String)
		    ], Ng2AutoCompleteComponent.prototype, "loadingText", void 0);
		    __decorate([
		        core_1.Input("max-num-list"), 
		        __metadata('design:type', Number)
		    ], Ng2AutoCompleteComponent.prototype, "maxNumList", void 0);
		    __decorate([
		        core_1.Output(), 
		        __metadata('design:type', Object)
		    ], Ng2AutoCompleteComponent.prototype, "valueSelected", void 0);
		    __decorate([
		        core_1.Output(), 
		        __metadata('design:type', Object)
		    ], Ng2AutoCompleteComponent.prototype, "inputChanged", void 0);
		    Ng2AutoCompleteComponent = __decorate([
		        core_1.Component({
		            selector: "ng2-auto-complete",
		            template: "\n  <div class=\"ng2-auto-complete\">\n\n    <!-- keyword input -->\n    <input class=\"keyword\"\n           placeholder=\"{{placeholder}}\"\n           (focus)=\"showDropdownList()\"\n           (blur)=\"hideDropdownList()\"\n           (keydown)=\"inputElKeyHandler($event)\"\n           (input)=\"reloadListInDelay()\"\n           [(ngModel)]=\"keyword\" />\n\n    <!-- dropdown that user can select -->\n    <ul *ngIf=\"dropdownVisible\"\n        [style.bottom]=\"inputEl.style.height\"\n        [style.position]=\"closeToBottom ? 'absolute': ''\">\n      <li *ngIf=\"isLoading\" class=\"loading\">{{loadingText}}</li>\n      <li *ngIf=\"blankOptionText\"\n          (mousedown)=\"selectOne('')\"\n          class=\"blank-item\">{{blankOptionText}}</li>\n      <li class=\"item\"\n          *ngFor=\"let item of filteredList; let i=index\"\n          (mousedown)=\"selectOne(item)\"\n          [ngClass]=\"{selected: i === itemIndex}\"\n          [innerHtml]=\"getFormattedList(item)\">\n      </li>\n    </ul>\n\n  </div>",
		            providers: [ng2_auto_complete_1.Ng2AutoComplete],
		            styles: ["\n  @keyframes slideDown {\n    0% {\n      transform:  translateY(-10px);\n    }\n    100% {\n      transform: translateY(0px);\n    }\n  }\n  .ng2-auto-complete ng2-auto-complete {\n    background-color: transparent;\n  }\n  .ng2-auto-complete ng2-auto-complete input {\n    outline: none;\n    border: 0;\n    padding: 2px; \n    box-sizing: border-box;\n    background-clip: content-box;\n  }\n\n  .ng2-auto-complete ng2-auto-complete ul {\n    background-color: #fff;\n    margin: 0;\n    width : 100%;\n    overflow-y: auto;\n    list-style-type: none;\n    padding: 0;\n    border: 1px solid #ccc;\n    box-sizing: border-box;\n    animation: slideDown 0.1s;\n  }\n\n  .ng2-auto-complete ng2-auto-complete ul li {\n    padding: 2px 5px;\n    border-bottom: 1px solid #eee;\n  }\n\n  .ng2-auto-complete ng2-auto-complete ul li.selected {\n    background-color: #ccc;\n  }\n\n  .ng2-auto-complete ng2-auto-complete ul li:last-child {\n    border-bottom: none;\n  }\n\n  .ng2-auto-complete ng2-auto-complete ul li:hover {\n    background-color: #ccc;\n  }"
		            ],
		            encapsulation: core_1.ViewEncapsulation.None
		        }), 
		        __metadata('design:paramtypes', [core_1.ElementRef, ng2_auto_complete_1.Ng2AutoComplete])
		    ], Ng2AutoCompleteComponent);
		    return Ng2AutoCompleteComponent;
		}());
		exports.Ng2AutoCompleteComponent = Ng2AutoCompleteComponent;
	
	
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
		var core_1 = __webpack_require__(2);
		var ng2_auto_complete_component_1 = __webpack_require__(8);
		/**
		 * display auto-complete section with input and dropdown list when it is clicked
		 */
		var Ng2AutoCompleteDirective = (function () {
		    function Ng2AutoCompleteDirective(resolver, viewContainerRef) {
		        var _this = this;
		        this.resolver = resolver;
		        this.viewContainerRef = viewContainerRef;
		        this.loadingText = "Loading";
		        this.ngModelChange = new core_1.EventEmitter();
		        this.valueChanged = new core_1.EventEmitter();
		        this.hideAutoCompleteDropdown = function (event) {
		            if (_this.componentRef) {
		                if (event && event.type === "click" &&
		                    event.target.tagName !== "INPUT" && !_this.elementIn(event.target, _this.acDropdownEl)) {
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
		            if (_this.componentRef) {
		                var component_1 = _this.componentRef.instance;
		                /* setting width/height auto complete */
		                var thisElBCR = _this.el.getBoundingClientRect();
		                _this.acDropdownEl.style.width = thisElBCR.width + "px";
		                _this.acDropdownEl.style.position = "absolute";
		                _this.acDropdownEl.style.zIndex = "1";
		                _this.acDropdownEl.style.top = "0";
		                _this.acDropdownEl.style.left = "0";
		                _this.acDropdownEl.style.display = "inline-block";
		                var thisInputElBCR_1 = _this.inputEl.getBoundingClientRect();
		                //Fix for Ng1/Ng2 both. on Ng1/Ng2 env. component.ngOnInit kicks in later than we think
		                //Not sure this is a good fix to add another setTimeout
		                setTimeout(function () {
		                    component_1.inputEl.style.width = thisInputElBCR_1.width + "px";
		                    component_1.inputEl.style.height = thisInputElBCR_1.height + "px";
		                    component_1.inputEl.focus();
		                    component_1.closeToBottom = !!(thisInputElBCR_1.bottom + 100 > window.innerHeight);
		                });
		            }
		        };
		        this.componentInputChanged = function (val) {
		            if (_this.acceptUserInput !== false) {
		                _this.inputEl.value = val;
		                (val !== _this.ngModel) && _this.ngModelChange.emit(val);
		                _this.valueChanged.emit(val);
		            }
		        };
		        this.selectNewValue = function (val) {
		            if (val !== '') {
		                val = _this.addToStringFunction(val);
		            }
		            (val !== _this.ngModel) && _this.ngModelChange.emit(val);
		            _this.valueChanged.emit(val);
		            _this.inputEl && (_this.inputEl.value = '' + val);
		            _this.hideAutoCompleteDropdown();
		        };
		        this.el = this.viewContainerRef.element.nativeElement;
		    }
		    Ng2AutoCompleteDirective.prototype.ngOnInit = function () {
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
		    Ng2AutoCompleteDirective.prototype.ngOnDestroy = function () {
		        if (this.componentRef) {
		            this.componentRef.instance.valueSelected.unsubscribe();
		            this.componentRef.instance.inputChanged.unsubscribe();
		        }
		        document.removeEventListener("click", this.hideAutoCompleteDropdown);
		    };
		    Ng2AutoCompleteDirective.prototype.ngOnChanges = function (changes) {
		        if (changes['ngModel']) {
		            this.ngModel = this.addToStringFunction(changes['ngModel'].currentValue);
		        }
		    };
		    //show auto-complete list below the current element
		    Ng2AutoCompleteDirective.prototype.showAutoCompleteDropdown = function () {
		        this.hideAutoCompleteDropdown();
		        var factory = this.resolver.resolveComponentFactory(ng2_auto_complete_component_1.Ng2AutoCompleteComponent);
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
		        component.blankOptionText = this.blankOptionText;
		        component.acceptUserInput = this.acceptUserInput;
		        component.loadingText = this.loadingText;
		        component.maxNumList = parseInt(this.maxNumList, 10);
		        component.valueSelected.subscribe(this.selectNewValue);
		        component.inputChanged.subscribe(this.componentInputChanged);
		        this.acDropdownEl = this.componentRef.location.nativeElement;
		        this.acDropdownEl.style.display = "none";
		        // if this element is not an input tag, move dropdown after input tag
		        // so that it displays correctly
		        this.moveAutocompleteDropDownAfterInputEl();
		        setTimeout(this.styleAutoCompleteDropdown);
		    };
		    Ng2AutoCompleteDirective.prototype.addToStringFunction = function (val) {
		        if (val && typeof val === "object") {
		            var displayVal_1 = val[this.displayPropertyName || "value"];
		            val.toString = function () {
		                return displayVal_1;
		            };
		        }
		        return val;
		    };
		    Ng2AutoCompleteDirective.prototype.moveAutocompleteDropDownAfterInputEl = function () {
		        this.inputEl = this.el;
		        if (this.el.tagName !== "INPUT" && this.acDropdownEl) {
		            this.inputEl = this.el.querySelector("input");
		            this.inputEl.parentElement.insertBefore(this.acDropdownEl, this.inputEl.nextSibling);
		        }
		    };
		    Ng2AutoCompleteDirective.prototype.elementIn = function (el, containerEl) {
		        while (el = el.parentNode) {
		            if (el === containerEl) {
		                return true;
		            }
		        }
		        return false;
		    };
		    __decorate([
		        core_1.Input("auto-complete-placeholder"), 
		        __metadata('design:type', String)
		    ], Ng2AutoCompleteDirective.prototype, "autoCompletePlaceholder", void 0);
		    __decorate([
		        core_1.Input("list-formatter"), 
		        __metadata('design:type', Function)
		    ], Ng2AutoCompleteDirective.prototype, "listFormatter", void 0);
		    __decorate([
		        core_1.Input("source"), 
		        __metadata('design:type', Object)
		    ], Ng2AutoCompleteDirective.prototype, "source", void 0);
		    __decorate([
		        core_1.Input("path-to-data"), 
		        __metadata('design:type', String)
		    ], Ng2AutoCompleteDirective.prototype, "pathToData", void 0);
		    __decorate([
		        core_1.Input("min-chars"), 
		        __metadata('design:type', Number)
		    ], Ng2AutoCompleteDirective.prototype, "minChars", void 0);
		    __decorate([
		        core_1.Input("value-property-name"), 
		        __metadata('design:type', String)
		    ], Ng2AutoCompleteDirective.prototype, "valuePropertyName", void 0);
		    __decorate([
		        core_1.Input("display-property-name"), 
		        __metadata('design:type', String)
		    ], Ng2AutoCompleteDirective.prototype, "displayPropertyName", void 0);
		    __decorate([
		        core_1.Input("blank-option-text"), 
		        __metadata('design:type', String)
		    ], Ng2AutoCompleteDirective.prototype, "blankOptionText", void 0);
		    __decorate([
		        core_1.Input("accept-user-input"), 
		        __metadata('design:type', Boolean)
		    ], Ng2AutoCompleteDirective.prototype, "acceptUserInput", void 0);
		    __decorate([
		        core_1.Input("loading-text"), 
		        __metadata('design:type', String)
		    ], Ng2AutoCompleteDirective.prototype, "loadingText", void 0);
		    __decorate([
		        core_1.Input("max-num-list"), 
		        __metadata('design:type', String)
		    ], Ng2AutoCompleteDirective.prototype, "maxNumList", void 0);
		    __decorate([
		        core_1.Input(), 
		        __metadata('design:type', String)
		    ], Ng2AutoCompleteDirective.prototype, "ngModel", void 0);
		    __decorate([
		        core_1.Output(), 
		        __metadata('design:type', Object)
		    ], Ng2AutoCompleteDirective.prototype, "ngModelChange", void 0);
		    __decorate([
		        core_1.Output(), 
		        __metadata('design:type', Object)
		    ], Ng2AutoCompleteDirective.prototype, "valueChanged", void 0);
		    Ng2AutoCompleteDirective = __decorate([
		        core_1.Directive({
		            selector: "[auto-complete], [ng2-auto-complete]",
		            host: {
		                "(click)": "showAutoCompleteDropdown()",
		                "(focus)": "showAutoCompleteDropdown()"
		            }
		        }), 
		        __metadata('design:paramtypes', [core_1.ComponentFactoryResolver, core_1.ViewContainerRef])
		    ], Ng2AutoCompleteDirective);
		    return Ng2AutoCompleteDirective;
		}());
		exports.Ng2AutoCompleteDirective = Ng2AutoCompleteDirective;
	
	
	/***/ }
	/******/ ])
	});
	;
	//# sourceMappingURL=ng2-auto-complete.umd.js.map

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
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory(__webpack_require__(1), __webpack_require__(2), __webpack_require__(7));
		else if(typeof define === 'function' && define.amd)
			define(["@angular/core", "@angular/forms", "@angular/common"], factory);
		else if(typeof exports === 'object')
			exports["ng2-datetime-picker"] = factory(require("@angular/core"), require("@angular/forms"), require("@angular/common"));
		else
			root["ng2-datetime-picker"] = factory(root["@angular/core"], root["@angular/forms"], root["@angular/common"]);
	})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_7__) {
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
		var ng2_datetime_1 = __webpack_require__(1);
		exports.Ng2Datetime = ng2_datetime_1.Ng2Datetime;
		var ng2_datetime_picker_component_1 = __webpack_require__(3);
		exports.Ng2DatetimePickerComponent = ng2_datetime_picker_component_1.Ng2DatetimePickerComponent;
		var ng2_datetime_picker_directive_1 = __webpack_require__(4);
		exports.Ng2DatetimePickerDirective = ng2_datetime_picker_directive_1.Ng2DatetimePickerDirective;
		var ng2_datetime_picker_module_1 = __webpack_require__(6);
		exports.Ng2DatetimePickerModule = ng2_datetime_picker_module_1.Ng2DatetimePickerModule;
	
	
	/***/ },
	/* 1 */
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
		var core_1 = __webpack_require__(2);
		var Ng2Datetime = (function () {
		    function Ng2Datetime() {
		        this.initialize();
		    }
		    Ng2Datetime.prototype.initialize = function () {
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
		        if (Ng2Datetime.customFirstDayOfWeek !== undefined) {
		            this.firstDayOfWeek = Ng2Datetime.customFirstDayOfWeek;
		        }
		        this.localizedDaysOfWeek = this.daysOfWeek
		            .concat(this.daysOfWeek)
		            .splice(this.firstDayOfWeek, 7);
		    };
		    Ng2Datetime.prototype.getMonthData = function (year, month) {
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
		    Ng2Datetime.momentFormatDate = function (d, dateFormat) {
		        if (typeof moment === 'undefined') {
		            console.error("momentjs is required with dateFormat.\n        please add <script src=\"moment.min.js\"></script>\"> in your html.");
		        }
		        return moment(d).format(dateFormat);
		    };
		    Ng2Datetime.momentParse = function (dateStr, dateFormat) {
		        if (typeof moment === 'undefined') {
		            console.error("momentjs is required with dateFormat.\n        please add <script src=\"moment.min.js\"></script>\"> in your html.");
		        }
		        //return moment(dateStr).toDate();
		        var date = moment(dateStr, dateFormat).toDate();
		        if (isNaN(date.getTime())) {
		            date = moment(dateStr).toDate(); //parse as ISO format
		        }
		        return date;
		    };
		    Ng2Datetime.formatDate = function (d, dateOnly) {
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
		    Ng2Datetime.parse = function (dateStr) {
		        dateStr = Ng2Datetime.removeTimezone(dateStr);
		        dateStr = dateStr + Ng2Datetime.addDSTOffset(dateStr);
		        return Ng2Datetime.getDateFromString(dateStr);
		    };
		    //remove timezone
		    Ng2Datetime.removeTimezone = function (dateStr) {
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
		    Ng2Datetime.addDSTOffset = function (dateStr) {
		        var date = Ng2Datetime.getDateFromString(dateStr);
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
		    Ng2Datetime.getDateFromString = function (dateStr) {
		        var tmp = dateStr.split(/[\+\-:\ T]/); // split by dash, colon or space
		        return new Date(parseInt(tmp[0], 10), parseInt(tmp[1], 10) - 1, parseInt(tmp[2], 10), parseInt(tmp[3] || '0', 10), parseInt(tmp[4] || '0', 10), parseInt(tmp[5] || '0', 10));
		    };
		    Ng2Datetime.setFirstDayOfWeek = function (firstDayOfWeek) {
		        Ng2Datetime.customFirstDayOfWeek = firstDayOfWeek;
		    };
		    Ng2Datetime.customFirstDayOfWeek = 0;
		    Ng2Datetime = __decorate([
		        core_1.Injectable(), 
		        __metadata('design:paramtypes', [])
		    ], Ng2Datetime);
		    return Ng2Datetime;
		}());
		exports.Ng2Datetime = Ng2Datetime;
	
	
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
		var core_1 = __webpack_require__(2);
		var ng2_datetime_1 = __webpack_require__(1);
		//@TODO
		// . display currently selected day
		/**
		 * show a selected date in monthly calendar
		 */
		var Ng2DatetimePickerComponent = (function () {
		    function Ng2DatetimePickerComponent(elementRef, ng2Datetime, cdRef) {
		        this.ng2Datetime = ng2Datetime;
		        this.cdRef = cdRef;
		        this.minuteStep = 1;
		        this.changes = new core_1.EventEmitter();
		        this.closing = new core_1.EventEmitter();
		        this.el = elementRef.nativeElement;
		    }
		    Ng2DatetimePickerComponent.prototype.ngAfterViewInit = function () {
		        var stopPropagation = function (e) { return e.stopPropagation(); };
		        if (!this.dateOnly) {
		            this.hours.nativeElement.addEventListener('keyup', stopPropagation);
		            this.hours.nativeElement.addEventListener('mousedown', stopPropagation);
		            this.minutes.nativeElement.addEventListener('keyup', stopPropagation);
		            this.minutes.nativeElement.addEventListener('mousedown', stopPropagation);
		        }
		    };
		    Object.defineProperty(Ng2DatetimePickerComponent.prototype, "year", {
		        get: function () {
		            return this.selectedDate.getFullYear();
		        },
		        set: function (year) { },
		        enumerable: true,
		        configurable: true
		    });
		    Object.defineProperty(Ng2DatetimePickerComponent.prototype, "month", {
		        get: function () {
		            return this.selectedDate.getMonth();
		        },
		        set: function (month) { },
		        enumerable: true,
		        configurable: true
		    });
		    Object.defineProperty(Ng2DatetimePickerComponent.prototype, "day", {
		        get: function () {
		            return this.selectedDate.getDate();
		        },
		        set: function (day) { },
		        enumerable: true,
		        configurable: true
		    });
		    Object.defineProperty(Ng2DatetimePickerComponent.prototype, "today", {
		        get: function () {
		            var dt = new Date();
		            dt.setHours(0);
		            dt.setMinutes(0);
		            dt.setSeconds(0);
		            dt.setMilliseconds(0);
		            return dt;
		        },
		        set: function (today) { },
		        enumerable: true,
		        configurable: true
		    });
		    Ng2DatetimePickerComponent.prototype.initDatetime = function (date) {
		        this.selectedDate = date || this.defaultValue || new Date();
		        this.hour = this.selectedDate.getHours();
		        this.minute = this.selectedDate.getMinutes();
		        this.monthData = this.ng2Datetime.getMonthData(this.year, this.month);
		    };
		    Ng2DatetimePickerComponent.prototype.toDate = function (day, month) {
		        return new Date(this.monthData.year, month || this.monthData.month, day);
		    };
		    Ng2DatetimePickerComponent.prototype.toDateOnly = function (date) {
		        return new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0, 0);
		    };
		    /**
		     * set the selected date and close it when closeOnSelect is true
		     * @param date {Date}
		     */
		    Ng2DatetimePickerComponent.prototype.selectDate = function (date) {
		        this.selectedDate = date || this.selectedDate;
		        if (this.isDateDisabled(this.selectedDate)) {
		            return false;
		        }
		        this.selectedDate.setHours(parseInt('' + this.hour || '0', 10));
		        this.selectedDate.setMinutes(parseInt('' + this.minute || '0', 10));
		        this.changes.emit(this.selectedDate);
		        this.closing.emit(true);
		    };
		    ;
		    /**
		     * show prev/next month calendar
		     */
		    Ng2DatetimePickerComponent.prototype.updateMonthData = function (num) {
		        this.monthData = this.ng2Datetime.getMonthData(this.monthData.year, this.monthData.month + num);
		    };
		    Ng2DatetimePickerComponent.prototype.isDateDisabled = function (date) {
		        var dateInTime = date.getTime();
		        this.disabledDatesInTime =
		            this.disabledDatesInTime || (this.disabledDates || []).map(function (d) { return d.getTime(); });
		        if (this.minDate && (dateInTime < this.minDate.getTime())) {
		            return true;
		        }
		        else if (this.maxDate && (dateInTime > this.maxDate.getTime())) {
		            return true;
		        }
		        else if (this.disabledDatesInTime.indexOf(dateInTime) >= 0) {
		            return true;
		        }
		        return false;
		    };
		    __decorate([
		        core_1.Input('date-only'), 
		        __metadata('design:type', Boolean)
		    ], Ng2DatetimePickerComponent.prototype, "dateOnly", void 0);
		    __decorate([
		        core_1.Input('time-only'), 
		        __metadata('design:type', Boolean)
		    ], Ng2DatetimePickerComponent.prototype, "timeOnly", void 0);
		    __decorate([
		        core_1.Input('selected-date'), 
		        __metadata('design:type', Date)
		    ], Ng2DatetimePickerComponent.prototype, "selectedDate", void 0);
		    __decorate([
		        core_1.Input('hour'), 
		        __metadata('design:type', Number)
		    ], Ng2DatetimePickerComponent.prototype, "hour", void 0);
		    __decorate([
		        core_1.Input('minute'), 
		        __metadata('design:type', Number)
		    ], Ng2DatetimePickerComponent.prototype, "minute", void 0);
		    __decorate([
		        core_1.Input('minuteStep'), 
		        __metadata('design:type', Number)
		    ], Ng2DatetimePickerComponent.prototype, "minuteStep", void 0);
		    __decorate([
		        core_1.Input('first-day-of-week'), 
		        __metadata('design:type', String)
		    ], Ng2DatetimePickerComponent.prototype, "firstDayOfWeek", void 0);
		    __decorate([
		        core_1.Input('default-value'), 
		        __metadata('design:type', Date)
		    ], Ng2DatetimePickerComponent.prototype, "defaultValue", void 0);
		    __decorate([
		        core_1.Input('min-date'), 
		        __metadata('design:type', Date)
		    ], Ng2DatetimePickerComponent.prototype, "minDate", void 0);
		    __decorate([
		        core_1.Input('max-date'), 
		        __metadata('design:type', Date)
		    ], Ng2DatetimePickerComponent.prototype, "maxDate", void 0);
		    __decorate([
		        core_1.Input('min-hour'), 
		        __metadata('design:type', Number)
		    ], Ng2DatetimePickerComponent.prototype, "minHour", void 0);
		    __decorate([
		        core_1.Input('max-hour'), 
		        __metadata('design:type', Number)
		    ], Ng2DatetimePickerComponent.prototype, "maxHour", void 0);
		    __decorate([
		        core_1.Input('disabled-dates'), 
		        __metadata('design:type', Array)
		    ], Ng2DatetimePickerComponent.prototype, "disabledDates", void 0);
		    __decorate([
		        core_1.Output('changes'), 
		        __metadata('design:type', core_1.EventEmitter)
		    ], Ng2DatetimePickerComponent.prototype, "changes", void 0);
		    __decorate([
		        core_1.Output('closing'), 
		        __metadata('design:type', core_1.EventEmitter)
		    ], Ng2DatetimePickerComponent.prototype, "closing", void 0);
		    __decorate([
		        core_1.ViewChild('hours'), 
		        __metadata('design:type', core_1.ElementRef)
		    ], Ng2DatetimePickerComponent.prototype, "hours", void 0);
		    __decorate([
		        core_1.ViewChild('minutes'), 
		        __metadata('design:type', core_1.ElementRef)
		    ], Ng2DatetimePickerComponent.prototype, "minutes", void 0);
		    Ng2DatetimePickerComponent = __decorate([
		        core_1.Component({
		            providers: [ng2_datetime_1.Ng2Datetime],
		            selector: 'ng2-datetime-picker',
		            template: "\n<div class=\"ng2-datetime-picker\" tabindex=\"0\">\n\n  <!-- Month - Year  -->\n  <div class=\"month\" *ngIf=\"!timeOnly\">\n    <b class=\"prev_next prev\" (click)=\"updateMonthData(-12)\">&laquo;</b>\n    <b class=\"prev_next prev\" (click)=\"updateMonthData(-1)\">&lsaquo;</b>\n     <span title=\"{{ng2Datetime.months[monthData.month]?.fullName}}\">\n           {{ng2Datetime.months[monthData.month]?.shortName}}\n     </span>\n    {{monthData.year}}\n    <b class=\"prev_next next\" (click)=\"updateMonthData(+12)\">&raquo;</b>\n    <b class=\"prev_next next\" (click)=\"updateMonthData(+1)\">&rsaquo;</b>\n  </div>\n\n  <!-- Date -->\n  <div class=\"days\" *ngIf=\"!timeOnly\">\n\n    <!-- Su Mo Tu We Th Fr Sa -->\n    <div class=\"day-of-week\"\n         *ngFor=\"let dayOfWeek of ng2Datetime.localizedDaysOfWeek\"\n         [ngClass]=\"{weekend: dayOfWeek.weekend}\"\n         title=\"{{dayOfWeek.fullName}}\">\n      {{dayOfWeek.shortName}}\n    </div>\n\n    <!-- Fill up blank days for this month -->\n    <div *ngIf=\"monthData.leadingDays.length < 7\">\n      <div class=\"day\" *ngFor=\"let dayNum of monthData.leadingDays\"\n           [ngClass]=\"{weekend: [0,6].indexOf(toDate(dayNum, monthData.month-1).getDay()) !== -1}\">\n        {{dayNum}}\n      </div>\n    </div>\n\n    <div class=\"day\"\n         *ngFor=\"let dayNum of monthData.days\"\n         (click)=\"selectDate(toDate(dayNum))\"\n         title=\"{{monthData.year}}-{{monthData.month+1}}-{{dayNum}}\"\n         [ngClass]=\"{\n           selectable: !isDateDisabled(toDate(dayNum)),\n           selected:\n             toDate(dayNum).getTime() === toDateOnly(selectedDate).getTime(),\n           today:\n             toDate(dayNum).getTime() === today.getTime(),\n           weekend:\n             [0,6].indexOf(toDate(dayNum).getDay()) !== -1\n         }\">\n      {{dayNum}}\n    </div>\n\n    <!-- Fill up blank days for this month -->\n    <div *ngIf=\"monthData.trailingDays.length < 7\">\n      <div class=\"day\"\n           *ngFor=\"let dayNum of monthData.trailingDays\"\n           [ngClass]=\"{weekend: [0,6].indexOf(toDate(dayNum, monthData.month+1).getDay()) !== -1}\">\n        {{dayNum}}\n      </div>\n    </div>\n  </div>\n\n  <!-- Time -->\n  <div class=\"days\" id=\"time\" *ngIf=\"!dateOnly\">\n    <label class=\"timeLabel\">Time:</label>\n    <span class=\"timeValue\">\n      {{(\"0\"+hour).slice(-2)}} : {{(\"0\"+minute).slice(-2)}}\n    </span><br/>\n    <label class=\"hourLabel\">Hour:</label>\n    <input #hours class=\"hourInput\"\n           (change)=\"selectDate()\"\n           type=\"range\"\n           min=\"{{minHour || 0}}\"\n           max=\"{{maxHour || 23}}\"\n           [(ngModel)]=\"hour\" />\n    <label class=\"minutesLabel\">Min:</label>\n    <input #minutes class=\"minutesInput\"\n           step=\"{{minuteStep}}\"\n           (change)=\"selectDate()\"\n           type=\"range\" min=\"0\" max=\"59\" range=\"10\" [(ngModel)]=\"minute\"/>\n  </div>\n</div>\n  ",
		            styles: [
		                "\n @keyframes slideDown {\n  0% {\n    transform:  translateY(-10px);\n  }\n  100% {\n    transform: translateY(0px);\n  }\n}\n\n.ng2-datetime-picker-wrapper {\n  position: relative;\n}\n\n.ng2-datetime-picker {\n    color: #333;\n    outline-width: 0;\n    font: normal 14px sans-serif;\n    border: 1px solid #ddd;\n    display: inline-block;\n    background: #fff;\n    animation: slideDown 0.1s ease-in-out;\n    animation-fill-mode: both;\n}\n.ng2-datetime-picker > .month {\n    text-align: center;\n    line-height: 22px;\n    padding: 10px;\n    background: #fcfcfc;\n    text-transform: uppercase;\n    font-weight: bold;\n    border-bottom: 1px solid #ddd;\n    position: relative;\n}\n.ng2-datetime-picker > .month > .prev_next {\n    color: #555;\n    display: block;\n    font: normal 24px sans-serif;\n    outline: none;\n    background: transparent;\n    border: none;\n    cursor: pointer;\n    width: 15px;\n    text-align: center;\n}\n.ng2-datetime-picker > .month > .prev_next:hover {\n  background-color: #333;\n  color: #fff;\n}\n.ng2-datetime-picker > .month > .prev_next.prev {\n  float: left;\n}\n.ng2-datetime-picker > .month > .prev_next.next {\n  float: right;\n}\n.ng2-datetime-picker > .days {\n    width: 210px; /* 30 x 7 */\n    margin: 10px;\n    text-align: center;\n}\n.ng2-datetime-picker > .days .day-of-week,\n.ng2-datetime-picker > .days .day {\n    box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    border: 1px solid transparent;\n    width: 30px;\n    line-height: 28px;\n    float: left;\n}\n.ng2-datetime-picker > .days .day-of-week {\n    font-weight: bold;\n}\n.ng2-datetime-picker > .days .day-of-week.weekend {\n    color: #ccc;\n    background-color: inherit;\n}\n.ng2-datetime-picker > .days .day:not(.selectable) {\n    color: #ccc;\n    cursor: default;\n}\n.ng2-datetime-picker > .days .weekend {\n    color: #ccc;\n    background-color: #eee;\n}\n.ng2-datetime-picker > .days .day.selectable  {\n    cursor: pointer;\n}\n.ng2-datetime-picker > .days .day.selected {\n    background: gray;\n    color: #fff;\n}\n.ng2-datetime-picker > .days .day:not(.selected).selectable:hover {\n    background: #eee;\n}\n.ng2-datetime-picker > .days:after {\n    content: '';\n    display: block;\n    clear: left;\n    height: 0;\n}\n.ng2-datetime-picker .hourLabel,\n.ng2-datetime-picker .minutesLabel {\n    display: inline-block;\n    width: 40px;\n    text-align: right;\n}\n.ng2-datetime-picker input[type=range] {\n    width: 200px;\n}\n  "
		            ],
		            encapsulation: core_1.ViewEncapsulation.None
		        }), 
		        __metadata('design:paramtypes', [core_1.ElementRef, ng2_datetime_1.Ng2Datetime, core_1.ChangeDetectorRef])
		    ], Ng2DatetimePickerComponent);
		    return Ng2DatetimePickerComponent;
		}());
		exports.Ng2DatetimePickerComponent = Ng2DatetimePickerComponent;
	
	
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
		var __param = (this && this.__param) || function (paramIndex, decorator) {
		    return function (target, key) { decorator(target, key, paramIndex); }
		};
		var core_1 = __webpack_require__(2);
		var forms_1 = __webpack_require__(5);
		var ng2_datetime_picker_component_1 = __webpack_require__(3);
		var ng2_datetime_1 = __webpack_require__(1);
		Number.isInteger = Number.isInteger || function (value) {
		    return typeof value === "number" &&
		        isFinite(value) &&
		        Math.floor(value) === value;
		};
		Number.isNaN = Number.isNaN || function (value) {
		    return value !== value;
		};
		/**
		 * If the given string is not a valid date, it defaults back to today
		 */
		var Ng2DatetimePickerDirective = (function () {
		    function Ng2DatetimePickerDirective(resolver, viewContainerRef, parent) {
		        var _this = this;
		        this.resolver = resolver;
		        this.viewContainerRef = viewContainerRef;
		        this.parent = parent;
		        this.ngModelChange = new core_1.EventEmitter();
		        /* input element string value is changed */
		        this.valueChanged = function (date) {
		            _this.setElement(date);
		            _this.el.value = _this.getFormattedDateStr();
		            if (_this.ctrl) {
		                _this.ctrl.patchValue(_this.el.value);
		            }
		            _this.ngModel = _this.el['dateValue'];
		            if (_this.ngModel) {
		                _this.ngModel.toString = function () { return _this.el.value; };
		                _this.ngModelChange.emit(_this.ngModel);
		            }
		        };
		        this.hideDatetimePicker = function (event) {
		            if (_this.componentRef) {
		                if (event &&
		                    event.type === 'click' &&
		                    event.target !== _this.el &&
		                    !_this.elementIn(event.target, _this.ng2DatetimePickerEl)) {
		                    _this.componentRef.destroy();
		                    _this.componentRef = undefined;
		                }
		                else if (!event) {
		                    _this.componentRef.destroy();
		                    _this.componentRef = undefined;
		                }
		                event && event.stopPropagation();
		            }
		        };
		        this.keyEventListener = function (e) {
		            if (e.keyCode === 27 || e.keyCode === 9 || e.keyCode === 13) {
		                if (!_this.justShown) {
		                    _this.hideDatetimePicker();
		                }
		            }
		        };
		        this.el = this.viewContainerRef.element.nativeElement;
		    }
		    Ng2DatetimePickerDirective.prototype.normalizeInput = function () {
		        if (this.defaultValue && typeof this.defaultValue === 'string') {
		            var d = ng2_datetime_1.Ng2Datetime.parse(this.defaultValue);
		            this.defaultValue = Number.isNaN(d.getTime()) ? new Date() : d;
		        }
		        if (this.minDate && typeof this.minDate == 'string') {
		            var d = ng2_datetime_1.Ng2Datetime.parse(this.minDate);
		            this.minDate = Number.isNaN(d.getTime()) ? new Date() : d;
		        }
		        if (this.maxDate && typeof this.maxDate == 'string') {
		            var d = ng2_datetime_1.Ng2Datetime.parse(this.minDate);
		            this.maxDate = Number.isNaN(d.getTime()) ? new Date() : d;
		        }
		        if (this.minHour) {
		            if (this.minHour instanceof Date) {
		                this.minHour = this.minHour.getHours();
		            }
		            else {
		                var hour = Number(this.minHour.toString());
		                if (!Number.isInteger(hour) || hour > 23 || hour < 0) {
		                    this.minHour = undefined;
		                }
		            }
		        }
		        if (this.maxHour) {
		            if (this.maxHour instanceof Date) {
		                this.maxHour = this.maxHour.getHours();
		            }
		            else {
		                var hour = Number(this.maxHour.toString());
		                if (!Number.isInteger(hour) || hour > 23 || hour < 0) {
		                    this.maxHour = undefined;
		                }
		            }
		        }
		    };
		    Ng2DatetimePickerDirective.prototype.ngOnInit = function () {
		        var _this = this;
		        if (this.firstDayOfWeek) {
		            ng2_datetime_1.Ng2Datetime.customFirstDayOfWeek = parseInt(this.firstDayOfWeek);
		        }
		        if (this.parent && this.formControlName) {
		            if (this.parent["form"]) {
		                this.ctrl = this.parent["form"].get(this.formControlName);
		            }
		            else if (this.parent["name"]) {
		                var formDir = this.parent.formDirective;
		                if (formDir instanceof forms_1.FormGroupDirective && formDir.form.get(this.parent["name"])) {
		                    this.ctrl = formDir.form.get(this.parent["name"]).get(this.formControlName);
		                }
		            }
		            if (this.ctrl) {
		                this.sub = this.ctrl.valueChanges.subscribe(function (date) {
		                    _this.setElement(date);
		                    _this.updateDatepicker();
		                });
		            }
		        }
		        this.normalizeInput();
		        //wrap this element with a <div> tag, so that we can position dynamic elememnt correctly
		        var wrapper = document.createElement("div");
		        wrapper.className = 'ng2-datetime-picker-wrapper';
		        this.el.parentElement.insertBefore(wrapper, this.el.nextSibling);
		        wrapper.appendChild(this.el);
		        // add a click listener to document, so that it can hide when others clicked
		        document.body.addEventListener('click', this.hideDatetimePicker);
		        this.el.addEventListener('keyup', this.keyEventListener);
		        setTimeout(function () {
		            _this.valueChanged(_this.el.value);
		            if (_this.ctrl) {
		                _this.ctrl.markAsPristine();
		            }
		        });
		    };
		    Ng2DatetimePickerDirective.prototype.ngOnChanges = function (changes) {
		        var date;
		        if (changes && changes['ngModel']) {
		            date = changes['ngModel'].currentValue;
		        }
		        this.setElement(date);
		        this.updateDatepicker();
		    };
		    Ng2DatetimePickerDirective.prototype.updateDatepicker = function () {
		        if (this.componentRef) {
		            var component = this.componentRef.instance;
		            component.initDatetime(this.el['dateValue']);
		        }
		    };
		    Ng2DatetimePickerDirective.prototype.setElement = function (date) {
		        if (typeof date === 'string' && date) {
		            this.el['dateValue'] = this.getDate(date);
		        }
		        else if (typeof date === 'object') {
		            this.el['dateValue'] = date;
		        }
		        else if (typeof date === 'undefined') {
		            this.el['dateValue'] = null;
		        }
		        if (this.ctrl) {
		            this.ctrl.markAsDirty();
		        }
		    };
		    Ng2DatetimePickerDirective.prototype.ngOnDestroy = function () {
		        if (this.sub) {
		            this.sub.unsubscribe();
		        }
		        document.body.removeEventListener('click', this.hideDatetimePicker);
		    };
		    //show datetimePicker element below the current element
		    Ng2DatetimePickerDirective.prototype.showDatetimePicker = function (event) {
		        var _this = this;
		        if (this.componentRef) {
		            return;
		        }
		        var factory = this.resolver.resolveComponentFactory(ng2_datetime_picker_component_1.Ng2DatetimePickerComponent);
		        this.componentRef = this.viewContainerRef.createComponent(factory);
		        this.ng2DatetimePickerEl = this.componentRef.location.nativeElement;
		        this.ng2DatetimePickerEl.addEventListener('keyup', this.keyEventListener);
		        var component = this.componentRef.instance;
		        component.defaultValue = this.defaultValue;
		        component.dateOnly = this.dateOnly;
		        component.timeOnly = this.timeOnly;
		        component.minuteStep = this.minuteStep;
		        component.minDate = this.minDate;
		        component.maxDate = this.maxDate;
		        component.minHour = this.minHour;
		        component.maxHour = this.maxHour;
		        component.disabledDates = this.disabledDates;
		        component.firstDayOfWeek = this.firstDayOfWeek;
		        component.initDatetime(this.el['dateValue']);
		        this.styleDatetimePicker();
		        component.changes.subscribe(this.valueChanged);
		        component.closing.subscribe(function () {
		            _this.closeOnSelect !== "false" && _this.hideDatetimePicker();
		        });
		        //Hack not to fire tab keyup event
		        this.justShown = true;
		        setTimeout(function () { return _this.justShown = false; }, 100);
		    };
		    Ng2DatetimePickerDirective.prototype.elementIn = function (el, containerEl) {
		        while (el = el.parentNode) {
		            if (el === containerEl)
		                return true;
		        }
		        return false;
		    };
		    Ng2DatetimePickerDirective.prototype.styleDatetimePicker = function () {
		        var _this = this;
		        // setting position, width, and height of auto complete dropdown
		        var thisElBCR = this.el.getBoundingClientRect();
		        this.ng2DatetimePickerEl.style.width = thisElBCR.width + 'px';
		        this.ng2DatetimePickerEl.style.position = 'absolute';
		        this.ng2DatetimePickerEl.style.zIndex = '1000';
		        this.ng2DatetimePickerEl.style.left = '0';
		        this.ng2DatetimePickerEl.style.transition = 'height 0.3s ease-in';
		        this.ng2DatetimePickerEl.style.visibility = 'hidden';
		        setTimeout(function () {
		            var thisElBcr = _this.el.getBoundingClientRect();
		            var ng2DatetimePickerElBcr = _this.ng2DatetimePickerEl.getBoundingClientRect();
		            if (thisElBcr.bottom + ng2DatetimePickerElBcr.height > window.innerHeight) {
		                _this.ng2DatetimePickerEl.style.bottom =
		                    (thisElBcr.bottom - window.innerHeight + 15) + 'px';
		            }
		            else {
		                // otherwise, show below
		                _this.ng2DatetimePickerEl.style.top = thisElBcr.height + 'px';
		            }
		            _this.ng2DatetimePickerEl.style.visibility = 'visible';
		        });
		    };
		    ;
		    /**
		     *  returns toString function of date object
		     */
		    Ng2DatetimePickerDirective.prototype.getFormattedDateStr = function () {
		        if (this.el['dateValue']) {
		            if (this.dateFormat && typeof moment !== 'undefined') {
		                return ng2_datetime_1.Ng2Datetime.momentFormatDate(this.el['dateValue'], this.dateFormat);
		            }
		            else {
		                return ng2_datetime_1.Ng2Datetime.formatDate(this.el['dateValue'], this.dateOnly);
		            }
		        }
		        else {
		            return null;
		        }
		    };
		    Ng2DatetimePickerDirective.prototype.getDate = function (arg) {
		        var date;
		        if (typeof arg === 'string') {
		            if (this.dateFormat && typeof moment !== 'undefined') {
		                date = ng2_datetime_1.Ng2Datetime.momentParse(arg, this.dateFormat);
		            }
		            else {
		                //remove timezone and respect day light saving time
		                date = ng2_datetime_1.Ng2Datetime.parse(arg);
		            }
		        }
		        else {
		            date = arg;
		        }
		        return date;
		    };
		    __decorate([
		        core_1.Input('date-format'), 
		        __metadata('design:type', String)
		    ], Ng2DatetimePickerDirective.prototype, "dateFormat", void 0);
		    __decorate([
		        core_1.Input('date-only'), 
		        __metadata('design:type', Boolean)
		    ], Ng2DatetimePickerDirective.prototype, "dateOnly", void 0);
		    __decorate([
		        core_1.Input('time-only'), 
		        __metadata('design:type', Boolean)
		    ], Ng2DatetimePickerDirective.prototype, "timeOnly", void 0);
		    __decorate([
		        core_1.Input('close-on-select'), 
		        __metadata('design:type', String)
		    ], Ng2DatetimePickerDirective.prototype, "closeOnSelect", void 0);
		    __decorate([
		        core_1.Input('first-day-of-week'), 
		        __metadata('design:type', String)
		    ], Ng2DatetimePickerDirective.prototype, "firstDayOfWeek", void 0);
		    __decorate([
		        core_1.Input('default-value'), 
		        __metadata('design:type', Object)
		    ], Ng2DatetimePickerDirective.prototype, "defaultValue", void 0);
		    __decorate([
		        core_1.Input('minute-step'), 
		        __metadata('design:type', Number)
		    ], Ng2DatetimePickerDirective.prototype, "minuteStep", void 0);
		    __decorate([
		        core_1.Input('min-date'), 
		        __metadata('design:type', Object)
		    ], Ng2DatetimePickerDirective.prototype, "minDate", void 0);
		    __decorate([
		        core_1.Input('max-date'), 
		        __metadata('design:type', Object)
		    ], Ng2DatetimePickerDirective.prototype, "maxDate", void 0);
		    __decorate([
		        core_1.Input('min-hour'), 
		        __metadata('design:type', Object)
		    ], Ng2DatetimePickerDirective.prototype, "minHour", void 0);
		    __decorate([
		        core_1.Input('max-hour'), 
		        __metadata('design:type', Object)
		    ], Ng2DatetimePickerDirective.prototype, "maxHour", void 0);
		    __decorate([
		        core_1.Input('disabled-dates'), 
		        __metadata('design:type', Array)
		    ], Ng2DatetimePickerDirective.prototype, "disabledDates", void 0);
		    __decorate([
		        core_1.Input(), 
		        __metadata('design:type', String)
		    ], Ng2DatetimePickerDirective.prototype, "formControlName", void 0);
		    __decorate([
		        core_1.Input('ngModel'), 
		        __metadata('design:type', Object)
		    ], Ng2DatetimePickerDirective.prototype, "ngModel", void 0);
		    __decorate([
		        core_1.Output('ngModelChange'), 
		        __metadata('design:type', Object)
		    ], Ng2DatetimePickerDirective.prototype, "ngModelChange", void 0);
		    Ng2DatetimePickerDirective = __decorate([
		        core_1.Directive({
		            selector: '[ng2-datetime-picker]',
		            providers: [ng2_datetime_1.Ng2Datetime],
		            host: {
		                '(click)': 'showDatetimePicker()',
		                '(focus)': 'showDatetimePicker()'
		            }
		        }),
		        __param(2, core_1.Optional()),
		        __param(2, core_1.Host()),
		        __param(2, core_1.SkipSelf()), 
		        __metadata('design:paramtypes', [core_1.ComponentFactoryResolver, core_1.ViewContainerRef, forms_1.ControlContainer])
		    ], Ng2DatetimePickerDirective);
		    return Ng2DatetimePickerDirective;
		}());
		exports.Ng2DatetimePickerDirective = Ng2DatetimePickerDirective;
	
	
	/***/ },
	/* 5 */
	/***/ function(module, exports) {
	
		module.exports = __WEBPACK_EXTERNAL_MODULE_5__;
	
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
		var core_1 = __webpack_require__(2);
		var forms_1 = __webpack_require__(5);
		var common_1 = __webpack_require__(7);
		var ng2_datetime_1 = __webpack_require__(1);
		var ng2_datetime_picker_component_1 = __webpack_require__(3);
		var ng2_datetime_picker_directive_1 = __webpack_require__(4);
		var Ng2DatetimePickerModule = (function () {
		    function Ng2DatetimePickerModule() {
		    }
		    Ng2DatetimePickerModule = __decorate([
		        core_1.NgModule({
		            imports: [common_1.CommonModule, forms_1.FormsModule],
		            declarations: [ng2_datetime_picker_component_1.Ng2DatetimePickerComponent, ng2_datetime_picker_directive_1.Ng2DatetimePickerDirective],
		            exports: [ng2_datetime_picker_component_1.Ng2DatetimePickerComponent, ng2_datetime_picker_directive_1.Ng2DatetimePickerDirective],
		            entryComponents: [ng2_datetime_picker_component_1.Ng2DatetimePickerComponent],
		            providers: [ng2_datetime_1.Ng2Datetime]
		        }), 
		        __metadata('design:paramtypes', [])
		    ], Ng2DatetimePickerModule);
		    return Ng2DatetimePickerModule;
		}());
		exports.Ng2DatetimePickerModule = Ng2DatetimePickerModule;
	
	
	/***/ },
	/* 7 */
	/***/ function(module, exports) {
	
		module.exports = __WEBPACK_EXTERNAL_MODULE_7__;
	
	/***/ }
	/******/ ])
	});
	;
	//# sourceMappingURL=ng2-datetime-picker.umd.js.map

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory(__webpack_require__(1), __webpack_require__(10), __webpack_require__(11), __webpack_require__(7));
		else if(typeof define === 'function' && define.amd)
			define(["@angular/core", "rxjs/Subject", "rxjs/add/operator/debounceTime", "@angular/common"], factory);
		else if(typeof exports === 'object')
			exports["ng2-map"] = factory(require("@angular/core"), require("rxjs/Subject"), require("rxjs/add/operator/debounceTime"), require("@angular/common"));
		else
			root["ng2-map"] = factory(root["@angular/core"], root["rxjs/Subject"], root["rxjs/add/operator/debounceTime"], root["@angular/common"]);
	})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_11__, __WEBPACK_EXTERNAL_MODULE_27__) {
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
		var bicycling_layer_1 = __webpack_require__(1);
		exports.BicyclingLayer = bicycling_layer_1.BicyclingLayer;
		var navigator_geolocation_1 = __webpack_require__(9);
		exports.NavigatorGeolocation = navigator_geolocation_1.NavigatorGeolocation;
		var option_builder_1 = __webpack_require__(5);
		exports.OptionBuilder = option_builder_1.OptionBuilder;
		var ng2_map_component_1 = __webpack_require__(4);
		exports.Ng2MapComponent = ng2_map_component_1.Ng2MapComponent;
		var info_window_1 = __webpack_require__(12);
		exports.InfoWindow = info_window_1.InfoWindow;
		var circle_1 = __webpack_require__(13);
		exports.Circle = circle_1.Circle;
		var data_layer_1 = __webpack_require__(14);
		exports.DataLayer = data_layer_1.DataLayer;
		var directions_renderer_1 = __webpack_require__(15);
		exports.DirectionsRenderer = directions_renderer_1.DirectionsRenderer;
		var geo_coder_1 = __webpack_require__(7);
		exports.GeoCoder = geo_coder_1.GeoCoder;
		var ground_overlay_1 = __webpack_require__(16);
		exports.GroundOverlay = ground_overlay_1.GroundOverlay;
		var heatmap_layer_1 = __webpack_require__(17);
		exports.HeatmapLayer = heatmap_layer_1.HeatmapLayer;
		var kml_layer_1 = __webpack_require__(18);
		exports.KmlLayer = kml_layer_1.KmlLayer;
		var marker_1 = __webpack_require__(19);
		exports.Marker = marker_1.Marker;
		var ng2_map_1 = __webpack_require__(10);
		exports.Ng2Map = ng2_map_1.Ng2Map;
		var places_auto_complete_1 = __webpack_require__(20);
		exports.PlacesAutoComplete = places_auto_complete_1.PlacesAutoComplete;
		var polygon_1 = __webpack_require__(21);
		exports.Polygon = polygon_1.Polygon;
		var polyline_1 = __webpack_require__(22);
		exports.Polyline = polyline_1.Polyline;
		var street_view_panorama_1 = __webpack_require__(23);
		exports.StreetViewPanorama = street_view_panorama_1.StreetViewPanorama;
		var traffic_layer_1 = __webpack_require__(24);
		exports.TrafficLayer = traffic_layer_1.TrafficLayer;
		var transit_layer_1 = __webpack_require__(25);
		exports.TransitLayer = transit_layer_1.TransitLayer;
		var ng2_map_module_1 = __webpack_require__(26);
		exports.Ng2MapModule = ng2_map_module_1.Ng2MapModule;
	
	
	/***/ },
	/* 1 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		var __extends = (this && this.__extends) || function (d, b) {
		    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
		    function __() { this.constructor = d; }
		    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
		};
		var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
		    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
		    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
		    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
		    return c > 3 && r && Object.defineProperty(target, key, r), r;
		};
		var __metadata = (this && this.__metadata) || function (k, v) {
		    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
		};
		var core_1 = __webpack_require__(2);
		var base_map_directive_1 = __webpack_require__(3);
		var ng2_map_component_1 = __webpack_require__(4);
		var INPUTS = [];
		var OUTPUTS = [];
		var BicyclingLayer = (function (_super) {
		    __extends(BicyclingLayer, _super);
		    function BicyclingLayer(ng2MapComp) {
		        _super.call(this, ng2MapComp, 'BicyclingLayer', INPUTS, OUTPUTS);
		    }
		    BicyclingLayer = __decorate([
		        core_1.Directive({
		            selector: 'ng2-map > bicycling-layer',
		            inputs: INPUTS,
		            outputs: OUTPUTS,
		        }), 
		        __metadata('design:paramtypes', [ng2_map_component_1.Ng2MapComponent])
		    ], BicyclingLayer);
		    return BicyclingLayer;
		}(base_map_directive_1.BaseMapDirective));
		exports.BicyclingLayer = BicyclingLayer;
	
	
	/***/ },
	/* 2 */
	/***/ function(module, exports) {
	
		module.exports = __WEBPACK_EXTERNAL_MODULE_2__;
	
	/***/ },
	/* 3 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		var core_1 = __webpack_require__(2);
		var BaseMapDirective = (function () {
		    function BaseMapDirective(ng2MapComponent, mapObjectName, inputs, outputs) {
		        var _this = this;
		        this.ng2MapComponent = ng2MapComponent;
		        this.mapObjectName = mapObjectName;
		        this.inputs = inputs;
		        this.outputs = outputs;
		        this.initialized$ = new core_1.EventEmitter();
		        this.ng2Map = this.ng2MapComponent['ng2Map'];
		        this.optionBuilder = this.ng2MapComponent['optionBuilder'];
		        this.outputs.forEach(function (output) { return _this[output] = new core_1.EventEmitter(); });
		        this.mapObjectName = mapObjectName;
		    }
		    // Initialize this map object when map is ready
		    BaseMapDirective.prototype.ngOnInit = function () {
		        var _this = this;
		        if (this.ng2MapComponent.mapIdledOnce) {
		            this.initialize();
		        }
		        else {
		            this.ng2MapComponent.mapReady$.subscribe(function (map) { return _this.initialize(); });
		        }
		    };
		    // only called when map is ready
		    BaseMapDirective.prototype.initialize = function () {
		        this.objectOptions = this.optionBuilder.googlizeAllInputs(this.inputs, this);
		        // will be set after geocoded
		        typeof this.objectOptions.position === 'string' && (delete this.objectOptions.position);
		        typeof this.objectOptions.center === 'string' && (delete this.objectOptions.center);
		        // noinspection TypeScriptUnresolvedFunction
		        if (this.libraryName) {
		            this.mapObject = new google.maps[this.libraryName][this.mapObjectName](this.objectOptions);
		        }
		        else {
		            this.mapObject = new google.maps[this.mapObjectName](this.objectOptions);
		        }
		        this.mapObject.setMap(this.ng2MapComponent.map);
		        this.mapObject['mapObjectName'] = this.mapObjectName;
		        this.mapObject['ng2MapComponent'] = this.ng2MapComponent;
		        // set google events listeners and emits to this outputs listeners
		        this.ng2Map.setObjectEvents(this.outputs, this, 'mapObject');
		        this.initialized$.emit(this.mapObject);
		    };
		    // When input is changed, update object too.
		    // e.g., when map center is changed by user, update center on the map
		    BaseMapDirective.prototype.ngOnChanges = function (changes) {
		        this.ng2Map.updateGoogleObject(this.mapObject, changes);
		    };
		    // When destroyed, remove event listener, and delete this object to prevent memory leak
		    BaseMapDirective.prototype.ngOnDestroy = function () {
		        var _this = this;
		        if (this.mapObject) {
		            this.outputs.forEach(function (output) { return google.maps.event.clearListeners(_this.mapObject, output); });
		            delete this.mapObject['setMap'](null);
		            delete this.mapObject;
		        }
		    };
		    return BaseMapDirective;
		}());
		exports.BaseMapDirective = BaseMapDirective;
	
	
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
		var core_1 = __webpack_require__(2);
		var option_builder_1 = __webpack_require__(5);
		var navigator_geolocation_1 = __webpack_require__(9);
		var geo_coder_1 = __webpack_require__(7);
		var ng2_map_1 = __webpack_require__(10);
		var Subject_1 = __webpack_require__(8);
		__webpack_require__(11);
		var INPUTS = [
		    'backgroundColor', 'center', 'disableDefaultUI', 'disableDoubleClickZoom', 'draggable', 'draggableCursor',
		    'draggingCursor', 'heading', 'keyboardShortcuts', 'mapMaker', 'mapTypeControl', 'mapTypeId', 'maxZoom', 'minZoom',
		    'noClear', 'overviewMapControl', 'panControl', 'panControlOptions', 'rotateControl', 'scaleControl', 'scrollwheel',
		    'streetView', 'styles', 'tilt', 'zoom', 'streetViewControl', 'zoomControl', 'mapTypeControlOptions',
		    'overviewMapControlOptions', 'rotateControlOptions', 'scaleControlOptions', 'streetViewControlOptions',
		    'options'
		];
		var OUTPUTS = [
		    'mapBoundsChanged', 'mapCenterChanged', 'mapClick', 'mapDblclick', 'mapDrag', 'mapDragend', 'mapDragstart', 'mapHeadingChanged', 'mapIdle',
		    'mapTypeidChanged', 'mapMousemove', 'mapMouseout', 'mapMouseover', 'mapProjectionChanged', 'mapResize', 'mapRightclick',
		    'mapTilesloaded', 'mapTileChanged', 'mapZoomChanged'
		];
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
		        this.inputChanges$ = new Subject_1.Subject();
		        this.mapReady$ = new core_1.EventEmitter();
		        // map objects by group
		        this.infoWindows = {};
		        // map has been fully initialized
		        this.mapIdledOnce = false;
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
		            script.id = 'ng2-map-api';
		            // script.src = "https://maps.google.com/maps/api/js?callback=initNg2Map";
		            var apiUrl = Ng2MapComponent['apiUrl'] || 'https://maps.google.com/maps/api/js';
		            apiUrl += apiUrl.indexOf('?') ? '&' : '?';
		            script.src = apiUrl + 'callback=initNg2Map';
		            document.querySelector('body').appendChild(script);
		        }
		    };
		    Ng2MapComponent.prototype.initializeMap = function () {
		        var _this = this;
		        this.el = this.elementRef.nativeElement.querySelector('.google-map');
		        this.mapOptions = this.optionBuilder.googlizeAllInputs(INPUTS, this);
		        this.mapOptions.zoom = this.mapOptions.zoom || 15;
		        typeof this.mapOptions.center === 'string' && (delete this.mapOptions.center);
		        this.map = new google.maps.Map(this.el, this.mapOptions);
		        this.map['mapObjectName'] = this.constructor['name'];
		        if (!this.mapOptions.center) {
		            this.setCenter();
		        }
		        // set google events listeners and emits to this outputs listeners
		        this.ng2Map.setObjectEvents(OUTPUTS, this, 'map');
		        this.map.addListener('idle', function () {
		            if (!_this.mapIdledOnce) {
		                _this.mapReady$.emit(_this.map);
		                _this.mapIdledOnce = true;
		            }
		        });
		        // update map when input changes
		        this.inputChanges$
		            .debounceTime(1000)
		            .subscribe(function (changes) { return _this.ng2Map.updateGoogleObject(_this.map, changes); });
		    };
		    Ng2MapComponent.prototype.setCenter = function () {
		        var _this = this;
		        if (!this['center']) {
		            this.geolocation.getCurrentPosition().subscribe(function (position) {
		                var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
		                _this.map.setCenter(latLng);
		            });
		        }
		        else if (typeof this['center'] === 'string') {
		            this.geoCoder.geocode({ address: this['center'] }).subscribe(function (results) {
		                _this.map.setCenter(results[0].geometry.location);
		            });
		        }
		    };
		    Ng2MapComponent.prototype.openInfoWindow = function (id, anchor, data) {
		        this.infoWindows[id].open(anchor, data);
		    };
		    Ng2MapComponent.prototype.ngOnDestroy = function () {
		        var _this = this;
		        if (this.el) {
		            OUTPUTS.forEach(function (output) { return google.maps.event.clearListeners(_this.map, output); });
		        }
		    };
		    Ng2MapComponent = __decorate([
		        core_1.Component({
		            selector: 'ng2-map',
		            providers: [ng2_map_1.Ng2Map, option_builder_1.OptionBuilder, geo_coder_1.GeoCoder, navigator_geolocation_1.NavigatorGeolocation],
		            styles: ["\n    ng2-map {display: block; height: 300px;}\n    .google-map {width: 100%; height: 100%}\n  "],
		            inputs: INPUTS,
		            outputs: OUTPUTS,
		            encapsulation: core_1.ViewEncapsulation.None,
		            template: "\n    <div class=\"google-map\"></div>\n    <ng-content></ng-content>\n  ",
		        }), 
		        __metadata('design:paramtypes', [option_builder_1.OptionBuilder, core_1.ElementRef, core_1.NgZone, navigator_geolocation_1.NavigatorGeolocation, geo_coder_1.GeoCoder, ng2_map_1.Ng2Map])
		    ], Ng2MapComponent);
		    return Ng2MapComponent;
		}());
		exports.Ng2MapComponent = Ng2MapComponent;
	
	
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
		var core_1 = __webpack_require__(2);
		var util_1 = __webpack_require__(6);
		var geo_coder_1 = __webpack_require__(7);
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
		        // if options given from user, only take options and ignore other inputs
		        if (userInputs.options) {
		            options = userInputs.options;
		            if (!this.onlyOptionsGiven(definedInputs, userInputs)) {
		                console.error('when "options" are used, other options are ignored');
		            }
		        }
		        else {
		            definedInputs.forEach(function (input) {
		                if (userInputs[input] !== undefined) {
		                    options[input] = _this.googlize(userInputs[input], { key: input });
		                }
		            });
		        }
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
		        var output = input;
		        if (typeof input === 'string') {
		            if (input === 'false') {
		                output = false;
		            }
		            else if (input === '0') {
		                output = 0;
		            }
		            else {
		                output =
		                    // -> googlize -> getJsonParsed -> googlizeMultiple -> googlize until all elements are parsed
		                    this.getJSONParsed(input, options)
		                        || this.getAnyMapObject(input)
		                        || this.getAnyMapConstant(input, options)
		                        || this.getDateObject(input)
		                        || input;
		            }
		        }
		        if (output instanceof Array) {
		            if (options['key'] === 'bounds') {
		                output = new google.maps.LatLngBounds(output[0], output[1]);
		            }
		            else if (options['key'] === 'icons') {
		                output = this.getMapIcons(output);
		            }
		            else if (options['key'] === 'position') {
		                output = this.getLatLng(output);
		            }
		        }
		        else if (options['key'] && output instanceof Object) {
		            if (options['key'] === 'icon') {
		                output = this.getMarkerIcon(output);
		            }
		            else if (options['key'].match(/ControlOptions$/)) {
		                output = this.getMapControlOption(output);
		            }
		        }
		        //delete keys only for processing, not used by google
		        delete output['doNotConverStringToNumber'];
		        delete output['key'];
		        return output;
		    };
		    OptionBuilder.prototype.getLatLng = function (input) {
		        var output;
		        if (input[0].constructor === Array) {
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
		                var exp = 'new google.maps.' + input;
		                // tslint:disable-next-line
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
		                else if (key === 'mapTypeIds') {
		                    value = value.map(function (str) {
		                        if (str.match(/^[A-Z]+$/)) {
		                            return google.maps.MapTypeId[str.toUpperCase()];
		                        }
		                        else {
		                            return str;
		                        }
		                    });
		                }
		                if (key === 'style') {
		                    var objName = key.replace(/Options$/, '') + 'Style';
		                    newControlOptions[key] = google.maps[objName][value];
		                }
		                else if (key === 'position') {
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
		        if (('' + output.path).match(/^[A-Z_]+$/)) {
		            output.path = google.maps.SymbolPath[output.path];
		        }
		        for (var key in output) {
		            var arr = output[key];
		            if (key === 'anchor' || key === 'origin' || key === 'labelOrigin') {
		                output[key] = new google.maps.Point(arr[0], arr[1]);
		            }
		            else if (key === 'size' || key === 'scaledSize') {
		                output[key] = new google.maps.Size(arr[0], arr[1]);
		            }
		        }
		        return output;
		    };
		    OptionBuilder.prototype.onlyOptionsGiven = function (definedInputs, userInputs) {
		        for (var i = 0; i < definedInputs.length; i++) {
		            var input = definedInputs[i];
		            if (input !== 'options' && typeof userInputs[input] !== 'undefined') {
		                return false;
		            }
		        }
		        return true;
		    };
		    OptionBuilder = __decorate([
		        core_1.Injectable(), 
		        __metadata('design:paramtypes', [geo_coder_1.GeoCoder])
		    ], OptionBuilder);
		    return OptionBuilder;
		}());
		exports.OptionBuilder = OptionBuilder;
	
	
	/***/ },
	/* 6 */
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
		        var re = /^[\+\-]?[0-9\.]+,[ ]*\ ?[\+\-]?[0-9\.]+$/; // lat,lng
		        if (input.match(re)) {
		            input = '[' + input + ']';
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
		var core_1 = __webpack_require__(2);
		var Subject_1 = __webpack_require__(8);
		/**
		 *   Provides [defered/promise API](https://docs.angularjs.org/api/ng/service/$q)
		 *   service for Google Geocoder service
		 */
		var GeoCoder = (function () {
		    function GeoCoder() {
		    }
		    GeoCoder.prototype.geocode = function (options) {
		        var geocode$ = new Subject_1.Subject();
		        var geocoder = new google.maps.Geocoder();
		        geocoder.geocode(options, function (results, status) {
		            if (status === google.maps.GeocoderStatus.OK) {
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
		var core_1 = __webpack_require__(2);
		var Subject_1 = __webpack_require__(8);
		/**
		 *  service for navigator.geolocation methods
		 */
		var NavigatorGeolocation = (function () {
		    function NavigatorGeolocation() {
		    }
		    NavigatorGeolocation.prototype.getCurrentPosition = function (geoLocationOptions) {
		        geoLocationOptions = geoLocationOptions || { timeout: 5000 };
		        var getCurrentPosition$ = new Subject_1.Subject();
		        if (navigator.geolocation) {
		            navigator.geolocation.getCurrentPosition(function (position) { return getCurrentPosition$.next(position); }, function (evt) { return getCurrentPosition$.error(evt); }, geoLocationOptions);
		        }
		        else {
		            getCurrentPosition$.error('Browser Geolocation service failed.');
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
		var core_1 = __webpack_require__(2);
		var option_builder_1 = __webpack_require__(5);
		var geo_coder_1 = __webpack_require__(7);
		/**
		 * collection of map instance-related properties and methods
		 */
		var Ng2Map = (function () {
		    function Ng2Map(geoCoder, optionBuilder) {
		        this.geoCoder = geoCoder;
		        this.optionBuilder = optionBuilder;
		    }
		    Ng2Map.prototype.setObjectEvents = function (definedEvents, thisObj, prefix) {
		        definedEvents.forEach(function (definedEvent) {
		            var eventName = definedEvent
		                .replace(/([A-Z])/g, function ($1) { return ("_" + $1.toLowerCase()); });
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
	/* 11 */
	/***/ function(module, exports) {
	
		module.exports = __WEBPACK_EXTERNAL_MODULE_11__;
	
	/***/ },
	/* 12 */
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
		var core_1 = __webpack_require__(2);
		var Subject_1 = __webpack_require__(8);
		__webpack_require__(11);
		var ng2_map_1 = __webpack_require__(10);
		var ng2_map_component_1 = __webpack_require__(4);
		var INPUTS = [
		    'content', 'disableAutoPan', 'maxWidth', 'pixelOffset', 'position', 'zIndex', 'options'
		];
		var OUTPUTS = [
		    'infoWindowCloseclick', 'infoWindowContentChanged', 'infoWindowDomready',
		    'infoWindowPositionChanged', 'infoWindowZindexChanged'
		];
		var InfoWindow = (function () {
		    function InfoWindow(ng2MapComponent, elementRef, ng2Map) {
		        var _this = this;
		        this.ng2MapComponent = ng2MapComponent;
		        this.elementRef = elementRef;
		        this.ng2Map = ng2Map;
		        this.objectOptions = {};
		        this.inputChanges$ = new Subject_1.Subject();
		        this.initialized$ = new core_1.EventEmitter();
		        this.elementRef.nativeElement.style.display = 'none';
		        OUTPUTS.forEach(function (output) { return _this[output] = new core_1.EventEmitter(); });
		    }
		    // Initialize this map object when map is ready
		    InfoWindow.prototype.ngOnInit = function () {
		        var _this = this;
		        if (this.ng2MapComponent.mapIdledOnce) {
		            this.initialize();
		        }
		        else {
		            this.ng2MapComponent.mapReady$.subscribe(function (map) { return _this.initialize(); });
		        }
		    };
		    InfoWindow.prototype.ngOnChanges = function (changes) {
		        this.inputChanges$.next(changes);
		    };
		    // called when map is ready
		    InfoWindow.prototype.initialize = function () {
		        var _this = this;
		        this.template = this.elementRef.nativeElement.innerHTML;
		        this.objectOptions = this.ng2MapComponent.optionBuilder.googlizeAllInputs(INPUTS, this);
		        this.infoWindow = new google.maps.InfoWindow(this.objectOptions);
		        this.infoWindow['mapObjectName'] = this.constructor['name'];
		        // register infoWindow ids to Ng2Map, so that it can be opened by id
		        this.el = this.elementRef.nativeElement;
		        if (this.el.id) {
		            this.ng2MapComponent.infoWindows[this.el.id] = this;
		        }
		        else {
		            console.error('An InfoWindow must have an id. e.g. id="detail"');
		        }
		        // set google events listeners and emits to this outputs listeners
		        this.ng2Map.setObjectEvents(OUTPUTS, this, 'infoWindow');
		        // update object when input changes
		        this.inputChanges$
		            .debounceTime(1000)
		            .subscribe(function (changes) { return _this.ng2Map.updateGoogleObject(_this.infoWindow, changes); });
		        this.initialized$.emit(this.infoWindow);
		    };
		    InfoWindow.prototype.open = function (anchor, data) {
		        var html = this.template;
		        for (var key in data) {
		            this[key] = data[key];
		            html = html.replace("[[" + key + "]]", data[key]);
		        }
		        // set content and open it
		        this.infoWindow.setContent(html);
		        this.infoWindow.open(this.ng2MapComponent.map, anchor);
		    };
		    InfoWindow.prototype.ngOnDestroy = function () {
		        var _this = this;
		        if (this.infoWindow) {
		            OUTPUTS.forEach(function (output) { return google.maps.event.clearListeners(_this.infoWindow, output); });
		            delete this.infoWindow;
		        }
		    };
		    InfoWindow = __decorate([
		        core_1.Component({
		            selector: 'ng2-map>info-window',
		            inputs: INPUTS,
		            outputs: OUTPUTS,
		            template: "<ng-content></ng-content>",
		        }), 
		        __metadata('design:paramtypes', [ng2_map_component_1.Ng2MapComponent, core_1.ElementRef, ng2_map_1.Ng2Map])
		    ], InfoWindow);
		    return InfoWindow;
		}());
		exports.InfoWindow = InfoWindow;
	
	
	/***/ },
	/* 13 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		var __extends = (this && this.__extends) || function (d, b) {
		    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
		    function __() { this.constructor = d; }
		    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
		};
		var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
		    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
		    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
		    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
		    return c > 3 && r && Object.defineProperty(target, key, r), r;
		};
		var __metadata = (this && this.__metadata) || function (k, v) {
		    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
		};
		var core_1 = __webpack_require__(2);
		var base_map_directive_1 = __webpack_require__(3);
		var ng2_map_component_1 = __webpack_require__(4);
		var INPUTS = [
		    'center', 'clickable', 'draggable', 'editable', 'fillColor', 'fillOpacity', 'map', 'radius',
		    'strokeColor', 'strokeOpacity', 'strokePosition', 'strokeWeight', 'visible', 'zIndex', 'options',
		];
		var OUTPUTS = [
		    'centerChanged', 'click', 'dblclick', 'drag', 'dragend', 'dragstart',
		    'mousedown', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'radiusChanged', 'rightclick',
		];
		var Circle = (function (_super) {
		    __extends(Circle, _super);
		    function Circle(ng2MapComp) {
		        _super.call(this, ng2MapComp, 'Circle', INPUTS, OUTPUTS);
		        this.ng2MapComp = ng2MapComp;
		        this.objectOptions = {};
		    }
		    Circle.prototype.initialize = function () {
		        _super.prototype.initialize.call(this);
		        this.setCenter();
		    };
		    Circle.prototype.setCenter = function () {
		        var _this = this;
		        if (!this['center']) {
		            this.ng2MapComp.geolocation.getCurrentPosition().subscribe(function (center) {
		                var latLng = new google.maps.LatLng(center.coords.latitude, center.coords.longitude);
		                _this.mapObject.setCenter(latLng);
		            });
		        }
		        else if (typeof this['center'] === 'string') {
		            this.ng2MapComp.geoCoder.geocode({ address: this['center'] }).subscribe(function (results) {
		                _this.mapObject.setCenter(results[0].geometry.location);
		            });
		        }
		    };
		    Circle = __decorate([
		        core_1.Directive({
		            selector: 'ng2-map>circle',
		            inputs: INPUTS,
		            outputs: OUTPUTS,
		        }), 
		        __metadata('design:paramtypes', [ng2_map_component_1.Ng2MapComponent])
		    ], Circle);
		    return Circle;
		}(base_map_directive_1.BaseMapDirective));
		exports.Circle = Circle;
	
	
	/***/ },
	/* 14 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		var __extends = (this && this.__extends) || function (d, b) {
		    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
		    function __() { this.constructor = d; }
		    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
		};
		var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
		    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
		    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
		    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
		    return c > 3 && r && Object.defineProperty(target, key, r), r;
		};
		var __metadata = (this && this.__metadata) || function (k, v) {
		    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
		};
		var core_1 = __webpack_require__(2);
		var base_map_directive_1 = __webpack_require__(3);
		var ng2_map_component_1 = __webpack_require__(4);
		var INPUTS = ['controlPosition', 'controls', 'drawingMode', 'featureFactory', 'style', 'geoJson'];
		var OUTPUTS = [
		    'addfeature', 'click', 'dblclick', 'mousedown', 'mouseout', 'mouseover',
		    'mouseup', 'removefeature', 'removeproperty', 'rightclick', 'setgeometry', 'setproperty'
		];
		var DataLayer = (function (_super) {
		    __extends(DataLayer, _super);
		    function DataLayer(ng2MapComponent) {
		        _super.call(this, ng2MapComponent, 'Data', INPUTS, OUTPUTS);
		    }
		    // only called when map is ready
		    DataLayer.prototype.initialize = function () {
		        if (this['geoJson']) {
		            this.ng2MapComponent.map.data.loadGeoJson(this['geoJson']);
		        }
		        else {
		            this.objectOptions = this.optionBuilder.googlizeAllInputs(this.inputs, this);
		            this.ng2MapComponent.map.data.add(this.objectOptions);
		        }
		        // unlike others, data belongs to map. e.g., map.data.loadGeoJson(), map.data.add()
		        this.mapObject = this.ng2MapComponent.map.data;
		        // set google events listeners and emits to this outputs listeners
		        this.ng2Map.setObjectEvents(this.outputs, this, 'mapObject');
		        this.initialized$.emit(this.mapObject);
		    };
		    DataLayer = __decorate([
		        core_1.Directive({
		            selector: 'ng2-map > data-layer',
		            inputs: INPUTS,
		            outputs: OUTPUTS,
		        }), 
		        __metadata('design:paramtypes', [ng2_map_component_1.Ng2MapComponent])
		    ], DataLayer);
		    return DataLayer;
		}(base_map_directive_1.BaseMapDirective));
		exports.DataLayer = DataLayer;
	
	
	/***/ },
	/* 15 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		var __extends = (this && this.__extends) || function (d, b) {
		    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
		    function __() { this.constructor = d; }
		    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
		};
		var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
		    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
		    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
		    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
		    return c > 3 && r && Object.defineProperty(target, key, r), r;
		};
		var __metadata = (this && this.__metadata) || function (k, v) {
		    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
		};
		var core_1 = __webpack_require__(2);
		var base_map_directive_1 = __webpack_require__(3);
		var ng2_map_component_1 = __webpack_require__(4);
		var navigator_geolocation_1 = __webpack_require__(9);
		var INPUTS = [
		    'directions', 'draggable', 'hideRouteList', 'infoWindow', 'panel', 'markerOptions',
		    'polylineOptions', 'preserveViewport', 'routeIndex', 'suppressBicyclingLayer',
		    'suppressInfoWindows', 'suppressMarkers', 'suppressPolylines'
		];
		var OUTPUTS = ['directions_changed'];
		var DirectionsRenderer = (function (_super) {
		    __extends(DirectionsRenderer, _super);
		    function DirectionsRenderer(ng2MapComponent, geolocation) {
		        _super.call(this, ng2MapComponent, 'DirectionsRenderer', INPUTS, OUTPUTS);
		        this.geolocation = geolocation;
		    }
		    // only called when map is ready
		    DirectionsRenderer.prototype.initialize = function () {
		        this.objectOptions = this.optionBuilder.googlizeAllInputs(this.inputs, this);
		        this.directionsService = new google.maps.DirectionsService();
		        this.directionsRenderer = new google.maps.DirectionsRenderer(this.objectOptions);
		        this.directionsRenderer.setMap(this.ng2MapComponent.map);
		        // set google events listeners and emidirectionsRenderer to this outputs listeners
		        this.showDirections(this.directionsRequest);
		        this.ng2Map.setObjectEvents(this.outputs, this, 'directionsRenderer');
		        this.initialized$.emit(this.directionsRenderer);
		    };
		    DirectionsRenderer.prototype.ngOnChanges = function (changes) {
		        var newOptions = {};
		        for (var key in changes) {
		            if (this.inputs.indexOf(key) !== -1) {
		                newOptions[key] = this.optionBuilder.googlize(changes[key].currentValue);
		            }
		        }
		        if (changes['directionsRequest'] && this.directionsRenderer) {
		            this.directionsService && this.showDirections(this.directionsRequest);
		        }
		    };
		    DirectionsRenderer.prototype.showDirections = function (directionsRequest) {
		        var _this = this;
		        this.directionsService.route(directionsRequest, function (response, status) {
		            if (status == google.maps.DirectionsStatus.OK) {
		                _this.directionsRenderer.setDirections(response);
		            }
		            else {
		                console.error('Directions request failed due to ' + status);
		            }
		        });
		    };
		    __decorate([
		        core_1.Input('directions-request'), 
		        __metadata('design:type', Object)
		    ], DirectionsRenderer.prototype, "directionsRequest", void 0);
		    DirectionsRenderer = __decorate([
		        core_1.Directive({
		            selector: 'ng2-map > directions-renderer',
		            inputs: INPUTS,
		            outputs: OUTPUTS,
		        }), 
		        __metadata('design:paramtypes', [ng2_map_component_1.Ng2MapComponent, navigator_geolocation_1.NavigatorGeolocation])
		    ], DirectionsRenderer);
		    return DirectionsRenderer;
		}(base_map_directive_1.BaseMapDirective));
		exports.DirectionsRenderer = DirectionsRenderer;
	
	
	/***/ },
	/* 16 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		var __extends = (this && this.__extends) || function (d, b) {
		    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
		    function __() { this.constructor = d; }
		    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
		};
		var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
		    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
		    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
		    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
		    return c > 3 && r && Object.defineProperty(target, key, r), r;
		};
		var __metadata = (this && this.__metadata) || function (k, v) {
		    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
		};
		var core_1 = __webpack_require__(2);
		var base_map_directive_1 = __webpack_require__(3);
		var ng2_map_component_1 = __webpack_require__(4);
		var INPUTS = ['url', 'bounds', 'clickable', 'opacity'];
		var OUTPUTS = ['click', 'dblclick'];
		var GroundOverlay = (function (_super) {
		    __extends(GroundOverlay, _super);
		    function GroundOverlay(ng2MapComp) {
		        _super.call(this, ng2MapComp, 'GroundOverlay', INPUTS, OUTPUTS);
		        this.objectOptions = {};
		    }
		    // re-declaring initialize function. called when map is ready
		    GroundOverlay.prototype.initialize = function () {
		        // url, bounds are not the options of GroundOverlay
		        this.objectOptions = this.optionBuilder.googlizeAllInputs(['clickable', 'opacity'], this);
		        // noinspection TypeScriptUnresolvedFunction
		        this.mapObject = new google.maps.GroundOverlay(this['url'], this['bounds'], this.objectOptions);
		        this.mapObject.setMap(this.ng2MapComponent.map);
		        this.mapObject['mapObjectName'] = this.mapObjectName;
		        // set google events listeners and emits to this outputs listeners
		        this.ng2Map.setObjectEvents(this.outputs, this, 'mapObject');
		    };
		    GroundOverlay = __decorate([
		        core_1.Directive({
		            selector: 'ng2-map > ground-overlay',
		            inputs: INPUTS,
		            outputs: OUTPUTS,
		        }), 
		        __metadata('design:paramtypes', [ng2_map_component_1.Ng2MapComponent])
		    ], GroundOverlay);
		    return GroundOverlay;
		}(base_map_directive_1.BaseMapDirective));
		exports.GroundOverlay = GroundOverlay;
	
	
	/***/ },
	/* 17 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		var __extends = (this && this.__extends) || function (d, b) {
		    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
		    function __() { this.constructor = d; }
		    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
		};
		var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
		    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
		    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
		    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
		    return c > 3 && r && Object.defineProperty(target, key, r), r;
		};
		var __metadata = (this && this.__metadata) || function (k, v) {
		    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
		};
		var core_1 = __webpack_require__(2);
		var base_map_directive_1 = __webpack_require__(3);
		var ng2_map_component_1 = __webpack_require__(4);
		var INPUTS = ['data', 'dissipating', 'gradient', 'maxIntensity', 'opacity', 'radius', 'options'];
		var OUTPUTS = [];
		var HeatmapLayer = (function (_super) {
		    __extends(HeatmapLayer, _super);
		    function HeatmapLayer(ng2MapComp) {
		        _super.call(this, ng2MapComp, 'HeatmapLayer', INPUTS, OUTPUTS);
		        this.libraryName = 'visualization';
		    }
		    HeatmapLayer = __decorate([
		        core_1.Directive({
		            selector: 'ng2-map > heatmap-layer',
		            inputs: INPUTS,
		            outputs: OUTPUTS,
		        }), 
		        __metadata('design:paramtypes', [ng2_map_component_1.Ng2MapComponent])
		    ], HeatmapLayer);
		    return HeatmapLayer;
		}(base_map_directive_1.BaseMapDirective));
		exports.HeatmapLayer = HeatmapLayer;
	
	
	/***/ },
	/* 18 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		var __extends = (this && this.__extends) || function (d, b) {
		    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
		    function __() { this.constructor = d; }
		    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
		};
		var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
		    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
		    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
		    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
		    return c > 3 && r && Object.defineProperty(target, key, r), r;
		};
		var __metadata = (this && this.__metadata) || function (k, v) {
		    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
		};
		var core_1 = __webpack_require__(2);
		var base_map_directive_1 = __webpack_require__(3);
		var ng2_map_component_1 = __webpack_require__(4);
		var INPUTS = ['clickable', 'preserveViewport', 'screenOverlays', 'suppressInfoWindows', 'url', 'zIndex', 'options'];
		var OUTPUTS = ['click', 'defaultviewport_changed', 'status_changed'];
		var KmlLayer = (function (_super) {
		    __extends(KmlLayer, _super);
		    function KmlLayer(ng2MapComp) {
		        _super.call(this, ng2MapComp, 'KmlLayer', INPUTS, OUTPUTS);
		    }
		    KmlLayer = __decorate([
		        core_1.Directive({
		            selector: 'ng2-map > kml-layer',
		            inputs: INPUTS,
		            outputs: OUTPUTS,
		        }), 
		        __metadata('design:paramtypes', [ng2_map_component_1.Ng2MapComponent])
		    ], KmlLayer);
		    return KmlLayer;
		}(base_map_directive_1.BaseMapDirective));
		exports.KmlLayer = KmlLayer;
	
	
	/***/ },
	/* 19 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		var __extends = (this && this.__extends) || function (d, b) {
		    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
		    function __() { this.constructor = d; }
		    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
		};
		var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
		    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
		    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
		    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
		    return c > 3 && r && Object.defineProperty(target, key, r), r;
		};
		var __metadata = (this && this.__metadata) || function (k, v) {
		    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
		};
		var core_1 = __webpack_require__(2);
		var base_map_directive_1 = __webpack_require__(3);
		var ng2_map_component_1 = __webpack_require__(4);
		var INPUTS = [
		    'anchorPoint', 'animation', 'clickable', 'cursor', 'draggable', 'icon', 'label', 'opacity',
		    'optimized', 'place', 'position', 'shape', 'title', 'visible', 'zIndex', 'options'
		];
		var OUTPUTS = [
		    'animationChanged', 'click', 'clickableChanged', 'cursorChanged', 'dblclick', 'drag', 'dragend', 'draggableChanged',
		    'dragstart', 'flatChanged', 'iconChanged', 'mousedown', 'mouseout', 'mouseover', 'mouseup', 'positionChanged', 'rightclick',
		    'dhapeChanged', 'titleChanged', 'visibleChanged', 'zindexChanged'
		];
		var Marker = (function (_super) {
		    __extends(Marker, _super);
		    function Marker(ng2MapComp) {
		        _super.call(this, ng2MapComp, 'Marker', INPUTS, OUTPUTS);
		        this.ng2MapComp = ng2MapComp;
		        this.objectOptions = {};
		    }
		    Marker.prototype.initialize = function () {
		        _super.prototype.initialize.call(this);
		        this.setPosition();
		    };
		    Marker.prototype.setPosition = function () {
		        var _this = this;
		        if (!this['position']) {
		            this.ng2MapComp.geolocation.getCurrentPosition().subscribe(function (position) {
		                var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
		                // console.log('this.marker', this.marker);
		                _this.mapObject.setPosition(latLng);
		            });
		        }
		        else if (typeof this['position'] === 'string') {
		            this.ng2MapComp.geoCoder.geocode({ address: this['position'] }).subscribe(function (results) {
		                // console.log('this.marker', this.marker);
		                _this.mapObject.setPosition(results[0].geometry.location);
		            });
		        }
		    };
		    Marker = __decorate([
		        core_1.Directive({
		            selector: 'ng2-map > marker',
		            inputs: INPUTS,
		            outputs: OUTPUTS,
		        }), 
		        __metadata('design:paramtypes', [ng2_map_component_1.Ng2MapComponent])
		    ], Marker);
		    return Marker;
		}(base_map_directive_1.BaseMapDirective));
		exports.Marker = Marker;
	
	
	/***/ },
	/* 20 */
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
		var core_1 = __webpack_require__(2);
		var option_builder_1 = __webpack_require__(5);
		var ng2_map_component_1 = __webpack_require__(4);
		var PlacesAutoComplete = (function () {
		    function PlacesAutoComplete(optionBuilder, elementRef) {
		        var _this = this;
		        this.optionBuilder = optionBuilder;
		        this.elementRef = elementRef;
		        this.place_changed = new core_1.EventEmitter();
		        this.initialized$ = new core_1.EventEmitter();
		        // only called when map is ready
		        this.initialize = function () {
		            _this.objectOptions =
		                _this.optionBuilder.googlizeAllInputs(['bounds', 'componentRestrictions', 'types'], _this);
		            _this.autocomplete = new google.maps.places.Autocomplete(_this.elementRef.nativeElement, _this.objectOptions);
		            _this.initialized$.emit(_this.autocomplete);
		            _this.autocomplete.addListener('place_changed', function (place) { return _this.place_changed.emit(); });
		        };
		        if (typeof google === 'undefined' || !google.maps.Map) {
		            this.addGoogleMapsApi();
		        }
		        else {
		            this.initialize();
		        }
		    }
		    PlacesAutoComplete.prototype.addGoogleMapsApi = function () {
		        window['initializePlacesAutoComplete'] = this.initialize;
		        if (!window['google'] && !document.querySelector('#ng2-map-api')) {
		            var script = document.createElement('script');
		            script.id = 'ng2-map-api';
		            // script.src = "https://maps.google.com/maps/api/js?callback=initNg2Map";
		            var apiUrl = ng2_map_component_1.Ng2MapComponent['apiUrl'] || 'https://maps.google.com/maps/api/js';
		            apiUrl += apiUrl.indexOf('?') ? '&' : '?';
		            script.src = apiUrl + 'callback=initializePlacesAutoComplete';
		            document.querySelector('body').appendChild(script);
		        }
		    };
		    __decorate([
		        core_1.Input('bounds'), 
		        __metadata('design:type', Object)
		    ], PlacesAutoComplete.prototype, "bounds", void 0);
		    __decorate([
		        core_1.Input('componentRestrictions'), 
		        __metadata('design:type', Object)
		    ], PlacesAutoComplete.prototype, "componentRestrictions", void 0);
		    __decorate([
		        core_1.Input('types'), 
		        __metadata('design:type', Array)
		    ], PlacesAutoComplete.prototype, "types", void 0);
		    __decorate([
		        core_1.Output('place_changed'), 
		        __metadata('design:type', core_1.EventEmitter)
		    ], PlacesAutoComplete.prototype, "place_changed", void 0);
		    __decorate([
		        core_1.Output('initialized$'), 
		        __metadata('design:type', core_1.EventEmitter)
		    ], PlacesAutoComplete.prototype, "initialized$", void 0);
		    PlacesAutoComplete = __decorate([
		        core_1.Directive({
		            selector: '[places-auto-complete]'
		        }), 
		        __metadata('design:paramtypes', [option_builder_1.OptionBuilder, core_1.ElementRef])
		    ], PlacesAutoComplete);
		    return PlacesAutoComplete;
		}());
		exports.PlacesAutoComplete = PlacesAutoComplete;
	
	
	/***/ },
	/* 21 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		var __extends = (this && this.__extends) || function (d, b) {
		    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
		    function __() { this.constructor = d; }
		    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
		};
		var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
		    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
		    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
		    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
		    return c > 3 && r && Object.defineProperty(target, key, r), r;
		};
		var __metadata = (this && this.__metadata) || function (k, v) {
		    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
		};
		var core_1 = __webpack_require__(2);
		var base_map_directive_1 = __webpack_require__(3);
		var ng2_map_component_1 = __webpack_require__(4);
		var INPUTS = [
		    'clickable', 'draggable', 'editable', 'fillColor', 'fillOpacity', 'geodesic', 'paths',
		    'strokeColor', 'strokeOpacity', 'strokePosition', 'strokeWeight', 'visible', 'zIndex', 'options',
		];
		var OUTPUTS = [
		    'click', 'dblclick', 'drag', 'dragend', 'dragstart', 'mousedown',
		    'mousemove', 'mouseout', 'mouseover', 'mouseup', 'rightclick',
		];
		var Polygon = (function (_super) {
		    __extends(Polygon, _super);
		    function Polygon(ng2MapComp) {
		        _super.call(this, ng2MapComp, 'Polygon', INPUTS, OUTPUTS);
		    }
		    Polygon = __decorate([
		        core_1.Directive({
		            selector: 'ng2-map>polygon',
		            inputs: INPUTS,
		            outputs: OUTPUTS,
		        }), 
		        __metadata('design:paramtypes', [ng2_map_component_1.Ng2MapComponent])
		    ], Polygon);
		    return Polygon;
		}(base_map_directive_1.BaseMapDirective));
		exports.Polygon = Polygon;
	
	
	/***/ },
	/* 22 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		var __extends = (this && this.__extends) || function (d, b) {
		    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
		    function __() { this.constructor = d; }
		    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
		};
		var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
		    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
		    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
		    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
		    return c > 3 && r && Object.defineProperty(target, key, r), r;
		};
		var __metadata = (this && this.__metadata) || function (k, v) {
		    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
		};
		var core_1 = __webpack_require__(2);
		var base_map_directive_1 = __webpack_require__(3);
		var ng2_map_component_1 = __webpack_require__(4);
		var INPUTS = [
		    'clickable', 'draggable', 'editable', 'geodesic', 'icons', 'path', 'strokeColor',
		    'strokeOpacity', 'strokeWeight', 'visible', 'zIndex', 'options'
		];
		var OUTPUTS = [
		    'click', 'dblclick', 'drag', 'dragend', 'dragstart', 'mousedown',
		    'mousemove', 'mouseout', 'mouseover', 'mouseup', 'rightclick'
		];
		var Polyline = (function (_super) {
		    __extends(Polyline, _super);
		    function Polyline(ng2MapComp) {
		        _super.call(this, ng2MapComp, 'Polyline', INPUTS, OUTPUTS);
		    }
		    Polyline = __decorate([
		        core_1.Directive({
		            selector: 'ng2-map > polyline',
		            inputs: INPUTS,
		            outputs: OUTPUTS,
		        }), 
		        __metadata('design:paramtypes', [ng2_map_component_1.Ng2MapComponent])
		    ], Polyline);
		    return Polyline;
		}(base_map_directive_1.BaseMapDirective));
		exports.Polyline = Polyline;
	
	
	/***/ },
	/* 23 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		var __extends = (this && this.__extends) || function (d, b) {
		    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
		    function __() { this.constructor = d; }
		    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
		};
		var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
		    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
		    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
		    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
		    return c > 3 && r && Object.defineProperty(target, key, r), r;
		};
		var __metadata = (this && this.__metadata) || function (k, v) {
		    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
		};
		var core_1 = __webpack_require__(2);
		var base_map_directive_1 = __webpack_require__(3);
		var ng2_map_component_1 = __webpack_require__(4);
		var INPUTS = [
		    'selector', 'options',
		    'addressControl', 'addressControlOptions', 'clickToGo', 'disableDefaultUI', 'disableDoubleClickZoom',
		    'enableCloseButton', 'fullscreenControl', 'fullscreenControlOptions', 'imageDateControl', 'linksControl',
		    'motionTracking', 'motionTrackingControl', 'panControl', 'panControlOptions', 'pano',
		    'position', 'pov', 'scrollwheel', 'showRoadLabels', 'visible', 'zoomControl', 'zoomControlOptions'
		];
		var OUTPUTS = [
		    'closeclick', 'pano_changed', 'position_changed', 'pov_changed', 'resize', 'status_changed',
		    'visible_changed', 'zoom_changed'
		];
		var StreetViewPanorama = (function (_super) {
		    __extends(StreetViewPanorama, _super);
		    function StreetViewPanorama(ng2MapComp) {
		        _super.call(this, ng2MapComp, 'StreetViewPanorama', INPUTS, OUTPUTS);
		    }
		    // only called when map is ready
		    StreetViewPanorama.prototype.initialize = function () {
		        this.objectOptions = this.optionBuilder.googlizeAllInputs(this.inputs, this);
		        var element;
		        if (this.objectOptions.selector) {
		            //noinspection TypeScriptValidateTypes
		            element = document.querySelector(this['selector']);
		            delete this.objectOptions.selector;
		        }
		        else {
		            element = this.ng2MapComponent.el;
		        }
		        // will be set after geocoded
		        typeof this.objectOptions.position === 'string' && (delete this.objectOptions.position);
		        this.mapObject = new google.maps[this.mapObjectName](element, this.objectOptions);
		        this.mapObject['mapObjectName'] = this.mapObjectName;
		        this.mapObject['ng2MapComponent'] = this.ng2MapComponent;
		        // set google events listeners and emits to this outputs listeners
		        this.ng2Map.setObjectEvents(this.outputs, this, 'mapObject');
		        this.initialized$.emit(this.mapObject);
		    };
		    // When destroyed, remove event listener, and delete this object to prevent memory leak
		    StreetViewPanorama.prototype.ngOnDestroy = function () {
		        var _this = this;
		        if (this.ng2MapComponent.el) {
		            OUTPUTS.forEach(function (output) { return google.maps.event.clearListeners(_this.mapObject, output); });
		        }
		    };
		    StreetViewPanorama = __decorate([
		        core_1.Directive({
		            selector: 'ng2-map > street-view-panorama',
		            inputs: INPUTS,
		            outputs: OUTPUTS,
		        }), 
		        __metadata('design:paramtypes', [ng2_map_component_1.Ng2MapComponent])
		    ], StreetViewPanorama);
		    return StreetViewPanorama;
		}(base_map_directive_1.BaseMapDirective));
		exports.StreetViewPanorama = StreetViewPanorama;
	
	
	/***/ },
	/* 24 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		var __extends = (this && this.__extends) || function (d, b) {
		    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
		    function __() { this.constructor = d; }
		    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
		};
		var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
		    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
		    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
		    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
		    return c > 3 && r && Object.defineProperty(target, key, r), r;
		};
		var __metadata = (this && this.__metadata) || function (k, v) {
		    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
		};
		var core_1 = __webpack_require__(2);
		var base_map_directive_1 = __webpack_require__(3);
		var ng2_map_component_1 = __webpack_require__(4);
		var INPUTS = ['autoRefresh', 'options'];
		var OUTPUTS = [];
		var TrafficLayer = (function (_super) {
		    __extends(TrafficLayer, _super);
		    function TrafficLayer(ng2MapComp) {
		        _super.call(this, ng2MapComp, 'TrafficLayer', INPUTS, OUTPUTS);
		    }
		    TrafficLayer = __decorate([
		        core_1.Directive({
		            selector: 'ng2-map > traffic-layer',
		            inputs: INPUTS,
		            outputs: OUTPUTS,
		        }), 
		        __metadata('design:paramtypes', [ng2_map_component_1.Ng2MapComponent])
		    ], TrafficLayer);
		    return TrafficLayer;
		}(base_map_directive_1.BaseMapDirective));
		exports.TrafficLayer = TrafficLayer;
	
	
	/***/ },
	/* 25 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		var __extends = (this && this.__extends) || function (d, b) {
		    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
		    function __() { this.constructor = d; }
		    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
		};
		var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
		    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
		    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
		    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
		    return c > 3 && r && Object.defineProperty(target, key, r), r;
		};
		var __metadata = (this && this.__metadata) || function (k, v) {
		    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
		};
		var core_1 = __webpack_require__(2);
		var base_map_directive_1 = __webpack_require__(3);
		var ng2_map_component_1 = __webpack_require__(4);
		var INPUTS = [];
		var OUTPUTS = [];
		var TransitLayer = (function (_super) {
		    __extends(TransitLayer, _super);
		    function TransitLayer(ng2MapComp) {
		        _super.call(this, ng2MapComp, 'TransitLayer', INPUTS, OUTPUTS);
		    }
		    TransitLayer = __decorate([
		        core_1.Directive({
		            selector: 'ng2-map > transit-layer',
		            inputs: INPUTS,
		            outputs: OUTPUTS,
		        }), 
		        __metadata('design:paramtypes', [ng2_map_component_1.Ng2MapComponent])
		    ], TransitLayer);
		    return TransitLayer;
		}(base_map_directive_1.BaseMapDirective));
		exports.TransitLayer = TransitLayer;
	
	
	/***/ },
	/* 26 */
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
		var core_1 = __webpack_require__(2);
		var common_1 = __webpack_require__(27);
		var option_builder_1 = __webpack_require__(5);
		var geo_coder_1 = __webpack_require__(7);
		var navigator_geolocation_1 = __webpack_require__(9);
		var ng2_map_component_1 = __webpack_require__(4);
		var info_window_1 = __webpack_require__(12);
		var bicycling_layer_1 = __webpack_require__(1);
		var circle_1 = __webpack_require__(13);
		var data_layer_1 = __webpack_require__(14);
		var directions_renderer_1 = __webpack_require__(15);
		var ground_overlay_1 = __webpack_require__(16);
		var heatmap_layer_1 = __webpack_require__(17);
		var kml_layer_1 = __webpack_require__(18);
		var marker_1 = __webpack_require__(19);
		var ng2_map_1 = __webpack_require__(10);
		var places_auto_complete_1 = __webpack_require__(20);
		var polygon_1 = __webpack_require__(21);
		var polyline_1 = __webpack_require__(22);
		var street_view_panorama_1 = __webpack_require__(23);
		var traffic_layer_1 = __webpack_require__(24);
		var transit_layer_1 = __webpack_require__(25);
		var COMPONENTS_DIRECTIVES = [
		    ng2_map_component_1.Ng2MapComponent, info_window_1.InfoWindow,
		    marker_1.Marker, circle_1.Circle, polygon_1.Polygon, info_window_1.InfoWindow, polyline_1.Polyline, ground_overlay_1.GroundOverlay,
		    transit_layer_1.TransitLayer, traffic_layer_1.TrafficLayer, heatmap_layer_1.HeatmapLayer, bicycling_layer_1.BicyclingLayer, kml_layer_1.KmlLayer, data_layer_1.DataLayer,
		    street_view_panorama_1.StreetViewPanorama, places_auto_complete_1.PlacesAutoComplete, directions_renderer_1.DirectionsRenderer
		];
		var Ng2MapModule = (function () {
		    function Ng2MapModule() {
		    }
		    Ng2MapModule = __decorate([
		        core_1.NgModule({
		            imports: [common_1.CommonModule],
		            declarations: COMPONENTS_DIRECTIVES,
		            providers: [geo_coder_1.GeoCoder, navigator_geolocation_1.NavigatorGeolocation, ng2_map_1.Ng2Map, option_builder_1.OptionBuilder],
		            exports: [COMPONENTS_DIRECTIVES]
		        }), 
		        __metadata('design:paramtypes', [])
		    ], Ng2MapModule);
		    return Ng2MapModule;
		}());
		exports.Ng2MapModule = Ng2MapModule;
	
	
	/***/ },
	/* 27 */
	/***/ function(module, exports) {
	
		module.exports = __WEBPACK_EXTERNAL_MODULE_27__;
	
	/***/ }
	/******/ ])
	});
	;
	//# sourceMappingURL=ng2-map.umd.js.map

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_10__;

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_11__;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory(__webpack_require__(1), __webpack_require__(2), __webpack_require__(7));
		else if(typeof define === 'function' && define.amd)
			define(["@angular/core", "@angular/forms", "@angular/common"], factory);
		else if(typeof exports === 'object')
			exports["ng2-popup"] = factory(require("@angular/core"), require("@angular/forms"), require("@angular/common"));
		else
			root["ng2-popup"] = factory(root["@angular/core"], root["@angular/forms"], root["@angular/common"]);
	})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__) {
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
		var ng2_popup_component_1 = __webpack_require__(1);
		exports.Ng2PopupComponent = ng2_popup_component_1.Ng2PopupComponent;
		var ng2_message_popup_component_1 = __webpack_require__(6);
		exports.Ng2MessagePopupComponent = ng2_message_popup_component_1.Ng2MessagePopupComponent;
		var ng2_popup_module_1 = __webpack_require__(7);
		exports.Ng2PopupModule = ng2_popup_module_1.Ng2PopupModule;
	
	
	/***/ },
	/* 1 */
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
		var core_1 = __webpack_require__(2);
		var ng2_overlay_1 = __webpack_require__(3);
		var Ng2PopupComponent = (function () {
		    function Ng2PopupComponent(componentResolver, overlayManager) {
		        this.componentResolver = componentResolver;
		        this.overlayManager = overlayManager;
		    }
		    Ng2PopupComponent.prototype.ngAfterViewInit = function () {
		        var overlayEl = this.marker.element.nativeElement.parentElement.parentElement;
		        var overlay = new ng2_overlay_1.Ng2Overlay(overlayEl, {
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
		    return Ng2PopupComponent;
		}());
		__decorate([
		    core_1.ViewChild('marker', { read: core_1.ViewContainerRef }),
		    __metadata("design:type", Object)
		], Ng2PopupComponent.prototype, "marker", void 0);
		Ng2PopupComponent = __decorate([
		    core_1.Component({
		        selector: 'ng2-popup',
		        directives: [ng2_overlay_1.Ng2OverlayDirective],
		        providers: [ng2_overlay_1.Ng2OverlayManager],
		        template: "\n    <div id=\"ng2-popup-overlay\"> <!-- <-- this is overlay -->\n      <div class=\"popup-container {{classNames}}\" [ngClass]=\"{opened: opened}\">\n        <div *ngIf=\"closeButton != false\" class=\"close-popup\" (click)=\"close()\">x</div>\n        <div class=\"marker\" #marker></div> <!-- to position popup component -->\n        <!-- popup component will be here -->\n      </div>\n    </div>\n  ",
		        styles: ["\n    .popup-container { \n      background: #fff;\n      border: 1px solid #ccc;\n      box-shadow: 0 5px 15px rgba(0,0,0,.5);\n      border-radius: 5px;\n      width: 600px;\n      display: none;\n    }\n    .popup-container.opened { \n      display: block;\n    }\n    .close-popup {\n      font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n      float: right; \n      cursor: pointer; \n      font-size: 21px;\n      line-height: 1;\n      text-shadow: 0 1px 0 #fff;\n      opacity: 0.2;\n      padding: 10px;\n    }\n    /*.marker ~ * { display:block; background: #fff}*/\n    .popup-container.small { width: 300px}\n    .popup-container.large { width: 900px}\n  "],
		        encapsulation: core_1.ViewEncapsulation.None
		    }),
		    __metadata("design:paramtypes", [core_1.ComponentFactoryResolver,
		        ng2_overlay_1.Ng2OverlayManager])
		], Ng2PopupComponent);
		exports.Ng2PopupComponent = Ng2PopupComponent;
	
	
	/***/ },
	/* 2 */
	/***/ function(module, exports) {
	
		module.exports = __WEBPACK_EXTERNAL_MODULE_2__;
	
	/***/ },
	/* 3 */
	/***/ function(module, exports, __webpack_require__) {
	
		(function webpackUniversalModuleDefinition(root, factory) {
			if(true)
				module.exports = factory(__webpack_require__(2), __webpack_require__(4), __webpack_require__(5));
			else if(typeof define === 'function' && define.amd)
				define(["@angular/core", "@angular/forms", "@angular/common"], factory);
			else if(typeof exports === 'object')
				exports["ng2-overlay"] = factory(require("@angular/core"), require("@angular/forms"), require("@angular/common"));
			else
				root["ng2-overlay"] = factory(root["@angular/core"], root["@angular/forms"], root["@angular/common"]);
		})(this, function(__WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_8__) {
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
			var ng2_overlay_1 = __webpack_require__(1);
			exports.Ng2Overlay = ng2_overlay_1.Ng2Overlay;
			var ng2_overlay_manager_1 = __webpack_require__(3);
			exports.Ng2OverlayManager = ng2_overlay_manager_1.Ng2OverlayManager;
			var ng2_overlay_directive_1 = __webpack_require__(5);
			exports.Ng2OverlayDirective = ng2_overlay_directive_1.Ng2OverlayDirective;
			var ng2_overlay_module_1 = __webpack_require__(6);
			exports.Ng2OverlayModule = ng2_overlay_module_1.Ng2OverlayModule;
		
		
		/***/ },
		/* 1 */
		/***/ function(module, exports, __webpack_require__) {
		
			"use strict";
			var ng2_util_1 = __webpack_require__(2);
			var Ng2Overlay = (function () {
			    function Ng2Overlay(el, options) {
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
			    Ng2Overlay.prototype.positionIt = function (event) {
			        if (this.position.inside) {
			            this.positionItInside(this.position);
			        }
			        else {
			            this.positionItOutside(this.position, event);
			        }
			    };
			    Ng2Overlay.prototype.getPositionProperty = function (positionStr) {
			        var position = {}, inside;
			        var _a = positionStr.split(' '), vertical = _a[0], horizontal = _a[1], insideStr = _a[2];
			        horizontal = horizontal || 'center';
			        vertical = vertical || 'center';
			        inside = (insideStr !== 'outside' || this.windowOverlay);
			        position.horizontal = Ng2Overlay[horizontal.toUpperCase()];
			        position.vertical = Ng2Overlay[vertical.toUpperCase()];
			        position.inside = inside;
			        return position;
			    };
			    Ng2Overlay.prototype.positionItInside = function (position) {
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
			            case Ng2Overlay.LEFT:
			                this.element.style.justifyContent = 'flex-start';
			                break;
			            case Ng2Overlay.CENTER:
			                this.element.style.justifyContent = 'center';
			                break;
			            case Ng2Overlay.RIGHT:
			                this.element.style.justifyContent = 'flex-end';
			                break;
			        }
			        //vertical position
			        switch (position.vertical) {
			            case Ng2Overlay.LEFT:
			                this.element.style.alignItems = 'flex-start';
			                break;
			            case Ng2Overlay.CENTER:
			            case Ng2Overlay.MIDDLE:
			                this.element.style.alignItems = 'center';
			                break;
			            case Ng2Overlay.RIGHT:
			                this.element.style.alignItems = 'flex-end';
			                break;
			        }
			    };
			    Ng2Overlay.prototype.positionItOutside = function (position, event) {
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
			            case Ng2Overlay.TOP:
			                elToPosition.style.bottom = this.element.offsetHeight + 'px';
			                break;
			            case Ng2Overlay.BOTTOM:
			                elToPosition.style.top = this.element.offsetHeight + 'px';
			                break;
			            case Ng2Overlay.LEFT:
			                elToPosition.style.right = this.element.offsetWidth + 'px';
			                break;
			            case Ng2Overlay.RIGHT:
			                elToPosition.style.left = this.element.offsetWidth + 'px';
			                break;
			        }
			        switch (position.horizontal) {
			            case Ng2Overlay.CENTER:
			                elToPosition.style.left = (this.element.offsetWidth - elToPosition.offsetWidth) / 2 + 'px';
			                break;
			            case Ng2Overlay.LEFT:
			                elToPosition.style.left = '0';
			                break;
			            case Ng2Overlay.RIGHT:
			                elToPosition.style.right = '0';
			                break;
			            case Ng2Overlay.TOP:
			                elToPosition.style.top = '0';
			                break;
			            case Ng2Overlay.BOTTOM:
			                elToPosition.style.bottom = '0';
			                break;
			            case Ng2Overlay.CURSOR:
			                var mousePos = ng2_util_1.Ng2Util.getMousePositionInElement(event, this.element);
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
			    Ng2Overlay.TOP = 11;
			    Ng2Overlay.MIDDLE = 12;
			    Ng2Overlay.BOTTOM = 13;
			    Ng2Overlay.LEFT = 21;
			    Ng2Overlay.CENTER = 22;
			    Ng2Overlay.RIGHT = 23;
			    Ng2Overlay.CURSOR = 31;
			    return Ng2Overlay;
			}());
			exports.Ng2Overlay = Ng2Overlay;
		
		
		/***/ },
		/* 2 */
		/***/ function(module, exports) {
		
			"use strict";
			var Ng2Util = (function () {
			    function Ng2Util() {
			    }
			    Ng2Util.getDocumentPosition = function (oElement) {
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
			    Ng2Util.getMousePositionInElement = function (evt, element) {
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
			    return Ng2Util;
			}());
			exports.Ng2Util = Ng2Util;
		
		
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
			var core_1 = __webpack_require__(4);
			var Ng2OverlayManager = (function () {
			    function Ng2OverlayManager() {
			    }
			    Ng2OverlayManager.prototype.register = function (overlay) {
			        Ng2OverlayManager.overlays[overlay.id] = overlay;
			        // console.log('overlay.register, OverlayManager.overlays', OverlayManager.overlays);
			    };
			    Ng2OverlayManager.prototype.open = function (arg, event) {
			        var overlay = typeof arg === 'string' ? Ng2OverlayManager.overlays[arg] : arg;
			        if (!overlay.opened) {
			            overlay.positionIt(event);
			            overlay.opened = true;
			        }
			    };
			    Ng2OverlayManager.prototype.close = function (arg) {
			        var overlay = typeof arg === 'string' ? Ng2OverlayManager.overlays[arg] : arg;
			        overlay.element.style.display = 'none';
			        overlay.opened = false;
			    };
			    //list of overlay objects
			    Ng2OverlayManager.overlays = {};
			    Ng2OverlayManager = __decorate([
			        core_1.Injectable(), 
			        __metadata('design:paramtypes', [])
			    ], Ng2OverlayManager);
			    return Ng2OverlayManager;
			}());
			exports.Ng2OverlayManager = Ng2OverlayManager;
		
		
		/***/ },
		/* 4 */
		/***/ function(module, exports) {
		
			module.exports = __WEBPACK_EXTERNAL_MODULE_4__;
		
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
			var core_1 = __webpack_require__(4);
			var ng2_overlay_manager_1 = __webpack_require__(3);
			var ng2_overlay_1 = __webpack_require__(1);
			var Ng2OverlayDirective = (function () {
			    function Ng2OverlayDirective(viewContainerRef, overlayManager) {
			        this.viewContainerRef = viewContainerRef;
			        this.overlayManager = overlayManager;
			        this.el = this.viewContainerRef.element.nativeElement;
			    }
			    Ng2OverlayDirective.prototype.ngAfterViewInit = function () {
			        this.wrapItWithOverlayTag();
			        this.registerToOverlayManager();
			    };
			    Ng2OverlayDirective.prototype.wrapItWithOverlayTag = function () {
			        //console.log('wrapped overlay directive element with <ng2-overlay>');
			        this.overlayEl = document.createElement('ng2-overlay');
			        this.overlayEl.style.display = 'none';
			        this.el.parentElement.insertBefore(this.overlayEl, this.el.nextSibling);
			        this.overlayEl.appendChild(this.el);
			    };
			    //create Overlay object,  then register this element to overlayManager
			    Ng2OverlayDirective.prototype.registerToOverlayManager = function () {
			        var positionStr = this.overlayPosition;
			        var overlay = new ng2_overlay_1.Ng2Overlay(this.overlayEl, {
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
			    ], Ng2OverlayDirective.prototype, "overlayOf", void 0);
			    __decorate([
			        core_1.Input('ng2-overlay-position'), 
			        __metadata('design:type', String)
			    ], Ng2OverlayDirective.prototype, "overlayPosition", void 0);
			    Ng2OverlayDirective = __decorate([
			        core_1.Directive({
			            selector: '[ng2-overlay], [ng2-overlay-of], [ng2-overlay-position]',
			        }), 
			        __metadata('design:paramtypes', [core_1.ViewContainerRef, ng2_overlay_manager_1.Ng2OverlayManager])
			    ], Ng2OverlayDirective);
			    return Ng2OverlayDirective;
			}());
			exports.Ng2OverlayDirective = Ng2OverlayDirective;
		
		
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
			var core_1 = __webpack_require__(4);
			var forms_1 = __webpack_require__(7);
			var common_1 = __webpack_require__(8);
			var ng2_overlay_manager_1 = __webpack_require__(3);
			var ng2_overlay_directive_1 = __webpack_require__(5);
			var Ng2OverlayModule = (function () {
			    function Ng2OverlayModule() {
			    }
			    Ng2OverlayModule = __decorate([
			        core_1.NgModule({
			            imports: [common_1.CommonModule, forms_1.FormsModule],
			            declarations: [ng2_overlay_directive_1.Ng2OverlayDirective],
			            providers: [ng2_overlay_manager_1.Ng2OverlayManager],
			            exports: [ng2_overlay_directive_1.Ng2OverlayDirective]
			        }), 
			        __metadata('design:paramtypes', [])
			    ], Ng2OverlayModule);
			    return Ng2OverlayModule;
			}());
			exports.Ng2OverlayModule = Ng2OverlayModule;
			;
		
		
		/***/ },
		/* 7 */
		/***/ function(module, exports) {
		
			module.exports = __WEBPACK_EXTERNAL_MODULE_7__;
		
		/***/ },
		/* 8 */
		/***/ function(module, exports) {
		
			module.exports = __WEBPACK_EXTERNAL_MODULE_8__;
		
		/***/ }
		/******/ ])
		});
		;
		//# sourceMappingURL=ng2-overlay.umd.js.map
	
	/***/ },
	/* 4 */
	/***/ function(module, exports) {
	
		module.exports = __WEBPACK_EXTERNAL_MODULE_4__;
	
	/***/ },
	/* 5 */
	/***/ function(module, exports) {
	
		module.exports = __WEBPACK_EXTERNAL_MODULE_5__;
	
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
		var core_1 = __webpack_require__(2);
		var Ng2MessagePopupComponent = (function () {
		    function Ng2MessagePopupComponent() {
		    }
		    return Ng2MessagePopupComponent;
		}());
		Ng2MessagePopupComponent = __decorate([
		    core_1.Component({
		        selector: 'ng2-message-popup',
		        template: "\n    <div>\n      <div class=\"popup-header\">{{popupOptions.title}}</div>\n      <div class=\"popup-body\">{{popupOptions.message}}</div>\n      <div class=\"popup-footer\" *ngIf=\"popupOptions.buttons\">\n        <button *ngIf=\"popupOptions.buttons.OK\"\n          (click)=\"popupOptions.buttons.OK()\">Ok</button>\n        <button *ngIf=\"popupOptions.buttons.CANCEL\"\n          (click)=\"popupOptions.buttons.CANCEL()\">Cancel</button>\n      </div>\n    </div>\n  ",
		        encapsulation: core_1.ViewEncapsulation.None,
		        styles: ["\n    .popup-header, .popup-body, .popup-footer {\n      padding: 15px;\n      text-align: center;\n    }\n    .popup-header  {\n      font-weight: bold;\n      font-size: 18px;\n      border-bottom: 1px solid #ccc;\n    }\n  "]
		    }),
		    __metadata("design:paramtypes", [])
		], Ng2MessagePopupComponent);
		exports.Ng2MessagePopupComponent = Ng2MessagePopupComponent;
	
	
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
		var core_1 = __webpack_require__(2);
		var forms_1 = __webpack_require__(4);
		var common_1 = __webpack_require__(5);
		var ng2_overlay_1 = __webpack_require__(3);
		var ng2_popup_component_1 = __webpack_require__(1);
		exports.Ng2PopupComponent = ng2_popup_component_1.Ng2PopupComponent;
		var ng2_message_popup_component_1 = __webpack_require__(6);
		exports.Ng2MessagePopupComponent = ng2_message_popup_component_1.Ng2MessagePopupComponent;
		var Ng2PopupModule = (function () {
		    function Ng2PopupModule() {
		    }
		    return Ng2PopupModule;
		}());
		Ng2PopupModule = __decorate([
		    core_1.NgModule({
		        imports: [common_1.CommonModule, forms_1.FormsModule, ng2_overlay_1.Ng2OverlayModule],
		        declarations: [ng2_message_popup_component_1.Ng2MessagePopupComponent, ng2_popup_component_1.Ng2PopupComponent],
		        exports: [ng2_message_popup_component_1.Ng2MessagePopupComponent, ng2_popup_component_1.Ng2PopupComponent],
		        entryComponents: [ng2_message_popup_component_1.Ng2MessagePopupComponent]
		    }),
		    __metadata("design:paramtypes", [])
		], Ng2PopupModule);
		exports.Ng2PopupModule = Ng2PopupModule;
	
	
	/***/ }
	/******/ ])
	});
	;
	//# sourceMappingURL=ng2-popup.umd.js.map

/***/ },
/* 13 */
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
	})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__) {
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
		var ng2_menu_directive_1 = __webpack_require__(1);
		exports.Ng2MenuDirective = ng2_menu_directive_1.Ng2MenuDirective;
		var ng2_menu_module_1 = __webpack_require__(3);
		exports.Ng2MenuModule = ng2_menu_module_1.Ng2MenuModule;
	
	
	/***/ },
	/* 1 */
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
		var core_1 = __webpack_require__(2);
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
		    return Ng2MenuDirective;
		}());
		__decorate([
		    core_1.Input('ng2-menu'),
		    __metadata("design:type", String)
		], Ng2MenuDirective.prototype, "position", void 0);
		Ng2MenuDirective = __decorate([
		    core_1.Directive({
		        selector: '[ng2-menu]'
		    }),
		    __metadata("design:paramtypes", [core_1.ViewContainerRef])
		], Ng2MenuDirective);
		exports.Ng2MenuDirective = Ng2MenuDirective;
	
	
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
		var core_1 = __webpack_require__(2);
		var forms_1 = __webpack_require__(4);
		var platform_browser_1 = __webpack_require__(5);
		var ng2_menu_directive_1 = __webpack_require__(1);
		var Ng2MenuModule = (function () {
		    function Ng2MenuModule() {
		    }
		    return Ng2MenuModule;
		}());
		Ng2MenuModule = __decorate([
		    core_1.NgModule({
		        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule],
		        declarations: [ng2_menu_directive_1.Ng2MenuDirective],
		        exports: [ng2_menu_directive_1.Ng2MenuDirective]
		    }),
		    __metadata("design:paramtypes", [])
		], Ng2MenuModule);
		exports.Ng2MenuModule = Ng2MenuModule;
	
	
	/***/ },
	/* 4 */
	/***/ function(module, exports) {
	
		module.exports = __WEBPACK_EXTERNAL_MODULE_4__;
	
	/***/ },
	/* 5 */
	/***/ function(module, exports) {
	
		module.exports = __WEBPACK_EXTERNAL_MODULE_5__;
	
	/***/ }
	/******/ ])
	});
	;
	//# sourceMappingURL=ng2-menu.umd.js.map

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory(__webpack_require__(1), __webpack_require__(2), __webpack_require__(7));
		else if(typeof define === 'function' && define.amd)
			define(["@angular/core", "@angular/forms", "@angular/common"], factory);
		else if(typeof exports === 'object')
			exports["ng2-parallax-scroll"] = factory(require("@angular/core"), require("@angular/forms"), require("@angular/common"));
		else
			root["ng2-parallax-scroll"] = factory(root["@angular/core"], root["@angular/forms"], root["@angular/common"]);
	})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__) {
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
		var ng2_parallax_scroll_directive_1 = __webpack_require__(1);
		exports.Ng2ParallaxScrollDirective = ng2_parallax_scroll_directive_1.Ng2ParallaxScrollDirective;
		var ng2_parallax_scroll_module_1 = __webpack_require__(3);
		exports.Ng2ParallaxScrollModule = ng2_parallax_scroll_module_1.Ng2ParallaxScrollModule;
	
	
	/***/ },
	/* 1 */
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
		var core_1 = __webpack_require__(2);
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
		    return Ng2ParallaxScrollDirective;
		}());
		Ng2ParallaxScrollDirective = __decorate([
		    core_1.Directive({
		        selector: '[ng2-parallax], ng2-parallax'
		    }),
		    __metadata("design:paramtypes", [core_1.ViewContainerRef])
		], Ng2ParallaxScrollDirective);
		exports.Ng2ParallaxScrollDirective = Ng2ParallaxScrollDirective;
	
	
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
		var core_1 = __webpack_require__(2);
		var forms_1 = __webpack_require__(4);
		var common_1 = __webpack_require__(5);
		var ng2_parallax_scroll_directive_1 = __webpack_require__(1);
		var Ng2ParallaxScrollModule = (function () {
		    function Ng2ParallaxScrollModule() {
		    }
		    return Ng2ParallaxScrollModule;
		}());
		Ng2ParallaxScrollModule = __decorate([
		    core_1.NgModule({
		        imports: [common_1.CommonModule, forms_1.FormsModule],
		        declarations: [ng2_parallax_scroll_directive_1.Ng2ParallaxScrollDirective],
		        exports: [ng2_parallax_scroll_directive_1.Ng2ParallaxScrollDirective]
		    }),
		    __metadata("design:paramtypes", [])
		], Ng2ParallaxScrollModule);
		exports.Ng2ParallaxScrollModule = Ng2ParallaxScrollModule;
	
	
	/***/ },
	/* 4 */
	/***/ function(module, exports) {
	
		module.exports = __WEBPACK_EXTERNAL_MODULE_4__;
	
	/***/ },
	/* 5 */
	/***/ function(module, exports) {
	
		module.exports = __WEBPACK_EXTERNAL_MODULE_5__;
	
	/***/ }
	/******/ ])
	});
	;
	//# sourceMappingURL=ng2-parallax-scroll.umd.js.map

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory(__webpack_require__(1), __webpack_require__(2), __webpack_require__(7));
		else if(typeof define === 'function' && define.amd)
			define(["@angular/core", "@angular/forms", "@angular/common"], factory);
		else if(typeof exports === 'object')
			exports["ng2-sticky"] = factory(require("@angular/core"), require("@angular/forms"), require("@angular/common"));
		else
			root["ng2-sticky"] = factory(root["@angular/core"], root["@angular/forms"], root["@angular/common"]);
	})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_6__) {
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
		var ng2_sticky_directive_1 = __webpack_require__(1);
		exports.Ng2StickyDirective = ng2_sticky_directive_1.Ng2StickyDirective;
		var ng2_sticky_module_1 = __webpack_require__(4);
		exports.Ng2StickyModule = ng2_sticky_module_1.Ng2StickyModule;
	
	
	/***/ },
	/* 1 */
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
		var core_1 = __webpack_require__(2);
		var ng2_utils_1 = __webpack_require__(3);
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
		    return Ng2StickyDirective;
		}());
		__decorate([
		    core_1.Input('sticky-after'),
		    __metadata("design:type", String)
		], Ng2StickyDirective.prototype, "stickyAfter", void 0);
		Ng2StickyDirective = __decorate([
		    core_1.Directive({
		        selector: '[ng2-sticky]'
		    }),
		    __metadata("design:paramtypes", [core_1.ElementRef])
		], Ng2StickyDirective);
		exports.Ng2StickyDirective = Ng2StickyDirective;
	
	
	/***/ },
	/* 2 */
	/***/ function(module, exports) {
	
		module.exports = __WEBPACK_EXTERNAL_MODULE_2__;
	
	/***/ },
	/* 3 */
	/***/ function(module, exports, __webpack_require__) {
	
		(function webpackUniversalModuleDefinition(root, factory) {
			if(true)
				module.exports = factory(__webpack_require__(2));
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
		var core_1 = __webpack_require__(2);
		var forms_1 = __webpack_require__(5);
		var common_1 = __webpack_require__(6);
		var ng2_sticky_directive_1 = __webpack_require__(1);
		exports.Ng2StickyDirective = ng2_sticky_directive_1.Ng2StickyDirective;
		var Ng2StickyModule = (function () {
		    function Ng2StickyModule() {
		    }
		    return Ng2StickyModule;
		}());
		Ng2StickyModule = __decorate([
		    core_1.NgModule({
		        imports: [common_1.CommonModule, forms_1.FormsModule],
		        declarations: [ng2_sticky_directive_1.Ng2StickyDirective],
		        exports: [ng2_sticky_directive_1.Ng2StickyDirective]
		    }),
		    __metadata("design:paramtypes", [])
		], Ng2StickyModule);
		exports.Ng2StickyModule = Ng2StickyModule;
	
	
	/***/ },
	/* 5 */
	/***/ function(module, exports) {
	
		module.exports = __WEBPACK_EXTERNAL_MODULE_5__;
	
	/***/ },
	/* 6 */
	/***/ function(module, exports) {
	
		module.exports = __WEBPACK_EXTERNAL_MODULE_6__;
	
	/***/ }
	/******/ ])
	});
	;
	//# sourceMappingURL=ng2-sticky.umd.js.map

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory(__webpack_require__(1), __webpack_require__(2), __webpack_require__(7));
		else if(typeof define === 'function' && define.amd)
			define(["@angular/core", "@angular/forms", "@angular/common"], factory);
		else if(typeof exports === 'object')
			exports["ng2-tab"] = factory(require("@angular/core"), require("@angular/forms"), require("@angular/common"));
		else
			root["ng2-tab"] = factory(root["@angular/core"], root["@angular/forms"], root["@angular/common"]);
	})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__) {
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
		var ng2_tab_component_1 = __webpack_require__(1);
		exports.Ng2TabComponent = ng2_tab_component_1.Ng2TabComponent;
		var ng2_tab_module_1 = __webpack_require__(3);
		exports.Ng2TabModule = ng2_tab_module_1.Ng2TabModule;
	
	
	/***/ },
	/* 1 */
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
		var core_1 = __webpack_require__(2);
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
		    return Ng2TabComponent;
		}());
		__decorate([
		    core_1.Input('selected'),
		    __metadata("design:type", String)
		], Ng2TabComponent.prototype, "selectedIndex", void 0);
		__decorate([
		    core_1.Input('selected-index-class'),
		    __metadata("design:type", String)
		], Ng2TabComponent.prototype, "selectedIndexClass", void 0);
		__decorate([
		    core_1.Input('selected-contents-class'),
		    __metadata("design:type", String)
		], Ng2TabComponent.prototype, "selectedContentsClass", void 0);
		Ng2TabComponent = __decorate([
		    core_1.Component({
		        selector: 'ng2-tab, [ng2-tab]',
		        encapsulation: core_1.ViewEncapsulation.None,
		        template: "<ng-content></ng-content>",
		        styles: ["\n    .tabs {\n      position: relative;\n      top: 1px;\n      background: transparent;\n      display: block;\n    }\n    .tabs [index] {\n      display: inline-block;\n      border: 1px solid #999;\n      padding: 5px 10px;\n      border-radius: 2px 2px 0 0;\n    }\n    .tabs [index].selected {\n      padding-top: 0;\n      background: #f7f7f7;\n      border-top: 5px solid #00BCD4;\n      border-bottom: 1px solid transparent;\n    }\n    .tab-contents {\n      border: 1px solid #999;\n      border-radius: 2px;\n      min-height: 3em;\n    }\n  "],
		    }),
		    __metadata("design:paramtypes", [core_1.ViewContainerRef])
		], Ng2TabComponent);
		exports.Ng2TabComponent = Ng2TabComponent;
	
	
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
		var core_1 = __webpack_require__(2);
		var forms_1 = __webpack_require__(4);
		var common_1 = __webpack_require__(5);
		var ng2_tab_component_1 = __webpack_require__(1);
		exports.Ng2TabComponent = ng2_tab_component_1.Ng2TabComponent;
		var Ng2TabModule = (function () {
		    function Ng2TabModule() {
		    }
		    return Ng2TabModule;
		}());
		Ng2TabModule = __decorate([
		    core_1.NgModule({
		        imports: [common_1.CommonModule, forms_1.FormsModule],
		        declarations: [ng2_tab_component_1.Ng2TabComponent],
		        exports: [ng2_tab_component_1.Ng2TabComponent]
		    }),
		    __metadata("design:paramtypes", [])
		], Ng2TabModule);
		exports.Ng2TabModule = Ng2TabModule;
	
	
	/***/ },
	/* 4 */
	/***/ function(module, exports) {
	
		module.exports = __WEBPACK_EXTERNAL_MODULE_4__;
	
	/***/ },
	/* 5 */
	/***/ function(module, exports) {
	
		module.exports = __WEBPACK_EXTERNAL_MODULE_5__;
	
	/***/ }
	/******/ ])
	});
	;
	//# sourceMappingURL=ng2-tab.umd.js.map

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory(__webpack_require__(1), __webpack_require__(2), __webpack_require__(7));
		else if(typeof define === 'function' && define.amd)
			define(["@angular/core", "@angular/forms", "@angular/common"], factory);
		else if(typeof exports === 'object')
			exports["ng2-tooltip-overlay"] = factory(require("@angular/core"), require("@angular/forms"), require("@angular/common"));
		else
			root["ng2-tooltip-overlay"] = factory(root["@angular/core"], root["@angular/forms"], root["@angular/common"]);
	})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__) {
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
		var ng2_tooltip_directive_1 = __webpack_require__(1);
		exports.Ng2TooltipDirective = ng2_tooltip_directive_1.Ng2TooltipDirective;
		var ng2_tooltip_overlay_module_1 = __webpack_require__(6);
		exports.Ng2TooltipOverlayModule = ng2_tooltip_overlay_module_1.Ng2TooltipOverlayModule;
	
	
	/***/ },
	/* 1 */
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
		var core_1 = __webpack_require__(2);
		var ng2_overlay_1 = __webpack_require__(3);
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
		        var overlay = new ng2_overlay_1.Ng2Overlay(tooltipEl, {
		            id: 'tooltip-' + (el.id || Math.floor(Math.random() * 1000000)),
		            position: 'top cursor outside'
		        });
		        this.overlayManager.register(overlay);
		        return overlay;
		    };
		    return Ng2TooltipDirective;
		}());
		__decorate([
		    core_1.Input('ng2-tooltip'),
		    __metadata("design:type", String)
		], Ng2TooltipDirective.prototype, "tooltip", void 0);
		Ng2TooltipDirective = __decorate([
		    core_1.Directive({
		        selector: '[ng2-tooltip]',
		        host: {
		            '(mouseover)': 'showTooltip($event)',
		            '(mouseout)': 'hideTooltip($event)'
		        }
		    }),
		    __metadata("design:paramtypes", [core_1.ViewContainerRef,
		        ng2_overlay_1.Ng2OverlayManager])
		], Ng2TooltipDirective);
		exports.Ng2TooltipDirective = Ng2TooltipDirective;
	
	
	/***/ },
	/* 2 */
	/***/ function(module, exports) {
	
		module.exports = __WEBPACK_EXTERNAL_MODULE_2__;
	
	/***/ },
	/* 3 */
	/***/ function(module, exports, __webpack_require__) {
	
		(function webpackUniversalModuleDefinition(root, factory) {
			if(true)
				module.exports = factory(__webpack_require__(2), __webpack_require__(4), __webpack_require__(5));
			else if(typeof define === 'function' && define.amd)
				define(["@angular/core", "@angular/forms", "@angular/common"], factory);
			else if(typeof exports === 'object')
				exports["ng2-overlay"] = factory(require("@angular/core"), require("@angular/forms"), require("@angular/common"));
			else
				root["ng2-overlay"] = factory(root["@angular/core"], root["@angular/forms"], root["@angular/common"]);
		})(this, function(__WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_8__) {
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
			var ng2_overlay_1 = __webpack_require__(1);
			exports.Ng2Overlay = ng2_overlay_1.Ng2Overlay;
			var ng2_overlay_manager_1 = __webpack_require__(3);
			exports.Ng2OverlayManager = ng2_overlay_manager_1.Ng2OverlayManager;
			var ng2_overlay_directive_1 = __webpack_require__(5);
			exports.Ng2OverlayDirective = ng2_overlay_directive_1.Ng2OverlayDirective;
			var ng2_overlay_module_1 = __webpack_require__(6);
			exports.Ng2OverlayModule = ng2_overlay_module_1.Ng2OverlayModule;
		
		
		/***/ },
		/* 1 */
		/***/ function(module, exports, __webpack_require__) {
		
			"use strict";
			var ng2_util_1 = __webpack_require__(2);
			var Ng2Overlay = (function () {
			    function Ng2Overlay(el, options) {
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
			    Ng2Overlay.prototype.positionIt = function (event) {
			        if (this.position.inside) {
			            this.positionItInside(this.position);
			        }
			        else {
			            this.positionItOutside(this.position, event);
			        }
			    };
			    Ng2Overlay.prototype.getPositionProperty = function (positionStr) {
			        var position = {}, inside;
			        var _a = positionStr.split(' '), vertical = _a[0], horizontal = _a[1], insideStr = _a[2];
			        horizontal = horizontal || 'center';
			        vertical = vertical || 'center';
			        inside = (insideStr !== 'outside' || this.windowOverlay);
			        position.horizontal = Ng2Overlay[horizontal.toUpperCase()];
			        position.vertical = Ng2Overlay[vertical.toUpperCase()];
			        position.inside = inside;
			        return position;
			    };
			    Ng2Overlay.prototype.positionItInside = function (position) {
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
			            case Ng2Overlay.LEFT:
			                this.element.style.justifyContent = 'flex-start';
			                break;
			            case Ng2Overlay.CENTER:
			                this.element.style.justifyContent = 'center';
			                break;
			            case Ng2Overlay.RIGHT:
			                this.element.style.justifyContent = 'flex-end';
			                break;
			        }
			        //vertical position
			        switch (position.vertical) {
			            case Ng2Overlay.LEFT:
			                this.element.style.alignItems = 'flex-start';
			                break;
			            case Ng2Overlay.CENTER:
			            case Ng2Overlay.MIDDLE:
			                this.element.style.alignItems = 'center';
			                break;
			            case Ng2Overlay.RIGHT:
			                this.element.style.alignItems = 'flex-end';
			                break;
			        }
			    };
			    Ng2Overlay.prototype.positionItOutside = function (position, event) {
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
			            case Ng2Overlay.TOP:
			                elToPosition.style.bottom = this.element.offsetHeight + 'px';
			                break;
			            case Ng2Overlay.BOTTOM:
			                elToPosition.style.top = this.element.offsetHeight + 'px';
			                break;
			            case Ng2Overlay.LEFT:
			                elToPosition.style.right = this.element.offsetWidth + 'px';
			                break;
			            case Ng2Overlay.RIGHT:
			                elToPosition.style.left = this.element.offsetWidth + 'px';
			                break;
			        }
			        switch (position.horizontal) {
			            case Ng2Overlay.CENTER:
			                elToPosition.style.left = (this.element.offsetWidth - elToPosition.offsetWidth) / 2 + 'px';
			                break;
			            case Ng2Overlay.LEFT:
			                elToPosition.style.left = '0';
			                break;
			            case Ng2Overlay.RIGHT:
			                elToPosition.style.right = '0';
			                break;
			            case Ng2Overlay.TOP:
			                elToPosition.style.top = '0';
			                break;
			            case Ng2Overlay.BOTTOM:
			                elToPosition.style.bottom = '0';
			                break;
			            case Ng2Overlay.CURSOR:
			                var mousePos = ng2_util_1.Ng2Util.getMousePositionInElement(event, this.element);
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
			    Ng2Overlay.TOP = 11;
			    Ng2Overlay.MIDDLE = 12;
			    Ng2Overlay.BOTTOM = 13;
			    Ng2Overlay.LEFT = 21;
			    Ng2Overlay.CENTER = 22;
			    Ng2Overlay.RIGHT = 23;
			    Ng2Overlay.CURSOR = 31;
			    return Ng2Overlay;
			}());
			exports.Ng2Overlay = Ng2Overlay;
		
		
		/***/ },
		/* 2 */
		/***/ function(module, exports) {
		
			"use strict";
			var Ng2Util = (function () {
			    function Ng2Util() {
			    }
			    Ng2Util.getDocumentPosition = function (oElement) {
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
			    Ng2Util.getMousePositionInElement = function (evt, element) {
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
			    return Ng2Util;
			}());
			exports.Ng2Util = Ng2Util;
		
		
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
			var core_1 = __webpack_require__(4);
			var Ng2OverlayManager = (function () {
			    function Ng2OverlayManager() {
			    }
			    Ng2OverlayManager.prototype.register = function (overlay) {
			        Ng2OverlayManager.overlays[overlay.id] = overlay;
			        // console.log('overlay.register, OverlayManager.overlays', OverlayManager.overlays);
			    };
			    Ng2OverlayManager.prototype.open = function (arg, event) {
			        var overlay = typeof arg === 'string' ? Ng2OverlayManager.overlays[arg] : arg;
			        if (!overlay.opened) {
			            overlay.positionIt(event);
			            overlay.opened = true;
			        }
			    };
			    Ng2OverlayManager.prototype.close = function (arg) {
			        var overlay = typeof arg === 'string' ? Ng2OverlayManager.overlays[arg] : arg;
			        overlay.element.style.display = 'none';
			        overlay.opened = false;
			    };
			    //list of overlay objects
			    Ng2OverlayManager.overlays = {};
			    Ng2OverlayManager = __decorate([
			        core_1.Injectable(), 
			        __metadata('design:paramtypes', [])
			    ], Ng2OverlayManager);
			    return Ng2OverlayManager;
			}());
			exports.Ng2OverlayManager = Ng2OverlayManager;
		
		
		/***/ },
		/* 4 */
		/***/ function(module, exports) {
		
			module.exports = __WEBPACK_EXTERNAL_MODULE_4__;
		
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
			var core_1 = __webpack_require__(4);
			var ng2_overlay_manager_1 = __webpack_require__(3);
			var ng2_overlay_1 = __webpack_require__(1);
			var Ng2OverlayDirective = (function () {
			    function Ng2OverlayDirective(viewContainerRef, overlayManager) {
			        this.viewContainerRef = viewContainerRef;
			        this.overlayManager = overlayManager;
			        this.el = this.viewContainerRef.element.nativeElement;
			    }
			    Ng2OverlayDirective.prototype.ngAfterViewInit = function () {
			        this.wrapItWithOverlayTag();
			        this.registerToOverlayManager();
			    };
			    Ng2OverlayDirective.prototype.wrapItWithOverlayTag = function () {
			        //console.log('wrapped overlay directive element with <ng2-overlay>');
			        this.overlayEl = document.createElement('ng2-overlay');
			        this.overlayEl.style.display = 'none';
			        this.el.parentElement.insertBefore(this.overlayEl, this.el.nextSibling);
			        this.overlayEl.appendChild(this.el);
			    };
			    //create Overlay object,  then register this element to overlayManager
			    Ng2OverlayDirective.prototype.registerToOverlayManager = function () {
			        var positionStr = this.overlayPosition;
			        var overlay = new ng2_overlay_1.Ng2Overlay(this.overlayEl, {
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
			    ], Ng2OverlayDirective.prototype, "overlayOf", void 0);
			    __decorate([
			        core_1.Input('ng2-overlay-position'), 
			        __metadata('design:type', String)
			    ], Ng2OverlayDirective.prototype, "overlayPosition", void 0);
			    Ng2OverlayDirective = __decorate([
			        core_1.Directive({
			            selector: '[ng2-overlay], [ng2-overlay-of], [ng2-overlay-position]',
			        }), 
			        __metadata('design:paramtypes', [core_1.ViewContainerRef, ng2_overlay_manager_1.Ng2OverlayManager])
			    ], Ng2OverlayDirective);
			    return Ng2OverlayDirective;
			}());
			exports.Ng2OverlayDirective = Ng2OverlayDirective;
		
		
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
			var core_1 = __webpack_require__(4);
			var forms_1 = __webpack_require__(7);
			var common_1 = __webpack_require__(8);
			var ng2_overlay_manager_1 = __webpack_require__(3);
			var ng2_overlay_directive_1 = __webpack_require__(5);
			var Ng2OverlayModule = (function () {
			    function Ng2OverlayModule() {
			    }
			    Ng2OverlayModule = __decorate([
			        core_1.NgModule({
			            imports: [common_1.CommonModule, forms_1.FormsModule],
			            declarations: [ng2_overlay_directive_1.Ng2OverlayDirective],
			            providers: [ng2_overlay_manager_1.Ng2OverlayManager],
			            exports: [ng2_overlay_directive_1.Ng2OverlayDirective]
			        }), 
			        __metadata('design:paramtypes', [])
			    ], Ng2OverlayModule);
			    return Ng2OverlayModule;
			}());
			exports.Ng2OverlayModule = Ng2OverlayModule;
			;
		
		
		/***/ },
		/* 7 */
		/***/ function(module, exports) {
		
			module.exports = __WEBPACK_EXTERNAL_MODULE_7__;
		
		/***/ },
		/* 8 */
		/***/ function(module, exports) {
		
			module.exports = __WEBPACK_EXTERNAL_MODULE_8__;
		
		/***/ }
		/******/ ])
		});
		;
		//# sourceMappingURL=ng2-overlay.umd.js.map
	
	/***/ },
	/* 4 */
	/***/ function(module, exports) {
	
		module.exports = __WEBPACK_EXTERNAL_MODULE_4__;
	
	/***/ },
	/* 5 */
	/***/ function(module, exports) {
	
		module.exports = __WEBPACK_EXTERNAL_MODULE_5__;
	
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
		var core_1 = __webpack_require__(2);
		var forms_1 = __webpack_require__(4);
		var common_1 = __webpack_require__(5);
		var ng2_overlay_1 = __webpack_require__(3);
		var ng2_tooltip_directive_1 = __webpack_require__(1);
		var Ng2TooltipOverlayModule = (function () {
		    function Ng2TooltipOverlayModule() {
		    }
		    return Ng2TooltipOverlayModule;
		}());
		Ng2TooltipOverlayModule = __decorate([
		    core_1.NgModule({
		        imports: [common_1.CommonModule, forms_1.FormsModule, ng2_overlay_1.Ng2OverlayModule],
		        declarations: [ng2_tooltip_directive_1.Ng2TooltipDirective],
		        exports: [ng2_tooltip_directive_1.Ng2TooltipDirective]
		    }),
		    __metadata("design:paramtypes", [])
		], Ng2TooltipOverlayModule);
		exports.Ng2TooltipOverlayModule = Ng2TooltipOverlayModule;
	
	
	/***/ }
	/******/ ])
	});
	;
	//# sourceMappingURL=ng2-tooltip-overlay.umd.js.map

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory(__webpack_require__(1), __webpack_require__(2), __webpack_require__(7));
		else if(typeof define === 'function' && define.amd)
			define(["@angular/core", "@angular/forms", "@angular/common"], factory);
		else if(typeof exports === 'object')
			exports["ng2-ui-sortable"] = factory(require("@angular/core"), require("@angular/forms"), require("@angular/common"));
		else
			root["ng2-ui-sortable"] = factory(root["@angular/core"], root["@angular/forms"], root["@angular/common"]);
	})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__) {
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
		var ng2_sortable_directive_1 = __webpack_require__(1);
		exports.Ng2SortableDirective = ng2_sortable_directive_1.Ng2SortableDirective;
		var ng2_sortable_module_1 = __webpack_require__(3);
		exports.Ng2SortableModule = ng2_sortable_module_1.Ng2SortableModule;
	
	
	/***/ },
	/* 1 */
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
		var core_1 = __webpack_require__(2);
		var Ng2SortableDirective = (function () {
		    function Ng2SortableDirective(viewContainerRef) {
		        var _this = this;
		        this.viewContainerRef = viewContainerRef;
		        this.orderChanged = new core_1.EventEmitter();
		        this.dragStartHandler = function (event) {
		            //console.log('dragStartHandler');
		            _this.draggingEl = event.target;
		            //noinspection TypeScriptUnresolvedFunction
		            Object.assign(_this.draggingEl.style, {
		                zIndex: 3,
		                pointerEvents: 'none'
		            });
		        };
		        this.dragHandler = function (event) {
		            //console.log('dragHandler');
		            //noinspection TypeScriptUnresolvedFunction
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
		            //noinspection TypeScriptUnresolvedFunction
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
		    return Ng2SortableDirective;
		}());
		__decorate([
		    core_1.Output(),
		    __metadata("design:type", Object)
		], Ng2SortableDirective.prototype, "orderChanged", void 0);
		Ng2SortableDirective = __decorate([
		    core_1.Directive({
		        selector: '[ng2-sortable]'
		    }),
		    __metadata("design:paramtypes", [core_1.ViewContainerRef])
		], Ng2SortableDirective);
		exports.Ng2SortableDirective = Ng2SortableDirective;
	
	
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
		var core_1 = __webpack_require__(2);
		var forms_1 = __webpack_require__(4);
		var common_1 = __webpack_require__(5);
		var ng2_sortable_directive_1 = __webpack_require__(1);
		var Ng2SortableModule = (function () {
		    function Ng2SortableModule() {
		    }
		    return Ng2SortableModule;
		}());
		Ng2SortableModule = __decorate([
		    core_1.NgModule({
		        imports: [common_1.CommonModule, forms_1.FormsModule],
		        declarations: [ng2_sortable_directive_1.Ng2SortableDirective],
		        exports: [ng2_sortable_directive_1.Ng2SortableDirective]
		    }),
		    __metadata("design:paramtypes", [])
		], Ng2SortableModule);
		exports.Ng2SortableModule = Ng2SortableModule;
	
	
	/***/ },
	/* 4 */
	/***/ function(module, exports) {
	
		module.exports = __WEBPACK_EXTERNAL_MODULE_4__;
	
	/***/ },
	/* 5 */
	/***/ function(module, exports) {
	
		module.exports = __WEBPACK_EXTERNAL_MODULE_5__;
	
	/***/ }
	/******/ ])
	});
	;
	//# sourceMappingURL=ng2-ui-sortable.umd.js.map

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory(__webpack_require__(1), __webpack_require__(2), __webpack_require__(7));
		else if(typeof define === 'function' && define.amd)
			define(["@angular/core", "@angular/forms", "@angular/common"], factory);
		else if(typeof exports === 'object')
			exports["ng2-overlay"] = factory(require("@angular/core"), require("@angular/forms"), require("@angular/common"));
		else
			root["ng2-overlay"] = factory(root["@angular/core"], root["@angular/forms"], root["@angular/common"]);
	})(this, function(__WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_8__) {
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
		var ng2_overlay_1 = __webpack_require__(1);
		exports.Ng2Overlay = ng2_overlay_1.Ng2Overlay;
		var ng2_overlay_manager_1 = __webpack_require__(3);
		exports.Ng2OverlayManager = ng2_overlay_manager_1.Ng2OverlayManager;
		var ng2_overlay_directive_1 = __webpack_require__(5);
		exports.Ng2OverlayDirective = ng2_overlay_directive_1.Ng2OverlayDirective;
		var ng2_overlay_module_1 = __webpack_require__(6);
		exports.Ng2OverlayModule = ng2_overlay_module_1.Ng2OverlayModule;
	
	
	/***/ },
	/* 1 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		var ng2_util_1 = __webpack_require__(2);
		var Ng2Overlay = (function () {
		    function Ng2Overlay(el, options) {
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
		    Ng2Overlay.prototype.positionIt = function (event) {
		        if (this.position.inside) {
		            this.positionItInside(this.position);
		        }
		        else {
		            this.positionItOutside(this.position, event);
		        }
		    };
		    Ng2Overlay.prototype.getPositionProperty = function (positionStr) {
		        var position = {}, inside;
		        var _a = positionStr.split(' '), vertical = _a[0], horizontal = _a[1], insideStr = _a[2];
		        horizontal = horizontal || 'center';
		        vertical = vertical || 'center';
		        inside = (insideStr !== 'outside' || this.windowOverlay);
		        position.horizontal = Ng2Overlay[horizontal.toUpperCase()];
		        position.vertical = Ng2Overlay[vertical.toUpperCase()];
		        position.inside = inside;
		        return position;
		    };
		    Ng2Overlay.prototype.positionItInside = function (position) {
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
		            case Ng2Overlay.LEFT:
		                this.element.style.justifyContent = 'flex-start';
		                break;
		            case Ng2Overlay.CENTER:
		                this.element.style.justifyContent = 'center';
		                break;
		            case Ng2Overlay.RIGHT:
		                this.element.style.justifyContent = 'flex-end';
		                break;
		        }
		        //vertical position
		        switch (position.vertical) {
		            case Ng2Overlay.LEFT:
		                this.element.style.alignItems = 'flex-start';
		                break;
		            case Ng2Overlay.CENTER:
		            case Ng2Overlay.MIDDLE:
		                this.element.style.alignItems = 'center';
		                break;
		            case Ng2Overlay.RIGHT:
		                this.element.style.alignItems = 'flex-end';
		                break;
		        }
		    };
		    Ng2Overlay.prototype.positionItOutside = function (position, event) {
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
		            case Ng2Overlay.TOP:
		                elToPosition.style.bottom = this.element.offsetHeight + 'px';
		                break;
		            case Ng2Overlay.BOTTOM:
		                elToPosition.style.top = this.element.offsetHeight + 'px';
		                break;
		            case Ng2Overlay.LEFT:
		                elToPosition.style.right = this.element.offsetWidth + 'px';
		                break;
		            case Ng2Overlay.RIGHT:
		                elToPosition.style.left = this.element.offsetWidth + 'px';
		                break;
		        }
		        switch (position.horizontal) {
		            case Ng2Overlay.CENTER:
		                elToPosition.style.left = (this.element.offsetWidth - elToPosition.offsetWidth) / 2 + 'px';
		                break;
		            case Ng2Overlay.LEFT:
		                elToPosition.style.left = '0';
		                break;
		            case Ng2Overlay.RIGHT:
		                elToPosition.style.right = '0';
		                break;
		            case Ng2Overlay.TOP:
		                elToPosition.style.top = '0';
		                break;
		            case Ng2Overlay.BOTTOM:
		                elToPosition.style.bottom = '0';
		                break;
		            case Ng2Overlay.CURSOR:
		                var mousePos = ng2_util_1.Ng2Util.getMousePositionInElement(event, this.element);
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
		    Ng2Overlay.TOP = 11;
		    Ng2Overlay.MIDDLE = 12;
		    Ng2Overlay.BOTTOM = 13;
		    Ng2Overlay.LEFT = 21;
		    Ng2Overlay.CENTER = 22;
		    Ng2Overlay.RIGHT = 23;
		    Ng2Overlay.CURSOR = 31;
		    return Ng2Overlay;
		}());
		exports.Ng2Overlay = Ng2Overlay;
	
	
	/***/ },
	/* 2 */
	/***/ function(module, exports) {
	
		"use strict";
		var Ng2Util = (function () {
		    function Ng2Util() {
		    }
		    Ng2Util.getDocumentPosition = function (oElement) {
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
		    Ng2Util.getMousePositionInElement = function (evt, element) {
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
		    return Ng2Util;
		}());
		exports.Ng2Util = Ng2Util;
	
	
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
		var core_1 = __webpack_require__(4);
		var Ng2OverlayManager = (function () {
		    function Ng2OverlayManager() {
		    }
		    Ng2OverlayManager.prototype.register = function (overlay) {
		        Ng2OverlayManager.overlays[overlay.id] = overlay;
		        // console.log('overlay.register, OverlayManager.overlays', OverlayManager.overlays);
		    };
		    Ng2OverlayManager.prototype.open = function (arg, event) {
		        var overlay = typeof arg === 'string' ? Ng2OverlayManager.overlays[arg] : arg;
		        if (!overlay.opened) {
		            overlay.positionIt(event);
		            overlay.opened = true;
		        }
		    };
		    Ng2OverlayManager.prototype.close = function (arg) {
		        var overlay = typeof arg === 'string' ? Ng2OverlayManager.overlays[arg] : arg;
		        overlay.element.style.display = 'none';
		        overlay.opened = false;
		    };
		    //list of overlay objects
		    Ng2OverlayManager.overlays = {};
		    Ng2OverlayManager = __decorate([
		        core_1.Injectable(), 
		        __metadata('design:paramtypes', [])
		    ], Ng2OverlayManager);
		    return Ng2OverlayManager;
		}());
		exports.Ng2OverlayManager = Ng2OverlayManager;
	
	
	/***/ },
	/* 4 */
	/***/ function(module, exports) {
	
		module.exports = __WEBPACK_EXTERNAL_MODULE_4__;
	
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
		var core_1 = __webpack_require__(4);
		var ng2_overlay_manager_1 = __webpack_require__(3);
		var ng2_overlay_1 = __webpack_require__(1);
		var Ng2OverlayDirective = (function () {
		    function Ng2OverlayDirective(viewContainerRef, overlayManager) {
		        this.viewContainerRef = viewContainerRef;
		        this.overlayManager = overlayManager;
		        this.el = this.viewContainerRef.element.nativeElement;
		    }
		    Ng2OverlayDirective.prototype.ngAfterViewInit = function () {
		        this.wrapItWithOverlayTag();
		        this.registerToOverlayManager();
		    };
		    Ng2OverlayDirective.prototype.wrapItWithOverlayTag = function () {
		        //console.log('wrapped overlay directive element with <ng2-overlay>');
		        this.overlayEl = document.createElement('ng2-overlay');
		        this.overlayEl.style.display = 'none';
		        this.el.parentElement.insertBefore(this.overlayEl, this.el.nextSibling);
		        this.overlayEl.appendChild(this.el);
		    };
		    //create Overlay object,  then register this element to overlayManager
		    Ng2OverlayDirective.prototype.registerToOverlayManager = function () {
		        var positionStr = this.overlayPosition;
		        var overlay = new ng2_overlay_1.Ng2Overlay(this.overlayEl, {
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
		    ], Ng2OverlayDirective.prototype, "overlayOf", void 0);
		    __decorate([
		        core_1.Input('ng2-overlay-position'), 
		        __metadata('design:type', String)
		    ], Ng2OverlayDirective.prototype, "overlayPosition", void 0);
		    Ng2OverlayDirective = __decorate([
		        core_1.Directive({
		            selector: '[ng2-overlay], [ng2-overlay-of], [ng2-overlay-position]',
		        }), 
		        __metadata('design:paramtypes', [core_1.ViewContainerRef, ng2_overlay_manager_1.Ng2OverlayManager])
		    ], Ng2OverlayDirective);
		    return Ng2OverlayDirective;
		}());
		exports.Ng2OverlayDirective = Ng2OverlayDirective;
	
	
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
		var core_1 = __webpack_require__(4);
		var forms_1 = __webpack_require__(7);
		var common_1 = __webpack_require__(8);
		var ng2_overlay_manager_1 = __webpack_require__(3);
		var ng2_overlay_directive_1 = __webpack_require__(5);
		var Ng2OverlayModule = (function () {
		    function Ng2OverlayModule() {
		    }
		    Ng2OverlayModule = __decorate([
		        core_1.NgModule({
		            imports: [common_1.CommonModule, forms_1.FormsModule],
		            declarations: [ng2_overlay_directive_1.Ng2OverlayDirective],
		            providers: [ng2_overlay_manager_1.Ng2OverlayManager],
		            exports: [ng2_overlay_directive_1.Ng2OverlayDirective]
		        }), 
		        __metadata('design:paramtypes', [])
		    ], Ng2OverlayModule);
		    return Ng2OverlayModule;
		}());
		exports.Ng2OverlayModule = Ng2OverlayModule;
		;
	
	
	/***/ },
	/* 7 */
	/***/ function(module, exports) {
	
		module.exports = __WEBPACK_EXTERNAL_MODULE_7__;
	
	/***/ },
	/* 8 */
	/***/ function(module, exports) {
	
		module.exports = __WEBPACK_EXTERNAL_MODULE_8__;
	
	/***/ }
	/******/ ])
	});
	;
	//# sourceMappingURL=ng2-overlay.umd.js.map

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory(__webpack_require__(1), __webpack_require__(2), __webpack_require__(7));
		else if(typeof define === 'function' && define.amd)
			define(["@angular/core", "@angular/forms", "@angular/common"], factory);
		else if(typeof exports === 'object')
			exports["ng2-scrollable"] = factory(require("@angular/core"), require("@angular/forms"), require("@angular/common"));
		else
			root["ng2-scrollable"] = factory(root["@angular/core"], root["@angular/forms"], root["@angular/common"]);
	})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_6__) {
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
		var ng2_scrollable_directive_1 = __webpack_require__(1);
		exports.Ng2ScrollableDirective = ng2_scrollable_directive_1.Ng2ScrollableDirective;
		var ng2_scrollable_module_1 = __webpack_require__(4);
		exports.Ng2ScrollableModule = ng2_scrollable_module_1.Ng2ScrollableModule;
	
	
	/***/ },
	/* 1 */
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
		var core_1 = __webpack_require__(2);
		var ng2_utils_1 = __webpack_require__(3);
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
		    return Ng2ScrollableDirective;
		}());
		__decorate([
		    core_1.Input(),
		    __metadata("design:type", Boolean)
		], Ng2ScrollableDirective.prototype, "horizontal", void 0);
		__decorate([
		    core_1.Output(),
		    __metadata("design:type", Object)
		], Ng2ScrollableDirective.prototype, "elementVisible", void 0);
		Ng2ScrollableDirective = __decorate([
		    core_1.Directive({
		        selector: '[ng2-scrollable]'
		    }),
		    __metadata("design:paramtypes", [core_1.ElementRef])
		], Ng2ScrollableDirective);
		exports.Ng2ScrollableDirective = Ng2ScrollableDirective;
	
	
	/***/ },
	/* 2 */
	/***/ function(module, exports) {
	
		module.exports = __WEBPACK_EXTERNAL_MODULE_2__;
	
	/***/ },
	/* 3 */
	/***/ function(module, exports, __webpack_require__) {
	
		(function webpackUniversalModuleDefinition(root, factory) {
			if(true)
				module.exports = factory(__webpack_require__(2));
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
		var core_1 = __webpack_require__(2);
		var forms_1 = __webpack_require__(5);
		var common_1 = __webpack_require__(6);
		var ng2_scrollable_directive_1 = __webpack_require__(1);
		exports.Ng2ScrollableDirective = ng2_scrollable_directive_1.Ng2ScrollableDirective;
		var Ng2ScrollableModule = (function () {
		    function Ng2ScrollableModule() {
		    }
		    return Ng2ScrollableModule;
		}());
		Ng2ScrollableModule = __decorate([
		    core_1.NgModule({
		        imports: [common_1.CommonModule, forms_1.FormsModule],
		        declarations: [ng2_scrollable_directive_1.Ng2ScrollableDirective],
		        exports: [ng2_scrollable_directive_1.Ng2ScrollableDirective]
		    }),
		    __metadata("design:paramtypes", [])
		], Ng2ScrollableModule);
		exports.Ng2ScrollableModule = Ng2ScrollableModule;
	
	
	/***/ },
	/* 5 */
	/***/ function(module, exports) {
	
		module.exports = __WEBPACK_EXTERNAL_MODULE_5__;
	
	/***/ },
	/* 6 */
	/***/ function(module, exports) {
	
		module.exports = __WEBPACK_EXTERNAL_MODULE_6__;
	
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
			module.exports = factory(__webpack_require__(1), __webpack_require__(7), __webpack_require__(2));
		else if(typeof define === 'function' && define.amd)
			define(["@angular/core", "@angular/common", "@angular/forms"], factory);
		else if(typeof exports === 'object')
			exports["ng2-collapsable"] = factory(require("@angular/core"), require("@angular/common"), require("@angular/forms"));
		else
			root["ng2-collapsable"] = factory(root["@angular/core"], root["@angular/common"], root["@angular/forms"]);
	})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__) {
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
		var ng2_collapsable_component_1 = __webpack_require__(1);
		exports.Ng2CollapsableComponent = ng2_collapsable_component_1.Ng2CollapsableComponent;
		var ng2_collapsable_module_1 = __webpack_require__(3);
		exports.Ng2CollapsableModule = ng2_collapsable_module_1.Ng2CollapsableModule;
	
	
	/***/ },
	/* 1 */
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
		var core_1 = __webpack_require__(2);
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
		    return Ng2CollapsableComponent;
		}());
		__decorate([
		    core_1.Input('selected'),
		    __metadata("design:type", String)
		], Ng2CollapsableComponent.prototype, "selectedIndex", void 0);
		__decorate([
		    core_1.Input('selected-index-class'),
		    __metadata("design:type", String)
		], Ng2CollapsableComponent.prototype, "selectedIndexClass", void 0);
		__decorate([
		    core_1.Input('selected-contents-class'),
		    __metadata("design:type", String)
		], Ng2CollapsableComponent.prototype, "selectedContentsClass", void 0);
		Ng2CollapsableComponent = __decorate([
		    core_1.Component({
		        selector: 'ng2-collapsable, [ng2-collapsable]',
		        encapsulation: core_1.ViewEncapsulation.None,
		        template: "<ng-content></ng-content>",
		        styles: ["\n    [ng2-collapsable] [index] {\n      display: block;\n      cursor: pointer;\n      position: relative;\n      margin: 2px 0 0 0;\n      padding: .5em .5em .5em .7em;\n      border: 1px solid #cccccc;\n      background: #ededed;\n      font-weight: normal;\n      border-radius: 2px; \n      color: #2b2b2b;\n    }\n    [ng2-collapsable] [index].selected {\n      border: 1px solid #003eff;\n      background: #007fff;\n      color: #ffffff;\n      border-radius: 2px 2px 0 0;\n    }\n    [ng2-collapsable] [contents] {\n      border-top: 0;\n      background: #ffffff;\n      color: #333333;\n      padding: 0px;\n      border-radius: 0 0 2px 2px;\n      height: 0;\n      border: 0;\n      font-size: 0;\n    }\n    [ng2-collapsable] [contents].selected {\n      height: 50px;\n      padding: 10px;\n      border: 1px solid #dddddd;\n      transition: font-size 0.3s ease-in, height 0.3s ease-in;\n      font-size: inherit;\n    }\n  "],
		    }),
		    __metadata("design:paramtypes", [core_1.ViewContainerRef])
		], Ng2CollapsableComponent);
		exports.Ng2CollapsableComponent = Ng2CollapsableComponent;
	
	
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
		var core_1 = __webpack_require__(2);
		var common_1 = __webpack_require__(4);
		var forms_1 = __webpack_require__(5);
		var ng2_collapsable_component_1 = __webpack_require__(1);
		var Ng2CollapsableModule = (function () {
		    function Ng2CollapsableModule() {
		    }
		    return Ng2CollapsableModule;
		}());
		Ng2CollapsableModule = __decorate([
		    core_1.NgModule({
		        imports: [common_1.CommonModule, forms_1.FormsModule],
		        declarations: [ng2_collapsable_component_1.Ng2CollapsableComponent],
		        exports: [ng2_collapsable_component_1.Ng2CollapsableComponent]
		    }),
		    __metadata("design:paramtypes", [])
		], Ng2CollapsableModule);
		exports.Ng2CollapsableModule = Ng2CollapsableModule;
	
	
	/***/ },
	/* 4 */
	/***/ function(module, exports) {
	
		module.exports = __WEBPACK_EXTERNAL_MODULE_4__;
	
	/***/ },
	/* 5 */
	/***/ function(module, exports) {
	
		module.exports = __WEBPACK_EXTERNAL_MODULE_5__;
	
	/***/ }
	/******/ ])
	});
	;
	//# sourceMappingURL=ng2-collapsable.umd.js.map

/***/ },
/* 22 */
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
		    return Ng2InfiniteListModule;
		}());
		Ng2InfiniteListModule = __decorate([
		    core_1.NgModule({
		        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule],
		        declarations: [ng2_infinite_list_directive_1.Ng2InfiniteListDirective],
		        exports: [ng2_infinite_list_directive_1.Ng2InfiniteListDirective]
		    }),
		    __metadata("design:paramtypes", [])
		], Ng2InfiniteListModule);
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
		    return Ng2InfiniteListDirective;
		}());
		__decorate([
		    core_1.Input(),
		    __metadata("design:type", Boolean)
		], Ng2InfiniteListDirective.prototype, "horizontal", void 0);
		__decorate([
		    core_1.Output(),
		    __metadata("design:type", Object)
		], Ng2InfiniteListDirective.prototype, "endVisible", void 0);
		Ng2InfiniteListDirective = __decorate([
		    core_1.Directive({ selector: '[ng2-infinite-list]' }),
		    __metadata("design:paramtypes", [core_1.ElementRef])
		], Ng2InfiniteListDirective);
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

/***/ }
/******/ ])
});
;
//# sourceMappingURL=ng2-ui.umd.js.map