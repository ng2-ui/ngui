"use strict";
function scrollTo(selector) {
    var parentEl, targetEl;
    targetEl = document.querySelector(selector);
    if (!targetEl) {
        throw "Invalid selector " + selector;
    }
    parentEl = targetEl.parentElement;
    do {
        if (parentEl.getAttribute('ng2-scrollable') !== undefined) {
            break;
        }
    } while (parentEl = parentEl.parentElement);
    var parentElStyle = window.getComputedStyle(parentEl);
    parentEl = parentElStyle.overflow === 'auto' ? parentEl : document.body;
    var currentScrollTop = parentEl.scrollTop;
    var targetOffsetTop = targetEl.offsetTop;
    if (parentEl === document.body) {
        var bodyRect = document.body.getBoundingClientRect();
        var targetRect = targetEl.getBoundingClientRect();
        targetOffsetTop = targetRect.top - bodyRect.top;
    }
    var step = (targetOffsetTop - currentScrollTop) / 10;
    (function loop(i) {
        setTimeout(function main() {
            parentEl.scrollTop += step;
            i > 1 && loop(i - 1);
        }, 50);
    }(10));
}
exports.scrollTo = scrollTo;
function isElementPartlyVisible(innerEl, outerEl) {
    var innerRect = innerEl.getBoundingClientRect();
    if (outerEl === window) {
        return innerRect.top > 0 &&
            innerRect.top < window.innerHeight;
    }
    else {
        var outerRect = outerEl.getBoundingClientRect();
        return innerRect.top >= outerRect.top && innerRect.top <= outerRect.bottom;
    }
}
exports.isElementPartlyVisible = isElementPartlyVisible;
function isElementNotVisible(innerEl, outerEl) {
    var innerRect = innerEl.getBoundingClientRect();
    if (outerEl === window) {
        return innerRect.bottom < 0;
    }
    else {
        var outerRect = outerEl.getBoundingClientRect();
        return innerRect.bottom < outerRect.top;
    }
}
exports.isElementNotVisible = isElementNotVisible;
//# sourceMappingURL=util.js.map