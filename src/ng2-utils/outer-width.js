"use strict";
function outerWidth(el) {
    var style = getComputedStyle(el);
    return el.offsetWidth +
        parseInt(style.marginLeft) +
        parseInt(style.marginRight);
}
exports.outerWidth = outerWidth;
//# sourceMappingURL=outer-width.js.map