"use strict";
function outerWidth(el) {
    var style = getComputedStyle(el);
    return el.offsetWidth +
        parseInt(style.getPropertyValue('marginLeft')) +
        parseInt(style.getPropertyValue('marginRight'));
}
exports.outerWidth = outerWidth;
//# sourceMappingURL=outer-width.js.map