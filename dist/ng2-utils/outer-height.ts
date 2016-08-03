export function outerHeight(el: any) {
    var style = getComputedStyle(el);
  
    return el.offsetHeight +
      parseInt(style.getPropertyValue('marginTop')) +
      parseInt(style.getPropertyValue('marginBottom'));
  }
