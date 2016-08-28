"use strict";
var util_1 = require('./util');
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
//# sourceMappingURL=overlay.js.map