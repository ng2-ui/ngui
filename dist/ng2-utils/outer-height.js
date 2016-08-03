"use strict";
function outerHeight(el) {
    var style = getComputedStyle(el);
    return el.offsetHeight +
        parseInt(style.getPropertyValue('marginTop')) +
        parseInt(style.getPropertyValue('marginBottom'));
}
exports.outerHeight = outerHeight;
//# sourceMappingURL=outer-height.js.map