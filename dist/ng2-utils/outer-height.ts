
export function outerHeight(el) {
    var style = getComputedStyle(el);
  
    return el.offsetHeight +
      parseInt(style.marginTop) +
      parseInt(style.marginTop);
  }
