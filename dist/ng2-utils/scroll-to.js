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
//# sourceMappingURL=scroll-to.js.map