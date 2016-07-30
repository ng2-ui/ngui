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
//# sourceMappingURL=element-visible.js.map