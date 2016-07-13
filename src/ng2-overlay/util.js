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
//# sourceMappingURL=util.js.map