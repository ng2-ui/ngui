(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/core"), require("@angular/forms"), require("@angular/common"), require("@angular/platform-browser"), require("rxjs/Subject"), require("rxjs/operator/debounceTime"), require("rxjs/Observable"), require("@angular/http"), require("rxjs/add/operator/map"));
	else if(typeof define === 'function' && define.amd)
		define(["@angular/core", "@angular/forms", "@angular/common", "@angular/platform-browser", "rxjs/Subject", "rxjs/operator/debounceTime", "rxjs/Observable", "@angular/http", "rxjs/add/operator/map"], factory);
	else if(typeof exports === 'object')
		exports["ng2-ui"] = factory(require("@angular/core"), require("@angular/forms"), require("@angular/common"), require("@angular/platform-browser"), require("rxjs/Subject"), require("rxjs/operator/debounceTime"), require("rxjs/Observable"), require("@angular/http"), require("rxjs/add/operator/map"));
	else
		root["ng2-ui"] = factory(root["@angular/core"], root["@angular/forms"], root["@angular/common"], root["@angular/platform-browser"], root["rxjs/Subject"], root["rxjs/operator/debounceTime"], root["rxjs/Observable"], root["@angular/http"], root["rxjs/add/operator/map"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_18__, __WEBPACK_EXTERNAL_MODULE_19__, __WEBPACK_EXTERNAL_MODULE_20__, __WEBPACK_EXTERNAL_MODULE_60__, __WEBPACK_EXTERNAL_MODULE_100__, __WEBPACK_EXTERNAL_MODULE_101__) {
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
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 102);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var option_builder_1 = __webpack_require__(8);
var navigator_geolocation_1 = __webpack_require__(11);
var config_1 = __webpack_require__(10);
var geo_coder_1 = __webpack_require__(6);
var ng2_map_1 = __webpack_require__(7);
var Subject_1 = __webpack_require__(19);
var debounceTime_1 = __webpack_require__(20);
var util_1 = __webpack_require__(43);
var INPUTS = [
    'backgroundColor', 'center', 'disableDefaultUI', 'disableDoubleClickZoom', 'draggable', 'draggableCursor',
    'draggingCursor', 'heading', 'keyboardShortcuts', 'mapMaker', 'mapTypeControl', 'mapTypeId', 'maxZoom', 'minZoom',
    'noClear', 'overviewMapControl', 'panControl', 'panControlOptions', 'rotateControl', 'scaleControl', 'scrollwheel',
    'streetView', 'styles', 'tilt', 'zoom', 'streetViewControl', 'zoomControl', 'mapTypeControlOptions',
    'overviewMapControlOptions', 'rotateControlOptions', 'scaleControlOptions', 'streetViewControlOptions',
    'options',
    // ng2-map-specific inputs
    'geoFallbackCenter'
];
var OUTPUTS = [
    'bounds_changed', 'center_changed', 'click', 'dblclick', 'drag', 'dragend', 'dragstart', 'heading_changed', 'idle',
    'typeid_changed', 'mousemove', 'mouseout', 'mouseover', 'projection_changed', 'resize', 'rightclick',
    'tilesloaded', 'tile_changed', 'zoom_changed',
    // to avoid DOM event conflicts
    'mapClick', 'mapMouseover', 'mapMouseout', 'mapMousemove', 'mapDrag', 'mapDragend', 'mapDragstart'
];
var Ng2MapComponent = (function () {
    function Ng2MapComponent(optionBuilder, elementRef, zone, geolocation, geoCoder, ng2Map, config) {
        var _this = this;
        this.optionBuilder = optionBuilder;
        this.elementRef = elementRef;
        this.zone = zone;
        this.geolocation = geolocation;
        this.geoCoder = geoCoder;
        this.ng2Map = ng2Map;
        this.config = config;
        this.mapReady$ = new core_1.EventEmitter();
        this.mapOptions = {};
        this.inputChanges$ = new Subject_1.Subject();
        // map objects by group
        this.infoWindows = {};
        // map has been fully initialized
        this.mapIdledOnce = false;
        this.config = this.config || { apiUrl: 'https://maps.google.com/maps/api/js' };
        window['ng2MapRef'] = window['ng2MapRef'] || [];
        this.mapIndex = window['ng2MapRef'].length;
        window['ng2MapRef'].push({ zone: this.zone, componentFn: function () { return _this.initializeMap(); } });
        if (typeof google === 'undefined' || typeof google.maps === 'undefined' || !google.maps.Map) {
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
        window['initNg2Map'] = window['initNg2Map'] || function () {
            window['ng2MapRef'].forEach(function (ng2MapRef) {
                ng2MapRef.zone.run(function () { ng2MapRef.componentFn(); });
            });
            window['ng2MapRef'].splice(0, window['ng2MapRef'].length);
        };
        if ((!window['google'] || !window['google']['maps']) && !document.querySelector('#ng2-map-api')) {
            var script = document.createElement('script');
            script.id = 'ng2-map-api';
            // script.src = "https://maps.google.com/maps/api/js?callback=initNg2Map";
            var apiUrl = this.config.apiUrl;
            apiUrl += apiUrl.indexOf('?') !== -1 ? '&' : '?';
            script.src = apiUrl + 'callback=initNg2Map';
            document.querySelector('body').appendChild(script);
        }
    };
    Ng2MapComponent.prototype.initializeMap = function () {
        var _this = this;
        this.el = this.elementRef.nativeElement.querySelector('.google-map');
        this.mapOptions = this.optionBuilder.googlizeAllInputs(INPUTS, this);
        console.log('ng2-map mapOptions', this.mapOptions);
        this.mapOptions.zoom = this.mapOptions.zoom || 15;
        typeof this.mapOptions.center === 'string' && (delete this.mapOptions.center);
        this.map = new google.maps.Map(this.el, this.mapOptions);
        this.map['mapObjectName'] = 'Ng2MapComponent';
        if (!this.mapOptions.center) {
            this.setCenter();
        }
        // set google events listeners and emits to this outputs listeners
        this.ng2Map.setObjectEvents(OUTPUTS, this, 'map');
        this.map.addListener('idle', function () {
            if (!_this.mapIdledOnce) {
                _this.mapIdledOnce = true;
                setTimeout(function () {
                    _this.mapReady$.emit(_this.map);
                });
            }
        });
        // update map when input changes
        debounceTime_1.debounceTime.call(this.inputChanges$, 1000)
            .subscribe(function (changes) { return _this.ng2Map.updateGoogleObject(_this.map, changes); });
        // expose map object for test and debugging on (window as any)
        console.log('this.mapIndex', this.mapIndex);
        window['ng2MapRef'].map = this.map;
    };
    Ng2MapComponent.prototype.setCenter = function () {
        var _this = this;
        if (!this['center']) {
            this.geolocation.getCurrentPosition().subscribe(function (position) {
                console.log('setting map center from current location');
                var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                _this.map.setCenter(latLng);
            }, function (error) {
                console.error('ng2-map: Error finding the current position');
                _this.map.setCenter(_this.mapOptions['geoFallbackCenter'] || new google.maps.LatLng(0, 0));
            });
        }
        else if (typeof this['center'] === 'string') {
            this.geoCoder.geocode({ address: this['center'] }).subscribe(function (results) {
                console.log('setting map center from address', _this['center']);
                _this.map.setCenter(results[0].geometry.location);
            }, function (error) {
                _this.map.setCenter(_this.mapOptions['geoFallbackCenter'] || new google.maps.LatLng(0, 0));
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
    // map.markers, map.circles, map.heatmapLayers.. etc
    Ng2MapComponent.prototype.addToMapObjectGroup = function (mapObjectName, mapObject) {
        var groupName = util_1.toCamelCase(mapObjectName.toLowerCase()) + 's'; // e.g. markers
        this.map[groupName] = this.map[groupName] || [];
        this.map[groupName].push(mapObject);
    };
    Ng2MapComponent.prototype.removeFromMapObjectGroup = function (mapObjectName, mapObject) {
        var groupName = util_1.toCamelCase(mapObjectName.toLowerCase()) + 's'; // e.g. markers
        var index = this.map[groupName].indexOf(mapObject);
        console.log('index', mapObject, index);
        (index > -1) && this.map[groupName].splice(index, 1);
    };
    Ng2MapComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'ng2-map',
                    providers: [ng2_map_1.Ng2Map, option_builder_1.OptionBuilder, geo_coder_1.GeoCoder, navigator_geolocation_1.NavigatorGeolocation],
                    styles: ["\n    ng2-map {display: block; height: 300px;}\n    .google-map {width: 100%; height: 100%}\n  "],
                    inputs: INPUTS,
                    outputs: OUTPUTS,
                    encapsulation: core_1.ViewEncapsulation.None,
                    template: "\n    <div class=\"google-map\"></div>\n    <ng-content></ng-content>\n  ",
                },] },
    ];
    /** @nocollapse */
    Ng2MapComponent.ctorParameters = [
        { type: option_builder_1.OptionBuilder, },
        { type: core_1.ElementRef, },
        { type: core_1.NgZone, },
        { type: navigator_geolocation_1.NavigatorGeolocation, },
        { type: geo_coder_1.GeoCoder, },
        { type: ng2_map_1.Ng2Map, },
        { type: undefined, decorators: [{ type: core_1.Optional }, { type: core_1.Inject, args: [config_1.NG_MAP_CONFIG_TOKEN,] },] },
    ];
    Ng2MapComponent.propDecorators = {
        'mapReady$': [{ type: core_1.Output },],
    };
    return Ng2MapComponent;
}());
exports.Ng2MapComponent = Ng2MapComponent;
//# sourceMappingURL=ng2-map.component.js.map

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var BaseMapDirective = (function () {
    function BaseMapDirective(ng2MapComponent, mapObjectName, inputs, outputs) {
        var _this = this;
        this.ng2MapComponent = ng2MapComponent;
        this.mapObjectName = mapObjectName;
        this.inputs = inputs;
        this.outputs = outputs;
        // this should be redefined on each childr directive
        this.initialized$ = new core_1.EventEmitter();
        this._subscriptions = [];
        this.ng2Map = this.ng2MapComponent['ng2Map'];
        this.optionBuilder = this.ng2MapComponent['optionBuilder'];
        // all outputs must be initialized
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
        console.log(this.mapObjectName, 'initialization options', this.objectOptions);
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
        this.ng2MapComponent.addToMapObjectGroup(this.mapObjectName, this.mapObject);
        this.initialized$.emit(this.mapObject);
    };
    // When input is changed, update object too.
    // e.g., when map center is changed by user, update center on the map
    BaseMapDirective.prototype.ngOnChanges = function (changes) {
        console.log(this.mapObjectName, 'objectOptions are changed', changes);
        this.ng2Map.updateGoogleObject(this.mapObject, changes);
    };
    // When destroyed, remove event listener, and delete this object to prevent memory leak
    BaseMapDirective.prototype.ngOnDestroy = function () {
        var _this = this;
        this._subscriptions.map(function (subscription) { return subscription.unsubscribe(); });
        this.ng2MapComponent.removeFromMapObjectGroup(this.mapObjectName, this.mapObject);
        if (this.mapObject) {
            this.outputs.forEach(function (output) { return google.maps.event.clearListeners(_this.mapObject, output); });
            this.mapObject['setMap'](null);
            delete this.mapObject;
        }
    };
    BaseMapDirective.propDecorators = {
        'initialized$': [{ type: core_1.Output },],
    };
    return BaseMapDirective;
}());
exports.BaseMapDirective = BaseMapDirective;
//# sourceMappingURL=base-map-directive.js.map

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ng2_overlay_1 = __webpack_require__(46);
exports.Ng2Overlay = ng2_overlay_1.Ng2Overlay;
var ng2_overlay_manager_1 = __webpack_require__(17);
exports.Ng2OverlayManager = ng2_overlay_manager_1.Ng2OverlayManager;
var ng2_overlay_directive_1 = __webpack_require__(45);
exports.Ng2OverlayDirective = ng2_overlay_directive_1.Ng2OverlayDirective;
var ng2_overlay_module_1 = __webpack_require__(74);
exports.Ng2OverlayModule = ng2_overlay_module_1.Ng2OverlayModule;
//# sourceMappingURL=index.js.map

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var Observable_1 = __webpack_require__(60);
/**
 *   Provides [defered/promise API](https://docs.angularjs.org/api/ng/service/$q)
 *   service for Google Geocoder service
 */
var GeoCoder = (function () {
    function GeoCoder() {
    }
    GeoCoder.prototype.geocode = function (options) {
        var geocoder = new google.maps.Geocoder();
        return new Observable_1.Observable(function (responseObserver) {
            geocoder.geocode(options, function (results, status) {
                if (status === google.maps.GeocoderStatus.OK) {
                    responseObserver.next(results);
                    responseObserver.complete();
                }
                else {
                    responseObserver.error(results);
                }
            });
        });
    };
    ;
    GeoCoder.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    GeoCoder.ctorParameters = [];
    return GeoCoder;
}());
exports.GeoCoder = GeoCoder;
//# sourceMappingURL=geo-coder.js.map

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var option_builder_1 = __webpack_require__(8);
var geo_coder_1 = __webpack_require__(6);
/**
 * collection of map instance-related properties and methods
 */
var Ng2Map = (function () {
    function Ng2Map(geoCoder, optionBuilder) {
        var _this = this;
        this.geoCoder = geoCoder;
        this.optionBuilder = optionBuilder;
        this.updateGoogleObject = function (object, changes) {
            var val, currentValue, setMethodName;
            if (object) {
                for (var key in changes) {
                    setMethodName = "set" + key.replace(/^[a-z]/, function (x) { return x.toUpperCase(); });
                    currentValue = changes[key].currentValue;
                    if (['position', 'center'].indexOf(key) !== -1 && typeof currentValue === 'string') {
                        // To preserve setMethod name in Observable callback, wrap it as a function, then execute
                        (function (setMethodName) {
                            _this.geoCoder.geocode({ address: currentValue }).subscribe(function (results) {
                                object[setMethodName](results[0].geometry.location);
                            });
                        })(setMethodName);
                    }
                    else {
                        val = _this.optionBuilder.googlize(currentValue);
                        object[setMethodName](val);
                    }
                }
            }
        };
    }
    Ng2Map.prototype.setObjectEvents = function (definedEvents, thisObj, prefix) {
        definedEvents.forEach(function (definedEvent) {
            var eventName = definedEvent
                .replace(/([A-Z])/g, function ($1) { return ("_" + $1.toLowerCase()); }) //positionChanged -> position_changed
                .replace(/^map_/, ''); //map_click -> click  to avoid DOM conflicts
            thisObj[prefix].addListener(eventName, function (event) {
                var param = event ? event : {};
                param.target = this;
                thisObj[definedEvent].emit(param);
            });
        });
    };
    Ng2Map.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    Ng2Map.ctorParameters = [
        { type: geo_coder_1.GeoCoder, },
        { type: option_builder_1.OptionBuilder, },
    ];
    return Ng2Map;
}());
exports.Ng2Map = Ng2Map;
//# sourceMappingURL=ng2-map.js.map

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var util_1 = __webpack_require__(43);
var geo_coder_1 = __webpack_require__(6);
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
            console.log('userInputs.options .................', userInputs.options);
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
        if (options['key']) {
            var key = options['key'];
            if (output instanceof Array) {
                if (key === 'bounds') {
                    output = new google.maps.LatLngBounds(output[0], output[1]);
                }
                else if (key === 'icons') {
                    output = this.getMapIcons(output);
                }
                else if (key === 'position' || key.match(/^geoFallback/)) {
                    output = this.getLatLng(output);
                }
            }
            else if (output instanceof Object) {
                if (key === 'icon') {
                    output = this.getMarkerIcon(output);
                }
                else if (key.match(/ControlOptions$/)) {
                    output = this.getMapControlOption(output);
                }
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
                output = Function("return new google.maps." + input + ";")();
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
    OptionBuilder.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    OptionBuilder.ctorParameters = [
        { type: geo_coder_1.GeoCoder, },
    ];
    return OptionBuilder;
}());
exports.OptionBuilder = OptionBuilder;
//# sourceMappingURL=option-builder.js.map

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
/**
 * Static variables that you can override
 *   1. days.           default 1,2,....31
 *   2. daysOfWeek,     default Sunday, Monday, .....
 *   3. firstDayOfWeek, default 0 as in Sunday
 *   4. months,         default January, February
 *   5. formatDate(d)   default returns YYYY-MM-DD HH:MM
 *   6. parseDate(str)  default returns date from YYYY-MM-DD HH:MM
 */
var Ng2Datetime = (function () {
    function Ng2Datetime() {
    }
    Ng2Datetime.formatDate = function (d, format, dateOnly) {
        var ret;
        if (d && !format) {
            // return d.toLocaleString('en-us', hash); // IE11 does not understand this
            var pad0 = function (number) { return ("0" + number).slice(-2); };
            ret = d.getFullYear() + '-' + pad0(d.getMonth() + 1) + '-' + pad0(d.getDate());
            ret += dateOnly ? '' : ' ' + pad0(d.getHours()) + ':' + pad0(d.getMinutes());
            return ret;
        }
        else if (d && moment) {
            return moment(d).format(format);
        }
        else {
            return '';
        }
    };
    Ng2Datetime.parseDate = function (dateStr, parseFormat, dateFormat) {
        if (typeof moment === 'undefined') {
            dateStr = Ng2Datetime.removeTimezone(dateStr);
            dateStr = dateStr + Ng2Datetime.addDSTOffset(dateStr);
            return Ng2Datetime.parseFromDefaultFormat(dateStr);
        }
        else if (dateFormat || parseFormat) {
            // try parse using each format because changing format programmatically calls this twice,
            // once with string in parse format and once in date format
            var formats = [];
            if (parseFormat) {
                formats.push(parseFormat);
            }
            if (dateFormat) {
                formats.push(dateFormat);
            }
            var m = moment(dateStr, formats);
            var date = m.toDate();
            if (!m.isValid()) {
                date = moment(dateStr, moment.ISO_8601).toDate(); // parse as ISO format
            }
            return date;
        }
        else if (dateStr.length > 4) {
            var date = moment(dateStr, 'YYYY-MM-DD HH:mm').toDate();
            return date;
        }
        else {
            return new Date();
        }
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
        var date = Ng2Datetime.parseFromDefaultFormat(dateStr);
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
    Ng2Datetime.parseFromDefaultFormat = function (dateStr) {
        var tmp = dateStr.split(/[\+\-:\ T]/); // split by dash, colon or space
        return new Date(parseInt(tmp[0], 10), parseInt(tmp[1], 10) - 1, parseInt(tmp[2], 10), parseInt(tmp[3] || '0', 10), parseInt(tmp[4] || '0', 10), parseInt(tmp[5] || '0', 10));
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
        var leadingDays = (dayOfWeek - Ng2Datetime.firstDayOfWeek + 7) % 7 || 7;
        var trailingDays = Ng2Datetime.days.slice(0, 6 * 7 - (leadingDays + daysInMonth));
        if (trailingDays.length > 7) {
            trailingDays = trailingDays.slice(0, trailingDays.length - 7);
        }
        var localizedDaysOfWeek = Ng2Datetime.daysOfWeek
            .concat(Ng2Datetime.daysOfWeek)
            .splice(Ng2Datetime.firstDayOfWeek, 7);
        var monthData = {
            year: year,
            month: month,
            weekends: Ng2Datetime.weekends,
            firstDayOfWeek: Ng2Datetime.firstDayOfWeek,
            fullName: Ng2Datetime.months[month].fullName,
            shortName: Ng2Datetime.months[month].shortName,
            localizedDaysOfWeek: localizedDaysOfWeek,
            days: Ng2Datetime.days.slice(0, daysInMonth),
            leadingDays: Ng2Datetime.days.slice(-leadingDays - (31 - daysInLastMonth), daysInLastMonth),
            trailingDays: trailingDays
        };
        return monthData;
    };
    Ng2Datetime.locale = {
        date: 'date',
        time: 'time',
        year: 'year',
        month: 'month',
        day: 'day',
        hour: 'hour',
        minute: 'minute',
        currentTime: "current time"
    };
    Ng2Datetime.days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    Ng2Datetime.weekends = [0, 6];
    Ng2Datetime.daysOfWeek = typeof moment === 'undefined' ? [
        { fullName: 'Sunday', shortName: 'Su' },
        { fullName: 'Monday', shortName: 'Mo' },
        { fullName: 'Tuesday', shortName: 'Tu' },
        { fullName: 'Wednesday', shortName: 'We' },
        { fullName: 'Thursday', shortName: 'Th' },
        { fullName: 'Friday', shortName: 'Fr' },
        { fullName: 'Saturday', shortName: 'Sa' }
    ] : moment.weekdays().map(function (el, index) {
        return {
            fullName: el,
            shortName: moment.weekdaysShort()[index].substr(0, 2)
        };
    });
    Ng2Datetime.firstDayOfWeek = typeof moment === 'undefined' ? 0 : moment.localeData().firstDayOfWeek();
    Ng2Datetime.months = typeof moment === 'undefined' ? [
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
    ] : moment.months().map(function (el, index) {
        return {
            fullName: el,
            shortName: moment['monthsShort']()[index]
        };
    });
    Ng2Datetime.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    Ng2Datetime.ctorParameters = [];
    return Ng2Datetime;
}());
exports.Ng2Datetime = Ng2Datetime;
//# sourceMappingURL=ng2-datetime.js.map

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
exports.NG_MAP_CONFIG_TOKEN = new core_1.OpaqueToken('NG_MAP_CONFIG_TOKEN');
//# sourceMappingURL=config.js.map

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var Observable_1 = __webpack_require__(60);
/**
 *  service for navigator.geolocation methods
 */
var NavigatorGeolocation = (function () {
    function NavigatorGeolocation() {
    }
    NavigatorGeolocation.prototype.getCurrentPosition = function (geoLocationOptions) {
        geoLocationOptions = geoLocationOptions || { timeout: 5000 };
        return new Observable_1.Observable(function (responseObserver) {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function (position) {
                    responseObserver.next(position);
                    responseObserver.complete();
                }, function (evt) { return responseObserver.error(evt); }, geoLocationOptions);
            }
            else {
                responseObserver.error('Browser Geolocation service failed.');
            }
        });
    };
    ;
    NavigatorGeolocation.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    NavigatorGeolocation.ctorParameters = [];
    return NavigatorGeolocation;
}());
exports.NavigatorGeolocation = NavigatorGeolocation;
//# sourceMappingURL=navigator-geolocation.js.map

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*jshint curly:true, eqeqeq:true, laxbreak:true, noempty:false */
/*

  The MIT License (MIT)

  Copyright (c) 2007-2017 Einar Lielmanis, Liam Newman, and contributors.

  Permission is hereby granted, free of charge, to any person
  obtaining a copy of this software and associated documentation files
  (the "Software"), to deal in the Software without restriction,
  including without limitation the rights to use, copy, modify, merge,
  publish, distribute, sublicense, and/or sell copies of the Software,
  and to permit persons to whom the Software is furnished to do so,
  subject to the following conditions:

  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
  BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
  ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
  CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.


 CSS Beautifier
---------------

    Written by Harutyun Amirjanyan, (amirjanyan@gmail.com)

    Based on code initially developed by: Einar Lielmanis, <einar@jsbeautifier.org>
        http://jsbeautifier.org/

    Usage:
        css_beautify(source_text);
        css_beautify(source_text, options);

    The options are (default in brackets):
        indent_size (4)                         — indentation size,
        indent_char (space)                     — character to indent with,
        selector_separator_newline (true)       - separate selectors with newline or
                                                  not (e.g. "a,\nbr" or "a, br")
        end_with_newline (false)                - end with a newline
        newline_between_rules (true)            - add a new line after every css rule
        space_around_selector_separator (false) - ensure space around selector separators:
                                                  '>', '+', '~' (e.g. "a>b" -> "a > b")
    e.g

    css_beautify(css_source_text, {
      'indent_size': 1,
      'indent_char': '\t',
      'selector_separator': ' ',
      'end_with_newline': false,
      'newline_between_rules': true,
      'space_around_selector_separator': true
    });
*/

// http://www.w3.org/TR/CSS21/syndata.html#tokenization
// http://www.w3.org/TR/css3-syntax/

(function() {

    function mergeOpts(allOptions, targetType) {
        var finalOpts = {};
        var name;

        for (name in allOptions) {
            if (name !== targetType) {
                finalOpts[name] = allOptions[name];
            }
        }


        //merge in the per type settings for the targetType
        if (targetType in allOptions) {
            for (name in allOptions[targetType]) {
                finalOpts[name] = allOptions[targetType][name];
            }
        }
        return finalOpts;
    }

    var lineBreak = /\r\n|[\n\r\u2028\u2029]/;
    var allLineBreaks = new RegExp(lineBreak.source, 'g');

    function css_beautify(source_text, options) {
        options = options || {};

        // Allow the setting of language/file-type specific options
        // with inheritance of overall settings
        options = mergeOpts(options, 'css');

        source_text = source_text || '';

        var indentSize = options.indent_size ? parseInt(options.indent_size, 10) : 4;
        var indentCharacter = options.indent_char || ' ';
        var selectorSeparatorNewline = (options.selector_separator_newline === undefined) ? true : options.selector_separator_newline;
        var end_with_newline = (options.end_with_newline === undefined) ? false : options.end_with_newline;
        var newline_between_rules = (options.newline_between_rules === undefined) ? true : options.newline_between_rules;
        var space_around_combinator = (options.space_around_combinator === undefined) ? false : options.space_around_combinator;
        space_around_combinator = space_around_combinator || ((options.space_around_selector_separator === undefined) ? false : options.space_around_selector_separator);
        var eol = options.eol ? options.eol : 'auto';

        if (options.indent_with_tabs) {
            indentCharacter = '\t';
            indentSize = 1;
        }

        if (eol === 'auto') {
            eol = '\n';
            if (source_text && lineBreak.test(source_text || '')) {
                eol = source_text.match(lineBreak)[0];
            }
        }

        eol = eol.replace(/\\r/, '\r').replace(/\\n/, '\n');

        // HACK: newline parsing inconsistent. This brute force normalizes the input.
        source_text = source_text.replace(allLineBreaks, '\n');

        // tokenizer
        var whiteRe = /^\s+$/;

        var pos = -1,
            ch;
        var parenLevel = 0;

        function next() {
            ch = source_text.charAt(++pos);
            return ch || '';
        }

        function peek(skipWhitespace) {
            var result = '';
            var prev_pos = pos;
            if (skipWhitespace) {
                eatWhitespace();
            }
            result = source_text.charAt(pos + 1) || '';
            pos = prev_pos - 1;
            next();
            return result;
        }

        function eatString(endChars) {
            var start = pos;
            while (next()) {
                if (ch === "\\") {
                    next();
                } else if (endChars.indexOf(ch) !== -1) {
                    break;
                } else if (ch === "\n") {
                    break;
                }
            }
            return source_text.substring(start, pos + 1);
        }

        function peekString(endChar) {
            var prev_pos = pos;
            var str = eatString(endChar);
            pos = prev_pos - 1;
            next();
            return str;
        }

        function eatWhitespace() {
            var result = '';
            while (whiteRe.test(peek())) {
                next();
                result += ch;
            }
            return result;
        }

        function skipWhitespace() {
            var result = '';
            if (ch && whiteRe.test(ch)) {
                result = ch;
            }
            while (whiteRe.test(next())) {
                result += ch;
            }
            return result;
        }

        function eatComment(singleLine) {
            var start = pos;
            singleLine = peek() === "/";
            next();
            while (next()) {
                if (!singleLine && ch === "*" && peek() === "/") {
                    next();
                    break;
                } else if (singleLine && ch === "\n") {
                    return source_text.substring(start, pos);
                }
            }

            return source_text.substring(start, pos) + ch;
        }


        function lookBack(str) {
            return source_text.substring(pos - str.length, pos).toLowerCase() ===
                str;
        }

        // Nested pseudo-class if we are insideRule
        // and the next special character found opens
        // a new block
        function foundNestedPseudoClass() {
            var openParen = 0;
            for (var i = pos + 1; i < source_text.length; i++) {
                var ch = source_text.charAt(i);
                if (ch === "{") {
                    return true;
                } else if (ch === '(') {
                    // pseudoclasses can contain ()
                    openParen += 1;
                } else if (ch === ')') {
                    if (openParen === 0) {
                        return false;
                    }
                    openParen -= 1;
                } else if (ch === ";" || ch === "}") {
                    return false;
                }
            }
            return false;
        }

        // printer
        var basebaseIndentString = source_text.match(/^[\t ]*/)[0];
        var singleIndent = new Array(indentSize + 1).join(indentCharacter);
        var indentLevel = 0;
        var nestedLevel = 0;

        function indent() {
            indentLevel++;
            basebaseIndentString += singleIndent;
        }

        function outdent() {
            indentLevel--;
            basebaseIndentString = basebaseIndentString.slice(0, -indentSize);
        }

        var print = {};
        print["{"] = function(ch) {
            print.singleSpace();
            output.push(ch);
            print.newLine();
        };
        print["}"] = function(ch) {
            print.newLine();
            output.push(ch);
            print.newLine();
        };

        print._lastCharWhitespace = function() {
            return whiteRe.test(output[output.length - 1]);
        };

        print.newLine = function(keepWhitespace) {
            if (output.length) {
                if (!keepWhitespace && output[output.length - 1] !== '\n') {
                    print.trim();
                }

                output.push('\n');

                if (basebaseIndentString) {
                    output.push(basebaseIndentString);
                }
            }
        };
        print.singleSpace = function() {
            if (output.length && !print._lastCharWhitespace()) {
                output.push(' ');
            }
        };

        print.preserveSingleSpace = function() {
            if (isAfterSpace) {
                print.singleSpace();
            }
        };

        print.trim = function() {
            while (print._lastCharWhitespace()) {
                output.pop();
            }
        };


        var output = [];
        /*_____________________--------------------_____________________*/

        var insideRule = false;
        var insidePropertyValue = false;
        var enteringConditionalGroup = false;
        var top_ch = '';
        var last_top_ch = '';

        while (true) {
            var whitespace = skipWhitespace();
            var isAfterSpace = whitespace !== '';
            var isAfterNewline = whitespace.indexOf('\n') !== -1;
            last_top_ch = top_ch;
            top_ch = ch;

            if (!ch) {
                break;
            } else if (ch === '/' && peek() === '*') { /* css comment */
                var header = indentLevel === 0;

                if (isAfterNewline || header) {
                    print.newLine();
                }

                output.push(eatComment());
                print.newLine();
                if (header) {
                    print.newLine(true);
                }
            } else if (ch === '/' && peek() === '/') { // single line comment
                if (!isAfterNewline && last_top_ch !== '{') {
                    print.trim();
                }
                print.singleSpace();
                output.push(eatComment());
                print.newLine();
            } else if (ch === '@') {
                print.preserveSingleSpace();

                // deal with less propery mixins @{...}
                if (peek() === '{') {
                    output.push(eatString('}'));
                } else {
                    output.push(ch);

                    // strip trailing space, if present, for hash property checks
                    var variableOrRule = peekString(": ,;{}()[]/='\"");

                    if (variableOrRule.match(/[ :]$/)) {
                        // we have a variable or pseudo-class, add it and insert one space before continuing
                        next();
                        variableOrRule = eatString(": ").replace(/\s$/, '');
                        output.push(variableOrRule);
                        print.singleSpace();
                    }

                    variableOrRule = variableOrRule.replace(/\s$/, '');

                    // might be a nesting at-rule
                    if (variableOrRule in css_beautify.NESTED_AT_RULE) {
                        nestedLevel += 1;
                        if (variableOrRule in css_beautify.CONDITIONAL_GROUP_RULE) {
                            enteringConditionalGroup = true;
                        }
                    }
                }
            } else if (ch === '#' && peek() === '{') {
                print.preserveSingleSpace();
                output.push(eatString('}'));
            } else if (ch === '{') {
                if (peek(true) === '}') {
                    eatWhitespace();
                    next();
                    print.singleSpace();
                    output.push("{}");
                    print.newLine();
                    if (newline_between_rules && indentLevel === 0) {
                        print.newLine(true);
                    }
                } else {
                    indent();
                    print["{"](ch);
                    // when entering conditional groups, only rulesets are allowed
                    if (enteringConditionalGroup) {
                        enteringConditionalGroup = false;
                        insideRule = (indentLevel > nestedLevel);
                    } else {
                        // otherwise, declarations are also allowed
                        insideRule = (indentLevel >= nestedLevel);
                    }
                }
            } else if (ch === '}') {
                outdent();
                print["}"](ch);
                insideRule = false;
                insidePropertyValue = false;
                if (nestedLevel) {
                    nestedLevel--;
                }
                if (newline_between_rules && indentLevel === 0) {
                    print.newLine(true);
                }
            } else if (ch === ":") {
                eatWhitespace();
                if ((insideRule || enteringConditionalGroup) &&
                    !(lookBack("&") || foundNestedPseudoClass()) &&
                    !lookBack("(")) {
                    // 'property: value' delimiter
                    // which could be in a conditional group query
                    output.push(':');
                    if (!insidePropertyValue) {
                        insidePropertyValue = true;
                        print.singleSpace();
                    }
                } else {
                    // sass/less parent reference don't use a space
                    // sass nested pseudo-class don't use a space

                    // preserve space before pseudoclasses/pseudoelements, as it means "in any child"
                    if (lookBack(" ") && output[output.length - 1] !== " ") {
                        output.push(" ");
                    }
                    if (peek() === ":") {
                        // pseudo-element
                        next();
                        output.push("::");
                    } else {
                        // pseudo-class
                        output.push(':');
                    }
                }
            } else if (ch === '"' || ch === '\'') {
                print.preserveSingleSpace();
                output.push(eatString(ch));
            } else if (ch === ';') {
                insidePropertyValue = false;
                output.push(ch);
                print.newLine();
            } else if (ch === '(') { // may be a url
                if (lookBack("url")) {
                    output.push(ch);
                    eatWhitespace();
                    if (next()) {
                        if (ch !== ')' && ch !== '"' && ch !== '\'') {
                            output.push(eatString(')'));
                        } else {
                            pos--;
                        }
                    }
                } else {
                    parenLevel++;
                    print.preserveSingleSpace();
                    output.push(ch);
                    eatWhitespace();
                }
            } else if (ch === ')') {
                output.push(ch);
                parenLevel--;
            } else if (ch === ',') {
                output.push(ch);
                eatWhitespace();
                if (selectorSeparatorNewline && !insidePropertyValue && parenLevel < 1) {
                    print.newLine();
                } else {
                    print.singleSpace();
                }
            } else if ((ch === '>' || ch === '+' || ch === '~') &&
                !insidePropertyValue && parenLevel < 1) {
                //handle combinator spacing
                if (space_around_combinator) {
                    print.singleSpace();
                    output.push(ch);
                    print.singleSpace();
                } else {
                    output.push(ch);
                    eatWhitespace();
                    // squash extra whitespace
                    if (ch && whiteRe.test(ch)) {
                        ch = '';
                    }
                }
            } else if (ch === ']') {
                output.push(ch);
            } else if (ch === '[') {
                print.preserveSingleSpace();
                output.push(ch);
            } else if (ch === '=') { // no whitespace before or after
                eatWhitespace();
                ch = '=';
                output.push(ch);
            } else {
                print.preserveSingleSpace();
                output.push(ch);
            }
        }


        var sweetCode = '';
        if (basebaseIndentString) {
            sweetCode += basebaseIndentString;
        }

        sweetCode += output.join('').replace(/[\r\n\t ]+$/, '');

        // establish end_with_newline
        if (end_with_newline) {
            sweetCode += '\n';
        }

        if (eol !== '\n') {
            sweetCode = sweetCode.replace(/[\n]/g, eol);
        }

        return sweetCode;
    }

    // https://developer.mozilla.org/en-US/docs/Web/CSS/At-rule
    css_beautify.NESTED_AT_RULE = {
        "@page": true,
        "@font-face": true,
        "@keyframes": true,
        // also in CONDITIONAL_GROUP_RULE below
        "@media": true,
        "@supports": true,
        "@document": true
    };
    css_beautify.CONDITIONAL_GROUP_RULE = {
        "@media": true,
        "@supports": true,
        "@document": true
    };

    /*global define */
    if (true) {
        // Add support for AMD ( https://github.com/amdjs/amdjs-api/wiki/AMD#defineamd-property- )
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
            return {
                css_beautify: css_beautify
            };
        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
        // Add support for CommonJS. Just put this file somewhere on your require.paths
        // and you will be able to `var html_beautify = require("beautify").html_beautify`.
        exports.css_beautify = css_beautify;
    } else if (typeof window !== "undefined") {
        // If we're running a web page and don't have either of the above, add our one global
        window.css_beautify = css_beautify;
    } else if (typeof global !== "undefined") {
        // If we don't even have window, try global.
        global.css_beautify = css_beautify;
    }

}());

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*jshint curly:true, eqeqeq:true, laxbreak:true, noempty:false */
/*

  The MIT License (MIT)

  Copyright (c) 2007-2017 Einar Lielmanis, Liam Newman, and contributors.

  Permission is hereby granted, free of charge, to any person
  obtaining a copy of this software and associated documentation files
  (the "Software"), to deal in the Software without restriction,
  including without limitation the rights to use, copy, modify, merge,
  publish, distribute, sublicense, and/or sell copies of the Software,
  and to permit persons to whom the Software is furnished to do so,
  subject to the following conditions:

  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
  BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
  ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
  CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.

 JS Beautifier
---------------


  Written by Einar Lielmanis, <einar@jsbeautifier.org>
      http://jsbeautifier.org/

  Originally converted to javascript by Vital, <vital76@gmail.com>
  "End braces on own line" added by Chris J. Shull, <chrisjshull@gmail.com>
  Parsing improvements for brace-less statements by Liam Newman <bitwiseman@gmail.com>


  Usage:
    js_beautify(js_source_text);
    js_beautify(js_source_text, options);

  The options are:
    indent_size (default 4)          - indentation size,
    indent_char (default space)      - character to indent with,
    preserve_newlines (default true) - whether existing line breaks should be preserved,
    max_preserve_newlines (default unlimited) - maximum number of line breaks to be preserved in one chunk,

    jslint_happy (default false) - if true, then jslint-stricter mode is enforced.

            jslint_happy        !jslint_happy
            ---------------------------------
            function ()         function()

            switch () {         switch() {
            case 1:               case 1:
              break;                break;
            }                   }

    space_after_anon_function (default false) - should the space before an anonymous function's parens be added, "function()" vs "function ()",
          NOTE: This option is overriden by jslint_happy (i.e. if jslint_happy is true, space_after_anon_function is true by design)

    brace_style (default "collapse") - "collapse" | "expand" | "end-expand" | "none" | any of the former + ",preserve-inline"
            put braces on the same line as control statements (default), or put braces on own line (Allman / ANSI style), or just put end braces on own line, or attempt to keep them where they are.
            preserve-inline will try to preserve inline blocks of curly braces

    space_before_conditional (default true) - should the space before conditional statement be added, "if(true)" vs "if (true)",

    unescape_strings (default false) - should printable characters in strings encoded in \xNN notation be unescaped, "example" vs "\x65\x78\x61\x6d\x70\x6c\x65"

    wrap_line_length (default unlimited) - lines should wrap at next opportunity after this number of characters.
          NOTE: This is not a hard limit. Lines will continue until a point where a newline would
                be preserved if it were present.

    end_with_newline (default false)  - end output with a newline


    e.g

    js_beautify(js_source_text, {
      'indent_size': 1,
      'indent_char': '\t'
    });

*/

// Object.values polyfill found here:
// http://tokenposts.blogspot.com.au/2012/04/javascript-objectkeys-browser.html
if (!Object.values) {
    Object.values = function(o) {
        if (o !== Object(o)) {
            throw new TypeError('Object.values called on a non-object');
        }
        var k = [],
            p;
        for (p in o) {
            if (Object.prototype.hasOwnProperty.call(o, p)) {
                k.push(o[p]);
            }
        }
        return k;
    };
}

(function() {

    function mergeOpts(allOptions, targetType) {
        var finalOpts = {};
        var name;

        for (name in allOptions) {
            if (name !== targetType) {
                finalOpts[name] = allOptions[name];
            }
        }

        //merge in the per type settings for the targetType
        if (targetType in allOptions) {
            for (name in allOptions[targetType]) {
                finalOpts[name] = allOptions[targetType][name];
            }
        }
        return finalOpts;
    }

    function js_beautify(js_source_text, options) {

        var acorn = {};
        (function(exports) {
            /* jshint curly: false */
            // This section of code is taken from acorn.
            //
            // Acorn was written by Marijn Haverbeke and released under an MIT
            // license. The Unicode regexps (for identifiers and whitespace) were
            // taken from [Esprima](http://esprima.org) by Ariya Hidayat.
            //
            // Git repositories for Acorn are available at
            //
            //     http://marijnhaverbeke.nl/git/acorn
            //     https://github.com/marijnh/acorn.git

            // ## Character categories

            // Big ugly regular expressions that match characters in the
            // whitespace, identifier, and identifier-start categories. These
            // are only applied when a character is found to actually have a
            // code point above 128.

            var nonASCIIwhitespace = /[\u1680\u180e\u2000-\u200a\u202f\u205f\u3000\ufeff]/; // jshint ignore:line
            var nonASCIIidentifierStartChars = "\xaa\xb5\xba\xc0-\xd6\xd8-\xf6\xf8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0370-\u0374\u0376\u0377\u037a-\u037d\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u048a-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05d0-\u05ea\u05f0-\u05f2\u0620-\u064a\u066e\u066f\u0671-\u06d3\u06d5\u06e5\u06e6\u06ee\u06ef\u06fa-\u06fc\u06ff\u0710\u0712-\u072f\u074d-\u07a5\u07b1\u07ca-\u07ea\u07f4\u07f5\u07fa\u0800-\u0815\u081a\u0824\u0828\u0840-\u0858\u08a0\u08a2-\u08ac\u0904-\u0939\u093d\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097f\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd\u09ce\u09dc\u09dd\u09df-\u09e1\u09f0\u09f1\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a59-\u0a5c\u0a5e\u0a72-\u0a74\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abd\u0ad0\u0ae0\u0ae1\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3d\u0b5c\u0b5d\u0b5f-\u0b61\u0b71\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bd0\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c33\u0c35-\u0c39\u0c3d\u0c58\u0c59\u0c60\u0c61\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd\u0cde\u0ce0\u0ce1\u0cf1\u0cf2\u0d05-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d\u0d4e\u0d60\u0d61\u0d7a-\u0d7f\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0e01-\u0e30\u0e32\u0e33\u0e40-\u0e46\u0e81\u0e82\u0e84\u0e87\u0e88\u0e8a\u0e8d\u0e94-\u0e97\u0e99-\u0e9f\u0ea1-\u0ea3\u0ea5\u0ea7\u0eaa\u0eab\u0ead-\u0eb0\u0eb2\u0eb3\u0ebd\u0ec0-\u0ec4\u0ec6\u0edc-\u0edf\u0f00\u0f40-\u0f47\u0f49-\u0f6c\u0f88-\u0f8c\u1000-\u102a\u103f\u1050-\u1055\u105a-\u105d\u1061\u1065\u1066\u106e-\u1070\u1075-\u1081\u108e\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1380-\u138f\u13a0-\u13f4\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16ee-\u16f0\u1700-\u170c\u170e-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17d7\u17dc\u1820-\u1877\u1880-\u18a8\u18aa\u18b0-\u18f5\u1900-\u191c\u1950-\u196d\u1970-\u1974\u1980-\u19ab\u19c1-\u19c7\u1a00-\u1a16\u1a20-\u1a54\u1aa7\u1b05-\u1b33\u1b45-\u1b4b\u1b83-\u1ba0\u1bae\u1baf\u1bba-\u1be5\u1c00-\u1c23\u1c4d-\u1c4f\u1c5a-\u1c7d\u1ce9-\u1cec\u1cee-\u1cf1\u1cf5\u1cf6\u1d00-\u1dbf\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u2071\u207f\u2090-\u209c\u2102\u2107\u210a-\u2113\u2115\u2119-\u211d\u2124\u2126\u2128\u212a-\u212d\u212f-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2160-\u2188\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2ce4\u2ceb-\u2cee\u2cf2\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u2e2f\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303c\u3041-\u3096\u309d-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312d\u3131-\u318e\u31a0-\u31ba\u31f0-\u31ff\u3400-\u4db5\u4e00-\u9fcc\ua000-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua61f\ua62a\ua62b\ua640-\ua66e\ua67f-\ua697\ua6a0-\ua6ef\ua717-\ua71f\ua722-\ua788\ua78b-\ua78e\ua790-\ua793\ua7a0-\ua7aa\ua7f8-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua822\ua840-\ua873\ua882-\ua8b3\ua8f2-\ua8f7\ua8fb\ua90a-\ua925\ua930-\ua946\ua960-\ua97c\ua984-\ua9b2\ua9cf\uaa00-\uaa28\uaa40-\uaa42\uaa44-\uaa4b\uaa60-\uaa76\uaa7a\uaa80-\uaaaf\uaab1\uaab5\uaab6\uaab9-\uaabd\uaac0\uaac2\uaadb-\uaadd\uaae0-\uaaea\uaaf2-\uaaf4\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uabc0-\uabe2\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d\ufb1f-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\uff21-\uff3a\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc";
            var nonASCIIidentifierChars = "\u0300-\u036f\u0483-\u0487\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u0620-\u0649\u0672-\u06d3\u06e7-\u06e8\u06fb-\u06fc\u0730-\u074a\u0800-\u0814\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0840-\u0857\u08e4-\u08fe\u0900-\u0903\u093a-\u093c\u093e-\u094f\u0951-\u0957\u0962-\u0963\u0966-\u096f\u0981-\u0983\u09bc\u09be-\u09c4\u09c7\u09c8\u09d7\u09df-\u09e0\u0a01-\u0a03\u0a3c\u0a3e-\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a66-\u0a71\u0a75\u0a81-\u0a83\u0abc\u0abe-\u0ac5\u0ac7-\u0ac9\u0acb-\u0acd\u0ae2-\u0ae3\u0ae6-\u0aef\u0b01-\u0b03\u0b3c\u0b3e-\u0b44\u0b47\u0b48\u0b4b-\u0b4d\u0b56\u0b57\u0b5f-\u0b60\u0b66-\u0b6f\u0b82\u0bbe-\u0bc2\u0bc6-\u0bc8\u0bca-\u0bcd\u0bd7\u0be6-\u0bef\u0c01-\u0c03\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62-\u0c63\u0c66-\u0c6f\u0c82\u0c83\u0cbc\u0cbe-\u0cc4\u0cc6-\u0cc8\u0cca-\u0ccd\u0cd5\u0cd6\u0ce2-\u0ce3\u0ce6-\u0cef\u0d02\u0d03\u0d46-\u0d48\u0d57\u0d62-\u0d63\u0d66-\u0d6f\u0d82\u0d83\u0dca\u0dcf-\u0dd4\u0dd6\u0dd8-\u0ddf\u0df2\u0df3\u0e34-\u0e3a\u0e40-\u0e45\u0e50-\u0e59\u0eb4-\u0eb9\u0ec8-\u0ecd\u0ed0-\u0ed9\u0f18\u0f19\u0f20-\u0f29\u0f35\u0f37\u0f39\u0f41-\u0f47\u0f71-\u0f84\u0f86-\u0f87\u0f8d-\u0f97\u0f99-\u0fbc\u0fc6\u1000-\u1029\u1040-\u1049\u1067-\u106d\u1071-\u1074\u1082-\u108d\u108f-\u109d\u135d-\u135f\u170e-\u1710\u1720-\u1730\u1740-\u1750\u1772\u1773\u1780-\u17b2\u17dd\u17e0-\u17e9\u180b-\u180d\u1810-\u1819\u1920-\u192b\u1930-\u193b\u1951-\u196d\u19b0-\u19c0\u19c8-\u19c9\u19d0-\u19d9\u1a00-\u1a15\u1a20-\u1a53\u1a60-\u1a7c\u1a7f-\u1a89\u1a90-\u1a99\u1b46-\u1b4b\u1b50-\u1b59\u1b6b-\u1b73\u1bb0-\u1bb9\u1be6-\u1bf3\u1c00-\u1c22\u1c40-\u1c49\u1c5b-\u1c7d\u1cd0-\u1cd2\u1d00-\u1dbe\u1e01-\u1f15\u200c\u200d\u203f\u2040\u2054\u20d0-\u20dc\u20e1\u20e5-\u20f0\u2d81-\u2d96\u2de0-\u2dff\u3021-\u3028\u3099\u309a\ua640-\ua66d\ua674-\ua67d\ua69f\ua6f0-\ua6f1\ua7f8-\ua800\ua806\ua80b\ua823-\ua827\ua880-\ua881\ua8b4-\ua8c4\ua8d0-\ua8d9\ua8f3-\ua8f7\ua900-\ua909\ua926-\ua92d\ua930-\ua945\ua980-\ua983\ua9b3-\ua9c0\uaa00-\uaa27\uaa40-\uaa41\uaa4c-\uaa4d\uaa50-\uaa59\uaa7b\uaae0-\uaae9\uaaf2-\uaaf3\uabc0-\uabe1\uabec\uabed\uabf0-\uabf9\ufb20-\ufb28\ufe00-\ufe0f\ufe20-\ufe26\ufe33\ufe34\ufe4d-\ufe4f\uff10-\uff19\uff3f";
            var nonASCIIidentifierStart = new RegExp("[" + nonASCIIidentifierStartChars + "]");
            var nonASCIIidentifier = new RegExp("[" + nonASCIIidentifierStartChars + nonASCIIidentifierChars + "]");

            // Whether a single character denotes a newline.

            exports.newline = /[\n\r\u2028\u2029]/;

            // Matches a whole line break (where CRLF is considered a single
            // line break). Used to count lines.

            // in javascript, these two differ
            // in python they are the same, different methods are called on them
            exports.lineBreak = new RegExp('\r\n|' + exports.newline.source);
            exports.allLineBreaks = new RegExp(exports.lineBreak.source, 'g');


            // Test whether a given character code starts an identifier.

            exports.isIdentifierStart = function(code) {
                // permit $ (36) and @ (64). @ is used in ES7 decorators.
                if (code < 65) return code === 36 || code === 64;
                // 65 through 91 are uppercase letters.
                if (code < 91) return true;
                // permit _ (95).
                if (code < 97) return code === 95;
                // 97 through 123 are lowercase letters.
                if (code < 123) return true;
                return code >= 0xaa && nonASCIIidentifierStart.test(String.fromCharCode(code));
            };

            // Test whether a given character is part of an identifier.

            exports.isIdentifierChar = function(code) {
                if (code < 48) return code === 36;
                if (code < 58) return true;
                if (code < 65) return false;
                if (code < 91) return true;
                if (code < 97) return code === 95;
                if (code < 123) return true;
                return code >= 0xaa && nonASCIIidentifier.test(String.fromCharCode(code));
            };
        })(acorn);
        /* jshint curly: true */

        function in_array(what, arr) {
            for (var i = 0; i < arr.length; i += 1) {
                if (arr[i] === what) {
                    return true;
                }
            }
            return false;
        }

        function trim(s) {
            return s.replace(/^\s+|\s+$/g, '');
        }

        function ltrim(s) {
            return s.replace(/^\s+/g, '');
        }

        // function rtrim(s) {
        //     return s.replace(/\s+$/g, '');
        // }

        function sanitizeOperatorPosition(opPosition) {
            opPosition = opPosition || OPERATOR_POSITION.before_newline;

            var validPositionValues = Object.values(OPERATOR_POSITION);

            if (!in_array(opPosition, validPositionValues)) {
                throw new Error("Invalid Option Value: The option 'operator_position' must be one of the following values\n" +
                    validPositionValues +
                    "\nYou passed in: '" + opPosition + "'");
            }

            return opPosition;
        }

        var OPERATOR_POSITION = {
            before_newline: 'before-newline',
            after_newline: 'after-newline',
            preserve_newline: 'preserve-newline',
        };

        var OPERATOR_POSITION_BEFORE_OR_PRESERVE = [OPERATOR_POSITION.before_newline, OPERATOR_POSITION.preserve_newline];

        var MODE = {
            BlockStatement: 'BlockStatement', // 'BLOCK'
            Statement: 'Statement', // 'STATEMENT'
            ObjectLiteral: 'ObjectLiteral', // 'OBJECT',
            ArrayLiteral: 'ArrayLiteral', //'[EXPRESSION]',
            ForInitializer: 'ForInitializer', //'(FOR-EXPRESSION)',
            Conditional: 'Conditional', //'(COND-EXPRESSION)',
            Expression: 'Expression' //'(EXPRESSION)'
        };

        function Beautifier(js_source_text, options) {
            "use strict";
            var output;
            var tokens = [],
                token_pos;
            var Tokenizer;
            var current_token;
            var last_type, last_last_text, indent_string;
            var flags, previous_flags, flag_store;
            var prefix;

            var handlers, opt;
            var baseIndentString = '';

            handlers = {
                'TK_START_EXPR': handle_start_expr,
                'TK_END_EXPR': handle_end_expr,
                'TK_START_BLOCK': handle_start_block,
                'TK_END_BLOCK': handle_end_block,
                'TK_WORD': handle_word,
                'TK_RESERVED': handle_word,
                'TK_SEMICOLON': handle_semicolon,
                'TK_STRING': handle_string,
                'TK_EQUALS': handle_equals,
                'TK_OPERATOR': handle_operator,
                'TK_COMMA': handle_comma,
                'TK_BLOCK_COMMENT': handle_block_comment,
                'TK_COMMENT': handle_comment,
                'TK_DOT': handle_dot,
                'TK_UNKNOWN': handle_unknown,
                'TK_EOF': handle_eof
            };

            function create_flags(flags_base, mode) {
                var next_indent_level = 0;
                if (flags_base) {
                    next_indent_level = flags_base.indentation_level;
                    if (!output.just_added_newline() &&
                        flags_base.line_indent_level > next_indent_level) {
                        next_indent_level = flags_base.line_indent_level;
                    }
                }

                var next_flags = {
                    mode: mode,
                    parent: flags_base,
                    last_text: flags_base ? flags_base.last_text : '', // last token text
                    last_word: flags_base ? flags_base.last_word : '', // last 'TK_WORD' passed
                    declaration_statement: false,
                    declaration_assignment: false,
                    multiline_frame: false,
                    inline_frame: false,
                    if_block: false,
                    else_block: false,
                    do_block: false,
                    do_while: false,
                    import_block: false,
                    in_case_statement: false, // switch(..){ INSIDE HERE }
                    in_case: false, // we're on the exact line with "case 0:"
                    case_body: false, // the indented case-action block
                    indentation_level: next_indent_level,
                    line_indent_level: flags_base ? flags_base.line_indent_level : next_indent_level,
                    start_line_index: output.get_line_number(),
                    ternary_depth: 0
                };
                return next_flags;
            }

            // Some interpreters have unexpected results with foo = baz || bar;
            options = options ? options : {};

            // Allow the setting of language/file-type specific options
            // with inheritance of overall settings
            options = mergeOpts(options, 'js');

            opt = {};

            // compatibility, re
            if (options.brace_style === "expand-strict") { //graceful handling of deprecated option
                options.brace_style = "expand";
            } else if (options.brace_style === "collapse-preserve-inline") { //graceful handling of deprecated option
                options.brace_style = "collapse,preserve-inline";
            } else if (options.braces_on_own_line !== undefined) { //graceful handling of deprecated option
                options.brace_style = options.braces_on_own_line ? "expand" : "collapse";
            } else if (!options.brace_style) //Nothing exists to set it
            {
                options.brace_style = "collapse";
            }


            var brace_style_split = options.brace_style.split(/[^a-zA-Z0-9_\-]+/);
            opt.brace_style = brace_style_split[0];
            opt.brace_preserve_inline = brace_style_split[1] ? brace_style_split[1] : false;

            opt.indent_size = options.indent_size ? parseInt(options.indent_size, 10) : 4;
            opt.indent_char = options.indent_char ? options.indent_char : ' ';
            opt.eol = options.eol ? options.eol : 'auto';
            opt.preserve_newlines = (options.preserve_newlines === undefined) ? true : options.preserve_newlines;
            opt.break_chained_methods = (options.break_chained_methods === undefined) ? false : options.break_chained_methods;
            opt.max_preserve_newlines = (options.max_preserve_newlines === undefined) ? 0 : parseInt(options.max_preserve_newlines, 10);
            opt.space_in_paren = (options.space_in_paren === undefined) ? false : options.space_in_paren;
            opt.space_in_empty_paren = (options.space_in_empty_paren === undefined) ? false : options.space_in_empty_paren;
            opt.jslint_happy = (options.jslint_happy === undefined) ? false : options.jslint_happy;
            opt.space_after_anon_function = (options.space_after_anon_function === undefined) ? false : options.space_after_anon_function;
            opt.keep_array_indentation = (options.keep_array_indentation === undefined) ? false : options.keep_array_indentation;
            opt.space_before_conditional = (options.space_before_conditional === undefined) ? true : options.space_before_conditional;
            opt.unescape_strings = (options.unescape_strings === undefined) ? false : options.unescape_strings;
            opt.wrap_line_length = (options.wrap_line_length === undefined) ? 0 : parseInt(options.wrap_line_length, 10);
            opt.e4x = (options.e4x === undefined) ? false : options.e4x;
            opt.end_with_newline = (options.end_with_newline === undefined) ? false : options.end_with_newline;
            opt.comma_first = (options.comma_first === undefined) ? false : options.comma_first;
            opt.operator_position = sanitizeOperatorPosition(options.operator_position);

            // For testing of beautify ignore:start directive
            opt.test_output_raw = (options.test_output_raw === undefined) ? false : options.test_output_raw;

            // force opt.space_after_anon_function to true if opt.jslint_happy
            if (opt.jslint_happy) {
                opt.space_after_anon_function = true;
            }

            if (options.indent_with_tabs) {
                opt.indent_char = '\t';
                opt.indent_size = 1;
            }

            if (opt.eol === 'auto') {
                opt.eol = '\n';
                if (js_source_text && acorn.lineBreak.test(js_source_text || '')) {
                    opt.eol = js_source_text.match(acorn.lineBreak)[0];
                }
            }

            opt.eol = opt.eol.replace(/\\r/, '\r').replace(/\\n/, '\n');

            //----------------------------------
            indent_string = '';
            while (opt.indent_size > 0) {
                indent_string += opt.indent_char;
                opt.indent_size -= 1;
            }

            var preindent_index = 0;
            if (js_source_text && js_source_text.length) {
                while ((js_source_text.charAt(preindent_index) === ' ' ||
                        js_source_text.charAt(preindent_index) === '\t')) {
                    baseIndentString += js_source_text.charAt(preindent_index);
                    preindent_index += 1;
                }
                js_source_text = js_source_text.substring(preindent_index);
            }

            last_type = 'TK_START_BLOCK'; // last token type
            last_last_text = ''; // pre-last token text
            output = new Output(indent_string, baseIndentString);

            // If testing the ignore directive, start with output disable set to true
            output.raw = opt.test_output_raw;


            // Stack of parsing/formatting states, including MODE.
            // We tokenize, parse, and output in an almost purely a forward-only stream of token input
            // and formatted output.  This makes the beautifier less accurate than full parsers
            // but also far more tolerant of syntax errors.
            //
            // For example, the default mode is MODE.BlockStatement. If we see a '{' we push a new frame of type
            // MODE.BlockStatement on the the stack, even though it could be object literal.  If we later
            // encounter a ":", we'll switch to to MODE.ObjectLiteral.  If we then see a ";",
            // most full parsers would die, but the beautifier gracefully falls back to
            // MODE.BlockStatement and continues on.
            flag_store = [];
            set_mode(MODE.BlockStatement);

            this.beautify = function() {

                /*jshint onevar:true */
                var sweet_code;
                Tokenizer = new tokenizer(js_source_text, opt, indent_string);
                tokens = Tokenizer.tokenize();
                token_pos = 0;

                current_token = get_token();
                while (current_token) {
                    handlers[current_token.type]();

                    last_last_text = flags.last_text;
                    last_type = current_token.type;
                    flags.last_text = current_token.text;

                    token_pos += 1;
                    current_token = get_token();
                }

                sweet_code = output.get_code();
                if (opt.end_with_newline) {
                    sweet_code += '\n';
                }

                if (opt.eol !== '\n') {
                    sweet_code = sweet_code.replace(/[\n]/g, opt.eol);
                }

                return sweet_code;
            };

            function handle_whitespace_and_comments(local_token, preserve_statement_flags) {
                var newlines = local_token.newlines;
                var keep_whitespace = opt.keep_array_indentation && is_array(flags.mode);
                var temp_token = current_token;

                for (var h = 0; h < local_token.comments_before.length; h++) {
                    // The cleanest handling of inline comments is to treat them as though they aren't there.
                    // Just continue formatting and the behavior should be logical.
                    // Also ignore unknown tokens.  Again, this should result in better behavior.
                    current_token = local_token.comments_before[h];
                    handle_whitespace_and_comments(current_token, preserve_statement_flags);
                    handlers[current_token.type](preserve_statement_flags);
                }
                current_token = temp_token;

                if (keep_whitespace) {
                    for (var i = 0; i < newlines; i += 1) {
                        print_newline(i > 0, preserve_statement_flags);
                    }
                } else {
                    if (opt.max_preserve_newlines && newlines > opt.max_preserve_newlines) {
                        newlines = opt.max_preserve_newlines;
                    }

                    if (opt.preserve_newlines) {
                        if (local_token.newlines > 1) {
                            print_newline(false, preserve_statement_flags);
                            for (var j = 1; j < newlines; j += 1) {
                                print_newline(true, preserve_statement_flags);
                            }
                        }
                    }
                }

            }

            // we could use just string.split, but
            // IE doesn't like returning empty strings
            function split_linebreaks(s) {
                //return s.split(/\x0d\x0a|\x0a/);

                s = s.replace(acorn.allLineBreaks, '\n');
                var out = [],
                    idx = s.indexOf("\n");
                while (idx !== -1) {
                    out.push(s.substring(0, idx));
                    s = s.substring(idx + 1);
                    idx = s.indexOf("\n");
                }
                if (s.length) {
                    out.push(s);
                }
                return out;
            }

            var newline_restricted_tokens = ['break', 'continue', 'return', 'throw'];

            function allow_wrap_or_preserved_newline(force_linewrap) {
                force_linewrap = (force_linewrap === undefined) ? false : force_linewrap;

                // Never wrap the first token on a line
                if (output.just_added_newline()) {
                    return;
                }

                var shouldPreserveOrForce = (opt.preserve_newlines && current_token.wanted_newline) || force_linewrap;
                var operatorLogicApplies = in_array(flags.last_text, Tokenizer.positionable_operators) || in_array(current_token.text, Tokenizer.positionable_operators);

                if (operatorLogicApplies) {
                    var shouldPrintOperatorNewline = (
                            in_array(flags.last_text, Tokenizer.positionable_operators) &&
                            in_array(opt.operator_position, OPERATOR_POSITION_BEFORE_OR_PRESERVE)
                        ) ||
                        in_array(current_token.text, Tokenizer.positionable_operators);
                    shouldPreserveOrForce = shouldPreserveOrForce && shouldPrintOperatorNewline;
                }

                if (shouldPreserveOrForce) {
                    print_newline(false, true);
                } else if (opt.wrap_line_length) {
                    if (last_type === 'TK_RESERVED' && in_array(flags.last_text, newline_restricted_tokens)) {
                        // These tokens should never have a newline inserted
                        // between them and the following expression.
                        return;
                    }
                    var proposed_line_length = output.current_line.get_character_count() + current_token.text.length +
                        (output.space_before_token ? 1 : 0);
                    if (proposed_line_length >= opt.wrap_line_length) {
                        print_newline(false, true);
                    }
                }
            }

            function print_newline(force_newline, preserve_statement_flags) {
                if (!preserve_statement_flags) {
                    if (flags.last_text !== ';' && flags.last_text !== ',' && flags.last_text !== '=' && last_type !== 'TK_OPERATOR') {
                        var next_token = get_token(1);
                        while (flags.mode === MODE.Statement &&
                            !(flags.if_block && next_token && next_token.type === 'TK_RESERVED' && next_token.text === 'else') &&
                            !flags.do_block) {
                            restore_mode();
                        }
                    }
                }

                if (output.add_new_line(force_newline)) {
                    flags.multiline_frame = true;
                }
            }

            function print_token_line_indentation() {
                if (output.just_added_newline()) {
                    if (opt.keep_array_indentation && is_array(flags.mode) && current_token.wanted_newline) {
                        output.current_line.push(current_token.whitespace_before);
                        output.space_before_token = false;
                    } else if (output.set_indent(flags.indentation_level)) {
                        flags.line_indent_level = flags.indentation_level;
                    }
                }
            }

            function print_token(printable_token) {
                if (output.raw) {
                    output.add_raw_token(current_token);
                    return;
                }

                if (opt.comma_first && last_type === 'TK_COMMA' &&
                    output.just_added_newline()) {
                    if (output.previous_line.last() === ',') {
                        var popped = output.previous_line.pop();
                        // if the comma was already at the start of the line,
                        // pull back onto that line and reprint the indentation
                        if (output.previous_line.is_empty()) {
                            output.previous_line.push(popped);
                            output.trim(true);
                            output.current_line.pop();
                            output.trim();
                        }

                        // add the comma in front of the next token
                        print_token_line_indentation();
                        output.add_token(',');
                        output.space_before_token = true;
                    }
                }

                printable_token = printable_token || current_token.text;
                print_token_line_indentation();
                output.add_token(printable_token);
            }

            function indent() {
                flags.indentation_level += 1;
            }

            function deindent() {
                if (flags.indentation_level > 0 &&
                    ((!flags.parent) || flags.indentation_level > flags.parent.indentation_level)) {
                    flags.indentation_level -= 1;

                }
            }

            function set_mode(mode) {
                if (flags) {
                    flag_store.push(flags);
                    previous_flags = flags;
                } else {
                    previous_flags = create_flags(null, mode);
                }

                flags = create_flags(previous_flags, mode);
            }

            function is_array(mode) {
                return mode === MODE.ArrayLiteral;
            }

            function is_expression(mode) {
                return in_array(mode, [MODE.Expression, MODE.ForInitializer, MODE.Conditional]);
            }

            function restore_mode() {
                if (flag_store.length > 0) {
                    previous_flags = flags;
                    flags = flag_store.pop();
                    if (previous_flags.mode === MODE.Statement) {
                        output.remove_redundant_indentation(previous_flags);
                    }
                }
            }

            function start_of_object_property() {
                return flags.parent.mode === MODE.ObjectLiteral && flags.mode === MODE.Statement && (
                    (flags.last_text === ':' && flags.ternary_depth === 0) || (last_type === 'TK_RESERVED' && in_array(flags.last_text, ['get', 'set'])));
            }

            function start_of_statement() {
                if (
                    (last_type === 'TK_RESERVED' && in_array(flags.last_text, ['var', 'let', 'const']) && current_token.type === 'TK_WORD') ||
                    (last_type === 'TK_RESERVED' && flags.last_text === 'do') ||
                    (last_type === 'TK_RESERVED' && in_array(flags.last_text, ['return', 'throw']) && !current_token.wanted_newline) ||
                    (last_type === 'TK_RESERVED' && flags.last_text === 'else' &&
                        !(current_token.type === 'TK_RESERVED' && current_token.text === 'if' && !current_token.comments_before.length)) ||
                    (last_type === 'TK_END_EXPR' && (previous_flags.mode === MODE.ForInitializer || previous_flags.mode === MODE.Conditional)) ||
                    (last_type === 'TK_WORD' && flags.mode === MODE.BlockStatement &&
                        !flags.in_case &&
                        !(current_token.text === '--' || current_token.text === '++') &&
                        last_last_text !== 'function' &&
                        current_token.type !== 'TK_WORD' && current_token.type !== 'TK_RESERVED') ||
                    (flags.mode === MODE.ObjectLiteral && (
                        (flags.last_text === ':' && flags.ternary_depth === 0) || (last_type === 'TK_RESERVED' && in_array(flags.last_text, ['get', 'set']))))
                ) {

                    set_mode(MODE.Statement);
                    indent();

                    handle_whitespace_and_comments(current_token, true);

                    // Issue #276:
                    // If starting a new statement with [if, for, while, do], push to a new line.
                    // if (a) if (b) if(c) d(); else e(); else f();
                    if (!start_of_object_property()) {
                        allow_wrap_or_preserved_newline(
                            current_token.type === 'TK_RESERVED' && in_array(current_token.text, ['do', 'for', 'if', 'while']));
                    }

                    return true;
                }
                return false;
            }

            function all_lines_start_with(lines, c) {
                for (var i = 0; i < lines.length; i++) {
                    var line = trim(lines[i]);
                    if (line.charAt(0) !== c) {
                        return false;
                    }
                }
                return true;
            }

            function each_line_matches_indent(lines, indent) {
                var i = 0,
                    len = lines.length,
                    line;
                for (; i < len; i++) {
                    line = lines[i];
                    // allow empty lines to pass through
                    if (line && line.indexOf(indent) !== 0) {
                        return false;
                    }
                }
                return true;
            }

            function is_special_word(word) {
                return in_array(word, ['case', 'return', 'do', 'if', 'throw', 'else']);
            }

            function get_token(offset) {
                var index = token_pos + (offset || 0);
                return (index < 0 || index >= tokens.length) ? null : tokens[index];
            }

            function handle_start_expr() {
                // The conditional starts the statement if appropriate.
                if (!start_of_statement()) {
                    handle_whitespace_and_comments(current_token);
                }

                var next_mode = MODE.Expression;
                if (current_token.text === '[') {

                    if (last_type === 'TK_WORD' || flags.last_text === ')') {
                        // this is array index specifier, break immediately
                        // a[x], fn()[x]
                        if (last_type === 'TK_RESERVED' && in_array(flags.last_text, Tokenizer.line_starters)) {
                            output.space_before_token = true;
                        }
                        set_mode(next_mode);
                        print_token();
                        indent();
                        if (opt.space_in_paren) {
                            output.space_before_token = true;
                        }
                        return;
                    }

                    next_mode = MODE.ArrayLiteral;
                    if (is_array(flags.mode)) {
                        if (flags.last_text === '[' ||
                            (flags.last_text === ',' && (last_last_text === ']' || last_last_text === '}'))) {
                            // ], [ goes to new line
                            // }, [ goes to new line
                            if (!opt.keep_array_indentation) {
                                print_newline();
                            }
                        }
                    }

                } else {
                    if (last_type === 'TK_RESERVED' && flags.last_text === 'for') {
                        next_mode = MODE.ForInitializer;
                    } else if (last_type === 'TK_RESERVED' && in_array(flags.last_text, ['if', 'while'])) {
                        next_mode = MODE.Conditional;
                    } else {
                        // next_mode = MODE.Expression;
                    }
                }

                if (flags.last_text === ';' || last_type === 'TK_START_BLOCK') {
                    print_newline();
                } else if (last_type === 'TK_END_EXPR' || last_type === 'TK_START_EXPR' || last_type === 'TK_END_BLOCK' || flags.last_text === '.') {
                    // TODO: Consider whether forcing this is required.  Review failing tests when removed.
                    allow_wrap_or_preserved_newline(current_token.wanted_newline);
                    // do nothing on (( and )( and ][ and ]( and .(
                } else if (!(last_type === 'TK_RESERVED' && current_token.text === '(') && last_type !== 'TK_WORD' && last_type !== 'TK_OPERATOR') {
                    output.space_before_token = true;
                } else if ((last_type === 'TK_RESERVED' && (flags.last_word === 'function' || flags.last_word === 'typeof')) ||
                    (flags.last_text === '*' &&
                        (in_array(last_last_text, ['function', 'yield']) ||
                            (flags.mode === MODE.ObjectLiteral && in_array(last_last_text, ['{', ',']))))) {
                    // function() vs function ()
                    // yield*() vs yield* ()
                    // function*() vs function* ()
                    if (opt.space_after_anon_function) {
                        output.space_before_token = true;
                    }
                } else if (last_type === 'TK_RESERVED' && (in_array(flags.last_text, Tokenizer.line_starters) || flags.last_text === 'catch')) {
                    if (opt.space_before_conditional) {
                        output.space_before_token = true;
                    }
                }

                // Should be a space between await and an IIFE
                if (current_token.text === '(' && last_type === 'TK_RESERVED' && flags.last_word === 'await') {
                    output.space_before_token = true;
                }

                // Support of this kind of newline preservation.
                // a = (b &&
                //     (c || d));
                if (current_token.text === '(') {
                    if (last_type === 'TK_EQUALS' || last_type === 'TK_OPERATOR') {
                        if (!start_of_object_property()) {
                            allow_wrap_or_preserved_newline();
                        }
                    }
                }

                // Support preserving wrapped arrow function expressions
                // a.b('c',
                //     () => d.e
                // )
                if (current_token.text === '(' && last_type !== 'TK_WORD' && last_type !== 'TK_RESERVED') {
                    allow_wrap_or_preserved_newline();
                }

                set_mode(next_mode);
                print_token();
                if (opt.space_in_paren) {
                    output.space_before_token = true;
                }

                // In all cases, if we newline while inside an expression it should be indented.
                indent();
            }

            function handle_end_expr() {
                // statements inside expressions are not valid syntax, but...
                // statements must all be closed when their container closes
                while (flags.mode === MODE.Statement) {
                    restore_mode();
                }

                handle_whitespace_and_comments(current_token);

                if (flags.multiline_frame) {
                    allow_wrap_or_preserved_newline(current_token.text === ']' && is_array(flags.mode) && !opt.keep_array_indentation);
                }

                if (opt.space_in_paren) {
                    if (last_type === 'TK_START_EXPR' && !opt.space_in_empty_paren) {
                        // () [] no inner space in empty parens like these, ever, ref #320
                        output.trim();
                        output.space_before_token = false;
                    } else {
                        output.space_before_token = true;
                    }
                }
                if (current_token.text === ']' && opt.keep_array_indentation) {
                    print_token();
                    restore_mode();
                } else {
                    restore_mode();
                    print_token();
                }
                output.remove_redundant_indentation(previous_flags);

                // do {} while () // no statement required after
                if (flags.do_while && previous_flags.mode === MODE.Conditional) {
                    previous_flags.mode = MODE.Expression;
                    flags.do_block = false;
                    flags.do_while = false;

                }
            }

            function handle_start_block() {
                handle_whitespace_and_comments(current_token);

                // Check if this is should be treated as a ObjectLiteral
                var next_token = get_token(1);
                var second_token = get_token(2);
                if (second_token && (
                        (in_array(second_token.text, [':', ',']) && in_array(next_token.type, ['TK_STRING', 'TK_WORD', 'TK_RESERVED'])) ||
                        (in_array(next_token.text, ['get', 'set', '...']) && in_array(second_token.type, ['TK_WORD', 'TK_RESERVED']))
                    )) {
                    // We don't support TypeScript,but we didn't break it for a very long time.
                    // We'll try to keep not breaking it.
                    if (!in_array(last_last_text, ['class', 'interface'])) {
                        set_mode(MODE.ObjectLiteral);
                    } else {
                        set_mode(MODE.BlockStatement);
                    }
                } else if (last_type === 'TK_OPERATOR' && flags.last_text === '=>') {
                    // arrow function: (param1, paramN) => { statements }
                    set_mode(MODE.BlockStatement);
                } else if (in_array(last_type, ['TK_EQUALS', 'TK_START_EXPR', 'TK_COMMA', 'TK_OPERATOR']) ||
                    (last_type === 'TK_RESERVED' && in_array(flags.last_text, ['return', 'throw', 'import', 'default']))
                ) {
                    // Detecting shorthand function syntax is difficult by scanning forward,
                    //     so check the surrounding context.
                    // If the block is being returned, imported, export default, passed as arg,
                    //     assigned with = or assigned in a nested object, treat as an ObjectLiteral.
                    set_mode(MODE.ObjectLiteral);
                } else {
                    set_mode(MODE.BlockStatement);
                }

                var empty_braces = !next_token.comments_before.length && next_token.text === '}';
                var empty_anonymous_function = empty_braces && flags.last_word === 'function' &&
                    last_type === 'TK_END_EXPR';

                if (opt.brace_preserve_inline) // check for inline, set inline_frame if so
                {
                    // search forward for a newline wanted inside this block
                    var index = 0;
                    var check_token = null;
                    flags.inline_frame = true;
                    do {
                        index += 1;
                        check_token = get_token(index);
                        if (check_token.wanted_newline) {
                            flags.inline_frame = false;
                            break;
                        }
                    } while (check_token.type !== 'TK_EOF' &&
                        !(check_token.type === 'TK_END_BLOCK' && check_token.opened === current_token));
                }

                if ((opt.brace_style === "expand" ||
                        (opt.brace_style === "none" && current_token.wanted_newline)) &&
                    !flags.inline_frame) {
                    if (last_type !== 'TK_OPERATOR' &&
                        (empty_anonymous_function ||
                            last_type === 'TK_EQUALS' ||
                            (last_type === 'TK_RESERVED' && is_special_word(flags.last_text) && flags.last_text !== 'else'))) {
                        output.space_before_token = true;
                    } else {
                        print_newline(false, true);
                    }
                } else { // collapse || inline_frame
                    if (is_array(previous_flags.mode) && (last_type === 'TK_START_EXPR' || last_type === 'TK_COMMA')) {
                        if (last_type === 'TK_COMMA' || opt.space_in_paren) {
                            output.space_before_token = true;
                        }

                        if (last_type === 'TK_COMMA' || (last_type === 'TK_START_EXPR' && flags.inline_frame)) {
                            allow_wrap_or_preserved_newline();
                            previous_flags.multiline_frame = previous_flags.multiline_frame || flags.multiline_frame;
                            flags.multiline_frame = false;
                        }
                    }
                    if (last_type !== 'TK_OPERATOR' && last_type !== 'TK_START_EXPR') {
                        if (last_type === 'TK_START_BLOCK' && !flags.inline_frame) {
                            print_newline();
                        } else {
                            output.space_before_token = true;
                        }
                    }
                }
                print_token();
                indent();
            }

            function handle_end_block() {
                // statements must all be closed when their container closes
                handle_whitespace_and_comments(current_token);

                while (flags.mode === MODE.Statement) {
                    restore_mode();
                }

                var empty_braces = last_type === 'TK_START_BLOCK';

                if (flags.inline_frame && !empty_braces) { // try inline_frame (only set if opt.braces-preserve-inline) first
                    output.space_before_token = true;
                } else if (opt.brace_style === "expand") {
                    if (!empty_braces) {
                        print_newline();
                    }
                } else {
                    // skip {}
                    if (!empty_braces) {
                        if (is_array(flags.mode) && opt.keep_array_indentation) {
                            // we REALLY need a newline here, but newliner would skip that
                            opt.keep_array_indentation = false;
                            print_newline();
                            opt.keep_array_indentation = true;

                        } else {
                            print_newline();
                        }
                    }
                }
                restore_mode();
                print_token();
            }

            function handle_word() {
                if (current_token.type === 'TK_RESERVED') {
                    if (in_array(current_token.text, ['set', 'get']) && flags.mode !== MODE.ObjectLiteral) {
                        current_token.type = 'TK_WORD';
                    } else if (in_array(current_token.text, ['as', 'from']) && !flags.import_block) {
                        current_token.type = 'TK_WORD';
                    } else if (flags.mode === MODE.ObjectLiteral) {
                        var next_token = get_token(1);
                        if (next_token.text === ':') {
                            current_token.type = 'TK_WORD';
                        }
                    }
                }

                if (start_of_statement()) {
                    // The conditional starts the statement if appropriate.
                    if (last_type === 'TK_RESERVED' && in_array(flags.last_text, ['var', 'let', 'const']) && current_token.type === 'TK_WORD') {
                        flags.declaration_statement = true;
                    }
                } else if (current_token.wanted_newline && !is_expression(flags.mode) &&
                    (last_type !== 'TK_OPERATOR' || (flags.last_text === '--' || flags.last_text === '++')) &&
                    last_type !== 'TK_EQUALS' &&
                    (opt.preserve_newlines || !(last_type === 'TK_RESERVED' && in_array(flags.last_text, ['var', 'let', 'const', 'set', 'get'])))) {
                    handle_whitespace_and_comments(current_token);
                    print_newline();
                } else {
                    handle_whitespace_and_comments(current_token);
                }

                if (flags.do_block && !flags.do_while) {
                    if (current_token.type === 'TK_RESERVED' && current_token.text === 'while') {
                        // do {} ## while ()
                        output.space_before_token = true;
                        print_token();
                        output.space_before_token = true;
                        flags.do_while = true;
                        return;
                    } else {
                        // do {} should always have while as the next word.
                        // if we don't see the expected while, recover
                        print_newline();
                        flags.do_block = false;
                    }
                }

                // if may be followed by else, or not
                // Bare/inline ifs are tricky
                // Need to unwind the modes correctly: if (a) if (b) c(); else d(); else e();
                if (flags.if_block) {
                    if (!flags.else_block && (current_token.type === 'TK_RESERVED' && current_token.text === 'else')) {
                        flags.else_block = true;
                    } else {
                        while (flags.mode === MODE.Statement) {
                            restore_mode();
                        }
                        flags.if_block = false;
                        flags.else_block = false;
                    }
                }

                if (current_token.type === 'TK_RESERVED' && (current_token.text === 'case' || (current_token.text === 'default' && flags.in_case_statement))) {
                    print_newline();
                    if (flags.case_body || opt.jslint_happy) {
                        // switch cases following one another
                        deindent();
                        flags.case_body = false;
                    }
                    print_token();
                    flags.in_case = true;
                    flags.in_case_statement = true;
                    return;
                }

                if (last_type === 'TK_COMMA' || last_type === 'TK_START_EXPR' || last_type === 'TK_EQUALS' || last_type === 'TK_OPERATOR') {
                    if (!start_of_object_property()) {
                        allow_wrap_or_preserved_newline();
                    }
                }

                if (current_token.type === 'TK_RESERVED' && current_token.text === 'function') {
                    if (in_array(flags.last_text, ['}', ';']) ||
                        (output.just_added_newline() && !(in_array(flags.last_text, ['(', '[', '{', ':', '=', ',']) || last_type === 'TK_OPERATOR'))) {
                        // make sure there is a nice clean space of at least one blank line
                        // before a new function definition
                        if (!output.just_added_blankline() && !current_token.comments_before.length) {
                            print_newline();
                            print_newline(true);
                        }
                    }
                    if (last_type === 'TK_RESERVED' || last_type === 'TK_WORD') {
                        if (last_type === 'TK_RESERVED' && in_array(flags.last_text, ['get', 'set', 'new', 'return', 'export', 'async'])) {
                            output.space_before_token = true;
                        } else if (last_type === 'TK_RESERVED' && flags.last_text === 'default' && last_last_text === 'export') {
                            output.space_before_token = true;
                        } else {
                            print_newline();
                        }
                    } else if (last_type === 'TK_OPERATOR' || flags.last_text === '=') {
                        // foo = function
                        output.space_before_token = true;
                    } else if (!flags.multiline_frame && (is_expression(flags.mode) || is_array(flags.mode))) {
                        // (function
                    } else {
                        print_newline();
                    }

                    print_token();
                    flags.last_word = current_token.text;
                    return;
                }

                prefix = 'NONE';

                if (last_type === 'TK_END_BLOCK') {

                    if (previous_flags.inline_frame) {
                        prefix = 'SPACE';
                    } else if (!(current_token.type === 'TK_RESERVED' && in_array(current_token.text, ['else', 'catch', 'finally', 'from']))) {
                        prefix = 'NEWLINE';
                    } else {
                        if (opt.brace_style === "expand" ||
                            opt.brace_style === "end-expand" ||
                            (opt.brace_style === "none" && current_token.wanted_newline)) {
                            prefix = 'NEWLINE';
                        } else {
                            prefix = 'SPACE';
                            output.space_before_token = true;
                        }
                    }
                } else if (last_type === 'TK_SEMICOLON' && flags.mode === MODE.BlockStatement) {
                    // TODO: Should this be for STATEMENT as well?
                    prefix = 'NEWLINE';
                } else if (last_type === 'TK_SEMICOLON' && is_expression(flags.mode)) {
                    prefix = 'SPACE';
                } else if (last_type === 'TK_STRING') {
                    prefix = 'NEWLINE';
                } else if (last_type === 'TK_RESERVED' || last_type === 'TK_WORD' ||
                    (flags.last_text === '*' &&
                        (in_array(last_last_text, ['function', 'yield']) ||
                            (flags.mode === MODE.ObjectLiteral && in_array(last_last_text, ['{', ',']))))) {
                    prefix = 'SPACE';
                } else if (last_type === 'TK_START_BLOCK') {
                    if (flags.inline_frame) {
                        prefix = 'SPACE';
                    } else {
                        prefix = 'NEWLINE';
                    }
                } else if (last_type === 'TK_END_EXPR') {
                    output.space_before_token = true;
                    prefix = 'NEWLINE';
                }

                if (current_token.type === 'TK_RESERVED' && in_array(current_token.text, Tokenizer.line_starters) && flags.last_text !== ')') {
                    if (flags.inline_frame || flags.last_text === 'else' || flags.last_text === 'export') {
                        prefix = 'SPACE';
                    } else {
                        prefix = 'NEWLINE';
                    }

                }

                if (current_token.type === 'TK_RESERVED' && in_array(current_token.text, ['else', 'catch', 'finally'])) {
                    if ((!(last_type === 'TK_END_BLOCK' && previous_flags.mode === MODE.BlockStatement) ||
                            opt.brace_style === "expand" ||
                            opt.brace_style === "end-expand" ||
                            (opt.brace_style === "none" && current_token.wanted_newline)) &&
                        !flags.inline_frame) {
                        print_newline();
                    } else {
                        output.trim(true);
                        var line = output.current_line;
                        // If we trimmed and there's something other than a close block before us
                        // put a newline back in.  Handles '} // comment' scenario.
                        if (line.last() !== '}') {
                            print_newline();
                        }
                        output.space_before_token = true;
                    }
                } else if (prefix === 'NEWLINE') {
                    if (last_type === 'TK_RESERVED' && is_special_word(flags.last_text)) {
                        // no newline between 'return nnn'
                        output.space_before_token = true;
                    } else if (last_type !== 'TK_END_EXPR') {
                        if ((last_type !== 'TK_START_EXPR' || !(current_token.type === 'TK_RESERVED' && in_array(current_token.text, ['var', 'let', 'const']))) && flags.last_text !== ':') {
                            // no need to force newline on 'var': for (var x = 0...)
                            if (current_token.type === 'TK_RESERVED' && current_token.text === 'if' && flags.last_text === 'else') {
                                // no newline for } else if {
                                output.space_before_token = true;
                            } else {
                                print_newline();
                            }
                        }
                    } else if (current_token.type === 'TK_RESERVED' && in_array(current_token.text, Tokenizer.line_starters) && flags.last_text !== ')') {
                        print_newline();
                    }
                } else if (flags.multiline_frame && is_array(flags.mode) && flags.last_text === ',' && last_last_text === '}') {
                    print_newline(); // }, in lists get a newline treatment
                } else if (prefix === 'SPACE') {
                    output.space_before_token = true;
                }
                print_token();
                flags.last_word = current_token.text;

                if (current_token.type === 'TK_RESERVED') {
                    if (current_token.text === 'do') {
                        flags.do_block = true;
                    } else if (current_token.text === 'if') {
                        flags.if_block = true;
                    } else if (current_token.text === 'import') {
                        flags.import_block = true;
                    } else if (flags.import_block && current_token.type === 'TK_RESERVED' && current_token.text === 'from') {
                        flags.import_block = false;
                    }
                }
            }

            function handle_semicolon() {
                if (start_of_statement()) {
                    // The conditional starts the statement if appropriate.
                    // Semicolon can be the start (and end) of a statement
                    output.space_before_token = false;
                } else {
                    handle_whitespace_and_comments(current_token);
                }

                var next_token = get_token(1);
                while (flags.mode === MODE.Statement &&
                    !(flags.if_block && next_token && next_token.type === 'TK_RESERVED' && next_token.text === 'else') &&
                    !flags.do_block) {
                    restore_mode();
                }

                // hacky but effective for the moment
                if (flags.import_block) {
                    flags.import_block = false;
                }
                print_token();
            }

            function handle_string() {
                if (start_of_statement()) {
                    // The conditional starts the statement if appropriate.
                    // One difference - strings want at least a space before
                    output.space_before_token = true;
                } else {
                    handle_whitespace_and_comments(current_token);
                    if (last_type === 'TK_RESERVED' || last_type === 'TK_WORD' || flags.inline_frame) {
                        output.space_before_token = true;
                    } else if (last_type === 'TK_COMMA' || last_type === 'TK_START_EXPR' || last_type === 'TK_EQUALS' || last_type === 'TK_OPERATOR') {
                        if (!start_of_object_property()) {
                            allow_wrap_or_preserved_newline();
                        }
                    } else {
                        print_newline();
                    }
                }
                print_token();
            }

            function handle_equals() {
                if (start_of_statement()) {
                    // The conditional starts the statement if appropriate.
                } else {
                    handle_whitespace_and_comments(current_token);
                }

                if (flags.declaration_statement) {
                    // just got an '=' in a var-line, different formatting/line-breaking, etc will now be done
                    flags.declaration_assignment = true;
                }
                output.space_before_token = true;
                print_token();
                output.space_before_token = true;
            }

            function handle_comma() {
                handle_whitespace_and_comments(current_token, true);

                print_token();
                output.space_before_token = true;
                if (flags.declaration_statement) {
                    if (is_expression(flags.parent.mode)) {
                        // do not break on comma, for(var a = 1, b = 2)
                        flags.declaration_assignment = false;
                    }

                    if (flags.declaration_assignment) {
                        flags.declaration_assignment = false;
                        print_newline(false, true);
                    } else if (opt.comma_first) {
                        // for comma-first, we want to allow a newline before the comma
                        // to turn into a newline after the comma, which we will fixup later
                        allow_wrap_or_preserved_newline();
                    }
                } else if (flags.mode === MODE.ObjectLiteral ||
                    (flags.mode === MODE.Statement && flags.parent.mode === MODE.ObjectLiteral)) {
                    if (flags.mode === MODE.Statement) {
                        restore_mode();
                    }

                    if (!flags.inline_frame) {
                        print_newline();
                    }
                } else if (opt.comma_first) {
                    // EXPR or DO_BLOCK
                    // for comma-first, we want to allow a newline before the comma
                    // to turn into a newline after the comma, which we will fixup later
                    allow_wrap_or_preserved_newline();
                }
            }

            function handle_operator() {
                var isGeneratorAsterisk = current_token.text === '*' &&
                    ((last_type === 'TK_RESERVED' && in_array(flags.last_text, ['function', 'yield'])) ||
                        (in_array(last_type, ['TK_START_BLOCK', 'TK_COMMA', 'TK_END_BLOCK', 'TK_SEMICOLON']))
                    );
                var isUnary = in_array(current_token.text, ['-', '+']) && (
                    in_array(last_type, ['TK_START_BLOCK', 'TK_START_EXPR', 'TK_EQUALS', 'TK_OPERATOR']) ||
                    in_array(flags.last_text, Tokenizer.line_starters) ||
                    flags.last_text === ','
                );

                if (start_of_statement()) {
                    // The conditional starts the statement if appropriate.
                } else {
                    var preserve_statement_flags = !isGeneratorAsterisk;
                    handle_whitespace_and_comments(current_token, preserve_statement_flags);
                }

                if (last_type === 'TK_RESERVED' && is_special_word(flags.last_text)) {
                    // "return" had a special handling in TK_WORD. Now we need to return the favor
                    output.space_before_token = true;
                    print_token();
                    return;
                }

                // hack for actionscript's import .*;
                if (current_token.text === '*' && last_type === 'TK_DOT') {
                    print_token();
                    return;
                }

                if (current_token.text === '::') {
                    // no spaces around exotic namespacing syntax operator
                    print_token();
                    return;
                }

                // Allow line wrapping between operators when operator_position is
                //   set to before or preserve
                if (last_type === 'TK_OPERATOR' && in_array(opt.operator_position, OPERATOR_POSITION_BEFORE_OR_PRESERVE)) {
                    allow_wrap_or_preserved_newline();
                }

                if (current_token.text === ':' && flags.in_case) {
                    flags.case_body = true;
                    indent();
                    print_token();
                    print_newline();
                    flags.in_case = false;
                    return;
                }

                var space_before = true;
                var space_after = true;
                var in_ternary = false;
                if (current_token.text === ':') {
                    if (flags.ternary_depth === 0) {
                        // Colon is invalid javascript outside of ternary and object, but do our best to guess what was meant.
                        space_before = false;
                    } else {
                        flags.ternary_depth -= 1;
                        in_ternary = true;
                    }
                } else if (current_token.text === '?') {
                    flags.ternary_depth += 1;
                }

                // let's handle the operator_position option prior to any conflicting logic
                if (!isUnary && !isGeneratorAsterisk && opt.preserve_newlines && in_array(current_token.text, Tokenizer.positionable_operators)) {
                    var isColon = current_token.text === ':';
                    var isTernaryColon = (isColon && in_ternary);
                    var isOtherColon = (isColon && !in_ternary);

                    switch (opt.operator_position) {
                        case OPERATOR_POSITION.before_newline:
                            // if the current token is : and it's not a ternary statement then we set space_before to false
                            output.space_before_token = !isOtherColon;

                            print_token();

                            if (!isColon || isTernaryColon) {
                                allow_wrap_or_preserved_newline();
                            }

                            output.space_before_token = true;
                            return;

                        case OPERATOR_POSITION.after_newline:
                            // if the current token is anything but colon, or (via deduction) it's a colon and in a ternary statement,
                            //   then print a newline.

                            output.space_before_token = true;

                            if (!isColon || isTernaryColon) {
                                if (get_token(1).wanted_newline) {
                                    print_newline(false, true);
                                } else {
                                    allow_wrap_or_preserved_newline();
                                }
                            } else {
                                output.space_before_token = false;
                            }

                            print_token();

                            output.space_before_token = true;
                            return;

                        case OPERATOR_POSITION.preserve_newline:
                            if (!isOtherColon) {
                                allow_wrap_or_preserved_newline();
                            }

                            // if we just added a newline, or the current token is : and it's not a ternary statement,
                            //   then we set space_before to false
                            space_before = !(output.just_added_newline() || isOtherColon);

                            output.space_before_token = space_before;
                            print_token();
                            output.space_before_token = true;
                            return;
                    }
                }

                if (isGeneratorAsterisk) {
                    allow_wrap_or_preserved_newline();
                    space_before = false;
                    var next_token = get_token(1);
                    space_after = next_token && in_array(next_token.type, ['TK_WORD', 'TK_RESERVED']);
                } else if (current_token.text === '...') {
                    allow_wrap_or_preserved_newline();
                    space_before = last_type === 'TK_START_BLOCK';
                    space_after = false;
                } else if (in_array(current_token.text, ['--', '++', '!', '~']) || isUnary) {
                    // unary operators (and binary +/- pretending to be unary) special cases

                    space_before = false;
                    space_after = false;

                    // http://www.ecma-international.org/ecma-262/5.1/#sec-7.9.1
                    // if there is a newline between -- or ++ and anything else we should preserve it.
                    if (current_token.wanted_newline && (current_token.text === '--' || current_token.text === '++')) {
                        print_newline(false, true);
                    }

                    if (flags.last_text === ';' && is_expression(flags.mode)) {
                        // for (;; ++i)
                        //        ^^^
                        space_before = true;
                    }

                    if (last_type === 'TK_RESERVED') {
                        space_before = true;
                    } else if (last_type === 'TK_END_EXPR') {
                        space_before = !(flags.last_text === ']' && (current_token.text === '--' || current_token.text === '++'));
                    } else if (last_type === 'TK_OPERATOR') {
                        // a++ + ++b;
                        // a - -b
                        space_before = in_array(current_token.text, ['--', '-', '++', '+']) && in_array(flags.last_text, ['--', '-', '++', '+']);
                        // + and - are not unary when preceeded by -- or ++ operator
                        // a-- + b
                        // a * +b
                        // a - -b
                        if (in_array(current_token.text, ['+', '-']) && in_array(flags.last_text, ['--', '++'])) {
                            space_after = true;
                        }
                    }


                    if (((flags.mode === MODE.BlockStatement && !flags.inline_frame) || flags.mode === MODE.Statement) &&
                        (flags.last_text === '{' || flags.last_text === ';')) {
                        // { foo; --i }
                        // foo(); --bar;
                        print_newline();
                    }
                }

                output.space_before_token = output.space_before_token || space_before;
                print_token();
                output.space_before_token = space_after;
            }

            function handle_block_comment(preserve_statement_flags) {
                if (output.raw) {
                    output.add_raw_token(current_token);
                    if (current_token.directives && current_token.directives.preserve === 'end') {
                        // If we're testing the raw output behavior, do not allow a directive to turn it off.
                        output.raw = opt.test_output_raw;
                    }
                    return;
                }

                if (current_token.directives) {
                    print_newline(false, preserve_statement_flags);
                    print_token();
                    if (current_token.directives.preserve === 'start') {
                        output.raw = true;
                    }
                    print_newline(false, true);
                    return;
                }

                // inline block
                if (!acorn.newline.test(current_token.text) && !current_token.wanted_newline) {
                    output.space_before_token = true;
                    print_token();
                    output.space_before_token = true;
                    return;
                }

                var lines = split_linebreaks(current_token.text);
                var j; // iterator for this case
                var javadoc = false;
                var starless = false;
                var lastIndent = current_token.whitespace_before;
                var lastIndentLength = lastIndent.length;

                // block comment starts with a new line
                print_newline(false, preserve_statement_flags);
                if (lines.length > 1) {
                    javadoc = all_lines_start_with(lines.slice(1), '*');
                    starless = each_line_matches_indent(lines.slice(1), lastIndent);
                }

                // first line always indented
                print_token(lines[0]);
                for (j = 1; j < lines.length; j++) {
                    print_newline(false, true);
                    if (javadoc) {
                        // javadoc: reformat and re-indent
                        print_token(' ' + ltrim(lines[j]));
                    } else if (starless && lines[j].length > lastIndentLength) {
                        // starless: re-indent non-empty content, avoiding trim
                        print_token(lines[j].substring(lastIndentLength));
                    } else {
                        // normal comments output raw
                        output.add_token(lines[j]);
                    }
                }

                // for comments of more than one line, make sure there's a new line after
                print_newline(false, preserve_statement_flags);
            }

            function handle_comment(preserve_statement_flags) {
                if (current_token.wanted_newline) {
                    print_newline(false, preserve_statement_flags);
                } else {
                    output.trim(true);
                }

                output.space_before_token = true;
                print_token();
                print_newline(false, preserve_statement_flags);
            }

            function handle_dot() {
                if (start_of_statement()) {
                    // The conditional starts the statement if appropriate.
                } else {
                    handle_whitespace_and_comments(current_token, true);
                }

                if (last_type === 'TK_RESERVED' && is_special_word(flags.last_text)) {
                    output.space_before_token = true;
                } else {
                    // allow preserved newlines before dots in general
                    // force newlines on dots after close paren when break_chained - for bar().baz()
                    allow_wrap_or_preserved_newline(flags.last_text === ')' && opt.break_chained_methods);
                }

                print_token();
            }

            function handle_unknown(preserve_statement_flags) {
                print_token();

                if (current_token.text[current_token.text.length - 1] === '\n') {
                    print_newline(false, preserve_statement_flags);
                }
            }

            function handle_eof() {
                // Unwind any open statements
                while (flags.mode === MODE.Statement) {
                    restore_mode();
                }
                handle_whitespace_and_comments(current_token);
            }
        }


        function OutputLine(parent) {
            var _character_count = 0;
            // use indent_count as a marker for lines that have preserved indentation
            var _indent_count = -1;

            var _items = [];
            var _empty = true;

            this.set_indent = function(level) {
                _character_count = parent.baseIndentLength + level * parent.indent_length;
                _indent_count = level;
            };

            this.get_character_count = function() {
                return _character_count;
            };

            this.is_empty = function() {
                return _empty;
            };

            this.last = function() {
                if (!this._empty) {
                    return _items[_items.length - 1];
                } else {
                    return null;
                }
            };

            this.push = function(input) {
                _items.push(input);
                _character_count += input.length;
                _empty = false;
            };

            this.pop = function() {
                var item = null;
                if (!_empty) {
                    item = _items.pop();
                    _character_count -= item.length;
                    _empty = _items.length === 0;
                }
                return item;
            };

            this.remove_indent = function() {
                if (_indent_count > 0) {
                    _indent_count -= 1;
                    _character_count -= parent.indent_length;
                }
            };

            this.trim = function() {
                while (this.last() === ' ') {
                    _items.pop();
                    _character_count -= 1;
                }
                _empty = _items.length === 0;
            };

            this.toString = function() {
                var result = '';
                if (!this._empty) {
                    if (_indent_count >= 0) {
                        result = parent.indent_cache[_indent_count];
                    }
                    result += _items.join('');
                }
                return result;
            };
        }

        function Output(indent_string, baseIndentString) {
            baseIndentString = baseIndentString || '';
            this.indent_cache = [baseIndentString];
            this.baseIndentLength = baseIndentString.length;
            this.indent_length = indent_string.length;
            this.raw = false;

            var lines = [];
            this.baseIndentString = baseIndentString;
            this.indent_string = indent_string;
            this.previous_line = null;
            this.current_line = null;
            this.space_before_token = false;

            this.add_outputline = function() {
                this.previous_line = this.current_line;
                this.current_line = new OutputLine(this);
                lines.push(this.current_line);
            };

            // initialize
            this.add_outputline();


            this.get_line_number = function() {
                return lines.length;
            };

            // Using object instead of string to allow for later expansion of info about each line
            this.add_new_line = function(force_newline) {
                if (this.get_line_number() === 1 && this.just_added_newline()) {
                    return false; // no newline on start of file
                }

                if (force_newline || !this.just_added_newline()) {
                    if (!this.raw) {
                        this.add_outputline();
                    }
                    return true;
                }

                return false;
            };

            this.get_code = function() {
                var sweet_code = lines.join('\n').replace(/[\r\n\t ]+$/, '');
                return sweet_code;
            };

            this.set_indent = function(level) {
                // Never indent your first output indent at the start of the file
                if (lines.length > 1) {
                    while (level >= this.indent_cache.length) {
                        this.indent_cache.push(this.indent_cache[this.indent_cache.length - 1] + this.indent_string);
                    }

                    this.current_line.set_indent(level);
                    return true;
                }
                this.current_line.set_indent(0);
                return false;
            };

            this.add_raw_token = function(token) {
                for (var x = 0; x < token.newlines; x++) {
                    this.add_outputline();
                }
                this.current_line.push(token.whitespace_before);
                this.current_line.push(token.text);
                this.space_before_token = false;
            };

            this.add_token = function(printable_token) {
                this.add_space_before_token();
                this.current_line.push(printable_token);
            };

            this.add_space_before_token = function() {
                if (this.space_before_token && !this.just_added_newline()) {
                    this.current_line.push(' ');
                }
                this.space_before_token = false;
            };

            this.remove_redundant_indentation = function(frame) {
                // This implementation is effective but has some issues:
                //     - can cause line wrap to happen too soon due to indent removal
                //           after wrap points are calculated
                // These issues are minor compared to ugly indentation.

                if (frame.multiline_frame ||
                    frame.mode === MODE.ForInitializer ||
                    frame.mode === MODE.Conditional) {
                    return;
                }

                // remove one indent from each line inside this section
                var index = frame.start_line_index;

                var output_length = lines.length;
                while (index < output_length) {
                    lines[index].remove_indent();
                    index++;
                }
            };

            this.trim = function(eat_newlines) {
                eat_newlines = (eat_newlines === undefined) ? false : eat_newlines;

                this.current_line.trim(indent_string, baseIndentString);

                while (eat_newlines && lines.length > 1 &&
                    this.current_line.is_empty()) {
                    lines.pop();
                    this.current_line = lines[lines.length - 1];
                    this.current_line.trim();
                }

                this.previous_line = lines.length > 1 ? lines[lines.length - 2] : null;
            };

            this.just_added_newline = function() {
                return this.current_line.is_empty();
            };

            this.just_added_blankline = function() {
                if (this.just_added_newline()) {
                    if (lines.length === 1) {
                        return true; // start of the file and newline = blank
                    }

                    var line = lines[lines.length - 2];
                    return line.is_empty();
                }
                return false;
            };
        }

        var InputScanner = function(input) {
            var _input = input;
            var _input_length = _input.length;
            var _position = 0;

            this.back = function() {
                _position -= 1;
            };

            this.hasNext = function() {
                return _position < _input_length;
            };

            this.next = function() {
                var val = null;
                if (this.hasNext()) {
                    val = _input.charAt(_position);
                    _position += 1;
                }
                return val;
            };

            this.peek = function(index) {
                var val = null;
                index = index || 0;
                index += _position;
                if (index >= 0 && index < _input_length) {
                    val = _input.charAt(index);
                }
                return val;
            };

            this.peekCharCode = function(index) {
                var val = 0;
                index = index || 0;
                index += _position;
                if (index >= 0 && index < _input_length) {
                    val = _input.charCodeAt(index);
                }
                return val;
            };

            this.test = function(pattern, index) {
                index = index || 0;
                pattern.lastIndex = _position + index;
                return pattern.test(_input);
            };

            this.testChar = function(pattern, index) {
                var val = this.peek(index);
                return val !== null && pattern.test(val);
            };

            this.match = function(pattern) {
                pattern.lastIndex = _position;
                var pattern_match = pattern.exec(_input);
                if (pattern_match && pattern_match.index === _position) {
                    _position += pattern_match[0].length;
                } else {
                    pattern_match = null;
                }
                return pattern_match;
            };
        };

        var Token = function(type, text, newlines, whitespace_before, parent) {
            this.type = type;
            this.text = text;

            // comments_before are
            // comments that have a new line before them
            // and may or may not have a newline after
            // this is a set of comments before
            this.comments_before = /* inline comment*/ [];


            this.comments_after = []; // no new line before and newline after
            this.newlines = newlines || 0;
            this.wanted_newline = newlines > 0;
            this.whitespace_before = whitespace_before || '';
            this.parent = parent || null;
            this.opened = null;
            this.directives = null;
        };

        function tokenizer(input_string, opts) {

            var whitespace = "\n\r\t ".split('');
            var digit = /[0-9]/;
            var digit_bin = /[01]/;
            var digit_oct = /[01234567]/;
            var digit_hex = /[0123456789abcdefABCDEF]/;

            this.positionable_operators = '!= !== % & && * ** + - / : < << <= == === > >= >> >>> ? ^ | ||'.split(' ');
            var punct = this.positionable_operators.concat(
                // non-positionable operators - these do not follow operator position settings
                '! %= &= *= **= ++ += , -- -= /= :: <<= = => >>= >>>= ^= |= ~ ...'.split(' '));

            // words which should always start on new line.
            this.line_starters = 'continue,try,throw,return,var,let,const,if,switch,case,default,for,while,break,function,import,export'.split(',');
            var reserved_words = this.line_starters.concat(['do', 'in', 'of', 'else', 'get', 'set', 'new', 'catch', 'finally', 'typeof', 'yield', 'async', 'await', 'from', 'as']);

            //  /* ... */ comment ends with nearest */ or end of file
            var block_comment_pattern = /([\s\S]*?)((?:\*\/)|$)/g;

            // comment ends just before nearest linefeed or end of file
            var comment_pattern = /([^\n\r\u2028\u2029]*)/g;

            var directives_block_pattern = /\/\* beautify( \w+[:]\w+)+ \*\//g;
            var directive_pattern = / (\w+)[:](\w+)/g;
            var directives_end_ignore_pattern = /([\s\S]*?)((?:\/\*\sbeautify\signore:end\s\*\/)|$)/g;

            var template_pattern = /((<\?php|<\?=)[\s\S]*?\?>)|(<%[\s\S]*?%>)/g;

            var n_newlines, whitespace_before_token, in_html_comment, tokens;
            var input;

            this.tokenize = function() {
                input = new InputScanner(input_string);
                in_html_comment = false;
                tokens = [];

                var next, last;
                var token_values;
                var open = null;
                var open_stack = [];
                var comments = [];

                while (!(last && last.type === 'TK_EOF')) {
                    token_values = tokenize_next();
                    next = new Token(token_values[1], token_values[0], n_newlines, whitespace_before_token);
                    while (next.type === 'TK_COMMENT' || next.type === 'TK_BLOCK_COMMENT' || next.type === 'TK_UNKNOWN') {
                        if (next.type === 'TK_BLOCK_COMMENT') {
                            next.directives = token_values[2];
                        }
                        comments.push(next);
                        token_values = tokenize_next();
                        next = new Token(token_values[1], token_values[0], n_newlines, whitespace_before_token);
                    }

                    if (comments.length) {
                        next.comments_before = comments;
                        comments = [];
                    }

                    if (next.type === 'TK_START_BLOCK' || next.type === 'TK_START_EXPR') {
                        next.parent = last;
                        open_stack.push(open);
                        open = next;
                    } else if ((next.type === 'TK_END_BLOCK' || next.type === 'TK_END_EXPR') &&
                        (open && (
                            (next.text === ']' && open.text === '[') ||
                            (next.text === ')' && open.text === '(') ||
                            (next.text === '}' && open.text === '{')))) {
                        next.parent = open.parent;
                        next.opened = open;

                        open = open_stack.pop();
                    }

                    tokens.push(next);
                    last = next;
                }

                return tokens;
            };

            function get_directives(text) {
                if (!text.match(directives_block_pattern)) {
                    return null;
                }

                var directives = {};
                directive_pattern.lastIndex = 0;
                var directive_match = directive_pattern.exec(text);

                while (directive_match) {
                    directives[directive_match[1]] = directive_match[2];
                    directive_match = directive_pattern.exec(text);
                }

                return directives;
            }

            function tokenize_next() {
                var resulting_string;
                var whitespace_on_this_line = [];

                n_newlines = 0;
                whitespace_before_token = '';

                var c = input.next();

                if (c === null) {
                    return ['', 'TK_EOF'];
                }

                var last_token;
                if (tokens.length) {
                    last_token = tokens[tokens.length - 1];
                } else {
                    // For the sake of tokenizing we can pretend that there was on open brace to start
                    last_token = new Token('TK_START_BLOCK', '{');
                }

                while (in_array(c, whitespace)) {

                    if (acorn.newline.test(c)) {
                        if (!(c === '\n' && input.peek(-2) === '\r')) {
                            n_newlines += 1;
                            whitespace_on_this_line = [];
                        }
                    } else {
                        whitespace_on_this_line.push(c);
                    }

                    c = input.next();

                    if (c === null) {
                        return ['', 'TK_EOF'];
                    }
                }

                if (whitespace_on_this_line.length) {
                    whitespace_before_token = whitespace_on_this_line.join('');
                }

                if (digit.test(c) || (c === '.' && input.testChar(digit))) {
                    var allow_decimal = true;
                    var allow_e = true;
                    var local_digit = digit;

                    if (c === '0' && input.testChar(/[XxOoBb]/)) {
                        // switch to hex/oct/bin number, no decimal or e, just hex/oct/bin digits
                        allow_decimal = false;
                        allow_e = false;
                        if (input.testChar(/[Bb]/)) {
                            local_digit = digit_bin;
                        } else if (input.testChar(/[Oo]/)) {
                            local_digit = digit_oct;
                        } else {
                            local_digit = digit_hex;
                        }
                        c += input.next();
                    } else if (c === '.') {
                        // Already have a decimal for this literal, don't allow another
                        allow_decimal = false;
                    } else {
                        // we know this first loop will run.  It keeps the logic simpler.
                        c = '';
                        input.back();
                    }

                    // Add the digits
                    while (input.testChar(local_digit)) {
                        c += input.next();

                        if (allow_decimal && input.peek() === '.') {
                            c += input.next();
                            allow_decimal = false;
                        }

                        // a = 1.e-7 is valid, so we test for . then e in one loop
                        if (allow_e && input.testChar(/[Ee]/)) {
                            c += input.next();

                            if (input.testChar(/[+-]/)) {
                                c += input.next();
                            }

                            allow_e = false;
                            allow_decimal = false;
                        }
                    }

                    return [c, 'TK_WORD'];
                }

                if (acorn.isIdentifierStart(input.peekCharCode(-1))) {
                    if (input.hasNext()) {
                        while (acorn.isIdentifierChar(input.peekCharCode())) {
                            c += input.next();
                            if (!input.hasNext()) {
                                break;
                            }
                        }
                    }

                    if (!(last_token.type === 'TK_DOT' ||
                            (last_token.type === 'TK_RESERVED' && in_array(last_token.text, ['set', 'get']))) &&
                        in_array(c, reserved_words)) {
                        if (c === 'in' || c === 'of') { // hack for 'in' and 'of' operators
                            return [c, 'TK_OPERATOR'];
                        }
                        return [c, 'TK_RESERVED'];
                    }

                    return [c, 'TK_WORD'];
                }

                if (c === '(' || c === '[') {
                    return [c, 'TK_START_EXPR'];
                }

                if (c === ')' || c === ']') {
                    return [c, 'TK_END_EXPR'];
                }

                if (c === '{') {
                    return [c, 'TK_START_BLOCK'];
                }

                if (c === '}') {
                    return [c, 'TK_END_BLOCK'];
                }

                if (c === ';') {
                    return [c, 'TK_SEMICOLON'];
                }

                if (c === '/') {
                    var comment = '';
                    var comment_match;
                    // peek for comment /* ... */
                    if (input.peek() === '*') {
                        input.next();
                        comment_match = input.match(block_comment_pattern);
                        comment = '/*' + comment_match[0];
                        var directives = get_directives(comment);
                        if (directives && directives.ignore === 'start') {
                            comment_match = input.match(directives_end_ignore_pattern);
                            comment += comment_match[0];
                        }
                        comment = comment.replace(acorn.allLineBreaks, '\n');
                        return [comment, 'TK_BLOCK_COMMENT', directives];
                    }
                    // peek for comment // ...
                    if (input.peek() === '/') {
                        input.next();
                        comment_match = input.match(comment_pattern);
                        comment = '//' + comment_match[0];
                        return [comment, 'TK_COMMENT'];
                    }

                }

                var startXmlRegExp = /<()([-a-zA-Z:0-9_.]+|{[\s\S]+?}|!\[CDATA\[[\s\S]*?\]\])(\s+{[\s\S]+?}|\s+[-a-zA-Z:0-9_.]+|\s+[-a-zA-Z:0-9_.]+\s*=\s*('[^']*'|"[^"]*"|{[\s\S]+?}))*\s*(\/?)\s*>/g;

                if (c === '`' || c === "'" || c === '"' || // string
                    (
                        (c === '/') || // regexp
                        (opts.e4x && c === "<" && input.test(startXmlRegExp, -1)) // xml
                    ) && ( // regex and xml can only appear in specific locations during parsing
                        (last_token.type === 'TK_RESERVED' && in_array(last_token.text, ['return', 'case', 'throw', 'else', 'do', 'typeof', 'yield'])) ||
                        (last_token.type === 'TK_END_EXPR' && last_token.text === ')' &&
                            last_token.parent && last_token.parent.type === 'TK_RESERVED' && in_array(last_token.parent.text, ['if', 'while', 'for'])) ||
                        (in_array(last_token.type, ['TK_COMMENT', 'TK_START_EXPR', 'TK_START_BLOCK',
                            'TK_END_BLOCK', 'TK_OPERATOR', 'TK_EQUALS', 'TK_EOF', 'TK_SEMICOLON', 'TK_COMMA'
                        ]))
                    )) {

                    var sep = c,
                        esc = false,
                        has_char_escapes = false;

                    resulting_string = c;

                    if (sep === '/') {
                        //
                        // handle regexp
                        //
                        var in_char_class = false;
                        while (input.hasNext() &&
                            ((esc || in_char_class || input.peek() !== sep) &&
                                !input.testChar(acorn.newline))) {
                            resulting_string += input.peek();
                            if (!esc) {
                                esc = input.peek() === '\\';
                                if (input.peek() === '[') {
                                    in_char_class = true;
                                } else if (input.peek() === ']') {
                                    in_char_class = false;
                                }
                            } else {
                                esc = false;
                            }
                            input.next();
                        }
                    } else if (opts.e4x && sep === '<') {
                        //
                        // handle e4x xml literals
                        //

                        var xmlRegExp = /[\s\S]*?<(\/?)([-a-zA-Z:0-9_.]+|{[\s\S]+?}|!\[CDATA\[[\s\S]*?\]\])(\s+{[\s\S]+?}|\s+[-a-zA-Z:0-9_.]+|\s+[-a-zA-Z:0-9_.]+\s*=\s*('[^']*'|"[^"]*"|{[\s\S]+?}))*\s*(\/?)\s*>/g;
                        input.back();
                        var xmlStr = '';
                        var match = input.match(startXmlRegExp);
                        if (match) {
                            // Trim root tag to attempt to
                            var rootTag = match[2].replace(/^{\s+/, '{').replace(/\s+}$/, '}');
                            var isCurlyRoot = rootTag.indexOf('{') === 0;
                            var depth = 0;
                            while (match) {
                                var isEndTag = !!match[1];
                                var tagName = match[2];
                                var isSingletonTag = (!!match[match.length - 1]) || (tagName.slice(0, 8) === "![CDATA[");
                                if (!isSingletonTag &&
                                    (tagName === rootTag || (isCurlyRoot && tagName.replace(/^{\s+/, '{').replace(/\s+}$/, '}')))) {
                                    if (isEndTag) {
                                        --depth;
                                    } else {
                                        ++depth;
                                    }
                                }
                                xmlStr += match[0];
                                if (depth <= 0) {
                                    break;
                                }
                                match = input.match(xmlRegExp);
                            }
                            // if we didn't close correctly, keep unformatted.
                            if (!match) {
                                xmlStr += input.match(/[\s\S]*/g)[0];
                            }
                            xmlStr = xmlStr.replace(acorn.allLineBreaks, '\n');
                            return [xmlStr, "TK_STRING"];
                        }
                    } else {
                        //
                        // handle string
                        //
                        var parse_string = function(delimiter, allow_unescaped_newlines, start_sub) {
                            // Template strings can travers lines without escape characters.
                            // Other strings cannot
                            var current_char;
                            while (input.hasNext()) {
                                current_char = input.peek();
                                if (!(esc || (current_char !== delimiter &&
                                        (allow_unescaped_newlines || !acorn.newline.test(current_char))))) {
                                    break;
                                }

                                // Handle \r\n linebreaks after escapes or in template strings
                                if ((esc || allow_unescaped_newlines) && acorn.newline.test(current_char)) {
                                    if (current_char === '\r' && input.peek(1) === '\n') {
                                        input.next();
                                        current_char = input.peek();
                                    }
                                    resulting_string += '\n';
                                } else {
                                    resulting_string += current_char;
                                }

                                if (esc) {
                                    if (current_char === 'x' || current_char === 'u') {
                                        has_char_escapes = true;
                                    }
                                    esc = false;
                                } else {
                                    esc = current_char === '\\';
                                }

                                input.next();

                                if (start_sub && resulting_string.indexOf(start_sub, resulting_string.length - start_sub.length) !== -1) {
                                    if (delimiter === '`') {
                                        parse_string('}', allow_unescaped_newlines, '`');
                                    } else {
                                        parse_string('`', allow_unescaped_newlines, '${');
                                    }

                                    if (input.hasNext()) {
                                        resulting_string += input.next();
                                    }
                                }
                            }
                        };

                        if (sep === '`') {
                            parse_string('`', true, '${');
                        } else {
                            parse_string(sep);
                        }
                    }

                    if (has_char_escapes && opts.unescape_strings) {
                        resulting_string = unescape_string(resulting_string);
                    }

                    if (input.peek() === sep) {
                        resulting_string += sep;
                        input.next();

                        if (sep === '/') {
                            // regexps may have modifiers /regexp/MOD , so fetch those, too
                            // Only [gim] are valid, but if the user puts in garbage, do what we can to take it.
                            while (input.hasNext() && acorn.isIdentifierStart(input.peekCharCode())) {
                                resulting_string += input.next();
                            }
                        }
                    }
                    return [resulting_string, 'TK_STRING'];
                }

                if (c === '#') {

                    if (tokens.length === 0 && input.peek() === '!') {
                        // shebang
                        resulting_string = c;
                        while (input.hasNext() && c !== '\n') {
                            c = input.next();
                            resulting_string += c;
                        }
                        return [trim(resulting_string) + '\n', 'TK_UNKNOWN'];
                    }



                    // Spidermonkey-specific sharp variables for circular references
                    // https://developer.mozilla.org/En/Sharp_variables_in_JavaScript
                    // http://mxr.mozilla.org/mozilla-central/source/js/src/jsscan.cpp around line 1935
                    var sharp = '#';
                    if (input.hasNext() && input.testChar(digit)) {
                        do {
                            c = input.next();
                            sharp += c;
                        } while (input.hasNext() && c !== '#' && c !== '=');
                        if (c === '#') {
                            //
                        } else if (input.peek() === '[' && input.peek(1) === ']') {
                            sharp += '[]';
                            input.next();
                            input.next();
                        } else if (input.peek() === '{' && input.peek(1) === '}') {
                            sharp += '{}';
                            input.next();
                            input.next();
                        }
                        return [sharp, 'TK_WORD'];
                    }
                }

                if (c === '<' && (input.peek() === '?' || input.peek() === '%')) {
                    input.back();
                    var template_match = input.match(template_pattern);
                    if (template_match) {
                        c = template_match[0];
                        c = c.replace(acorn.allLineBreaks, '\n');
                        return [c, 'TK_STRING'];
                    }
                }

                if (c === '<' && input.match(/\!--/g)) {
                    c = '<!--';
                    while (input.hasNext() && !input.testChar(acorn.newline)) {
                        c += input.next();
                    }
                    in_html_comment = true;
                    return [c, 'TK_COMMENT'];
                }

                if (c === '-' && in_html_comment && input.match(/->/g)) {
                    in_html_comment = false;
                    return ['-->', 'TK_COMMENT'];
                }

                if (c === '.') {
                    if (input.peek() === '.' && input.peek(1) === '.') {
                        c += input.next() + input.next();
                        return [c, 'TK_OPERATOR'];
                    }
                    return [c, 'TK_DOT'];
                }

                if (in_array(c, punct)) {
                    while (input.hasNext() && in_array(c + input.peek(), punct)) {
                        c += input.next();
                        if (!input.hasNext()) {
                            break;
                        }
                    }

                    if (c === ',') {
                        return [c, 'TK_COMMA'];
                    } else if (c === '=') {
                        return [c, 'TK_EQUALS'];
                    } else {
                        return [c, 'TK_OPERATOR'];
                    }
                }

                return [c, 'TK_UNKNOWN'];
            }


            function unescape_string(s) {
                // You think that a regex would work for this
                // return s.replace(/\\x([0-9a-f]{2})/gi, function(match, val) {
                //         return String.fromCharCode(parseInt(val, 16));
                //     })
                // However, dealing with '\xff', '\\xff', '\\\xff' makes this more fun.
                var out = '',
                    escaped = 0;

                var input_scan = new InputScanner(s);
                var matched = null;

                while (input_scan.hasNext()) {
                    // Keep any whitespace, non-slash characters
                    // also keep slash pairs.
                    matched = input_scan.match(/([\s]|[^\\]|\\\\)+/g);

                    if (matched) {
                        out += matched[0];
                    }

                    if (input_scan.peek() === '\\') {
                        input_scan.next();
                        if (input_scan.peek() === 'x') {
                            matched = input_scan.match(/x([0-9A-Fa-f]{2})/g);
                        } else if (input_scan.peek() === 'u') {
                            matched = input_scan.match(/u([0-9A-Fa-f]{4})/g);
                        } else {
                            out += '\\';
                            if (input_scan.hasNext()) {
                                out += input_scan.next();
                            }
                            continue;
                        }

                        // If there's some error decoding, return the original string
                        if (!matched) {
                            return s;
                        }

                        escaped = parseInt(matched[1], 16);

                        if (escaped > 0x7e && escaped <= 0xff && matched[0].indexOf('x') === 0) {
                            // we bail out on \x7f..\xff,
                            // leaving whole string escaped,
                            // as it's probably completely binary
                            return s;
                        } else if (escaped >= 0x00 && escaped < 0x20) {
                            // leave 0x00...0x1f escaped
                            out += '\\' + matched[0];
                            continue;
                        } else if (escaped === 0x22 || escaped === 0x27 || escaped === 0x5c) {
                            // single-quote, apostrophe, backslash - escape these
                            out += '\\' + String.fromCharCode(escaped);
                        } else {
                            out += String.fromCharCode(escaped);
                        }
                    }
                }

                return out;
            }
        }

        var beautifier = new Beautifier(js_source_text, options);
        return beautifier.beautify();

    }

    if (true) {
        // Add support for AMD ( https://github.com/amdjs/amdjs-api/wiki/AMD#defineamd-property- )
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
            return { js_beautify: js_beautify };
        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
        // Add support for CommonJS. Just put this file somewhere on your require.paths
        // and you will be able to `var js_beautify = require("beautify").js_beautify`.
        exports.js_beautify = js_beautify;
    } else if (typeof window !== "undefined") {
        // If we're running a web page and don't have either of the above, add our one global
        window.js_beautify = js_beautify;
    } else if (typeof global !== "undefined") {
        // If we don't even have window, try global.
        global.js_beautify = js_beautify;
    }

}());

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var ng2_auto_complete_1 = __webpack_require__(15);
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
        var _this = this;
        this.autoComplete = autoComplete;
        this.minChars = 0;
        this.loadingText = "Loading";
        this.showInputTag = true;
        this.showDropdownOnInit = false;
        this.tabToSelect = true;
        this.valueSelected = new core_1.EventEmitter();
        this.dropdownVisible = false;
        this.isLoading = false;
        this.filteredList = [];
        this.minCharsEntered = false;
        this.itemIndex = 0;
        this.reloadListInDelay = function (evt) {
            var delayMs = _this.isSrcArr() ? 10 : 500;
            var keyword = evt.target.value;
            // executing after user stopped typing
            _this.delay(function () { return _this.reloadList(keyword); }, delayMs);
        };
        this.inputElKeyHandler = function (evt) {
            var totalNumItem = _this.filteredList.length;
            switch (evt.keyCode) {
                case 27:
                    break;
                case 38:
                    _this.itemIndex = (totalNumItem + _this.itemIndex - 1) % totalNumItem;
                    break;
                case 40:
                    _this.dropdownVisible = true;
                    _this.itemIndex = (totalNumItem + _this.itemIndex + 1) % totalNumItem;
                    break;
                case 13:
                    if (_this.filteredList.length > 0) {
                        _this.selectOne(_this.filteredList[_this.itemIndex]);
                    }
                    evt.preventDefault();
                    break;
                case 9:
                    if (_this.tabToSelect && _this.filteredList.length > 0) {
                        _this.selectOne(_this.filteredList[_this.itemIndex]);
                    }
                    break;
            }
        };
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
        var _this = this;
        this.autoComplete.source = this.source;
        this.autoComplete.pathToData = this.pathToData;
        setTimeout(function () {
            if (_this.autoCompleteInput) {
                _this.autoCompleteInput.nativeElement.focus();
            }
            if (_this.showDropdownOnInit) {
                _this.showDropdownList({ target: { value: '' } });
            }
        });
    };
    Ng2AutoCompleteComponent.prototype.showDropdownList = function (event) {
        this.dropdownVisible = true;
        this.reloadList(event.target.value);
    };
    Ng2AutoCompleteComponent.prototype.hideDropdownList = function () {
        this.dropdownVisible = false;
    };
    Ng2AutoCompleteComponent.prototype.findItemFromSelectValue = function (selectText) {
        var matchingItems = this.filteredList
            .filter(function (item) { return ('' + item) === selectText; });
        return matchingItems.length ? matchingItems[0] : null;
    };
    Ng2AutoCompleteComponent.prototype.reloadList = function (keyword) {
        var _this = this;
        this.filteredList = [];
        if (keyword.length < (this.minChars || 0)) {
            this.minCharsEntered = false;
            return;
        }
        else {
            this.minCharsEntered = true;
        }
        if (this.isSrcArr()) {
            this.isLoading = false;
            this.filteredList = this.autoComplete.filter(this.source, keyword);
            if (this.maxNumList) {
                this.filteredList = this.filteredList.slice(0, this.maxNumList);
            }
        }
        else {
            this.isLoading = true;
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
                this.autoComplete.getRemoteData(keyword).subscribe(function (resp) {
                    _this.filteredList = resp;
                    if (_this.maxNumList) {
                        _this.filteredList = _this.filteredList.slice(0, _this.maxNumList);
                    }
                }, function (error) { return null; }, function () { return _this.isLoading = false; } // complete
                );
            }
        }
    };
    Ng2AutoCompleteComponent.prototype.selectOne = function (data) {
        this.valueSelected.emit(data);
    };
    ;
    Ng2AutoCompleteComponent.prototype.getFormattedList = function (data) {
        var formatted;
        var formatter = this.listFormatter || '(id) value';
        if (typeof formatter === 'function') {
            formatted = formatter.apply(this, [data]);
        }
        else if (typeof data !== 'object') {
            formatted = data;
        }
        else if (typeof formatter === 'string') {
            formatted = formatter;
            var matches = formatter.match(/[a-zA-Z0-9_\$]+/g);
            if (matches && typeof data !== 'string') {
                matches.forEach(function (key) {
                    formatted = formatted.replace(key, data[key]);
                });
            }
        }
        return formatted;
    };
    Object.defineProperty(Ng2AutoCompleteComponent.prototype, "emptyList", {
        get: function () {
            return !(this.isLoading ||
                (this.minCharsEntered && !this.isLoading && !this.filteredList.length) ||
                (this.filteredList.length));
        },
        enumerable: true,
        configurable: true
    });
    Ng2AutoCompleteComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: "ng2-auto-complete",
                    template: "\n  <div class=\"ng2-auto-complete\">\n\n    <!-- keyword input -->\n    <input *ngIf=\"showInputTag\"\n           #autoCompleteInput class=\"keyword\"\n           placeholder=\"{{placeholder}}\"\n           (focus)=\"showDropdownList($event)\"\n           (blur)=\"hideDropdownList()\"\n           (keydown)=\"inputElKeyHandler($event)\"\n           (input)=\"reloadListInDelay($event)\"\n           [(ngModel)]=\"keyword\" />\n\n    <!-- dropdown that user can select -->\n    <ul *ngIf=\"dropdownVisible\" [class.empty]=\"emptyList\">\n      <li *ngIf=\"isLoading\" class=\"loading\">{{loadingText}}</li>\n      <li *ngIf=\"minCharsEntered && !isLoading && !filteredList.length\"\n           (mousedown)=\"selectOne('')\"\n           class=\"no-match-found\">{{noMatchFoundText || 'No Result Found'}}</li>\n      <li *ngIf=\"blankOptionText && filteredList.length\"\n          (mousedown)=\"selectOne('')\"\n          class=\"blank-item\">{{blankOptionText}}</li>\n      <li class=\"item\"\n          *ngFor=\"let item of filteredList; let i=index\"\n          (mousedown)=\"selectOne(item)\"\n          [ngClass]=\"{selected: i === itemIndex}\"\n          [innerHtml]=\"getFormattedList(item)\">\n      </li>\n    </ul>\n\n  </div>",
                    providers: [ng2_auto_complete_1.Ng2AutoComplete],
                    styles: ["\n  @keyframes slideDown {\n    0% {\n      transform:  translateY(-10px);\n    }\n    100% {\n      transform: translateY(0px);\n    }\n  }\n  .ng2-auto-complete {\n    background-color: transparent;\n  }\n  .ng2-auto-complete > input {\n    outline: none;\n    border: 0;\n    padding: 2px; \n    box-sizing: border-box;\n    background-clip: content-box;\n  }\n\n  .ng2-auto-complete > ul {\n    background-color: #fff;\n    margin: 0;\n    width : 100%;\n    overflow-y: auto;\n    list-style-type: none;\n    padding: 0;\n    border: 1px solid #ccc;\n    box-sizing: border-box;\n    animation: slideDown 0.1s;\n  }\n  .ng2-auto-complete > ul.empty {\n    display: none;\n  }\n\n  .ng2-auto-complete > ul li {\n    padding: 2px 5px;\n    border-bottom: 1px solid #eee;\n  }\n\n  .ng2-auto-complete > ul li.selected {\n    background-color: #ccc;\n  }\n\n  .ng2-auto-complete > ul li:last-child {\n    border-bottom: none;\n  }\n\n  .ng2-auto-complete > ul li:hover {\n    background-color: #ccc;\n  }"
                    ],
                    encapsulation: core_1.ViewEncapsulation.None
                },] },
    ];
    /** @nocollapse */
    Ng2AutoCompleteComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: ng2_auto_complete_1.Ng2AutoComplete, },
    ]; };
    Ng2AutoCompleteComponent.propDecorators = {
        'listFormatter': [{ type: core_1.Input, args: ["list-formatter",] },],
        'source': [{ type: core_1.Input, args: ["source",] },],
        'pathToData': [{ type: core_1.Input, args: ["path-to-data",] },],
        'minChars': [{ type: core_1.Input, args: ["min-chars",] },],
        'placeholder': [{ type: core_1.Input, args: ["placeholder",] },],
        'blankOptionText': [{ type: core_1.Input, args: ["blank-option-text",] },],
        'noMatchFoundText': [{ type: core_1.Input, args: ["no-match-found-text",] },],
        'acceptUserInput': [{ type: core_1.Input, args: ["accept-user-input",] },],
        'loadingText': [{ type: core_1.Input, args: ["loading-text",] },],
        'maxNumList': [{ type: core_1.Input, args: ["max-num-list",] },],
        'showInputTag': [{ type: core_1.Input, args: ["show-input-tag",] },],
        'showDropdownOnInit': [{ type: core_1.Input, args: ["show-dropdown-on-init",] },],
        'tabToSelect': [{ type: core_1.Input, args: ["tab-to-select",] },],
        'valueSelected': [{ type: core_1.Output },],
        'autoCompleteInput': [{ type: core_1.ViewChild, args: ['autoCompleteInput',] },],
    };
    return Ng2AutoCompleteComponent;
}());
exports.Ng2AutoCompleteComponent = Ng2AutoCompleteComponent;
//# sourceMappingURL=ng2-auto-complete.component.js.map

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var http_1 = __webpack_require__(100);
__webpack_require__(101);
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
            var objStr = JSON.stringify(el).toLowerCase();
            keyword = keyword.toLowerCase();
            //console.log(objStr, keyword, objStr.indexOf(keyword) !== -1);
            return objStr.indexOf(keyword) !== -1;
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
        else if (!this.http) {
            throw "Http is required.";
        }
        var matches = this.source.match(/:[a-zA-Z_]+/);
        if (matches === null) {
            throw "Replacement word is missing.";
        }
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
    Ng2AutoComplete.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    Ng2AutoComplete.ctorParameters = function () { return [
        { type: http_1.Http, decorators: [{ type: core_1.Optional },] },
    ]; };
    return Ng2AutoComplete;
}());
exports.Ng2AutoComplete = Ng2AutoComplete;
//# sourceMappingURL=ng2-auto-complete.js.map

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var ng2_datetime_1 = __webpack_require__(9);
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
        this.selected$ = new core_1.EventEmitter();
        this.closing$ = new core_1.EventEmitter();
        this.locale = ng2_datetime_1.Ng2Datetime.locale;
        this.el = elementRef.nativeElement;
    }
    Object.defineProperty(Ng2DatetimePickerComponent.prototype, "year", {
        // public ngAfterViewInit ():void {
        //   let stopPropagation = (e: Event) => e.stopPropagation();
        //   if (!this.dateOnly) {
        //     this.hours.nativeElement.addEventListener('keyup', stopPropagation);
        //     this.hours.nativeElement.addEventListener('mousedown', stopPropagation);
        //     this.minutes.nativeElement.addEventListener('keyup', stopPropagation);
        //     this.minutes.nativeElement.addEventListener('mousedown', stopPropagation);
        //   }
        // }
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
    Object.defineProperty(Ng2DatetimePickerComponent.prototype, "monthData", {
        get: function () {
            return this._monthData;
        },
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
    Ng2DatetimePickerComponent.prototype.isWeekend = function (dayNum, month) {
        if (typeof month === 'undefined') {
            return ng2_datetime_1.Ng2Datetime.weekends.indexOf(dayNum % 7) !== -1; //weekday index
        }
        else {
            var weekday = this.toDate(dayNum, month).getDay();
            return ng2_datetime_1.Ng2Datetime.weekends.indexOf(weekday) !== -1;
        }
    };
    Ng2DatetimePickerComponent.prototype.ngOnInit = function () {
        if (!this.defaultValue || isNaN(this.defaultValue.getTime())) {
            this.defaultValue = new Date();
        }
        this.selectedDate = this.defaultValue;
        // set hour and minute using moment if available to avoid having Javascript change timezones
        if (typeof moment === 'undefined') {
            this.hour = this.selectedDate.getHours();
            this.minute = this.selectedDate.getMinutes();
        }
        else {
            var m = moment(this.selectedDate);
            this.hour = m.hours();
            this.minute = m.minute();
        }
        this._monthData = this.ng2Datetime.getMonthData(this.year, this.month);
    };
    Ng2DatetimePickerComponent.prototype.toDate = function (day, month) {
        return new Date(this._monthData.year, month || this._monthData.month, day);
    };
    Ng2DatetimePickerComponent.prototype.toDateOnly = function (date) {
        return new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0, 0);
    };
    Ng2DatetimePickerComponent.prototype.selectCurrentTime = function () {
        this.hour = (new Date()).getHours();
        this.minute = (new Date()).getMinutes();
        this.selectDateTime();
    };
    /**
     * set the selected date and close it when closeOnSelect is true
     * @param date {Date}
     */
    Ng2DatetimePickerComponent.prototype.selectDateTime = function (date) {
        var _this = this;
        this.selectedDate = date || this.selectedDate;
        if (this.isDateDisabled(this.selectedDate)) {
            return false;
        }
        // editing hours and minutes via javascript date methods causes date to lose timezone info,
        // so edit using moment if available
        var hour = parseInt('' + this.hour || '0', 10);
        var minute = parseInt('' + this.minute || '0', 10);
        if (typeof moment !== 'undefined') {
            // here selected date has a time of 00:00 in local time,
            // so build moment by getting year/month/day separately
            // to avoid it saving as a day earlier
            var m = moment([this.selectedDate.getFullYear(), this.selectedDate.getMonth(), this.selectedDate.getDate()]);
            m.hours(hour);
            m.minutes(minute);
            this.selectedDate = m.toDate();
        }
        else {
            this.selectedDate.setHours(hour);
            this.selectedDate.setMinutes(minute);
        }
        //console.log('this.selectedDate', this.selectedDate)
        this.selectedDate.toString = function () {
            return ng2_datetime_1.Ng2Datetime.formatDate(_this.selectedDate, _this.dateFormat, _this.dateOnly);
        };
        this.selected$.emit(this.selectedDate);
    };
    ;
    /**
     * show prev/next month calendar
     */
    Ng2DatetimePickerComponent.prototype.updateMonthData = function (num) {
        this._monthData = this.ng2Datetime.getMonthData(this._monthData.year, this._monthData.month + num);
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
    Ng2DatetimePickerComponent.prototype.close = function () {
        this.closing$.emit(true);
    };
    Ng2DatetimePickerComponent.decorators = [
        { type: core_1.Component, args: [{
                    providers: [ng2_datetime_1.Ng2Datetime],
                    selector: 'ng2-datetime-picker',
                    template: "\n<div class=\"closing-layer\" (click)=\"close()\" *ngIf=\"showCloseLayer\" ></div>\n<div class=\"ng2-datetime-picker\">\n  <div class=\"close-button\" *ngIf=\"showCloseButton\" (click)=\"close()\"></div>\n  \n  <!-- Month - Year  -->\n  <div class=\"month\" *ngIf=\"!timeOnly\">\n    <b class=\"prev_next prev\" (click)=\"updateMonthData(-12)\">&laquo;</b>\n    <b class=\"prev_next prev\" (click)=\"updateMonthData(-1)\">&lsaquo;</b>\n     <span title=\"{{monthData?.fullName}}\">\n           {{monthData?.shortName}}\n     </span>\n    {{monthData.year}}\n    <b class=\"prev_next next\" (click)=\"updateMonthData(+12)\">&raquo;</b>\n    <b class=\"prev_next next\" (click)=\"updateMonthData(+1)\">&rsaquo;</b>\n  </div>\n\n  <!-- Date -->\n  <div class=\"days\" *ngIf=\"!timeOnly\">\n\n    <!-- Su Mo Tu We Th Fr Sa -->\n    <div class=\"day-of-week\"\n         *ngFor=\"let dayOfWeek of monthData.localizedDaysOfWeek; let ndx=index\"\n         [class.weekend]=\"isWeekend(ndx + monthData.firstDayOfWeek)\"\n         title=\"{{dayOfWeek.fullName}}\">\n      {{dayOfWeek.shortName}}\n    </div>\n\n    <!-- Fill up blank days for this month -->\n    <div *ngIf=\"monthData.leadingDays.length < 7\">\n      <div class=\"day\"\n          (click)=\"updateMonthData(-1)\"\n           *ngFor=\"let dayNum of monthData.leadingDays\">\n        {{dayNum}}\n      </div>\n    </div>\n\n    <div class=\"day\"\n         *ngFor=\"let dayNum of monthData.days\"\n         (click)=\"selectDateTime(toDate(dayNum))\"\n         title=\"{{monthData.year}}-{{monthData.month+1}}-{{dayNum}}\"\n         [ngClass]=\"{\n           selectable: !isDateDisabled(toDate(dayNum)),\n           selected: toDate(dayNum).getTime() === toDateOnly(selectedDate).getTime(),\n           today: toDate(dayNum).getTime() === today.getTime(),\n           weekend: isWeekend(dayNum, monthData.month)\n         }\">\n      {{dayNum}}\n    </div>\n\n    <!-- Fill up blank days for this month -->\n    <div *ngIf=\"monthData.trailingDays.length < 7\">\n      <div class=\"day\"\n           (click)=\"updateMonthData(+1)\"\n           *ngFor=\"let dayNum of monthData.trailingDays\">\n        {{dayNum}}\n      </div>\n    </div>\n  </div>\n\n  <!-- Time -->\n  <div class=\"time\" id=\"time\" *ngIf=\"!dateOnly\">\n    <div class=\"select-current-time\" (click)=\"selectCurrentTime()\">{{locale.currentTime}}</div>\n    <label class=\"timeLabel\">{{locale.time}}</label>\n    <span class=\"timeValue\">\n      {{(\"0\"+hour).slice(-2)}} : {{(\"0\"+minute).slice(-2)}}\n    </span><br/>\n    <label class=\"hourLabel\">{{locale.hour}}:</label>\n    <input #hours class=\"hourInput\"\n           tabindex=\"90000\"\n           (change)=\"selectDateTime()\"\n           type=\"range\"\n           min=\"{{minHour || 0}}\"\n           max=\"{{maxHour || 23}}\"\n           [(ngModel)]=\"hour\" />\n    <label class=\"minutesLabel\">{{locale.minute}}:</label>\n    <input #minutes class=\"minutesInput\"\n           tabindex=\"90000\"\n           step=\"{{minuteStep}}\"\n           (change)=\"selectDateTime()\"\n           type=\"range\" min=\"0\" max=\"59\" range=\"10\" [(ngModel)]=\"minute\"/>\n  </div>\n</div>\n  ",
                    styles: [
                        "\n@keyframes slideDown {\n  0% {\n    transform:  translateY(-10px);\n  }\n  100% {\n    transform: translateY(0px);\n  }\n}\n\n@keyframes slideUp {\n  0% {\n    transform: translateY(100%);\n  }\n  100% {\n    transform: translateY(0%);\n  }\n}\n\n.ng2-datetime-picker-wrapper {\n  position: relative;\n}\n\n.ng2-datetime-picker {\n  color: #333;\n  outline-width: 0;\n  font: normal 14px sans-serif;\n  border: 1px solid #ddd;\n  display: inline-block;\n  background: #fff;\n  animation: slideDown 0.1s ease-in-out;\n  animation-fill-mode: both;\n}\n.ng2-datetime-picker .close-button:before {\n  content: 'X';\n  position: absolute;\n  padding: 0 5px;\n  cursor: pointer;\n  color: #ff0000;\n  right: 0;\n  z-index: 1;\n}\n.ng2-datetime-picker > .month {\n  text-align: center;\n  line-height: 22px;\n  padding: 10px;\n  background: #fcfcfc;\n  text-transform: uppercase;\n  font-weight: bold;\n  border-bottom: 1px solid #ddd;\n  position: relative;\n}\n.ng2-datetime-picker > .month > .prev_next {\n  color: #555;\n  display: block;\n  font: normal 24px sans-serif;\n  outline: none;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  width: 25px;\n  text-align: center;\n}\n.ng2-datetime-picker > .month > .prev_next:hover {\n  background-color: #333;\n  color: #fff;\n}\n.ng2-datetime-picker > .month > .prev_next.prev {\n  float: left;\n}\n.ng2-datetime-picker > .month > .prev_next.next {\n  float: right;\n}\n.ng2-datetime-picker > .days {\n  width: 210px; /* 30 x 7 */\n  margin: 10px;\n  text-align: center;\n}\n.ng2-datetime-picker > .days .day-of-week,\n.ng2-datetime-picker > .days .day {\n  box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  border: 1px solid transparent;\n  width: 30px;\n  line-height: 28px;\n  float: left;\n}\n.ng2-datetime-picker > .days .day-of-week {\n  font-weight: bold;\n}\n.ng2-datetime-picker > .days .day-of-week.weekend {\n  color: #ccc;\n  background-color: inherit;\n}\n.ng2-datetime-picker > .days .day:not(.selectable) {\n  color: #ccc;\n  cursor: default;\n}\n.ng2-datetime-picker > .days .weekend {\n  color: #ccc;\n  background-color: #eee;\n}\n.ng2-datetime-picker > .days .day.selectable  {\n  cursor: pointer;\n}\n.ng2-datetime-picker > .days .day.selected {\n  background: gray;\n  color: #fff;\n}\n.ng2-datetime-picker > .days .day:not(.selected).selectable:hover {\n  background: #eee;\n}\n.ng2-datetime-picker > .days:after {\n  content: '';\n  display: block;\n  clear: left;\n  height: 0;\n}\n.ng2-datetime-picker .time {\n  position: relative;\n  padding: 10px;\n  text-transform: Capitalize;\n}\n.ng2-datetime-picker .select-current-time {\n  position: absolute;\n  top: 1em;\n  right: 5px;\n  z-index: 1;\n  cursor: pointer;\n  color: #0000ff;\n}\n.ng2-datetime-picker .hourLabel,\n.ng2-datetime-picker .minutesLabel {\n  display: inline-block;\n  width: 40px;\n  text-align: right;\n}\n.ng2-datetime-picker input[type=range] {\n  width: 200px;\n}\n\n.closing-layer {\n  display: block;\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: rgba(0,0,0,0);\n}\n\n@media (max-width: 767px) {\n  .ng2-datetime-picker {\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    right: 0;    \n    animation: slideUp 0.1s ease-in-out;\n  }\n\n  .ng2-datetime-picker .days {\n    margin: 10px auto;\n  }\n\n  .closing-layer {\n    display: block;\n    position: fixed;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    background: rgba(0,0,0,0.2);\n  }\n}\n  "
                    ],
                    encapsulation: core_1.ViewEncapsulation.None
                },] },
    ];
    /** @nocollapse */
    Ng2DatetimePickerComponent.ctorParameters = [
        { type: core_1.ElementRef, },
        { type: ng2_datetime_1.Ng2Datetime, },
        { type: core_1.ChangeDetectorRef, },
    ];
    Ng2DatetimePickerComponent.propDecorators = {
        'dateFormat': [{ type: core_1.Input, args: ['date-format',] },],
        'dateOnly': [{ type: core_1.Input, args: ['date-only',] },],
        'timeOnly': [{ type: core_1.Input, args: ['time-only',] },],
        'selectedDate': [{ type: core_1.Input, args: ['selected-date',] },],
        'hour': [{ type: core_1.Input, args: ['hour',] },],
        'minute': [{ type: core_1.Input, args: ['minute',] },],
        'minuteStep': [{ type: core_1.Input, args: ['minuteStep',] },],
        'defaultValue': [{ type: core_1.Input, args: ['default-value',] },],
        'minDate': [{ type: core_1.Input, args: ['min-date',] },],
        'maxDate': [{ type: core_1.Input, args: ['max-date',] },],
        'minHour': [{ type: core_1.Input, args: ['min-hour',] },],
        'maxHour': [{ type: core_1.Input, args: ['max-hour',] },],
        'disabledDates': [{ type: core_1.Input, args: ['disabled-dates',] },],
        'showCloseButton': [{ type: core_1.Input, args: ['show-close-button',] },],
        'showCloseLayer': [{ type: core_1.Input, args: ['show-close-layer',] },],
        'selected$': [{ type: core_1.Output, args: ['selected$',] },],
        'closing$': [{ type: core_1.Output, args: ['closing$',] },],
        'hours': [{ type: core_1.ViewChild, args: ['hours',] },],
        'minutes': [{ type: core_1.ViewChild, args: ['minutes',] },],
    };
    return Ng2DatetimePickerComponent;
}());
exports.Ng2DatetimePickerComponent = Ng2DatetimePickerComponent;
//# sourceMappingURL=ng2-datetime-picker.component.js.map

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
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
    Ng2OverlayManager.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    Ng2OverlayManager.ctorParameters = function () { return []; };
    return Ng2OverlayManager;
}());
exports.Ng2OverlayManager = Ng2OverlayManager;
//# sourceMappingURL=ng2-overlay-manager.js.map

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_18__;

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_19__;

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_20__;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
  The MIT License (MIT)

  Copyright (c) 2007-2017 Einar Lielmanis, Liam Newman, and contributors.

  Permission is hereby granted, free of charge, to any person
  obtaining a copy of this software and associated documentation files
  (the "Software"), to deal in the Software without restriction,
  including without limitation the rights to use, copy, modify, merge,
  publish, distribute, sublicense, and/or sell copies of the Software,
  and to permit persons to whom the Software is furnished to do so,
  subject to the following conditions:

  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
  BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
  ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
  CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.

*/

/**
The following batches are equivalent:

var beautify_js = require('js-beautify');
var beautify_js = require('js-beautify').js;
var beautify_js = require('js-beautify').js_beautify;

var beautify_css = require('js-beautify').css;
var beautify_css = require('js-beautify').css_beautify;

var beautify_html = require('js-beautify').html;
var beautify_html = require('js-beautify').html_beautify;

All methods returned accept two arguments, the source string and an options object.
**/

function get_beautify(js_beautify, css_beautify, html_beautify) {
    // the default is js
    var beautify = function(src, config) {
        return js_beautify.js_beautify(src, config);
    };

    // short aliases
    beautify.js = js_beautify.js_beautify;
    beautify.css = css_beautify.css_beautify;
    beautify.html = html_beautify.html_beautify;

    // legacy aliases
    beautify.js_beautify = js_beautify.js_beautify;
    beautify.css_beautify = css_beautify.css_beautify;
    beautify.html_beautify = html_beautify.html_beautify;

    return beautify;
}

if (true) {
    // Add support for AMD ( https://github.com/amdjs/amdjs-api/wiki/AMD#defineamd-property- )
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
        __webpack_require__(13),
        __webpack_require__(12),
        __webpack_require__(62)
    ], __WEBPACK_AMD_DEFINE_RESULT__ = function(js_beautify, css_beautify, html_beautify) {
        return get_beautify(js_beautify, css_beautify, html_beautify);
    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else {
    (function(mod) {
        var js_beautify = require('./lib/beautify');
        var css_beautify = require('./lib/beautify-css');
        var html_beautify = require('./lib/beautify-html');

        mod.exports = get_beautify(js_beautify, css_beautify, html_beautify);

    })(module);
}

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var ng2_auto_complete_component_1 = __webpack_require__(14);
var forms_1 = __webpack_require__(2);
/**
 * display auto-complete section with input and dropdown list when it is clicked
 */
var Ng2AutoCompleteDirective = (function () {
    function Ng2AutoCompleteDirective(resolver, renderer, viewContainerRef, parentForm) {
        var _this = this;
        this.resolver = resolver;
        this.renderer = renderer;
        this.viewContainerRef = viewContainerRef;
        this.parentForm = parentForm;
        this.loadingText = "Loading";
        this.tabToSelect = true;
        this.ngModelChange = new core_1.EventEmitter();
        this.valueChanged = new core_1.EventEmitter();
        //show auto-complete list below the current element
        this.showAutoCompleteDropdown = function (event) {
            var factory = _this.resolver.resolveComponentFactory(ng2_auto_complete_component_1.Ng2AutoCompleteComponent);
            _this.componentRef = _this.viewContainerRef.createComponent(factory);
            var component = _this.componentRef.instance;
            component.showInputTag = false; //Do NOT display autocomplete input tag separately
            component.pathToData = _this.pathToData;
            component.minChars = _this.minChars;
            component.source = _this.source;
            component.placeholder = _this.autoCompletePlaceholder;
            component.acceptUserInput = _this.acceptUserInput;
            component.maxNumList = parseInt(_this.maxNumList, 10);
            component.loadingText = _this.loadingText;
            component.listFormatter = _this.listFormatter;
            component.blankOptionText = _this.blankOptionText;
            component.noMatchFoundText = _this.noMatchFoundText;
            component.tabToSelect = _this.tabToSelect;
            component.valueSelected.subscribe(_this.selectNewValue);
            _this.acDropdownEl = _this.componentRef.location.nativeElement;
            _this.acDropdownEl.style.display = "none";
            // if this element is not an input tag, move dropdown after input tag
            // so that it displays correctly
            if (_this.el.tagName !== "INPUT" && _this.acDropdownEl) {
                _this.inputEl.parentElement.insertBefore(_this.acDropdownEl, _this.inputEl.nextSibling);
            }
            _this.revertValue = typeof _this.ngModel !== "undefined" ? _this.ngModel : _this.inputEl.value;
            setTimeout(function () {
                component.reloadList(_this.inputEl.value);
                _this.styleAutoCompleteDropdown();
                component.dropdownVisible = true;
            });
        };
        this.hideAutoCompleteDropdown = function (event) {
            if (_this.componentRef) {
                var currentItem = void 0;
                var hasRevertValue = (typeof _this.revertValue !== "undefined");
                if (_this.inputEl && hasRevertValue && _this.acceptUserInput === false) {
                    currentItem = _this.componentRef.instance.findItemFromSelectValue(_this.inputEl.value);
                }
                _this.componentRef.destroy();
                _this.componentRef = undefined;
                if (_this.inputEl &&
                    hasRevertValue &&
                    _this.acceptUserInput === false &&
                    currentItem === null) {
                    _this.selectNewValue(_this.revertValue);
                }
            }
        };
        this.styleAutoCompleteDropdown = function () {
            if (_this.componentRef) {
                var component = _this.componentRef.instance;
                /* setting width/height auto complete */
                var thisElBCR = _this.el.getBoundingClientRect();
                var thisInputElBCR = _this.inputEl.getBoundingClientRect();
                var closeToBottom = thisInputElBCR.bottom + 100 > window.innerHeight;
                _this.acDropdownEl.style.width = thisInputElBCR.width + "px";
                _this.acDropdownEl.style.position = "absolute";
                _this.acDropdownEl.style.zIndex = "1";
                _this.acDropdownEl.style.left = "0";
                _this.acDropdownEl.style.display = "inline-block";
                if (closeToBottom) {
                    _this.acDropdownEl.style.bottom = thisInputElBCR.height + "px";
                }
                else {
                    _this.acDropdownEl.style.top = thisInputElBCR.height + "px";
                }
            }
        };
        this.selectNewValue = function (item) {
            // make displayable value
            if (item && typeof item === "object") {
                item = _this.setToStringFunction(item);
            }
            _this.inputEl && (_this.inputEl.value = '' + item);
            // make return value
            var val = item;
            if (_this.selectValueOf && item[_this.selectValueOf]) {
                val = item[_this.selectValueOf];
            }
            if ((_this.parentForm && _this.formControlName) || _this.extFormControl) {
                if (!!val) {
                    _this.formControl.patchValue(val);
                }
            }
            (val !== _this.ngModel) && _this.ngModelChange.emit(val);
            _this.valueChanged.emit(val);
            _this.hideAutoCompleteDropdown();
        };
        this.keydownEventHandler = function (evt) {
            if (_this.componentRef) {
                var component = _this.componentRef.instance;
                component.inputElKeyHandler(evt);
            }
        };
        this.inputEventHandler = function (evt) {
            if (_this.componentRef) {
                var component = _this.componentRef.instance;
                component.dropdownVisible = true;
                component.reloadListInDelay(evt);
            }
            else {
                _this.showAutoCompleteDropdown();
            }
        };
        this.el = this.viewContainerRef.element.nativeElement;
    }
    Ng2AutoCompleteDirective.prototype.ngOnInit = function () {
        // wrap this element with <div class="ng2-auto-complete">
        this.wrapperEl = document.createElement("div");
        this.wrapperEl.className = "ng2-auto-complete-wrapper";
        this.wrapperEl.style.position = "relative";
        this.el.parentElement.insertBefore(this.wrapperEl, this.el.nextSibling);
        this.wrapperEl.appendChild(this.el);
        //Check if we were supplied with a [formControlName] and it is inside a [form]
        //else check if we are supplied with a [FormControl] regardless if it is inside a [form] tag
        if (this.parentForm && this.formControlName) {
            if (this.parentForm['form']) {
                this.formControl = this.parentForm['form'].get(this.formControlName);
            }
            else if (this.parentForm instanceof forms_1.FormGroupName) {
                this.formControl = this.parentForm.control.controls[this.formControlName];
            }
        }
        else if (this.extFormControl) {
            this.formControl = this.extFormControl;
        }
        // apply toString() method for the object
        if (!!this.ngModel) {
            this.selectNewValue(this.ngModel);
        }
        else if (!!this.formControl && this.formControl.value) {
            this.selectNewValue(this.formControl.value[this.displayPropertyName]);
        }
    };
    Ng2AutoCompleteDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        // if this element is not an input tag, move dropdown after input tag
        // so that it displays correctly
        this.inputEl = this.el.tagName === "INPUT" ?
            this.el : this.el.querySelector("input");
        this.inputEl.addEventListener('focus', function (e) { return _this.showAutoCompleteDropdown(e); });
        this.inputEl.addEventListener('blur', function (e) { return _this.hideAutoCompleteDropdown(e); });
        this.inputEl.addEventListener('keydown', function (e) { return _this.keydownEventHandler(e); });
        this.inputEl.addEventListener('input', function (e) { return _this.inputEventHandler(e); });
    };
    Ng2AutoCompleteDirective.prototype.ngOnDestroy = function () {
        if (this.componentRef) {
            this.componentRef.instance.valueSelected.unsubscribe();
        }
    };
    Ng2AutoCompleteDirective.prototype.ngOnChanges = function (changes) {
        if (changes['ngModel']) {
            this.ngModel = this.setToStringFunction(changes['ngModel'].currentValue);
        }
    };
    Ng2AutoCompleteDirective.prototype.setToStringFunction = function (item) {
        if (item && typeof item === "object") {
            var displayVal_1;
            if (typeof this.valueFormatter === 'string') {
                var matches = this.valueFormatter.match(/[a-zA-Z0-9_\$]+/g);
                var formatted_1 = this.valueFormatter;
                if (matches && typeof item !== 'string') {
                    matches.forEach(function (key) {
                        formatted_1 = formatted_1.replace(key, item[key]);
                    });
                }
                displayVal_1 = formatted_1;
            }
            else if (typeof this.valueFormatter === 'function') {
                displayVal_1 = this.valueFormatter(item);
            }
            else if (this.displayPropertyName) {
                displayVal_1 = item[this.displayPropertyName];
            }
            else if (typeof this.listFormatter === 'string' && this.listFormatter.match(/^\w+$/)) {
                displayVal_1 = item[this.listFormatter];
            }
            else {
                displayVal_1 = item.value;
            }
            item.toString = function () {
                return displayVal_1;
            };
        }
        return item;
    };
    Ng2AutoCompleteDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: "[auto-complete], [ng2-auto-complete]"
                },] },
    ];
    /** @nocollapse */
    Ng2AutoCompleteDirective.ctorParameters = function () { return [
        { type: core_1.ComponentFactoryResolver, },
        { type: core_1.Renderer, },
        { type: core_1.ViewContainerRef, },
        { type: forms_1.ControlContainer, decorators: [{ type: core_1.Optional }, { type: core_1.Host }, { type: core_1.SkipSelf },] },
    ]; };
    Ng2AutoCompleteDirective.propDecorators = {
        'autoCompletePlaceholder': [{ type: core_1.Input, args: ["auto-complete-placeholder",] },],
        'source': [{ type: core_1.Input, args: ["source",] },],
        'pathToData': [{ type: core_1.Input, args: ["path-to-data",] },],
        'minChars': [{ type: core_1.Input, args: ["min-chars",] },],
        'displayPropertyName': [{ type: core_1.Input, args: ["display-property-name",] },],
        'acceptUserInput': [{ type: core_1.Input, args: ["accept-user-input",] },],
        'maxNumList': [{ type: core_1.Input, args: ["max-num-list",] },],
        'selectValueOf': [{ type: core_1.Input, args: ["select-value-of",] },],
        'listFormatter': [{ type: core_1.Input, args: ["list-formatter",] },],
        'loadingText': [{ type: core_1.Input, args: ["loading-text",] },],
        'blankOptionText': [{ type: core_1.Input, args: ["blank-option-text",] },],
        'noMatchFoundText': [{ type: core_1.Input, args: ["no-match-found-text",] },],
        'valueFormatter': [{ type: core_1.Input, args: ["value-formatter",] },],
        'tabToSelect': [{ type: core_1.Input, args: ["tab-to-select",] },],
        'ngModel': [{ type: core_1.Input },],
        'formControlName': [{ type: core_1.Input, args: ['formControlName',] },],
        'extFormControl': [{ type: core_1.Input, args: ['formControl',] },],
        'ngModelChange': [{ type: core_1.Output },],
        'valueChanged': [{ type: core_1.Output },],
    };
    return Ng2AutoCompleteDirective;
}());
exports.Ng2AutoCompleteDirective = Ng2AutoCompleteDirective;
//# sourceMappingURL=ng2-auto-complete.directive.js.map

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__(0);
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
//# sourceMappingURL=ng2-collapsable.component.js.map

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(2);
var ng2_datetime_picker_component_1 = __webpack_require__(16);
var ng2_datetime_1 = __webpack_require__(9);
function isInteger(value) {
    if (Number.isInteger) {
        return Number.isInteger(value);
    }
    return typeof value === "number" &&
        isFinite(value) &&
        Math.floor(value) === value;
}
;
function isNaN(value) {
    if (Number.isNaN) {
        return Number.isNaN(value);
    }
    return value !== value;
}
;
/**
 * If the given string is not a valid date, it defaults back to today
 */
var Ng2DatetimePickerDirective = (function () {
    function Ng2DatetimePickerDirective(resolver, viewContainerRef, parent) {
        var _this = this;
        this.resolver = resolver;
        this.viewContainerRef = viewContainerRef;
        this.parent = parent;
        this.closeOnSelect = true;
        this.ngModelChange = new core_1.EventEmitter();
        this.valueChanged$ = new core_1.EventEmitter();
        this.popupClosed$ = new core_1.EventEmitter();
        /* input element string value is changed */
        this.inputElValueChanged = function (date) {
            _this.setInputElDateValue(date);
            _this.el.value = date.toString();
            if (_this.ctrl) {
                _this.ctrl.patchValue(_this.el.value);
            }
            _this.ngModel = _this.el['dateValue'];
            if (_this.ngModel) {
                _this.ngModel.toString = function () { return _this.el.value; };
                _this.ngModelChange.emit(_this.ngModel);
            }
        };
        //show datetimePicker element below the current element
        this.showDatetimePicker = function (event) {
            if (_this.componentRef) {
                return;
            }
            var factory = _this.resolver.resolveComponentFactory(ng2_datetime_picker_component_1.Ng2DatetimePickerComponent);
            _this.componentRef = _this.viewContainerRef.createComponent(factory);
            _this.ng2DatetimePickerEl = _this.componentRef.location.nativeElement;
            _this.ng2DatetimePickerEl.setAttribute('tabindex', '32767');
            _this.ng2DatetimePickerEl.addEventListener('mousedown', function (event) {
                _this.clickedDatetimePicker = true;
            });
            _this.ng2DatetimePickerEl.addEventListener('mouseup', function (event) {
                _this.clickedDatetimePicker = false;
            });
            _this.ng2DatetimePickerEl.addEventListener('blur', function (event) {
                _this.hideDatetimePicker();
            });
            var component = _this.componentRef.instance;
            component.defaultValue = _this.defaultValue || _this.el['dateValue'];
            component.dateFormat = _this.dateFormat;
            component.dateOnly = _this.dateOnly;
            component.timeOnly = _this.timeOnly;
            component.minuteStep = _this.minuteStep;
            component.minDate = _this.minDate;
            component.maxDate = _this.maxDate;
            component.minHour = _this.minHour;
            component.maxHour = _this.maxHour;
            component.disabledDates = _this.disabledDates;
            component.showCloseButton = _this.closeOnSelect === false;
            component.showCloseLayer = _this.showCloseLayer;
            _this.styleDatetimePicker();
            component.selected$.subscribe(_this.dateSelected);
            component.closing$.subscribe(function () {
                _this.hideDatetimePicker();
            });
            //Hack not to fire tab keyup event
            // this.justShown = true;
            // setTimeout(() => this.justShown = false, 100);
        };
        this.dateSelected = function (date) {
            _this.el.tagName === 'INPUT' && _this.inputElValueChanged(date);
            _this.valueChanged$.emit(date);
            if (_this.closeOnSelect !== false) {
                _this.hideDatetimePicker();
            }
            else {
                _this.ng2DatetimePickerEl.focus();
            }
        };
        this.hideDatetimePicker = function (event) {
            if (_this.clickedDatetimePicker) {
                return false;
            }
            else {
                _this.componentRef.destroy();
                _this.componentRef = undefined;
                _this.popupClosed$.emit(true);
            }
            event && event.stopPropagation();
        };
        this.keyEventListener = function (e) {
            // if (e.keyCode === 27 || e.keyCode === 9 || e.keyCode === 13) { //ESC, TAB, ENTER keys
            //   if (!this.justShown) {
            //     this.hideDatetimePicker();
            //   }
            // }
        };
        this.el = this.viewContainerRef.element.nativeElement;
    }
    /**
     * convert defaultValue, minDate, maxDate, minHour, and maxHour to proper types
     */
    Ng2DatetimePickerDirective.prototype.normalizeInput = function () {
        if (this.defaultValue && typeof this.defaultValue === 'string') {
            var d = ng2_datetime_1.Ng2Datetime.parseDate(this.defaultValue);
            this.defaultValue = isNaN(d.getTime()) ? new Date() : d;
        }
        if (this.minDate && typeof this.minDate == 'string') {
            var d = ng2_datetime_1.Ng2Datetime.parseDate(this.minDate);
            this.minDate = isNaN(d.getTime()) ? new Date() : d;
        }
        if (this.maxDate && typeof this.maxDate == 'string') {
            var d = ng2_datetime_1.Ng2Datetime.parseDate(this.minDate);
            this.maxDate = isNaN(d.getTime()) ? new Date() : d;
        }
        if (this.minHour) {
            if (this.minHour instanceof Date) {
                this.minHour = this.minHour.getHours();
            }
            else {
                var hour = Number(this.minHour.toString());
                if (!isInteger(hour) || hour > 23 || hour < 0) {
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
                if (!isInteger(hour) || hour > 23 || hour < 0) {
                    this.maxHour = undefined;
                }
            }
        }
    };
    Ng2DatetimePickerDirective.prototype.ngOnInit = function () {
        var _this = this;
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
                    _this.setInputElDateValue(date);
                    _this.updateDatepicker();
                });
            }
        }
        this.normalizeInput();
        //wrap this element with a <div> tag, so that we can position dynamic element correctly
        var wrapper = document.createElement("div");
        wrapper.className = 'ng2-datetime-picker-wrapper';
        this.el.parentElement.insertBefore(wrapper, this.el.nextSibling);
        wrapper.appendChild(this.el);
        if (this.ngModel && this.ngModel.getTime) {
            this.ngModel.toString = function () { return ng2_datetime_1.Ng2Datetime.formatDate(_this.ngModel, _this.dateFormat, _this.dateOnly); };
        }
        setTimeout(function () {
            if (_this.el.tagName === 'INPUT') {
                _this.inputElValueChanged(_this.el.value); //set this.el.dateValue and reformat this.el.value
            }
            if (_this.ctrl) {
                _this.ctrl.markAsPristine();
            }
        });
    };
    Ng2DatetimePickerDirective.prototype.ngAfterViewInit = function () {
        // if this element is not an input tag, move dropdown after input tag
        // so that it displays correctly
        this.inputEl = this.el.tagName === "INPUT" ?
            this.el : this.el.querySelector("input");
        if (this.inputEl) {
            this.inputEl.addEventListener('focus', this.showDatetimePicker);
            this.inputEl.addEventListener('blur', this.hideDatetimePicker);
        }
    };
    Ng2DatetimePickerDirective.prototype.ngOnChanges = function (changes) {
        var _this = this;
        var date;
        if (changes && changes['ngModel']) {
            date = changes['ngModel'].currentValue;
            if (date && typeof date !== 'string') {
                date.toString = function () { return ng2_datetime_1.Ng2Datetime.formatDate(date, _this.dateFormat, _this.dateOnly); };
            }
        }
        this.setInputElDateValue(date);
        this.updateDatepicker();
    };
    Ng2DatetimePickerDirective.prototype.updateDatepicker = function () {
        if (this.componentRef) {
            var component = this.componentRef.instance;
            component.defaultValue = this.el['dateValue'];
        }
    };
    Ng2DatetimePickerDirective.prototype.setInputElDateValue = function (date) {
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
    Ng2DatetimePickerDirective.prototype.getDate = function (arg) {
        var date = arg;
        if (typeof arg === 'string') {
            date = ng2_datetime_1.Ng2Datetime.parseDate(arg, this.parseFormat, this.dateFormat);
        }
        return date;
    };
    Ng2DatetimePickerDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[ng2-datetime-picker]',
                    providers: [ng2_datetime_1.Ng2Datetime]
                },] },
    ];
    /** @nocollapse */
    Ng2DatetimePickerDirective.ctorParameters = [
        { type: core_1.ComponentFactoryResolver, },
        { type: core_1.ViewContainerRef, },
        { type: forms_1.ControlContainer, decorators: [{ type: core_1.Optional }, { type: core_1.Host }, { type: core_1.SkipSelf },] },
    ];
    Ng2DatetimePickerDirective.propDecorators = {
        'dateFormat': [{ type: core_1.Input, args: ['date-format',] },],
        'parseFormat': [{ type: core_1.Input, args: ['parse-format',] },],
        'dateOnly': [{ type: core_1.Input, args: ['date-only',] },],
        'timeOnly': [{ type: core_1.Input, args: ['time-only',] },],
        'closeOnSelect': [{ type: core_1.Input, args: ['close-on-select',] },],
        'defaultValue': [{ type: core_1.Input, args: ['default-value',] },],
        'minuteStep': [{ type: core_1.Input, args: ['minute-step',] },],
        'minDate': [{ type: core_1.Input, args: ['min-date',] },],
        'maxDate': [{ type: core_1.Input, args: ['max-date',] },],
        'minHour': [{ type: core_1.Input, args: ['min-hour',] },],
        'maxHour': [{ type: core_1.Input, args: ['max-hour',] },],
        'disabledDates': [{ type: core_1.Input, args: ['disabled-dates',] },],
        'showCloseLayer': [{ type: core_1.Input, args: ['show-close-layer',] },],
        'formControlName': [{ type: core_1.Input },],
        'ngModel': [{ type: core_1.Input, args: ['ngModel',] },],
        'ngModelChange': [{ type: core_1.Output, args: ['ngModelChange',] },],
        'valueChanged$': [{ type: core_1.Output, args: ['valueChanged',] },],
        'popupClosed$': [{ type: core_1.Output, args: ['popupClosed',] },],
    };
    return Ng2DatetimePickerDirective;
}());
exports.Ng2DatetimePickerDirective = Ng2DatetimePickerDirective;
//# sourceMappingURL=ng2-datetime-picker.directive.js.map

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = __webpack_require__(0);
var Subject_1 = __webpack_require__(19);
var debounceTime_1 = __webpack_require__(20);
var ng2_map_1 = __webpack_require__(7);
var ng2_map_component_1 = __webpack_require__(1);
var INPUTS = [
    'position'
];
var OUTPUTS = [
    'animationChanged', 'click', 'clickableChanged', 'cursorChanged', 'dblclick', 'drag', 'dragend', 'draggableChanged',
    'dragstart', 'flatChanged', 'iconChanged', 'mousedown', 'mouseout', 'mouseover', 'mouseup', 'positionChanged', 'rightclick',
    'shapeChanged', 'titleChanged', 'visibleChanged', 'zindexChanged',
    //to avoid DOM event conflicts
    'map_click', 'map_mouseover', 'map_mouseout', 'map_mouseup', 'map_mousedown', 'map_drag', 'map_dragend'
];
/**
 * Wrapper to a create extend OverlayView at runtime, only after google maps is loaded.
 * Otherwise throws a google is unknown error.
 */
function getCustomMarkerOverlayView(htmlEl, position) {
    var CustomMarkerOverlayView = (function (_super) {
        __extends(CustomMarkerOverlayView, _super);
        function CustomMarkerOverlayView(htmlEl, position) {
            var _this = this;
            _super.call(this);
            this.visible = true;
            this.setPosition = function (position) {
                _this.htmlEl.style.visibility = 'hidden';
                if (position.constructor.name === "Array") {
                    _this.position = new google.maps.LatLng(position[0], position[1]);
                }
                else if (typeof position === 'string') {
                    var geocoder = new google.maps.Geocoder();
                    geocoder.geocode({ address: position }, function (results, status) {
                        if (status === google.maps.GeocoderStatus.OK) {
                            console.log('setting custom marker position from address', position);
                            _this.setPosition(results[0].geometry.location);
                        }
                        else {
                            console.log('Error in custom marker geo coding, position');
                        }
                    });
                }
                else if (position && typeof position.lng == 'function') {
                    _this.position = position;
                }
                if (_this.getProjection() && typeof _this.position.lng == 'function') {
                    var positionOnMap_1 = function () {
                        var posPixel = _this.getProjection().fromLatLngToDivPixel(_this.position);
                        var x = Math.round(posPixel.x - (_this.htmlEl.offsetWidth / 2));
                        var y = Math.round(posPixel.y - _this.htmlEl.offsetHeight / 2);
                        _this.htmlEl.style.left = x + 'px';
                        _this.htmlEl.style.top = y + 'px';
                        _this.htmlEl.style.visibility = 'visible';
                    };
                    if (_this.htmlEl.offsetWidth && _this.htmlEl.offsetHeight) {
                        positionOnMap_1();
                    }
                    else {
                        setTimeout(function () { return positionOnMap_1(); });
                    }
                }
            };
            this.htmlEl = htmlEl;
            this.position = position;
        }
        CustomMarkerOverlayView.prototype.onAdd = function () {
            this.getPanes().overlayMouseTarget.appendChild(this.htmlEl);
            // required for correct display inside google maps container
            this.htmlEl.style.position = 'absolute';
        };
        CustomMarkerOverlayView.prototype.draw = function () {
            this.setPosition(this.position);
            this.setZIndex(this.zIndex);
            this.setVisible(this.visible);
        };
        CustomMarkerOverlayView.prototype.onRemove = function () {
            //
        };
        CustomMarkerOverlayView.prototype.getPosition = function () {
            return this.position;
        };
        ;
        CustomMarkerOverlayView.prototype.setZIndex = function (zIndex) {
            zIndex && (this.zIndex = zIndex); /* jshint ignore:line */
            this.htmlEl.style.zIndex = this.zIndex;
        };
        CustomMarkerOverlayView.prototype.setVisible = function (visible) {
            this.htmlEl.style.display = visible ? 'inline-block' : 'none';
            this.visible = visible;
        };
        ;
        return CustomMarkerOverlayView;
    }(google.maps.OverlayView));
    return new CustomMarkerOverlayView(htmlEl, position);
}
var CustomMarker = (function () {
    function CustomMarker(ng2MapComponent, elementRef, ng2Map) {
        var _this = this;
        this.ng2MapComponent = ng2MapComponent;
        this.elementRef = elementRef;
        this.ng2Map = ng2Map;
        this.initialized$ = new core_1.EventEmitter();
        this.inputChanges$ = new Subject_1.Subject();
        this.elementRef.nativeElement.style.display = 'none';
        OUTPUTS.forEach(function (output) { return _this[output] = new core_1.EventEmitter(); });
    }
    // Initialize this map object when map is ready
    CustomMarker.prototype.ngOnInit = function () {
        var _this = this;
        if (this.ng2MapComponent.mapIdledOnce) {
            this.initialize();
        }
        else {
            this.ng2MapComponent.mapReady$.subscribe(function (map) { return _this.initialize(); });
        }
    };
    CustomMarker.prototype.ngOnChanges = function (changes) {
        this.inputChanges$.next(changes);
    };
    CustomMarker.prototype.ngOnDestroy = function () {
        var _this = this;
        this.ng2MapComponent.removeFromMapObjectGroup('CustomMarker', this.mapObject);
        if (this.mapObject) {
            OUTPUTS.forEach(function (output) { return google.maps.event.clearListeners(_this.mapObject, output); });
            this.mapObject.setMap(null);
            delete this.mapObject;
        }
    };
    CustomMarker.prototype.initialize = function () {
        var _this = this;
        console.log('custom-marker is being initialized');
        this.el = this.elementRef.nativeElement;
        this.mapObject = getCustomMarkerOverlayView(this.el, this['position']);
        this.mapObject.setMap(this.ng2MapComponent.map);
        // set google events listeners and emits to this outputs listeners
        this.ng2Map.setObjectEvents(OUTPUTS, this, 'mapObject');
        // update object when input changes
        debounceTime_1.debounceTime.call(this.inputChanges$, 1000)
            .subscribe(function (changes) { return _this.ng2Map.updateGoogleObject(_this.mapObject, changes); });
        this.ng2MapComponent.addToMapObjectGroup('CustomMarker', this.mapObject);
        this.initialized$.emit(this.mapObject);
    };
    CustomMarker.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'ng2-map > custom-marker',
                    inputs: INPUTS,
                    outputs: OUTPUTS,
                    template: "\n    <ng-content></ng-content>\n  ",
                },] },
    ];
    /** @nocollapse */
    CustomMarker.ctorParameters = [
        { type: ng2_map_component_1.Ng2MapComponent, },
        { type: core_1.ElementRef, },
        { type: ng2_map_1.Ng2Map, },
    ];
    CustomMarker.propDecorators = {
        'initialized$': [{ type: core_1.Output },],
    };
    return CustomMarker;
}());
exports.CustomMarker = CustomMarker;
//# sourceMappingURL=custom-marker.js.map

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var Subject_1 = __webpack_require__(19);
var debounceTime_1 = __webpack_require__(20);
var ng2_map_1 = __webpack_require__(7);
var ng2_map_component_1 = __webpack_require__(1);
var INPUTS = [
    'content', 'disableAutoPan', 'maxWidth', 'pixelOffset', 'position', 'zIndex', 'options'
];
var OUTPUTS = [
    'closeclick', 'content_changed', 'domready', 'position_changed', 'zindex_changed'
];
var InfoWindow = (function () {
    function InfoWindow(ng2MapComponent, elementRef, ng2Map) {
        var _this = this;
        this.ng2MapComponent = ng2MapComponent;
        this.elementRef = elementRef;
        this.ng2Map = ng2Map;
        this.initialized$ = new core_1.EventEmitter();
        this.objectOptions = {};
        this.inputChanges$ = new Subject_1.Subject();
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
        console.log('infowindow is being initialized');
        this.template = this.elementRef.nativeElement.innerHTML;
        this.objectOptions = this.ng2MapComponent.optionBuilder.googlizeAllInputs(INPUTS, this);
        this.infoWindow = new google.maps.InfoWindow(this.objectOptions);
        this.infoWindow['mapObjectName'] = 'InfoWindow';
        console.log('INFOWINDOW objectOptions', this.objectOptions);
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
        debounceTime_1.debounceTime.call(this.inputChanges$, 1000)
            .subscribe(function (changes) { return _this.ng2Map.updateGoogleObject(_this.infoWindow, changes); });
        this.ng2MapComponent.addToMapObjectGroup('InfoWindow', this.infoWindow);
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
    InfoWindow.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'ng2-map > info-window',
                    inputs: INPUTS,
                    outputs: OUTPUTS,
                    template: "<ng-content></ng-content>",
                },] },
    ];
    /** @nocollapse */
    InfoWindow.ctorParameters = [
        { type: ng2_map_component_1.Ng2MapComponent, },
        { type: core_1.ElementRef, },
        { type: ng2_map_1.Ng2Map, },
    ];
    InfoWindow.propDecorators = {
        'initialized$': [{ type: core_1.Output },],
    };
    return InfoWindow;
}());
exports.InfoWindow = InfoWindow;
//# sourceMappingURL=info-window.js.map

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = __webpack_require__(0);
var base_map_directive_1 = __webpack_require__(3);
var ng2_map_component_1 = __webpack_require__(1);
var INPUTS = [];
var OUTPUTS = [];
var BicyclingLayer = (function (_super) {
    __extends(BicyclingLayer, _super);
    function BicyclingLayer(ng2MapComp) {
        _super.call(this, ng2MapComp, 'BicyclingLayer', INPUTS, OUTPUTS);
        this.initialized$ = new core_1.EventEmitter();
    }
    BicyclingLayer.decorators = [
        { type: core_1.Directive, args: [{
                    selector: 'ng2-map > bicycling-layer',
                    inputs: INPUTS,
                    outputs: OUTPUTS,
                },] },
    ];
    /** @nocollapse */
    BicyclingLayer.ctorParameters = [
        { type: ng2_map_component_1.Ng2MapComponent, },
    ];
    BicyclingLayer.propDecorators = {
        'initialized$': [{ type: core_1.Output },],
    };
    return BicyclingLayer;
}(base_map_directive_1.BaseMapDirective));
exports.BicyclingLayer = BicyclingLayer;
//# sourceMappingURL=bicycling-layer.js.map

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = __webpack_require__(0);
var base_map_directive_1 = __webpack_require__(3);
var ng2_map_component_1 = __webpack_require__(1);
var INPUTS = [
    'center', 'clickable', 'draggable', 'editable', 'fillColor', 'fillOpacity', 'map', 'radius',
    'strokeColor', 'strokeOpacity', 'strokePosition', 'strokeWeight', 'visible', 'zIndex', 'options',
    // ng2-map specific inputs
    'geoFallbackCenter'
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
        this.initialized$ = new core_1.EventEmitter();
        this.objectOptions = {};
    }
    Circle.prototype.initialize = function () {
        _super.prototype.initialize.call(this);
        this.setCenter();
    };
    Circle.prototype.setCenter = function () {
        var _this = this;
        if (!this['center']) {
            this._subscriptions.push(this.ng2MapComp.geolocation.getCurrentPosition().subscribe(function (center) {
                console.log('setting circle center from current location');
                var latLng = new google.maps.LatLng(center.coords.latitude, center.coords.longitude);
                _this.mapObject.setCenter(latLng);
            }, function (error) {
                console.error('ng2-map, error in finding the current position');
                _this.mapObject.setCenter(_this.objectOptions['geoFallbackCenter'] || new google.maps.LatLng(0, 0));
            }));
        }
        else if (typeof this['center'] === 'string') {
            this._subscriptions.push(this.ng2MapComp.geoCoder.geocode({ address: this['center'] }).subscribe(function (results) {
                console.log('setting circle center from address', _this['center']);
                _this.mapObject.setCenter(results[0].geometry.location);
            }, function (error) {
                console.error('ng2-map, error in finding location from', _this['center']);
                _this.mapObject.setCenter(_this.objectOptions['geoFallbackCenter'] || new google.maps.LatLng(0, 0));
            }));
        }
    };
    Circle.decorators = [
        { type: core_1.Directive, args: [{
                    selector: 'ng2-map>circle, ng2-map>map-circle',
                    inputs: INPUTS,
                    outputs: OUTPUTS,
                },] },
    ];
    /** @nocollapse */
    Circle.ctorParameters = [
        { type: ng2_map_component_1.Ng2MapComponent, },
    ];
    Circle.propDecorators = {
        'initialized$': [{ type: core_1.Output },],
    };
    return Circle;
}(base_map_directive_1.BaseMapDirective));
exports.Circle = Circle;
//# sourceMappingURL=circle.js.map

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = __webpack_require__(0);
var base_map_directive_1 = __webpack_require__(3);
var ng2_map_component_1 = __webpack_require__(1);
var INPUTS = ['controlPosition', 'controls', 'drawingMode', 'featureFactory', 'style', 'geoJson'];
var OUTPUTS = [
    'addfeature', 'click', 'dblclick', 'mousedown', 'mouseout', 'mouseover',
    'mouseup', 'removefeature', 'removeproperty', 'rightclick', 'setgeometry', 'setproperty'
];
var DataLayer = (function (_super) {
    __extends(DataLayer, _super);
    function DataLayer(ng2MapComponent) {
        _super.call(this, ng2MapComponent, 'Data', INPUTS, OUTPUTS);
        this.initialized$ = new core_1.EventEmitter();
    }
    // only called when map is ready
    DataLayer.prototype.initialize = function () {
        if (this['geoJson']) {
            console.log('this.geoJson', this['geoJson']);
            this.ng2MapComponent.map.data.loadGeoJson(this['geoJson']);
        }
        else {
            this.objectOptions = this.optionBuilder.googlizeAllInputs(this.inputs, this);
            console.log(this.mapObjectName, 'initialization objectOptions', this.objectOptions);
            this.ng2MapComponent.map.data.add(this.objectOptions);
        }
        // unlike others, data belongs to map. e.g., map.data.loadGeoJson(), map.data.add()
        this.mapObject = this.ng2MapComponent.map.data;
        // set google events listeners and emits to this outputs listeners
        this.ng2Map.setObjectEvents(this.outputs, this, 'mapObject');
        this.ng2MapComponent.addToMapObjectGroup(this.mapObjectName, this.mapObject);
        this.initialized$.emit(this.mapObject);
    };
    DataLayer.decorators = [
        { type: core_1.Directive, args: [{
                    selector: 'ng2-map > data-layer',
                    inputs: INPUTS,
                    outputs: OUTPUTS,
                },] },
    ];
    /** @nocollapse */
    DataLayer.ctorParameters = [
        { type: ng2_map_component_1.Ng2MapComponent, },
    ];
    DataLayer.propDecorators = {
        'initialized$': [{ type: core_1.Output },],
    };
    return DataLayer;
}(base_map_directive_1.BaseMapDirective));
exports.DataLayer = DataLayer;
//# sourceMappingURL=data-layer.js.map

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = __webpack_require__(0);
var base_map_directive_1 = __webpack_require__(3);
var ng2_map_component_1 = __webpack_require__(1);
var navigator_geolocation_1 = __webpack_require__(11);
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
        this.initialized$ = new core_1.EventEmitter();
    }
    // only called when map is ready
    DirectionsRenderer.prototype.initialize = function () {
        this.objectOptions = this.optionBuilder.googlizeAllInputs(this.inputs, this);
        if (typeof this.objectOptions['panel'] === 'string') {
            this.objectOptions['panel'] = document.querySelector(this.objectOptions['panel']);
        }
        console.log('DirectionsRenderer', 'initialization options', this.objectOptions, this.directionsRequest);
        this.directionsService = new google.maps.DirectionsService();
        this.directionsRenderer = new google.maps.DirectionsRenderer(this.objectOptions);
        this.directionsRenderer.setMap(this.ng2MapComponent.map);
        // set google events listeners and emidirectionsRenderer to this outputs listeners
        this.showDirections(this.directionsRequest);
        this.ng2Map.setObjectEvents(this.outputs, this, 'directionsRenderer');
        this.ng2MapComponent.addToMapObjectGroup(this.mapObjectName, this.mapObject);
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
            if (status === google.maps.DirectionsStatus.OK) {
                _this.directionsRenderer.setDirections(response);
            }
            else {
                console.error('Directions request failed due to ' + status);
            }
        });
    };
    DirectionsRenderer.decorators = [
        { type: core_1.Directive, args: [{
                    selector: 'ng2-map > directions-renderer',
                    inputs: INPUTS,
                    outputs: OUTPUTS,
                },] },
    ];
    /** @nocollapse */
    DirectionsRenderer.ctorParameters = [
        { type: ng2_map_component_1.Ng2MapComponent, },
        { type: navigator_geolocation_1.NavigatorGeolocation, },
    ];
    DirectionsRenderer.propDecorators = {
        'directionsRequest': [{ type: core_1.Input, args: ['directions-request',] },],
        'initialized$': [{ type: core_1.Output },],
    };
    return DirectionsRenderer;
}(base_map_directive_1.BaseMapDirective));
exports.DirectionsRenderer = DirectionsRenderer;
//# sourceMappingURL=directions-renderer.js.map

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = __webpack_require__(0);
var base_map_directive_1 = __webpack_require__(3);
var ng2_map_component_1 = __webpack_require__(1);
var INPUTS = [
    'options',
    'circleOptions', 'drawingControl', 'drawingControlOptions', 'drawingMode',
    'map', 'markerOptions', 'polygonOptions', 'polylineOptions', 'rectangleOptions'
];
var OUTPUTS = [
    'circlecomplete', 'markercomplete', 'overlaycomplete',
    'polygoncomplete', 'polylinecomplete', 'rectanglecomplete'
];
var DrawingManager = (function (_super) {
    __extends(DrawingManager, _super);
    function DrawingManager(ng2MapComp) {
        _super.call(this, ng2MapComp, 'DrawingManager', INPUTS, OUTPUTS);
        this.initialized$ = new core_1.EventEmitter();
        this.libraryName = 'drawing';
    }
    DrawingManager.decorators = [
        { type: core_1.Directive, args: [{
                    selector: 'ng2-map > drawing-manager',
                    inputs: INPUTS,
                    outputs: OUTPUTS,
                },] },
    ];
    /** @nocollapse */
    DrawingManager.ctorParameters = [
        { type: ng2_map_component_1.Ng2MapComponent, },
    ];
    DrawingManager.propDecorators = {
        'initialized$': [{ type: core_1.Output },],
    };
    return DrawingManager;
}(base_map_directive_1.BaseMapDirective));
exports.DrawingManager = DrawingManager;
//# sourceMappingURL=drawing-manager.js.map

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = __webpack_require__(0);
var base_map_directive_1 = __webpack_require__(3);
var ng2_map_component_1 = __webpack_require__(1);
var INPUTS = ['url', 'bounds', 'clickable', 'opacity'];
var OUTPUTS = ['click', 'dblclick'];
var GroundOverlay = (function (_super) {
    __extends(GroundOverlay, _super);
    function GroundOverlay(ng2MapComp) {
        _super.call(this, ng2MapComp, 'GroundOverlay', INPUTS, OUTPUTS);
        this.initialized$ = new core_1.EventEmitter();
        this.objectOptions = {};
    }
    // re-declaring initialize function. called when map is ready
    GroundOverlay.prototype.initialize = function () {
        // url, bounds are not the options of GroundOverlay
        this.objectOptions = this.optionBuilder.googlizeAllInputs(['clickable', 'opacity'], this);
        console.log(this.mapObjectName, 'initialization objectOptions', this.objectOptions);
        // noinspection TypeScriptUnresolvedFunction
        this.mapObject = new google.maps.GroundOverlay(this['url'], this['bounds'], this.objectOptions);
        this.mapObject.setMap(this.ng2MapComponent.map);
        this.mapObject['mapObjectName'] = this.mapObjectName;
        // set google events listeners and emits to this outputs listeners
        this.ng2Map.setObjectEvents(this.outputs, this, 'mapObject');
        this.ng2MapComponent.addToMapObjectGroup(this.mapObjectName, this.mapObject);
        this.initialized$.emit(this.mapObject);
    };
    GroundOverlay.decorators = [
        { type: core_1.Directive, args: [{
                    selector: 'ng2-map > ground-overlay',
                    inputs: INPUTS,
                    outputs: OUTPUTS,
                },] },
    ];
    /** @nocollapse */
    GroundOverlay.ctorParameters = [
        { type: ng2_map_component_1.Ng2MapComponent, },
    ];
    GroundOverlay.propDecorators = {
        'initialized$': [{ type: core_1.Output },],
    };
    return GroundOverlay;
}(base_map_directive_1.BaseMapDirective));
exports.GroundOverlay = GroundOverlay;
//# sourceMappingURL=ground-overlay.js.map

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = __webpack_require__(0);
var base_map_directive_1 = __webpack_require__(3);
var ng2_map_component_1 = __webpack_require__(1);
var INPUTS = ['data', 'dissipating', 'gradient', 'maxIntensity', 'opacity', 'radius', 'options'];
var OUTPUTS = [];
var HeatmapLayer = (function (_super) {
    __extends(HeatmapLayer, _super);
    function HeatmapLayer(ng2MapComp) {
        _super.call(this, ng2MapComp, 'HeatmapLayer', INPUTS, OUTPUTS);
        this.initialized$ = new core_1.EventEmitter();
        this.libraryName = 'visualization';
    }
    HeatmapLayer.decorators = [
        { type: core_1.Directive, args: [{
                    selector: 'ng2-map > heatmap-layer',
                    inputs: INPUTS,
                    outputs: OUTPUTS,
                },] },
    ];
    /** @nocollapse */
    HeatmapLayer.ctorParameters = [
        { type: ng2_map_component_1.Ng2MapComponent, },
    ];
    HeatmapLayer.propDecorators = {
        'initialized$': [{ type: core_1.Output },],
    };
    return HeatmapLayer;
}(base_map_directive_1.BaseMapDirective));
exports.HeatmapLayer = HeatmapLayer;
//# sourceMappingURL=heatmap-layer.js.map

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = __webpack_require__(0);
var base_map_directive_1 = __webpack_require__(3);
var ng2_map_component_1 = __webpack_require__(1);
var INPUTS = ['clickable', 'preserveViewport', 'screenOverlays', 'suppressInfoWindows', 'url', 'zIndex', 'options'];
var OUTPUTS = ['click', 'defaultviewport_changed', 'status_changed'];
var KmlLayer = (function (_super) {
    __extends(KmlLayer, _super);
    function KmlLayer(ng2MapComp) {
        _super.call(this, ng2MapComp, 'KmlLayer', INPUTS, OUTPUTS);
        this.initialized$ = new core_1.EventEmitter();
    }
    KmlLayer.decorators = [
        { type: core_1.Directive, args: [{
                    selector: 'ng2-map > kml-layer',
                    inputs: INPUTS,
                    outputs: OUTPUTS,
                },] },
    ];
    /** @nocollapse */
    KmlLayer.ctorParameters = [
        { type: ng2_map_component_1.Ng2MapComponent, },
    ];
    KmlLayer.propDecorators = {
        'initialized$': [{ type: core_1.Output },],
    };
    return KmlLayer;
}(base_map_directive_1.BaseMapDirective));
exports.KmlLayer = KmlLayer;
//# sourceMappingURL=kml-layer.js.map

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = __webpack_require__(0);
var base_map_directive_1 = __webpack_require__(3);
var ng2_map_component_1 = __webpack_require__(1);
var INPUTS = [
    'anchorPoint', 'animation', 'clickable', 'cursor', 'draggable', 'icon', 'label', 'opacity',
    'optimized', 'place', 'position', 'shape', 'title', 'visible', 'zIndex', 'options',
    // ng2-map specific inputs
    'geoFallbackPosition'
];
var OUTPUTS = [
    'animationChanged', 'click', 'clickableChanged', 'cursorChanged', 'dblclick', 'drag', 'dragend', 'draggableChanged',
    'dragstart', 'flatChanged', 'iconChanged', 'mousedown', 'mouseout', 'mouseover', 'mouseup', 'positionChanged', 'rightclick',
    'shapeChanged', 'titleChanged', 'visibleChanged', 'zindexChanged'
];
var Marker = (function (_super) {
    __extends(Marker, _super);
    function Marker(ng2MapComp) {
        _super.call(this, ng2MapComp, 'Marker', INPUTS, OUTPUTS);
        this.ng2MapComp = ng2MapComp;
        this.initialized$ = new core_1.EventEmitter();
        this.objectOptions = {};
        console.log('marker constructor', 9999999);
    }
    // Initialize this map object when map is ready
    Marker.prototype.ngOnInit = function () {
        var _this = this;
        if (this.ng2MapComponent.mapIdledOnce) {
            this.initialize();
        }
        else {
            this.ng2MapComponent.mapReady$.subscribe(function (map) { return _this.initialize(); });
        }
    };
    Marker.prototype.initialize = function () {
        _super.prototype.initialize.call(this);
        this.setPosition();
    };
    Marker.prototype.setPosition = function () {
        var _this = this;
        if (!this['position']) {
            this._subscriptions.push(this.ng2MapComp.geolocation.getCurrentPosition().subscribe(function (position) {
                console.log('setting marker position from current location');
                var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                _this.mapObject.setPosition(latLng);
            }, function (error) {
                console.error('ng2-map, error finding the current location');
                _this.mapObject.setPosition(_this.objectOptions['geoFallbackPosition'] || new google.maps.LatLng(0, 0));
            }));
        }
        else if (typeof this['position'] === 'string') {
            this._subscriptions.push(this.ng2MapComp.geoCoder.geocode({ address: this['position'] }).subscribe(function (results) {
                console.log('setting marker position from address', _this['position']);
                _this.mapObject.setPosition(results[0].geometry.location);
            }, function (error) {
                console.error('ng2-map, error finding the location from', _this['position']);
                _this.mapObject.setPosition(_this.objectOptions['geoFallbackPosition'] || new google.maps.LatLng(0, 0));
            }));
        }
    };
    Marker.decorators = [
        { type: core_1.Directive, args: [{
                    selector: 'ng2-map > marker',
                    inputs: INPUTS,
                    outputs: OUTPUTS,
                },] },
    ];
    /** @nocollapse */
    Marker.ctorParameters = [
        { type: ng2_map_component_1.Ng2MapComponent, },
    ];
    Marker.propDecorators = {
        'initialized$': [{ type: core_1.Output },],
    };
    return Marker;
}(base_map_directive_1.BaseMapDirective));
exports.Marker = Marker;
//# sourceMappingURL=marker.js.map

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var config_1 = __webpack_require__(10);
var option_builder_1 = __webpack_require__(8);
var PlacesAutoComplete = (function () {
    function PlacesAutoComplete(optionBuilder, elementRef, zone, config) {
        var _this = this;
        this.optionBuilder = optionBuilder;
        this.elementRef = elementRef;
        this.zone = zone;
        this.config = config;
        this.place_changed = new core_1.EventEmitter();
        this.initialized$ = new core_1.EventEmitter();
        // only called when map is ready
        this.initialize = function () {
            _this.objectOptions =
                _this.optionBuilder.googlizeAllInputs(['bounds', 'componentRestrictions', 'types'], _this);
            console.log('places autocomplete options', _this.objectOptions);
            _this.autocomplete = new google.maps.places.Autocomplete(_this.elementRef.nativeElement, _this.objectOptions);
            console.log('this.autocomplete', _this.autocomplete);
            _this.autocomplete.addListener('place_changed', function (place) {
                _this.place_changed.emit(_this.autocomplete.getPlace());
            });
            _this.initialized$.emit(_this.autocomplete);
        };
        this.config = this.config
            || { apiUrl: 'https://maps.google.com/maps/api/js?libraries=places' };
        //treat this as ng2Map because it requires google api on root level
        window['ng2MapRef'] = window['ng2MapRef'] || [];
        this.mapIndex = window['ng2MapRef'].length;
        window['ng2MapRef'].push({
            zone: this.zone,
            componentFn: function () { return _this.initialize(); }
        });
        if (typeof google === 'undefined' || typeof google.maps === 'undefined' || !google.maps.Map) {
            this.addGoogleMapsApi();
        }
        else {
            this.initialize();
        }
    }
    PlacesAutoComplete.prototype.addGoogleMapsApi = function () {
        window['initNg2Map'] = window['initNg2Map'] || function () {
            window['ng2MapRef'].forEach(function (ng2MapRef) {
                ng2MapRef.zone.run(function () { ng2MapRef.componentFn(); });
            });
            window['ng2MapRef'] = [];
        };
        if ((!window['google'] || !window['google']['maps']) && !document.querySelector('#ng2-map-api')) {
            var script = document.createElement('script');
            script.id = 'ng2-map-api';
            // script.src = "https://maps.google.com/maps/api/js?callback=initNg2Map";
            var apiUrl = this.config.apiUrl;
            apiUrl += apiUrl.indexOf('?') ? '&' : '?';
            script.src = apiUrl + 'callback=initNg2Map';
            document.querySelector('body').appendChild(script);
        }
    };
    PlacesAutoComplete.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[places-auto-complete]'
                },] },
    ];
    /** @nocollapse */
    PlacesAutoComplete.ctorParameters = [
        { type: option_builder_1.OptionBuilder, },
        { type: core_1.ElementRef, },
        { type: core_1.NgZone, },
        { type: undefined, decorators: [{ type: core_1.Optional }, { type: core_1.Inject, args: [config_1.NG_MAP_CONFIG_TOKEN,] },] },
    ];
    PlacesAutoComplete.propDecorators = {
        'bounds': [{ type: core_1.Input, args: ['bounds',] },],
        'componentRestrictions': [{ type: core_1.Input, args: ['componentRestrictions',] },],
        'types': [{ type: core_1.Input, args: ['types',] },],
        'place_changed': [{ type: core_1.Output, args: ['place_changed',] },],
        'initialized$': [{ type: core_1.Output, args: ['initialized$',] },],
    };
    return PlacesAutoComplete;
}());
exports.PlacesAutoComplete = PlacesAutoComplete;
//# sourceMappingURL=places-auto-complete.js.map

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = __webpack_require__(0);
var base_map_directive_1 = __webpack_require__(3);
var ng2_map_component_1 = __webpack_require__(1);
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
        this.initialized$ = new core_1.EventEmitter();
    }
    Polygon.decorators = [
        { type: core_1.Directive, args: [{
                    selector: 'ng2-map>polygon, ng2-map>map-polygon',
                    inputs: INPUTS,
                    outputs: OUTPUTS,
                },] },
    ];
    /** @nocollapse */
    Polygon.ctorParameters = [
        { type: ng2_map_component_1.Ng2MapComponent, },
    ];
    Polygon.propDecorators = {
        'initialized$': [{ type: core_1.Output },],
    };
    return Polygon;
}(base_map_directive_1.BaseMapDirective));
exports.Polygon = Polygon;
//# sourceMappingURL=polygon.js.map

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = __webpack_require__(0);
var base_map_directive_1 = __webpack_require__(3);
var ng2_map_component_1 = __webpack_require__(1);
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
        this.initialized$ = new core_1.EventEmitter();
    }
    Polyline.decorators = [
        { type: core_1.Directive, args: [{
                    selector: 'ng2-map > polyline',
                    inputs: INPUTS,
                    outputs: OUTPUTS,
                },] },
    ];
    /** @nocollapse */
    Polyline.ctorParameters = [
        { type: ng2_map_component_1.Ng2MapComponent, },
    ];
    Polyline.propDecorators = {
        'initialized$': [{ type: core_1.Output },],
    };
    return Polyline;
}(base_map_directive_1.BaseMapDirective));
exports.Polyline = Polyline;
//# sourceMappingURL=polyline.js.map

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = __webpack_require__(0);
var base_map_directive_1 = __webpack_require__(3);
var ng2_map_component_1 = __webpack_require__(1);
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
        this.initialized$ = new core_1.EventEmitter();
    }
    // only called when map is ready
    StreetViewPanorama.prototype.initialize = function () {
        this.objectOptions = this.optionBuilder.googlizeAllInputs(this.inputs, this);
        console.log(this.mapObjectName, 'initialization objectOptions', this.objectOptions);
        var element;
        if (this.objectOptions.selector) {
            // noinspection TypeScriptValidateTypes
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
        this.ng2MapComponent.addToMapObjectGroup(this.mapObjectName, this.mapObject);
        this.initialized$.emit(this.mapObject);
    };
    // When destroyed, remove event listener, and delete this object to prevent memory leak
    StreetViewPanorama.prototype.ngOnDestroy = function () {
        var _this = this;
        if (this.ng2MapComponent.el) {
            OUTPUTS.forEach(function (output) { return google.maps.event.clearListeners(_this.mapObject, output); });
        }
    };
    StreetViewPanorama.decorators = [
        { type: core_1.Directive, args: [{
                    selector: 'ng2-map > street-view-panorama',
                    inputs: INPUTS,
                    outputs: OUTPUTS,
                },] },
    ];
    /** @nocollapse */
    StreetViewPanorama.ctorParameters = [
        { type: ng2_map_component_1.Ng2MapComponent, },
    ];
    StreetViewPanorama.propDecorators = {
        'initialized$': [{ type: core_1.Output },],
    };
    return StreetViewPanorama;
}(base_map_directive_1.BaseMapDirective));
exports.StreetViewPanorama = StreetViewPanorama;
//# sourceMappingURL=street-view-panorama.js.map

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = __webpack_require__(0);
var base_map_directive_1 = __webpack_require__(3);
var ng2_map_component_1 = __webpack_require__(1);
var INPUTS = ['autoRefresh', 'options'];
var OUTPUTS = [];
var TrafficLayer = (function (_super) {
    __extends(TrafficLayer, _super);
    function TrafficLayer(ng2MapComp) {
        _super.call(this, ng2MapComp, 'TrafficLayer', INPUTS, OUTPUTS);
        this.initialized$ = new core_1.EventEmitter();
    }
    TrafficLayer.decorators = [
        { type: core_1.Directive, args: [{
                    selector: 'ng2-map > traffic-layer',
                    inputs: INPUTS,
                    outputs: OUTPUTS,
                },] },
    ];
    /** @nocollapse */
    TrafficLayer.ctorParameters = [
        { type: ng2_map_component_1.Ng2MapComponent, },
    ];
    TrafficLayer.propDecorators = {
        'initialized$': [{ type: core_1.Output },],
    };
    return TrafficLayer;
}(base_map_directive_1.BaseMapDirective));
exports.TrafficLayer = TrafficLayer;
//# sourceMappingURL=traffic-layer.js.map

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = __webpack_require__(0);
var base_map_directive_1 = __webpack_require__(3);
var ng2_map_component_1 = __webpack_require__(1);
var INPUTS = [];
var OUTPUTS = [];
var TransitLayer = (function (_super) {
    __extends(TransitLayer, _super);
    function TransitLayer(ng2MapComp) {
        _super.call(this, ng2MapComp, 'TransitLayer', INPUTS, OUTPUTS);
        this.initialized$ = new core_1.EventEmitter();
    }
    TransitLayer.decorators = [
        { type: core_1.Directive, args: [{
                    selector: 'ng2-map > transit-layer',
                    inputs: INPUTS,
                    outputs: OUTPUTS,
                },] },
    ];
    /** @nocollapse */
    TransitLayer.ctorParameters = [
        { type: ng2_map_component_1.Ng2MapComponent, },
    ];
    TransitLayer.propDecorators = {
        'initialized$': [{ type: core_1.Output },],
    };
    return TransitLayer;
}(base_map_directive_1.BaseMapDirective));
exports.TransitLayer = TransitLayer;
//# sourceMappingURL=transit-layer.js.map

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var bicycling_layer_1 = __webpack_require__(27);
exports.BicyclingLayer = bicycling_layer_1.BicyclingLayer;
var navigator_geolocation_1 = __webpack_require__(11);
exports.NavigatorGeolocation = navigator_geolocation_1.NavigatorGeolocation;
var option_builder_1 = __webpack_require__(8);
exports.OptionBuilder = option_builder_1.OptionBuilder;
var config_1 = __webpack_require__(10);
exports.NG_MAP_CONFIG_TOKEN = config_1.NG_MAP_CONFIG_TOKEN;
var ng2_map_component_1 = __webpack_require__(1);
exports.Ng2MapComponent = ng2_map_component_1.Ng2MapComponent;
var info_window_1 = __webpack_require__(26);
exports.InfoWindow = info_window_1.InfoWindow;
var custom_marker_1 = __webpack_require__(25);
exports.CustomMarker = custom_marker_1.CustomMarker;
var circle_1 = __webpack_require__(28);
exports.Circle = circle_1.Circle;
var data_layer_1 = __webpack_require__(29);
exports.DataLayer = data_layer_1.DataLayer;
var directions_renderer_1 = __webpack_require__(30);
exports.DirectionsRenderer = directions_renderer_1.DirectionsRenderer;
var drawing_manager_1 = __webpack_require__(31);
exports.DrawingManager = drawing_manager_1.DrawingManager;
var geo_coder_1 = __webpack_require__(6);
exports.GeoCoder = geo_coder_1.GeoCoder;
var ground_overlay_1 = __webpack_require__(32);
exports.GroundOverlay = ground_overlay_1.GroundOverlay;
var heatmap_layer_1 = __webpack_require__(33);
exports.HeatmapLayer = heatmap_layer_1.HeatmapLayer;
var kml_layer_1 = __webpack_require__(34);
exports.KmlLayer = kml_layer_1.KmlLayer;
var marker_1 = __webpack_require__(35);
exports.Marker = marker_1.Marker;
var ng2_map_1 = __webpack_require__(7);
exports.Ng2Map = ng2_map_1.Ng2Map;
var places_auto_complete_1 = __webpack_require__(36);
exports.PlacesAutoComplete = places_auto_complete_1.PlacesAutoComplete;
var polygon_1 = __webpack_require__(37);
exports.Polygon = polygon_1.Polygon;
var polyline_1 = __webpack_require__(38);
exports.Polyline = polyline_1.Polyline;
var street_view_panorama_1 = __webpack_require__(39);
exports.StreetViewPanorama = street_view_panorama_1.StreetViewPanorama;
var traffic_layer_1 = __webpack_require__(40);
exports.TrafficLayer = traffic_layer_1.TrafficLayer;
var transit_layer_1 = __webpack_require__(41);
exports.TransitLayer = transit_layer_1.TransitLayer;
var ng2_map_module_1 = __webpack_require__(71);
exports.Ng2MapModule = ng2_map_module_1.Ng2MapModule;
//# sourceMappingURL=index.js.map

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

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
/**
 * Returns camel-cased from string 'Foo Bar' to 'fooBar'
 */
var toCamelCase = function (str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function (letter, index) {
        return index == 0 ? letter.toLowerCase() : letter.toUpperCase();
    }).replace(/\s+/g, '');
};
exports.toCamelCase = toCamelCase;
//# sourceMappingURL=util.js.map

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__(0);
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
//# sourceMappingURL=ng2-menu.directive.js.map

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var ng2_overlay_manager_1 = __webpack_require__(17);
var ng2_overlay_1 = __webpack_require__(46);
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
    Ng2OverlayDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[ng2-overlay], [ng2-overlay-of], [ng2-overlay-position]',
                },] },
    ];
    /** @nocollapse */
    Ng2OverlayDirective.ctorParameters = function () { return [
        { type: core_1.ViewContainerRef, },
        { type: ng2_overlay_manager_1.Ng2OverlayManager, },
    ]; };
    Ng2OverlayDirective.propDecorators = {
        'overlayOf': [{ type: core_1.Input, args: ['ng2-overlay-of',] },],
        'overlayPosition': [{ type: core_1.Input, args: ['ng2-overlay-position',] },],
    };
    return Ng2OverlayDirective;
}());
exports.Ng2OverlayDirective = Ng2OverlayDirective;
//# sourceMappingURL=ng2-overlay.directive.js.map

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ng2_util_1 = __webpack_require__(75);
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
//# sourceMappingURL=ng2-overlay.js.map

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ng2_popup_component_1 = __webpack_require__(49);
exports.Ng2PopupComponent = ng2_popup_component_1.Ng2PopupComponent;
var ng2_message_popup_component_1 = __webpack_require__(48);
exports.Ng2MessagePopupComponent = ng2_message_popup_component_1.Ng2MessagePopupComponent;
var ng2_popup_module_1 = __webpack_require__(77);
exports.Ng2PopupModule = ng2_popup_module_1.Ng2PopupModule;
//# sourceMappingURL=index.js.map

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__(0);
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
//# sourceMappingURL=ng2-message-popup.component.js.map

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__(0);
var ng2_overlay_1 = __webpack_require__(5);
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
//# sourceMappingURL=ng2-popup.component.js.map

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ng2_scrollable_directive_1 = __webpack_require__(51);
exports.Ng2ScrollableDirective = ng2_scrollable_directive_1.Ng2ScrollableDirective;
var ng2_scrollable_module_1 = __webpack_require__(78);
exports.Ng2ScrollableModule = ng2_scrollable_module_1.Ng2ScrollableModule;
//# sourceMappingURL=index.js.map

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var ng2_utils_1 = __webpack_require__(57);
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
    Ng2ScrollableDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[ng2-scrollable]'
                },] },
    ];
    /** @nocollapse */
    Ng2ScrollableDirective.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
    ]; };
    Ng2ScrollableDirective.propDecorators = {
        'horizontal': [{ type: core_1.Input },],
        'elementVisible': [{ type: core_1.Output },],
    };
    return Ng2ScrollableDirective;
}());
exports.Ng2ScrollableDirective = Ng2ScrollableDirective;
//# sourceMappingURL=ng2-scrollable.directive.js.map

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var ng2_utils_1 = __webpack_require__(87);
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
    Ng2StickyDirective.prototype.ngOnDestroy = function () {
        this.detach();
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
//# sourceMappingURL=ng2-sticky.directive.js.map

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__(0);
var HtmlCodePipe = (function () {
    function HtmlCodePipe() {
    }
    HtmlCodePipe.prototype.transform = function (html, tagsIncludeExclude) {
        var ret;
        var tagsInclude = [];
        var tagsExclude = [];
        (tagsIncludeExclude || '').split(',').forEach(function (tag) {
            if (tag.match(/^-/)) {
                tag = tag.replace(/^-/, '');
                tagsExclude.push(tag);
            }
            else if (tag !== '') {
                tagsInclude.push(tag);
            }
        });
        ret = tagsInclude.length > 0 ? '' : html;
        if (tagsInclude.length > 0) {
            tagsInclude.forEach(function (tag) {
                var regEx = new RegExp("<" + tag + ">([\\s\\S]*?)</" + tag + ">");
                var matches = html.match(regEx);
                var output = matches[0].replace(/<\/?ng2-utils-[0-9]+>\s*/g, ''); //remove <ng2-utils-xxx> and </ng2-utils-xxx>
                ret = ret + output;
            });
        }
        if (tagsExclude.length > 0) {
            tagsExclude.forEach(function (tag) {
                var regEx = new RegExp("<" + tag + ">([\\s\\S]*?)</" + tag + ">");
                ret = ret.replace(regEx, '');
            });
        }
        return ret;
    };
    return HtmlCodePipe;
}());
HtmlCodePipe = __decorate([
    core_1.Pipe({ name: 'htmlCode' }),
    __metadata("design:paramtypes", [])
], HtmlCodePipe);
exports.HtmlCodePipe = HtmlCodePipe;
//# sourceMappingURL=html-code.pipe.js.map

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__(0);
var js_beautify = __webpack_require__(21);
var JavascriptCodePipe = (function () {
    function JavascriptCodePipe() {
    }
    JavascriptCodePipe.prototype.transform = function (value) {
        value = value.toString();
        var ret = value;
        return js_beautify(value);
    };
    return JavascriptCodePipe;
}());
JavascriptCodePipe = __decorate([
    core_1.Pipe({ name: 'jsCode' }),
    __metadata("design:paramtypes", [])
], JavascriptCodePipe);
exports.JavascriptCodePipe = JavascriptCodePipe;
//# sourceMappingURL=javascript-code.pipe.js.map

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__(0);
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
//# sourceMappingURL=ng2-tab.component.js.map

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var ng2_overlay_1 = __webpack_require__(5);
var Ng2TooltipComponent = (function () {
    function Ng2TooltipComponent(viewContainerRef, ng2OverlayManager) {
        this.viewContainerRef = viewContainerRef;
        this.ng2OverlayManager = ng2OverlayManager;
        this.el = this.viewContainerRef.element.nativeElement;
    }
    Ng2TooltipComponent.prototype.ngAfterViewInit = function () {
        this.ng2Overlay = this.getTooltipOverlay(this.el, this.tooltip);
    };
    Ng2TooltipComponent.prototype.showTooltip = function ($event) {
        this.ng2OverlayManager.open(this.ng2Overlay, $event);
        $event.stopPropagation();
    };
    Ng2TooltipComponent.prototype.hideTooltip = function ($event) {
        this.ng2OverlayManager.close(this.ng2Overlay);
        $event.stopPropagation();
    };
    Ng2TooltipComponent.prototype.getTooltipOverlay = function (el, tooltip) {
        var tooltipEl = document.createElement('ng2-tooltip');
        tooltipEl.style.display = 'none';
        var divEl = document.createElement('div');
        divEl.innerHTML = "\n       <div class='tooltip-contents'>" + tooltip + "</div>\n       <div class='tooltip-down-arrow'></div>\n    ";
        tooltipEl.appendChild(divEl);
        //el.parentElement.insertBefore(tooltipEl, el.nextSibling);
        el.appendChild(tooltipEl);
        var ng2Overlay = new ng2_overlay_1.Ng2Overlay(tooltipEl, {
            id: 'tooltip-' + (el.id || Math.floor(Math.random() * 1000000)),
            position: 'top cursor outside'
        });
        this.ng2OverlayManager.register(ng2Overlay);
        return ng2Overlay;
    };
    return Ng2TooltipComponent;
}());
__decorate([
    core_1.Input('ng2-tooltip'),
    __metadata("design:type", String)
], Ng2TooltipComponent.prototype, "tooltip", void 0);
Ng2TooltipComponent = __decorate([
    core_1.Component({
        selector: '[ng2-tooltip]',
        template: '<ng-content></ng-content>',
        host: {
            '(mouseover)': 'showTooltip($event)',
            '(mouseout)': 'hideTooltip($event)'
        },
        styles: ["\n    ng2-tooltip .tooltip-contents {\n      border: 1px solid #ccc; padding: 5px\n    }\n    ng2-tooltip .tooltip-down-arrow {\n      height: 10px;\n    }\n    ng2-tooltip .tooltip-down-arrow:before {\n      content: '';\n      display: block;\n      position: absolute;\n      width: 10px;\n      height: 10px;\n      left: 45%;\n      bottom: 5px;\n      background: #FFFFFF;\n      border-left:1px solid #ccc;\n      border-bottom:1px solid #ccc;\n      transform:rotate(-45deg);\n    }\n  "],
        encapsulation: core_1.ViewEncapsulation.None
    }),
    __metadata("design:paramtypes", [core_1.ViewContainerRef,
        ng2_overlay_1.Ng2OverlayManager])
], Ng2TooltipComponent);
exports.Ng2TooltipComponent = Ng2TooltipComponent;
//# sourceMappingURL=ng2-tooltip-component.js.map

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var scroll_to_1 = __webpack_require__(98);
exports.scrollTo = scroll_to_1.scrollTo;
var element_visible_1 = __webpack_require__(95);
exports.elementVisible = element_visible_1.elementVisible;
var computed_style_1 = __webpack_require__(94);
exports.computedStyle = computed_style_1.computedStyle;
var outer_width_1 = __webpack_require__(97);
exports.outerWidth = outer_width_1.outerWidth;
var outer_height_1 = __webpack_require__(96);
exports.outerHeight = outer_height_1.outerHeight;
var html_code_pipe_1 = __webpack_require__(58);
exports.HtmlCodePipe = html_code_pipe_1.HtmlCodePipe;
var javascript_code_pipe_1 = __webpack_require__(59);
exports.JavascriptCodePipe = javascript_code_pipe_1.JavascriptCodePipe;
var ng2_utils_module_1 = __webpack_require__(99);
exports.Ng2UtilsModule = ng2_utils_module_1.Ng2UtilsModule;
//# sourceMappingURL=index.js.map

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__(0);
var HtmlCodePipe = (function () {
    function HtmlCodePipe() {
    }
    HtmlCodePipe.prototype.transform = function (html, tagsIncludeExclude) {
        var ret;
        var tagsInclude = [];
        var tagsExclude = [];
        (tagsIncludeExclude || '').split(',').forEach(function (tag) {
            if (tag.match(/^-/)) {
                tag = tag.replace(/^-/, '');
                tagsExclude.push(tag);
            }
            else if (tag !== '') {
                tagsInclude.push(tag);
            }
        });
        ret = tagsInclude.length > 0 ? '' : html;
        console.log('tagsInclude.length', tagsInclude.length, tagsInclude);
        if (tagsInclude.length > 0) {
            tagsInclude.forEach(function (tag) {
                var regEx = new RegExp("<" + tag + ">([\\s\\S]*?)</" + tag + ">");
                var matches = html.match(regEx);
                ret = ret + matches[0];
            });
        }
        if (tagsExclude.length > 0) {
            tagsExclude.forEach(function (tag) {
                var regEx = new RegExp("<" + tag + ">([\\s\\S]*?)</" + tag + ">");
                ret = ret.replace(regEx, '');
            });
        }
        return ret;
    };
    return HtmlCodePipe;
}());
HtmlCodePipe = __decorate([
    core_1.Pipe({ name: 'htmlCode' }),
    __metadata("design:paramtypes", [])
], HtmlCodePipe);
exports.HtmlCodePipe = HtmlCodePipe;
//# sourceMappingURL=html-code.pipe.js.map

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__(0);
var js_beautify = __webpack_require__(21);
var JavascriptCodePipe = (function () {
    function JavascriptCodePipe() {
    }
    JavascriptCodePipe.prototype.transform = function (value) {
        value = value.toString();
        var ret = value;
        return js_beautify(value);
    };
    return JavascriptCodePipe;
}());
JavascriptCodePipe = __decorate([
    core_1.Pipe({ name: 'jsCode' }),
    __metadata("design:paramtypes", [])
], JavascriptCodePipe);
exports.JavascriptCodePipe = JavascriptCodePipe;
//# sourceMappingURL=javascript-code.pipe.js.map

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_60__;

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(2);
var platform_browser_1 = __webpack_require__(18);
var ng2_auto_complete_1 = __webpack_require__(63);
var ng2_datetime_picker_1 = __webpack_require__(67);
var ng2_map_1 = __webpack_require__(42);
exports.Ng2MapModule = ng2_map_1.Ng2MapModule;
var ng2_popup_1 = __webpack_require__(47);
var ng2_menu_1 = __webpack_require__(72);
var ng2_parallax_scroll_1 = __webpack_require__(76);
var ng2_sticky_1 = __webpack_require__(79);
var ng2_tab_1 = __webpack_require__(89);
var ng2_tooltip_overlay_1 = __webpack_require__(91);
var ng2_ui_sortable_1 = __webpack_require__(93);
var ng2_overlay_1 = __webpack_require__(5);
var ng2_scrollable_1 = __webpack_require__(50);
var ng2_collapsable_1 = __webpack_require__(65);
var ng2_infinite_list_1 = __webpack_require__(69);
var ng2_overlay_2 = __webpack_require__(5);
exports.Ng2OverlayManager = ng2_overlay_2.Ng2OverlayManager;
var ng2_scrollable_2 = __webpack_require__(50);
exports.Ng2ScrollableDirective = ng2_scrollable_2.Ng2ScrollableDirective;
var ng2_popup_2 = __webpack_require__(47);
exports.Ng2MessagePopupComponent = ng2_popup_2.Ng2MessagePopupComponent;
exports.Ng2PopupComponent = ng2_popup_2.Ng2PopupComponent;
var ng2_map_2 = __webpack_require__(42);
exports.Ng2MapComponent = ng2_map_2.Ng2MapComponent;
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
    })
], Ng2UIModule);
exports.Ng2UIModule = Ng2UIModule;


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*jshint curly:true, eqeqeq:true, laxbreak:true, noempty:false */
/*

  The MIT License (MIT)

  Copyright (c) 2007-2017 Einar Lielmanis, Liam Newman, and contributors.

  Permission is hereby granted, free of charge, to any person
  obtaining a copy of this software and associated documentation files
  (the "Software"), to deal in the Software without restriction,
  including without limitation the rights to use, copy, modify, merge,
  publish, distribute, sublicense, and/or sell copies of the Software,
  and to permit persons to whom the Software is furnished to do so,
  subject to the following conditions:

  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
  BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
  ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
  CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.


 Style HTML
---------------

  Written by Nochum Sossonko, (nsossonko@hotmail.com)

  Based on code initially developed by: Einar Lielmanis, <einar@jsbeautifier.org>
    http://jsbeautifier.org/

  Usage:
    style_html(html_source);

    style_html(html_source, options);

  The options are:
    indent_inner_html (default false)  — indent <head> and <body> sections,
    indent_size (default 4)          — indentation size,
    indent_char (default space)      — character to indent with,
    wrap_line_length (default 250)            -  maximum amount of characters per line (0 = disable)
    brace_style (default "collapse") - "collapse" | "expand" | "end-expand" | "none"
            put braces on the same line as control statements (default), or put braces on own line (Allman / ANSI style), or just put end braces on own line, or attempt to keep them where they are.
    unformatted (defaults to inline tags) - list of tags, that shouldn't be reformatted
    content_unformatted (defaults to pre tag) - list of tags, that its content shouldn't be reformatted
    indent_scripts (default normal)  - "keep"|"separate"|"normal"
    preserve_newlines (default true) - whether existing line breaks before elements should be preserved
                                        Only works before elements, not inside tags or for text.
    max_preserve_newlines (default unlimited) - maximum number of line breaks to be preserved in one chunk
    indent_handlebars (default false) - format and indent {{#foo}} and {{/foo}}
    end_with_newline (false)          - end with a newline
    extra_liners (default [head,body,/html]) -List of tags that should have an extra newline before them.

    e.g.

    style_html(html_source, {
      'indent_inner_html': false,
      'indent_size': 2,
      'indent_char': ' ',
      'wrap_line_length': 78,
      'brace_style': 'expand',
      'preserve_newlines': true,
      'max_preserve_newlines': 5,
      'indent_handlebars': false,
      'extra_liners': ['/html']
    });
*/

(function() {

    // function trim(s) {
    //     return s.replace(/^\s+|\s+$/g, '');
    // }

    function ltrim(s) {
        return s.replace(/^\s+/g, '');
    }

    function rtrim(s) {
        return s.replace(/\s+$/g, '');
    }

    function mergeOpts(allOptions, targetType) {
        var finalOpts = {};
        var name;

        for (name in allOptions) {
            if (name !== targetType) {
                finalOpts[name] = allOptions[name];
            }
        }

        //merge in the per type settings for the targetType
        if (targetType in allOptions) {
            for (name in allOptions[targetType]) {
                finalOpts[name] = allOptions[targetType][name];
            }
        }
        return finalOpts;
    }

    var lineBreak = /\r\n|[\n\r\u2028\u2029]/;
    var allLineBreaks = new RegExp(lineBreak.source, 'g');

    function style_html(html_source, options, js_beautify, css_beautify) {
        //Wrapper function to invoke all the necessary constructors and deal with the output.

        var multi_parser,
            indent_inner_html,
            indent_body_inner_html,
            indent_head_inner_html,
            indent_size,
            indent_character,
            wrap_line_length,
            brace_style,
            unformatted,
            content_unformatted,
            preserve_newlines,
            max_preserve_newlines,
            indent_handlebars,
            wrap_attributes,
            wrap_attributes_indent_size,
            is_wrap_attributes_force,
            is_wrap_attributes_force_expand_multiline,
            is_wrap_attributes_force_aligned,
            end_with_newline,
            extra_liners,
            eol;

        options = options || {};

        // Allow the setting of language/file-type specific options
        // with inheritance of overall settings
        options = mergeOpts(options, 'html');

        // backwards compatibility to 1.3.4
        if ((options.wrap_line_length === undefined || parseInt(options.wrap_line_length, 10) === 0) &&
            (options.max_char !== undefined && parseInt(options.max_char, 10) !== 0)) {
            options.wrap_line_length = options.max_char;
        }

        indent_inner_html = (options.indent_inner_html === undefined) ? false : options.indent_inner_html;
        indent_body_inner_html = (options.indent_body_inner_html === undefined) ? true : options.indent_body_inner_html;
        indent_head_inner_html = (options.indent_head_inner_html === undefined) ? true : options.indent_head_inner_html;
        indent_size = (options.indent_size === undefined) ? 4 : parseInt(options.indent_size, 10);
        indent_character = (options.indent_char === undefined) ? ' ' : options.indent_char;
        brace_style = (options.brace_style === undefined) ? 'collapse' : options.brace_style;
        wrap_line_length = parseInt(options.wrap_line_length, 10) === 0 ? 32786 : parseInt(options.wrap_line_length || 250, 10);
        unformatted = options.unformatted || [
            // https://www.w3.org/TR/html5/dom.html#phrasing-content
            'a', 'abbr', 'area', 'audio', 'b', 'bdi', 'bdo', 'br', 'button', 'canvas', 'cite',
            'code', 'data', 'datalist', 'del', 'dfn', 'em', 'embed', 'i', 'iframe', 'img',
            'input', 'ins', 'kbd', 'keygen', 'label', 'map', 'mark', 'math', 'meter', 'noscript',
            'object', 'output', 'progress', 'q', 'ruby', 's', 'samp', /* 'script', */ 'select', 'small',
            'span', 'strong', 'sub', 'sup', 'svg', 'template', 'textarea', 'time', 'u', 'var',
            'video', 'wbr', 'text',
            // prexisting - not sure of full effect of removing, leaving in
            'acronym', 'address', 'big', 'dt', 'ins', 'strike', 'tt',
        ];
        content_unformatted = options.content_unformatted || [
            'pre',
        ];
        preserve_newlines = (options.preserve_newlines === undefined) ? true : options.preserve_newlines;
        max_preserve_newlines = preserve_newlines ?
            (isNaN(parseInt(options.max_preserve_newlines, 10)) ? 32786 : parseInt(options.max_preserve_newlines, 10)) :
            0;
        indent_handlebars = (options.indent_handlebars === undefined) ? false : options.indent_handlebars;
        wrap_attributes = (options.wrap_attributes === undefined) ? 'auto' : options.wrap_attributes;
        wrap_attributes_indent_size = (isNaN(parseInt(options.wrap_attributes_indent_size, 10))) ? indent_size : parseInt(options.wrap_attributes_indent_size, 10);
        is_wrap_attributes_force = wrap_attributes.substr(0, 'force'.length) === 'force';
        is_wrap_attributes_force_expand_multiline = (wrap_attributes === 'force-expand-multiline');
        is_wrap_attributes_force_aligned = (wrap_attributes === 'force-aligned');
        end_with_newline = (options.end_with_newline === undefined) ? false : options.end_with_newline;
        extra_liners = (typeof options.extra_liners === 'object') && options.extra_liners ?
            options.extra_liners.concat() : (typeof options.extra_liners === 'string') ?
            options.extra_liners.split(',') : 'head,body,/html'.split(',');
        eol = options.eol ? options.eol : 'auto';

        if (options.indent_with_tabs) {
            indent_character = '\t';
            indent_size = 1;
        }

        if (eol === 'auto') {
            eol = '\n';
            if (html_source && lineBreak.test(html_source || '')) {
                eol = html_source.match(lineBreak)[0];
            }
        }

        eol = eol.replace(/\\r/, '\r').replace(/\\n/, '\n');

        // HACK: newline parsing inconsistent. This brute force normalizes the input.
        html_source = html_source.replace(allLineBreaks, '\n');

        function Parser() {

            this.pos = 0; //Parser position
            this.token = '';
            this.current_mode = 'CONTENT'; //reflects the current Parser mode: TAG/CONTENT
            this.tags = { //An object to hold tags, their position, and their parent-tags, initiated with default values
                parent: 'parent1',
                parentcount: 1,
                parent1: ''
            };
            this.tag_type = '';
            this.token_text = this.last_token = this.last_text = this.token_type = '';
            this.newlines = 0;
            this.indent_content = indent_inner_html;
            this.indent_body_inner_html = indent_body_inner_html;
            this.indent_head_inner_html = indent_head_inner_html;

            this.Utils = { //Uilities made available to the various functions
                whitespace: "\n\r\t ".split(''),

                single_token: [
                    // HTLM void elements - aka self-closing tags - aka singletons
                    // https://www.w3.org/html/wg/drafts/html/master/syntax.html#void-elements
                    'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'keygen',
                    'link', 'menuitem', 'meta', 'param', 'source', 'track', 'wbr',
                    // NOTE: Optional tags - are not understood.
                    // https://www.w3.org/TR/html5/syntax.html#optional-tags
                    // The rules for optional tags are too complex for a simple list
                    // Also, the content of these tags should still be indented in many cases.
                    // 'li' is a good exmple.

                    // Doctype and xml elements
                    '!doctype', '?xml',
                    // ?php tag
                    '?php',
                    // other tags that were in this list, keeping just in case
                    'basefont', 'isindex'
                ],
                extra_liners: extra_liners, //for tags that need a line of whitespace before them
                in_array: function(what, arr) {
                    for (var i = 0; i < arr.length; i++) {
                        if (what === arr[i]) {
                            return true;
                        }
                    }
                    return false;
                }
            };

            // Return true if the given text is composed entirely of whitespace.
            this.is_whitespace = function(text) {
                for (var n = 0; n < text.length; n++) {
                    if (!this.Utils.in_array(text.charAt(n), this.Utils.whitespace)) {
                        return false;
                    }
                }
                return true;
            };

            this.traverse_whitespace = function() {
                var input_char = '';

                input_char = this.input.charAt(this.pos);
                if (this.Utils.in_array(input_char, this.Utils.whitespace)) {
                    this.newlines = 0;
                    while (this.Utils.in_array(input_char, this.Utils.whitespace)) {
                        if (preserve_newlines && input_char === '\n' && this.newlines <= max_preserve_newlines) {
                            this.newlines += 1;
                        }

                        this.pos++;
                        input_char = this.input.charAt(this.pos);
                    }
                    return true;
                }
                return false;
            };

            // Append a space to the given content (string array) or, if we are
            // at the wrap_line_length, append a newline/indentation.
            // return true if a newline was added, false if a space was added
            this.space_or_wrap = function(content) {
                if (this.line_char_count >= this.wrap_line_length) { //insert a line when the wrap_line_length is reached
                    this.print_newline(false, content);
                    this.print_indentation(content);
                    return true;
                } else {
                    this.line_char_count++;
                    content.push(' ');
                    return false;
                }
            };

            this.get_content = function() { //function to capture regular content between tags
                var input_char = '',
                    content = [],
                    handlebarsStarted = 0;

                while (this.input.charAt(this.pos) !== '<' || handlebarsStarted === 2) {
                    if (this.pos >= this.input.length) {
                        return content.length ? content.join('') : ['', 'TK_EOF'];
                    }

                    if (handlebarsStarted < 2 && this.traverse_whitespace()) {
                        this.space_or_wrap(content);
                        continue;
                    }

                    input_char = this.input.charAt(this.pos);

                    if (indent_handlebars) {
                        if (input_char === '{') {
                            handlebarsStarted += 1;
                        } else if (handlebarsStarted < 2) {
                            handlebarsStarted = 0;
                        }

                        if (input_char === '}' && handlebarsStarted > 0) {
                            if (handlebarsStarted-- === 0) {
                                break;
                            }
                        }
                        // Handlebars parsing is complicated.
                        // {{#foo}} and {{/foo}} are formatted tags.
                        // {{something}} should get treated as content, except:
                        // {{else}} specifically behaves like {{#if}} and {{/if}}
                        var peek3 = this.input.substr(this.pos, 3);
                        if (peek3 === '{{#' || peek3 === '{{/') {
                            // These are tags and not content.
                            break;
                        } else if (peek3 === '{{!') {
                            return [this.get_tag(), 'TK_TAG_HANDLEBARS_COMMENT'];
                        } else if (this.input.substr(this.pos, 2) === '{{') {
                            if (this.get_tag(true) === '{{else}}') {
                                break;
                            }
                        }
                    }

                    this.pos++;
                    this.line_char_count++;
                    content.push(input_char); //letter at-a-time (or string) inserted to an array
                }
                return content.length ? content.join('') : '';
            };

            this.get_contents_to = function(name) { //get the full content of a script or style to pass to js_beautify
                if (this.pos === this.input.length) {
                    return ['', 'TK_EOF'];
                }
                var content = '';
                var reg_match = new RegExp('</' + name + '\\s*>', 'igm');
                reg_match.lastIndex = this.pos;
                var reg_array = reg_match.exec(this.input);
                var end_script = reg_array ? reg_array.index : this.input.length; //absolute end of script
                if (this.pos < end_script) { //get everything in between the script tags
                    content = this.input.substring(this.pos, end_script);
                    this.pos = end_script;
                }
                return content;
            };

            this.record_tag = function(tag) { //function to record a tag and its parent in this.tags Object
                if (this.tags[tag + 'count']) { //check for the existence of this tag type
                    this.tags[tag + 'count']++;
                    this.tags[tag + this.tags[tag + 'count']] = this.indent_level; //and record the present indent level
                } else { //otherwise initialize this tag type
                    this.tags[tag + 'count'] = 1;
                    this.tags[tag + this.tags[tag + 'count']] = this.indent_level; //and record the present indent level
                }
                this.tags[tag + this.tags[tag + 'count'] + 'parent'] = this.tags.parent; //set the parent (i.e. in the case of a div this.tags.div1parent)
                this.tags.parent = tag + this.tags[tag + 'count']; //and make this the current parent (i.e. in the case of a div 'div1')
            };

            this.retrieve_tag = function(tag) { //function to retrieve the opening tag to the corresponding closer
                if (this.tags[tag + 'count']) { //if the openener is not in the Object we ignore it
                    var temp_parent = this.tags.parent; //check to see if it's a closable tag.
                    while (temp_parent) { //till we reach '' (the initial value);
                        if (tag + this.tags[tag + 'count'] === temp_parent) { //if this is it use it
                            break;
                        }
                        temp_parent = this.tags[temp_parent + 'parent']; //otherwise keep on climbing up the DOM Tree
                    }
                    if (temp_parent) { //if we caught something
                        this.indent_level = this.tags[tag + this.tags[tag + 'count']]; //set the indent_level accordingly
                        this.tags.parent = this.tags[temp_parent + 'parent']; //and set the current parent
                    }
                    delete this.tags[tag + this.tags[tag + 'count'] + 'parent']; //delete the closed tags parent reference...
                    delete this.tags[tag + this.tags[tag + 'count']]; //...and the tag itself
                    if (this.tags[tag + 'count'] === 1) {
                        delete this.tags[tag + 'count'];
                    } else {
                        this.tags[tag + 'count']--;
                    }
                }
            };

            this.indent_to_tag = function(tag) {
                // Match the indentation level to the last use of this tag, but don't remove it.
                if (!this.tags[tag + 'count']) {
                    return;
                }
                var temp_parent = this.tags.parent;
                while (temp_parent) {
                    if (tag + this.tags[tag + 'count'] === temp_parent) {
                        break;
                    }
                    temp_parent = this.tags[temp_parent + 'parent'];
                }
                if (temp_parent) {
                    this.indent_level = this.tags[tag + this.tags[tag + 'count']];
                }
            };

            this.get_tag = function(peek) { //function to get a full tag and parse its type
                var input_char = '',
                    content = [],
                    comment = '',
                    space = false,
                    first_attr = true,
                    has_wrapped_attrs = false,
                    tag_start, tag_end,
                    tag_start_char,
                    orig_pos = this.pos,
                    orig_line_char_count = this.line_char_count,
                    is_tag_closed = false,
                    tail;

                peek = peek !== undefined ? peek : false;

                do {
                    if (this.pos >= this.input.length) {
                        if (peek) {
                            this.pos = orig_pos;
                            this.line_char_count = orig_line_char_count;
                        }
                        return content.length ? content.join('') : ['', 'TK_EOF'];
                    }

                    input_char = this.input.charAt(this.pos);
                    this.pos++;

                    if (this.Utils.in_array(input_char, this.Utils.whitespace)) { //don't want to insert unnecessary space
                        space = true;
                        continue;
                    }

                    if (input_char === "'" || input_char === '"') {
                        input_char += this.get_unformatted(input_char);
                        space = true;
                    }

                    if (input_char === '=') { //no space before =
                        space = false;
                    }
                    tail = this.input.substr(this.pos - 1);
                    if (is_wrap_attributes_force_expand_multiline && has_wrapped_attrs && !is_tag_closed && (input_char === '>' || input_char === '/')) {
                        if (tail.match(/^\/?\s*>/)) {
                            space = false;
                            is_tag_closed = true;
                            this.print_newline(false, content);
                            this.print_indentation(content);
                        }
                    }
                    if (content.length && content[content.length - 1] !== '=' && input_char !== '>' && space) {
                        //no space after = or before >
                        var wrapped = this.space_or_wrap(content);
                        var indentAttrs = wrapped && input_char !== '/' && !is_wrap_attributes_force;
                        space = false;

                        if (is_wrap_attributes_force && input_char !== '/') {
                            var force_first_attr_wrap = false;
                            if (is_wrap_attributes_force_expand_multiline && first_attr) {
                                var is_only_attribute = tail.match(/^\S*(="([^"]|\\")*")?\s*\/?\s*>/) !== null;
                                force_first_attr_wrap = !is_only_attribute;
                            }
                            if (!first_attr || force_first_attr_wrap) {
                                this.print_newline(false, content);
                                this.print_indentation(content);
                                indentAttrs = true;
                            }
                        }
                        if (indentAttrs) {
                            has_wrapped_attrs = true;

                            //indent attributes an auto, forced, or forced-align line-wrap
                            var alignment_size = wrap_attributes_indent_size;
                            if (is_wrap_attributes_force_aligned) {
                                alignment_size = content.indexOf(' ') + 1;
                            }

                            for (var count = 0; count < alignment_size; count++) {
                                // only ever further indent with spaces since we're trying to align characters
                                content.push(' ');
                            }
                        }
                        if (first_attr) {
                            for (var i = 0; i < content.length; i++) {
                                if (content[i] === ' ') {
                                    first_attr = false;
                                    break;
                                }
                            }
                        }
                    }

                    if (indent_handlebars && tag_start_char === '<') {
                        // When inside an angle-bracket tag, put spaces around
                        // handlebars not inside of strings.
                        if ((input_char + this.input.charAt(this.pos)) === '{{') {
                            input_char += this.get_unformatted('}}');
                            if (content.length && content[content.length - 1] !== ' ' && content[content.length - 1] !== '<') {
                                input_char = ' ' + input_char;
                            }
                            space = true;
                        }
                    }

                    if (input_char === '<' && !tag_start_char) {
                        tag_start = this.pos - 1;
                        tag_start_char = '<';
                    }

                    if (indent_handlebars && !tag_start_char) {
                        if (content.length >= 2 && content[content.length - 1] === '{' && content[content.length - 2] === '{') {
                            if (input_char === '#' || input_char === '/' || input_char === '!') {
                                tag_start = this.pos - 3;
                            } else {
                                tag_start = this.pos - 2;
                            }
                            tag_start_char = '{';
                        }
                    }

                    this.line_char_count++;
                    content.push(input_char); //inserts character at-a-time (or string)

                    if (content[1] && (content[1] === '!' || content[1] === '?' || content[1] === '%')) { //if we're in a comment, do something special
                        // We treat all comments as literals, even more than preformatted tags
                        // we just look for the appropriate close tag
                        content = [this.get_comment(tag_start)];
                        break;
                    }

                    if (indent_handlebars && content[1] && content[1] === '{' && content[2] && content[2] === '!') { //if we're in a comment, do something special
                        // We treat all comments as literals, even more than preformatted tags
                        // we just look for the appropriate close tag
                        content = [this.get_comment(tag_start)];
                        break;
                    }

                    if (indent_handlebars && tag_start_char === '{' && content.length > 2 && content[content.length - 2] === '}' && content[content.length - 1] === '}') {
                        break;
                    }
                } while (input_char !== '>');

                var tag_complete = content.join('');
                var tag_index;
                var tag_offset;

                // must check for space first otherwise the tag could have the first attribute included, and
                // then not un-indent correctly
                if (tag_complete.indexOf(' ') !== -1) { //if there's whitespace, thats where the tag name ends
                    tag_index = tag_complete.indexOf(' ');
                } else if (tag_complete.indexOf('\n') !== -1) { //if there's a line break, thats where the tag name ends
                    tag_index = tag_complete.indexOf('\n');
                } else if (tag_complete.charAt(0) === '{') {
                    tag_index = tag_complete.indexOf('}');
                } else { //otherwise go with the tag ending
                    tag_index = tag_complete.indexOf('>');
                }
                if (tag_complete.charAt(0) === '<' || !indent_handlebars) {
                    tag_offset = 1;
                } else {
                    tag_offset = tag_complete.charAt(2) === '#' ? 3 : 2;
                }
                var tag_check = tag_complete.substring(tag_offset, tag_index).toLowerCase();
                if (tag_complete.charAt(tag_complete.length - 2) === '/' ||
                    this.Utils.in_array(tag_check, this.Utils.single_token)) { //if this tag name is a single tag type (either in the list or has a closing /)
                    if (!peek) {
                        this.tag_type = 'SINGLE';
                    }
                } else if (indent_handlebars && tag_complete.charAt(0) === '{' && tag_check === 'else') {
                    if (!peek) {
                        this.indent_to_tag('if');
                        this.tag_type = 'HANDLEBARS_ELSE';
                        this.indent_content = true;
                        this.traverse_whitespace();
                    }
                } else if (this.is_unformatted(tag_check, unformatted) ||
                    this.is_unformatted(tag_check, content_unformatted)) {
                    // do not reformat the "unformatted" or "content_unformatted" tags
                    comment = this.get_unformatted('</' + tag_check + '>', tag_complete); //...delegate to get_unformatted function
                    content.push(comment);
                    tag_end = this.pos - 1;
                    this.tag_type = 'SINGLE';
                } else if (tag_check === 'script' &&
                    (tag_complete.search('type') === -1 ||
                        (tag_complete.search('type') > -1 &&
                            tag_complete.search(/\b(text|application|dojo)\/(x-)?(javascript|ecmascript|jscript|livescript|(ld\+)?json|method|aspect)/) > -1))) {
                    if (!peek) {
                        this.record_tag(tag_check);
                        this.tag_type = 'SCRIPT';
                    }
                } else if (tag_check === 'style' &&
                    (tag_complete.search('type') === -1 ||
                        (tag_complete.search('type') > -1 && tag_complete.search('text/css') > -1))) {
                    if (!peek) {
                        this.record_tag(tag_check);
                        this.tag_type = 'STYLE';
                    }
                } else if (tag_check.charAt(0) === '!') { //peek for <! comment
                    // for comments content is already correct.
                    if (!peek) {
                        this.tag_type = 'SINGLE';
                        this.traverse_whitespace();
                    }
                } else if (!peek) {
                    if (tag_check.charAt(0) === '/') { //this tag is a double tag so check for tag-ending
                        this.retrieve_tag(tag_check.substring(1)); //remove it and all ancestors
                        this.tag_type = 'END';
                    } else { //otherwise it's a start-tag
                        this.record_tag(tag_check); //push it on the tag stack
                        if (tag_check.toLowerCase() !== 'html') {
                            this.indent_content = true;
                        }
                        this.tag_type = 'START';
                    }

                    // Allow preserving of newlines after a start or end tag
                    if (this.traverse_whitespace()) {
                        this.space_or_wrap(content);
                    }

                    if (this.Utils.in_array(tag_check, this.Utils.extra_liners)) { //check if this double needs an extra line
                        this.print_newline(false, this.output);
                        if (this.output.length && this.output[this.output.length - 2] !== '\n') {
                            this.print_newline(true, this.output);
                        }
                    }
                }

                if (peek) {
                    this.pos = orig_pos;
                    this.line_char_count = orig_line_char_count;
                }

                return content.join(''); //returns fully formatted tag
            };

            this.get_comment = function(start_pos) { //function to return comment content in its entirety
                // this is will have very poor perf, but will work for now.
                var comment = '',
                    delimiter = '>',
                    matched = false;

                this.pos = start_pos;
                var input_char = this.input.charAt(this.pos);
                this.pos++;

                while (this.pos <= this.input.length) {
                    comment += input_char;

                    // only need to check for the delimiter if the last chars match
                    if (comment.charAt(comment.length - 1) === delimiter.charAt(delimiter.length - 1) &&
                        comment.indexOf(delimiter) !== -1) {
                        break;
                    }

                    // only need to search for custom delimiter for the first few characters
                    if (!matched && comment.length < 10) {
                        if (comment.indexOf('<![if') === 0) { //peek for <![if conditional comment
                            delimiter = '<![endif]>';
                            matched = true;
                        } else if (comment.indexOf('<![cdata[') === 0) { //if it's a <[cdata[ comment...
                            delimiter = ']]>';
                            matched = true;
                        } else if (comment.indexOf('<![') === 0) { // some other ![ comment? ...
                            delimiter = ']>';
                            matched = true;
                        } else if (comment.indexOf('<!--') === 0) { // <!-- comment ...
                            delimiter = '-->';
                            matched = true;
                        } else if (comment.indexOf('{{!--') === 0) { // {{!-- handlebars comment
                            delimiter = '--}}';
                            matched = true;
                        } else if (comment.indexOf('{{!') === 0) { // {{! handlebars comment
                            if (comment.length === 5 && comment.indexOf('{{!--') === -1) {
                                delimiter = '}}';
                                matched = true;
                            }
                        } else if (comment.indexOf('<?') === 0) { // {{! handlebars comment
                            delimiter = '?>';
                            matched = true;
                        } else if (comment.indexOf('<%') === 0) { // {{! handlebars comment
                            delimiter = '%>';
                            matched = true;
                        }
                    }

                    input_char = this.input.charAt(this.pos);
                    this.pos++;
                }

                return comment;
            };

            function tokenMatcher(delimiter) {
                var token = '';

                var add = function(str) {
                    var newToken = token + str.toLowerCase();
                    token = newToken.length <= delimiter.length ? newToken : newToken.substr(newToken.length - delimiter.length, delimiter.length);
                };

                var doesNotMatch = function() {
                    return token.indexOf(delimiter) === -1;
                };

                return {
                    add: add,
                    doesNotMatch: doesNotMatch
                };
            }

            this.get_unformatted = function(delimiter, orig_tag) { //function to return unformatted content in its entirety
                if (orig_tag && orig_tag.toLowerCase().indexOf(delimiter) !== -1) {
                    return '';
                }
                var input_char = '';
                var content = '';
                var space = true;

                var delimiterMatcher = tokenMatcher(delimiter);

                do {

                    if (this.pos >= this.input.length) {
                        return content;
                    }

                    input_char = this.input.charAt(this.pos);
                    this.pos++;

                    if (this.Utils.in_array(input_char, this.Utils.whitespace)) {
                        if (!space) {
                            this.line_char_count--;
                            continue;
                        }
                        if (input_char === '\n' || input_char === '\r') {
                            content += '\n';
                            /*  Don't change tab indention for unformatted blocks.  If using code for html editing, this will greatly affect <pre> tags if they are specified in the 'unformatted array'
                for (var i=0; i<this.indent_level; i++) {
                  content += this.indent_string;
                }
                space = false; //...and make sure other indentation is erased
                */
                            this.line_char_count = 0;
                            continue;
                        }
                    }
                    content += input_char;
                    delimiterMatcher.add(input_char);
                    this.line_char_count++;
                    space = true;

                    if (indent_handlebars && input_char === '{' && content.length && content.charAt(content.length - 2) === '{') {
                        // Handlebars expressions in strings should also be unformatted.
                        content += this.get_unformatted('}}');
                        // Don't consider when stopping for delimiters.
                    }
                } while (delimiterMatcher.doesNotMatch());

                return content;
            };

            this.get_token = function() { //initial handler for token-retrieval
                var token;

                if (this.last_token === 'TK_TAG_SCRIPT' || this.last_token === 'TK_TAG_STYLE') { //check if we need to format javascript
                    var type = this.last_token.substr(7);
                    token = this.get_contents_to(type);
                    if (typeof token !== 'string') {
                        return token;
                    }
                    return [token, 'TK_' + type];
                }
                if (this.current_mode === 'CONTENT') {
                    token = this.get_content();
                    if (typeof token !== 'string') {
                        return token;
                    } else {
                        return [token, 'TK_CONTENT'];
                    }
                }

                if (this.current_mode === 'TAG') {
                    token = this.get_tag();
                    if (typeof token !== 'string') {
                        return token;
                    } else {
                        var tag_name_type = 'TK_TAG_' + this.tag_type;
                        return [token, tag_name_type];
                    }
                }
            };

            this.get_full_indent = function(level) {
                level = this.indent_level + level || 0;
                if (level < 1) {
                    return '';
                }

                return Array(level + 1).join(this.indent_string);
            };

            this.is_unformatted = function(tag_check, unformatted) {
                //is this an HTML5 block-level link?
                if (!this.Utils.in_array(tag_check, unformatted)) {
                    return false;
                }

                if (tag_check.toLowerCase() !== 'a' || !this.Utils.in_array('a', unformatted)) {
                    return true;
                }

                //at this point we have an  tag; is its first child something we want to remain
                //unformatted?
                var next_tag = this.get_tag(true /* peek. */ );

                // test next_tag to see if it is just html tag (no external content)
                var tag = (next_tag || "").match(/^\s*<\s*\/?([a-z]*)\s*[^>]*>\s*$/);

                // if next_tag comes back but is not an isolated tag, then
                // let's treat the 'a' tag as having content
                // and respect the unformatted option
                if (!tag || this.Utils.in_array(tag, unformatted)) {
                    return true;
                } else {
                    return false;
                }
            };

            this.printer = function(js_source, indent_character, indent_size, wrap_line_length, brace_style) { //handles input/output and some other printing functions

                this.input = js_source || ''; //gets the input for the Parser

                // HACK: newline parsing inconsistent. This brute force normalizes the input.
                this.input = this.input.replace(/\r\n|[\r\u2028\u2029]/g, '\n');

                this.output = [];
                this.indent_character = indent_character;
                this.indent_string = '';
                this.indent_size = indent_size;
                this.brace_style = brace_style;
                this.indent_level = 0;
                this.wrap_line_length = wrap_line_length;
                this.line_char_count = 0; //count to see if wrap_line_length was exceeded

                for (var i = 0; i < this.indent_size; i++) {
                    this.indent_string += this.indent_character;
                }

                this.print_newline = function(force, arr) {
                    this.line_char_count = 0;
                    if (!arr || !arr.length) {
                        return;
                    }
                    if (force || (arr[arr.length - 1] !== '\n')) { //we might want the extra line
                        if ((arr[arr.length - 1] !== '\n')) {
                            arr[arr.length - 1] = rtrim(arr[arr.length - 1]);
                        }
                        arr.push('\n');
                    }
                };

                this.print_indentation = function(arr) {
                    for (var i = 0; i < this.indent_level; i++) {
                        arr.push(this.indent_string);
                        this.line_char_count += this.indent_string.length;
                    }
                };

                this.print_token = function(text) {
                    // Avoid printing initial whitespace.
                    if (this.is_whitespace(text) && !this.output.length) {
                        return;
                    }
                    if (text || text !== '') {
                        if (this.output.length && this.output[this.output.length - 1] === '\n') {
                            this.print_indentation(this.output);
                            text = ltrim(text);
                        }
                    }
                    this.print_token_raw(text);
                };

                this.print_token_raw = function(text) {
                    // If we are going to print newlines, truncate trailing
                    // whitespace, as the newlines will represent the space.
                    if (this.newlines > 0) {
                        text = rtrim(text);
                    }

                    if (text && text !== '') {
                        if (text.length > 1 && text.charAt(text.length - 1) === '\n') {
                            // unformatted tags can grab newlines as their last character
                            this.output.push(text.slice(0, -1));
                            this.print_newline(false, this.output);
                        } else {
                            this.output.push(text);
                        }
                    }

                    for (var n = 0; n < this.newlines; n++) {
                        this.print_newline(n > 0, this.output);
                    }
                    this.newlines = 0;
                };

                this.indent = function() {
                    this.indent_level++;
                };

                this.unindent = function() {
                    if (this.indent_level > 0) {
                        this.indent_level--;
                    }
                };
            };
            return this;
        }

        /*_____________________--------------------_____________________*/

        multi_parser = new Parser(); //wrapping functions Parser
        multi_parser.printer(html_source, indent_character, indent_size, wrap_line_length, brace_style); //initialize starting values

        while (true) {
            var t = multi_parser.get_token();
            multi_parser.token_text = t[0];
            multi_parser.token_type = t[1];

            if (multi_parser.token_type === 'TK_EOF') {
                break;
            }

            switch (multi_parser.token_type) {
                case 'TK_TAG_START':
                    multi_parser.print_newline(false, multi_parser.output);
                    multi_parser.print_token(multi_parser.token_text);
                    if (multi_parser.indent_content) {
                        if ((multi_parser.indent_body_inner_html || !multi_parser.token_text.match(/<body(?:.*)>/)) &&
                            (multi_parser.indent_head_inner_html || !multi_parser.token_text.match(/<head(?:.*)>/))) {

                            multi_parser.indent();
                        }

                        multi_parser.indent_content = false;
                    }
                    multi_parser.current_mode = 'CONTENT';
                    break;
                case 'TK_TAG_STYLE':
                case 'TK_TAG_SCRIPT':
                    multi_parser.print_newline(false, multi_parser.output);
                    multi_parser.print_token(multi_parser.token_text);
                    multi_parser.current_mode = 'CONTENT';
                    break;
                case 'TK_TAG_END':
                    //Print new line only if the tag has no content and has child
                    if (multi_parser.last_token === 'TK_CONTENT' && multi_parser.last_text === '') {
                        var tag_name = (multi_parser.token_text.match(/\w+/) || [])[0];
                        var tag_extracted_from_last_output = null;
                        if (multi_parser.output.length) {
                            tag_extracted_from_last_output = multi_parser.output[multi_parser.output.length - 1].match(/(?:<|{{#)\s*(\w+)/);
                        }
                        if (tag_extracted_from_last_output === null ||
                            (tag_extracted_from_last_output[1] !== tag_name && !multi_parser.Utils.in_array(tag_extracted_from_last_output[1], unformatted))) {
                            multi_parser.print_newline(false, multi_parser.output);
                        }
                    }
                    multi_parser.print_token(multi_parser.token_text);
                    multi_parser.current_mode = 'CONTENT';
                    break;
                case 'TK_TAG_SINGLE':
                    // Don't add a newline before elements that should remain unformatted.
                    var tag_check = multi_parser.token_text.match(/^\s*<([a-z-]+)/i);
                    if (!tag_check || !multi_parser.Utils.in_array(tag_check[1], unformatted)) {
                        multi_parser.print_newline(false, multi_parser.output);
                    }
                    multi_parser.print_token(multi_parser.token_text);
                    multi_parser.current_mode = 'CONTENT';
                    break;
                case 'TK_TAG_HANDLEBARS_ELSE':
                    // Don't add a newline if opening {{#if}} tag is on the current line
                    var foundIfOnCurrentLine = false;
                    for (var lastCheckedOutput = multi_parser.output.length - 1; lastCheckedOutput >= 0; lastCheckedOutput--) {
                        if (multi_parser.output[lastCheckedOutput] === '\n') {
                            break;
                        } else {
                            if (multi_parser.output[lastCheckedOutput].match(/{{#if/)) {
                                foundIfOnCurrentLine = true;
                                break;
                            }
                        }
                    }
                    if (!foundIfOnCurrentLine) {
                        multi_parser.print_newline(false, multi_parser.output);
                    }
                    multi_parser.print_token(multi_parser.token_text);
                    if (multi_parser.indent_content) {
                        multi_parser.indent();
                        multi_parser.indent_content = false;
                    }
                    multi_parser.current_mode = 'CONTENT';
                    break;
                case 'TK_TAG_HANDLEBARS_COMMENT':
                    multi_parser.print_token(multi_parser.token_text);
                    multi_parser.current_mode = 'TAG';
                    break;
                case 'TK_CONTENT':
                    multi_parser.print_token(multi_parser.token_text);
                    multi_parser.current_mode = 'TAG';
                    break;
                case 'TK_STYLE':
                case 'TK_SCRIPT':
                    if (multi_parser.token_text !== '') {
                        multi_parser.print_newline(false, multi_parser.output);
                        var text = multi_parser.token_text,
                            _beautifier,
                            script_indent_level = 1;
                        if (multi_parser.token_type === 'TK_SCRIPT') {
                            _beautifier = typeof js_beautify === 'function' && js_beautify;
                        } else if (multi_parser.token_type === 'TK_STYLE') {
                            _beautifier = typeof css_beautify === 'function' && css_beautify;
                        }

                        if (options.indent_scripts === "keep") {
                            script_indent_level = 0;
                        } else if (options.indent_scripts === "separate") {
                            script_indent_level = -multi_parser.indent_level;
                        }

                        var indentation = multi_parser.get_full_indent(script_indent_level);
                        if (_beautifier) {

                            // call the Beautifier if avaliable
                            var Child_options = function() {
                                this.eol = '\n';
                            };
                            Child_options.prototype = options;
                            var child_options = new Child_options();
                            text = _beautifier(text.replace(/^\s*/, indentation), child_options);
                        } else {
                            // simply indent the string otherwise
                            var white = text.match(/^\s*/)[0];
                            var _level = white.match(/[^\n\r]*$/)[0].split(multi_parser.indent_string).length - 1;
                            var reindent = multi_parser.get_full_indent(script_indent_level - _level);
                            text = text.replace(/^\s*/, indentation)
                                .replace(/\r\n|\r|\n/g, '\n' + reindent)
                                .replace(/\s+$/, '');
                        }
                        if (text) {
                            multi_parser.print_token_raw(text);
                            multi_parser.print_newline(true, multi_parser.output);
                        }
                    }
                    multi_parser.current_mode = 'TAG';
                    break;
                default:
                    // We should not be getting here but we don't want to drop input on the floor
                    // Just output the text and move on
                    if (multi_parser.token_text !== '') {
                        multi_parser.print_token(multi_parser.token_text);
                    }
                    break;
            }
            multi_parser.last_token = multi_parser.token_type;
            multi_parser.last_text = multi_parser.token_text;
        }
        var sweet_code = multi_parser.output.join('').replace(/[\r\n\t ]+$/, '');

        // establish end_with_newline
        if (end_with_newline) {
            sweet_code += '\n';
        }

        if (eol !== '\n') {
            sweet_code = sweet_code.replace(/[\n]/g, eol);
        }

        return sweet_code;
    }

    if (true) {
        // Add support for AMD ( https://github.com/amdjs/amdjs-api/wiki/AMD#defineamd-property- )
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, __webpack_require__(13), __webpack_require__(12)], __WEBPACK_AMD_DEFINE_RESULT__ = function(requireamd) {
            var js_beautify = __webpack_require__(13);
            var css_beautify = __webpack_require__(12);

            return {
                html_beautify: function(html_source, options) {
                    return style_html(html_source, options, js_beautify.js_beautify, css_beautify.css_beautify);
                }
            };
        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
        // Add support for CommonJS. Just put this file somewhere on your require.paths
        // and you will be able to `var html_beautify = require("beautify").html_beautify`.
        var js_beautify = require('./beautify.js');
        var css_beautify = require('./beautify-css.js');

        exports.html_beautify = function(html_source, options) {
            return style_html(html_source, options, js_beautify.js_beautify, css_beautify.css_beautify);
        };
    } else if (typeof window !== "undefined") {
        // If we're running a web page and don't have either of the above, add our one global
        window.html_beautify = function(html_source, options) {
            return style_html(html_source, options, window.js_beautify, window.css_beautify);
        };
    } else if (typeof global !== "undefined") {
        // If we don't even have window, try global.
        global.html_beautify = function(html_source, options) {
            return style_html(html_source, options, global.js_beautify, global.css_beautify);
        };
    }

}());

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ng2_auto_complete_1 = __webpack_require__(15);
exports.Ng2AutoComplete = ng2_auto_complete_1.Ng2AutoComplete;
var ng2_auto_complete_module_1 = __webpack_require__(64);
exports.Ng2AutoCompleteModule = ng2_auto_complete_module_1.Ng2AutoCompleteModule;
var ng2_auto_complete_component_1 = __webpack_require__(14);
exports.Ng2AutoCompleteComponent = ng2_auto_complete_component_1.Ng2AutoCompleteComponent;
var ng2_auto_complete_directive_1 = __webpack_require__(22);
exports.Ng2AutoCompleteDirective = ng2_auto_complete_directive_1.Ng2AutoCompleteDirective;
//# sourceMappingURL=index.js.map

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(4);
var forms_1 = __webpack_require__(2);
var ng2_auto_complete_component_1 = __webpack_require__(14);
var ng2_auto_complete_directive_1 = __webpack_require__(22);
var ng2_auto_complete_1 = __webpack_require__(15);
var Ng2AutoCompleteModule = (function () {
    function Ng2AutoCompleteModule() {
    }
    Ng2AutoCompleteModule.forRoot = function () {
        return {
            ngModule: Ng2AutoCompleteModule,
            providers: [ng2_auto_complete_1.Ng2AutoComplete]
        };
    };
    Ng2AutoCompleteModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [common_1.CommonModule, forms_1.FormsModule],
                    declarations: [ng2_auto_complete_component_1.Ng2AutoCompleteComponent, ng2_auto_complete_directive_1.Ng2AutoCompleteDirective],
                    exports: [ng2_auto_complete_component_1.Ng2AutoCompleteComponent, ng2_auto_complete_directive_1.Ng2AutoCompleteDirective],
                    entryComponents: [ng2_auto_complete_component_1.Ng2AutoCompleteComponent]
                },] },
    ];
    /** @nocollapse */
    Ng2AutoCompleteModule.ctorParameters = function () { return []; };
    return Ng2AutoCompleteModule;
}());
exports.Ng2AutoCompleteModule = Ng2AutoCompleteModule;
//# sourceMappingURL=ng2-auto-complete.module.js.map

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ng2_collapsable_component_1 = __webpack_require__(23);
exports.Ng2CollapsableComponent = ng2_collapsable_component_1.Ng2CollapsableComponent;
var ng2_collapsable_module_1 = __webpack_require__(66);
exports.Ng2CollapsableModule = ng2_collapsable_module_1.Ng2CollapsableModule;
//# sourceMappingURL=index.js.map

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(4);
var forms_1 = __webpack_require__(2);
var ng2_collapsable_component_1 = __webpack_require__(23);
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
//# sourceMappingURL=ng2-collapsable.module.js.map

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ng2_datetime_1 = __webpack_require__(9);
exports.Ng2Datetime = ng2_datetime_1.Ng2Datetime;
var ng2_datetime_picker_component_1 = __webpack_require__(16);
exports.Ng2DatetimePickerComponent = ng2_datetime_picker_component_1.Ng2DatetimePickerComponent;
var ng2_datetime_picker_directive_1 = __webpack_require__(24);
exports.Ng2DatetimePickerDirective = ng2_datetime_picker_directive_1.Ng2DatetimePickerDirective;
var ng2_datetime_picker_module_1 = __webpack_require__(68);
exports.Ng2DatetimePickerModule = ng2_datetime_picker_module_1.Ng2DatetimePickerModule;
//# sourceMappingURL=index.js.map

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(2);
var common_1 = __webpack_require__(4);
var ng2_datetime_1 = __webpack_require__(9);
var ng2_datetime_picker_component_1 = __webpack_require__(16);
var ng2_datetime_picker_directive_1 = __webpack_require__(24);
var Ng2DatetimePickerModule = (function () {
    function Ng2DatetimePickerModule() {
    }
    Ng2DatetimePickerModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [common_1.CommonModule, forms_1.FormsModule],
                    declarations: [ng2_datetime_picker_component_1.Ng2DatetimePickerComponent, ng2_datetime_picker_directive_1.Ng2DatetimePickerDirective],
                    exports: [ng2_datetime_picker_component_1.Ng2DatetimePickerComponent, ng2_datetime_picker_directive_1.Ng2DatetimePickerDirective],
                    entryComponents: [ng2_datetime_picker_component_1.Ng2DatetimePickerComponent],
                    providers: [ng2_datetime_1.Ng2Datetime]
                },] },
    ];
    /** @nocollapse */
    Ng2DatetimePickerModule.ctorParameters = [];
    return Ng2DatetimePickerModule;
}());
exports.Ng2DatetimePickerModule = Ng2DatetimePickerModule;
//# sourceMappingURL=ng2-datetime-picker.module.js.map

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(2);
var platform_browser_1 = __webpack_require__(18);
var ng2_infinite_list_directive_1 = __webpack_require__(70);
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
//# sourceMappingURL=index.js.map

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__(0);
var ng2_utils_1 = __webpack_require__(57);
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
//# sourceMappingURL=ng2-infinite-list.directive.js.map

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(4);
var option_builder_1 = __webpack_require__(8);
var geo_coder_1 = __webpack_require__(6);
var navigator_geolocation_1 = __webpack_require__(11);
var config_1 = __webpack_require__(10);
var ng2_map_component_1 = __webpack_require__(1);
var info_window_1 = __webpack_require__(26);
var custom_marker_1 = __webpack_require__(25);
var bicycling_layer_1 = __webpack_require__(27);
var circle_1 = __webpack_require__(28);
var data_layer_1 = __webpack_require__(29);
var directions_renderer_1 = __webpack_require__(30);
var drawing_manager_1 = __webpack_require__(31);
var ground_overlay_1 = __webpack_require__(32);
var heatmap_layer_1 = __webpack_require__(33);
var kml_layer_1 = __webpack_require__(34);
var marker_1 = __webpack_require__(35);
var ng2_map_1 = __webpack_require__(7);
var places_auto_complete_1 = __webpack_require__(36);
var polygon_1 = __webpack_require__(37);
var polyline_1 = __webpack_require__(38);
var street_view_panorama_1 = __webpack_require__(39);
var traffic_layer_1 = __webpack_require__(40);
var transit_layer_1 = __webpack_require__(41);
var COMPONENTS_DIRECTIVES = [
    ng2_map_component_1.Ng2MapComponent, info_window_1.InfoWindow,
    marker_1.Marker, circle_1.Circle, custom_marker_1.CustomMarker, polygon_1.Polygon, info_window_1.InfoWindow, polyline_1.Polyline, ground_overlay_1.GroundOverlay,
    transit_layer_1.TransitLayer, traffic_layer_1.TrafficLayer, heatmap_layer_1.HeatmapLayer, bicycling_layer_1.BicyclingLayer, kml_layer_1.KmlLayer, data_layer_1.DataLayer,
    street_view_panorama_1.StreetViewPanorama, places_auto_complete_1.PlacesAutoComplete, directions_renderer_1.DirectionsRenderer,
    drawing_manager_1.DrawingManager,
];
var Ng2MapModule = (function () {
    function Ng2MapModule() {
    }
    Ng2MapModule.forRoot = function (config) {
        if (config === void 0) { config = {}; }
        return {
            ngModule: Ng2MapModule,
            providers: [
                { provide: config_1.NG_MAP_CONFIG_TOKEN, useValue: config }
            ],
        };
    };
    Ng2MapModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [common_1.CommonModule],
                    declarations: COMPONENTS_DIRECTIVES,
                    exports: [COMPONENTS_DIRECTIVES],
                    providers: [
                        geo_coder_1.GeoCoder,
                        navigator_geolocation_1.NavigatorGeolocation,
                        ng2_map_1.Ng2Map,
                        option_builder_1.OptionBuilder
                    ]
                },] },
    ];
    /** @nocollapse */
    Ng2MapModule.ctorParameters = [];
    return Ng2MapModule;
}());
exports.Ng2MapModule = Ng2MapModule;
//# sourceMappingURL=ng2-map.module.js.map

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ng2_menu_directive_1 = __webpack_require__(44);
exports.Ng2MenuDirective = ng2_menu_directive_1.Ng2MenuDirective;
var ng2_menu_module_1 = __webpack_require__(73);
exports.Ng2MenuModule = ng2_menu_module_1.Ng2MenuModule;
//# sourceMappingURL=index.js.map

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(2);
var platform_browser_1 = __webpack_require__(18);
var ng2_menu_directive_1 = __webpack_require__(44);
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
//# sourceMappingURL=ng2-menu.module.js.map

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(2);
var common_1 = __webpack_require__(4);
var ng2_overlay_manager_1 = __webpack_require__(17);
exports.Ng2OverlayManager = ng2_overlay_manager_1.Ng2OverlayManager;
var ng2_overlay_directive_1 = __webpack_require__(45);
var Ng2OverlayModule = (function () {
    function Ng2OverlayModule() {
    }
    Ng2OverlayModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [common_1.CommonModule, forms_1.FormsModule],
                    declarations: [ng2_overlay_directive_1.Ng2OverlayDirective],
                    providers: [ng2_overlay_manager_1.Ng2OverlayManager],
                    exports: [ng2_overlay_directive_1.Ng2OverlayDirective]
                },] },
    ];
    /** @nocollapse */
    Ng2OverlayModule.ctorParameters = function () { return []; };
    return Ng2OverlayModule;
}());
exports.Ng2OverlayModule = Ng2OverlayModule;
;
//# sourceMappingURL=ng2-overlay.module.js.map

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

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
//# sourceMappingURL=ng2-util.js.map

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__(0), __webpack_require__(2), __webpack_require__(4));
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

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(2);
var common_1 = __webpack_require__(4);
var ng2_overlay_1 = __webpack_require__(5);
var ng2_popup_component_1 = __webpack_require__(49);
exports.Ng2PopupComponent = ng2_popup_component_1.Ng2PopupComponent;
var ng2_message_popup_component_1 = __webpack_require__(48);
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
//# sourceMappingURL=ng2-popup.module.js.map

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(2);
var common_1 = __webpack_require__(4);
var ng2_scrollable_directive_1 = __webpack_require__(51);
exports.Ng2ScrollableDirective = ng2_scrollable_directive_1.Ng2ScrollableDirective;
var Ng2ScrollableModule = (function () {
    function Ng2ScrollableModule() {
    }
    Ng2ScrollableModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [common_1.CommonModule, forms_1.FormsModule],
                    declarations: [ng2_scrollable_directive_1.Ng2ScrollableDirective],
                    exports: [ng2_scrollable_directive_1.Ng2ScrollableDirective]
                },] },
    ];
    /** @nocollapse */
    Ng2ScrollableModule.ctorParameters = function () { return []; };
    return Ng2ScrollableModule;
}());
exports.Ng2ScrollableModule = Ng2ScrollableModule;
//# sourceMappingURL=ng2-scrollable.module.js.map

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ng2_sticky_directive_1 = __webpack_require__(52);
exports.Ng2StickyDirective = ng2_sticky_directive_1.Ng2StickyDirective;
var ng2_sticky_module_1 = __webpack_require__(80);
exports.Ng2StickyModule = ng2_sticky_module_1.Ng2StickyModule;
//# sourceMappingURL=index.js.map

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(2);
var common_1 = __webpack_require__(4);
var ng2_sticky_directive_1 = __webpack_require__(52);
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
    })
], Ng2StickyModule);
exports.Ng2StickyModule = Ng2StickyModule;
//# sourceMappingURL=ng2-sticky.module.js.map

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__(0);
var Ng2UtilsDirective = (function () {
    function Ng2UtilsDirective() {
    }
    return Ng2UtilsDirective;
}()); // dummy directive to allow non-standard tags
Ng2UtilsDirective = __decorate([
    core_1.Directive({
        selector: 'ng2-utils-1, ng2-utils-2, ng2-utils-3, ng2-utils-4, ng2-utils-5,' +
            'ng2-utils-6, ng2-utils-7, ng2-utils-8, ng2-utils-9, ng2-utils-10,' +
            'ng2-utils-11, ng2-utils-12, ng2-utils-13, ng2-utils-14, ng2-utils-15,' +
            'ng2-utils-16, ng2-utils-17, ng2-utils-18, ng2-utils-19, ng2-utils-20'
    }),
    __metadata("design:paramtypes", [])
], Ng2UtilsDirective);
exports.Ng2UtilsDirective = Ng2UtilsDirective;
//# sourceMappingURL=ng2-utils.directive.js.map

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * returns coumputed style of given element
 * @param el
 * @param styleProp
 * @returns {any}
 */
function computedStyle(element, styleProp) {
    var el;
    el = (typeof element === 'string') ? document.querySelector(element) : element;
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
//# sourceMappingURL=computed-style.js.map

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Returns an element is visible within outer element
 * @param innerEl
 * @param outerEl
 * @param adjustment
 * @returns {{top: boolean, bottom: boolean, left: boolean, right: boolean}}
 */
function elementVisible(innerElement, outerElement, adjustment) {
    var innerEl;
    var outerEl;
    innerEl = (typeof innerElement === 'string') ?
        document.querySelector(innerElement) : innerElement;
    outerEl = (typeof outerElement === 'string') ?
        document.querySelector(outerElement) : outerElement;
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
//# sourceMappingURL=element-visible.js.map

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function outerHeight(element) {
    var el;
    (typeof element === 'string') ? (el = document.querySelector(element)) : element;
    var style = getComputedStyle(el);
    return el.offsetHeight +
        parseInt(style.getPropertyValue('margin-top')) +
        parseInt(style.getPropertyValue('margin-bottom'));
}
exports.outerHeight = outerHeight;
//# sourceMappingURL=outer-height.js.map

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function outerWidth(element) {
    var el;
    (typeof element === 'string') ? (el = document.querySelector(element)) : element;
    var style = getComputedStyle(el);
    return el.offsetWidth +
        parseInt(style.getPropertyValue('margin-left')) +
        parseInt(style.getPropertyValue('margin-right'));
}
exports.outerWidth = outerWidth;
//# sourceMappingURL=outer-width.js.map

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * scroll to the selector within the parent selector by scrolling 10 times within 500ms
 * @param selector
 * @param parentSelector
 */
function scrollTo(selector, parentSelector, horizontal, distance) {
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
    var scrollContainerEl = parentElStyle.overflow === 'auto' ? parentEl : document.body;
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
}
exports.scrollTo = scrollTo;
//# sourceMappingURL=scroll-to.js.map

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var scroll_to_1 = __webpack_require__(86);
exports.scrollTo = scroll_to_1.scrollTo;
var element_visible_1 = __webpack_require__(83);
exports.elementVisible = element_visible_1.elementVisible;
var computed_style_1 = __webpack_require__(82);
exports.computedStyle = computed_style_1.computedStyle;
var outer_width_1 = __webpack_require__(85);
exports.outerWidth = outer_width_1.outerWidth;
var outer_height_1 = __webpack_require__(84);
exports.outerHeight = outer_height_1.outerHeight;
var html_code_pipe_1 = __webpack_require__(53);
exports.HtmlCodePipe = html_code_pipe_1.HtmlCodePipe;
var javascript_code_pipe_1 = __webpack_require__(54);
exports.JavascriptCodePipe = javascript_code_pipe_1.JavascriptCodePipe;
var ng2_utils_module_1 = __webpack_require__(88);
exports.Ng2UtilsModule = ng2_utils_module_1.Ng2UtilsModule;
//# sourceMappingURL=index.js.map

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__(0);
var html_code_pipe_1 = __webpack_require__(53);
var javascript_code_pipe_1 = __webpack_require__(54);
var ng2_utils_directive_1 = __webpack_require__(81);
var Ng2UtilsModule = (function () {
    function Ng2UtilsModule() {
    }
    return Ng2UtilsModule;
}());
Ng2UtilsModule = __decorate([
    core_1.NgModule({
        declarations: [
            html_code_pipe_1.HtmlCodePipe,
            javascript_code_pipe_1.JavascriptCodePipe,
            ng2_utils_directive_1.Ng2UtilsDirective
        ],
        exports: [
            html_code_pipe_1.HtmlCodePipe,
            javascript_code_pipe_1.JavascriptCodePipe,
            ng2_utils_directive_1.Ng2UtilsDirective
        ]
    }),
    __metadata("design:paramtypes", [])
], Ng2UtilsModule);
exports.Ng2UtilsModule = Ng2UtilsModule;
//# sourceMappingURL=ng2-utils.module.js.map

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ng2_tab_component_1 = __webpack_require__(55);
exports.Ng2TabComponent = ng2_tab_component_1.Ng2TabComponent;
var ng2_tab_module_1 = __webpack_require__(90);
exports.Ng2TabModule = ng2_tab_module_1.Ng2TabModule;
//# sourceMappingURL=index.js.map

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(2);
var common_1 = __webpack_require__(4);
var ng2_tab_component_1 = __webpack_require__(55);
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
//# sourceMappingURL=ng2-tab.module.js.map

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ng2_tooltip_component_1 = __webpack_require__(56);
exports.Ng2TooltipComponent = ng2_tooltip_component_1.Ng2TooltipComponent;
var ng2_tooltip_overlay_module_1 = __webpack_require__(92);
exports.Ng2TooltipOverlayModule = ng2_tooltip_overlay_module_1.Ng2TooltipOverlayModule;
//# sourceMappingURL=index.js.map

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(2);
var common_1 = __webpack_require__(4);
var ng2_overlay_1 = __webpack_require__(5);
var ng2_tooltip_component_1 = __webpack_require__(56);
var Ng2TooltipOverlayModule = (function () {
    function Ng2TooltipOverlayModule() {
    }
    return Ng2TooltipOverlayModule;
}());
Ng2TooltipOverlayModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule, forms_1.FormsModule, ng2_overlay_1.Ng2OverlayModule],
        declarations: [ng2_tooltip_component_1.Ng2TooltipComponent],
        exports: [ng2_tooltip_component_1.Ng2TooltipComponent]
    })
], Ng2TooltipOverlayModule);
exports.Ng2TooltipOverlayModule = Ng2TooltipOverlayModule;
//# sourceMappingURL=ng2-tooltip-overlay.module.js.map

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__(0), __webpack_require__(2), __webpack_require__(4));
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

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * returns coumputed style of given element
 * @param el
 * @param styleProp
 * @returns {any}
 */
function computedStyle(element, styleProp) {
    var el;
    (typeof element === 'string') ? (el = document.querySelector(element)) : element;
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
//# sourceMappingURL=computed-style.js.map

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Returns an element is visible within outer element
 * @param innerEl
 * @param outerEl
 * @param adjustment
 * @returns {{top: boolean, bottom: boolean, left: boolean, right: boolean}}
 */
function elementVisible(innerElement, outerElement, adjustment) {
    var innerEl;
    var outerEl;
    innerEl = (typeof innerElement === 'string') ?
        document.querySelector(innerElement) : innerElement;
    outerEl = (typeof outerElement === 'string') ?
        document.querySelector(outerElement) : outerElement;
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
//# sourceMappingURL=element-visible.js.map

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function outerHeight(element) {
    var el;
    (typeof element === 'string') ? (el = document.querySelector(element)) : element;
    var style = getComputedStyle(el);
    return el.offsetHeight +
        parseInt(style.getPropertyValue('margin-top')) +
        parseInt(style.getPropertyValue('margin-bottom'));
}
exports.outerHeight = outerHeight;
//# sourceMappingURL=outer-height.js.map

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function outerWidth(element) {
    var el;
    (typeof element === 'string') ? (el = document.querySelector(element)) : element;
    var style = getComputedStyle(el);
    return el.offsetWidth +
        parseInt(style.getPropertyValue('margin-left')) +
        parseInt(style.getPropertyValue('margin-right'));
}
exports.outerWidth = outerWidth;
//# sourceMappingURL=outer-width.js.map

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * scroll to the selector within the parent selector by scrolling 10 times within 500ms
 * @param selector
 * @param parentSelector
 */
function scrollTo(selector, parentSelector, horizontal, distance) {
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
    var scrollContainerEl = parentElStyle.overflow === 'auto' ? parentEl : document.body;
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
}
exports.scrollTo = scrollTo;
//# sourceMappingURL=scroll-to.js.map

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__(0);
var html_code_pipe_1 = __webpack_require__(58);
var javascript_code_pipe_1 = __webpack_require__(59);
var Ng2UtilsModule = (function () {
    function Ng2UtilsModule() {
    }
    return Ng2UtilsModule;
}());
Ng2UtilsModule = __decorate([
    core_1.NgModule({
        declarations: [
            html_code_pipe_1.HtmlCodePipe,
            javascript_code_pipe_1.JavascriptCodePipe
        ],
        exports: [
            html_code_pipe_1.HtmlCodePipe,
            javascript_code_pipe_1.JavascriptCodePipe
        ]
    }),
    __metadata("design:paramtypes", [])
], Ng2UtilsModule);
exports.Ng2UtilsModule = Ng2UtilsModule;
//# sourceMappingURL=ng2-utils.module.js.map

/***/ }),
/* 100 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_100__;

/***/ }),
/* 101 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_101__;

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ng2_ui_module_1 = __webpack_require__(61);
exports.Ng2ScrollableDirective = ng2_ui_module_1.Ng2ScrollableDirective;
exports.Ng2MessagePopupComponent = ng2_ui_module_1.Ng2MessagePopupComponent;
exports.Ng2PopupComponent = ng2_ui_module_1.Ng2PopupComponent;
exports.Ng2OverlayManager = ng2_ui_module_1.Ng2OverlayManager;
exports.Ng2MapComponent = ng2_ui_module_1.Ng2MapComponent;
exports.Ng2UIModule = ng2_ui_module_1.Ng2UIModule;
exports.Ng2MapModule = ng2_ui_module_1.Ng2MapModule;


/***/ })
/******/ ]);
});
//# sourceMappingURL=ng2-ui.umd.js.map