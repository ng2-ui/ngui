export function outerWidth(el: any) {
    var style = getComputedStyle(el);
    
    return el.offsetWidth  +
      parseInt(style.getPropertyValue('marginLeft')) +
      parseInt(style.getPropertyValue('marginRight'));
}
  
