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
//# sourceMappingURL=computed-style.js.map